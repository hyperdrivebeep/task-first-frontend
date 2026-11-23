Candidate catalog - evidence only; not executable requirements.

# Watch faces: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/watch-faces
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 580dca7405d5810f97a7d59f03b089fd10a3d7b1438e92c67f61e634d8ccc90d
Input words: 551. Candidate rule records: 3. Exclusion blocks: 2.
Original note: p102-watch-faces/watch-faces.md.
Adopted source-linked rules: none (T-12 removed in the 2026-11-07 review: Apple platform-specific)

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Watch faces
URL: https://developer.apple.com/design/human-interface-guidelines/watch-faces
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST preview a shareable configuration before someone adopts it. | topic: Watch faces | source: https://developer.apple.com/design/human-interface-guidelines/watch-faces | why: People can see its benefits and expected result. | check: At 1440px and 390px, compare preview with the actual configuration.
- MUST state device compatibility for shared configurations. | topic: Watch faces | source: https://developer.apple.com/design/human-interface-guidelines/watch-faces | why: People can choose one that works. | check: At 1440px and 390px, inspect compatibility labels beside each preview.
- MUST offer a clearly explained compatible alternative when a chosen configuration cannot work. | topic: Watch faces | source: https://developer.apple.com/design/human-interface-guidelines/watch-faces | why: People can recover without a dead-end error. | check: At 1440px and 390px, capture the incompatible selection and proposed alternative; test it.
Apple-specific (excluded):
- Watch-face discovery/installation workflow and ClockKit sharing API.
- Apple bezel assets, named face availability and model-generation matrices.
Persona and journey notes:
- People receive a configuration from someone else and may use a different device generation.
COVERAGE:
- watch-faces: read, 552 words, 3 universal rules, 2 excluded
