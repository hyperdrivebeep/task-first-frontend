Candidate catalog - evidence only; not executable requirements.

# Designing for visionOS: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/designing-for-visionos
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 4a220595b66c7b5726fa4eb8bb22ce35f90661c4a19626fd8bf8d240371f6a72
Input words: 975. Candidate rule records: 6. Exclusion blocks: 7.
Original note: p025-designing-for-visionos/designing-for-visionos.md.
Adopted source-linked rules: None directly attributed; retained as reviewed candidate evidence, not silently skipped.

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Designing for visionOS
URL: https://developer.apple.com/design/human-interface-guidelines/designing-for-visionos
Universal rules:
- MUST choose the least immersive presentation that suits each key moment of the app, and MUST NOT make every moment fully immersive. | topic: Designing for visionOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-visionos | why: people keep a sense of their surroundings and are not pulled into a full takeover when a contained view would do | check: at 1440px and 390px, each key moment has a contained (windowed) version, and a full-bleed screen appears only for the moment that needs it
- MUST present standard tasks in a contained, UI-centric surface built from familiar controls. | topic: Designing for visionOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-visionos | why: people recognize the controls at once and finish routine tasks without learning a new layout | check: at 1440px and 390px, screenshots of standard task screens show a bounded panel with standard controls and no custom full-screen takeover
- MUST NOT show motion that is overwhelming, jarring, or too fast. | topic: Designing for visionOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-visionos | why: people avoid discomfort and nausea and can follow what changed | check: not screenshot-checkable: judging speed and jarring transitions needs a screen recording of each transition at 1440px and 390px
- MUST give any shown motion a stationary frame of reference. | topic: Designing for visionOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-visionos | why: people keep their bearings while content moves, which reduces discomfort | check: at 1440px and 390px, capture two frames during an animation; a fixed header, edge, or background element stays in the same place in both
- MUST keep the app usable with assistive input technologies, so people can use the interactions that work for them. | topic: Designing for visionOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-visionos | why: people with motor, vision, or other needs can complete the same tasks | check: not screenshot-checkable: requires driving each core task with an assistive input method at 1440px and 390px and confirming it completes
- MUST keep core interactions approachable and familiar, with distinctive features layered on top. | topic: Designing for visionOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-visionos | why: people understand the first screen without a tutorial and can start right away | check: at 1440px and 390px, the first screen shows only standard controls with text labels a new user can read
Apple-specific (excluded):
- Windows, volumes, Shared Space, and Full Space as spatial containers.
- Passthrough, the digital crown control for passthrough, and portals into other places.
- Spatial Audio and acoustic modeling of the room.
- Eyes-and-hands input: indirect gestures by looking and tapping, and direct gestures by touching virtual objects.
- Field-of-view placement relative to the head, spatial scale, and ergonomics for any height or posture.
- Accessibility via system-provided components and named Apple technologies (VoiceOver, Switch Control, Dwell Control, Guided Access, Head Pointer).
- SharePlay with spatial Personas and the device safety rules (no use while driving or near hazards; age 13 or older).
Persona and journey notes:
- People wear the device and stay connected to their surroundings while they use the app; they may sit, stand, or lie down and should be able to stay physically at rest.
- People act mostly by looking at a target and selecting it, and they may keep their hands resting in their lap or at their sides.
- People move around little, especially during fully immersive experiences; the app should not push them to move.
- People may share an activity with other participants in the same space.
- The device is intended for people aged 13 or older.
COVERAGE:
- designing-for-visionos: read, approx 850 words, 6 universal rules, 7 excluded
