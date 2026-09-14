# Vermona DRM1 MKIII kit

The generator has a second target kit: the Vermona DRM1 MKIII analog drum
module. Select **Vermona DRM1 MKIII** in the web UI's Kit dropdown (or pass
`--kit drm1` to the CLI) and every pattern is re-voiced onto the module's
8 instrument channels, with MIDI notes matching the factory defaults —
**no MIDI-learn needed**, just set the DRM1 to MIDI channel 10 (factory
default) and play the file at it.

## Note map (factory defaults, MIDI channel 10)

| DRM1 channel | Note | Generator role | Carries (from the GM library) |
|---|---|---|---|
| KICK | 36 | `kick` | kick |
| SNARE | 40 | `snare` | snare |
| CLAP | 39 | `clap` | clap/perc |
| HI HAT 2 closed | 42 | `hihat` | closed hat, shaker (softened) |
| HI HAT 2 open | 44 | `openHat` | open hat |
| HI HAT 1 closed | 49 | `hh1Closed` | ride, tambourine (softened) |
| HI HAT 1 open (cymbal) | 51 | `hh1Open` | crash |
| DRUM 1 | 48 | `drum1` | high tom, high conga |
| DRUM 2 | 41 | `drum2` | mid/low toms, low conga |
| MULTI | 58 | `multi` | rim, cowbell, clave |

Both hat pairs sit exactly 2 semitones apart (44/42 and 51/49), which is the
DRM1's fixed closed-hat rule — the factory map already satisfies it.

## How the re-voicing works

`tools/convert-to-drm1.js` rebuilds the whole GM library (`patterns/`) into
`patterns-drm1/`: 17 GM roles collapse onto the module's 8 channels, texture
roles (shaker, tambourine) drop to ghost velocities so they read as hand
noise rather than accents, and when two roles land on the same step the
loudest hit wins. Chokes are preserved per hat pair — the engine cuts the
open sound when the closed one hits, mirroring what the hardware does.

Re-run after changing the GM library:

```bash
node tools/convert-to-drm1.js && npm run validate
```

## Suggested DRM1 sound settings

- **DRUM 1 / DRUM 2** — tune as high/low toms for jungle & UK funky, or as
  electro zaps for the techno/bass_house patterns.
- **MULTI** — rimshot-ish short setting covers rim+clave duty; a longer
  bend makes cowbell parts speak.
- **HI HAT 1** — long decay: it doubles as ride (closed trig) and crash
  (open trig).
