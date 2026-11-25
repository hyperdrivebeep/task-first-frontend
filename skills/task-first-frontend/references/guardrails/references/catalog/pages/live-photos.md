Candidate catalog - evidence only; not executable requirements.

# Live Photos: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/live-photos
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 1e4425719929ac511a30280034a3082b771028710ef2acd396abb01322273ef0
Input words: 416. Candidate rule records: 5. Exclusion blocks: 2.
Original note: p133-live-photos/live-photos.md.
Adopted source-linked rules: T-30

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Live Photos
URL: https://developer.apple.com/design/human-interface-guidelines/live-photos
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST apply edits consistently across an animated photo or offer an explicit still conversion. | topic: Live Photos | source: https://developer.apple.com/design/human-interface-guidelines/live-photos | why: The shared result does not change unexpectedly during playback. | check: Not screenshot-checkable: play all frames after editing and compare still conversion.
- MUST let people preview complete motion and audio before sharing and offer a still alternative. | topic: Live Photos | source: https://developer.apple.com/design/human-interface-guidelines/live-photos | why: People control what they disclose. | check: At 1440px and 390px, capture preview and still-sharing choices; inspect complete media separately.
- MUST distinguish downloading media from playable media. | topic: Live Photos | source: https://developer.apple.com/design/human-interface-guidelines/live-photos | why: People know when an action will work. | check: At 1440px and 390px, capture download and ready states.
- MUST provide a meaningful still fallback where animated-photo playback is unsupported. | topic: Live Photos | source: https://developer.apple.com/design/human-interface-guidelines/live-photos | why: Recipients still receive useful content. | check: At 1440px and 390px, capture an unsupported-viewer state.
- MUST distinguish animated photos from still images with consistent cues. | topic: Live Photos | source: https://developer.apple.com/design/human-interface-guidelines/live-photos | why: People can discover additional content. | check: At 1440px and 390px, inspect mixed media and badge placement; motion requires a recording.
Apple-specific (excluded):
- Live Photo integrity/interaction requirements and prohibition on video-style play buttons.
- System badges, PhotoKit/LivePhotosKit and device capture support.
Persona and journey notes:
- People edit, preview and share media that contains more information than its still frame.
COVERAGE:
- live-photos: read, 417 words, 5 universal rules, 2 excluded
