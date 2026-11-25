Candidate catalog - evidence only; not executable requirements.

# Combo boxes: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/combo-boxes
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 6826df7684e8789905c157f63966e4d99493a248494ab21cf9b408d470cb0586
Input words: 218. Candidate rule records: 4. Exclusion blocks: 2.
Original note: p076-combo-boxes/combo-boxes.md.
Adopted source-linked rules: C-39

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Combo boxes
URL: https://developer.apple.com/design/human-interface-guidelines/combo-boxes
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST allow custom input alongside relevant predefined choices in a combo box. | topic: Combo boxes | source: https://developer.apple.com/design/human-interface-guidelines/combo-boxes | why: People can choose quickly without losing valid uncommon values. | check: At 1440px and 390px, capture custom input and expanded relevant choices; interact to confirm both paths.
- MUST choose a meaningful suggested default when prepopulating a combo box. | topic: Combo boxes | source: https://developer.apple.com/design/human-interface-guidelines/combo-boxes | why: The collapsed field signals the available choices. | check: At 1440px and 390px, compare initial value with its offered choices.
- MUST label the type of value the combo box accepts. | topic: Combo boxes | source: https://developer.apple.com/design/human-interface-guidelines/combo-boxes | why: People understand what to enter. | check: At 1440px and 390px, the visible introductory label identifies the value type.
- MUST fit offered values within the field without unreadable truncation. | topic: Combo boxes | source: https://developer.apple.com/design/human-interface-guidelines/combo-boxes | why: People can recognize the chosen value. | check: At 1440px and 390px, capture the longest offered value and expanded list.
Apple-specific (excluded):
- AppKit NSComboBox availability and macOS-only support.
- Title-style capitalization and colon conventions.
Persona and journey notes:
- Choose a likely value or enter a custom one; entering a custom value does not add it to the predefined list.
COVERAGE:
- combo-boxes: read, 219 words, 4 universal rules, 2 excluded
