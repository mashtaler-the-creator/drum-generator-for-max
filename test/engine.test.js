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
  assert.strictEqual(buf.slice(0, 4).toString("ascii"), "MThd");
  assert.strictEqual(buf.readUInt16BE(8), 0); // format 0
  assert.strictEqual(buf.readUInt16BE(12), PPQ);
  assert.strictEqual(buf.slice(14, 18).toString("ascii"), "MTrk");
  const trackLen = buf.readUInt32BE(18);
  assert.strictEqual(buf.length, 14 + 8 + trackLen);
  // ends with end-of-track meta
  assert.deepStrictEqual([...buf.slice(buf.length - 3)], [0xff, 0x2f, 0x00]);
});

test("rng is stable across calls with same seed", () => {
  const r1 = makeRng(123);
  const r2 = makeRng(123);
  for (let i = 0; i < 100; i++) assert.strictEqual(r1(), r2());
});
