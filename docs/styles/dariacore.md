# Dariacore (`dariacore`)

**Tempo range:** 150–180+ BPM (Wikipedia and genre write-ups describe "frantic tempo" without a single fixed number; observed dariacore/hyperflip tracks span roughly 140–250 BPM, with the bulk of the sample-flip material sitting in the 150–190 range this library targets — genuinely fast and, more importantly, genuinely *inconsistent* track to track and often bar to bar).

## An honest note before the drum DNA

Dariacore — also called **hyperflip**, the name that stuck after Jane Remover, who coined "dariacore" under the alias Leroy, disavowed the term as "a joke that's been going on for too long" — is not primarily a rhythm genre. It is a **sampling and editing genre**: its defining act is chopping recognizable pop hooks, anime/TV/game snippets and internet ephemera into frenetic new arrangements, then pitching, hard-clipping and brickwall-limiting the result. The drums underneath are usually themselves borrowed wholesale from a donor genre (Jersey Club, breakcore, hardstyle, dubstep) rather than invented for dariacore specifically. **A drum-only pattern library can faithfully capture the borrowed rhythmic skeletons — the Jersey bounce, the breakbeat chop, the hardstyle kick, the halftime dubstep drop — and the genre's structural habits (sudden full stops, abrupt tempo/genre whiplash, meme-y fake-outs). It cannot capture what actually makes a dariacore track *sound* like dariacore: the specific sample being flipped, the pitch-shift and time-stretch riding on top of it, or the sound-effect gags (car crashes, sirens, bed squeaks) that punctuate it.** Where a pattern below stands in for one of those non-drum elements (a cowbell for a siren stab, silence for a sample-only section), the `_approach` field says so explicitly rather than pretending the drums are doing more than they are.

## Drum DNA

What *is* genuinely programmable: dariacore "implements aspects of various genres of EDM, such as Jersey club, dubstep, and complextro" and fuses "the maximalist sound design ... of hyperpop/digicore with the sampling chaos of plunderphonics/mashcore and the rhythmic intensity of breakcore/jungle" (Wikipedia). In practice that means a track's drums can jump between a Jersey Club 5-kick bounce, a hardstyle four-on-the-floor, a jungle/breakbeat chop and a halftime dubstep drop — sometimes within the same 8 bars — with no attempt to make the transitions smooth. The genre's other signature is structural rather than rhythmic: **sudden full stops** (the beat simply vanishing, often for a joke or a sample to land alone), **abrupt key/tempo shifts**, and "meme-y drops or fake-outs for shock value" are all documented traits independent of any specific drum placement. Producers "frequently pitch up (nightcore-style), hard-clip, and brickwall-limit the mix" — production habits that affect how any drum sample should be prepared (clean transients that survive hard clipping) more than how it should be placed.

The Japanese branch of the scene — now more commonly called **hyperflip**, tracing back to Niconico's otoMAD remix culture — leans toward anime/J-pop/Vocaloid source material and tends to be more rhythmically ornate than the American lineage, which is reflected here in a rolling triplet-feel groove and breakdown distinct from the straight-16th US-style patterns.

## Sound selection & drum machines

Because the drums are borrowed rather than genre-native, sound selection here mostly means "sound selection for whichever donor genre this section is impersonating," prepared to survive dariacore's own processing chain.

**Kick.** Whatever the section calls for: a layered Jersey Club kick (sub + mid) on the 5-kick shape, a hardstyle-adjacent four-on-the-floor kick, a displaced breakbeat kick, or a halftime dubstep kick. Sample and chop through an **Akai MPC60/MPC3000** for the breakbeat/Jersey material; **Roland TR-909/TR-808** for the hardstyle-leaning grooves.

**Snare / clap.** Breakbeat-style drags and ghost doubles (an **E-mu SP-1200** gives period-correct 12-bit crunch for the amen-adjacent chop), or a hardstyle clap+snare stack on 2 and 4 from **TR-808/TR-909** layers.

**Hats.** Dense 16th beds, and — the closest thing dariacore has to a signature hi-hat technique — complextro-style **stutter-repeats**: the same hit re-triggered rapidly at falling velocity, an edit effect more than a drum-machine pattern, best approximated with an **Elektron Machinedrum**'s retrigger/locked-trig features or a DAW's beat-repeat.

**Percussion / SFX.** This is where the genre lives outside a drum kit entirely: car-crash samples, police sirens, bed squeaks, vocal chops and anime/game snippets. None of that is a drum role in this schema; the patterns below use `cowbell` and `crash` as the nearest stand-ins for "impact" and "stab" moments and say so in `_approach`. Real production needs a sample library and a chopping workflow (**Ensoniq ASR-X** or a DAW sampler), not another drum machine.

**Cymbals.** A single crash where a section needs an impact marker; otherwise absent. The genre does not use a ride or cymbal wash as a groove element the way techno or trance do.

**Layering / processing that drives (non-drum) sample choice.** Hard-clipping and brickwall limiting are applied aggressively and deliberately; nightcore-style pitch-up is routine; abrupt tempo/key changes are a feature, not a mixing mistake to smooth over.

**Reference tracks / artists.** Jane Remover (as Leroy) — the *Dariacore* trilogy (2020–21) that named the genre; Jane Remover — *Grave Robbing* (2023, after returning to the sound); c0ncernn's dariacore/hyperflip sets; the Niconico/otoMAD-lineage Japanese hyperflip scene (anime/J-pop/Vocaloid flips, per the *Dariacore* Wikipedia entry's "Geographic Scenes" section).

## The 10 approaches

1. **`dariacore_jersey_flip_01` — Jersey Club flip.** The Jersey 5-kick shape sped past its native tempo with a doubled clap+snare stack. Reference: Wikipedia's Jersey Club borrowing.
2. **`dariacore_breakbeat_chop_01` — Breakbeat chop.** A displaced, re-sliced breakbeat kick/snare pattern at breakcore-adjacent tempo. Reference: the genre's breakcore/jungle rhythmic-intensity borrowing.
3. **`dariacore_hardstyle_kick_01` — Hardstyle kick.** Full-velocity four-on-the-floor with a dense 16th hat bed and a clap+snare stack. Reference: the Dariacore Wiki's "hardstyle kicks" note.
4. **`dariacore_dubstep_halftime_01` — Dubstep halftime.** A halftime kick/snare pocket dropped in for structural whiplash against faster sections. Reference: the genre's dubstep sound-design/drop borrowing.
5. **`dariacore_complextro_stutter_01` — Complextro stutter.** Rapid kick/clap micro-repeats at falling velocity break up a plain four-on-the-floor pulse. Reference: Wikipedia's complextro ingredient.
6. **`dariacore_mashcore_splice_01` — Mashcore genre splice.** Bar 1 is house, bar 2 is an unrelated breakbeat, spliced with no transition. Reference: the plunderphonics/mashcore borrowing and the genre's abrupt-shift reputation.
7. **`dariacore_sudden_stop_01` — Sudden stop.** A maximal breakbeat groove that cuts to total silence mid-bar before restarting hard. Reference: the genre's best-documented structural signature.
8. **`dariacore_otomad_triplet_01` — OtoMAD/hyperflip triplet feel.** A rolling triplet-feel clave/hat pattern over a breakbeat kick, representing the more ornate Japanese branch. Reference: Wikipedia's Niconico/otoMAD scene note.
9. **`dariacore_amen_jungle_01` — Amen/jungle chop.** A near-straight amen-break skeleton re-pitched to dariacore tempo. Reference: the breakcore/jungle borrowing.
10. **`dariacore_kitchen_sink_maximal_01` — Kitchen-sink maximalism.** Every role near-full at once — hardstyle kick, breakbeat snare, hat stutter, tom fill, cowbell — the "controlled chaos"/"pop music on steroids" construction principle itself. Reference: Wikipedia's characterisation of the genre's arrangement philosophy.

Extra one-bar fill (tag `fill`, auto-injected every 4th bar): **`dariacore_fill_stutter_flip_01`** — a plain groove breaks into a complextro-style stutter-repeat on beat 4 as the handoff into the next sample flip.

## Risers

Two of the five below are annotated as generic EDM build vocabulary rather than dariacore-specific inventions, because — per the honesty note above — the genre's actual build tension usually rides on the sample edit, not the drum pattern.

1. **`dariacore_riser_kick_roll_stack_01`** — A generic kick-roll build (8ths to 16ths, velocity to 127); the drum-only skeleton a producer would program underneath their real build element (a vocal chop or filter sweep on the sample).
2. **`dariacore_riser_hardstyle_reverse_01`** — A reverse-swell tom under a hardstyle four-on-the-floor, both peaking together with a crash.
3. **`dariacore_riser_snare_accel_stop_01`** — An accelerating snare roll that, instead of landing on the drop, cuts to total silence one 16th before the bar ends — the genre's hard-stop habit applied to a build.
4. **`dariacore_riser_genre_splice_ramp_01`** — Bar 1 builds in a Jersey idiom, bar 2 abruptly switches to a hardstyle ramp — genre whiplash inside the build itself.
5. **`dariacore_riser_complextro_wall_01`** — The complextro hi-hat stutter tightens into a dense wall alongside a doubling kick, both peaking together with no crash — an edit-driven build rather than a cymbal swell.

## Breakdowns

1. **`dariacore_breakdown_silence_gap_01`** — Near-total silence after one soft kick; models the "sudden full stop" section where a sample or joke occupies the space alone.
2. **`dariacore_breakdown_halftime_lull_01`** — A stripped halftime dubstep pocket at reduced velocity, the calmer half of the halftime/double-time alternation.
3. **`dariacore_breakdown_rim_ghost_01`** — Ghosted rim clicks tracing a breakbeat outline with no kick or snare, room for a vocal chop.
4. **`dariacore_breakdown_otomad_bell_01`** — A rolling triplet-feel clave/cowbell pattern alone, the hyperflip/otoMAD branch's quieter side.
5. **`dariacore_breakdown_kick_pulse_01`** — A slow, spaced four-on-the-floor pulse at reduced velocity, nothing else, before the pattern re-thickens.

## Swing mapping

Most dariacore drum borrowings are programmed straight (`swing: 0`) since the genre's donor genres here (Jersey Club, hardstyle, breakbeat, dubstep) are themselves largely straight at the drum-machine level, and dariacore's own signature is tempo/genre whiplash rather than shuffle. The otoMAD/hyperflip-branch groove and its matching breakdown use `swing: 0.33` to approximate the rolling triplet feel of that scene's more ornate anime/Vocaloid-adjacent flips. There is no MPC-swing-percentage convention documented specifically for dariacore in the sources consulted.

## Sources

- Wikipedia — Dariacore — https://en.wikipedia.org/wiki/Dariacore
- Dariacore Wiki (Miraheze) — Dariacore (genre) — https://dariacore.miraheze.org/wiki/Dariacore
- Dariacore Wiki (Miraheze) — Hyperflip — https://dariacore.miraheze.org/wiki/Hyperflip
- Melodigging — Dariacore — https://www.melodigging.com/genre/dariacore
- Periscope (CHS) — A Deep Dive into the Dariacore/Hyperflip Scene — https://www.chsperiscope.com/ae/2026/02/17/a-deep-dive-into-the-dariacore-hyperflip-scene/
- Attack Magazine — 10 Snare Rolls For The Drop — https://www.attackmagazine.com/technique/tutorials/10-snare-rolls-for-the-drop/
- EDMProd — How to Create an EDM Build-Up — https://www.edmprod.com/ultimate-guide-build-ups/
