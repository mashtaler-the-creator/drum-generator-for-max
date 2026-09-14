# Jazz House / Disco House (`jazz_house`)

**Tempo range:** 118–126 BPM (jazz house classic and deep cuts sit at 118–123; disco house and nu-disco push to 121–126; Attack Magazine's "Jazzy House" dissection uses 123, its "Programming A Nu-Disco Beat" uses 121).

## Drum DNA

Jazz house and disco house are two branches of the same tree: house's four-on-the-floor skeleton played by producers who came up on jazz, soul and disco records rather than drum machines alone, so the drums are built to sound *played* first and *programmed* second. The single biggest lever separating the two lanes — and the whole point of this style — is **swing**. Attack Magazine's "Jazzy House" beat-dissection template runs "MPC 16 Swing – 59" (engine `swing` 0.18); the deep/dusty Moodymann-adjacent lane pushes toward 66% (0.32), the edge of full shuffle where a groove "reads as more jazz/blues than hip-hop or house" (Padwolf's MPC swing explainer); disco house pulls the other way, sitting tight at 54-55% (0.08-0.10) so the groove stays club-functional. Every pattern in this style states its swing percentage explicitly and the ten approaches deliberately span the whole practical range.

Under that swing sits a **live-feel kick** rather than a hard-clipped one: Attack's dissection stresses that "velocities are crucial to making it sound more human," and the St Germain/Masters At Work school goes further, slipping quiet **ghost kicks** off the main grid the way a live drummer's foot would drift. A **clap, not a snare, carries 2 and 4** in almost every pattern — often preceded by a soft ghost note (Attack: "increase the Vol<Vel to 100%… to keep ghost notes as subtle as possible") — while disco house instead **flams** two clap layers a few milliseconds apart for its thicker backbeat. Where the hats stop, **congas, bongos and rim shots take over as a "conversation"**: call-and-response loops in the Kerri Chandler/Nuyorican Soul tradition, and a ride used as a genuine lead-groove voice rather than a wash. On the disco side, a continuous 16th **shaker bed shaped like a sidechain release** (Attack's nu-disco dissection specifies roughly a 230ms release time on the shaker's sidechain) does the same job hats do elsewhere, and a descending three-tom fill marks section changes the way a disco edit would.

Kerri Chandler's own account of his gear crystallizes the "live but electronic" ethos this style is built around: he modified his TR-909 to "extend the range on pitch and velocity on all the analogue pots," giving himself "a whole new scope" for exactly the kind of humanized, non-quantized hits this style's patterns model.

## Sound selection & drum machines

**Kick.** Live-feel, not hard-clipped: humanized velocity on every hit (Attack), with a quiet ghost kick occasionally slipped off the main 16th grid (St Germain/MAW school) rather than a second full-velocity hit. A 909 — ideally Chandler-style "Chandlerized" with extended pitch/velocity range — is the standard base; disco house wants it punchier and more clipped, closer to a LinnDrum/LM-1 kick than a soft 909.

**Clap / snare.** A clap on 2 and 4, not a snare, is the default backbeat across the jazz-house lane — 909/808 — usually with a soft ghost note leading in. Disco house flams two clap layers a fraction of a second apart per Attack's nu-disco dissection ("clap programmed a fraction of a second after the kick, snare playing almost simultaneously"). True ghosted snares (rather than claps) belong only to the Moodymann/Theo Parrish deep lane, dusted with low-velocity ghost hits around the main backbeat.

**Hats.** Swung 16ths are the entire groove engine — MPC swing 54-67% mapped via `(S − 50) × 2 / 100`. Akai MPC60/2000/3000 is the historical and functional reference point every pattern's swing value targets; jazzy/deep patterns lean toward the shuffled top of that range, disco-house patterns stay tight (54-55%) and substitute a loud open hat on every offbeat 8th for a busy closed-hat lattice.

**Percussion.** TR-727/TR-505 congas and claves for call-and-response loops (Chandler, Nuyorican Soul school); a continuous 16th shaker with a sidechain-release-shaped velocity contour for the disco-house lane; E-mu SP-1200 / Akai S900 resampling for the dusty 12-bit texture Moodymann and Theo Parrish built their records on.

**Cymbals.** One crash marks a section start or stands in for a disco string hit (per Attack's nu-disco fill, "a disco string hit on the very first downbeat"); the ride otherwise carries the groove as a lead voice, alternating loud/soft 8ths, never washing it.

**Layering / processing habits that drive sample choice.** Groove-quantize with swing and nudge percussion for pocket rather than gridding everything (general MPC-swing production practice); parallel-compress the drum bus and use gentle tape/transformer saturation on the kit the way the jazz-house palette treats keys and bass; on the disco side, sidechain the shaker specifically (not just the bass) to the kick so its release shapes the whole groove's pump.

**Reference tracks.** St Germain — Rose Rouge (2000); Kerri Chandler — Bar A Thym (1996); Moodymann — Shades of Jae (1997); Folamour — Cathédrale (2018); Purple Disco Machine — Hypnotized (2020); Dimitri From Paris — Sacrebleu (1996).

## The 10 approaches

1. **`jazz_house_swung_16th_01` — Canonical swung 16th.** Attack's own "Jazzy House" template: MPC swing 59% (0.18), humanized kick, clap with a ghost-note lead-in, swung 16th hats, muted cowbell accent. Reference: Attack Magazine "Jazzy House".
2. **`jazz_house_ghost_kick_01` — Ghost-kick live feel.** Quiet ghost kicks slipped off the main grid, rim skips instead of a busy hat pattern, swing 58% (0.16). Reference: St Germain "Rose Rouge", Masters At Work/Nuyorican Soul.
3. **`jazz_house_rim_ride_language_01` — Rim/ride language.** No hats at all: a loud/soft ride and a rim call-and-response carry the entire groove, swing 56% (0.12). Reference: Larry Heard, Glenn Underground.
4. **`jazz_house_conga_loop_01` — Conga loop.** High/low conga call-and-response drives the groove Nuyorican Soul style, swing 60% (0.20). Reference: Nuyorican Soul, Kerri Chandler "Bar A Thym".
5. **`jazz_house_moodymann_lofi_01` — Moodymann lo-fi.** The deepest swing in the set, 66% (0.32); ghosted snare with surrounding ghost hits instead of a clean clap, constant low shaker bed. Reference: Moodymann, Theo Parrish.
6. **`jazz_house_folamour_loop_01` — Folamour filtered loop.** The same loop across both bars, but bar 2 adds a second clap layer and denser hats/shaker — Folamour's "start low, rear up" build habit. Swing 58% (0.16).
7. **`disco_house_filtered_loop_01` — Disco filtered loop.** Punchy kick, open hat on every offbeat, a flammed clap. Swing tightens to 55% (0.10). Reference: Purple Disco Machine "Hypnotized".
8. **`disco_house_dimitri_edit_01` — Dimitri edit feel.** Panned bongo call-and-response instead of hats, a disco string-hit crash on the first downbeat, three-tom descending fill closing bar 2. Swing 54% (0.08). Reference: Dimitri From Paris "Sacrebleu".
9. **`disco_house_shaker_bed_01` — Shaker bed.** A continuous 16th shaker shaped like a ~230ms sidechain release drives the groove under offbeat open hats. Swing 54% (0.08), the tightest pattern in the set.
10. **`jazz_house_mpc_swing_deep_01` — MPC swing showcase.** A deliberate top-of-the-scale demonstration at 67% (0.34) — the point where swing tips into full shuffle — with deliberately sparse, laid-back hits so the delay is unmistakable.

Extra one-bar fill (tag `fill`, auto-injected every 4th bar): **`jazz_house_fill_rim_run_01`** — the swung groove plays through beat 3, then a rim run ascends through the last four 16ths into the next downbeat.

## Risers

Jazz house and disco house build through **density and swing-tightening**, not noise walls — a percussion loop thickens, a hat pattern rolls tighter, a kick swells from half-time to a roll — while keeping the genre's live-feel character intact.

1. **`jazz_house_riser_perc_build_01`** — Conga call-and-response grows from moderate to a full 16th cascade across 2 bars, joined by an entering shaker; clap swells into a crash-topped final hit.
2. **`jazz_house_riser_hat_roll_01`** — Bar 2 tightens the hat pattern into a rolling 16th line climbing from 52 to 115; kick holds steady 4/4 throughout so only the hats signal the build.
3. **`jazz_house_riser_clap_stutter_01`** — The 2/4 clap stutters into a rapid climbing roll from beat 3 through the end of bar 2; hats drop out to let the stutter cut through.
4. **`disco_house_riser_tom_climb_01`** — The nu-disco tom fill turned into a full riser: low, mid then high toms enter in ascending order before cascading together into the final two steps.
5. **`jazz_house_riser_kick_swell_01`** — The kick itself builds: half-time in bar 1, full 4/4 in bar 2, then a roll to 127 on the last beat as the clap and hats thin away.

## Breakdowns

Kick removed or halved, percussion/ride/shaker carrying the groove, claps sparse — the space a live-feel Rhodes solo, vocal or string sample sits in before the groove rebuilds.

1. **`jazz_house_breakdown_ride_only_01`** — Kick removed; the loud/soft ride and rim ghosts carry the 59%-swing feel alone over a soft shaker.
2. **`jazz_house_breakdown_conga_call_01`** — No kick at all: a high-conga call answered by a low-conga response is the entire pattern, deepest swing outside the Moodymann lane (60%).
3. **`disco_house_breakdown_shaker_string_01`** — Kick removed; a swelling shaker and a sparse beat-4 clap pulse fill the space where the disco string hit would sit, one crash standing in for that accent.
4. **`jazz_house_breakdown_rim_ghost_01`** — No kick: scattered low-velocity rim ghosts sit over a soft shaker bed, one clap cueing the return.
5. **`jazz_house_breakdown_halftime_kick_01`** — Kick pulled back to 1 and 3 only while the swung hats and a soft 2/4 clap keep the full groove's feel alive at lower intensity.

## Swing mapping

This style exists to demonstrate MPC-swing range: `swing` values run from 0.08 (54% MPC, disco house) to 0.34 (67% MPC, the deep-swing showcase). MPC swing S% delays every second 16th by a controllable amount; the engine's `swing` field is the fraction of a step that delay represents, so it maps as `(S − 50) × 2 / 100` — 54% → 0.08, 58% → 0.16, 59% → 0.18 (Attack's own "Jazzy House" value), 60% → 0.20, 66% → 0.32, 67% → 0.34. As a rule of thumb: 50-53% reads as barely-there (trap/drill territory), 54-58% is "the sweet spot for boom bap and modern hip-hop" and doubles as disco house's ceiling, 58-62% is "classic MPC feel" and where most of the jazz-house patterns in this set sit, and 66%+ is "full shuffle — more jazz/blues than hip-hop," reserved here for the Moodymann and MPC-showcase patterns. Riser and breakdown patterns keep a single representative swing value even where the _approach text describes the groove "tightening toward the drop," since the engine's `swing` field is set once per pattern rather than animated per step.

## Sources

- Attack Magazine — Beat Dissected: Jazzy House — https://www.attackmagazine.com/technique/beat-dissected/jazzy-house/
- Attack Magazine — Beat Dissected: Programming A Nu-Disco Beat — https://www.attackmagazine.com/technique/beat-dissected/programming-a-nu-disco-beat/
- Padwolf — MPC Swing Explained: How the MPC Swing Algorithm Works — https://padwolf.app/learn/mpc-swing-explained/
- The Vinyl Factory — Drum patterns and memories: 12 artists reflect on iconic drum machines (Kerri Chandler's "Chandlerized" 909) — https://www.thevinylfactory.com/features/drum-patterns-and-memories-12-artists-reflect-on-iconic-drum-machines
- Billboard — Folamour Interview: 'Movement Therapy' — https://www.billboard.com/music/features/folamour-interview-movement-therapy-1235997711/
- Wikipedia — St Germain (musician) — https://en.wikipedia.org/wiki/St_Germain_(musician)
- Wikipedia — Moodymann — https://en.wikipedia.org/wiki/Moodymann
- Melodigging — Jazz House (genre overview) — https://www.melodigging.com/genre/jazz-house
