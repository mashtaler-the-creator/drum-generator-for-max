#!/usr/bin/env node
// convert-to-drm1.js — rebuild the GM pattern library for the Vermona DRM1
// MKIII's 8 instrument channels (10 notes). Reads patterns/, writes
// patterns-drm1/ with the same ids/styles but tracks re-voiced onto the
// module's roles:
//
//   kick   -> KICK          snare      -> SNARE        perc  -> CLAP
//   hihat  -> HH2 closed    openHat    -> HH2 open
//   ride   -> HH1 closed*   crash      -> HH1 open (cymbal)
//   tomHigh/congaHigh -> DRUM 1        tomMid/tomLow/congaLow -> DRUM 2
//   rim/cowbell/clave -> MULTI
//   shaker -> HH2 closed*   tambourine -> HH1 closed*
//
// * texture roles land on a hat voice at reduced velocity so they read as
//   ghosts, not accents. Collisions on one step keep the loudest hit.
//
// Usage: node tools/convert-to-drm1.js

"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "patterns");
const DST = path.join(ROOT, "patterns-drm1");

// role -> [drm1 role, velocity scale]
const REMAP = {
  kick: ["kick", 1],
  snare: ["snare", 1],
  perc: ["clap", 1],
  hihat: ["hihat", 1],
  openHat: ["openHat", 1],
  ride: ["hh1Closed", 1],
  crash: ["hh1Open", 1],
  tomHigh: ["drum1", 1],
  congaHigh: ["drum1", 0.95],
  tomMid: ["drum2", 1],
  tomLow: ["drum2", 1],
  congaLow: ["drum2", 0.95],
  rim: ["multi", 1],
  cowbell: ["multi", 0.95],
  clave: ["multi", 0.9],
  shaker: ["hihat", 0.8],
  tambourine: ["hh1Closed", 0.8],
};

function convert(pattern) {
  const len = pattern.bars * pattern.stepsPerBar;
  const tracks = {};
  for (const [role, arr] of Object.entries(pattern.tracks)) {
    const m = REMAP[role];
    if (!m) continue;
    const [target, scale] = m;
    if (!tracks[target]) tracks[target] = new Array(len).fill(0);
    for (let i = 0; i < len; i++) {
      const v = Math.round((arr[i] || 0) * scale);
      if (v > tracks[target][i]) tracks[target][i] = v; // loudest hit wins
    }
  }
  return Object.assign({}, pattern, {
    kit: "drm1",
    _approach: (pattern._approach ? pattern._approach + " " : "") +
      "(re-voiced for the Vermona DRM1 MKIII's 8 channels)",
    tracks,
  });
}

function main() {
  fs.rmSync(DST, { recursive: true, force: true });
  let count = 0;
  for (const style of fs.readdirSync(SRC)) {
    const styleDir = path.join(SRC, style);
    if (!fs.statSync(styleDir).isDirectory()) continue;
    fs.mkdirSync(path.join(DST, style), { recursive: true });
    for (const f of fs.readdirSync(styleDir).filter((f) => f.endsWith(".json"))) {
      const p = JSON.parse(fs.readFileSync(path.join(styleDir, f), "utf8"));
      const out = convert(p);
      // compact track arrays on one line each, like the source library
      const json = JSON.stringify(out, null, 2).replace(
        /(\[)([\s\d,]+?)(\])/g,
        (_, a, body, b) => a + body.replace(/\s+/g, "") + b
      );
      fs.writeFileSync(path.join(DST, style, f), json + "\n");
      count++;
    }
  }
  console.log(`patterns-drm1/: ${count} patterns converted`);
}

main();
