Candidate catalog - evidence only; not executable requirements.

# Gyroscope and accelerometer: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/gyro-and-accelerometer
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: fb2659ad6f6d639a8c9d71d77af8a51a693d7420953e3db99b612e689c5ea495
Input words: 228. Candidate rule records: 3. Exclusion blocks: 1.
Original note: p115-gyro-and-accelerometer/gyro-and-accelerometer.md.
Adopted source-linked rules: I-20

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Gyroscope and accelerometer
URL: https://developer.apple.com/design/human-interface-guidelines/gyro-and-accelerometer
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST collect motion data only for a concrete user benefit. | topic: Gyroscope and accelerometer | source: https://developer.apple.com/design/human-interface-guidelines/gyro-and-accelerometer | why: People avoid unnecessary sensing. | check: Not screenshot-checkable: trace each collected motion signal to a user-facing function.
- MUST explain the purpose before requesting access to motion data. | topic: Gyroscope and accelerometer | source: https://developer.apple.com/design/human-interface-guidelines/gyro-and-accelerometer | why: People can make an informed choice. | check: At 1440px and 390px, capture the request with a specific purpose.
- MUST avoid motion-only direct manipulation outside active gameplay. | topic: Gyroscope and accelerometer | source: https://developer.apple.com/design/human-interface-guidelines/gyro-and-accelerometer | why: People avoid imprecise or physically difficult gestures. | check: Not screenshot-checkable: complete ordinary interface tasks without tilting or shaking.
Apple-specific (excluded):
- Core Motion APIs, supported devices and Siri Remote gyroscope access.
Persona and journey notes:
- People may be unable to reproduce a motion precisely and may care about battery use.
COVERAGE:
- gyro-and-accelerometer: read, 229 words, 3 universal rules, 1 excluded
