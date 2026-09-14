# Melodic Techno (`melodic_techno`)

**Tempo range:** 120–126 BPM (Wikipedia gives 120–128; Beatportal's Afterlife-lineage guide says 122–125; NI's walkthrough is at 122, EDMProd's CamelPhat guide at 125; Attack's Deep & Melodic and Ethereal dissections sit at 118–124).

## Drum DNA

Melodic techno drums are driving but restrained: the kick is warm and punchy with a subtle tail on every beat, mixed to leave room for the arps and pads that carry the track. The backbeat is a **short, snappy clap on 2 and 4** — or, in the deeper Afterlife / Innervisions lane, a clap so sparse it appears once every two bars drenched in hall reverb. The top end is the identity: **offbeat open hats**, **constant 16th closed hats with the offbeat hit emphasised** (EDMProd calls this "a huge thing in melodic techno"), usually two hat layers nudged a few milliseconds apart, and a **rolling 16th shaker** with a real velocity contour. Percussion is tuned to the key: **tom and conga arpeggios**, LinnDrum sidestick syncopations, rim-shot bursts, cowbell arpeggios (Attack's Ethereal Techno runs a cowbell through an arpeggiator), and — in the Anyma era — two-16th "burst" hits filling the gaps a gated lead leaves.

Everything is placed to *not* clash: percussion is nudged a few ms off the hats, toms are ducked around the kick, the clap is filtered below 200 Hz. Swing is small but present — Attack uses Maschine 10% on both dissections. Arrangement follows 8-bar sections: intro (kick + hats + atmosphere), full drums, melody, breakdown (kick out, hats/shaker carry), build (clap doubling, snare roll under the kick), drop. Energy is reduced by *removing* elements — NI's walkthrough drops the shaker and rim first — rather than by changing the kick.

## Sound selection & drum machines

**Kick.** Warm 4/4 kick with a short tail, tuned to the key: Attack's Deep & Melodic dissection is entirely **TR-808** with a tuned 808 kick; Ethereal uses a **707/808/LinnDrum** kit with the kick tuned +1 semitone to the key; Battery/Deep Matter style layered kicks (main + click layer) for the CamelPhat/Anyma lane. Scoop low mids so the bass and pads sit in.

**Snare / clap / rim.** **808 clap** with hall reverb (Attack), **909 clap** for the tight Afterlife backbeat, a clap transposed +4 semitones or a snare detuned −14 semitones as textural hits (Ethereal), **LinnDrum sidestick** as the syncopated rim, **808 rim** for high-frequency detail. Rim/snap layers for the Anyma bursts: a short noisy perc transient layered under an FM hit.

**Hats.** Two closed-hat layers: an **808** or **707** hat on the offbeats plus a second layer with variable velocity, high-passed around 1.3 kHz and flanged or panned (Attack); **909** open hat on the offbeats or — Ethereal-style — long open hats on the main beats with LFO ducking. **Roland CR-78 / TR-606-style** hats for the softer, hissy layer. Nudge one hat layer a few ms.

**Percussion.** Tuned percussion is the genre's melodic drum voice: **808 congas and toms** tuned to the key, **TR-727** congas and **Simmons SDS** toms for tom arpeggios, **808 maracas / cabasa** as the 16th shaker, **808 cowbell** through an arpeggiator, clave for call-and-response, **Korg M1 / Fairlight** for pitched perc textures. Live shaker samples add the velocity contour.

**Cymbals.** Ride in soft 8ths in the progressive lane (Bodzin); crash only on phrase starts; a lot of the "cymbal" content is actually reverb tails and 16th noise textures.

**Layering / processing that affects sample choice.** Pick samples that tune cleanly (808 congas, toms, cowbell) — everything pitched sits in the key; glue the drum group with a slow-attack/fast-release compressor (2–3 dB) and tape emulation (Attack); sidechain hats and shaker lightly to the kick; big hall reverbs on sparse claps; a 16th noise layer (Analog/Operator noise with filter automation) is a common substitute for a second hat.

**Reference tracks.** Tale Of Us — Monument (2017); ARTBAT — Return To Oz (Monolink remix) (2019); Anyma & Chris Avantgarde — Eternity (2022); Anyma — Genesys (2023); Stephan Bodzin — Strand (Afterlife, 2018); Adriatique — Home (2019); Âme — Rej (2005).

## The 10 approaches

1. **`melodic_techno_afterlife_drive_01` — Afterlife drive.** Kick 4/4, tight clap 2 and 4, open hat every offbeat, 16th closed hats with the offbeat emphasised, rolling 16th shaker with a 4-step contour. Reference: Tale Of Us "Monument", Anyma & Chris Avantgarde "Eternity".
2. **`melodic_techno_808_sparse_clap_01` — 808 sparse clap (4 bars).** All-808 kit: tuned kick, offbeat hats, 16th maracas, a reverbed clap only on bars 2 and 4, conga and tom answering every two bars. Reference: Attack "Deep & Melodic Progressive Techno", Stephan Bodzin "Strand", Adriatique.
3. **`melodic_techno_tom_arp_01` — Tom arpeggio.** Descending high/mid/low tom figure each half bar over kick, clap and offbeat open hats. Reference: ARTBAT "Return To Oz", Stephan Bodzin.
4. **`melodic_techno_ethereal_open_hat_01` — Ethereal open hat.** Long open hats on the beats, closed on the offbeats, LinnDrum sidestick syncopations, detuned snare and 2-bar clap, cowbell arpeggio. Reference: Attack "Ethereal Techno", Mind Against, Tale Of Us "Nova Two".
5. **`melodic_techno_rolling_shaker_01` — Rolling shaker (NI grid).** Broken 16th hat pattern, syncopated shaker and a four-16th rim burst from NI's melodic techno walkthrough. Reference: Native Instruments blog, Anyma.
6. **`melodic_techno_anyma_burst_01` — Anyma bursts.** Two-16th rim/snap bursts at the ends of beats 2 and 4, big clap, offbeat hats. Reference: Anyma "Genesys", Anyma & Chris Avantgarde "Consciousness".
7. **`melodic_techno_progressive_ride_01` — Progressive ride.** Alternating 8th ride, offbeat open hats, clap + soft snare, shaker entering in bar 2. Reference: Stephan Bodzin "Powers Of Ten", Adriatique.
8. **`melodic_techno_conga_call_01` — Conga call-and-response.** High/low congas trading phrases, clave answers in bar 2, soft 16th hats. Reference: Âme "Rej", Adriatique, early Tale Of Us.
9. **`melodic_techno_minimal_hypnotic_01` — Minimal hypnotic intro.** Kick and offbeat closed hats only, rim ghosts, clap and open hat arriving in bar 2. Reference: Tale Of Us "Monument" intro, Kevin de Vries.
10. **`melodic_techno_syncopated_clap_01` — Syncopated clap.** Clap on beat 2 only with delay-echo claps in bar 2, shakers on the fourth 16th of each beat, noise-stab tom. Reference: Attack "Dark Berlin Techno", Mind Against, Recondite.

Extra one-bar fill (tag `fill`, auto-injected every 4th bar): **`melodic_techno_fill_tom_run_01`** — high-to-low tom run through beats 3–4 ending on a snare pickup.

## Risers

1. **`melodic_techno_riser_snare_build_01`** — 32nd-grid snare build (8ths → 16ths → 32nds, 48 → 127) with the kick kept 4/4 underneath, crash on the final 32nd.
2. **`melodic_techno_riser_hat_double_01`** — Closed hats double from 8ths to rising 16ths, open hats join as 16ths, claps step up every beat of bar 2, crash.
3. **`melodic_techno_riser_clap_accel_01`** — Four-bar compounding clap roll (quarters → 8ths → 16ths → 16ths at 127) with a lifting shaker and open-hat 16ths in the last bar.
4. **`melodic_techno_riser_kick_out_01`** — Rising 16th snare and shaker under the kick, kick removed in bar 2, one 16th of silence, snare + kick + crash on the last step.
5. **`melodic_techno_riser_tom_cascade_01`** — Tom cascade: high toms on beats, mid on offbeats, then 8th / 16th rolls handing from high to mid to low toms at 127 with crash.

## Breakdowns

1. **`melodic_techno_breakdown_hats_shaker_01`** — Kick removed; offbeat open hats and 16th shaker carry the groove, one reverbed clap.
2. **`melodic_techno_breakdown_half_kick_01`** — Kick on the downbeat only (then 1 and 3), soft offbeat hats, rim ghosts, one open hat and clap at the end.
3. **`melodic_techno_breakdown_perc_only_01`** — Congas, toms, rim and clave only, no kick, no hats.
4. **`melodic_techno_breakdown_clap_reverb_01`** — Four bars of a huge hall clap on beat 2 of alternating bars over whisper-quiet 16th hats.
5. **`melodic_techno_breakdown_ride_float_01`** — Ride 8ths and long open hats on the beats, a low tom standing in for the kick, a clap cue.

## Swing mapping

Both Attack dissections use Maschine swing 10%, and NI's walkthrough grid is straight with velocity doing the work; the genre never goes beyond a light shuffle. Maschine's swing percentage is roughly the fraction of a 16th that odd 16ths are delayed, so 10% ≈ engine `swing` 0.05 — the default used for the grooves and breakdowns here. The 32nd-grid snare riser uses 0 (swing on a 32nd grid would delay every other 32nd). If you prefer MPC terms, 0.05 is about MPC 52–53%; stay under 0.1 (MPC 55%) or the offbeat open hats begin to drag against the arpeggios. MPC swing S% maps to `(S − 50) × 2 / 100`.

## Sources

- Attack Magazine — Beat Dissected: Deep & Melodic Progressive Techno — https://www.attackmagazine.com/technique/beat-dissected/deep-melodic-progressive-techno/
- Attack Magazine — Beat Dissected: Ethereal Techno — https://www.attackmagazine.com/technique/beat-dissected/ethereal-techno/
- Attack Magazine — Beat Dissected: Dark Berlin Techno — https://www.attackmagazine.com/technique/beat-dissected/dark-berlin-techno/
- Attack Magazine — 10 Snare Rolls For The Drop — https://www.attackmagazine.com/technique/tutorials/10-snare-rolls-for-the-drop/
- Native Instruments Blog — How to make a melodic techno track — https://blog.native-instruments.com/melodic-techno/
- Beatportal — Step-by-Step Guide to Creating a Melodic House & Techno Track (Anyma, Miss Monique, ARTBAT, Stephan Bodzin) — https://www.beatportal.com/articles/899368-step-by-step-guide-to-creating-a-melodic-house-techno-track-anyma-miss-monique-artbat-stephan-bodzin
- EDMProd — How to Make Melodic Techno like CamelPhat in 5 Easy Steps — https://www.edmprod.com/how-to-make-melodic-techno/
- EDMProd — How to Create an EDM Build-Up — https://www.edmprod.com/ultimate-guide-build-ups/
- EDMProd — How To Make Techno: 11 Need-To-Know Techniques — https://www.edmprod.com/how-to-make-techno/
- The Producer School — How To Make Melodic Techno Like Anyma (2025) — https://theproducerschool.com/blogs/featured-blogs/how-to-make-melodic-techno-like-anyma-2025
- Production Music Live — The 30 Best Tutorials for Melodic Techno — https://www.productionmusiclive.com/blogs/news/the-30-best-tutorials-for-melodic-techno-2023
- YouTube (Production Music Live) — "3 Tom Grooves for Melodic House and Techno" — https://youtu.be/nA766ZJTPGw
- YouTube (Production Music Live) — "How to make PRO Drums: Melodic Techno Loops you should know" — https://youtu.be/X8wWaVK2K7A
- MusicRadar — How to create the ultimate snare roll build-up — https://www.musicradar.com/how-to/how-to-create-the-ultimate-snare-roll-build-up
- Wikipedia — Melodic Techno (history, 120–128 BPM, labels) — https://en.wikipedia.org/wiki/Melodic_Techno
