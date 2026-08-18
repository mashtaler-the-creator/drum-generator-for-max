#!/usr/bin/env node
// server.js — tiny zero-dependency web UI for the drum generator.
//
// Usage:
//   node web/server.js [--port 8834]
//
// Endpoints:
//   GET /                 the UI
//   GET /api/patterns     pattern list + preset names + role->note mapping
//   GET /api/render       JSON events for in-browser playback
//   GET /api/render.mid   the same render as a downloadable .mid file
//
// Both render endpoints accept the same query params as tools/render.js
// flags: pattern, preset, bars, bpm, density, ghosts, humanize, seed.
// Pass the same seed to both and you download exactly what you heard.

"use strict";

const fs = require("fs");
const http = require("http");
const path = require("path");
const { makeState, render, PPQ } = require("../js/engine");
const { eventsToMidi } = require("../js/midi-writer");
const { loadAllFromDisk, findById, findByStyle } = require("../js/pattern-loader");

const ROOT = path.join(__dirname, "..");
const PORT = (() => {
  const i = process.argv.indexOf("--port");
  return i !== -1 ? parseInt(process.argv[i + 1], 10) : 8834;
})();

function loadJson(rel) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, rel), "utf8"));
}

// Patterns and config are re-read on every request so edits to pattern
// files show up on browser refresh without restarting the server.
function renderFromQuery(q) {
  const patterns = loadAllFromDisk(path.join(ROOT, "patterns"));
  const pattern = findById(patterns, q.get("pattern"));
  if (!pattern) throw new Error(`Pattern "${q.get("pattern")}" not found`);

  const presets = loadJson("js/presets.json");
  const presetName = q.get("preset") || "tight";
  const preset = presets[presetName];
  if (!preset) throw new Error(`Unknown preset "${presetName}"`);

  const overrides = Object.assign({}, preset);
  delete overrides._desc;
  if (q.get("density") !== null) overrides.density = parseFloat(q.get("density"));
  if (q.get("ghosts") !== null) overrides.ghostProbability = parseFloat(q.get("ghosts"));
  if (q.get("humanize") !== null) overrides.humanizeTicks = parseInt(q.get("humanize"), 10);

  const mapping = loadJson("js/mapping-default.json");
  const state = makeState(pattern, mapping, overrides);
  const fillPatterns = findByStyle(patterns, pattern.style).filter(
    (p) => (p.tags || []).includes("fill") && p.id !== pattern.id
  );

  const bars = Math.min(64, Math.max(1, parseInt(q.get("bars") || "8", 10)));
  const bpm = Math.min(300, Math.max(40, parseInt(q.get("bpm") || pattern.bpm || "172", 10)));
  const seed = q.get("seed") !== null ? parseInt(q.get("seed"), 10) : undefined;

  const events = render(state, bars, { fillPatterns, seed });
  return { events, bars, bpm, patternId: pattern.id, presetName };
}

function json(res, code, obj) {
  res.writeHead(code, { "Content-Type": "application/json" });
  res.end(JSON.stringify(obj));
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  try {
    if (url.pathname === "/") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(fs.readFileSync(path.join(__dirname, "index.html")));
    } else if (url.pathname === "/api/patterns") {
      const patterns = loadAllFromDisk(path.join(ROOT, "patterns"));
      const presets = loadJson("js/presets.json");
      json(res, 200, {
        patterns: patterns.map((p) => ({
          id: p.id,
          style: p.style,
          bpm: p.bpm,
          fill: (p.tags || []).includes("fill"),
        })),
        presets: Object.keys(presets).filter((k) => k[0] !== "_"),
        mapping: loadJson("js/mapping-default.json"),
        ppq: PPQ,
      });
    } else if (url.pathname === "/api/render") {
      json(res, 200, Object.assign(renderFromQuery(url.searchParams), { ppq: PPQ }));
    } else if (url.pathname === "/api/render.mid") {
      const r = renderFromQuery(url.searchParams);
      const midi = eventsToMidi(r.events, { bpm: r.bpm });
      const name = `${r.patternId}_${r.bars}bars_${r.bpm}bpm.mid`;
      res.writeHead(200, {
        "Content-Type": "audio/midi",
        "Content-Disposition": `attachment; filename="${name}"`,
      });
      res.end(midi);
    } else {
      json(res, 404, { error: "not found" });
    }
  } catch (err) {
    json(res, 400, { error: err.message });
  }
});

server.listen(PORT, () => {
  console.log(`Drum generator UI: http://localhost:${PORT}`);
});
