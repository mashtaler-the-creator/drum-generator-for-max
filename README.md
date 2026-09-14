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

Pick a style, a section (groove / riser / breakdown / fill) and a pattern,
choose a feel preset, hit **New variation** until you like what you hear,
**Download .mid**, drag the file onto your drum rack track. The style guide
panel at the bottom tells you which sounds and drum machines the style is
built on.
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
- Vermona DRM1 MKIII kit: [docs/vermona-drm1.md](docs/vermona-drm1.md)
- Roadmap: [docs/ROADMAP.md](docs/ROADMAP.md)

## Kits

Two output kits, switchable in the web UI (Kit dropdown) and CLI (`--kit`):

- **GM / Ableton Drum Rack** (default) — 17 roles on the General MIDI map.
- **Vermona DRM1 MKIII** — the whole library re-voiced for the module's
  8 analog channels on its factory MIDI notes (channel 10, no MIDI-learn
  needed). See [docs/vermona-drm1.md](docs/vermona-drm1.md).

## Pattern library — UK bass styles

105 patterns across 11 styles, ~10 construction approaches per style, each
grounded in researched production practice (see the per-style doc for the
approach list and sources):

| Style | BPM | Doc |
|---|---|---|
| UK garage / 2-step (`ukg`) | 130–135 | [docs/styles/ukg.md](docs/styles/ukg.md) |
| Speed garage (`speed_garage`) | 135–140 | [docs/styles/speed_garage.md](docs/styles/speed_garage.md) |
| Bassline / niche (`bassline`) | 138–142 | [docs/styles/bassline.md](docs/styles/bassline.md) |
| Grime (`grime`) | 138–142 | [docs/styles/grime.md](docs/styles/grime.md) |
| Dubstep / UK 140 (`dubstep`) | 138–142 | [docs/styles/dubstep.md](docs/styles/dubstep.md) |
| Future garage (`future_garage`) | 125–140 | [docs/styles/future_garage.md](docs/styles/future_garage.md) |
| UK funky (`ukfunky`) | 128–132 | [docs/styles/ukfunky.md](docs/styles/ukfunky.md) |
| Bass house (`bass_house`) | 125–130 | [docs/styles/bass_house.md](docs/styles/bass_house.md) |
| Jungle (`jungle`) | 160–175 | [docs/styles/jungle.md](docs/styles/jungle.md) |
| Drum & bass (`dnb`) | 170–176 | [docs/styles/dnb.md](docs/styles/dnb.md) |
| Techno (`techno`) | 128–135 | — |

Each pattern carries a `bpm` hint (the web UI and CLI pick it up
automatically) and an `_approach` note explaining the idea behind it.

## Structure

- `js/engine.js` — rendering engine (ticks @ 480 PPQ, durations, chokes)
- `js/midi-writer.js` — zero-dep Standard MIDI File writer
- `js/pattern-loader.js` — pattern lookup helpers, section tags, style guides
- `js/mapping-default.json` — role -> MIDI note (edit per drum rack)
- `patterns/<style>/*.json` — pattern library. Section tags: `"fill"`
  (auto-injected into grooves), `"riser"` (build-up), `"breakdown"`
  (stripped-down section); no section tag = groove
- `styles/<style>.json` — style guide: tempo range, drum DNA, sound
  selection per role, drum machines / sample sources, reference tracks
  (shown in the web UI, groups styles by family)
- `docs/styles/<style>.md` — the full researched write-up per style
- `web/server.js` + `web/index.html` — local web UI (zero-dep Node server,
  Web Audio preview kit, `.mid` download, style guide panel)
- `tools/render.js` — CLI renderer
- `tools/validate-patterns.js` — library + style guide validator
- `tools/style-table.js` — prints the style table below from the library
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
always fires; weaker hits are thinned by the density dial. Optional fields:
`bpm` (tempo hint), `_approach` (the idea + reference tracks, shown in the
UI), `_sources` (URLs the pattern is grounded in). Use at most one section
tag — `fill`, `riser` or `breakdown`.

## Roadmap

1. ~~Engine v2: ticks, durations, chokes, role-scoped ghosts, fills, seeding~~
2. ~~CLI -> .mid renderer + tests~~
3. ~~Seed library: UK bass styles, then the 2025–28 wave (afro house, 3-step,
   amapiano, baile funk, jersey club, phonk, krushclub, dariacore, hard /
   hyper / melodic techno, trance, hard trance, jazz house) with risers,
   breakdowns and per-style sound / drum-machine guides~~
4. Velocity/timing humanization profiles per style
5. M4L device on `v8`: params UI, Live API clip writing
6. Markov transitions between patterns within a style
7. Optional: hook into ableton-mcp so an agent can call the renderer directly
