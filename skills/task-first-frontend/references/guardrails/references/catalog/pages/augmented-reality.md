Candidate catalog - evidence only; not executable requirements.

# Augmented reality: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 2852c82f64def5f92ef1972ad1a0daf4510223eb3ef665c0d28e1908f50f66df
Input words: 3400. Candidate rule records: 27. Exclusion blocks: 4.
Original note: p123-augmented-reality/augmented-reality.md.
Adopted source-linked rules: T-20, T-21

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Augmented reality
URL: https://developer.apple.com/design/human-interface-guidelines/augmented-reality
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST offer capability-dependent features only where the required capability is available. | topic: Augmented reality | source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality | why: People avoid predictable unsupported-feature errors. | check: Not screenshot-checkable: exercise supported and unsupported device profiles.
- MUST keep an immersive viewport focused on the environment and task rather than unnecessary UI. | topic: Augmented reality | source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality | why: People can see the scene. | check: At 1440px and 390px, inspect controls and text against required task content.
- MUST use correct scale, surface placement, lighting and stable motion when presenting realistic virtual objects. | topic: Augmented reality | source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality | why: People can judge how objects fit reality. | check: Not screenshot-checkable by flat images alone: inspect from several angles on the actual device and compare with known dimensions.
- MUST account for approximate reflections and tracking when choosing virtual materials. | topic: Augmented reality | source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality | why: Rendering artifacts do not undermine the scene. | check: Not screenshot-checkable: inspect reflective objects while moving through representative environments.
- MUST provide appropriate feedback when virtual objects contact surfaces or other objects. | topic: Augmented reality | source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality | why: People perceive the result of placement. | check: Not screenshot-checkable: record contact feedback and supported audio/haptic cues.
- MUST place persistent information and controls where they remain easy to find and reach. | topic: Augmented reality | source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality | why: People need not change their grip to act. | check: At 1440px and 390px, capture controls while the scene moves; test reach separately.
- MUST disclose physical-space requirements before an immersive task begins. | topic: Augmented reality | source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality | why: People know whether their environment is suitable. | check: At 1440px and 390px, inspect entry guidance and constrained-space alternatives.
- MUST limit fatigue from prolonged device holding and introduce required movement gradually. | topic: Augmented reality | source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality | why: People can adapt and remain comfortable. | check: Not screenshot-checkable: run the complete task with intended posture and duration.
- MUST avoid encouraging sudden expansive movements that conflict with the physical environment. | topic: Augmented reality | source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality | why: People can remain aware of surroundings. | check: Not screenshot-checkable: inspect required motion in representative bounded spaces.
- MUST guide initialization or relocalization and hide unrelated UI during coaching. | topic: Augmented reality | source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality | why: People can focus on making the experience ready. | check: At 1440px and 390px, capture initial and interrupted-session guidance.
- MUST indicate when placement is possible and align the placement cue with the detected surface. | topic: Augmented reality | source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality | why: People understand where the object will appear. | check: At 1440px and 390px, capture scanning, ready and placed states.
- MUST respond immediately to object placement and refine position subtly as tracking improves. | topic: Augmented reality | source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality | why: People see their action take effect. | check: Not screenshot-checkable: record placement and subsequent tracking refinement.
- MUST help people locate important offscreen virtual content. | topic: Augmented reality | source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality | why: People do not lose objects. | check: At 1440px and 390px, capture directional cues for offscreen targets.
- MUST avoid precision placement that assumes detected surface edges are exact. | topic: Augmented reality | source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality | why: Approximate tracking does not cause unexpected jumps. | check: Not screenshot-checkable: test placement near changing detected boundaries.
- MUST restrict placement to suitable surface types when the object requires one. | topic: Augmented reality | source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality | why: A floor object is not placed on an unsuitable plane. | check: Not screenshot-checkable: attempt placement on appropriate and inappropriate surfaces.
- MUST use familiar direct manipulation where practical and indirect controls where movement makes direct input difficult. | topic: Augmented reality | source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality | why: People can operate objects in context. | check: Not screenshot-checkable: test manipulation while still and moving.
- MUST tolerate reasonable targeting imprecision for small or distant interactive objects. | topic: Augmented reality | source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality | why: People can select without exact pixel contact. | check: Not screenshot-checkable: test near-boundary gestures on small and distant objects.
- MUST preserve true object scale when a task depends on real-world fit. | topic: Augmented reality | source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality | why: People are not misled about size. | check: At 1440px and 390px, compare object dimensions with a measured reference; disallow misleading resizing.
- MUST NOT use object scaling as a substitute for changing distance. | topic: Augmented reality | source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality | why: People perceive size and position correctly. | check: Not screenshot-checkable: inspect scene geometry while adjusting distance.
- MUST distinguish similar manipulation gestures and keep moving objects visible on their intended surfaces. | topic: Augmented reality | source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality | why: People retain control without jumps or disappearance. | check: Not screenshot-checkable: test pinch, rotate and move in isolation and combination.
- MUST allow participants to join an ongoing shared session when the activity permits it. | topic: Augmented reality | source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality | why: New participants need not restart everyone. | check: Not screenshot-checkable: join an active multiuser session.
- MUST use plain recovery instructions and contextual spatial cues. | topic: Augmented reality | source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality | why: People can correct conditions without technical vocabulary. | check: At 1440px and 390px, inspect low-light, motion and missing-surface guidance.
- MUST keep critical spatial labels readable and provide a discoverable path to more detail. | topic: Augmented reality | source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality | why: People can interpret important information. | check: At 1440px and 390px, capture label orientations and detail controls; inspect across intended distances.
- MUST restore spatial context after interruption without displaying unstable misplaced objects. | topic: Augmented reality | source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality | why: People can resume without confusing visual jumps. | check: Not screenshot-checkable: interrupt and relocalize a scene with known object positions.
- MUST let people cancel unsuccessful relocalization or reset a poor experience. | topic: Augmented reality | source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality | why: People are not trapped waiting indefinitely. | check: At 1440px and 390px, capture recovery controls and exercise them.
- MUST indicate lost tracking and offer specific recovery guidance. | topic: Augmented reality | source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality | why: People understand why interaction stopped. | check: At 1440px and 390px, capture tracking loss and recovery suggestions; verify transition behavior.
- MUST badge capability only where it distinguishes supported from unsupported items. | topic: Augmented reality | source: https://developer.apple.com/design/human-interface-guidelines/augmented-reality | why: People avoid redundant visual noise. | check: At 1440px and 390px, compare mixed-capability and all-capability item lists.
Apple-specific (excluded):
- ARKit device support, coaching/raycast/occlusion APIs and visionOS permissions.
- 60 updates per second, one-second image-removal delay, 100-reference-image limit and half-second face-tracking guidance.
- Official AR glyph/badge artwork, trademark use and ten-percent clear-space rules.
- Reference-image tracking implementation and automatic map merging.
Persona and journey notes:
- People place or inspect virtual objects in variable light and space, may move physically, and resume after interruptions.
COVERAGE:
- augmented-reality: read, 3401 words, 27 universal rules, 4 excluded
