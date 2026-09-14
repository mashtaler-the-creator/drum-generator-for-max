# Jersey Club (`jersey_club`)

**Tempo range:** 130–140 BPM (classic Jersey club sits 130–140 with a lot of tracks landing at or near 140; its Baltimore-club parent runs slower, roughly 125–130).

## Drum DNA

Jersey club's identity is a single rhythmic figure: the **5-kick pattern**. Two independent production breakdowns converge on the exact same 16th-grid positions — **kick hits on steps 1, 5, 9, 12 and 15**, i.e. a quarter note, a quarter note, then a dotted-eighth, a dotted-eighth and an eighth (gap sequence 4-4-3-3-2). The first half of the bar reads as a plain half-time pulse; the back half compresses into a **3-3-2 grouping — the same tresillo figure that drives Afro-Caribbean and Latin rhythm** — and that compression is the "bounce" everyone means when they call Jersey club's kick "triplet-based." Producers are told explicitly not to quantize it flat: **"nudge the fourth and fifth kicks and vary velocities"**, with the final kick given the shortest, quietest tail so it reads as a pickup into the next bar rather than an accent.

Around the kick, the genre is deliberately sparse: hats are "sparse compared to trap, frequently just closed hats on 2 and 4," with an open hat on the **"and" of 2 and 4** doing the rhythmic "skip" work a closed-hat pattern would do in house or trap. The clap/snare sits **against the kick run rather than on a flat backbeat**. And the whole thing is built to carry **chopped vocal hooks** — short, one- or two-syllable stabs repeated in staccato runs — plus the genre's calling-card ear-candy, the **"bed squeak"**: a high-pitched sample lifted from the intro of Trillville's 2004 single "Some Cut," dropped on off-beats as a rhythmic accent.

Jersey club's lineage runs **Baltimore club (DJ Tameil brought it to Newark house parties, c. 1999–2000 as "Brick City club music") → Jersey club proper (DJ Sliink, UNIIQU3, Nadus, R3LL through the 2010s) → Philadelphia's sibling "Philly club" scene (faster, clickier hats, the PBNJ Philly/Baltimore/NJ cross-pollination)**, and then into the mainstream: Ciara's "Level Up" (2018) and Cookiee Kawaii's TikTok-viral "Vibe (If I Back It Up)" (2020, nearly two million uses) carried the sound to pop audiences through the 2022–26 crossover era.

## Sound selection & drum machines

**Kick.** Short and punchy, frequently doubled with an 808 for weight, run through the 5-hit skeleton above; velocity is varied across the five hits rather than left uniform, and the pattern is never fully quantized. A **Roland TR-909 or TR-808** kick, driven hard, is the standard source.

**Snare / clap / rim.** The clap answers the kick run rather than landing on a flat 2-and-4; Baltimore-lineage grooves instead use a real snare on 2 and 4, closer to the parent genre's house/hip-hop hybrid backbeat. **In this pattern set the sampled "bed squeak" and the chopped-vocal stab rhythm are voiced on the `rim` and `perc` roles** — there's no dedicated "vocal chop" or "squeak" slot in the schema, so the short, bright, off-beat transient of the squeak maps onto `rim`, and denser chop-stutter rhythms map onto `perc`.

**Hats.** Sparse — closed hat on 2 and 4 is the baseline; open hat on the & of 2 and 4 provides the "skip." Philly club and the 2020s club/drill hybrid lane run much denser, near-constant 16th or triplet-feel hat rolls instead.

**Percussion.** Minimal to none beyond the squeak/chop layer above; tambourine is used sparingly in some breakdowns as a shaker-style pulse-keeper rather than a core groove element.

**Cymbals.** Essentially unused; the open hat's rhythmic "skip" function does the job a crash or ride would do elsewhere.

**Layering / processing.** An **Akai MPC2000/3000** is the archetypal tool for chopping the Trillville "bed squeak" and vocal hooks into the stutter runs that define the genre; an **E-mu SP-1200** suits grittier, lower-fidelity Baltimore-lineage breakbeat voicings; an **Elektron Machinedrum** covers the denser, more synthesised hats of 2020s club/drill hybrids.

**Reference tracks.** DJ Tameil / Brick Bandits (Brick City club foundations); DJ Sliink (international breakthrough); UNIIQU3 (PBNJ scene); Cookiee Kawaii — "Vibe (If I Back It Up)" (2020); Ciara — "Level Up" (2018); R3LL (2020s production).

## The 10 approaches

1. **`jersey_club_five_kick_core_01` — Five-kick core.** The canonical skeleton (steps 1,5,9,12,15), rim standing in for the bed squeak, hats on 2 and 4 only, clap answering the kick run.
2. **`jersey_club_five_kick_bounce_01` — Triplet bounce.** The same skeleton with light swing and varied velocities plus rim ghost hits syncing to a chopped vocal stab against the kick's back half.
3. **`jersey_club_baltimore_breakbeat_01` — Baltimore club lineage.** The pre-Jersey ancestor: 125–130 BPM breakbeat with syncopated 8th kicks under a steady snare backbeat, showing what DJ Tameil carried from Baltimore into Brick City club.
4. **`jersey_club_philly_click_01` — Philly click.** Philadelphia's faster, clickier sibling scene: near-constant closed-hat 16ths and a doubled kick back half for extra aggression.
5. **`jersey_club_triplet_pickup_01` — Loose triplet pickup.** The 5-kick pattern voiced with the "nudge, don't quantize" advice taken literally — velocity does all the work of making the 4th/5th kicks read later and softer.
6. **`jersey_club_vocal_chop_stutter_01` — Vocal chop stutter.** Dense perc 16th stutters (standing in for a chopped vocal hook) interlock into every gap the kick run leaves open.
7. **`jersey_club_double_kick_run_01` — Doubled kick run.** Two 5-kick-derived cells share the bar for a denser, more relentless, almost drill-adjacent bounce.
8. **`jersey_club_open_hat_skip_01` — Open hat skip.** The open hat's "and of 2 and 4" placement becomes the lead groove element over a simplified 3-hit kick.
9. **`jersey_club_pop_crossover_01` — Pop crossover.** A cleaned-up 2022–26 radio-ready voicing in the Cookiee Kawaii / UNIIQU3 / "Level Up" lineage: bigger simple clap accents, even 8th hats, fewer competing layers.
10. **`jersey_club_drill_hybrid_01` — Club/drill hybrid.** The 5-kick base under a sliding triplet-feel hi-hat roll grafted from contemporary drill programming, reflecting 2020s cross-pollination.

Extra one-bar fill (tag `fill`, auto-injected every 4th bar): **`jersey_club_fill_kick_double_01`** — the 5-kick pattern's back half doubles into a dense kick run through beat 4.

## Risers

1. **`jersey_club_riser_kick_roll_01`** — Bar 2 breaks the 5-kick pattern's back half into a straight 16th kick roll climbing to 127, the classic "run it up" transition.
2. **`jersey_club_riser_hat_roll_01`** — A drill-style hi-hat roll accelerating 8ths → 16ths → a dense burst, over the standard kick pattern, into a final open-hat + kick hit.
3. **`jersey_club_riser_vocal_chop_stutter_01`** — The chopped-vocal stutter itself becomes the riser: perc hits fill in from sparse to every 16th, velocity climbing throughout.
4. **`jersey_club_riser_snare_build_01`** — A clap/snare roll building 8ths → 16ths through bar 2 while the kick thins out, both landing on a final unison hit.
5. **`jersey_club_riser_gap_01`** — Build-and-pause: the 5-kick pattern ramps, then total silence, then a single kick+clap+open-hat slam announces the drop.

## Breakdowns

1. **`jersey_club_breakdown_no_kick_01`** — Kick removed entirely; hats and the bed-squeak (rim) carry the pulse alone.
2. **`jersey_club_breakdown_halftime_01`** — Only the first 4-4 pair of the 5-kick run survives; clap dropped entirely.
3. **`jersey_club_breakdown_chop_loop_01`** — The chopped-vocal stutter loops alone with no kick and no clap, the a-cappella-style break Jersey club edits favour mid-record.
4. **`jersey_club_breakdown_shaker_pulse_01`** — A tambourine pulse under a single downbeat kick and a sparse rim accent.
5. **`jersey_club_breakdown_open_hat_wash_01`** — Sustained open hats over a minimal, re-entering kick pulse building back toward the full pattern.

## Swing mapping

The genre's "triplet" feel is not swing in the MPC sense — it comes from the kick's own **4-4-3-3-2 gap structure** (a fixed rhythmic figure, not a timing offset) plus **deliberately non-quantized velocity**, per the explicit production advice to nudge the fourth and fifth kicks rather than swing the whole grid. Patterns here therefore use `swing` sparingly: `0` for most 5-kick grooves (the bounce already lives in the note placement), rising to 0.02–0.08 only where a source specifically describes a looser, more human pocket (the triplet-pickup and bounce variants, and the Baltimore-lineage breakbeat groove, which does carry real swing from its house/hip-hop hybrid parent). MPC swing S% maps to `(S − 50) × 2 / 100`.

## Sources

- Native Instruments Blog — How to make a Jersey club track — https://blog.native-instruments.com/jersey-club/
- Orphiq — What Is Jersey Club? Sound, BPM, and Kick Pattern — https://orphiq.com/resources/what-is-jersey-club
- BeatsToRapOn — How to Make a Jersey Club Beat: BPM, Drums & Vocal Chops — https://beatstorapon.com/blog/how-to-make-a-jersey-club-beat/
- The FADER — The Sky's The Limit: An Oral History of Jersey Club — https://www.thefader.com/2014/06/12/the-skys-the-limit-an-oral-history-of-jersey-club
- DJ Mag — The endless evolution of Jersey club — https://djmag.com/features/endless-evolution-jersey-club
- Wikipedia — Jersey club (history reference only) — https://en.wikipedia.org/wiki/Jersey_club
- HUNGER Magazine — Cookiee Kawaii's Guide to Jersey Club — https://hungermag.com/editorial/cookiee-kawaiis-guide-to-jersey-club
- The FADER — Meet Cookiee Kawaii, the Jersey club savant who wants you to "throw it back" — https://www.thefader.com/2020/02/19/cookiee-kawaii-vibe-interview-tiktok-jersey-club
