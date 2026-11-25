Candidate catalog - evidence only; not executable requirements.

# Pointing devices: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/pointing-devices
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: d7392229c97d3ba23a8092835cb987579575760a582d7c80389e515a812172b6
Input words: 3711. Candidate rule records: 21. Exclusion blocks: 4.
Original note: p107-pointing-devices/pointing-devices.md.
Adopted source-linked rules: I-05, I-06, I-07

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Pointing devices
URL: https://developer.apple.com/design/human-interface-guidelines/pointing-devices
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST preserve familiar meanings for mouse and trackpad gestures. | topic: Pointing devices | source: https://developer.apple.com/design/human-interface-guidelines/pointing-devices | why: People can transfer learned interactions. | check: Not screenshot-checkable: exercise primary/secondary click, scroll, zoom, rotation and navigation gestures supported by the product.
- MUST NOT redefine system-wide gestures. | topic: Pointing devices | source: https://developer.apple.com/design/human-interface-guidelines/pointing-devices | why: People retain control of their environment. | check: Not screenshot-checkable: invoke configured system gestures while the app is active.
- MUST preserve task behavior across pointer, touch, keyboard and other supported input. | topic: Pointing devices | source: https://developer.apple.com/design/human-interface-guidelines/pointing-devices | why: People can switch input without relearning. | check: Not screenshot-checkable: run the same task with each supported input and capture outcomes at 1440px and 390px.
- MUST let pointer users reveal controls that automatically fade or minimize. | topic: Pointing devices | source: https://developer.apple.com/design/human-interface-guidelines/pointing-devices | why: People can regain hidden actions. | check: At 1440px and 390px, capture pointer entry, revealed controls and pointer exit.
- MUST keep modifier-key actions consistent across input methods. | topic: Pointing devices | source: https://developer.apple.com/design/human-interface-guidelines/pointing-devices | why: A modifier has predictable consequences. | check: Not screenshot-checkable: repeat modified drag or selection with supported pointer/touch inputs.
- MUST support multiple selection in custom views where the task needs it. | topic: Pointing devices | source: https://developer.apple.com/design/human-interface-guidelines/pointing-devices | why: People can act on a group efficiently. | check: At 1440px and 390px, capture a rectangular or equivalent multi-selection and its result.
- MUST differentiate pointer and finger behavior only when it adds useful precision. | topic: Pointing devices | source: https://developer.apple.com/design/human-interface-guidelines/pointing-devices | why: Different modes remain understandable. | check: Not screenshot-checkable: compare precise seeking or selection with touch behavior.
- MUST use conventional pointer shapes for standard actions and text entry. | topic: Pointing devices | source: https://developer.apple.com/design/human-interface-guidelines/pointing-devices | why: People can recognize available interaction. | check: At 1440px and 390px, capture pointers over text, links and controls.
- MUST keep custom pointer accessories simple and action-specific. | topic: Pointing devices | source: https://developer.apple.com/design/human-interface-guidelines/pointing-devices | why: Small cues remain understandable. | check: At 1440px and 390px, inspect the pointer accessory at rendered size.
- MUST use pointer-state transitions to communicate meaningful action changes. | topic: Pointing devices | source: https://developer.apple.com/design/human-interface-guidelines/pointing-devices | why: People can see when an operation becomes unavailable. | check: At 1440px and 390px, capture allowed and disallowed operation states.
- MUST pad interactive hit regions without making it difficult to leave them. | topic: Pointing devices | source: https://developer.apple.com/design/human-interface-guidelines/pointing-devices | why: People need neither excess precision nor excess movement. | check: At 1440px and 390px, inspect hit regions and test crossing neighboring controls.
- MUST make neighboring bar-button hit regions contiguous where separate gaps would break feedback. | topic: Pointing devices | source: https://developer.apple.com/design/human-interface-guidelines/pointing-devices | why: Pointer movement across the group stays coherent. | check: At 1440px and 390px, capture/probe adjacent hit-region boundaries.
- MUST apply the same pointer effects to elements with the same behavior. | topic: Pointing devices | source: https://developer.apple.com/design/human-interface-guidelines/pointing-devices | why: People can reuse learned cues. | check: At 1440px and 390px, compare repeated interactive regions.
- MUST NOT add purely decorative pointer effects. | topic: Pointing devices | source: https://developer.apple.com/design/human-interface-guidelines/pointing-devices | why: People are not distracted by meaningless changes. | check: At 1440px and 390px, trace each effect to an available action or useful state.
- MUST keep custom pointer shapes immediately understandable. | topic: Pointing devices | source: https://developer.apple.com/design/human-interface-guidelines/pointing-devices | why: People do not have to decode a cursor. | check: At 1440px and 390px, inspect the shape against its action.
- MUST prefer useful contextual measurements over instructional text attached to a pointer. | topic: Pointing devices | source: https://developer.apple.com/design/human-interface-guidelines/pointing-devices | why: People get precise information without a tutorial following them. | check: At 1440px and 390px, inspect resize or graph annotations.
- MUST avoid hover scaling that crowds adjacent content. | topic: Pointing devices | source: https://developer.apple.com/design/human-interface-guidelines/pointing-devices | why: Nearby rows and controls remain readable. | check: At 1440px and 390px, capture hovered and resting geometry.
- MUST provide touch access to essential hover-hidden controls. | topic: Pointing devices | source: https://developer.apple.com/design/human-interface-guidelines/pointing-devices | why: Touch users can complete the same task. | check: Not screenshot-checkable: reveal and activate essential controls using touch alone; capture both widths.
- MUST preserve the current selection while revealing or using a selection-related hidden control. | topic: Pointing devices | source: https://developer.apple.com/design/human-interface-guidelines/pointing-devices | why: People do not lose the target of their action. | check: Not screenshot-checkable: select content, reveal the control and activate it; compare selection throughout.
- MUST provide essential hidden actions through a dependable alternative such as a context menu. | topic: Pointing devices | source: https://developer.apple.com/design/human-interface-guidelines/pointing-devices | why: People need not guess a hidden location. | check: At 1440px and 390px, capture the short context menu and exercise each essential action.
- MUST reveal only hidden controls relevant to the current object and hide them after use when appropriate. | topic: Pointing devices | source: https://developer.apple.com/design/human-interface-guidelines/pointing-devices | why: Touch interaction does not overwhelm the view. | check: At 1440px and 390px, capture before, revealed and finished states.
Apple-specific (excluded):
- iPadOS Liquid Glass highlight/lift/hover effects and exact 12/24-point pointer padding.
- macOS gesture mappings, cursor tables/API names, force-click and modifier conventions.
- Specific sidebar/tapped-tab close-button persistence rules for touch-capable Macs.
- visionOS gaze-driven pointer context and pointer hiding during gestures.
Persona and journey notes:
- People combine pointer and keyboard or switch between touch and pointer, including precision editing and hidden controls.
COVERAGE:
- pointing-devices: read, 3712 words, 21 universal rules, 4 excluded
