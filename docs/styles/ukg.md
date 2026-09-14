# UK Garage / 2-Step (`ukg`)

**Tempo range:** 128–136 BPM (classic 2-step sits around 130–133; the 2020s revival often pushes 134–136; 4x4 garage can drop to ~128–130).

## Drum DNA

UK garage drums are defined by what the kick *doesn't* do: instead of four-on-the-floor, the classic 2-step kick lands on beat 1 plus syncopated 16th placements (the a-of-2, the and-of-3), deliberately leaving beat 3 empty so the bassline can breathe. The snare or clap anchors beats 2 and 4 without exception — it is the only fixed point in the groove. Everything else shuffles: 16th hi-hats carry heavy MPC-style swing (60–69% in classic productions, i.e. every second 16th delayed by 20–36% of a step) with pronounced accent contours, and the pocket is filled with skippy ghost kicks, rim-shot ghosts and snare drags at low velocity. Open hats answer on offbeats and get choked by the next closed hat. The modern revival keeps the grammar but tightens the swing, weights the kick and backbeat much harder, and adds its signature ascending rim-shot runs (often on triplet grids in the originals, approximated here as swung 16th runs).

## Sound selection & drum machines

Classic UKG was a *sampler* genre, not a drum-machine genre: producers loaded 808/909/707-style hits, LinnDrum/DrumTraks-era snares and chopped breaks into an Akai MPC or S-series sampler and let the MPC's swing template do the rest. The revival works the same way inside a DAW, mostly with sample-pack rims and Ableton stock kits. Per role:

- **Kick.** Short and punchy, tuned *up* rather than down so the bassline owns the sub. Attack Magazine's UK Garage dissection pitches an MPC-sampled kick up +3 semitones, tightens the decay and rolls off below 30 Hz; the Rolling 2-Step dissection layers a 909 kick with a 707 for snap (plus a shaker and vinyl dust) and puts a deeper 808 kick underneath only where weight is needed. Interplanetary Criminal-style revival uses a "punchy, no sub tail" kick for the same reason. Owned sources: Roland TR-909 / TR-808 / TR-707, Akai MPC60 / MPC3000 (sample and swing them there for period-correct 12-bit crunch).
- **Snare / clap / rim.** Composite snares are the norm: two snappy electronic layers (Attack uses Alesis DM5 hits; Alesis HR-16/SR-16 are the nearest substitutes) plus a TR-808 snare pitched up a couple of semitones for crack. Rim shots do the skipping: Attack uses two rims, one reverbed, the second pitched +2; the revival layers a Splice rim under the snare and runs a TR-707 rim on a 1/16-triplet grid for fills. LinnDrum / DrumTraks snares give the late-80s US-garage flavour; Todd Edwards' skippy hits came from an Ensoniq EPS — the Akai S900 is the closest 12-bit stand-in.
- **Hats.** A closed hat with the attack softened, and for the offbeat a slightly longer hat or a cabasa ("very bright but not as harsh" — Attack). Decay is the key parameter: between closed and open, matched to tempo. The revival adds a 1/8 echo throw on the offbeat hat (Interplanetary Criminal dissection). TR-909 / TR-707 / CR-78 hats all work; MPC swing 60–69%.
- **Percussion.** Real shaker and tambourine samples with genuine velocity variation and shortened hits (Rolling 2-Step), congas for the organic lane, and re-pitched Amen slices in the revival (breakbeat libraries). Vinyl crackle under everything is a period habit.
- **Cymbals.** One crash at the start of a phrase to mark sections, EQ'd (cut up to ~700 Hz) and reverbed; rides are rare.
- **Layering / processing habits that drive sample choice.** Everything is chosen to survive bus drive and crunch: Attack runs the drum group through Drum Buss (25% drive / 27% crunch), uses Soothe-style resonance suppression on hats and cabasa, and automates a group high-pass in breakdowns. Pick samples with clean transients and short tails — the swing does the work, not the decay.
- **Reference tracks.** MJ Cole "Sincere" (1998); Artful Dodger "Re-Rewind" (1999); Wookie "Battle" (2000); Todd Edwards "Saved My Life" (1995); Zed Bias "Neighbourhood" (2000); Interplanetary Criminal "B.O.T.A." (2022).

## The 10 approaches

1. **`ukg_classic_2step_01` — Classic 2-step shuffle.** Kick on 1 + a-of-2 + and-of-3, ~62% MPC swing (0.25), skippy accented hats, bar-end open hat, rim ghosts. Reference: MJ Cole "Sincere", Artful Dodger "Re-Rewind".
2. **`ukg_4x4_bump_01` — 4x4 garage hybrid.** Four-on-the-floor kick under a garage clap, offbeat open hats bumped by light swung 16th closed hats, snare ghost skips. Reference: DJ EZ sets, Shanks & Bigfoot "Sweet Like Chocolate" era.
3. **`ukg_dark_garage_01` — Dark garage.** Sparse syncopated kicks, rim-led skip language, almost no hats — the dubby space that became dubstep. Reference: Zed Bias "Neighbourhood", El-B, Horsepower Productions.
4. **`ukg_bumpy_organ_01` — Bumpy organ era.** Bouncing kick (1, and-of-2, a-of-3), low-tom bumps shadowing the organ bass, driving 8th hats with 16th skips, clap accents. Reference: Wookie "Battle", "Scrappy".
5. **`ukg_todd_cutup_01` — Todd Edwards cut-up feel.** US-garage 4x4 kick that drops/displaces beat 3 in bar 2, rolling 16th tambourine contour, conga stabs syncopated like chopped vocal snippets. Reference: Todd Edwards "Saved My Life", his Tuff Jam-era remixes.
6. **`ukg_modern_revival_01` — 2020s revival bounce.** Tighter swing (0.15), very heavy kick and layered snare+clap backbeat, offbeat hats, ascending rim runs into downbeats. Reference: Interplanetary Criminal "B.O.T.A.", Sammy Virji.
7. **`ukg_perc_organic_01` — Percussive organic garage.** Four bars of high/low conga conversation over a migrating 2-step kick, glued by a full 16th shaker with rolling accents. Reference: salute, Main Phase.
8. **`ukg_minimal_dub_01` — Minimal dubby garage.** The 2-step skeleton: kick on 1 + one syncopation per bar, deepest swing in the set (0.26), whispering rim ghosts, unchoked open hats. Reference: stripped late-era 2-step; the palette Burial inherited.
9. **`ukg_breakstep_hybrid_01` — Breakstep / 2-step-with-a-break hybrid.** Drops 2-step's rolling shuffle (swing down to 0.1) for a straighter, breakbeat-derived kick/snare skeleton — kick on 1 and the amen-style '&-of-3', clap still fixed on 2 and 4, chopped ghost-snare/rim hits standing in for the break's ratatat fills. Reference: Deekline "I Don't Smoke", DJ Zinc "138 Trek".
10. **`ukg_amen_revival_01` — 2020s sped-up amen over garage.** Keeps the classic 2-step kick/clap skeleton intact but threads a rapid chopped-amen texture — paired ghost hits at double time across rim and toms — through it, the way jungle breaks get sliced and dropped into contemporary garage sets. Reference: the PinkPantheress-era jungle/garage crossover, Nia Archives-style amen chops.

## Fills

1–2 one-bar turnarounds (tag `fill`), auto-injected into grooves of the same style every N bars.

- **`ukg_fill_snare_run_01` — Snare-run fill.** Accelerating swung snare crescendo through beat 4 into the next downbeat — the classic garage MC-drop turnaround.
- **`ukg_fill_rim_skip_01` — Rim-skip fill.** Modern-revival rim shots trading with mid/low toms through the second half of the bar.

## Risers

Build-ups (tag `riser`, 2–4 bars) that lead into a drop. In UKG the build is the MC's "rewind" moment: the snare accelerates (backbeat → 8ths → 16ths → 32nds), hats double, the 2-step kick either straightens to 4/4 or drops out, and the loudest hits sit at the very end — sometimes followed by an empty 16th or two so the drop lands on silence.

- **`ukg_riser_snare_climb_01`** (4 bars) — Classic MC-drop build: 2-step kick for two bars, 4/4 in bar 3, gone in bar 4 while the snare climbs from backbeat to a full 16th roll peaking at 127; hats double from 8ths to 16ths, crash marks bar 3.
- **`ukg_riser_rewind_32nd_01`** (2 bars, 32 steps) — The rewind on a 32nd grid: 16ths in bar 1, kick dropped in bar 2, snare tightens to 32nds ramping to 127, last two 32nds silent.
- **`ukg_riser_hat_double_01`** (4 bars) — Hat-density build: swung 8ths → 16ths → fully accented lattice with open hats on every offbeat; toms mark bar ends, kick straightens to 4/4 in bar 4 so the drop can flip back to 2-step.
- **`ukg_riser_kick_dropout_01`** (2 bars) — Heavy 4/4 bar, then the kick vanishes: shaker bed, accelerating clap stutters and a low-mid-high tom climb, loudest clap+snare on the last 8th, final 16th empty.
- **`ukg_riser_rim_run_revival_01`** (2 bars, swing 0.15) — 2020s revival: heavy kick and layered backbeat, then an ascending rim run hands over to snare 16ths and a crash-topped 127 on the last step.

## Breakdowns

Stripped sections (tag `breakdown`, 2–4 bars) that sit before a riser: kick removed or reduced to a single soft downbeat, skippy hats / rims / shakers carrying the shuffle, claps sparse (often beat 4 only).

- **`ukg_breakdown_skippy_hats_01`** (2 bars, swing 0.24) — No kick; the swung skippy hat contour is the groove, rim ghosts in the pocket, clap thinning from 2+4 to beat 4 only.
- **`ukg_breakdown_rim_shuffle_01`** (2 bars) — The rim takes over the kick's 2-step placements at decoration velocity; one soft downbeat kick, quiet 16th shaker, snare only on beat 4 of bar 2.
- **`ukg_breakdown_shaker_bed_01`** (4 bars) — Contoured 16th shaker bed, tambourine entering in bar 3, clap alone on beat 4, a single kick in bar 4 announcing the build.
- **`ukg_breakdown_dub_space_01`** (2 bars, swing 0.26) — Minimal dub: one quiet kick, rim whispers, clave ticks as crackle, one unchoked open hat per bar, snare on beat 4 of bar 2 only.
- **`ukg_breakdown_conga_call_01`** (2 bars) — Percussion-only: high/low conga call-and-response over offbeat hats and shaker, clap on 2 and 4 in bar 2, no kick at all.

## Swing mapping

Classic-era references quote MPC swing of 60–69% (Attack Magazine's UK Garage dissection uses MPC16 swing 68/69; Rolling 2-Step recommends 60–65%). MPC swing S% places the second 16th at S% of the 8th-note pair, so the engine's `swing` (fraction of a step to delay odd 16ths) maps as `(S − 50) × 2 / 100`: 60% → 0.2, 62% → 0.24, 65% → 0.3. The patterns span 0.13 (4x4) to 0.26 (minimal dub); the revival patterns sit lower (0.15–0.18) because modern UKG grooves are tighter and lean on triplet-grid ornaments instead of deep global swing.

## Sources

- Attack Magazine — Beat Dissected: UK Garage — https://www.attackmagazine.com/technique/beat-dissected/uk-garage/
- Attack Magazine — Beat Dissected: Rolling 2-Step — https://www.attackmagazine.com/technique/beat-dissected/rolling-2-step-garage/
- Attack Magazine — Beat Dissected: Interplanetary Criminal-Style Garage — https://www.attackmagazine.com/technique/beat-dissected/interplanetary-criminal-style-garage/
- Attack Magazine — Beat Dissected: Garage Shuffle — https://www.attackmagazine.com/technique/beat-dissected/garage-shuffle/
- Studio Brootle — UK Garage Drum Pattern — https://www.studiobrootle.com/uk-garage-drum-pattern-with-presets-and-bassline/
- Native Instruments Blog — Everything you need to know about UK garage music and how to make it (Battery kit, off-grid hats, drop on bar 25 with a one-bar beat dropout) — https://blog.native-instruments.com/uk-garage-music/
- The Producer School — Master UK Garage Production (kick dropout before the drop, uplifters + snare fill + backspin transitions) — https://theproducerschool.com/blogs/featured-blogs/master-uk-garage-production-complete-guide-to-filthy-basslines-and-swing-drums
- The Producer School — How to Program UK Garage Drums (offbeat open hats, syncopated closed 16ths, ghost velocities) — https://theproducerschool.com/blogs/featured-blogs/how-to-program-uk-garage-drums-complete-guide-for-producers
- Ghost Syndicate — How to Make UK Garage in Ableton Live (filtered drums, white-noise risers, remove/reintroduce the existing groove) — https://ghostsyndicate.audio/how-to-make-uk-garage-ableton-live/
- Attack Magazine — 10 Snare Rolls For The Drop (speed-up roll, velocity ramp, build-and-pause, ratatat) — https://www.attackmagazine.com/technique/tutorials/10-snare-rolls-for-the-drop/
- MusicRadar — How to create the ultimate snare roll build-up (909 snare, velocity 16→max, deleted final hits) — https://www.musicradar.com/how-to/how-to-create-the-ultimate-snare-roll-build-up
- Bass Culture — Rewind: The Rise of the UK Garage MC (the reload/rewind ritual) — https://bassculture.substack.com/p/rewind-the-rise-of-the-uk-garage
- Ransom Note — New Jersey to Old Kent Road: How Todd Edwards Shaped UK Garage (Ensoniq EPS, micro-sampling) — https://www.theransomnote.com/music/interviews/new-jersey-to-old-kent-road-how-todd-edwards-shaped-uk-garage/
- Minimal Audio — Beat Breakdown: UK Garage Tutorial (two-snare layering, four tonally different hats) — https://blog.minimal.audio/uk-garage/
- EDMProd — How to Create an EDM Build-Up (8-bar build anatomy: drums enter without kick, staggered peaks) — https://www.edmprod.com/ultimate-guide-build-ups/
- Wikipedia — Breakstep (genre history: evolved from 2-step, breakbeat-derived kick/snare pattern at garage tempo, Deekline "I Don't Smoke", DJ Zinc "138 Trek") — https://en.wikipedia.org/wiki/Breakstep
- Attack Magazine — Beat Dissected: Raw Drum & Bass (breakbeat kick/snare skeleton: kick on steps 1 & 11, snare on 5 & 13, swung ghost hi-hats) — https://www.attackmagazine.com/technique/beat-dissected/raw-drum-bass/
- Mixmag — The 20 Best Tracks That Sample The Amen Break (amen break cultural reference and notable uses) — https://mixmag.net/feature/the-20-best-tracks-that-sample-the-amen-break
- Soniare — Amen Break Deconstructed: 50 Years of Jungle Evolution (chopping/rearranging technique, ghost notes, 2020s use by Nia Archives) — https://www.soniare.net/blog/amen-break-deconstructed
- Orphiq — What Is Jungle Music? Breakbeats, BPM, and Drum & Bass (sped-up amen tempo history 130→170 BPM, 2020s jungle/garage crossover) — https://orphiq.com/resources/what-is-jungle-music
