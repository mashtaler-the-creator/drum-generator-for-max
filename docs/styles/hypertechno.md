# Hypertechno (`hypertechno`)

**Tempo range:** 145–160 BPM (genre databases quote 140–160; Soundplate's guide says 135–150 for the earliest TikTok edits; the 2023–2025 hits — Bennett, Niklas Dee, Creeds — sit at 148–155). Not to be confused with 1990s Japanese "hyper techno" (Avex / Juliana's Tokyo), a different genre.

## Drum DNA

Hypertechno is the streaming-era pop strain of hard techno: it emerged in late 2022 / early 2023 in Germany (Macon, Niklas Dee, CH4YN, Valexus), spread through SoundCloud and TikTok as remixes of 2000s hits, and keeps pop structures and sub-2:30 lengths. Its drums are "hard-hitting, techno-derived drums resembling popular hard techno or peak-time techno" (RYM / NCS wiki) — so the raw material is the same 4/4 kick, offbeat hats and claps — but the rhythm is organised differently:

- **The offbeat bass drives the groove, not the rumble.** Between every kick sits a monolithic bass stab (often the hardstyle *reverse bass*), heavily sidechained so kick and bass alternate as one pumping unit — "the kick drum and bassline must be monolithic". Hard techno's rumble is a tail *of* the kick; hypertechno's offbeat bass is a separate note on the offbeat 8th. In the patterns the `tomLow` slot stands in for that stab where it matters.
- **Big claps.** Clap on 2 and 4 (or on every beat, festival style), clean and layered, frequently with a eurodance flam ("clap-clap") — hard techno often has no backbeat at all.
- **Clean and punchy rather than rumbly.** Kicks are short and tight (peak-time techno kicks), hats sharp, very little distortion stacking; the mix has to survive phone speakers.
- **Hands-up lineage top end.** Open hat on every offbeat 8th, closed 16ths in between, sometimes a light shuffle — the 2000s hard house / hands-up grammar the source material comes from.
- **Pop-structure builds.** Unlike hard techno, hypertechno *does* use the hard-dance snare roll, the clap-doubling build, the kick drop-out and the half-bar silence before the drop, because every track is structured intro → build → drop → vocal breakdown → build → drop.

Honest summary of what distinguishes it rhythmically from hard techno: identical kick grid and tempo, but the energy sits on the *offbeat 8th* (bass + open hat) instead of in the kick tail; there is a real backbeat clap; percussion loops and polymeters are rare; and the arrangement leans on hard-dance risers and drops rather than warehouse re-entries.

## Sound selection & drum machines

**Kick.** Clean, short, punchy peak-time techno kick — a **TR-909** kick layered with a synthesised sine sub is the standard starting point; Kick 2 for the designed kicks most producers use. Less distortion than hard techno; a hard clipper rather than five saturators. **Novation Drumstation / Quasimidi 309** give a 909-style kick with more click that suits the pop mix.

**Snare / clap / rim.** The clap is the signature: **909 clap** layered with **808 clap** and a short room; a real snare (909 or **Alesis SR-16 / D4** for that 2000s dance snare) doubles it in the chorus. Snare rolls use a bright, pitched snare (909 or **Yamaha RX11**) so the roll reads on small speakers. Rim (909/707) for pickup skips.

**Hats.** 909 open hat on the offbeats is the hands-up heritage; closed hats 909 or **TR-707** for cleanliness; **Korg EMX** hats for a brighter synthetic edge. Keep them uncompressed and bright — no 12-bit crunch.

**Percussion.** Synthetic toms (**Simmons SDS** / 909 toms) for the eurodance bounce and tom-fall risers; shaker / tambourine in 16ths for the "peak-time" variant; almost no organic percussion. **Virus TI** noise/impact hits for drop impacts.

**Cymbals.** A crash on every drop downbeat and phrase start — much more crash than hard techno; a soft ride in 8ths only in the peak-time-derived lane.

**Layering / processing that affects sample choice.** Everything pumps: sidechain the bass, hats and claps to the kick for the bouncy feel; pick claps with a clear 1–2 kHz body because they must cut through pitched-up vocals; kicks with a fast, clicky transient because the bass owns the low end between hits; short reverb tails (the arrangement moves every 8 bars).

**Reference tracks.** Bennett — Vois sur ton chemin (Techno Mix) (2023); Niklas Dee, Luca-Dante Spadafora & Octavian — Mädchen auf dem Pferd (Techno Mix) (2023); Creeds — Push Up (2021); 1 World, Coolio & Holy Priest — Gangsta's Paradise (2024); HBz — Oh Ah (2023); Macon — Snap (2023).

## The 10 approaches

1. **`hypertechno_offbeat_bass_pump_01` — Offbeat bass pump.** 4/4 kick, offbeat bass stab (tomLow slot), big clap 2 and 4, open hat on the offbeat, quiet closed 16ths between. Reference: Bennett "Vois sur ton chemin", Niklas Dee "Mädchen auf dem Pferd".
2. **`hypertechno_big_clap_four_01` — Four-beat clap.** Clap on every beat glued to the kick, snare under 2 and 4, offbeat open hats. Reference: Creeds "Push Up", HBz remixes.
3. **`hypertechno_hands_up_hat_01` — Hands-up hat.** Loud open hat on every offbeat 8th, closed 16ths with the offbeat 16th emphasised, clap 2 and 4. Reference: Niklas Dee, CH4YN, Macon.
4. **`hypertechno_double_clap_01` — Double clap.** Eurodance flam clap (backbeat + softer 16th echo) growing to a three-hit run in bar 2, offbeat closed hats, soft shaker. Reference: HBz, Luca-Dante Spadafora.
5. **`hypertechno_snare_backbeat_01` — Snare backbeat.** Real snare with clap layered on 2 and 4, offbeat open hats, 16th closed hats, snare pickup on the last two 16ths. Reference: Bennett, Niklas Dee & Luca-Dante Spadafora.
6. **`hypertechno_shuffle_hat_01` — Shuffle hat.** Constant 16th closed hats with the offbeat 8th accented and swing 0.1, clap 2 and 4, alternating open hats. Reference: Macon, Valexus.
7. **`hypertechno_kick_stutter_01` — Kick stutter.** Straight 4/4 for seven beats, two 16th kicks at the end of bar 2. Reference: Creeds "Push Up", Bennett.
8. **`hypertechno_tom_bounce_01` — Tom bounce.** Synthetic mid/high toms on the 16ths around the clap for a eurodance bounce, low tom on the last offbeat. Reference: Luca-Dante Spadafora & Niklas Dee & Octavian.
9. **`hypertechno_clean_peak_01` — Clean peak-time kit.** Sharp offbeat hats, soft ride 8ths, rolling 16th shaker, tight clap — the peak-time-techno derivation. Reference: Beatport peak-time/hypertechno crossovers, HBz.
10. **`hypertechno_four_bar_turnaround_01` — Four-bar turnaround.** Crash on bar 1, clap 2 and 4 for three bars, clap roll and open-hat doubling through bar 4 with a pickup kick. Reference: Bennett "Vois sur ton chemin", Creeds "Push Up".

Extra one-bar fill (tag `fill`, auto-injected every 4th bar): **`hypertechno_fill_clap_roll_01`** — clap on 2 then a rising 16th clap roll through beat 4 with two snare hits.

## Risers

1. **`hypertechno_riser_snare_roll_01`** — The hard-dance snare roll on a 32nd grid: 8ths → 16ths → 32nds, velocity 60 → 127, kick 4/4 throughout, crash on the last 32nd.
2. **`hypertechno_riser_clap_double_01`** — Four-bar compounding clap roll (quarters → 8ths → 16ths → 16ths at 127), three 16th kicks under the last beat, open hats doubling, crash.
3. **`hypertechno_riser_kick_out_gap_01`** — 16th snare roll under the kick in bar 1, kick removed in bar 2, half a bar of silence, snare + kick + crash on the last 16th.
4. **`hypertechno_riser_velocity_ramp_01`** — Constant 16th snares with velocity 24 → 127 over two bars, hats rising into a 16th wall, kick 4/4 then 8ths, crash.
5. **`hypertechno_riser_tom_fall_01`** — Alternating high/mid toms, then a high-tom 16th roll handing to mid and low toms at 124 with pickup kick and crash.

## Breakdowns

1. **`hypertechno_breakdown_clap_only_01`** — Kick removed; reverbed clap on 2 and 4 and faint offbeat closed hats under the vocal hook.
2. **`hypertechno_breakdown_half_kick_01`** — Kick only on the downbeat (then 1 and 3), soft offbeat open hats and clap.
3. **`hypertechno_breakdown_hat_shuffle_01`** — No kick; swung 16th hats with the offbeat accent and a shaker carry the bounce, clap thinning to beat 4.
4. **`hypertechno_breakdown_pickup_kick_01`** — Kick gone except two 16th pickup kicks at the end of bar 2; clap 2 and 4, faint hats.
5. **`hypertechno_breakdown_ride_wash_01`** — Ride 8ths, long open hats on the beats, a low tom standing in for the kick, one clap cue.

## Swing mapping

Hypertechno is quantised: the offbeat bass and open hat must land exactly between kicks or the pump collapses, so the grooves use `swing: 0`. The one exception is the hands-up shuffle lane, where the 16th closed hats carry a light bounce — `hypertechno_shuffle_hat_01` uses 0.1 and the shuffle breakdown 0.12, roughly MPC 55–56%. Anything above ~0.15 (MPC 57–58%) reads as house, not hypertechno. MPC swing S% maps to `(S − 50) × 2 / 100`.

## Sources

- Soundplate — What is Hypertechno? The Viral Genre Explained — https://soundplate.com/what-is-hypertechno-genre-guide/
- Rate Your Music — Hypertechno (genre definition, 140–160 BPM, origins) — https://rateyourmusic.com/genre/hypertechno/
- NoCopyrightSounds Wiki — Hypertechno (origins: Macon, Niklas Dee, CH4YN, Valexus; TikTok/SoundCloud spread) — https://nocopyrightsounds.fandom.com/wiki/Hypertechno
- Beatport — HyperTechno artist/tag page (Beatport files hypertechno under Techno (Peak Time / Driving), Dance/Pop and Electronica) — https://www.beatport.com/artist/hypertechno/1165828
- EDMProd — What is Hard Techno? (sidechained bass vs. reverse bass, arrangement) — https://www.edmprod.com/what-is-hard-techno/
- EDMProd — How to Create an EDM Build-Up — https://www.edmprod.com/ultimate-guide-build-ups/
- EDMProd — How To Make Techno: 11 Need-To-Know Techniques — https://www.edmprod.com/how-to-make-techno/
- Attack Magazine — 10 Snare Rolls For The Drop — https://www.attackmagazine.com/technique/tutorials/10-snare-rolls-for-the-drop/
- Attack Magazine — Beat Dissected: Hypnotic Techno inspired by Phase Fatale (four-beat clap) — https://www.attackmagazine.com/technique/beat-dissected/hypnotic-techno-inspired-by-phase-fatales-love-is-destructive/
- Attack Magazine — Beat Dissected: Ethereal Techno (open hat on the beat placement) — https://www.attackmagazine.com/technique/beat-dissected/ethereal-techno/
- MusicRadar — How to create the ultimate snare roll build-up — https://www.musicradar.com/how-to/how-to-create-the-ultimate-snare-roll-build-up
- Hardcultr — Hardstyle vs Hard Techno: BPM & Sound (reverse bass, build conventions) — https://www.hardcultr.com/guides/hardstyle-vs-hard-techno-explained/
- Reid HT — Every Genre Project: Hyper Techno (the 1990s Japanese genre of the same name) — https://reidht.substack.com/p/every-genre-project-august-1-hyper
- YouTube — "How To Make Hypertechno in 2025 (Step by Step Tutorial) | +FLP" — https://www.youtube.com/watch?v=Z8x-s6dd86Y
- YouTube — "HOW TO MAKE HYPERTECHNO - FL Studio Tutorial (+FREE FLP)" — https://www.youtube.com/watch?v=-yncz0ubD5o
- YouTube — "The Hyper Techno Remix Formula Explained [FL Studio Tutorial]" — https://www.youtube.com/watch?v=WBMxIpm8_zU
