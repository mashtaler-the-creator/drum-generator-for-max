# Building the drum rack (Live side)

This is the contract between your drum rack and the generator:
`js/mapping-default.json`. The engine doesn't care what sound sits on a pad —
it only sends notes. The rack must have the right sound on the right note.

## Note layout (matches mapping-default.json, GM-style)

| Note | MIDI # | Role      | Sound |
|------|--------|-----------|-------|
| C1   | 36     | kick      | main kick |
| D1   | 38     | snare     | main snare |
| D#1  | 39     | perc      | clap / rimshot / percussion |
| F#1  | 42     | hihat     | closed hat |
| A#1  | 46     | openHat   | open hat |
| C#2  | 49     | crash     | crash cymbal |
| D#2  | 51     | ride      | ride cymbal |

7 pads is the complete kit for the current pattern library. Don't build a
40-pad rack "just in case" — every extra pad is a pad the generator never
triggers.

## Which samples to pick (jungle/dnb-oriented)

- **Kick — one, short and punchy.** Tight decay (~100-250 ms), energy in
  60-100 Hz, fast tail. A long boomy kick will fight your sub/reese; at
  170+ BPM 16th-note kicks with long tails turn into mud. If you want kick
  variety, layer inside the pad, don't add a second kick pad.
- **Snare — one, with body AND crack.** It must survive two jobs: main hits
  at velocity 100-115 and ghosts at 18-45. Audition it quiet: if the ghost
  at vel 30 is inaudible or sounds like a click, pick another snare or raise
  Vel->Vol (below).
- **Closed hat — short (< 100 ms).** Real 16th grids live here.
- **Open hat — medium (300-700 ms).** The engine trims its MIDI length when
  a closed hat lands, and the choke group (below) cuts the audio tail.
- **Crash — long, let it ring** (1.5-3 s). It's an anchor role: always on
  the grid, used at section starts.
- **Ride — medium-long,** velocity-sensitive if possible; the hat cycle
  shaping applies to it too.
- **Perc — short.** Rimshot or clap that reads clearly at low velocity.

## Critical settings inside each pad (Simpler)

1. **Velocity -> Volume at 70-100%.** This is the single most important
   setting for this project. The generator does all its humanization through
   velocity (hat cycle 60-95, ghosts 18-45, backbeat accents 110+). With
   Live's default low velocity sensitivity, all of that flattens out and the
   output sounds like a machine again. In Simpler: Controls tab -> Vel value
   under Volume.
2. **Snare/hat: add subtle velocity -> sample start or filter** (a few %).
   Softer hits get slightly duller — mimics multi-layer sampled kits and
   kills the machine-gun effect on rolls.
3. **Gate mode vs one-shot:** keep pads in one-shot (Trigger) mode. Note
   lengths from the generator are short (gate 0.5 step); in Gate mode your
   tails would get chopped unmusically. The exception is open hat — Trigger
   mode there too, the choke group handles the cutoff.

## Choke group — do this or open hats will smear

Chain List -> Show Input/Output (I-O) -> Choke column:
- closed hat (F#1) -> Choke group **1**
- open hat (A#1) -> Choke group **1**

MIDI note-off does not stop a one-shot sample. Only the choke group actually
silences the open hat's audio tail when the closed hat hits.

If a pad uses a nested rack (instrument inside a rack inside the drum rack),
set its Receive to the specific note instead of "All Notes", otherwise the
choke won't apply.

## Avoiding the machine-gun effect

Repeated identical samples at similar velocity read as robotic. Cheap fixes,
pick any:
- velocity zones with 2-3 near-identical variations of the same snare/hat
- tiny velocity->pitch (±5 cents) or velocity->sample-start modulation
- a Random MIDI device before the rack is NOT recommended here — the
  generator already randomizes velocity; double randomization gets sloppy

## Extending the kit

The project is role-based, so the sync procedure when you want more sounds
(second snare, shaker, sub-kick) is:
1. add the role -> note pair to `js/mapping-default.json`
2. put the sound on that note in the rack
3. use the new role name in pattern `tracks`

Nothing else needs to change — validator, engine, and MIDI renderer pick up
new roles automatically. Keep note numbers in the GM drum zone (35-59) so
rendered .mid files stay readable by other tools.
