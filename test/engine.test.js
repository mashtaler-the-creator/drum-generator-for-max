"use strict";

const test = require("node:test");
const assert = require("node:assert");
const path = require("path");
const {
  PPQ,
  makeState,
  makeRng,
  ticksPerStep,
  swingTicks,
  render,
} = require("../js/engine");
const { eventsToMidi } = require("../js/midi-writer");

const pattern = require(path.join(__dirname, "..", "patterns", "jungle", "jungle_amen_01.json"));
const fill = require(path.join(__dirname, "..", "patterns", "jungle", "jungle_fill_01.json"));
const mapping = require(path.join(__dirname, "..", "js", "mapping-default.json"));

test("ticksPerStep: 16 steps per bar = 16th notes = PPQ/4", () => {
  assert.strictEqual(ticksPerStep(pattern), PPQ / 4);
});

test("swing delays only off-steps", () => {
  assert.strictEqual(swingTicks(pattern, 0), 0);
  assert.ok(swingTicks(pattern, 1) > 0);
  assert.strictEqual(swingTicks(pattern, 2), 0);
});

test("full density renders every programmed hit", () => {
  const state = makeState(pattern, mapping, { density: 1.0 });
  const events = render(state, pattern.bars, { seed: 1 });
  const programmed = Object.values(pattern.tracks)
    .flat()
    .filter((v) => v > 0).length;
  assert.strictEqual(events.length, programmed);
});

test("density 0 keeps only accents (velocity >= 90)", () => {
  const state = makeState(pattern, mapping, { density: 0 });
  const events = render(state, pattern.bars, { seed: 1 });
  assert.ok(events.length > 0);
  for (const e of events) {
    assert.ok(e.velocity >= 90, `non-accent leaked: ${e.role}@${e.velocity}`);
  }
});

test("ghosts appear only on ghost roles", () => {
  const state = makeState(pattern, mapping, {
    density: 1.0,
    ghostProbability: 1.0,
    ghostRoles: ["snare"],
  });
  const events = render(state, pattern.bars, { seed: 7 });
  const ghosts = events.filter((e) => e.velocity < 40);
  assert.ok(ghosts.length > 0, "expected ghosts with probability 1");
  for (const g of ghosts) {
    assert.strictEqual(g.role, "snare");
  }
});

test("seeded render is deterministic", () => {
  const state = makeState(pattern, mapping, { density: 0.5, ghostProbability: 0.2 });
  const a = render(state, 8, { seed: 42 });
  const b = render(state, 8, { seed: 42 });
  assert.deepStrictEqual(a, b);
});

test("fill pattern replaces base pattern on fill bars", () => {
  const state = makeState(pattern, mapping, {
    fillEveryNBars: 2,
    fillProbability: 1.0,
  });
  // bar indices 1, 3, 5, 7 are fill bars with fillEveryNBars=2
  const events = render(state, 4, { fillPatterns: [fill], seed: 3 });
  const tps = ticksPerStep(pattern);
  const bar2 = events.filter(
    (e) => e.startTick >= 1 * 16 * tps && e.startTick < 2 * 16 * tps
  );
  // the fill has a distinctive snare roll at the end of the bar
  const lateSnares = bar2.filter(
    (e) => e.role === "snare" && e.startTick >= 1 * 16 * tps + 12 * tps
  );
  assert.ok(lateSnares.length >= 3, "expected snare roll from fill pattern");
});

test("midi writer produces a structurally valid SMF", () => {
  const state = makeState(pattern, mapping);
  const events = render(state, 2, { seed: 1 });
  const buf = eventsToMidi(events, { bpm: 172 });
  // eventsToMidi returns a Uint8Array (browser-compatible), so inspect it
  // with DataView rather than Buffer methods.
  const ascii = (from, to) => String.fromCharCode(...buf.slice(from, to));
  const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  assert.strictEqual(ascii(0, 4), "MThd");
  assert.strictEqual(view.getUint16(8), 0); // format 0
  assert.strictEqual(view.getUint16(12), PPQ);
  assert.strictEqual(ascii(14, 18), "MTrk");
  const trackLen = view.getUint32(18);
  assert.strictEqual(buf.length, 14 + 8 + trackLen);
  // ends with end-of-track meta
  assert.deepStrictEqual([...buf.slice(buf.length - 3)], [0xff, 0x2f, 0x00]);
});

test("rng is stable across calls with same seed", () => {
  const r1 = makeRng(123);
  const r2 = makeRng(123);
  for (let i = 0; i < 100; i++) assert.strictEqual(r1(), r2());
});

// ---------------------------------------------------------------------------
// v0.3: humanization settings
// ---------------------------------------------------------------------------

const { HAT_CYCLE, shapeVelocity, hitTick, limitHands } = require("../js/engine");

test("hat cycle: off-beats softer than down-beats at full depth", () => {
  const state = makeState(pattern, mapping, { hatCycleDepth: 1.0 });
  const rngOff = () => 0.5; // neutral, no jitter configured anyway
  const down = shapeVelocity(state, "hihat", 90, 0, 4, 1, rngOff);
  const off = shapeVelocity(state, "hihat", 90, 1, 4, 1, rngOff);
  assert.ok(off < down, `expected off-beat (${off}) < down-beat (${down})`);
  assert.ok(off >= 60 && off <= 70, `off-beat should land near 65, got ${off}`);
});

test("backbeat accent boosts snare on beats 2 and 4 only", () => {
  const state = makeState(pattern, mapping, { backbeatAccent: 10 });
  const rngOff = () => 0.5;
  // stepsPerBar=16 -> beatSteps=4; backbeats are steps 4 and 12
  assert.strictEqual(shapeVelocity(state, "snare", 100, 4, 4, 1, rngOff), 110);
  assert.strictEqual(shapeVelocity(state, "snare", 100, 12, 4, 1, rngOff), 110);
  assert.strictEqual(shapeVelocity(state, "snare", 100, 0, 4, 1, rngOff), 100);
  assert.strictEqual(shapeVelocity(state, "kick", 100, 4, 4, 1, rngOff), 100);
});

test("anchor roles get no timing jitter, others do", () => {
  const state = makeState(pattern, mapping, { humanizeTicks: 10 });
  const rngMax = () => 0.999;
  assert.strictEqual(hitTick(state, "kick", 1000, rngMax), 1000);
  assert.notStrictEqual(hitTick(state, "snare", 1000, rngMax), 1000);
});

test("rolePushTicks shifts a role by a constant amount", () => {
  const state = makeState(pattern, mapping, {
    rolePushTicks: { snare: 5, hihat: -4 },
  });
  const rng = () => 0.5;
  assert.strictEqual(hitTick(state, "snare", 1000, rng), 1005);
  assert.strictEqual(hitTick(state, "hihat", 1000, rng), 996);
  assert.strictEqual(hitTick(state, "kick", 1000, rng), 1000);
});

test("limb limiter drops quietest hand notes above the limit", () => {
  const state = makeState(pattern, mapping, { maxSimultaneousHands: 2 });
  const events = [
    { role: "kick", note: 36, velocity: 100, startTick: 0, durationTick: 10 },
    { role: "snare", note: 38, velocity: 100, startTick: 0, durationTick: 10 },
    { role: "hihat", note: 42, velocity: 70, startTick: 0, durationTick: 10 },
    { role: "perc", note: 39, velocity: 40, startTick: 0, durationTick: 10 },
  ];
  limitHands(events, state);
  assert.strictEqual(events.length, 3); // kick + 2 loudest hands
  assert.ok(!events.find((e) => e.role === "perc"), "quietest hand note dropped");
  assert.ok(events.find((e) => e.role === "kick"), "kick never dropped");
});

test("velocity jitter stays within bounds and inside 1..127", () => {
  const state = makeState(pattern, mapping, { velocityJitter: 5 });
  const rngHigh = () => 0.999;
  const v = shapeVelocity(state, "snare", 126, 0, 4, 1, rngHigh);
  assert.ok(v <= 127 && v >= 1);
});

test("seeded render still deterministic with all humanization on", () => {
  const state = makeState(pattern, mapping, {
    velocityJitter: 5,
    humanizeTicks: 8,
    hatCycleDepth: 0.7,
    backbeatAccent: 8,
    ghostProbability: 0.1,
    fillRamp: 1,
    maxSimultaneousHands: 2,
  });
  const a = render(state, 8, { fillPatterns: [fill], seed: 99 });
  const b = render(state, 8, { fillPatterns: [fill], seed: 99 });
  assert.deepStrictEqual(a, b);
});
