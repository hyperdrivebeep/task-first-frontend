Candidate catalog - evidence only; not executable requirements.

# Photo editing: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/photo-editing
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: f951b86ebbf3daf02f1aa6da6fc6e41c13245da7b9c47c4c15698712fb429976
Input words: 283. Candidate rule records: 4. Exclusion blocks: 2.
Original note: p137-photo-editing/photo-editing.md.
Adopted source-linked rules: T-34

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Photo editing
URL: https://developer.apple.com/design/human-interface-guidelines/photo-editing
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST preserve the original media when applying nondestructive edits. | topic: Photo editing | source: https://developer.apple.com/design/human-interface-guidelines/photo-editing | why: People can recover the source. | check: Not screenshot-checkable: edit and save, then retrieve the original.
- MUST confirm discarding actual unsaved edits and explain their loss. | topic: Photo editing | source: https://developer.apple.com/design/human-interface-guidelines/photo-editing | why: People avoid losing time-consuming work. | check: At 1440px and 390px, capture cancel with and without changes.
- MUST avoid duplicating controls already supplied by an editing host. | topic: Photo editing | source: https://developer.apple.com/design/human-interface-guidelines/photo-editing | why: People retain content space and a clear action hierarchy. | check: At 1440px and 390px, inspect host and extension toolbars together.
- MUST let people preview edits before committing them. | topic: Photo editing | source: https://developer.apple.com/design/human-interface-guidelines/photo-editing | why: People know the result they approve. | check: At 1440px and 390px, capture preview and saved result.
Apple-specific (excluded):
- Photos extension modal and toolbar lifecycle.
- App-icon reuse and PhotoKit/platform support.
Persona and journey notes:
- People spend time editing and must distinguish preview, save and cancellation.
COVERAGE:
- photo-editing: read, 284 words, 4 universal rules, 2 excluded
