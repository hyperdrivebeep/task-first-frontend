Candidate catalog - evidence only; not executable requirements.

# Status bars: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/status-bars
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: f6f1c6a41019e98f4de61316c5a93f4a3f377a0d53cf6d4a725ed3a751f0833e
Input words: 269. Candidate rule records: 3. Exclusion blocks: 1.
Original note: p091-status-bars/status-bars.md.
Adopted source-linked rules: C-51

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Status bars
URL: https://developer.apple.com/design/human-interface-guidelines/status-bars
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST keep status overlays readable above scrolled content. | topic: Status bars | source: https://developer.apple.com/design/human-interface-guidelines/status-bars | why: People can read status. | check: At 1440px and 390px, capture the busiest underlying content.
- MUST NOT imply that obscured controls behind a status overlay remain interactive. | topic: Status bars | source: https://developer.apple.com/design/human-interface-guidelines/status-bars | why: People avoid tapping blocked controls. | check: At 1440px and 390px, inspect overlaps and verify hit regions separately.
- MUST provide a discoverable way to restore status hidden during immersion. | topic: Status bars | source: https://developer.apple.com/design/human-interface-guidelines/status-bars | why: People can check status without leaving. | check: Not screenshot-checkable: hide and restore status; capture both states at 1440px and 390px.
Apple-specific (excluded):
- iOS/iPadOS status bar location, scroll-edge blur APIs and availability.
Persona and journey notes:
- People watch full-screen media and occasionally check time or connectivity.
COVERAGE:
- status-bars: read, 270 words, 3 universal rules, 1 excluded
