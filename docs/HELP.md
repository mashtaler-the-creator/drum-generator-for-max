# Help: how to use this

Generates drum MIDI parts. A style-tagged pattern library (jungle, dnb,
techno) plus an engine that turns a pattern into a living part: swing,
hi-hat dynamics, ghost notes, fills, human timing. Output is a `.mid` file
you drag onto a drum rack track in Ableton.

---

## Step 0. What you need

- Node.js 18+ (check with `node --version`)
- Ableton Live (any version with Drum Rack)
- This repository, locally

No install step — there are no dependencies. Clone it and go.

## Step 1. Build the drum rack (once, ~15 min)

1. MIDI track -> drag an empty **Drum Rack** onto it (Instruments -> Drum Rack)
2. Drop your samples onto the pads, on these exact notes:

   | Pad | Sound |
   |-----|-------|
   | C1  | kick (short, punchy) |
   | C#1 | rimshot |
   | D1  | snare (body + crack) |
   | D#1 | clap |
   | F#1 | closed hat |
   | A#1 | open hat |
   | C#2 | crash |
   | D#2 | ride |

3. **Choke for the hats:** the `I-O` button on the rack -> Choke column ->
   set `1` on BOTH the closed and open hat
4. **Velocity in every pad:** Simpler -> Controls tab -> the `Vel` knob
   under Volume -> set to 70-100%. Without this the engine's dynamics
   flatten out. This is the single most important setting
5. Save the rack (right-click the title bar -> Save)

Toms/congas/shakers are optional — notes are in `drum-rack-setup.md`. Add
them once you start using patterns that need those roles.

## Step 2. Generate a part (each time, ~1 min)

### Option A: web UI (recommended)

```bash
cd path/to/m4l-drum-generator
npm start
```

Open http://localhost:8834 in your browser:

1. Pick a **pattern** and a **feel preset**, set bars/BPM/density.
2. Hit **▶ Play** to audition. Don't judge the sound quality — the preview
   kit is synthesized from scratch in the browser; your drum rack samples
   will sound much better. Judge the groove.
3. Hit **🎲 New variation** until you like the take. The seed shown on the
   right identifies the exact variation you're hearing.
4. Hit **⬇ Download .mid** — you get exactly the variation you auditioned
   (same seed) — and drag the file from Downloads onto the drum rack track.

**Style / Section / Pattern.** Pick the style first (grouped by family:
house, techno, uk-bass, african, club, internet...), then the section:

- **grooves** — the main beat; fills of the same style get dropped in
  automatically every few bars
- **risers / build-ups** — 2–4 bar drum builds that lead into a drop
  (snare rolls accelerating, hats doubling, kick dropping out). Render
  them for the bars right before your drop; no fills are injected
- **breakdowns** — stripped-down sections (kick gone or half-time,
  percussion carrying the groove) for the part before a build-up
- **fills** — the one-bar turnarounds on their own, if you want to place
  them by hand

Under the pattern list you get the pattern's *approach* note (the idea and
reference tracks), and at the bottom of the page the **style guide**:
tempo range, drum DNA, which sounds to pick for each role, which drum
machines / sample sources define the style, reference tracks, and a link
to the full write-up in `docs/styles/`.

### Option B: terminal

```bash
cd path/to/m4l-drum-generator

# list available patterns
node tools/render.js

# render 8 bars of jungle at 172 BPM
node tools/render.js --pattern jungle_amen_01 --bars 8 --bpm 172 \
    --preset breaks --out out/beat.mid
```

Drag `out/beat.mid` from Finder onto the drum rack track. Done.

## Step 3. The knobs

| Flag | What it does | Example |
|------|-------------|---------|
| `--preset` | character: `breaks` (live jungle), `tight` (clean session drummer), `machine` (robotic, for techno) | `--preset breaks` |
| `--bars` | length in bars | `--bars 16` |
| `--bpm` | file tempo | `--bpm 174` |
| `--density` | density 0..1: lower = fewer non-accent notes | `--density 0.8` |
| `--ghosts` | ghost-note probability 0..1 | `--ghosts 0.1` |
| `--seed` | RNG seed: with it the result repeats, without it each run is a new variation | `--seed 42` |
| `--out` | output file path | `--out out/beat.mid` |

Fine-tuning on top of a preset: `--humanize <ticks>`, `--hat-cycle <0..1>`,
`--backbeat <boost>`, `--vel-jitter <0..7>`.

Workflow is simple: render without `--seed`, listen; if it doesn't land,
run again for a different take. When it lands, drop it in the project.

## Step 4. Add your own patterns

1. Copy any file from `patterns/<style>/` and edit it
2. Format: velocity arrays per role, 0 = silence, length = bars × stepsPerBar
3. Velocity guide: main snares 100-115, hats 60-95, anything below 70 is
   ghost territory. Velocity >= 90 is an accent — it won't drop out at low
   density
4. Section tags in `tags` (use at most one): `"fill"` makes the pattern a
   fill — the engine drops it in every N bars automatically; `"riser"` and
   `"breakdown"` mark self-contained build-up / stripped-down sections that
   render as-is (no fills injected). Anything else is a groove
5. Optional `"_approach"` (shown in the UI) and `"_sources"` (URLs the
   pattern is grounded in) — both ignored by the engine
6. A new style is just a new folder `patterns/<style>/`; add
   `styles/<style>.json` (tempo range, sound selection, drum machines,
   references, doc link) so the UI shows the style guide and groups it by
   family, and `docs/styles/<style>.md` for the full write-up
7. Check: `npm run validate` — it verifies ids, folders, roles, velocities,
   section tags and the style guides

## Troubleshooting

- **Everything is equally loud** -> Step 1.4, the Vel knob in Simpler
- **Open hat rings over the closed hat** -> Step 1.3, the choke group
- **Part feels too sparse/broken** -> raise `--density` to 1.0 or use `--preset tight`
- **Too robotic** -> `--preset breaks` or raise `--humanize`
- **"pattern not found" error** -> run `node tools/render.js` with no flags for exact ids

## Tests and integrity check

```bash
npm test          # 16 engine tests
npm run validate  # validate all patterns against the schema
```
