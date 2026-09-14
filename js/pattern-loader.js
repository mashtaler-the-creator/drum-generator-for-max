// pattern-loader.js
// Loads and validates pattern JSON files from patterns/<style>/*.json
// Works both in Node (fs) and can be adapted for Max's js object (which
// has its own file-reading via the Max `File` object) — the parsing/lookup
// logic below is host-agnostic; only the raw file read differs.

function indexPatternsByStyle(patternObjects) {
  const byStyle = {};
  for (const p of patternObjects) {
    if (!byStyle[p.style]) byStyle[p.style] = [];
    byStyle[p.style].push(p);
  }
  return byStyle;
}

function findById(patternObjects, id) {
  return patternObjects.find((p) => p.id === id) || null;
}

function findByStyle(patternObjects, style) {
  return patternObjects.filter((p) => p.style === style);
}

function findByTag(patternObjects, tag) {
  return patternObjects.filter((p) => (p.tags || []).includes(tag));
}

// Section tags decide how a pattern is used: "fill" patterns get auto-injected
// into grooves by the engine, "riser" and "breakdown" are rendered on their
// own as build-up / stripped-down sections. Anything else is a groove.
const SECTION_TAGS = ["fill", "riser", "breakdown"];

function sectionOf(pattern) {
  const tags = pattern.tags || [];
  return SECTION_TAGS.find((t) => tags.includes(t)) || "groove";
}

function fillsFor(patternObjects, pattern) {
  return patternObjects.filter(
    (p) => p.style === pattern.style && sectionOf(p) === "fill" && p.id !== pattern.id
  );
}

// Node-only convenience loader. Not used inside the Max js object.
function loadAllFromDisk(baseDir) {
  const fs = require("fs");
  const path = require("path");
  const styles = fs.readdirSync(baseDir).filter((f) =>
    fs.statSync(path.join(baseDir, f)).isDirectory()
  );
  const patterns = [];
  for (const style of styles) {
    const dir = path.join(baseDir, style);
    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith(".json")) continue;
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      patterns.push(JSON.parse(raw));
    }
  }
  return patterns;
}

// Node-only: style guides (styles/<style>.json) — tempo range, sound selection
// and drum-machine recommendations per style. Returns { style: guide }.
function loadStyleGuidesFromDisk(stylesDir) {
  const fs = require("fs");
  const path = require("path");
  const guides = {};
  if (!fs.existsSync(stylesDir)) return guides;
  for (const file of fs.readdirSync(stylesDir)) {
    if (!file.endsWith(".json")) continue;
    const guide = JSON.parse(fs.readFileSync(path.join(stylesDir, file), "utf8"));
    guides[guide.style || path.basename(file, ".json")] = guide;
  }
  return guides;
}

if (typeof module !== "undefined") {
  module.exports = {
    SECTION_TAGS,
    indexPatternsByStyle,
    findById,
    findByStyle,
    findByTag,
    sectionOf,
    fillsFor,
    loadAllFromDisk,
    loadStyleGuidesFromDisk,
  };
}
