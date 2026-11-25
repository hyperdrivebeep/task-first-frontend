Candidate catalog - evidence only; not executable requirements.

# Designing for tvOS: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/designing-for-tvos
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 461ffa353696cd97246e9923347887550de131a16d9f8bc2976baa8abfc32d16
Input words: 366. Candidate rule records: 3. Exclusion blocks: 3.
Original note: p024-designing-for-tvos/designing-for-tvos.md.
Adopted source-linked rules: None directly attributed; retained as reviewed candidate evidence, not silently skipped.

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Designing for tvOS
URL: https://developer.apple.com/design/human-interface-guidelines/designing-for-tvos
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST size shared-display content for the actual viewing distance. | topic: Designing for tvOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-tvos | why: Distant viewers can read and act. | check: At 1440px and 390px, review the large-display variant at its intended distance; pixel width alone cannot prove distant legibility.
- MUST visibly identify the focused object when navigation uses remote-style focus. | topic: Designing for tvOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-tvos | why: People know where the next action will occur. | check: At 1440px and 390px, capture successive focused objects; also navigate with the supported remote input.
- MUST make shared-device sign-in infrequent and keep the active viewer profile aligned with the selected viewer. | topic: Designing for tvOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-tvos | why: A household can resume its own content. | check: Not screenshot-checkable: switch viewer profiles, confirm account/content isolation and persistence; capture resulting states at 1440px and 390px.
Apple-specific (excluded):
- Siri Remote gestures and the tvOS focus-system appearance.
- Apple TV system integrations, TV provider accounts, Top Shelf and SharePlay.
- Cinematic edge-to-edge artwork, audio and fluid animation as a platform aesthetic.
Persona and journey notes:
- Viewers may be eight feet or more away, moving around a shared room or engaged for hours.
- A viewer may follow a second experience in picture-in-picture.
COVERAGE:
- designing-for-tvos: read, 367 words, 3 universal rules, 3 excluded
