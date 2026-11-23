Candidate catalog - evidence only; not executable requirements.

# Digital Crown: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/digital-crown
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 2309bc6c63a2c83600f2c6b19055f82325df57a5e055c7982b49b70d19acfc66
Input words: 764. Candidate rule records: 4. Exclusion blocks: 3.
Original note: p113-digital-crown/digital-crown.md.
Adopted source-linked rules: none (I-18 removed in the 2026-11-07 review: Apple hardware-specific)

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Digital Crown
URL: https://developer.apple.com/design/human-interface-guidelines/digital-crown
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST provide a touch alternative for navigation performed by a rotary input. | topic: Digital Crown | source: https://developer.apple.com/design/human-interface-guidelines/digital-crown | why: People can use their available input. | check: Not screenshot-checkable: complete equivalent navigation by rotation and touch.
- MUST provide visible feedback when rotary input changes a value or position. | topic: Digital Crown | source: https://developer.apple.com/design/human-interface-guidelines/digital-crown | why: People know the input has an effect. | check: Not screenshot-checkable: record turns and corresponding updates.
- MUST match update speed to rotary input while preserving precise selection. | topic: Digital Crown | source: https://developer.apple.com/design/human-interface-guidelines/digital-crown | why: People can move quickly or choose accurately. | check: Not screenshot-checkable: test slow and fast turns at range boundaries.
- MUST align rotary haptic feedback with actual content changes or remove misleading detents. | topic: Digital Crown | source: https://developer.apple.com/design/human-interface-guidelines/digital-crown | why: Tactile steps match visual behavior. | check: Not screenshot-checkable: compare felt detents with rows, animation or increments on hardware.
Apple-specific (excluded):
- Digital Crown system navigation, press reservations and visionOS functions.
- watchOS 10 vertical navigation and default linear/row-based detents.
- WatchKit APIs and platform support.
Persona and journey notes:
- People navigate or inspect values with a rotary control, sometimes while relying on tactile feedback.
COVERAGE:
- digital-crown: read, 765 words, 4 universal rules, 3 excluded
