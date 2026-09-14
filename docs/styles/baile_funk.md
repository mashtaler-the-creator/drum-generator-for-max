# Baile Funk (`baile_funk`)

**Tempo range:** 128–155 BPM (the classic tamborzão pocket sits at 128–134; the accelerated "150 BPM funk"/beat de faixa lane pioneered around 2014-17 runs 145–155; beat bolha and mandelão typically sit lower, 128–138).

In April 2025, Beatport launched **Brazilian Funk as a standalone genre category** on the platform — a first for a style long filed under generic "Latin" or "world" tags — spotlighting artists like Rennan da Penha, MC GW and DJ GBR and labels such as HINO DOS BAILES. That mainstreaming (into 2026 charts like Beatport's "Warm Up Essentials 2026: Brazilian Funk") is the context this style file was written against.

## Drum DNA

Everything in baile funk (funk carioca) sits on top of the **tamborzão**: a rhythm created by DJ Luciano in 1998, drawing on capoeira/maculelê stick-dance patterns, that became "the single most important production element in baile funk — without it, the track is not funk carioca." Historically the tamborzão is a **triplet-feel groove** (kick on positions 1, 3, 4 and 6 of a 12-step triplet bar), but the practical, universally-taught programming shorthand — used by Splice, Loopcloud and every beat-making guide surveyed — collapses it onto a 16th grid: **kick on beats 1 and 3, clap on beats 2 and 4**, with extra syncopated kick and clap hits pushed into the gaps between the main beats to create the pumping, never-quite-four-square feel. This repo approximates the underlying triplet lean with the `swing` field (0.08–0.18 depending on the pattern) rather than a true triplet grid, since the engine's step grid is duple (8/16/32).

Around that skeleton, baile funk is a genre of **named microstyles that share the tamborzão foundation but push it in different directions**: **beat bolha** (early-2020s, airy/watery, deliberately sparse), the **"funk 150 BPM" / beat de faixa** lane (Rennan da Penha's Baile da Gaiola scene accelerating the tamborzão out of the 130 pocket into 145–155 BPM territory from 2014 onward), **funk mandelão** (São Paulo's "Beat do Mandela" template — minimalist, clipped toms/rims, booming sub, slower and heavier than Rio's tamborzão), and the 2020s **funk bruxaria / funk automotivo** wave (dark, occult-tinged bruxaria for headphones and underground parties; automotivo built specifically for car-audio systems, with "tuim"-style kick rolls and a near-four-on-the-floor pulse for trunk-rattling sub weight). Snares in the Western sense are rare; the backbeat is almost always a **clap** (the `perc` role here), and real melodic content lives in distorted 808 bass and vocal chops, which are outside this drum-only file.

## Sound selection & drum machines

**Kick.** An 808-style kick with a powerful, low-frequency punch drives every lane; automotivo and beat-de-faixa voicings push it harder and add kick rolls, beat bolha keeps it soft and downbeat-only. Program from a **Roland TR-808** (owned) sub layer.

**Snare/clap/rim.** The clap (`perc` slot) is the real backbeat almost everywhere, landing on 2 and 4 with syncopated ghost claps between; mandelão instead favours a clipped **rim** hit — "clipped toms and rims" is literally how the São Paulo microstyle's percussion signature is described. A **TR-808** (owned) supplies both.

**Hats.** Sparse and low in the mix compared to house or techno — often just a soft rolling shaker or a handful of low-velocity closed-hat ticks; beat bolha and mandelão both lean on near-silence here rather than a driving hat pattern.

**Percussion — the atabaque/timbau mapping.** The tamborzão's defining texture is **atabaque and conga** ("Afro-Brazilian percussive elements... its main elements"), i.e. hand-drum rolls under the kick/clap skeleton. **In this pattern set those atabaque/timbau hits are voiced on the `tomLow`, `tomMid`, `congaLow` and `congaHigh` roles** — there is no dedicated atabaque role in the schema, so the low, resonant hand-drum tone maps onto the tom slots and the higher, slappier tone onto the conga slots. Tamborim (the small metal-jingle frame drum used throughout Brazilian percussion, samba included) maps onto the **`tambourine`** role and carries the genre's classic long-short syncopated figure. Bruxaria adds **cowbell** hits as a ritual "bell toll" accent. A **Roland TR-727** (owned) is the best owned source for conga/timbale-style one-shots to chop into these atabaque-style loops; **TR-505** (owned) covers clave/tamborim-adjacent accents; real atabaque/timbau/tamborim sample packs are recommended for authenticity (get elsewhere).

**Cymbals.** Essentially absent — the genre's energy lives in the low end and percussion, not cymbal washes; none of these patterns use crash or ride.

**Reference tracks.** MC Marcinho and Tati Quebra-Barraco (tamborzão-era funk carioca); Rennan da Penha (Baile da Gaiola / funk 150 BPM); Niack — "Oh Juliana" (2020, funk mandelão); the funk bruxaria SoundCloud scene (2020s); MC GW / DJ GBR (2020s Beatport-era Brazilian funk).

## The 10 approaches

1. **`baile_funk_tamborzao_core_01` — Tamborzão core.** The canonical skeleton: kick 1&3, clap 2&4, syncopated ghost kick/clap, atabaque rolls on tomLow/tomMid, tamborim on the tambourine role, continuous low-velocity shaker. Reference: MC Marcinho-era funk carioca.
2. **`baile_funk_tamborzao_swing_01` — Tamborzão syncopated.** Heavier swing (0.18), an extra kick push before bar 2, congas trading call-and-response with the atabaque toms, tamborim doubled into steady 8ths.
3. **`baile_funk_beat_bolha_airy_01` — Beat bolha (airy).** Stripped to a tight downbeat kick, soft clap, and widely-spaced delicate percussion so the airy synths and vocal chops have room, 128 BPM.
4. **`baile_funk_beat_bolha_pulse_01` — Beat bolha (pulse).** Same minimal kick/clap with a rolling low-velocity hat and offbeat open hat for a touch more forward motion.
5. **`baile_funk_beat_de_faixa_01` — Beat de faixa (150 BPM lane).** The tamborzão skeleton hardened and straightened at 148 BPM, reflecting Rennan da Penha's "funk 150 BPM" push out of the 130 pocket.
6. **`baile_funk_beat_de_faixa_drive_01` — Beat de faixa (drive).** A driving 16th kick pickup into every clap at 152 BPM, hats thinned almost to nothing to leave room for the sub.
7. **`baile_funk_mandelao_01` — Mandelão minimal.** The São Paulo "Beat do Mandela" template: simple kick, clipped rim/tom hits, almost no hat or shaker filler.
8. **`baile_funk_mandelao_call_response_01` — Mandelão call-and-response.** Rim "calls" answered by low-tom "responses," mimicking the shouted vocal exchange over the same minimal kick.
9. **`baile_funk_bruxaria_ritual_01` — Bruxaria ritual.** Skeletal, stomping kick and clap with sparse ghost notes, a cowbell "bell toll" and low tom rumble for the dark 2023-26 occult wave.
10. **`baile_funk_automotivo_drive_01` — Automotivo drive.** Near-four-on-the-floor sub-heavy kick with a "tuim"-style 16th kick roll across beat 3, minimal loop-driven arrangement built for car-audio systems.

Extra one-bar fill (tag `fill`, auto-injected every 4th bar): **`baile_funk_fill_tamborzao_turnaround_01`** — the kick/clap skeleton breaks into a syncopated kick+tom run through beat 4, tamborim doubling into 16ths.

## Risers

1. **`baile_funk_riser_kick_roll_01`** — A funk-automotivo "tuim" kick-roll build: bar 2 accelerates from 8ths into a straight 16th kick roll to 127, tamborim doubling underneath.
2. **`baile_funk_riser_hat_accel_01`** — Hats/shaker double in density bar over bar over the steady tamborzão skeleton; kick drops out for the last two 16ths so the re-entry hits hardest.
3. **`baile_funk_riser_conga_cascade_01`** — congaHigh, congaLow and tomLow enter one at a time, each rolling faster, climaxing on a shared accent hit across all three voices.
4. **`baile_funk_riser_gap_01`** — Bruxaria-style build-and-pause: ramping 16th kicks/claps, then silence, then a single kick+clap+tom slam before the drop.
5. **`baile_funk_riser_faixa_speedup_01`** — The tamborzão's ghost hits speed from one push per bar to a full 16th run by the end of bar 2, echoing the scene's own history of accelerating tempo for intensity.

## Breakdowns

1. **`baile_funk_breakdown_atabaque_only_01`** — Kick and clap removed; only the atabaque/timbau layer (tomLow/tomMid/congaHigh/congaLow) keeps the tamborzão skeleton alive.
2. **`baile_funk_breakdown_shaker_pulse_01`** — A beat-bolha-style breakdown: soft continuous shaker roll and a single downbeat kick per bar.
3. **`baile_funk_breakdown_halftime_01`** — Automotivo halftime drop: kick thins to one hit every two beats, clap gone, a lone tamborim ghost figure keeps the pulse.
4. **`baile_funk_breakdown_mandelao_space_01`** — Mandelão's negative space with the kick removed entirely: a lone rim hit and a distant low tom answer.
5. **`baile_funk_breakdown_bruxaria_bell_01`** — A ritual-hush breakdown: kick and clap out, only a slow cowbell "toll" and a soft low tom rumble remain.

## Swing mapping

The true tamborzão runs on a 12-step triplet grid, which this engine's duple 8/16/32 step grids cannot represent exactly. Patterns here use `swing` (0.08–0.18 for the classic tamborzão/beat-bolha lanes, dropping toward 0.03–0.06 for the harder, straighter beat-de-faixa/automotivo/bruxaria lanes) as an approximation of that triplet lean layered onto the practical "kick 1&3, clap 2&4" programming shorthand every production guide teaches. MPC swing S% maps to `(S − 50) × 2 / 100`; treat the higher end of the range as the "classic bounce" and the lower end as the harder, more accelerated 2020s lanes.

## Sources

- Splice — Baile Funk: The History Behind Brazilian Funk and 3 Foundational Elements — https://splice.com/sounds/packs/splice/jlz-pack/story
- Loopcloud — How to Make Brazilian Funk — https://www.loopcloud.com/cloud/blog/5293-How-to-Make-Brazilian-Funk
- BeatKey — How to Make Baile Funk Music: Complete Production Guide — https://beatkey.app/how-to-make-baile-funk-music
- Beatportal — Beatport Launches Brazilian Funk as a Standalone Genre — https://www.beatportal.com/articles/919622-beatport-launches-brazilian-funk-as-a-standalone-genre
- DJ Mag — Brazilian Funk added as standalone genre on Beatport — https://djmag.com/news/brazilian-funk-added-standalone-genre-beatport
- KondZilla — Seria o funk em 150BPM uma nova direção do funk no Rio? — https://kondzilla.com/seria-o-funk-em-150bpm-uma-nova-direcao-funk-no-rio/
- Melodigging — Funk Mandelão (genre reference) — https://www.melodigging.com/genre/funk-mandelao
- Rate Your Music — Funk mandelão (genre reference) — https://rateyourmusic.com/genre/funk-mandelao/
- Melodigging — Beat Bruxaria (genre reference) — https://www.melodigging.com/genre/beat-bruxaria
- Diffractions Collective — Where Rhythm Turns Hex: the Underworld of Funk Bruxaria — https://diffractionscollective.com/2026/01/08/the-underworld-of-funk-bruxaria-david-sir/
- Melodigging — Beat Bolha (genre reference) — https://www.melodigging.com/genre/beat-bolha
- Bandcamp Daily — The Endlessly Evolving World of Brazilian Funk — https://daily.bandcamp.com/lists/brazilian-funk-list
