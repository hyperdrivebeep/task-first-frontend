Candidate catalog - evidence only; not executable requirements.

# AirPlay: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/airplay
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: dd2fc7917801202d44fb939422b23b64a2dc57b2915d1698803bc7b395489f3d
Input words: 1003. Candidate rule records: 9. Exclusion blocks: 3.
Original note: p119-airplay/airplay.md.
Adopted source-linked rules: T-13

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## AirPlay
URL: https://developer.apple.com/design/human-interface-guidelines/airplay
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST prefer familiar accessible media controls unless the task requires a custom player. | topic: AirPlay | source: https://developer.apple.com/design/human-interface-guidelines/airplay | why: People retain expected playback and caption controls. | check: At 1440px and 390px, inspect controls and keyboard/accessibility behavior separately.
- MUST provide media resolutions appropriate to the actual playback device. | topic: AirPlay | source: https://developer.apple.com/design/human-interface-guidelines/airplay | why: Large displays do not receive needlessly low-quality media. | check: Not screenshot-checkable: inspect selected stream variants on supported display sizes and networks.
- MUST stream only the content people expect to leave the device. | topic: AirPlay | source: https://developer.apple.com/design/human-interface-guidelines/airplay | why: Background decoration does not appear on another screen. | check: Not screenshot-checkable: start external playback and inspect transmitted media.
- MUST support expected remote playback commands. | topic: AirPlay | source: https://developer.apple.com/design/human-interface-guidelines/airplay | why: People can control media away from the app. | check: Not screenshot-checkable: play, pause and seek from the supported external controls.
- MUST continue intended external playback while the app backgrounds or the device locks. | topic: AirPlay | source: https://developer.apple.com/design/human-interface-guidelines/airplay | why: People can use the device for another task. | check: Not screenshot-checkable: background and lock during streaming; verify continuity.
- MUST NOT mirror unrelated device content without an explicit choice. | topic: AirPlay | source: https://developer.apple.com/design/human-interface-guidelines/airplay | why: Other activity remains private. | check: Not screenshot-checkable: navigate to unrelated content during external playback and inspect the receiver.
- MUST NOT interrupt existing playback with incidental or auto-playing local media. | topic: AirPlay | source: https://developer.apple.com/design/human-interface-guidelines/airplay | why: People retain their chosen experience. | check: Not screenshot-checkable: launch and browse incidental videos while another stream plays.
- MUST keep the app usable during external playback without starting conflicting media. | topic: AirPlay | source: https://developer.apple.com/design/human-interface-guidelines/airplay | why: People can browse while listening or watching. | check: Not screenshot-checkable: navigate the application during a stream.
- MUST distinguish starting, active and unavailable external-playback states. | topic: AirPlay | source: https://developer.apple.com/design/human-interface-guidelines/airplay | why: People know where playback is going. | check: At 1440px and 390px, capture each connection and playback state.
Apple-specific (excluded):
- AirPlay streaming/mirroring technology, AVFoundation/HLS and remote command APIs.
- Official icon artwork, placement, color and interactive versus marketing usage.
- AirPlay naming, capitalization, trademark and platform support rules.
Persona and journey notes:
- People begin streaming, then lock the device, check another app or browse while playback continues.
COVERAGE:
- airplay: read, 1004 words, 9 universal rules, 3 excluded
