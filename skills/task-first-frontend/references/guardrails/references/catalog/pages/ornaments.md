Candidate catalog - evidence only; not executable requirements.

# Ornaments: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/ornaments
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: b013f569d0426189666baba6985b3490c7be410597f5ee3f44114c543f5caf3a
Input words: 501. Candidate rule records: 4. Exclusion blocks: 2.
Original note: p098-ornaments/ornaments.md.
Adopted source-linked rules: T-10

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Ornaments
URL: https://developer.apple.com/design/human-interface-guidelines/ornaments
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST keep frequently needed controls in a predictable location without obscuring content. | topic: Ornaments | source: https://developer.apple.com/design/human-interface-guidelines/ornaments | why: People can find controls while reading. | check: At 1440px and 390px, compare controls before and after content scroll.
- MUST retain access to persistent controls except during a deliberate immersive mode. | topic: Ornaments | source: https://developer.apple.com/design/human-interface-guidelines/ornaments | why: People do not lose common actions. | check: At 1440px and 390px, capture ordinary and immersive states and restore controls.
- MUST limit detached control groups to preserve content focus and visual balance. | topic: Ornaments | source: https://developer.apple.com/design/human-interface-guidelines/ornaments | why: People avoid a cluttered interface. | check: At 1440px and 390px, inspect every detached group and its task purpose.
- MUST constrain auxiliary control surfaces so they do not interfere with neighboring content. | topic: Ornaments | source: https://developer.apple.com/design/human-interface-guidelines/ornaments | why: People retain access to adjacent controls. | check: At 1440px and 390px, capture the narrowest associated content region.
Apple-specific (excluded):
- visionOS floating-plane geometry, z-axis anchoring and ornament API.
- Liquid Glass borderless-button gaze effects and automatic system toolbar ornaments.
Persona and journey notes:
- People need stable playback or navigation controls while content scrolls or moves.
COVERAGE:
- ornaments: read, 502 words, 4 universal rules, 2 excluded
