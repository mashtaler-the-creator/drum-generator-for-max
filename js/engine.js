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
  ghostVelocityRange: [18, 45],
  preSnareGhostBias: 3,    // multiply ghost odds on the step right before a snare hit
  fillEveryNBars: 4,       // consider a fill on every Nth bar
  fillProbability: 0.5,    // chance the fill actually happens on those bars
  fillRamp: 0,             // 0..1: velocity build through a fill bar (0 = off)
  humanizeTicks: 0,        // +/- random timing jitter in ticks (0 = off)
  anchorRoles: ["kick", "crash"], // roles that stay ON the grid (no timing jitter)
  rolePushTicks: {},       // per-role constant offset, e.g. { snare: 6, hihat: -4 }
  velocityJitter: 0,       // +/- random velocity variation (typical realistic max: 5)
  hatCycleDepth: 0,        // 0..1: hihat hand-cycle emphasis (down-beat loud, off-beats soft)
  backbeatAccent: 0,       // velocity boost for snare hits on beats 2 & 4
  maxSimultaneousHands: 0, // 0 = off; 2 = realistic drummer (kick excluded from count)
  gate: 0.5,               // note length as a fraction of one step
};

// Velocity multipliers for a 4-step hihat hand cycle (down, off, mid, off) —
// scaled by hatCycleDepth. Full depth roughly maps 90 -> 90/65/80/65.
const HAT_CYCLE = [1.0, 0.72, 0.89, 0.72];

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
  const beatSteps = base.stepsPerBar / 4; // steps per quarter note (4/4 assumed)

  for (let bar = 0; bar < bars; bar++) {
    const pattern = pickPatternForBar(state, bar, opts.fillPatterns, rng);
    const isFill = pattern !== state.pattern;
    const barStartTick = bar * base.stepsPerBar * tps;

    for (let step = 0; step < base.stepsPerBar; step++) {
      // Patterns may span multiple bars; index into them cyclically.
      const patLen = pattern.bars * pattern.stepsPerBar;
      const patIdx = (bar * base.stepsPerBar + step) % patLen;
      const gridTick = barStartTick + step * tps + swingTicks(pattern, step);

      // Fill velocity ramp: build energy through the fill bar (90 -> 110 feel).
      const rampScale = isFill && state.fillRamp
        ? 1 - state.fillRamp * 0.15 + state.fillRamp * 0.3 * (step / base.stepsPerBar)
        : 1;

      for (const role of Object.keys(pattern.tracks)) {
        const note = state.mapping[role];
        if (note === undefined) continue;

        let velocity = pattern.tracks[role][patIdx] || 0;

        if (velocity > 0 && shouldFire(velocity, state, rng)) {
          velocity = shapeVelocity(state, role, velocity, step, beatSteps, rampScale, rng);
          events.push({
            role,
            note,
            velocity,
            startTick: hitTick(state, role, gridTick, rng),
            durationTick: stepDur,
          });
        } else if (
          velocity === 0 &&
          state.ghostRoles.indexOf(role) !== -1 &&
          rng() < ghostOdds(state, pattern, role, patIdx)
        ) {
          events.push({
            role,
            note,
            velocity: ghostVelocity(state, rng),
            startTick: hitTick(state, role, gridTick, rng),
            durationTick: stepDur,
          });
        }
      }
    }
  }

  limitHands(events, state);
  applyChokes(events, state);
  events.sort((a, b) => a.startTick - b.startTick || a.note - b.note);
  return events;
}

// --- velocity shaping -------------------------------------------------------
// Order: hat hand-cycle -> backbeat accent -> fill ramp -> jitter -> clamp.
function shapeVelocity(state, role, velocity, step, beatSteps, rampScale, rng) {
  if (state.hatCycleDepth > 0 && (role === "hihat" || role === "ride")) {
    const mult = HAT_CYCLE[step % HAT_CYCLE.length];
    velocity = velocity * (1 - state.hatCycleDepth * (1 - mult));
  }
  if (state.backbeatAccent > 0 && role === "snare") {
    const isBackbeat = step === beatSteps || step === 3 * beatSteps; // beats 2 & 4
    if (isBackbeat) velocity += state.backbeatAccent;
  }
  velocity *= rampScale;
  if (state.velocityJitter > 0) {
    velocity += (rng() * 2 - 1) * state.velocityJitter;
  }
  return Math.max(1, Math.min(127, Math.round(velocity)));
}

// --- timing -----------------------------------------------------------------
// Anchor roles (kick, crash) stay on the grid; others get per-role push/pull
// plus random jitter.
function hitTick(state, role, gridTick, rng) {
  let tick = gridTick;
  const push = state.rolePushTicks[role];
  if (push) tick += push;
  const isAnchor = state.anchorRoles.indexOf(role) !== -1;
  if (!isAnchor && state.humanizeTicks) {
    tick += Math.round((rng() * 2 - 1) * state.humanizeTicks);
  }
  return Math.max(0, tick);
}

// --- ghosts -----------------------------------------------------------------
// The step right before a main snare hit is the classic ghost spot ("suck-in"),
// so it gets boosted odds.
function ghostOdds(state, pattern, role, patIdx) {
  let p = state.ghostProbability;
  if (role === "snare" && pattern.tracks.snare) {
    const len = pattern.bars * pattern.stepsPerBar;
    const next = pattern.tracks.snare[(patIdx + 1) % len] || 0;
    if (next >= state.accentThreshold) p *= state.preSnareGhostBias;
  }
  return Math.min(1, p);
}

// --- limb limiter ------------------------------------------------------------
// A drummer has two hands. Kick is a foot and doesn't count. If more than
// maxSimultaneousHands hand-played notes land on the same tick, keep the
// loudest ones and drop the rest.
function limitHands(events, state) {
  const max = state.maxSimultaneousHands;
  if (!max) return;
  const byTick = {};
  for (const e of events) {
    if (e.role === "kick") continue;
    (byTick[e.startTick] = byTick[e.startTick] || []).push(e);
  }
  for (const tick of Object.keys(byTick)) {
    const group = byTick[tick];
    if (group.length <= max) continue;
    group.sort((a, b) => b.velocity - a.velocity);
    for (const drop of group.slice(max)) {
      const i = events.indexOf(drop);
      if (i !== -1) events.splice(i, 1);
    }
  }
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
    HAT_CYCLE,
    makeState,
    makeRng,
    ticksPerStep,
    swingTicks,
    shouldFire,
    pickPatternForBar,
    shapeVelocity,
    hitTick,
    ghostOdds,
    limitHands,
    render,
  };
}
