// engine.js
// Host-agnostic drum pattern engine. Pure functions over plain data so it
// can run identically inside Node (for testing) or inside a Max `js`
// object (Max's js engine supports this subset fine: no async/await used,
// no Node-only globals in the hot path).

/**
 * @typedef {Object} EngineState
 * @property {Object} pattern      active pattern object (see schema.json)
 * @property {Object} mapping      role -> MIDI note
 * @property {number} density     0-1, probability multiplier for non-accent hits
 * @property {number} fillEveryNBars
 * @property {number} fillProbability 0-1
 * @property {number} ghostProbability 0-1, chance to insert a ghost note in a gap
 */

function defaultState(pattern, mapping) {
  return {
    pattern,
    mapping,
    density: 1.0,
    fillEveryNBars: 4,
    fillProbability: 0.3,
    ghostProbability: 0.0,
  };
}

// Returns swing offset in steps (fractional) for a given step index.
function swingOffset(pattern, stepIndex) {
  const swing = pattern.swing || 0;
  const isOffBeat = stepIndex % 2 === 1;
  return isOffBeat ? swing : 0;
}

// Decide whether a scheduled hit at `velocity` should actually fire,
// given the density dial. Accents (velocity >= 90) always fire; weaker
// hits are thinned out as density drops.
function shouldFire(velocity, density, rng) {
  if (velocity <= 0) return false;
  if (velocity >= 90) return true;
  return rng() < density;
}

// Maybe insert a ghost note into a currently-silent step.
function maybeGhost(ghostProbability, rng) {
  return rng() < ghostProbability;
}

/**
 * Compute the note events for a single step across all tracks.
 * @param {EngineState} state
 * @param {number} stepIndex  absolute step index (0-based, wraps per pattern length)
 * @param {function():number} rng  injectable RNG for testability (default Math.random)
 * @returns {Array<{role:string, note:number, velocity:number, offset:number}>}
 */
function stepEvents(state, stepIndex, rng = Math.random) {
  const { pattern, mapping, density, ghostProbability } = state;
  const len = pattern.bars * pattern.stepsPerBar;
  const idx = ((stepIndex % len) + len) % len;
  const offset = swingOffset(pattern, idx);
  const events = [];

  for (const role of Object.keys(pattern.tracks)) {
    const velocity = pattern.tracks[role][idx] || 0;
    const note = mapping[role];
    if (note === undefined) continue; // unmapped role, skip silently

    if (velocity > 0) {
      if (shouldFire(velocity, density, rng)) {
        events.push({ role, note, velocity, offset });
      }
    } else if (maybeGhost(ghostProbability, rng)) {
      events.push({ role, note, velocity: 25, offset });
    }
  }
  return events;
}

/**
 * Decide, at the start of a bar, whether a fill variant should be used.
 * Expects fill patterns to be tagged "fill" and share the base pattern's
 * style; caller supplies the candidate fill pattern.
 */
function shouldTriggerFill(state, barIndex, rng = Math.random) {
  if (barIndex === 0) return false;
  if (barIndex % state.fillEveryNBars !== 0) return false;
  return rng() < state.fillProbability;
}

function demo() {
  const pattern = require("../patterns/jungle/jungle_amen_01.json");
  const mapping = require("./mapping-default.json");
  const state = defaultState(pattern, mapping);
  state.density = 0.85;
  state.ghostProbability = 0.05;

  const totalSteps = pattern.bars * pattern.stepsPerBar;
  for (let i = 0; i < totalSteps; i++) {
    const ev = stepEvents(state, i);
    if (ev.length) {
      console.log(
        `step ${i}:`,
        ev.map((e) => `${e.role}@${e.velocity}`).join(", ")
      );
    }
  }
}

if (typeof module !== "undefined") {
  module.exports = {
    defaultState,
    swingOffset,
    shouldFire,
    maybeGhost,
    stepEvents,
    shouldTriggerFill,
    demo,
  };
}
