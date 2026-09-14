# Amapiano (`amapiano`)

**Tempo range:** 110–115 BPM (near-unanimous across sources: Splice, Roland,
Inspired By Beatz, RouteNote and BeatsToRapOn all land on 108–115 with 112 BPM
as the most commonly cited practical centre). Amapiano deliberately sits at
the low end of the house-tempo spectrum — "that gives the log-drum space and
the groove room to breathe" (Inspired By Beatz).

## Drum DNA

Amapiano ("the pianos," Zulu) is a hybrid of kwaito, deep house, gqom, jazz
and lounge, and its drum programming reflects that lineage more than any
single machine template. The genre's one non-negotiable element is the
**log drum**: not a drum at all in the conventional sense but "a blend of
kick, 808, and plucked bass" (Inspired By Beatz) — a tuned, pitch-bent
percussive bassline that Kooldrink (Splice) calls flatly definitional:
"Without the log drum, it's not Amapiano." It is tuned to the track's tonic,
so it functions as bass and rhythm section at once, and its placement is
melodic and syncopated rather than four-on-the-floor.

**IMPORTANT — this is a drum-pattern library, not a bass/synth one.** The log
drum's actual character (pitch glide, tuned sustain, sub weight) cannot be
reproduced by a drum machine hit. Every pattern here approximates its
**rhythm only** using `tomLow` + `congaLow`, and says so explicitly in
`_approach` — the real pitched instrument still has to come from a synth or
sampled log-drum patch elsewhere in the production chain.

Around the log drum: the **kick is sparse and deliberately understated** —
Roland's own production guide describes it as "soft, controlled... positioned
to avoid competing with the log drum's low end," often reduced to one or two
hits a bar rather than a full 4/4 stomp. The **shaker is the true
timekeeper**: a continuous, velocity-shaped 16th pattern that (per Roland)
"the kick, percussion and log drum move around." Congas, rimshots and claps
layer syncopated call-and-response on top — BeatsToRapOn traces a
clave-adjacent conga shape (beat 2, the "and" of 2, the "and" of 3 and 4)
directly back to Kwaito. This is what people mean by the "piano shuffle": a
felt, swung pocket that exists even before the melodic piano/Rhodes line is
added, built from the interplay of shaker, log drum and percussion rather
than from the kick.

**Variants** (Melodigging, Sgija.com): **Private School Piano** is the lush,
mellow, "soulful and intimate" branch where jazzy keys and plush harmony
dominate and the drums stay understated and soft. **Sgija** is the
percussion-forward opposite — "clattering shakers, rimshots and log-drum bass
figures" with the harmonic palette pared away, the rawest and most stripped
dancefloor-facing strain. **Bacardi** is the older, rawer Pretoria township
sound (syncopated drum programming, woody percussion hits, tight looping)
that fed directly into Amapiano's rhythm section and is often mistaken for a
2020s Amapiano subgenre rather than one of its direct ancestors. Melodigging
also documents an **Underground Amapiano** (darker, heavier sliding log-drum
bass, minimal top end) and a **Gospel Amapiano** (same shuffle DNA, softer
and more spacious, built to sit under worship vocals).

## Sound selection & drum machines

**Kick.** Soft, rounded, house-adjacent kick with a short decay — never the
dominant low-end element. A **LinnDrum** or **Oberheim DMX** kick (both
owned) suits the private-school lane; a tighter **TR-909** kick (owned) suits
the harder Bacardi/underground lane. Keep it well clear of the log drum's
frequency range.

**Log drum (approximated).** No owned machine reproduces the genuine tuned
log-drum tone — that is a melodic instrument, not a drum hit, and belongs to
a synth/sampler elsewhere in the chain **(get elsewhere)**. Every pattern
here stands in for its *rhythm* with `tomLow` (the body) + `congaLow` (the
higher slap/answer), built from a pitched-down **TR-808** low tom or
**E-mu SP-1200** (both owned) resample for the percussive attack reference.

**Percussion (conga / clave / shaker).** The **TR-727** (owned) supplies
synthesized conga, clave, cowbell and shaker patches for the clave-adjacent
conga timeline and the shaker engine; the **CR-78** (owned) gives softer,
more analogue conga/bongo tones for the Private School lane. Genuine live
congas or shakers are **not** in the owned library — use the TR-727/CR-78
synthesized versions, or source real hand-percussion samples elsewhere. A
**Korg KR-55/KPR-77** (owned) can supply period-adjacent latin-percussion
rims and shakers.

**Hats.** Sparse and mostly used as an offbeat accent rather than a running
16th engine (the shaker already owns that job) — a **TR-909** or **TR-727**
open/closed hat (both owned) is enough; keep velocities low so the shaker
stays the audible driver.

**Cymbals / rides.** Rare — Amapiano arrangements build tension with the
piano/log-drum interplay rather than cymbal energy; when a ride appears in a
breakdown it should sit far back, low velocity, almost textural.

**Reference tracks / artists.** Kabza De Small & DJ Maphorisa (Scorpion
Kings); Vigro Deep; Muziqal Tone — "Quick To Judge"; De Mthuda — "John Wick";
Kooldrink (Splice-featured "Pop Piano" crossover producer); Tyla — the
Amapiano-adjacent global crossover moment.

## The 10 approaches

1. **`amapiano_log_drum_pulse_01` — Log-drum pulse (core engine).** Soft
   spaced kick, continuous 16th shaker, log-drum stepwise motion around the
   kick, offbeat open hats. The default engine.
2. **`amapiano_private_school_01` — Private School Piano.** Kick pulled to a
   single soft hit, whisper-quiet shaker, soft rim backbeat, one gentle
   log-drum answer per bar — understated so the (absent) piano leads.
3. **`amapiano_sgija_01` — Sgija.** Hard, loud log drum, busy dry rimshots, a
   tom fill, kick almost entirely absent — the percussion-forward, "darker,
   drum-centric" strain.
4. **`amapiano_bacardi_01` — Bacardi.** Tighter, more insistent looping with
   minimal swing, woody clave/rim hits and a compact kick — the raw Pretoria
   lineage that predates and feeds Amapiano.
5. **`amapiano_trumpet_timekeeper_01` — Trumpet timekeeper.** Offbeat
   quarter-note stabs in the `perc` slot standing in for the horn hits that
   often mark time in Amapiano productions.
6. **`amapiano_clave_conga_backbone_01` — Clave/conga backbone.** The
   Kwaito-descended conga shape (beat 2, "and" of 2, "and" of 3+4) as the lead
   rhythmic voice over a plain kick.
7. **`amapiano_shaker_engine_01` — Shaker engine.** Kick and log drum reduced
   to almost nothing; a dense, contoured 16th shaker alone carries the groove.
8. **`amapiano_gospel_amapiano_01` — Gospel Amapiano.** Same shuffle DNA,
   softer and more spacious — gentle claps, near-absent kick, a warm log-drum
   accent once per bar.
9. **`amapiano_underground_dark_01` — Underground Amapiano.** A heavy,
   sliding log-drum bassline (loudest hits in the kit) with a hard sparse kick
   and almost no top-end decoration.
10. **`amapiano_piano_shuffle_backbeat_01` — Piano-shuffle backbeat.** Heavy
    swing (0.16) with rim+clap layered hard on 2 and 4 so the shuffle is felt
    even without a melodic part.

## Risers

1. **`amapiano_riser_log_drum_climb_01`** — 4-bar build where the log drum
   grows from one soft accent per bar into a dense climbing roll.
2. **`amapiano_riser_shaker_roll_01`** — 32nd-grid shaker roll ramping toward
   127, kick dropping out on the last beat.
3. **`amapiano_riser_clap_build_01`** — Clap/rim fills in step by step (8ths
   then 16ths) while the kick thins to the downbeat.
4. **`amapiano_riser_conga_call_01`** — Conga figure doubles from 8ths into a
   rising 16th roll, kick dropping out for the last two steps.
5. **`amapiano_riser_kick_return_01`** — Amapiano's own inverted build: the
   normally-sparse kick fills in step by step until it's a full loud 4x4 at
   the drop.

## Breakdowns

1. **`amapiano_breakdown_log_drum_solo_01`** — Log drum alone with a thin
   shaker, no kick.
2. **`amapiano_breakdown_piano_space_01`** — Near silence: one soft rim per
   bar, a barely-audible shaker — space cleared for the (absent) piano.
3. **`amapiano_breakdown_shaker_wash_01`** — The continuous shaker alone
   carries both bars.
4. **`amapiano_breakdown_conga_dialogue_01`** — Four bars of congaHigh/
   congaLow call-and-response, no kick.
5. **`amapiano_breakdown_half_time_01`** — A single soft kick per bar, a
   minimal log-drum accent, thinned shaker.

Extra one-bar fill (tag `fill`, auto-injected every 4th bar):
**`amapiano_fill_log_drum_turnaround_01`** — the log drum rolls through beats
3–4 with climbing velocity, briefly foregrounded as the lead voice.

## Swing mapping

Amapiano's shuffle sits squarely in classic house territory but is carried
more by the shaker's velocity contour and the log drum's syncopation than by
raw timing offset. Patterns here use engine `swing` 0.08–0.16 — tighter
(0.05–0.10) for the Bacardi/underground lane, looser (0.13–0.16) for the
Private School and piano-shuffle-backbeat grooves. MPC swing S% maps to
`(S − 50) × 2 / 100`.

## Sources

- Splice Blog — What is Amapiano Music? Artists, Instruments, BPM, and More — https://splice.com/blog/what-is-amapiano-music/
- Roland Articles — Production Hacks: Creating Amapiano Tracks — https://articles.roland.com/production-hacks-creating-amapiano-tracks/
- Inspired By Beatz — Amapiano Production: How the Log Drum Sound is Created — https://www.inspiredbybeatz.com/en/amapiano-production-how-the-log-drum-sound-is-created/
- BeatsToRapOn — How to Make an Amapiano Beat: Complete Production Guide — https://beatstorapon.com/blog/how-to-make-amapiano-beat/
- RouteNote Create Blog — Beatmakers Guide: How to make an Amapiano Beat — https://create.routenote.com/blog/beatmakers-guide-how-to-make-an-amapiano-beat/
- Melodigging — Sgija (genre page) — https://www.melodigging.com/genre/sgija
- Melodigging — Amapiano (genre page) — https://www.melodigging.com/genre/amapiano
- EDMProd — What is Amapiano? Here's Everything You Need to Know — https://www.edmprod.com/what-is-amapiano/
