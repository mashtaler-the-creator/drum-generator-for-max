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

function loadPatterns(dirName) {
  const dir = path.join(ROOT, dirName);
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
  const kitsCfg = JSON.parse(read("js/kits.json"));
  const styles = loadStyleGuides();
  const kits = {};
  let total = 0;
  for (const [name, cfg] of Object.entries(kitsCfg)) {
    const patterns = loadPatterns(cfg.patternsDir);
    total += patterns.length;
    kits[name] = {
      label: cfg.label,
      mapping: JSON.parse(read("js/" + cfg.mapping)),
      patterns,
    };
  }
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
    styles: ${JSON.stringify(styles)},
    kits: ${JSON.stringify(kits)},
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

  // Social/SEO meta with absolute URLs (only meaningful on the public site).
  const site = JSON.parse(read("web/site.json"));
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  const meta = `
<meta name="description" content="${esc(site.description)}">
<link rel="canonical" href="${site.url}">
<meta property="og:type" content="website">
<meta property="og:url" content="${site.url}">
<meta property="og:title" content="${esc(site.title)}">
<meta property="og:description" content="${esc(site.description)}">
<meta property="og:image" content="${site.url}assets/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(site.title)}">
<meta name="twitter:description" content="${esc(site.description)}">
<meta name="twitter:image" content="${site.url}assets/og.png">
<script>window.SITE = ${JSON.stringify(site)};</script>`;
  html = html.replace(/(<meta name="viewport"[^>]*>)/, "$1" + meta);

  // site/ is a folder now: index.html + copied web/assets/** (OG image,
  // later sample kits and the Live Pack).
  const outDir = path.join(ROOT, "site");
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html);
  const assetsSrc = path.join(ROOT, "web", "assets");
  let assetCount = 0;
  if (fs.existsSync(assetsSrc)) {
    fs.cpSync(assetsSrc, path.join(outDir, "assets"), { recursive: true });
    assetCount = fs.readdirSync(assetsSrc).length;
  }
  fs.writeFileSync(path.join(outDir, ".nojekyll"), "");
  const kb = (fs.statSync(path.join(outDir, "index.html")).size / 1024).toFixed(0);
  console.log(
    `site/: index.html ${kb} KB (${total} patterns, ${Object.keys(kits).length} kits, ${Object.keys(styles).length} style guides) + ${assetCount} asset(s)`
  );
}

main();
