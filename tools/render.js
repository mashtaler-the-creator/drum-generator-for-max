#!/usr/bin/env node
// render.js — render a pattern into a .mid file you can drop onto a drum
// rack track in Live.
//
// Usage:
//   node tools/render.js --pattern jungle_amen_01 --bars 8 --bpm 172 \
//       --density 0.85 --ghosts 0.08 --seed 42 --out out/amen_8bars.mid
//
// All flags optional except --pattern. Fills are picked automatically from
// patterns of the same style tagged "fill".

"use strict";

const fs = require("fs");
const path = require("path");
const { makeState, render } = require("../js/engine");
const { eventsToMidi } = require("../js/midi-writer");
const { loadAllFromDisk, findById, findByStyle } = require("../js/pattern-loader");

function arg(name, fallback) {
  const i = process.argv.indexOf("--" + name);
  return i !== -1 && process.argv[i + 1] !== undefined
    ? process.argv[i + 1]
    : fallback;
}

function main() {
  const ROOT = path.join(__dirname, "..");
  const patterns = loadAllFromDisk(path.join(ROOT, "patterns"));

  const id = arg("pattern");
  if (!id) {
    console.log("Available patterns:");
    for (const p of patterns) {
      console.log(`  ${p.id}  [${p.style}]${(p.tags || []).includes("fill") ? " (fill)" : ""}`);
    }
    console.log("\nUsage: node tools/render.js --pattern <id> [--preset tight|breaks|machine] [--bars 8] [--bpm 172] [--density 0.85] [--ghosts 0.08] [--humanize 6] [--hat-cycle 0.6] [--backbeat 8] [--vel-jitter 4] [--seed 42] [--out file.mid]");
    process.exit(1);
  }

  const pattern = findById(patterns, id);
  if (!pattern) {
    console.error(`Pattern "${id}" not found.`);
    process.exit(1);
  }

  const mapping = JSON.parse(
    fs.readFileSync(path.join(ROOT, "js", "mapping-default.json"), "utf8")
  );

  const bars = parseInt(arg("bars", "8"), 10);
  const bpm = parseInt(arg("bpm", String(pattern.bpm || 172)), 10);
  const seedArg = arg("seed");

  // Preset first, explicit flags override it.
  const presets = JSON.parse(
    fs.readFileSync(path.join(ROOT, "js", "presets.json"), "utf8")
  );
  const presetName = arg("preset", "tight");
  const preset = presets[presetName];
  if (!preset) {
    console.error(`Unknown preset "${presetName}". Available: ${Object.keys(presets).filter((k) => k[0] !== "_").join(", ")}`);
    process.exit(1);
  }
  const overrides = Object.assign({}, preset, {
    density: parseFloat(arg("density", "1.0")),
  });
  delete overrides._desc;
  if (arg("ghosts") !== undefined) overrides.ghostProbability = parseFloat(arg("ghosts"));
  if (arg("humanize") !== undefined) overrides.humanizeTicks = parseInt(arg("humanize"), 10);
  if (arg("hat-cycle") !== undefined) overrides.hatCycleDepth = parseFloat(arg("hat-cycle"));
  if (arg("backbeat") !== undefined) overrides.backbeatAccent = parseInt(arg("backbeat"), 10);
  if (arg("vel-jitter") !== undefined) overrides.velocityJitter = parseFloat(arg("vel-jitter"));

  const state = makeState(pattern, mapping, overrides);

  const fillPatterns = findByStyle(patterns, pattern.style).filter(
    (p) => (p.tags || []).includes("fill") && p.id !== pattern.id
  );

  const events = render(state, bars, {
    fillPatterns,
    seed: seedArg !== undefined ? parseInt(seedArg, 10) : undefined,
  });

  const midi = eventsToMidi(events, { bpm });
  const out = arg("out", `${id}_${bars}bars.mid`);
  fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true });
  fs.writeFileSync(out, midi);
  console.log(`Wrote ${events.length} notes (${bars} bars @ ${bpm} bpm, preset: ${presetName}) -> ${out}`);
  if (fillPatterns.length) {
    console.log(`Fill candidates used: ${fillPatterns.map((p) => p.id).join(", ")}`);
  }
}

main();
