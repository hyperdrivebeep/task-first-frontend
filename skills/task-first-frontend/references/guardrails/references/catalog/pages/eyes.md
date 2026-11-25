Candidate catalog - evidence only; not executable requirements.

# Eyes: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/eyes
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 777ac5f6d88d105b2685e7f7063e69c6e6119d89a11ca1e5aeaaa424f48be372
Input words: 1597. Candidate rule records: 13. Exclusion blocks: 3.
Original note: p109-eyes/eyes.md.
Adopted source-linked rules: I-14

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Eyes
URL: https://developer.apple.com/design/human-interface-guidelines/eyes
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST provide alternative ways to interact when gaze is supported. | topic: Eyes | source: https://developer.apple.com/design/human-interface-guidelines/eyes | why: People can use their accessibility preferences. | check: Not screenshot-checkable: complete the same task with gaze and a supported alternative.
- MUST place frequently used spatial content within a comfortable field of view and avoid repeated rapid depth or direction changes. | topic: Eyes | source: https://developer.apple.com/design/human-interface-guidelines/eyes | why: People avoid visual strain. | check: Not screenshot-checkable at web widths: test actual viewing posture, task duration and depth changes in the intended device.
- MUST choose spatial viewing distance for comfortable sustained use. | topic: Eyes | source: https://developer.apple.com/design/human-interface-guidelines/eyes | why: People can read without unnecessary strain. | check: Not screenshot-checkable: test intended viewing distance and duration; the source one-meter suggestion is spatial context, not a web rule.
- MUST use consistent visual cues for interactive gaze targets. | topic: Eyes | source: https://developer.apple.com/design/human-interface-guidelines/eyes | why: People can learn which elements respond. | check: At 1440px and 390px, compare targets and their hovered appearances; verify on the intended gaze device.
- MUST minimize visual noise and peripheral movement near a gaze target. | topic: Eyes | source: https://developer.apple.com/design/human-interface-guidelines/eyes | why: People can keep their attention on the intended object. | check: Not screenshot-checkable: record nearby reveals and motion while selecting a target.
- MUST separate gaze targets enough to tolerate natural eye movement. | topic: Eyes | source: https://developer.apple.com/design/human-interface-guidelines/eyes | why: People avoid targeting a neighbor. | check: Not screenshot-checkable: test selection accuracy on the actual gaze device; capture layout variants.
- MUST avoid repetitive textures that fill the spatial field of view and confuse depth. | topic: Eyes | source: https://developer.apple.com/design/human-interface-guidelines/eyes | why: People can perceive the environment comfortably. | check: Not screenshot-checkable: inspect the immersive field of view in-device.
- MUST use subtle rather than harsh attention cues for likely next targets. | topic: Eyes | source: https://developer.apple.com/design/human-interface-guidelines/eyes | why: People can find an action without distraction. | check: Not screenshot-checkable: record the cue and test the intended interaction.
- MUST highlight a composite interactive target as one containing region. | topic: Eyes | source: https://developer.apple.com/design/human-interface-guidelines/eyes | why: People understand the full actionable object. | check: At 1440px and 390px, capture hover across image and label portions of one target.
- MUST reserve custom hover effects for useful feedback or meaningful moments. | topic: Eyes | source: https://developer.apple.com/design/human-interface-guidelines/eyes | why: Too many effects do not dilute attention. | check: Not screenshot-checkable: compare standard and custom feedback in the task sequence.
- MUST choose hover delay according to whether feedback invites immediate action or reveals optional information. | topic: Eyes | source: https://developer.apple.com/design/human-interface-guidelines/eyes | why: People can act quickly without unwanted expansions. | check: Not screenshot-checkable: measure immediate feedback and delayed detail; capture transition frames.
- MUST keep a primary visual element stable during custom hover animation. | topic: Eyes | source: https://developer.apple.com/design/human-interface-guidelines/eyes | why: People can follow the target through the change. | check: Not screenshot-checkable: compare rest, transition and settled frames.
- MUST test custom gaze feedback on the actual interaction device. | topic: Eyes | source: https://developer.apple.com/design/human-interface-guidelines/eyes | why: Timing and comfort are not inferred from a flat image. | check: Not screenshot-checkable: record an in-device task run and its visual feedback.
Apple-specific (excluded):
- visionOS gaze privacy architecture, out-of-process hover and App/RealityKit APIs.
- Specific one-meter distance, 16-point margin or 60-point center spacing guidance.
- Rounded gaze-target shapes, system tooltip/tab expansion and Shared/Full Space placement.
Persona and journey notes:
- People target objects with their eyes and activate them separately; visual comfort and involuntary attention changes matter.
COVERAGE:
- eyes: read, 1598 words, 13 universal rules, 3 excluded
