# Hard Techno (`hard_techno`)

**Tempo range:** 145–160 BPM (peak-time festival hard techno sits at 150–155; the 2020s industrial/warehouse wave around Sara Landry, I Hate Models, Klangkuenstler and Nico Moreno lives at 148–158; above 160 you are in schranz-revival / uptempo territory, below 145 it reads as peak-time or industrial techno).

## Drum DNA

Hard techno drums are a kick with things around it. The kick is short, punchy and distorted (Futureproof: "hits like a hammer"), and it is almost always a **dual system**: a main kick plus a *rumble* — the kick sent to a parallel return with 3–5 s of reverb, heavy distortion, low-passed at 150–200 Hz and sidechained back to the kick, so what you hear between kicks is a pumping sub bump on the offbeats. Sara Landry describes the same stack from the other side: kick, top layer, "a little bit of a roll", sub layer, reverse groove kick, then five nested layers of distortion.

Around that: **sharp offbeat hi-hats** (EDMProd's one-line description of the genre — "heavy distorted kicks, sharp offbeat hi-hats and a bit of percussion"), closed 16ths kept below ~70% velocity so the transient never fights the kick, a **909 ride in 8ths with quieter alternate hits**, and *schranz*-adjacent percussion loops — compressed, filtered rim/conga/clave 16th loops where "percussion plays the biggest role" (Soundbridge's schranz definition). Snares are optional and often *not* on 2 and 4: Attack's Thumping Techno dissection puts an octave-down 808 snare on offbeat 16ths, Phase Fatale-style tracks lay a breakbeat snare cycle over the 4/4. Claps, when present, are huge and layered and used for call-and-response 16th rolls. The **offbeat double-kick "gallop"** (a softer kick on the 16th before each beat) links modern producers to Liebing-era schranz.

Arrangement is the biggest difference from hard dance: hard techno "moves through breakdowns and re-entries, not through 16-bar build-ups with snare rolls" (Producer School); a new element arrives roughly every 8 bars, drops are sudden, and the *fake drop* (short snare fill + riser + impact, then the real drop) is the one build-up cliché the genre embraces. Swing is essentially zero.

## Sound selection & drum machines

**Kick.** Short (60–120 ms body), pitch-enveloped from a higher pitch to the fundamental in the first 10–20 ms, hard-clipped and saturated; every producer designs their own so kicks do not phase in DJ mixes (Landry). Start from a **Roland TR-909** or a LinnDrum kick (Attack's Thumping Techno uses a LinnDrum kick through compression and analogue overdrive) and layer a sine sub; a **Jomox Xbase09 / Mbase01** (I Hate Models used a Jomox Xbase 999) gives the analogue punch and pitch sweep natively. The rumble is not a sample — build it as a parallel return from the kick. Sonic Academy Kick 2 is the standard synthesised alternative. Keep everything under 150 Hz mono.

**Snare / clap / rim.** Noise-synth or **909** snare on 2 and 4 for the industrial lane (Attack: "synth noise generator, analogue overdrive"); **TR-808** snare pitched down nearly an octave and low-passed for the thumping lane; **909 rim** tuned high and low with heavy overdrive as bar-start accents. Claps are 909/808 stacked with a snare and a room reverb, or a big rave clap (Novation Drumstation / Quasimidi 309 give period-correct rave claps).

**Hats.** 909 closed hat, often resampled through an **E-mu SP-1200** for 12-bit grit (Attack's Industrial Techno runs the 909 hat through the SP-1200), low-passed with resonance and ~8 dB drive; 909 open hat compressed; **909 ride** high-passed above 1 kHz and sidechained to the kick. Machinedrum metallic hats fit the schranz lane.

**Percussion.** Bitcrushed low toms (909/808 through Decimort-style 6-bit crushing), woodblock/clave, congas from **TR-727 / TR-505** filtered and compressed into loops, metallic clanks and found sound in the cowbell slot, shakers high-passed at 24 dB/oct. **Elektron Machinedrum** and **Korg ER-1** are ideal for synthesised metallic perc; **Simmons SDS** toms for the descending tom cascades.

**Cymbals.** One crash on the drop only; ride as a groove element, not a cymbal wash.

**Layering / processing that affects sample choice.** Pick samples with a clean transient and let the distortion chain add body — five stages of gentle drive rather than one heavy stage (Landry); high-pass a kick roll as it accelerates (EDMProd) so 16th kicks do not smear; sidechain everything (rumble, ride, perc) to the main kick; the more processing, the simpler the pattern (Attack Industrial: "aggressive, crunchy sound through cumulative processing rather than intricate programming").

**Reference tracks.** Sara Landry — Lord of the Land (2022); Alt8 & Sara Landry — Heaven (2024); I Hate Models — Daydream (2017); Klangkuenstler & Sant — Toter Schmetterling (2024); 999999999 — No Sleep (2019); Marco Leckbert — Schranz Will Never Die (2024); Nico Moreno — Bring The Hardness (2021).

## The 10 approaches

1. **`hard_techno_rumble_offbeat_01` — Rumble + offbeat hats.** The canonical warehouse loop: 4/4 kick, rumble bumps on the offbeats (tomLow slot = rumble/sub layer), closed 16ths under 70%, open hat on every offbeat, 909 ride 8ths with soft alternates. Reference: Sara Landry "Lord of the Land", Alt8 & Sara Landry "Heaven".
2. **`hard_techno_gallop_kick_01` — Gallop kick.** Offbeat double kick: a softer kick on the 16th before each beat, thinning to beats 2 and 4 in bar 2. Reference: Klangkuenstler & Sant "Toter Schmetterling", Marco Leckbert.
3. **`hard_techno_schranz_loop_01` — Schranz percussion loop.** Compressed 16th rim loop, congas and clave as the lead instrument over a rigid 909 kick. Reference: Chris Liebing "Stigmata" era, SveTec.
4. **`hard_techno_industrial_snare_01` — Industrial snare.** Noise snare on 2 and 4, offbeat hats, shaker every second offbeat, bitcrushed tom ducked around kick and hat, metallic clank. Reference: I Hate Models "Daydream", Dax J.
5. **`hard_techno_ride_driver_01` — Ride driver.** 909 ride in loud/soft 8ths as the engine, open hats offbeat, no closed hats, clap 2 and 4. Reference: Alt8 & Sara Landry "Heaven", Nico Moreno.
6. **`hard_techno_thumping_snare_01` — Thumping offbeat snare.** LinnDrum kick, octave-down 808 snare on offbeat 16ths instead of 2/4, tuned rims at bar starts, tom on the final offbeat, ride mirroring the kick. Reference: Attack "Thumping Techno", Perc, Setaoc Mass.
7. **`hard_techno_clap_stack_01` — Clap stack + roll.** Layered clap/snare backbeat with a 16th clap roll through beat 4 of bar 2. Reference: 999999999 "No Sleep", Creeds "Push Up".
8. **`hard_techno_acid_breakbeat_01` — Breakbeat snare over 4/4.** Phase Fatale-style five-hit snare cycle over two bars, clap on every beat, open hat every offbeat, muted conga answer. Reference: I Hate Models "Daydream" / "Warehouse Memories".
9. **`hard_techno_polymeter_3bar_01` — Three-bar polymeter.** 12-step rim figure and clave cycle across three bars against 4/4 kick and offbeat hats — Sara Landry's "loop every three bars for a gallop-y feeling". Reference: Sara Landry, Klangkuenstler.
10. **`hard_techno_warehouse_minimal_01` — Warehouse minimal.** Kick, sharp offbeat hats and almost nothing else; a ride creeps into bar 2. Reference: Klangkuenstler, Nico Moreno.

Extra one-bar fill (tag `fill`, auto-injected every 4th bar): **`hard_techno_fill_kick_roll_01`** — 4/4 kick breaking into an 8th-then-16th kick roll through beat 4.

## Risers

1. **`hard_techno_riser_kick_roll_01`** — Kick roll build: 4/4 → 8ths → 16ths with velocity climbing to 127 and a hat wall rising underneath; crash on the last 16th.
2. **`hard_techno_riser_snare_accel_01`** — 32nd-grid speed-up snare roll (8ths → 16ths → 32nds, 66 → 127); kick plays bar 1 then drops out so the re-entry hits; snare + kick + crash on the final step.
3. **`hard_techno_riser_ride_double_01`** — Ride goes from alternating 8ths to a rising 16th roll, open hats double into 16ths, claps on the last two offbeats, pickup kick + crash.
4. **`hard_techno_riser_gap_01`** — Build-up-and-pause: half a bar of ramping 16th kicks, then total silence, then one kick + clap + crash on the last 16th before the drop.
5. **`hard_techno_riser_tom_descend_01`** — Tom cascades (high → mid → low) lengthening each beat and becoming full 16th cascades with claps on the fourth 16th; pickup kick and crash.

## Breakdowns

1. **`hard_techno_breakdown_hats_only_01`** — Kick removed; offbeat hats, alternating ride and a soft 16th shaker hold the tempo; one clap and open hat cue the return.
2. **`hard_techno_breakdown_halftime_kick_01`** — Kick on 1 and 3 only, softer offbeat hats, rim ghosts, rumble echoes on 2 and 4.
3. **`hard_techno_breakdown_perc_loop_01`** — The schranz percussion loop running alone without kick or hats; a lone snare on 4 of bar 2.
4. **`hard_techno_breakdown_rumble_only_01`** — One kick on the downbeat, then only rumble/sub bumps on the offbeats under soft open hats.
5. **`hard_techno_breakdown_reverse_kick_01`** — Four bars of reverse-kick swells (tomLow slot) doubling every two bars, growing claps and a ride entering in bars 3–4.

## Swing mapping

Hard techno is straight. Attack's related dissections quote 50–54% (Dark Techno Rumble) and 50–60% (Industrial, Thumping) on the MPC/Maschine scale, i.e. engine `swing` 0–0.2, but the 2020s hard techno wave sits at the bottom of that range: all patterns here use `swing: 0`. If you want the "gritty analogue" feel, 52–54% (0.04–0.08) is the ceiling before the offbeat hats start to lag the rumble. Groove comes from velocity contour (hats ≤ 70%, ride loud/soft alternation) and from polymetric loops, not from timing offsets. MPC swing S% maps to `(S − 50) × 2 / 100`.

## Sources

- Attack Magazine — Beat Dissected: Dark Techno Rumble — https://www.attackmagazine.com/technique/beat-dissected/dark-techno-rumble/
- Attack Magazine — Beat Dissected: Industrial Techno — https://www.attackmagazine.com/technique/beat-dissected/industrial-techno/
- Attack Magazine — Beat Dissected: Thumping Techno — https://www.attackmagazine.com/technique/beat-dissected/thumping-techno/
- Attack Magazine — Beat Dissected: Hypnotic Techno inspired by Phase Fatale's "Love Is Destructive" — https://www.attackmagazine.com/technique/beat-dissected/hypnotic-techno-inspired-by-phase-fatales-love-is-destructive/
- Attack Magazine — 10 Snare Rolls For The Drop — https://www.attackmagazine.com/technique/tutorials/10-snare-rolls-for-the-drop/
- Ableton — Sara Landry: High-End Hard Techno — https://www.ableton.com/en/blog/sara-landry-high-end-hard-techno/
- Futureproof Music School — How to Make Hard Techno: Kick Design, Rumble, and Club Mixing — https://futureproofmusicschool.com/blog/making-hard-techno-a-path-to-unique-sound-design
- EDMProd — What is Hard Techno? — https://www.edmprod.com/what-is-hard-techno/
- EDMProd — How To Make Techno: 11 Need-To-Know Techniques — https://www.edmprod.com/how-to-make-techno/
- EDMProd — How to Create an EDM Build-Up — https://www.edmprod.com/ultimate-guide-build-ups/
- The Producer School — How to Create Hard Techno: A Step-by-Step Guide — https://theproducerschool.com/blogs/featured-blogs/how-to-create-hard-techno-a-step-by-step-guide
- Studio Brootle — Techno Technique: Hard Techno Bass Gallop — https://www.studiobrootle.com/techno-technique-hard-techno-bass-gallop/
- Studio Brootle — Making a Techno Rumble Kick in Ableton Live — https://www.studiobrootle.com/making-a-techno-rumble-kick-in-ableton-live-step-by-step/
- Studio Brootle — Techno Drum Patterns and Programming Tips — https://www.studiobrootle.com/techno-drum-patterns-and-drum-programming-tips/
- Hardcultr — Hardstyle vs Hard Techno: BPM & Sound — https://www.hardcultr.com/guides/hardstyle-vs-hard-techno-explained/
- Soundbridge — Schranz (genre definition, history) — https://www.soundbridge.io/schranz
- Beatportal — Hard Techno: The Top-Selling Tracks, Artists, and Labels of 2024 — https://www.beatportal.com/articles/780594-hard-techno-the-top-selling-tracks-artists-and-labels-of-2024
- YouTube — "Klangkuenstler Style - Hard/Schranz Techno Tutorial [+Free Project File]" — https://www.youtube.com/watch?v=l4sCdTfuBW4
- YouTube — "Nico Moreno Style - Hard Techno Tutorial [+Free Project File]" — https://www.youtube.com/watch?v=pvgySIJA52g
