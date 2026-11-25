Candidate catalog - evidence only; not executable requirements.

# Nearby interactions: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/nearby-interactions
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: b382e4454ae7c8c8d00ca13bb7a452d3e0df5e30b5df3bc413fd2e349b3b301f
Input words: 857. Candidate rule records: 7. Exclusion blocks: 3.
Original note: p116-nearby-interactions/nearby-interactions.md.
Adopted source-linked rules: I-21

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Nearby interactions
URL: https://developer.apple.com/design/human-interface-guidelines/nearby-interactions
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST ground proximity actions in a physical task people can understand. | topic: Nearby interactions | source: https://developer.apple.com/design/human-interface-guidelines/nearby-interactions | why: Bringing objects together has a meaningful result. | check: Not screenshot-checkable: test the physical action and its perceived outcome.
- MUST use distance, direction and context together where they improve nearby relevance. | topic: Nearby interactions | source: https://developer.apple.com/design/human-interface-guidelines/nearby-interactions | why: People see the appropriate target. | check: Not screenshot-checkable: vary proximity, direction and likely recipient in a controlled scene.
- MUST adapt feedback as physical distance changes. | topic: Nearby interactions | source: https://developer.apple.com/design/human-interface-guidelines/nearby-interactions | why: People can understand their progress toward a target. | check: Not screenshot-checkable: approach and recede while recording feedback.
- MUST provide continuous feedback during an active proximity task. | topic: Nearby interactions | source: https://developer.apple.com/design/human-interface-guidelines/nearby-interactions | why: People can follow movement and direction. | check: Not screenshot-checkable: walk the full task and check for unexplained feedback gaps.
- MUST choose visual, audio and haptic feedback appropriate to whether people are looking at the device or surroundings. | topic: Nearby interactions | source: https://developer.apple.com/design/human-interface-guidelines/nearby-interactions | why: People receive information through an available channel. | check: Not screenshot-checkable: repeat looking-at-screen and looking-away tasks with supported feedback.
- MUST provide another way to perform a proximity-enabled task. | topic: Nearby interactions | source: https://developer.apple.com/design/human-interface-guidelines/nearby-interactions | why: People without compatible hardware or ability can succeed. | check: Not screenshot-checkable: complete the task with proximity unavailable.
- MUST communicate sensor limits and obstruction effects when they affect the experience. | topic: Nearby interactions | source: https://developer.apple.com/design/human-interface-guidelines/nearby-interactions | why: People can recover from missing or inaccurate direction. | check: At 1440px and 390px, capture obstructed/out-of-range guidance and test recovery.
Apple-specific (excluded):
- Ultra Wideband, U1 and NearbyInteraction permission/session identifiers.
- Portrait-orientation preference and specific directional field of view.
- iOS direction-plus-distance, watchOS distance-only and foreground requirement.
Persona and journey notes:
- People transfer content, find objects or choose a nearby recipient while moving through a real environment.
COVERAGE:
- nearby-interactions: read, 858 words, 7 universal rules, 3 excluded
