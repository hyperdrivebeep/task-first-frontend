Candidate catalog - evidence only; not executable requirements.

# Immersive experiences: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/immersive-experiences
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: db27eea4e84a168824fbc861c18bc86f25c1076088508194a4a03edeba116fbe
Input words: 2504. Candidate rule records: 18. Exclusion blocks: 3.
Original note: p132-immersive-experiences/immersive-experiences.md.
Adopted source-linked rules: P-39, T-22

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Immersive experiences
URL: https://developer.apple.com/design/human-interface-guidelines/immersive-experiences
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST support multiple interaction paths including accessibility preferences in immersive experiences. | topic: Immersive experiences | source: https://developer.apple.com/design/human-interface-guidelines/immersive-experiences | why: People can choose a usable input. | check: Not screenshot-checkable: complete key tasks with each supported accessible input.
- MUST reserve increased immersion for meaningful content and let people choose it. | topic: Immersive experiences | source: https://developer.apple.com/design/human-interface-guidelines/immersive-experiences | why: People retain surrounding context when they need it. | check: At 1440px and 390px, inspect entry actions and the ordinary nonimmersive path.
- MUST guide attention with subtle cues before stronger effects. | topic: Immersive experiences | source: https://developer.apple.com/design/human-interface-guidelines/immersive-experiences | why: People notice important moments without distraction. | check: Not screenshot-checkable: record the full cue sequence.
- MUST keep spatial content and motion within comfortable viewing conditions. | topic: Immersive experiences | source: https://developer.apple.com/design/human-interface-guidelines/immersive-experiences | why: People avoid visual strain. | check: Not screenshot-checkable: inspect field of view, depth and motion on the intended device.
- MUST choose an immersion mode compatible with the physical movement the task requires. | topic: Immersive experiences | source: https://developer.apple.com/design/human-interface-guidelines/immersive-experiences | why: The experience does not unexpectedly disappear or obscure hazards. | check: Not screenshot-checkable: test the intended movement envelope and mode transitions.
- MUST offer interaction without physical relocation where movement would exclude people. | topic: Immersive experiences | source: https://developer.apple.com/design/human-interface-guidelines/immersive-experiences | why: People with limited mobility or room can participate. | check: Not screenshot-checkable: complete the task seated without walking.
- MUST preserve awareness of physical surroundings where the experience depends on seeing them. | topic: Immersive experiences | source: https://developer.apple.com/design/human-interface-guidelines/immersive-experiences | why: People can orient in their environment. | check: Not screenshot-checkable: inspect occlusion during actual use in a bounded room.
- MUST request permission before accessing sensitive spatial or body-tracking data. | topic: Immersive experiences | source: https://developer.apple.com/design/human-interface-guidelines/immersive-experiences | why: People control environmental sensing. | check: At 1440px and 390px, inspect contextual requests and denied-state behavior.
- MUST transition immersion predictably without abrupt disorientation. | topic: Immersive experiences | source: https://developer.apple.com/design/human-interface-guidelines/immersive-experiences | why: People can track the change. | check: Not screenshot-checkable: record entry, exit and interrupted transitions.
- MUST provide a visible action to leave immersion within the experience. | topic: Immersive experiences | source: https://developer.apple.com/design/human-interface-guidelines/immersive-experiences | why: People need not discover system escape controls. | check: At 1440px and 390px, capture the exit action in all immersive states.
- MUST explain whether exit returns, pauses or quits and preserve an opportunity to save progress. | topic: Immersive experiences | source: https://developer.apple.com/design/human-interface-guidelines/immersive-experiences | why: People avoid accidental loss. | check: At 1440px and 390px, inspect exit labels and save/pause choices.
- MUST keep virtual body representations consistent with real positions and usable proportions. | topic: Immersive experiences | source: https://developer.apple.com/design/human-interface-guidelines/immersive-experiences | why: People can interact naturally. | check: Not screenshot-checkable: compare tracked and rendered hands during a task.
- MUST replace unresponsive virtual hands with a usable real-world view when tracking is lost. | topic: Immersive experiences | source: https://developer.apple.com/design/human-interface-guidelines/immersive-experiences | why: Frozen representations do not mislead people. | check: Not screenshot-checkable: interrupt and restore tracking.
- MUST minimize distracting peripheral motion and high-contrast environmental detail. | topic: Immersive experiences | source: https://developer.apple.com/design/human-interface-guidelines/immersive-experiences | why: People can focus on the primary content. | check: Not screenshot-checkable: inspect full-field motion over time.
- MUST clearly distinguish interactive environmental objects. | topic: Immersive experiences | source: https://developer.apple.com/design/human-interface-guidelines/immersive-experiences | why: People know what they can manipulate. | check: At 1440px and 390px, inspect affordances and test actual interactions in-device.
- MUST avoid restrictive environments that make people feel enclosed and provide a stable sense of ground. | topic: Immersive experiences | source: https://developer.apple.com/design/human-interface-guidelines/immersive-experiences | why: People can remain oriented and comfortable. | check: Not screenshot-checkable: inspect scale, ground and surrounding space in-device.
- MUST avoid repetitive ambient sound and lower it when competing audio plays. | topic: Immersive experiences | source: https://developer.apple.com/design/human-interface-guidelines/immersive-experiences | why: The soundscape does not overwhelm the chosen content. | check: Not screenshot-checkable: listen through a full session and overlapping media.
- MUST use environmental assets with sufficient spatial depth and variation for the intended realism. | topic: Immersive experiences | source: https://developer.apple.com/design/human-interface-guidelines/immersive-experiences | why: A repeated flat backdrop does not undermine orientation. | check: Not screenshot-checkable: inspect several viewing positions and repeated asset placement.
Apple-specific (excluded):
- visionOS Shared/Full Space, mixed/progressive/full styles and Digital Crown controls.
- Approximate 1.5-meter boundaries and 120-360-degree ranges.
- Passthrough tint, ARKit/SwiftUI APIs, virtual-hand permission and Spatial Audio implementation.
Persona and journey notes:
- People choose when to focus fully, may remain seated and need to exit or recover from tracking loss.
COVERAGE:
- immersive-experiences: read, 2505 words, 18 universal rules, 3 excluded
