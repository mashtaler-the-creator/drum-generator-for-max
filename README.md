# Drum MIDI Generator

Style-tagged drum pattern library + rendering engine that generates MIDI
drum parts (jungle, dnb, techno, ...) with musical randomization on top:
density, swing, ghost notes (snare/hat only), fills, humanization.

Two delivery targets, one engine:

1. **CLI (works now):** render patterns straight into `.mid` files at 480
   PPQ — drag onto a drum rack track in Live, done.
2. **Max for Live device (planned):** same engine hosted in Max's `v8`
   object (Max 8.6+ / Live 12), "Generate" button writes a clip via Live
   API. The legacy `js` object is NOT supported (ES5-only engine).

## Quickstart

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
