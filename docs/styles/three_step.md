# 3-Step (`three_step`)

**Tempo range:** 113–120 BPM (Beatportal and The NATIVE both give this range; Melodigging's genre page quotes a wider 100–115 for the deep/Afro-house-leaning edge of the sound, and the faster Afro-Tech-adjacent cuts push toward 122–125). This library targets 113–120 as the well-attested core.

## Drum DNA

3-Step is what happens when you take a 4/4 house kick and pull one hit out.
Thakzin, the genre's originator, describes discovering the sound almost by
accident: "I just removed one kick, and I was like, oh, okay, there's a lot of
space" (OkayAfrica). Where Afro House keeps a steady four-on-the-floor, 3-Step
runs on exactly **three kick hits per bar** — the fourth is silence, and that
silence is the entire point. Beatportal's own technical framing (in Melodigging's
paraphrase) gives two concrete templates: kicks around beat 1, the last 16th of
beat 2 ("falling forward" into the empty beat 3), and beat 4; or kicks on beat 1,
the "and" of beat 2, and the last 16th of beat 3, leaving beat 4 open instead.
Either way the hole in the pattern — not a new hit — is the hook.

Everything else is borrowed and re-balanced from 3-Step's three parent genres,
per The NATIVE and Gray Area: **Amapiano** supplies the deep, bouncing
**log-drum bassline** and a shuffling, syncopated low end; **Afro-Tech**
supplies **punchy, driving percussion loops** (claves, congas, clave-adjacent
hat programming) and a harder, more festival-ready edge; **broken beat**
supplies **playful syncopation** — hand percussion and ghost notes pushed off
the strict grid rather than locked to it. The result reads as "conversational
and jazz-like" (Melodigging) rather than mechanical: Beatportal frames the
whole genre as feeling like a jam session with "more than one person in the
room," prizing surprise over quantised rigidity. Swing sits high for a house-
adjacent style — Melodigging's own production notes suggest 55–65% shuffle on
the 16ths, well above Afro House's 5–12%.

Because the identity is the *absence* of a kick, 3-Step's build-ups often
invert the usual house trick: instead of stripping elements away, tension is
released by **putting the missing kick back** — see the riser section below.

## Sound selection & drum machines

**Kick.** Warm, rounded, mid-deep-house kick with a short punchy transient —
not the ultra-clean 909 four-on-the-floor kick, and not distorted. A
**LinnDrum** or **Oberheim DMX** kick sits closest to the deep-house
lineage 3-Step pulls from; an **E-mu SP-1200** resampling adds the
lo-fi warmth many Amapiano-adjacent kicks carry. Keep it short so the space
around the missing beat reads as silence, not decay tail.

**Log drum (bass).** The genuine Amapiano log drum is a tuned, pitch-bent
kick/808/bass hybrid — a melodic instrument, not a drum-kit hit — and this
drum-only library cannot reproduce it. Approximate its *rhythm* with
`tomLow` + `congaLow` (as the Amapiano style guide does) and say so explicitly:
the real low end has to come from a synth log-drum patch or sample
sourced elsewhere. A **TR-808** low tom pitched down gets closest to
its percussive attack for programming reference.

**Percussion (conga / clave / shaker).** 3-Step's Afro-Tech percussion loops
want the **TR-727** for claves, congas, cowbell and shaker patches, or
the **CR-78** for softer, more analogue conga/bongo tones. Drum machines
cannot stand in for genuine live congas, djembe or shakers — use the
TR-727/CR-78 synthesized versions, or source real hand-percussion samples
elsewhere. A **Korg KR-55** or **KPR-77** can supply period-adjacent
latin-percussion hats and rims for the clave timeline patterns.

**Hats.** Closed hats kept sharp but restrained (below ~70% velocity, echoing
Afro-Tech's own hat habits) — a **TR-909** or **TR-727** closed hat
 works; **Elektron Machinedrum** for a more metallic,
schranz-adjacent alternative on the harder Afro-Tech-leaning grooves.

**Cymbals / horns.** 3-Step rarely uses a crash — energy comes from horn
stabs and pads, not cymbal washes. Route the `perc` slot to a brass/horn stab
sample for the "jazzy horns" the genre's writers describe (no drum machine
synthesizes convincing horn stabs); a `ride`
wash from a **TR-909** works for the rare sustained cymbal moment in a
breakdown.

**Reference tracks.** Thakzin — The Magnificent Dance (2022); Thakzin &
Mörda — Burning Bush (2023); Thakzin — Possessed (2023); artists cited
across the 3-Step press as genre-defining: Mörda, Dlala Thukzin, Atmos Blaq,
Oscar Mbo, SGVO, Darque.

## The 10 approaches

1. **`three_step_falling_kick_01` — Falling-forward kick.** Melodigging's
   canonical kick timing: beat 1, a kick pushed into the last 16th of beat 2
   that falls forward into the silent beat 3, and beat 4. Rim ghosts and a
   congaLow answer fill the gap. Reference: Thakzin.
2. **`three_step_broken_pocket_01` — Broken pocket.** The alternate template:
   beat 1, then two off-grid kicks pulled onto the "and" of beat 2 and the
   last 16th of beat 3, leaving beat 4 silent — the more broken-beat-leaning
   read. Reference: Gray Area's "3-Step: The Next Sound in Afro House."
3. **`three_step_drop_the_three_01` — Drop the three.** The plainest reading
   of "removed one kick": beats 1, 2 and 4, with a log-drum-style
   tomLow+congaLow answer filling beat 3. Reference: The NATIVE.
4. **`three_step_drop_the_two_01` — Drop the two.** Beats 1, 3 and 4; the gap
   falls on beat 2 and is filled by an Afro-Tech clave/rim timeline instead of
   a log drum.
5. **`three_step_log_drum_answer_01` — Log-drum answer.** The Amapiano side
   pushed forward: tomLow+congaLow trade a bouncing, syncopated figure across
   the whole pattern in place of a bassline. Explicitly a rhythm-only
   approximation of the pitched log drum.
6. **`three_step_afrotech_perc_01` — Afro-Tech percussion driver.** A hard
   closed-hat 16th engine and a 3+3+2 clave timeline over a leaner kick — the
   faster, festival-ready end of the genre (~119 BPM).
7. **`three_step_horn_stab_swing_01` — Horn-stab swing.** Heavy 0.22 shuffle,
   a tambourine timekeeper, and horn stabs in the `perc` slot rather than a
   plain clap — the jazziest of the ten.
8. **`three_step_gallop_triplet_01` — Gallop triplet (32nd grid).** The
   triplet-adjacent pull the schema's linear swing field can't express,
   written out as literal 32nd-grid displacement instead.
9. **`three_step_deep_house_lean_01` — Deep house lean.** The bottom of the
   BPM range (113) where 3-Step shades into deep/Afro house: almost nothing
   but the kick and a soft shaker.
10. **`three_step_percussion_forward_01` — Percussion forward.** Kick reduced
    to an afterthought; interlocking congaHigh/congaLow call-and-response
    carries the groove — the "jam session" reading of the genre.

## Risers

1. **`three_step_riser_kick_return_01`** — A build unique to this genre:
   across 4 bars the missing beat-3 kick is gradually reinstated until full
   four-on-the-floor lands at the drop.
2. **`three_step_riser_shaker_double_01`** — 32nd-grid shaker roll climbing
   60→122 while the kick drops out for the last four steps.
3. **`three_step_riser_clap_stack_01`** — Clap density steps up from quarters
   to a full 16th wall at 127 while the kick thins to the downbeat only.
4. **`three_step_riser_horn_swell_01`** — Horn-stab density climbs alongside a
   tomHigh→tomMid→tomLow cascade into the drop.
5. **`three_step_riser_log_drum_pitch_01`** — The log-drum pair thickens from
   one hit per bar into a dense, climbing roll, imitating the pitched
   instrument's own build habit.

## Breakdowns

1. **`three_step_breakdown_perc_only_01`** — Kick removed; shaker and clave
   timeline carry the section alone.
2. **`three_step_breakdown_half_kick_01`** — Only one kick per bar (beat 1) —
   subtraction beyond even the normal 3-step gap.
3. **`three_step_breakdown_log_drum_solo_01`** — The log-drum pair left alone
   with a thin shaker, no kick.
4. **`three_step_breakdown_horn_pad_01`** — Space for pad/horns: tambourine,
   an occasional horn stab, a barely-there ride.
5. **`three_step_breakdown_conga_call_01`** — Four bars of conga
   call-and-response with no kick at all.

Extra one-bar fill (tag `fill`, auto-injected every 4th bar):
**`three_step_fill_kick_pickup_01`** — the missing beat-3 kick briefly returns
and doubles into a 16th pickup, restoring four-on-the-floor for one bar before
the groove drops the kick again.

## Swing mapping

3-Step runs noticeably more swung than its Afro House and Afro-Tech parents.
Melodigging's production notes suggest 55–65% shuffle on the MPC/Maschine
scale for "a laid-back pocket" — engine `swing` 0.10–0.30. Most patterns here
sit at 0.10–0.18; the horn-stab groove pushes to 0.22 near the top of that
range, while the harder Afro-Tech-leaning groove pulls back to 0.10. Where the
genre's "triplet feel" needs to be more than a linear delay, patterns use a
32-step grid instead (`three_step_gallop_triplet_01`,
`three_step_riser_shaker_double_01`) to place kicks and shakers off the
straight 16th grid directly. MPC swing S% maps to `(S − 50) × 2 / 100`.

## Sources

- Beatportal — Where Did That Kick Go? An Introduction to 3Step — https://www.beatportal.com/articles/807844-where-did-that-kick-go-an-introduction-to-3step
- The NATIVE — How 3-Step Became The Definitive Sound Of The Moment — https://thenativemag.com/how-3-step-became-the-definitive-sound-of-the-moment/
- The NATIVE — A Primer On 3-Step's Rise To Prominence — https://thenativemag.com/a-primer-on-3-steps-rise-to-prominence/
- Melodigging — 3-Step (genre page) — https://www.melodigging.com/genre/3-step
- OkayAfrica — Thakzin Shapes His Vision of the Rising South African Electronic Genre, 3-Step — https://www.okayafrica.com/thakzin-shapes-his-vision-of-the-rising-south-african-electronic-genre-3-step/1412410
- Gray Area — 3-Step: The Next Sound in Afro House — https://grayarea.co/magazine/3-step-the-next-sound-in-afro-house
- Resident Advisor — What Is 3-Step, South Africa's Latest House Movement? Here Are 12 Essential Tracks — https://ra.co/features/4322
- Rolling Stone Africa — The Rise of 3-Step: South Africa's Latest Dance Music Genre — https://rollingstoneafrica.com/music/music-features/the-rise-of-3-step-south-africas-latest-dance-music-genre/
- Splice Blog — What is Amapiano Music? (log-drum background) — https://splice.com/blog/what-is-amapiano-music/
- Roland Articles — Production Hacks: Creating Amapiano Tracks (log-drum background) — https://articles.roland.com/production-hacks-creating-amapiano-tracks/
