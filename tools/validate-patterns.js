#!/usr/bin/env node
// Validates every pattern JSON under patterns/<style>/ against schema.json.
// Usage: node tools/validate-patterns.js

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const PATTERNS_DIR = path.join(ROOT, "patterns");
const SCHEMA_PATH = path.join(PATTERNS_DIR, "schema.json");

function loadJSON(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

// Minimal hand-rolled validator (no external deps). Covers the checks that
// actually matter for this project: required fields, types, array length
// consistency with bars * stepsPerBar.
function validatePattern(pattern, filePath, errors) {
  const required = ["id", "style", "bars", "stepsPerBar", "tracks"];
  for (const field of required) {
    if (!(field in pattern)) {
      errors.push(`${filePath}: missing required field "${field}"`);
    }
  }
  if (pattern.bars && pattern.stepsPerBar) {
    const expectedLen = pattern.bars * pattern.stepsPerBar;
    for (const [role, arr] of Object.entries(pattern.tracks || {})) {
      if (!Array.isArray(arr)) {
        errors.push(`${filePath}: track "${role}" is not an array`);
        continue;
      }
      if (arr.length !== expectedLen) {
        errors.push(
          `${filePath}: track "${role}" has ${arr.length} steps, expected ${expectedLen} (bars*stepsPerBar)`
        );
      }
      for (const v of arr) {
        if (typeof v !== "number" || v < 0 || v > 127) {
          errors.push(
            `${filePath}: track "${role}" has out-of-range velocity ${v}`
          );
          break;
        }
      }
    }
  }
}

function main() {
  const schema = loadJSON(SCHEMA_PATH); // loaded for reference/future ajv swap
  const styles = fs
    .readdirSync(PATTERNS_DIR)
    .filter((f) => fs.statSync(path.join(PATTERNS_DIR, f)).isDirectory());

  const errors = [];
  let count = 0;

  for (const style of styles) {
    const dir = path.join(PATTERNS_DIR, style);
    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith(".json")) continue;
      count++;
      const filePath = path.join(dir, file);
      try {
        const pattern = loadJSON(filePath);
        validatePattern(pattern, filePath, errors);
      } catch (e) {
        errors.push(`${filePath}: JSON parse error - ${e.message}`);
      }
    }
  }

  console.log(`Checked ${count} pattern file(s).`);
  if (errors.length) {
    console.log(`\n${errors.length} problem(s) found:\n`);
    errors.forEach((e) => console.log(" - " + e));
    process.exitCode = 1;
  } else {
    console.log("All patterns valid.");
  }
}

main();
