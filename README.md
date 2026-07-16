# M4L Drum Generator

Max for Live device that generates MIDI drum parts from a library of
style-typed patterns (jungle, dnb, techno, ...), with randomization on top
(swing, fills, ghost notes, density) so output isn't a dumb loop.

## Status

Early scaffold. Engine logic and pattern schema are testable in plain Node
before wiring into the actual `.maxpat`. Real Max patching (UI, `js` object
wiring, Live API glue) happens inside Max itself — this repo holds the logic
and data, Max holds the shell.

## Structure

- `device/` — the `.maxpat` (Max for Live device), edited in Max
- `js/` — pattern engine logic, runs inside the device's `js` object
- `patterns/<style>/*.json` — pattern library, one file per pattern
- `patterns/schema.json` — JSON schema patterns must satisfy
- `tools/validate-patterns.js` — CLI validator for the pattern library
- `docs/architecture.md` — design notes and roadmap

## Quickstart (engine only, no Max needed yet)

```bash
npm install
node tools/validate-patterns.js
node -e "require('./js/engine').demo()"
```

## Roadmap

1. Pattern schema + validator (done)
2. Engine: load pattern, apply density/swing/fills, emit step-events (in progress)
3. Seed pattern library: 8-10 patterns per style, hand-checked grooves
4. Max patch: `js` object wiring, transport sync, note output
5. Mapping UI: role -> MIDI note picker per drum rack
6. Live API integration: write generated bars into a clip instead of live-only output
7. Markov-style pattern-to-pattern transitions within a style
