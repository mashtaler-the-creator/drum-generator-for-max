# Speed Garage

**Tempo range:** 130–140 BPM; the sweet spot for the classic anthems and the modern revival alike is **135–140** (patterns here hint 135–140).

## Drum DNA

Speed garage is US garage house pushed to UK rave pressure: a steady, heavy **four-to-the-floor kick** (occasionally doubled into a 16th pair, or skipped and displaced to the offbeat for a proto-2-step lurch), paired with **complex, shuffling, syncopated 16th hi-hats** — the swing lives in the hats, not the kick. The **snare/clap lands hard on 2 and 4**, decorated with skippy low-velocity snare bounces and ghost hits at bar ends. **Open hats sit on the 8th-note offbeats.** Everything is programmed to leave room for the real lead instrument — the warped, jungle-derived sub/Reese bassline — so kicks are punchy without long sub tails and arrangements stay uncluttered. Classic-era swing sits around 60–65% (about 0.2–0.3 in this engine's swing units); the 2020s revival tends sparser and slightly tighter, with delay-throw hat echoes and glitchy rim runs.

## Sound selection & drum machines

Speed garage's drum palette is US house hardware run through UK jungle habits: 909-family hits and swapped-floppy sample disks loaded into 12-bit samplers (Double 99 built "RipGroove" on an E-mu SP-1200 with a disk from DJ Disciple), pitched up and played fast so the warped DX100/Juno sub-bass could sit underneath. Per role:

- **Kick.** A deep, housey 909-style kick with a short tail — "punchy, not subby" — often lightly distorted (The Producer School uses Decapitator-style drive) so it reads on a big system without fighting the Reese bass. Owned: Roland TR-909 (the anchor), TR-808 (a quieter second layer when the tune has no sub), E-mu SP-1200 / Akai S900 / MPC60 for the period 12-bit crunch. Bit-reducing the whole kit to 12-bit is a documented shortcut to the '97 texture.
- **Snare / clap / rim.** Two jobs: a big 909 snare or 909/808 clap stack slamming 2 and 4, and a second, lower, shorter "skippy" snare for the offbeat bounces — TPS builds this from a sampled top loop with individual clap layers added on top; MusicRadar's bassline recipe puts a low snare ~4 dB under the clap. Rims (TR-707 / TR-808) supply timbale-style chatter in the skip-kick grammar.
- **Hats.** The 909 open hat on every 8th offbeat, frequently bit-reduced, plus short closed 16ths with a strong e-and-a accent contour swung 60–65%. Keep decays short: the offbeat hat is the pulse, the closed hats are texture. TR-909 / TR-707 / CR-78 hats.
- **Percussion.** A live shaker under the hats, tambourine offbeats and congas for the US-house lane (TR-727 or LinnDrum congas), and — a habit inherited from jungle — a high-passed breakbeat loop under the programmed kit for grit (breakbeat libraries). Vinyl-texture samples for glue.
- **Cymbals.** Crash on drop entrances and section markers; a bright ride only for peak-time variations.
- **Layering / processing habits.** Sampler crunch, drive on the kick, high-passed break loops and "everything short" so the bass has the low end to itself. Choose samples that stay punchy after clipping; long decays get lost.
- **Reference tracks.** Double 99 "RipGroove" (1997); 187 Lockdown "Gunman" (1997); Sneaker Pimps "Spin Spin Sugar (Armand Van Helden Dark Garage Mix)" (1997); Tuff Jam "Need Good Love" (1997); Serious Danger "Deeper" (1997); Interplanetary Criminal "Supreme Level" (2021).

## The 10 approaches

1. **`sg_rip_groove_pump`** — The 1997 anchor groove: relentless 4x4 with an extra and-of-3 kick in bar 2, dominant backbeat snare+clap, offbeat open hats over a shuffled closed-hat contour, skippy snare ghosts at bar ends. Ref: Double 99 "RIP Groove".
2. **`sg_gunman_skip`** — Skip-kick grammar: bar 1 adds the and-of-3 kick; bar 2 skips beat 3 entirely and replaces it with a doubled 16th pair, over timbale-flavoured skippy rim chatter. Ref: 187 Lockdown "Gunman" / "Kung-Fu".
3. **`sg_shuffle_organ`** — Maximum-shuffle hat language: full 16th closed hats with a strong e-and-a accent contour (the Attack Magazine 60–65% swing zone), counter-accented shaker underneath, one ghost kick pickup. Ref: Attack Magazine "Garage Shuffle" school, organ-led '97 cuts.
4. **`sg_nyc_pump`** — The US-house side of the DNA: near-straight swing, heavy pumping kick, tambourine offbeats and a two-bar conga conversation instead of shuffled hats. Ref: Armand Van Helden's 1996–97 UK remixes (Sneaker Pimps "Spin Spin Sugar", CJ Bolland "Sugar Is Sweeter").
5. **`sg_revival_sparse`** — 2020s revival minimalism: offbeat hats with quiet 16th "delay-throw" echoes, huge space for the sub, a glitchy consecutive-rim run in bar 2, skipped beat-4 kick displaced late in bar 4. Ref: Interplanetary Criminal "Supreme Level", Bklava.
6. **`sg_bassline_bounce`** — Bassline-leaning revival bounce: loud offbeat open hats carry the groove, closed hats only on "a" pickups, doubled 16th kick pushing into beat 3, and-of-4 snare bounce, sparse cowbell. Ref: Silva Bumpa, Higgo.
7. **`sg_peaktime_ride`** — Peak-time rave-room build: crash-marked 4-bar phrase, accented 8th ride instead of closed hats, low tom answering the sub line, doubled kicks into the loop restart, bar-4 snare build. Ref: the big-room end of '97 — Tuff Jam, Serious Danger "Deeper".
8. **`sg_twostep_flip`** — The 4x4-to-2-step hinge: bar 1 full four-to-the-floor, bar 2 drops the beat-3 kick and displaces it to the offbeat, broken skippy hats and a snare bounce answering the gap. Ref: late-'98 transition records toward 2-step (Dem 2, early Steve Gurley).
9. **`sg_reese_roller`** — Reese-bass driven roller: a continuous, hypnotic groove built to frame a detuned reese sub — steady unvarying 4x4 kick, an unbroken offbeat open-hat pulse, a full swung 16th hat carpet built from layered loop elements instead of accent-contour hits, so the low end owns the room throughout rather than via phrase-level builds. Ref: the reese-bass-centred remix template (The Producer School), Attack Magazine's Reese Bass Redux.
10. **`sg_bakey_grit`** — Modern revival, Bakey-style grit: harder and more breakbeat-flecked than the sparse Interplanetary Criminal lane — heavier kick with a doubled 16th pickup, scattered breakbeat-style tom/rim hits standing in for "crisp breaks", tighter swing than either the classic era or the sparse revival. Ref: Bakey "Under Control", "Tribute" LP.

## Fills

1–2 one-bar turnarounds (tag `fill`), auto-injected into grooves of the same style every N bars.

- **`sg_snare_roll_fill`** — 1-bar turnaround fill: kick stays 4x4 while a skippy snare roll ramps through the second half of the bar; hats thin out to make room.
- **`sg_tom_drop_fill`** — 1-bar sub-drop signpost: hats fall away, a descending high-mid-low tom cascade mimics the bassline dive, doubled 16th kicks slam into the next downbeat.

## Risers

Build-ups (tag `riser`, 2–4 bars). Speed garage builds rarely lose the floor for long: the 4/4 kick pumps (often with doubled 16th pairs) while the snare accelerates from backbeat to 16ths and 32nds and the open hats grow louder; the kick drops out only for the final bar, if at all, and the loudest hits are the last ones.

- **`sg_riser_snare_roll_4bar_01`** (4 bars) — 4/4 kick through bars 1–3, snare from backbeat → 8th pickups → 16th roll, kick out in bar 4 while the snare peaks at 127 and hats double; crash on bar 3.
- **`sg_riser_ripgroove_rewind_01`** (2 bars, 32 steps) — The reload build with the kick kept relentless: snare 16ths from beat 3, then 16ths → 32nds in bar 2 ramping so the four loudest hits are the final 32nds.
- **`sg_riser_tom_climb_01`** (2 bars) — Low → mid → high toms mirroring a rising bassline, doubled 16th kick pairs, snare climbing to 127; crash marks the start.
- **`sg_riser_hat_frenzy_01`** (4 bars, swing 0.24) — Hat-doubling shuffle: offbeat open hats only → skippy closed 16ths → full lattice with shaker → open hats on every 8th while the snare rolls to 127 and the kick reduces to the downbeat.
- **`sg_riser_kick_stutter_gap_01`** (2 bars, 32 steps) — Kick stutters in 16ths then 32nds, a 32nd snare rush peaks at 127 and the last two 32nds are silent — the sub-drop gap.

## Breakdowns

Stripped sections (tag `breakdown`, 2–4 bars): kick removed or reduced to a soft downbeat, skippy snares / open hats / congas carrying the pulse, one clap per bar.

- **`sg_breakdown_skippy_snare_01`** (2 bars) — Skippy low-velocity snare bounces and rim ghosts over quiet offbeat open hats, clap thinning to beat 4 only.
- **`sg_breakdown_open_hat_float_01`** (2 bars) — Offbeat open hats as the only constant, 'a'-pickup closed hats, one soft downbeat kick, one clap per bar.
- **`sg_breakdown_conga_dub_01`** (4 bars, swing 0.12) — Two-bar conga conversation with variations, tambourine from bar 2, clap on beat 4, kick returning on 1 and 3 of bar 4.
- **`sg_breakdown_ride_shimmer_01`** (2 bars) — Quiet contoured 8th ride, 16th shaker, drifting snare ghosts, a single clap closing bar 2; no kick.
- **`sg_breakdown_rim_glitch_01`** (2 bars, 32 steps) — Revival breakdown: offbeat hats with 32nd delay-throw echoes, glitchy consecutive-rim runs at bar ends, one clap per bar, no kick.

## Sources

- Attack Magazine — Beat Dissected: Garage Shuffle (swing 60–65%, kick/ghost-hat velocity practice): https://www.attackmagazine.com/technique/beat-dissected/garage-shuffle/
- Attack Magazine — Beat Dissected: Interplanetary Criminal-Style Garage (revival hat delay-throw, rim glitch runs, velocity variation): https://www.attackmagazine.com/technique/beat-dissected/interplanetary-criminal-style-garage/
- The Producer School — How to Make Speed Garage (138–140 BPM sweet spot, 4x4 kick, skippy offbeat snares, offbeat open hats): https://theproducerschool.com/blogs/featured-blogs/how-to-make-speed-garage-complete-production-tutorial
- Mneemo — UK Garage vs Speed Garage vs Bassline (tempo brackets, steady 4x4 vs 2-step, shuffling syncopated hats, Reese bass context): https://www.mneemo.com/blog/uk-garage-vs-speed-garage-vs-bassline-2026/
- Sample Market UK — How to Recreate 3 Classic Speed Garage Drum Patterns (classic-era pattern references): https://samplemarket.co.uk/blog/how-to-recreate-3-classic-speed-garage-drum-patterns
- DJ Mag — How Double 99's 'Ripgroove' lit the fuse for speed garage in the UK (SP-1200 drums from a swapped disk, DX100 + Juno-106 bass, after-hours pitched-up energy): https://djmag.com/features/how-double-99s-ripgroove-lit-fuse-speed-garage-uk
- Attack Magazine — Beat Dissected: Rolling 2-Step (909 + 707 kick layering, 808 kick underneath, live shaker/tambourine velocity practice): https://www.attackmagazine.com/technique/beat-dissected/rolling-2-step-garage/
- Native Instruments Blog — UK garage guide (one-bar beat dropout before the drop, 'Ripgroove' Dred bass reference): https://blog.native-instruments.com/uk-garage-music/
- MusicRadar — Build a bassline house beat in 4 steps (clap + low snare layering, closed hat + ride offbeat pair): https://www.musicradar.com/how-to/build-a-bassline-house-beat-in-4-steps
- Attack Magazine — 10 Snare Rolls For The Drop (speed-up roll, velocity ramp, build-and-pause): https://www.attackmagazine.com/technique/tutorials/10-snare-rolls-for-the-drop/
- MusicRadar — How to create the ultimate snare roll build-up (909 snare, 8-bar velocity ramp): https://www.musicradar.com/how-to/how-to-create-the-ultimate-snare-roll-build-up
- EDMProd — How to Create an EDM Build-Up (8-bar anatomy, drums entering without kick): https://www.edmprod.com/ultimate-guide-build-ups/
- Attack Magazine — Reese Bass Redux (reese bass history and character, why drums stay short/punchy around it): https://www.attackmagazine.com/technique/tutorials/reese-bass-redux/
- The Producer School — How to Create a Speed Garage Remix from Scratch (drum loops layered around the bass for a continuous rolling groove): https://theproducerschool.com/blogs/featured-blogs/how-to-create-a-speed-garage-remix-from-scratch-complete-tutorial
- UKF — In Conversation With Bakey (breakbeat-garage fusion, "compact drum patterns with motoring hooks and a formidable low-end"): https://ukf.com/read/in-conversation-with-bakey/
- Beatportal — Bakey's Debut Album Is A Love Letter To UK Sound System Culture ("crisp breaks and rolling basslines", 2-step/breakbeat/jungle/D&B/dubstep fusion): https://www.beatportal.com/articles/1133295-bakeys-debut-album-is-a-love-letter-to-uk-sound-system-culture
