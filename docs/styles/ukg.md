# UK Garage / 2-Step (`ukg`)

**Tempo range:** 128–136 BPM (classic 2-step sits around 130–133; the 2020s revival often pushes 134–136; 4x4 garage can drop to ~128–130).

## Drum DNA

UK garage drums are defined by what the kick *doesn't* do: instead of four-on-the-floor, the classic 2-step kick lands on beat 1 plus syncopated 16th placements (the a-of-2, the and-of-3), deliberately leaving beat 3 empty so the bassline can breathe. The snare or clap anchors beats 2 and 4 without exception — it is the only fixed point in the groove. Everything else shuffles: 16th hi-hats carry heavy MPC-style swing (60–69% in classic productions, i.e. every second 16th delayed by 20–36% of a step) with pronounced accent contours, and the pocket is filled with skippy ghost kicks, rim-shot ghosts and snare drags at low velocity. Open hats answer on offbeats and get choked by the next closed hat. The modern revival keeps the grammar but tightens the swing, weights the kick and backbeat much harder, and adds its signature ascending rim-shot runs (often on triplet grids in the originals, approximated here as swung 16th runs).

## The 10 approaches

1. **`ukg_classic_2step_01` — Classic 2-step shuffle.** Kick on 1 + a-of-2 + and-of-3, ~62% MPC swing (0.25), skippy accented hats, bar-end open hat, rim ghosts. Reference: MJ Cole "Sincere", Artful Dodger "Re-Rewind".
2. **`ukg_4x4_bump_01` — 4x4 garage hybrid.** Four-on-the-floor kick under a garage clap, offbeat open hats bumped by light swung 16th closed hats, snare ghost skips. Reference: DJ EZ sets, Shanks & Bigfoot "Sweet Like Chocolate" era.
3. **`ukg_dark_garage_01` — Dark garage.** Sparse syncopated kicks, rim-led skip language, almost no hats — the dubby space that became dubstep. Reference: Zed Bias "Neighbourhood", El-B, Horsepower Productions.
4. **`ukg_bumpy_organ_01` — Bumpy organ era.** Bouncing kick (1, and-of-2, a-of-3), low-tom bumps shadowing the organ bass, driving 8th hats with 16th skips, clap accents. Reference: Wookie "Battle", "Scrappy".
5. **`ukg_todd_cutup_01` — Todd Edwards cut-up feel.** US-garage 4x4 kick that drops/displaces beat 3 in bar 2, rolling 16th tambourine contour, conga stabs syncopated like chopped vocal snippets. Reference: Todd Edwards "Saved My Life", his Tuff Jam-era remixes.
6. **`ukg_modern_revival_01` — 2020s revival bounce.** Tighter swing (0.15), very heavy kick and layered snare+clap backbeat, offbeat hats, ascending rim runs into downbeats. Reference: Interplanetary Criminal "B.O.T.A.", Sammy Virji.
7. **`ukg_perc_organic_01` — Percussive organic garage.** Four bars of high/low conga conversation over a migrating 2-step kick, glued by a full 16th shaker with rolling accents. Reference: salute, Main Phase.
8. **`ukg_minimal_dub_01` — Minimal dubby garage.** The 2-step skeleton: kick on 1 + one syncopation per bar, deepest swing in the set (0.26), whispering rim ghosts, unchoked open hats. Reference: stripped late-era 2-step; the palette Burial inherited.
9. **`ukg_fill_snare_run_01` — Snare-run fill** (tag `fill`). Accelerating swung snare crescendo through beat 4 into the next downbeat — the classic garage MC-drop turnaround.
10. **`ukg_fill_rim_skip_01` — Rim-skip fill** (tag `fill`). Modern-revival rim shots trading with mid/low toms through the second half of the bar.

## Swing mapping

Classic-era references quote MPC swing of 60–69% (Attack Magazine's UK Garage dissection uses MPC16 swing 68/69; Rolling 2-Step recommends 60–65%). MPC swing S% places the second 16th at S% of the 8th-note pair, so the engine's `swing` (fraction of a step to delay odd 16ths) maps as `(S − 50) × 2 / 100`: 60% → 0.2, 62% → 0.24, 65% → 0.3. The patterns span 0.13 (4x4) to 0.26 (minimal dub); the revival patterns sit lower (0.15–0.18) because modern UKG grooves are tighter and lean on triplet-grid ornaments instead of deep global swing.

## Sources

- Attack Magazine — Beat Dissected: UK Garage — https://www.attackmagazine.com/technique/beat-dissected/uk-garage/
- Attack Magazine — Beat Dissected: Rolling 2-Step — https://www.attackmagazine.com/technique/beat-dissected/rolling-2-step-garage/
- Attack Magazine — Beat Dissected: Interplanetary Criminal-Style Garage — https://www.attackmagazine.com/technique/beat-dissected/interplanetary-criminal-style-garage/
- Attack Magazine — Beat Dissected: Garage Shuffle — https://www.attackmagazine.com/technique/beat-dissected/garage-shuffle/
- Studio Brootle — UK Garage Drum Pattern — https://www.studiobrootle.com/uk-garage-drum-pattern-with-presets-and-bassline/
