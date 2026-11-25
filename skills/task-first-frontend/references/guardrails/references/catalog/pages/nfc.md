Candidate catalog - evidence only; not executable requirements.

# NFC: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/nfc
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 3a343eabc049741748261b4a49aabddf74d32fde0e98888ecebc7a8043dce6fc
Input words: 467. Candidate rule records: 4. Exclusion blocks: 2.
Original note: p136-nfc/nfc.md.
Adopted source-linked rules: T-33

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## NFC
URL: https://developer.apple.com/design/human-interface-guidelines/nfc
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST describe proximity scanning without implying physical contact is required. | topic: NFC | source: https://developer.apple.com/design/human-interface-guidelines/nfc | why: People perform the correct action. | check: At 1440px and 390px, inspect scan instructions.
- MUST describe the object and task in familiar language rather than radio-protocol jargon. | topic: NFC | source: https://developer.apple.com/design/human-interface-guidelines/nfc | why: People understand what to do. | check: At 1440px and 390px, read the scanner entry and prompt.
- MUST update concise scan instructions for the first and subsequent objects. | topic: NFC | source: https://developer.apple.com/design/human-interface-guidelines/nfc | why: People know what to scan next. | check: At 1440px and 390px, capture first and repeated scan states.
- MUST provide an explicit scanning path when automatic background detection is unavailable. | topic: NFC | source: https://developer.apple.com/design/human-interface-guidelines/nfc | why: People can still complete the task. | check: Not screenshot-checkable: disable background detection and complete the in-app scan.
Apple-specific (excluded):
- Core NFC APIs, Apple scanning sheets and hardware availability.
- System background-reading conditions and conflicts with Wallet, camera, airplane mode and locked-after-restart state.
Persona and journey notes:
- People scan a physical product or sign, sometimes several in sequence.
COVERAGE:
- nfc: read, 468 words, 4 universal rules, 2 excluded
