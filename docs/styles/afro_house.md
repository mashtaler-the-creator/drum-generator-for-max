# Afro House (`afro_house`)

**Tempo range:** 120–126 BPM (the settled 2020s consensus across Beatportal's
Keinemusik/Black Coffee/Caiiro/Alex Wann production guide, Orphiq's genre
primer and IQSounds' drum-programming guide; the darker Afro-Tech-adjacent
end of the family runs a touch faster, 123–126, while the melodic/European
"Keinemusik" lane sits closer to 121–123).

## Drum DNA

Afro House keeps a straight 4/4 kick — unlike its 3-Step and Amapiano
relatives, the floor never drops a beat — but almost everything layered
around that kick is built from **interlocking hand-percussion parts that
answer each other** rather than a single dominant element. Orphiq's genre
primer states the rule plainly: "program parts that answer each other" —
congas, claves, cowbells and shakers are written as short call-and-response
phrases, not static loops. IQSounds' drum-programming guide and Beatportal's
production walkthrough agree on the hierarchy: **the shaker, not the clap,
is usually what drives the groove** — a full 16th pattern with a
strong-weak-medium-weak velocity contour is doing more rhythmic work than the
often-understated clap on 2 and 4. Two named percussion approaches recur
across the genre: **timeline instruments** (clave/cowbell patterns that hold
a longer 2-, 3- or multi-bar cycle underneath the 4/4, per Orphiq's "rattles
or bells holding longer cycles") and **tom/conga loops** (a Black Coffee
signature per The Producer School — a low tom pulsing in 8ths under the kick,
functioning almost like a second bassline).

The genre splits into two production lanes that this library treats as
opposite poles of the same 10 approaches: a **deeper, percussion-forward**
lane (Black Coffee, Themba, Da Capo, Culoe De Song) built on swung, "fairly
busy" 16th hats and hand-drum ghost notes (Attack Magazine's Deep Afro House
dissection), and a **melodic/European** lane (Keinemusik, Adam Port, &ME) that
strips the drum count down deliberately — Orphiq again: "count the percussion
parts in a Keinemusik record — the number is smaller than it sounds" — because
pads and chords are doing the harmonic work the deeper lane spends on
percussion. Builds and breakdowns favour **subtraction over addition**
(Orphiq's "arrangement by subtraction"): rather than a snare-roll build,
Afro House more often removes the kick and lets shaker/conga/tom loops carry
the section alone, or runs a tom/conga/clap *ramp* into the return.

## Sound selection & drum machines

**Kick.** Clean, rounded deep-house kick, not distorted or gated — a
**LinnDrum** or **Oberheim DMX** kick sits in the right lane;
a **TR-909** kick works for the more Afro-Tech-adjacent, techno-
influenced grooves. Kept mono and out of the way of the tom/conga low end.

**Snare / clap / rim.** The clap (`perc` slot) is usually understated —
a soft layered clap from a **TR-808/909** or a **Novation
Drumstation/Quasimidi 309** rave-clap pulled well back in level. Rim
is used constantly as a light backbeat ghost — **TR-909/727** rim,
tuned bright and dry.

**Hats.** Closed hats sit under the shaker, not instead of it — **TR-909**
closed/open hat, sometimes resampled through an **E-mu SP-1200**
 for the lo-fi 12-bit grit that suits the deeper, dustier end of the
genre.

**Percussion (conga / clave / cowbell / shaker / tambourine).** This is
where Afro House lives, and it is the one area a synthetic drum library
serves worst: the genre wants **real hand percussion** — congas, djembe, shakers,
bongos — and this library's percussion machines are all synthesized
approximations. Use the **TR-727** for clave, cowbell, conga and
shaker patches, and the **CR-78** for softer analogue conga/bongo
tones; a **Korg KR-55/KPR-77** supplies period-adjacent latin
percussion for the timeline instruments. Drum machines cannot stand in for
genuine live congas, djembe or shakers — treat every `congaHigh`/
`congaLow`/`shaker`/`tambourine` hit here as a placeholder for real
hand-percussion samples if authenticity matters more than
the machine-groove reference.

**Cymbals.** Almost absent — no pattern in this kit uses `crash`; a `ride`
appears only as a soft wash in a couple of breakdowns (**TR-909**),
never as a groove element.

**Layering / processing.** Congas and shakers are usually filtered and
compressed into a loop rather than left as single hits (Beatportal); tom
loops are rolled off in the low end so they sit under, not against, the kick
(The Producer School); breakdowns strip to "percussion + pad/chant"
(Melodigging) rather than cutting everything.

**Reference tracks.** Black Coffee — Superman ft. Bucie (2010), Drive (2018);
Culoe De Song — Webaba (2009), The Bright Forest (2010); Da Capo — Afrika
(2014), Kelele (2020); Themba — Sound of Freedom (2021); Caiiro — The Akan
(2017), Ndikhokhele (2019); Keinemusik — Muyè (2020); Adam Port — Move
(2024); &ME — Solaris (2019); Hyenah — Sun Shine (2016); Joezi — Wandi
(2021); Enoo Napa — Phoenix (2020); Rampa — Necesito (2020).

## The 10 approaches

1. **`afro_house_shaker_led_01` — Shaker-led classic.** Steady 4x4 kick, a
   full 16th shaker with a strong-weak-medium-weak contour doing the driving,
   understated clap on 2 and 4, offbeat open hats, a low conga answering the
   kick. The default modern Afro House engine. Reference: Black Coffee
   "Superman", Caiiro "The Akan".
2. **`afro_house_afrotech_driver_01` — Afro-Tech driver.** Tighter, darker,
   closer to techno: a hard 909-style kick, offbeat closed hats with ghost
   16ths, a 3+3+2 woodblock/clave timeline, minimal swing. Reference: Da Capo
   "Kelele", Joezi "Wandi".
3. **`afro_house_bell_clave_01` — Bell-timeline construction.** A son-clave
   pattern holds the long cycle while a cowbell keeps an 8th pulse that
   bunches up at the end of bar 2 — Orphiq's "rattles or bells holding longer
   cycles." Reference: Themba "Sound of Freedom", Hyenah "Sun Shine".
4. **`afro_house_conga_conversation_01` — Conga call-and-response.** Four
   bars: high conga states a phrase in bars 1 and 3, low conga answers in 2
   and 4. Orphiq's "program parts that answer each other" made literal.
   Reference: Culoe De Song "Webaba", Da Capo "Afrika".
5. **`afro_house_deep_djembe_01` — Deep Afro House (Attack Magazine
   dissection).** A "fairly busy" kick with syncopated ghost kicks, heavily
   swung crispy 16th hats, a low tambourine, short bongo/djembe hits.
   Reference: Black Coffee "We Dance Again", Themba "Who Is Themba?".
6. **`afro_house_keinemusik_minimal_01` — Melodic/minimal (Keinemusik lane).**
   Only four drum parts: 4x4 kick, clap+rim on 2/4, soft full shaker, offbeat
   open hats — proof the percussion count can be small. Reference: Keinemusik
   "Muyè", Adam Port "Move".
7. **`afro_house_organic_live_01` — Organic live-feel (4-bar).** Wide velocity
   movement everywhere, the shaker drops out for half a bar (IQSounds' "mute"
   trick) while a tambourine covers, congas grow into a short roll at the end.
   Reference: Black Coffee ft. Bucie "Superman", Culoe De Song "The Bright
   Forest".
8. **`afro_house_six_against_four_01` — Six-against-four polyrhythm.** High
   percussion accents every third 16th (3-3-3-3-4 groups) crossing the four
   straight kicks; the grouping migrates to the clave in bar 2. Reference:
   &ME "Solaris", Rampa "Necesito".
9. **`afro_house_tom_pulse_01` — Tom pulse (Black Coffee recipe).** A clean
   kick with a low tom loop pulsing in 8ths underneath, one realistic
   mid-tom shot, a noisy velocity-shaped shaker. Reference: Black Coffee
   "Drive", "Your Eyes".
10. **`afro_house_tuned_tom_fall_01` — Tuned toms "falling forward".** Tuned
    tom hits sit on the 16th right before beats 2, 3 and 4 at low velocity so
    they tumble into the next kick. Reference: Caiiro "Ndikhokhele", Enoo
    Napa "Phoenix".

## Risers

1. **`afro_house_riser_clap_ramp_01`** — Four-bar clap build: quarters → 8ths
   → 16ths → a full-velocity wall with a silence gap before the final hit;
   kick and shaker drop out in bar 4.
2. **`afro_house_riser_conga_roll_01`** — High conga goes 8ths → 16ths with
   climbing velocity, low conga follows a beat behind, kick stays 4x4
   throughout.
3. **`afro_house_riser_kick_dropout_01`** — Bar 2 removes the kick; rim ramps
   in 16ths, conga and claps take over, then total silence before one stacked
   hit on the last step.
4. **`afro_house_riser_shaker_double_01`** — 32nd-grid shaker doubling under a
   kick that leaves on the final beat to open a gap.
5. **`afro_house_riser_tom_cascade_01`** — High→mid→low tom cascade
   (Melodigging: "filter sweeps and tom fills for transitions rather than EDM
   impacts") with the kick doubling into 16ths on the last beat.

## Breakdowns

1. **`afro_house_breakdown_bell_pad_01`** — Son clave on the cowbell, a soft
   8th ride wash, a quiet shaker; no kick — the long-cycle timeline keeps time
   under a pad or vocal.
2. **`afro_house_breakdown_conga_dialogue_01`** — Four bars, no kick: high
   conga speaks in bars 1/3, low conga answers in 2/4 — the pad-and-
   percussion breakdown of a Black Coffee set.
3. **`afro_house_breakdown_half_time_kick_01`** — Kick marks only beats 1 and
   3 in bar 1 and just beat 1 in bar 2 — Orphiq's "arrangement by subtraction"
   applied to the kick specifically.
4. **`afro_house_breakdown_shaker_only_01`** — Kick and bass gone; the 16th
   shaker alone keeps the floor moving, per Beatportal's "drop the kick and
   bass and let a single percussive element carry."
5. **`afro_house_breakdown_tom_drift_01`** — One kick on the downbeat, then
   the low-tom loop and a single mid-tom shot carry the rest, low density,
   ready for a build.

Extra one-bar fill (tag `fill`, auto-injected every 4th bar):
**`afro_house_fill_conga_turnaround_01`** — high and low congas trade a
rising phrase through beats 3–4 with the clap doubling on the last beat, the
"extra hand-drum phrase every eighth bar" IQSounds recommends.

## Swing mapping

Afro House sits at a moderate shuffle — Orphiq and IQSounds both describe a
felt but subtle pocket, well short of Amapiano or 3-Step's heavier swing.
Patterns here use engine `swing` 0.05–0.09 for the tighter Afro-Tech-leaning
grooves (`afro_house_afrotech_driver_01`, `afro_house_riser_kick_dropout_01`)
up to 0.08–0.09 for the deeper, more organic grooves
(`afro_house_organic_live_01`, the half-time and tom-drift breakdowns), with
`afro_house_deep_djembe_01` reaching 0.20 to notate Attack Magazine's heavily
swung "crispy 16th hat" specifically. MPC swing S% maps to
`(S − 50) × 2 / 100`.

## Sources

- Orphiq — What Is Afro House? — https://orphiq.com/resources/what-is-afro-house
- Melodigging — Afro House (genre page) — https://www.melodigging.com/genre/afro-house
- Melodigging — Afro-Tech (genre page) — https://www.melodigging.com/genre/afro-tech
- Beatportal — Step-by-Step Guide to Creating an Afro House Track (Keinemusik, Black Coffee, Caiiro, Alex Wann style) — https://www.beatportal.com/articles/647491-step-by-step-guide-to-creating-an-afro-house-track-keinemusik-black-coffee-caiiro-alex-wann-style
- IQSounds — Afro House Drum Programming Guide — https://iqsounds.com/blogs/news/afro-house-drum-programming-guide
- The Producer School — How to Make Afro House Like Black Coffee (Complete Tutorial) — https://theproducerschool.com/blogs/featured-blogs/how-to-make-afro-house-like-black-coffee-complete-tutorial
- The Producer School — How to Make Afro-Tech Music Like Da Capo, Joezi — https://theproducerschool.com/blogs/featured-blogs/how-to-make-afro-tech-music-like-da-capo-joezi
- Attack Magazine — Beat Dissected: Deep Afro House — https://www.attackmagazine.com/technique/beat-dissected/deep-afro-house/
- Samplesound — The Ultimate Guide to Afro House Production in 2025 — https://www.samplesoundmusic.com/blogs/news/the-ultimate-guide-to-afro-house-production-in-2025-tips-tricks-and-techniques
- Samplesound — How To Write An Afro House Groove, Pt. 1 — https://www.samplesoundmusic.com/blogs/academy/how-to-write-an-afro-house-groove-pt-1

All 21 pattern files in `patterns/afro_house/` predate this documentation
pass; this doc and `styles/afro_house.json` describe the approaches already
implemented there and were written without adding, removing or modifying any
pattern file.
