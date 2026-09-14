# Authoring patterns, style docs and style guides

The contract every pattern file, style doc and style guide in this repo
follows. `npm run validate` enforces the machine-checkable half of it.

## 1. Pattern files — `patterns/<style>/<id>.json`

```json
{
  "id": "afro_house_shaker_led_01",
  "style": "afro_house",
  "bars": 2,
  "stepsPerBar": 16,
  "bpm": 123,
  "swing": 0.08,
  "tags": ["afrotech", "shaker-led"],
  "_approach": "1–3 sentences: the idea, what to listen for, reference tracks.",
  "_sources": ["https://..."],
  "tracks": { "kick": [100,0,0,0, 0,0,0,0, 96,0,0,0, 0,0,0,0], "shaker": [...] }
}
```

| Field | Rule |
|---|---|
| `id` | `^[a-z0-9_]+$`, equals the filename without `.json`, unique within the kit |
| `style` | equals the containing folder name |
| `bars` | 1–4 |
| `stepsPerBar` | `8`, `16` or `32` — 16 is the 16th-note grid; use 32 only when you need 32nds |
| `bpm` | integer tempo hint, 40–300 |
| `swing` | 0–0.5: delays every odd step by that fraction of a step. MPC swing S% maps as `(S − 50) × 2 / 100` |
| `tags` | free descriptive tags, plus **at most one** section tag (below) |
| `_approach` | shown in the web UI under the pattern list — the idea and reference tracks |
| `_sources` | 1–3 URLs the pattern is grounded in |
| `tracks` | role → velocity array, length exactly `bars × stepsPerBar`, integers 0–127 |

**Roles** (they map to notes via `js/mapping-default.json`, so a pattern is
kit-independent): `kick`, `rim`, `snare`, `perc` (the clap slot), `tomLow`,
`hihat`, `tomMid`, `openHat`, `tomHigh`, `crash`, `ride`, `tambourine`,
`cowbell`, `congaHigh`, `congaLow`, `shaker`, `clave`.

**Velocity semantics.** `0` is silence. **`>= 90` is an accent and always
fires**, whatever the density dial says; anything below is thinned as the
user turns density down. So: skeleton of the groove at 90–115, decorations
at 40–85, ghost notes at 20–45. Never write a wall of 100s — the dynamics
are what make the part sound played rather than typed.

**Formatting.** Group the arrays in fours (`[100,0,0,0, 0,0,0,0, ...]`) so a
16th grid reads as beats. Multi-bar patterns must actually differ between
bars — otherwise write one bar.

### Section tags

A pattern carries at most one of these; without one it is a **groove**.

| Tag | What it is | How the engine treats it |
|---|---|---|
| `fill` | one-bar turnaround | auto-injected into grooves of the same style every N bars |
| `riser` | 2–4 bar build-up into a drop | rendered on its own, no fills injected |
| `breakdown` | 2–4 bar stripped-down section | rendered on its own, no fills injected |

**Risers** accelerate: 8ths → 16ths → 32nds, velocity ramping upward across
the bars, hats doubling, the kick dropping out or going 4/4, crash/tom
accents, often a silence gap right before the drop. The loudest hits belong
at the very end.

**Breakdowns** strip back: kick removed or half-time, percussion/hats/shakers
carrying the groove, sparse claps, low density. This is the section that sets
up a build-up.

Both are genre-specific — research how builds and breakdowns actually sound
in the style rather than applying a generic template.

### Per-style target

10 grooves (10 genuinely different construction approaches), 5 risers,
5 breakdowns, 1–2 fills if the genre uses them.

## 2. Style doc — `docs/styles/<style>.md`

Follow [ukg.md](styles/ukg.md). Sections, in order:

1. Title + tempo range
2. **Drum DNA** — what makes the rhythm this genre and not its neighbour
3. **Sound selection & drum machines** — per role (kick, snare/clap/rim,
   hats, percussion, cymbals): what character to pick and why; which
   machines or sample sources define the genre, marking the ones already in
   the owner's library as `(owned)` and others as `(get elsewhere)`;
   layering and processing habits that drive sample choice; 3–6 reference
   tracks
4. **The 10 approaches** — numbered, one per groove pattern id, each with
   reference tracks
5. **Risers** — 5, ids + what each does
6. **Breakdowns** — 5, ids + what each does
7. **Swing mapping** — how the style's shuffle maps onto the `swing` field
8. **Sources** — every URL used, with titles

## 3. Style guide — `styles/<style>.json`

Machine-readable summary. The web UI renders it under the grid and groups
styles by `family`.

```json
{
  "style": "afro_house",
  "name": "Afro House",
  "family": "african",
  "bpm": [120, 126],
  "swing": "0.05–0.12",
  "summary": "Two sentences of drum DNA.",
  "sounds": {
    "kick": "one line",
    "snare": "one line",
    "hats": "one line",
    "percussion": "one line",
    "cymbals": "one line"
  },
  "machines": ["Roland TR-909 — kick & hats (owned)", "Live congas — sample packs (get elsewhere)"],
  "references": ["Artist — Track (year)"],
  "doc": "docs/styles/afro_house.md"
}
```

`family` is one of: `house`, `techno`, `trance`, `uk-bass`, `breaks`,
`latin`, `african`, `club`, `internet`.

## 4. Research standard

Patterns are grounded in production sources, not guessed. Prefer Attack
Magazine's "Beat Dissected" series, EDMProd, Splice, Native Instruments,
Ableton, Point Blank, Sound On Sound, MusicRadar, Production Music Live,
Resident Advisor / DJ Mag / Pitchfork features on a genre's rhythm, and
well-regarded YouTube breakdowns (cite title + URL). Wikipedia for history
only. Every pattern cites what it came from in `_sources`.

## 5. Before committing

```bash
npm run validate      # ids, folders, roles, velocities, section tags, guides
npm test              # engine + loader tests
npm run convert:drm1  # re-voice the library for the Vermona DRM1 kit
npm run build:site    # rebuild the static site
```
