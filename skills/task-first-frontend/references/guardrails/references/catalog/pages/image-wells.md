Candidate catalog - evidence only; not executable requirements.

# Image wells: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/image-wells
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: b82a3805f17523c1292634648c61be66169d0ce72856c0f976bc963687e9b981
Input words: 150. Candidate rule records: 2. Exclusion blocks: 1.
Original note: p078-image-wells/image-wells.md.
Adopted source-linked rules: C-47

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Image wells
URL: https://developer.apple.com/design/human-interface-guidelines/image-wells
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST restore the default image after clearing an image input that requires an image. | topic: Image wells | source: https://developer.apple.com/design/human-interface-guidelines/image-wells | why: The required image slot stays meaningful. | check: At 1440px and 390px, capture before and after clearing the image.
- MUST expose conventional copy and paste commands when editable images support those actions. | topic: Image wells | source: https://developer.apple.com/design/human-interface-guidelines/image-wells | why: People can use familiar input methods. | check: Not screenshot-checkable: execute copy and paste through menu and standard shortcuts; capture both resulting image states at 1440px and 390px.
Apple-specific (excluded):
- AppKit NSImageView and macOS-only image-well availability.
Persona and journey notes:
- A person pastes, deletes or drags a replacement image into an editable image area.
COVERAGE:
- image-wells: read, 151 words, 2 universal rules, 1 excluded
