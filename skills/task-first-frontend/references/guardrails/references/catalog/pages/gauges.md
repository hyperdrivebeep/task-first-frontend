Candidate catalog - evidence only; not executable requirements.

# Gauges: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/gauges
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: c07994210f35b2e3f5630fd7f1bf329e6ef51bba7589da4adb7b4484071f99a8
Input words: 581. Candidate rule records: 3. Exclusion blocks: 3.
Original note: p088-gauges/gauges.md.
Adopted source-linked rules: C-49

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Gauges
URL: https://developer.apple.com/design/human-interface-guidelines/gauges
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST label the current gauge value and endpoints succinctly. | topic: Gauges | source: https://developer.apple.com/design/human-interface-guidelines/gauges | why: People understand amount and range. | check: At 1440px and 390px, inspect labels and separately check accessible names.
- MUST use a continuous gauge when discrete segments become too small. | topic: Gauges | source: https://developer.apple.com/design/human-interface-guidelines/gauges | why: A large range stays readable. | check: At 1440px and 390px, capture the largest supported range.
- MUST map gauge color changes and gradients to meaningful range information when used. | topic: Gauges | source: https://developer.apple.com/design/human-interface-guidelines/gauges | why: Color communicates value or thresholds. | check: At 1440px and 390px, compare low, middle and high values with the labeled scale.
Apple-specific (excluded):
- Accessory complication-like styles.
- macOS level indicator segment rendering and default colors.
- SwiftUI/AppKit APIs.
Persona and journey notes:
- People interpret a number against a range or threshold.
COVERAGE:
- gauges: read, 582 words, 3 universal rules, 3 excluded
