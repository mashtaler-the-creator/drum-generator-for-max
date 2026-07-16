// engine.js (v2)
// Renders a style-tagged drum pattern into concrete note events:
//   { role, note, velocity, startTick, durationTick }
// at PPQ = 480 (ticks per quarter note).
//
// Host-agnostic and deterministic when given a seeded RNG. Runs in Node for
// testing/CLI rendering, and is written to also run inside Max's `v8` object
// (modern JS engine, Max 8.6+ / Live 12). It will NOT run in the legacy
// `js` object (ES5 only) — that is a deliberate choice, see docs.

"use strict";

const PPQ = 480;

// ---------------------------------------------------------------------------
// Config / state
// ---------------------------------------------------------------------------

const DEFAULTS = {
  density: 1.0,            // 0..1, thins out non-accent hits
  accentThreshold: 90,     // velocity >= this always fires regardless of density
  ghostProbability: 0.0,   // 0..1, chance to insert a ghost in a silent step
  ghostRoles: ["snare", "hihat"], // ghosts make musical sense only here
  ghostVelocityRange: [18, 34],
  fillEveryNBars: 4,       // consider a fill on every Nth bar
  fillProbability: 0.5,    // chance the fill actually happens on those bars
  humanizeTicks: 0,        // +/- random timing jitter in ticks (0 = off)
  gate: 0.5,               // note length as a fraction of one step
};

function makeState(pattern, mapping, overrides) {
  const state = Object.assign({}, DEFAULTS, overrides || {});
  state.pattern = pattern;
  state.mapping = mapping;
  return state;
}

// Simple seedable RNG (mulberry32) so renders are reproducible.
function makeRng(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---------------------------------------------------------------------------
// Timing helpers
// ---------------------------------------------------------------------------

function ticksPerStep(pattern) {
  // stepsPerBar of 16 in 4/4 => one step = a 16th = PPQ/4 ticks.
  return (PPQ * 4) / pattern.stepsPerBar;
}

// Swing: delay every 2nd subdivision. pattern.swing is 0..0.5 where
// 0 = straight, ~0.33 = classic triplet feel. Expressed in ticks.
function swingTicks(pattern, stepInBar) {
  const swing = pattern.swing || 0;
  if (stepInBar % 2 === 0) return 0;
  return Math.round(ticksPerStep(pattern) * swing);
}

// ---------------------------------------------------------------------------
// Per-hit decisions
// ---------------------------------------------------------------------------

function shouldFire(velocity, state, rng) {
  if (velocity <= 0) return false;
  if (velocity >= state.accentThreshold) return true;
  return rng() < state.density;
}

function ghostVelocity(state, rng) {
  const [lo, hi] = state.ghostVelocityRange;
  return lo + Math.floor(rng() * (hi - lo + 1));
}

// ---------------------------------------------------------------------------
// Fill selection
// ---------------------------------------------------------------------------
// A fill is just another pattern with the same style, tagged "fill".
// pickPatternForBar decides which pattern supplies the notes for a given bar.

function pickPatternForBar(state, barIndex, fillPatterns, rng) {
  const n = state.fillEveryNBars;
  const isFillBar = n > 0 && barIndex > 0 && (barIndex + 1) % n === 0;
  if (!isFillBar || !fillPatterns || fillPatterns.length === 0) {
    return state.pattern;
  }
  if (rng() >= state.fillProbability) return state.pattern;
  return fillPatterns[Math.floor(rng() * fillPatterns.length)];
}

// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------

/**
 * Render `bars` bars of drums into note events.
 *
 * @param {object} state        from makeState()
 * @param {number} bars         how many bars to render
 * @param {object} [opts]
 * @param {Array}  [opts.fillPatterns]  candidate fill patterns (same style)
 * @param {number} [opts.seed]          RNG seed for reproducible output
 * @returns {Array<{role,note,velocity,startTick,durationTick}>}
 */
function render(state, bars, opts) {
  opts = opts || {};
  const rng = opts.seed !== undefined ? makeRng(opts.seed) : Math.random;
  const events = [];
  const base = state.pattern;
  const tps = ticksPerStep(base);
  const stepDur = Math.max(1, Math.round(tps * state.gate));

  for (let bar = 0; bar < bars; bar++) {
    const pattern = pickPatternForBar(state, bar, opts.fillPatterns, rng);
    const barStartTick = bar * base.stepsPerBar * tps;

    for (let step = 0; step < base.stepsPerBar; step++) {
      // Patterns may span multiple bars; index into them cyclically.
      const patLen = pattern.bars * pattern.stepsPerBar;
      const patIdx = (bar * base.stepsPerBar + step) % patLen;

      const jitter = state.humanizeTicks
        ? Math.round((rng() * 2 - 1) * state.humanizeTicks)
        : 0;
      const startTick =
        barStartTick + step * tps + swingTicks(pattern, step) + jitter;

      for (const role of Object.keys(pattern.tracks)) {
        const note = state.mapping[role];
        if (note === undefined) continue;

        const velocity = pattern.tracks[role][patIdx] || 0;

        if (velocity > 0 && shouldFire(velocity, state, rng)) {
          events.push({
            role,
            note,
            velocity,
            startTick: Math.max(0, startTick),
            durationTick: stepDur,
          });
        } else if (
          velocity === 0 &&
          state.ghostRoles.indexOf(role) !== -1 &&
          rng() < state.ghostProbability
        ) {
          events.push({
            role,
            note,
            velocity: ghostVelocity(state, rng),
            startTick: Math.max(0, startTick),
            durationTick: stepDur,
          });
        }
      }
    }
  }

  applyChokes(events, state);
  events.sort((a, b) => a.startTick - b.startTick || a.note - b.note);
  return events;
}

// Closed hat chokes open hat: when a closed-hat hit starts, any still-ringing
// openHat note gets its duration cut at that point.
function applyChokes(events, state) {
  const openNote = state.mapping.openHat;
  const closedNote = state.mapping.hihat;
  if (openNote === undefined || closedNote === undefined) return;

  const opens = events.filter((e) => e.note === openNote);
  const closes = events.filter((e) => e.note === closedNote);
  for (const o of opens) {
    for (const c of closes) {
      if (c.startTick > o.startTick && c.startTick < o.startTick + o.durationTick) {
        o.durationTick = c.startTick - o.startTick;
      }
    }
  }
}

// ---------------------------------------------------------------------------

if (typeof module !== "undefined") {
  module.exports = {
    PPQ,
    DEFAULTS,
    makeState,
    makeRng,
    ticksPerStep,
    swingTicks,
    shouldFire,
    pickPatternForBar,
    render,
  };
}
