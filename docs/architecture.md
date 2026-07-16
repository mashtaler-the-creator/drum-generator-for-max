# Architecture

## Data model

A pattern is style-tagged, role-based, and velocity-driven. It never
references a MIDI note directly — only a role (`kick`, `snare`, `hihat`,
`ride`, `perc`, `crash`). Role -> note mapping is a separate, user-editable
layer so the same pattern library works on any drum rack.

```json
{
  "id": "jungle_amen_01",
  "style": "jungle",
  "bars": 2,
  "stepsPerBar": 16,
  "swing": 0.08,
  "tracks": {
    "kick":  [100,0,0,0, 0,0,0,0, 0,0,90,0, 0,0,0,0, ...],
    "snare": [0,0,0,0, 100,0,0,20, 0,0,0,0, 100,0,0,0, ...],
    "hihat": [60,0,60,0, 60,0,60,60, 60,0,60,0, 60,0,60,0, ...]
  }
}
```

Velocity `0` = no note. Nonzero = hit at that velocity. Array length =
`bars * stepsPerBar`.

## Engine responsibilities (js/engine.js)

1. Load a pattern (or several) for the active style
2. On each transport step, look up whether each role fires this step
3. Apply modifiers in order:
   - **swing**: delay every 2nd 16th by pattern's swing amount
   - **density**: probabilistically drop/add hits based on a 0-1 dial
   - **ghost notes**: low-velocity snare/hihat hits inserted between main hits
   - **fills**: swap in a fill variant of the pattern every N bars
4. Emit note-on/off events with role already resolved to a MIDI note via
   `mapping.js`

## Mapping layer (js/mapping.js)

Simple role -> note dictionary, loaded per-project since every drum rack
lays out pads differently:

```json
{ "kick": 36, "snare": 38, "hihat": 42, "ride": 51, "perc": 39, "crash": 49 }
```

## Max side (device/DrumGenerator.maxpat)

- `js` object hosts engine.js
- Transport sync via `transport` object, step clock from `metro` synced to
  Live's tempo, or driven directly by Live API bar/beat position
- UI: style selector, density slider, swing slider, fill-probability slider,
  mapping editor (or load mapping JSON)
- Output: `noteout` for live playback. Optional: `LiveAPI` calls to write
  the generated bars directly into a MIDI clip on the drum track.

## Why role-based, not MIDI-note-based

Vlad's setup already separates hardware roles from note assignment
(Octatrack/Digitakt workflows do this natively) — keeping patterns
role-based means the same jungle library works whether the target rack is
a classic GM-style layout or a custom one, no pattern rewrite needed.

## Open questions to resolve before Max wiring

- Step clock: driven by Max `metro` (simple, can drift) vs Live API bar/beat
  polling (accurate, more complex) — recommend starting with `metro` for v1
- Clip-write vs live-only: start live-only (simpler), add clip-write once
  the engine and pattern library are solid

## Humanization settings (v0.3)

Grounded in drum-programming best practice research (Splice, Loopmasters,
Attack Magazine, Ableton manual). All default to OFF; presets in
`js/presets.json` bundle sensible values (`tight`, `breaks`, `machine`).

| Setting | What it does | Practice it encodes |
|---|---|---|
| `velocityJitter` | random +/- on every hit | ~4% velocity variation (+/-5 of 127) reads as human, more reads as sloppy |
| `humanizeTicks` | random timing offset | <= ~10 ticks; drummers are tight, jitter should be subliminal |
| `anchorRoles` | roles excluded from jitter | kicks and crashes carry accents and stay ON the grid |
| `rolePushTicks` | constant per-role offset | laid-back snare (+ticks), pushed hats (-ticks) create feel, not noise |
| `hatCycleDepth` | 4-step hat velocity cycle | real hand pattern: down-beat loud (~90), off-beats soft (~65) |
| `backbeatAccent` | snare boost on beats 2 & 4 | the backbeat hits harder than everything around it |
| `ghostProbability` + `preSnareGhostBias` | low-velocity inserts, biased to the step before a main snare | ghosts at vel 18-45; the pre-snare "suck-in" ghost makes the main hit feel bigger |
| `fillRamp` | velocity build across fill bars | fills grow (90 -> 110 -> 120), they don't sit flat |
| `maxSimultaneousHands` | cap non-kick notes per tick | a drummer has two hands; 4 simultaneous hand hits is physically fake |

Pattern authoring guideline that follows from the same research: program
hi-hats in the 60-95 velocity range with occasional accents to 100, main
snares 100-115, and reserve everything below ~70 for ghosts, because the
density dial treats velocity >= 90 as an accent that always fires.

## Drum rack setup on the Live side

The engine cuts openHat note lengths when a closed hat lands (see
`applyChokes`), but the authoritative choke lives in the drum rack itself:
open the rack's Chain List -> Input/Output section, and set the same Choke
group (1-16) for the closed and open hat chains so the closed hat silences
the open one at audio level. Do the same for any long-tail sounds that
shouldn't overlap themselves. This matters because MIDI note-off doesn't
stop a one-shot sample — only the choke group does.
