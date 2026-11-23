Candidate catalog - evidence only; not executable requirements.

# Steppers: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/steppers
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: a80648d086972b54eb146c17c1f78731f18823802a9aad33a7a5acb61d3bd5bf
Input words: 233. Candidate rule records: 2. Exclusion blocks: 2.
Original note: p082-steppers/steppers.md.
Adopted source-linked rules: C-43

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Steppers
URL: https://developer.apple.com/design/human-interface-guidelines/steppers
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST show the value affected by a stepper adjacent to its controls. | topic: Steppers | source: https://developer.apple.com/design/human-interface-guidelines/steppers | why: People can see what changes. | check: At 1440px and 390px, capture value and stepper together.
- MUST offer direct value entry when large changes would require many stepper presses. | topic: Steppers | source: https://developer.apple.com/design/human-interface-guidelines/steppers | why: People avoid repeated taps to reach a distant value. | check: At 1440px and 390px, capture the paired entry field; enter a distant value.
Apple-specific (excluded):
- macOS Shift-click acceleration with an example tenfold increment.
- Platform support matrix and UIKit/AppKit classes.
Persona and journey notes:
- Small changes suit repeated increments; large changes suit direct entry.
COVERAGE:
- steppers: read, 234 words, 2 universal rules, 2 excluded
