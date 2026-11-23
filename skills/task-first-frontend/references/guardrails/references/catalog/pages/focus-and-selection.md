Candidate catalog - evidence only; not executable requirements.

# Focus and selection: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/focus-and-selection
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 3baedf18c09488f8d4bf8f80146984337e8d7185193da8e2c0721d4e714b3691
Input words: 1648. Candidate rule records: 10. Exclusion blocks: 3.
Original note: p108-focus-and-selection/focus-and-selection.md.
Adopted source-linked rules: I-08, I-09

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Focus and selection
URL: https://developer.apple.com/design/human-interface-guidelines/focus-and-selection
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST visibly identify the item targeted by focus. | topic: Focus and selection | source: https://developer.apple.com/design/human-interface-guidelines/focus-and-selection | why: People know where their next action applies. | check: At 1440px and 390px, capture each focusable component type.
- MUST require separate activation when merely focusing would cause a distracting context change. | topic: Focus and selection | source: https://developer.apple.com/design/human-interface-guidelines/focus-and-selection | why: People can navigate without accidentally opening views. | check: Not screenshot-checkable: move focus among destinations and verify navigation waits for activation.
- MUST avoid moving focus without user interaction except to preserve nearby navigation after removal. | topic: Focus and selection | source: https://developer.apple.com/design/human-interface-guidelines/focus-and-selection | why: People do not lose their place. | check: Not screenshot-checkable: update/remove a focused item during discrete navigation and inspect the next focus.
- MUST keep focus styling and movement consistent with the active platform and input model. | topic: Focus and selection | source: https://developer.apple.com/design/human-interface-guidelines/focus-and-selection | why: People can predict navigation. | check: Not screenshot-checkable: run supported keyboard/remote navigation and capture representative focus states at both widths.
- MUST keep focus indicators visible and unclipped. | topic: Focus and selection | source: https://developer.apple.com/design/human-interface-guidelines/focus-and-selection | why: People can identify their current target. | check: At 1440px and 390px, capture focus at container edges and beneath overlays.
- MUST order custom focus groups in the intended reading sequence. | topic: Focus and selection | source: https://developer.apple.com/design/human-interface-guidelines/focus-and-selection | why: People reach content logically. | check: Not screenshot-checkable: Tab and arrow through custom groups, recording order.
- MUST select an appropriate primary focus target when entering a group. | topic: Focus and selection | source: https://developer.apple.com/design/human-interface-guidelines/focus-and-selection | why: People reach the likely action without unnecessary movement. | check: Not screenshot-checkable: enter every group and inspect its initial target.
- MUST let gestures operate on full-screen content when no focus navigation is shown. | topic: Focus and selection | source: https://developer.apple.com/design/human-interface-guidelines/focus-and-selection | why: People get the direct manipulation they expect. | check: Not screenshot-checkable: operate full-screen content with the supported gesture.
- MUST distinguish focused, pressed, selected and unavailable states. | topic: Focus and selection | source: https://developer.apple.com/design/human-interface-guidelines/focus-and-selection | why: People understand what is targeted, chosen or disabled. | check: At 1440px and 390px, capture all applicable states side by side.
- MUST leave enough room and asset resolution for any enlarged focus state. | topic: Focus and selection | source: https://developer.apple.com/design/human-interface-guidelines/focus-and-selection | why: Focus does not blur content or overlap neighbors. | check: At 1440px and 390px, capture the largest focus variant with adjacent content.
Apple-specific (excluded):
- Apple system focus effects, platform-specific colors and ring-versus-row styling.
- iPadOS focus-group APIs, Full Keyboard Access scope and tvOS directional mapping.
- tvOS parallax/depth effects and visionOS distinction between gaze hover and focus.
Persona and journey notes:
- People move a discrete focus target with keyboard, remote or controller before activating it.
COVERAGE:
- focus-and-selection: read, 1649 words, 10 universal rules, 3 excluded
