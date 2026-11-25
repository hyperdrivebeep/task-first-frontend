Candidate catalog - evidence only; not executable requirements.

# Digit entry views: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/digit-entry-views
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 210219789315680622b2da04bb6f334787b808f71bd1f99c76640e50108bd374
Input words: 119. Candidate rule records: 2. Exclusion blocks: 1.
Original note: p077-digit-entry-views/digit-entry-views.md.
Adopted source-linked rules: C-46

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Digit entry views
URL: https://developer.apple.com/design/human-interface-guidelines/digit-entry-views
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST mask sensitive digit entry. | topic: Digit entry views | source: https://developer.apple.com/design/human-interface-guidelines/digit-entry-views | why: People do not expose their PIN to observers. | check: At 1440px and 390px, capture a synthetic PIN after entry and confirm masking.
- MUST state why the digits are required. | topic: Digit entry views | source: https://developer.apple.com/design/human-interface-guidelines/digit-entry-views | why: People know the purpose before sharing sensitive input. | check: At 1440px and 390px, read the title and prompt beside entry.
Apple-specific (excluded):
- Full-screen tvOS digit keyboard and TVDigitEntryViewController availability.
Persona and journey notes:
- A person enters a short numeric secret such as a PIN.
COVERAGE:
- digit-entry-views: read, 120 words, 2 universal rules, 1 excluded
