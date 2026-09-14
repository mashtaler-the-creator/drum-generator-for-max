#!/usr/bin/env node
// Validates every kit's pattern tree (patterns/, patterns-drm1/, ...) against
// schema.json, plus the style guides under styles/<style>.json.
// Usage: node tools/validate-patterns.js

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const PATTERNS_DIR = path.join(ROOT, "patterns");
const STYLES_DIR = path.join(ROOT, "styles");
const SCHEMA_PATH = path.join(PATTERNS_DIR, "schema.json");

// Section tags are mutually exclusive: the engine auto-injects "fill" patterns
// into grooves, so a riser or breakdown must never also carry "fill".
const SECTION_TAGS = ["fill", "riser", "breakdown"];
const ID_RE = /^[a-z0-9_]+$/;
const STEPS_PER_BAR = [8, 16, 32];
// Every style is meant to carry a full set of sections (fills stay optional —
// not every genre uses them). Shortfalls are reported, not fatal: the library
// grows style by style and a partial style is still usable.
const TARGET = { groove: 10, riser: 5, breakdown: 5 };
const GUIDE_REQUIRED = ["style", "name", "family", "bpm", "summary", "sounds", "machines", "doc"];
const GUIDE_FAMILIES = ["house", "techno", "trance", "uk-bass", "breaks", "latin", "african", "club", "internet"];

function loadJSON(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

// Minimal hand-rolled validator (no external deps). Covers the checks that
// actually matter for this project: required fields, types, array length
// consistency with bars * stepsPerBar, roles that exist in the kit's mapping,
// id/filename/folder agreement, section-tag exclusivity.
function validatePattern(pattern, filePath, ctx, errors) {
  const rel = path.relative(ROOT, filePath);
  const required = ["id", "style", "bars", "stepsPerBar", "tracks"];
  for (const field of required) {
    if (!(field in pattern)) {
      errors.push(`${rel}: missing required field "${field}"`);
    }
  }

  if (typeof pattern.id === "string") {
    if (!ID_RE.test(pattern.id)) errors.push(`${rel}: id "${pattern.id}" must match ${ID_RE}`);
    if (pattern.id !== path.basename(filePath, ".json")) {
      errors.push(`${rel}: id "${pattern.id}" does not match the filename`);
    }
    // Ids are unique within a kit; the same id across kits is the same pattern
    // re-voiced, which is exactly what tools/convert-to-drm1.js produces.
    if (ctx.seenIds.has(pattern.id)) {
      errors.push(`${rel}: duplicate id "${pattern.id}" (also in ${ctx.seenIds.get(pattern.id)})`);
    } else {
      ctx.seenIds.set(pattern.id, rel);
    }
  }
  if (pattern.style !== undefined && pattern.style !== ctx.styleDir) {
    errors.push(`${rel}: style "${pattern.style}" does not match folder "${ctx.styleDir}"`);
  }
  if (pattern.stepsPerBar !== undefined && !STEPS_PER_BAR.includes(pattern.stepsPerBar)) {
    errors.push(`${rel}: stepsPerBar ${pattern.stepsPerBar} must be one of ${STEPS_PER_BAR.join("/")}`);
  }
  if (pattern.bars !== undefined && (!Number.isInteger(pattern.bars) || pattern.bars < 1)) {
    errors.push(`${rel}: bars must be a positive integer`);
  }
  if (pattern.swing !== undefined && (typeof pattern.swing !== "number" || pattern.swing < 0 || pattern.swing > 0.5)) {
    errors.push(`${rel}: swing must be a number in 0..0.5`);
  }
  if (pattern.bpm !== undefined && (!Number.isInteger(pattern.bpm) || pattern.bpm < 40 || pattern.bpm > 300)) {
    errors.push(`${rel}: bpm must be an integer in 40..300`);
  }

  const tags = pattern.tags || [];
  if (!Array.isArray(tags) || tags.some((t) => typeof t !== "string")) {
    errors.push(`${rel}: tags must be an array of strings`);
  } else {
    const sections = SECTION_TAGS.filter((t) => tags.includes(t));
    if (sections.length > 1) {
      errors.push(`${rel}: section tags are mutually exclusive, found ${sections.join(" + ")}`);
    }
  }

  if (pattern.bars && pattern.stepsPerBar) {
    const expectedLen = pattern.bars * pattern.stepsPerBar;
    const tracks = pattern.tracks || {};
    if (Object.keys(tracks).length === 0) errors.push(`${rel}: tracks is empty`);
    let anyHit = false;
    for (const [role, arr] of Object.entries(tracks)) {
      if (!(role in ctx.mapping)) {
        errors.push(`${rel}: unknown role "${role}" (not in js/${ctx.mappingFile})`);
      }
      if (!Array.isArray(arr)) {
        errors.push(`${rel}: track "${role}" is not an array`);
        continue;
      }
      if (arr.length !== expectedLen) {
        errors.push(
          `${rel}: track "${role}" has ${arr.length} steps, expected ${expectedLen} (bars*stepsPerBar)`
        );
      }
      for (const v of arr) {
        if (!Number.isInteger(v) || v < 0 || v > 127) {
          errors.push(`${rel}: track "${role}" has out-of-range velocity ${v}`);
          break;
        }
        if (v > 0) anyHit = true;
      }
    }
    if (!anyHit) errors.push(`${rel}: pattern has no hits at all`);
  }
}

function validateGuide(guide, filePath, styleDirs, errors) {
  const rel = path.relative(ROOT, filePath);
  for (const field of GUIDE_REQUIRED) {
    if (!(field in guide)) errors.push(`${rel}: missing required field "${field}"`);
  }
  const base = path.basename(filePath, ".json");
  if (guide.style !== undefined && guide.style !== base) {
    errors.push(`${rel}: style "${guide.style}" does not match the filename`);
  }
  if (!styleDirs.includes(base)) {
    errors.push(`${rel}: no patterns/${base}/ folder exists for this guide`);
  }
  if (guide.family !== undefined && !GUIDE_FAMILIES.includes(guide.family)) {
    errors.push(`${rel}: family "${guide.family}" must be one of ${GUIDE_FAMILIES.join(", ")}`);
  }
  if (
    guide.bpm !== undefined &&
    (!Array.isArray(guide.bpm) || guide.bpm.length !== 2 || !guide.bpm.every(Number.isInteger) || guide.bpm[0] > guide.bpm[1])
  ) {
    errors.push(`${rel}: bpm must be [min, max] integers`);
  }
  if (guide.sounds !== undefined && (typeof guide.sounds !== "object" || Array.isArray(guide.sounds))) {
    errors.push(`${rel}: sounds must be an object of role -> text`);
  }
  if (guide.machines !== undefined && !Array.isArray(guide.machines)) {
    errors.push(`${rel}: machines must be an array`);
  }
  if (typeof guide.doc === "string" && !fs.existsSync(path.join(ROOT, guide.doc))) {
    errors.push(`${rel}: doc "${guide.doc}" does not exist`);
  }
}

function main() {
  loadJSON(SCHEMA_PATH); // loaded for reference/future ajv swap
  const errors = [];
  let count = 0;

  // Every kit's pattern tree (patterns/, patterns-drm1/, ...) gets validated
  // against that kit's own role mapping.
  const kits = loadJSON(path.join(ROOT, "js", "kits.json"));
  const seen = new Set();
  const gmStyles = [];
  const gmCounts = {};

  for (const [kitName, kit] of Object.entries(kits)) {
    const patternsRoot = path.join(ROOT, kit.patternsDir);
    if (seen.has(patternsRoot) || !fs.existsSync(patternsRoot)) continue;
    seen.add(patternsRoot);

    const mapping = loadJSON(path.join(ROOT, "js", kit.mapping));
    const seenIds = new Map(); // per kit: the same id in another kit is the same pattern re-voiced
    const styles = fs
      .readdirSync(patternsRoot)
      .filter((f) => fs.statSync(path.join(patternsRoot, f)).isDirectory());

    for (const style of styles) {
      const dir = path.join(patternsRoot, style);
      const ctx = { styleDir: style, mapping, mappingFile: kit.mapping, seenIds };
      const counts = { groove: 0, fill: 0, riser: 0, breakdown: 0 };
      for (const file of fs.readdirSync(dir)) {
        if (!file.endsWith(".json")) continue;
        count++;
        const filePath = path.join(dir, file);
        try {
          const pattern = loadJSON(filePath);
          validatePattern(pattern, filePath, ctx, errors);
          const tags = Array.isArray(pattern.tags) ? pattern.tags : [];
          counts[SECTION_TAGS.find((t) => tags.includes(t)) || "groove"]++;
        } catch (e) {
          errors.push(`${path.relative(ROOT, filePath)}: JSON parse error - ${e.message}`);
        }
      }
      if (kitName === "gm") {
        gmStyles.push(style);
        gmCounts[style] = counts;
      }
    }
  }

  let guideCount = 0;
  if (fs.existsSync(STYLES_DIR)) {
    for (const file of fs.readdirSync(STYLES_DIR)) {
      if (!file.endsWith(".json")) continue;
      guideCount++;
      const filePath = path.join(STYLES_DIR, file);
      try {
        validateGuide(loadJSON(filePath), filePath, gmStyles, errors);
      } catch (e) {
        errors.push(`${path.relative(ROOT, filePath)}: JSON parse error - ${e.message}`);
      }
    }
  }

  console.log(
    `Checked ${count} pattern file(s) across ${seen.size} kit(s), ${gmStyles.length} style(s), ${guideCount} style guide(s).`
  );
  const width = Math.max(...gmStyles.map((s) => s.length), 1);
  const incomplete = [];
  for (const style of gmStyles.sort()) {
    const c = gmCounts[style];
    const short = Object.entries(TARGET)
      .filter(([section, want]) => c[section] < want)
      .map(([section, want]) => `${want - c[section]} ${section}`);
    const noGuide = fs.existsSync(path.join(STYLES_DIR, style + ".json")) ? "" : " · no style guide";
    if (short.length || noGuide) incomplete.push({ style, short, noGuide: !!noGuide });
    const flag = short.length || noGuide ? `  ← needs ${[...short, noGuide && "style guide"].filter(Boolean).join(", ")}` : "";
    console.log(
      `  ${style.padEnd(width)}  groove ${String(c.groove).padStart(2)}  riser ${String(c.riser).padStart(2)}  breakdown ${String(c.breakdown).padStart(2)}  fill ${String(c.fill).padStart(2)}${flag}`
    );
  }
  if (incomplete.length) {
    console.log(
      `\n${incomplete.length} of ${gmStyles.length} style(s) incomplete (target: ${TARGET.groove} grooves, ${TARGET.riser} risers, ${TARGET.breakdown} breakdowns, fills optional).`
    );
  } else {
    console.log(`\nAll ${gmStyles.length} styles complete.`);
  }
  if (errors.length) {
    console.log(`\n${errors.length} problem(s) found:\n`);
    errors.forEach((e) => console.log(" - " + e));
    process.exitCode = 1;
  } else {
    console.log("All patterns valid.");
  }
}

main();
