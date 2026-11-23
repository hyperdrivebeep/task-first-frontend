Candidate catalog - evidence only; not executable requirements.

# Toggles: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/toggles
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 07cf7ccdec108836a05bb2488ddc877553419f7474be402f0566090b40cd71bb
Input words: 1306. Candidate rule records: 10. Exclusion blocks: 3.
Original note: p084-toggles/toggles.md.
Adopted source-linked rules: C-44

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Toggles
URL: https://developer.apple.com/design/human-interface-guidelines/toggles
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST reserve toggles for opposing states rather than unrelated actions or multi-option selection. | topic: Toggles | source: https://developer.apple.com/design/human-interface-guidelines/toggles | why: People predict an on/off change. | check: At 1440px and 390px, inspect each purpose and state.
- MUST identify the setting or content each toggle affects. | topic: Toggles | source: https://developer.apple.com/design/human-interface-guidelines/toggles | why: People know the consequence. | check: At 1440px and 390px, inspect labels and surrounding context.
- MUST distinguish toggle states with more than color. | topic: Toggles | source: https://developer.apple.com/design/human-interface-guidelines/toggles | why: People can recognize state without color perception. | check: At 1440px and 390px, compare state marks, position and shape.
- MUST show option dependencies through grouping, alignment and indentation. | topic: Toggles | source: https://developer.apple.com/design/human-interface-guidelines/toggles | why: People understand subordinate settings. | check: At 1440px and 390px, inspect the expanded hierarchy.
- MUST show a mixed parent checkbox when child values differ. | topic: Toggles | source: https://developer.apple.com/design/human-interface-guidelines/toggles | why: The parent reflects partial selection. | check: Not screenshot-checkable: select a subset and confirm mixed state; capture at 1440px and 390px.
- MUST label a checkbox group when its relationship is unclear. | topic: Toggles | source: https://developer.apple.com/design/human-interface-guidelines/toggles | why: People understand the choices. | check: At 1440px and 390px, inspect the group label.
- MUST use exclusive controls for single choices and independent checkboxes for multiple choices. | topic: Toggles | source: https://developer.apple.com/design/human-interface-guidelines/toggles | why: People understand permitted selection. | check: Not screenshot-checkable: attempt multiple selections and capture resulting states at 1440px and 390px.
- MUST choose a compact selector when a radio list becomes overwhelming. | topic: Toggles | source: https://developer.apple.com/design/human-interface-guidelines/toggles | why: People avoid scanning an excessive list. | check: At 1440px and 390px, inspect option count; HIG suggests reconsidering more than about five, not a universal maximum.
- MUST use a checkbox for a binary setting unless explicit opposing labels are needed. | topic: Toggles | source: https://developer.apple.com/design/human-interface-guidelines/toggles | why: The current state is recognizable. | check: At 1440px and 390px, inspect the setting and label.
- MUST space horizontal radio buttons consistently for the longest label. | topic: Toggles | source: https://developer.apple.com/design/human-interface-guidelines/toggles | why: Labels do not collide. | check: At 1440px and 390px, capture longest localized labels.
Apple-specific (excluded):
- iOS list-row switch placement, default green and icon-only toggle advice.
- macOS window-body placement, mini-switch dimensions and preserving existing checkboxes.
- Apple framework APIs and component appearance.
Persona and journey notes:
- People enable settings, select one alternative or select a subset.
COVERAGE:
- toggles: read, 1307 words, 10 universal rules, 3 excluded
