Candidate catalog - evidence only; not executable requirements.

# ID Verifier: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/id-verifier
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 85eba317b0fce05598945dbd6afffca2004dfcc368d6a9736152636d40f8b660
Input words: 624. Candidate rule records: 4. Exclusion blocks: 3.
Original note: p130-id-verifier/id-verifier.md.
Adopted source-linked rules: T-28

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## ID Verifier
URL: https://developer.apple.com/design/human-interface-guidelines/id-verifier
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST request only the identity fact needed for the current verification. | topic: ID Verifier | source: https://developer.apple.com/design/human-interface-guidelines/id-verifier | why: People disclose less sensitive information. | check: At 1440px and 390px, inspect requested fields; an age threshold must not unnecessarily expose birth date.
- MUST identify the organization requesting identity verification. | topic: ID Verifier | source: https://developer.apple.com/design/human-interface-guidelines/id-verifier | why: People know who is asking. | check: At 1440px and 390px, inspect verified organization identity on the request.
- MUST label verification by its purpose rather than its communication technology. | topic: ID Verifier | source: https://developer.apple.com/design/human-interface-guidelines/id-verifier | why: People understand whether age or identity is checked. | check: At 1440px and 390px, read the initiating action.
- MUST let the human verifier explicitly record whether a visual identity comparison matches. | topic: ID Verifier | source: https://developer.apple.com/design/human-interface-guidelines/id-verifier | why: The system does not confuse displaying data with approval. | check: At 1440px and 390px, capture match and nonmatch actions and verify separate outcomes.
Apple-specific (excluded):
- iPhone ISO18013-5 support and ProximityReader APIs.
- Display Only versus entitled Data Transfer mechanisms and Apple Business Register.
- Apple logo restrictions and platform availability.
Persona and journey notes:
- A requester verifies a person in front of them; the customer should disclose only what is necessary.
COVERAGE:
- id-verifier: read, 625 words, 4 universal rules, 3 excluded
