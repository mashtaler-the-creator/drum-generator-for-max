# Roadmap

Feature plan for the drum generator, ordered by impact vs. effort. Each item
has a definition of done so it can be picked up cold. Sizes are rough:
**S** = a day or two, **M** = about a week, **L** = several weeks.

Shipped so far (v0.7.x): style-researched library (210 patterns, 2 kits),
humanization presets, seeded variations, web UI with in-browser preview and
.mid download, Vermona DRM1 MKIII kit, seamless pattern switching, BPM hold
with style hint, public usage counters, static site on GitHub Pages.

---

## Phase 0 — Plumbing (do first, unblocks everything)

### 0.1 CI + auto-deploy — S
Deploys are currently manual (`build:site` + hand-crafted `gh-pages` commit).
- GitHub Actions on push to `main`: `npm test`, `npm run validate`,
  `node tools/convert-to-drm1.js` (fail if output differs from committed
  `patterns-drm1/` — keeps the DRM1 library in sync), `npm run build:site`,
  deploy `site/` to Pages.
- **Done when:** a pattern edit pushed to `main` is live within ~2 minutes
  with no manual steps.

### 0.2 Multi-file site build — S
`site/index.html` is one inlined file; samples and OG images need real
asset files.
- `build-site.js` emits `site/` as a folder (index.html + `assets/`), copies
  `web/assets/**`, keeps the engine/pattern bundle inlined.
- **Done when:** the Pages deploy serves `assets/…` and the page works with
  no server.

### 0.3 Analytics with sources — S
Counters say "how many", not "from where".
- GoatCounter (free, privacy-friendly) or Plausible; events for `play`,
  `download`, `kit_switch`, `share`.
- Needs the owner's account; keep the Abacus counters as the public footer.
- **Done when:** referrers (Instagram, YouTube, TikTok, direct) are visible
  per day.

---

## Phase 1 — Make it sound and travel (pre-promo)

### 1.1 Real sample kits for preview — M
Replace the synthesized preview with one-shots per role.
- Two kits of one-shots: GM roles (17) and DRM1 roles (10). Legal sources
  only: own recordings (record the DRM1 — it is also the product's
  signature sound) or CC0. **Purchased sample packs cannot be redistributed.**
- Encode as OGG/MP3 (~2–3 MB total budget), lazy-load per kit,
  `decodeAudioData` once, `AudioBufferSourceNode` per hit with velocity →
  gain curve; keep the synth as fallback when assets fail to load.
- Choke pairs keep working (stop the open-hat source at the choke tick).
- **Done when:** Play on the public site plays samples, first-play latency
  under ~300 ms on a warm cache, synth fallback still works offline.

### 1.2 Downloadable Ableton Drum Rack — M
The GM kit as a ready-made rack so ".mid + rack" is a two-drag setup.
- Build the rack in Live from the same one-shots on the documented note
  layout (`docs/drum-rack-setup.md`), Vel sensitivity set, choke group on
  hats; export as a **Live Pack (.alp)** so sample paths survive (an `.adg`
  alone references absolute paths). One manual step in Live per kit version.
- Host the `.alp` in `site/assets/`, "Get the Drum Rack" button next to
  Download.
- **Done when:** fresh Live install → install .alp → drop a downloaded .mid
  → every role sounds on the right pad.

### 1.3 WAV loop export — M
For people who don't work with MIDI, and for shareable audio.
- `OfflineAudioContext` render of the current take with the sample kit
  (depends on 1.1), 16-bit PCM WAV encoder (zero-dep, ~60 lines), same seed
  as the .mid, filename mirrors the .mid.
- Optional: tail handling (render one extra beat, trim to loop length so it
  loops cleanly).
- **Done when:** WAV and MIDI of the same seed line up sample-accurately
  when stacked in a DAW.

### 1.4 Drag-and-drop straight into the DAW — S
Skip the Downloads folder.
- `dragstart` on the Download button sets
  `dataTransfer.setData("DownloadURL", "audio/midi:<name>.mid:<data-url>")`
  (Chromium only; Safari/Firefox keep the click behaviour). Show a small
  "drag me onto a track" hint on hover.
- **Done when:** dragging the button onto a Live/Logic track creates the
  clip in Chrome on macOS and Windows.

### 1.5 Share links (state in URL) — S
Every take addressable; every post links to a specific beat.
- Serialize `{kit, pattern, preset, bars, bpm, density, ghosts, seed}` into
  the URL hash as compact base64url; restore on load; "Copy link" button;
  update the hash on every change (`history.replaceState`).
- Note: this is for convenience, not protection — the static bundle already
  contains the whole library. Anything that must stay private goes through
  a backend (3.2).
- **Done when:** opening a shared link reproduces the exact take (verified
  by identical .mid bytes).

### 1.6 Social preview (OG/Twitter cards) — S
- Static OG image (1200×630) with the wordmark; `og:title/description/image`
  meta; later per-take OG via the backend (3.2).
- **Done when:** a pasted link unfurls with an image in Telegram, Instagram
  DMs and X.

### 1.7 Show the approach in the UI — S
The library's research is invisible in the app.
- Under the grid: the pattern's `_approach` text, its style, and a link to
  `docs/styles/<style>.md` on GitHub (later a rendered page).
- Expose `_approach` via `/api/patterns` and the static meta.
- **Done when:** every pattern shows its one-line approach and source doc.

---

## Phase 2 — Depth

### 2.1 More hardware kits — M (per batch)
DRM1 proved the converter; the niche is empty.
- Kits: Roland TR-8S / TR-8 / TR-6S, Elektron Digitakt / Analog Rytm /
  Model:Cycles, Arturia DrumBrute (Impact), Korg Volca Drum, Akai MPC
  (GM-compatible, mostly a doc), Behringer RD-8/RD-9.
- Generalize `convert-to-drm1.js` into `tools/convert-kit.js <kit>` driven
  by a per-kit remap table in `js/kits.json` (target role, velocity scale,
  choke pairs); kit doc page per device with the factory note table and
  whether MIDI-learn is needed.
- **User mapping editor:** edit note numbers per role in the UI, stored in
  localStorage and in the share link; "download .mid with my map".
- **Done when:** a new kit is a JSON entry + doc, no code; the CI check from
  0.1 keeps converted trees in sync.

### 2.2 Grid editing — M
Tweak before you download; no accounts.
- Click a cell to toggle a hit, drag vertically for velocity, right-click
  to clear; edits are an overlay (role → step → velocity) applied after
  render, so "New variation" keeps them and they survive kit switches where
  the role exists.
- Persist the overlay in the share link and localStorage; downloads (.mid
  and WAV) include edits; "Reset edits".
- **Done when:** an edited take round-trips through a share link and the
  downloaded .mid contains the edits.

### 2.3 Song mode (arrangement) — L
From loop to track structure — the 2026 ask.
- Sections: intro / build / drop / breakdown / outro with per-section bars,
  density, ghost amount, fill probability, optional pattern override
  (e.g. breakdown uses a sparser pattern of the same style).
- Engine: `renderSong(sections)` concatenates section renders with fills
  forced on section boundaries; .mid gets marker meta events per section.
- UI: an arrangement strip above the grid; presets ("8-bar loop",
  "32-bar club", "64-bar track").
- **Done when:** a 64-bar song renders with audible section contrast and
  DAW markers land on the section starts.

### 2.4 Style blending — M
Hybrids (2-step × jungle) as a slider.
- Engine: `blend(patternA, patternB, t)` — per-role velocity crossfade with
  a firing threshold, roles present in only one side fade in/out; result
  is a synthetic pattern that goes through the normal humanization path.
- UI: second pattern selector + blend slider; blend state in the share link.
- **Done when:** t = 0 / 1 reproduce A / B exactly and intermediate values
  produce playable grooves (no orphan hits below velocity 15).

### 2.5 Match a reference — M
"Here's my loop, what's the closest pattern?"
- MIDI drop first: parse the file, build a feature vector (kick/snare step
  histogram, density per role, swing estimate, tempo), nearest-neighbour
  over the library; show the top 5 with a "why" line.
- Audio later (onset detection → the same vector) once the MIDI version is
  useful.
- **Done when:** dropping a .mid exported from the generator finds its own
  pattern as the top match.

### 2.6 Feel templates — S
- Named swing/push presets on top of the feel presets: MPC 54/58/62/66 %,
  "laid-back snare", "pushed hats", "dilla" — implemented as
  `swing` + `rolePushTicks` bundles in `presets.json`.
- **Done when:** the feel dropdown has two tiers (humanization × swing
  template) and the CLI accepts `--feel`.

---

## Phase 3 — Platform

### 3.1 Community patterns — L
- Step 1 (no backend): contributions via pull request; `CONTRIBUTING.md`
  with the pattern brief agents already follow; CI validates and renders a
  preview; curated merge.
- Step 2: in-app "Submit pattern" (from grid edits) → backend queue →
  moderation → library. Voting à la Patternarium once volume justifies it.
- **Done when:** an external contributor's pattern ships without the
  maintainer touching JSON by hand.

### 3.2 Backend (Cloudflare Workers + KV/D1) — M
One small service for everything the static site can't do:
- short share links (`/s/abc123` → state), per-take OG images, first-party
  counters, submission queue (3.1), rate limiting, and **server-side
  rendering of premium content** (style packs, hardware kits) so it never
  lands in the public bundle.
- **Done when:** the static site works unchanged when the backend is down
  (progressive enhancement only).

### 3.3 Accounts (only with 3.1) — M
- Passwordless (magic link / passkey) via the backend; saved edits and
  submissions. Not before community features need it.

### 3.4 Max for Live device + plugin — L
The original goal; the engine is already host-agnostic.
- M4L: `v8` object hosting `engine.js`, pattern library as embedded JSON,
  "Generate" writes the clip via the Live API, kit = the Drum Rack's own
  mapping. Live 12 / Max 8.6+.
- Plugin: JUCE + WebView2/WKWebView hosting the same web UI, MIDI out into
  the DAW track; VST3/AU.
- **Done when:** Generate in Live produces the same notes as the web for
  the same seed.

### 3.5 Style packs — M (per pack)
Each pack = research doc + ~10 approaches + 2 fills + video script,
produced with the same agent pipeline as the current library.
- Queue: footwork/juke (160), amapiano (112), UK drill (140), techno-bass
  / electro (128–135), breakcore (180+), Baltimore/Jersey club (130–140),
  dancehall/afrobeats percussion (100–110).
- **Done when:** a pack drops in as a `patterns/<style>/` folder + doc and
  converts to every kit automatically.

---

## Cross-cutting

- **Custom domain** on Pages (or Cloudflare) before any promo; rename the
  repo to match the product name (GitHub redirects the old URL).
- **License decision** for the repo (all-rights-reserved today).
- **Sample licensing:** ship only own recordings or CC0; keep a
  `web/assets/LICENSES.md`.
- **Accessibility / mobile:** keyboard operation of the grid, touch-friendly
  controls; the page must stay usable at 400 px wide.
- **Performance budget:** first load under 1 MB without samples, under 4 MB
  with one kit; samples lazy-load per kit.

## Suggested order

0.1 → 0.2 → 1.1 → 1.2 → 1.3 → 1.4 → 1.5 → 1.6 → 1.7 → 0.3 → 2.1 → 2.2 →
2.6 → 2.4 → 2.3 → 2.5 → 3.2 → 3.1 → 3.5 → 3.4 → 3.3

Phase 0 and 1 together are roughly a month of focused work and are what the
site needs before the first Instagram/YouTube push.
