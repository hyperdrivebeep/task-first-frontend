Candidate catalog - evidence only; not executable requirements.

# ShazamKit: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/shazamkit
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 9c5bc03b488757bcbf859d7d060b70fdafa179558ec263c7cc39f259b2275922
Input words: 272. Candidate rule records: 3. Exclusion blocks: 2.
Original note: p140-shazamkit/shazamkit.md.
Adopted source-linked rules: T-36

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## ShazamKit
URL: https://developer.apple.com/design/human-interface-guidelines/shazamkit
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST explain and obtain microphone permission before audio recognition. | topic: ShazamKit | source: https://developer.apple.com/design/human-interface-guidelines/shazamkit | why: People understand the recording purpose. | check: At 1440px and 390px, capture the contextual permission request.
- MUST stop recording as soon as the required recognition sample is obtained. | topic: ShazamKit | source: https://developer.apple.com/design/human-interface-guidelines/shazamkit | why: The microphone does not remain active unexpectedly. | check: Not screenshot-checkable: inspect recording lifecycle through successful and failed recognition.
- MUST obtain opt-in before storing recognized content in a personal library. | topic: ShazamKit | source: https://developer.apple.com/design/human-interface-guidelines/shazamkit | why: People control persistent additions. | check: At 1440px and 390px, capture the choice and verify no library write before approval.
Apple-specific (excluded):
- ShazamKit catalog and recognition APIs.
- iCloud music-library integration and attribution through Apple recognition surfaces.
Persona and journey notes:
- People allow a brief recognition action without necessarily consenting to ongoing recording or library changes.
COVERAGE:
- shazamkit: read, 273 words, 3 universal rules, 2 excluded
