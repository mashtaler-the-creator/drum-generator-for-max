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

if (typeof module !== "undefined") {
  module.exports = {
    indexPatternsByStyle,
    findById,
    findByStyle,
    findByTag,
    loadAllFromDisk,
  };
}
