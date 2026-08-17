# Drum MIDI Generator

Style-tagged drum pattern library + rendering engine that generates MIDI
drum parts (jungle, dnb, techno, ...) with musical randomization on top:
density, swing, ghost notes (snare/hat only), fills, humanization.

Three delivery targets, one engine:

1. **Web UI (works now):** local web app — tweak knobs, audition the beat
   with a built-in synthesized preview kit, download the `.mid`, drop it
   on a drum rack track in Live.
2. **CLI (works now):** render patterns straight into `.mid` files at 480
   PPQ from the terminal.
3. **Max for Live device (planned):** same engine hosted in Max's `v8`
   object (Max 8.6+ / Live 12), "Generate" button writes a clip via Live
   API. The legacy `js` object is NOT supported (ES5-only engine).

## Quickstart (web UI)

```bash
npm start                     # then open http://localhost:8834
```

Pick a pattern and feel preset, hit **New variation** until you like what
you hear, **Download .mid**, drag the file onto your drum rack track.
The seed shown in the UI is baked into the download URL, so the file you
download is exactly the variation you auditioned. Preview sounds are
synthesized approximations — your drum rack samples will sound better.

## Quickstart (CLI)

```bash
npm test                      # engine unit tests
npm run validate              # check pattern library against schema rules
node tools/render.js          # list available patterns
node tools/render.js --pattern jungle_amen_01 --bars 8 --bpm 172 \
    --density 0.85 --ghosts 0.08 --seed 42 --out out/amen.mid
```

`--seed` makes output reproducible; omit it for a fresh variation each run.

## Help

- Step-by-step guide: [docs/HELP.md](docs/HELP.md)
- Пошаговая инструкция (RU): [docs/HELP.ru.md](docs/HELP.ru.md)
- Drum rack setup: [docs/drum-rack-setup.md](docs/drum-rack-setup.md)

## Structure

- `js/engine.js` — rendering engine (ticks @ 480 PPQ, durations, chokes)
- `js/midi-writer.js` — zero-dep Standard MIDI File writer
- `js/pattern-loader.js` — pattern lookup helpers
- `js/mapping-default.json` — role -> MIDI note (edit per drum rack)
- `patterns/<style>/*.json` — pattern library; tag `"fill"` marks fills
- `web/server.js` + `web/index.html` — local web UI (zero-dep Node server,
  Web Audio preview kit, `.mid` download)
- `tools/render.js` — CLI renderer
- `tools/validate-patterns.js` — library validator
- `test/` — engine tests (node:test, no deps)
- `device/` — future `.amxd` / `.maxpat` home

## Pattern format

```json
{
  "id": "dnb_rolling_01",
  "style": "dnb",
  "bars": 1,
  "stepsPerBar": 16,
  "swing": 0.04,
  "tags": ["two-step"],
  "tracks": { "kick": [100,0,...], "snare": [...], "hihat": [...] }
}
```

Velocity 0 = silence. Roles map to notes via `mapping-default.json`, so the
same library works on any drum rack layout. Velocity >= 90 is an accent and
always fires; weaker hits are thinned by the density dial.

## Roadmap

1. ~~Engine v2: ticks, durations, chokes, role-scoped ghosts, fills, seeding~~
2. ~~CLI -> .mid renderer + tests~~
3. Seed library: 8-10 patterns + 2-3 fills per style (jungle, dnb, techno)
4. Velocity/timing humanization profiles per style
5. M4L device on `v8`: params UI, Live API clip writing
6. Markov transitions between patterns within a style
7. Optional: hook into ableton-mcp so an agent can call the renderer directly
