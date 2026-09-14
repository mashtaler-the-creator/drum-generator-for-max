#!/usr/bin/env node
// style-table.js — print the README style table from styles/<style>.json and
// the pattern counts per section, so the README never drifts from the library.
// Usage: node tools/style-table.js   (paste the output into README.md)

"use strict";

const path = require("path");
const { loadAllFromDisk, loadStyleGuidesFromDisk, sectionOf } = require("../js/pattern-loader");

const ROOT = path.join(__dirname, "..");
const patterns = loadAllFromDisk(path.join(ROOT, "patterns"));
const guides = loadStyleGuidesFromDisk(path.join(ROOT, "styles"));

const counts = {};
for (const p of patterns) {
  const c = (counts[p.style] = counts[p.style] || { groove: 0, fill: 0, riser: 0, breakdown: 0 });
  c[sectionOf(p)]++;
}

const styles = Object.keys(counts).sort((a, b) => {
  const fa = (guides[a] || {}).family || "zz", fb = (guides[b] || {}).family || "zz";
  return fa.localeCompare(fb) || a.localeCompare(b);
});

console.log("| Family | Style | BPM | Grooves | Risers | Breakdowns | Fills | Doc |");
console.log("|---|---|---|---|---|---|---|---|");
for (const s of styles) {
  const g = guides[s] || {};
  const c = counts[s];
  const bpm = Array.isArray(g.bpm) ? `${g.bpm[0]}–${g.bpm[1]}` : "—";
  const doc = g.doc ? `[${path.basename(g.doc)}](${g.doc})` : "—";
  console.log(`| ${g.family || "—"} | ${g.name || s} (\`${s}\`) | ${bpm} | ${c.groove} | ${c.riser} | ${c.breakdown} | ${c.fill} | ${doc} |`);
}
const total = Object.values(counts).reduce((a, c) => a + c.groove + c.fill + c.riser + c.breakdown, 0);
console.log(`\n${total} patterns across ${styles.length} styles.`);
