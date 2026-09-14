#!/usr/bin/env node
// build-site.js — bundle the web UI into a single static index.html that
// needs no server: the engine, MIDI writer, presets, mapping, and the whole
// pattern library are inlined, rendering and .mid generation happen in the
// browser. Output: site/index.html — host it on any static hosting.
//
// Usage: node tools/build-site.js

"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const read = (rel) => fs.readFileSync(path.join(ROOT, rel), "utf8");

// CommonJS-in-browser shim: each module source runs with a local `module`
// and a `require` that resolves from the registry.
function wrapModule(name, src) {
  return `__mods[${JSON.stringify(name)}] = (function () {
  var module = { exports: {} };
  (function (module, require, exports) {
${src}
  })(module, __require, module.exports);
  return module.exports;
})();`;
}

function loadPatterns() {
  const dir = path.join(ROOT, "patterns");
  const out = [];
  for (const style of fs.readdirSync(dir)) {
    const styleDir = path.join(dir, style);
    if (!fs.statSync(styleDir).isDirectory()) continue;
    for (const f of fs.readdirSync(styleDir).filter((f) => f.endsWith(".json"))) {
      out.push(JSON.parse(fs.readFileSync(path.join(styleDir, f), "utf8")));
    }
  }
  return out;
}

function loadStyleGuides() {
  const dir = path.join(ROOT, "styles");
  const out = {};
  if (!fs.existsSync(dir)) return out;
  for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".json"))) {
    const guide = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
    out[guide.style || path.basename(f, ".json")] = guide;
  }
  return out;
}

function main() {
  const patterns = loadPatterns();
  const styles = loadStyleGuides();
  const bundle = `window.STATIC_DATA = (function () {
  var __mods = {};
  function __require(p) { return __mods[p.replace(/^\\.\\//, "")]; }
${wrapModule("engine", read("js/engine.js"))}
${wrapModule("midi-writer", read("js/midi-writer.js"))}
${wrapModule("pattern-loader", read("js/pattern-loader.js"))}
  return {
    lib: {
      engine: __mods["engine"],
      eventsToMidi: __mods["midi-writer"].eventsToMidi,
      sectionOf: __mods["pattern-loader"].sectionOf,
      fillsFor: __mods["pattern-loader"].fillsFor,
      PPQ: __mods["engine"].PPQ,
    },
    presets: ${read("js/presets.json").trim()},
    mapping: ${read("js/mapping-default.json").trim()},
    styles: ${JSON.stringify(styles)},
    patterns: ${JSON.stringify(patterns)},
  };
})();
`;

  let html = read("web/index.html");
  const marker = "<script>";
  const at = html.indexOf(marker);
  if (at === -1) throw new Error("no <script> tag found in web/index.html");
  html =
    html.slice(0, at) +
    "<script>\n" + bundle + "</script>\n" +
    html.slice(at);

  const outDir = path.join(ROOT, "site");
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html);
  const kb = (fs.statSync(path.join(outDir, "index.html")).size / 1024).toFixed(0);
  console.log(`site/index.html written: ${patterns.length} patterns, ${Object.keys(styles).length} style guides bundled, ${kb} KB`);
}

main();
