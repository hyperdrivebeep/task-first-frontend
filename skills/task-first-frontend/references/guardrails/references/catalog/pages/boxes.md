Candidate catalog - evidence only; not executable requirements.

# Boxes: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/boxes
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 34f64979a551c5f5a872ba963e6c89e3f98712e2f52ea64260b975242ff1c02e
Input words: 273. Candidate rule records: 7. Exclusion blocks: 4.
Original note: p036-boxes/boxes.md.
Adopted source-linked rules: C-24

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Boxes

URL: https://developer.apple.com/design/human-interface-guidelines/boxes

Universal rules:
MUST group related content with a visible border or background. | topic: grouping | source: Apple HIG Boxes | why: a box makes related content read as one group | check: each box has a visible border or background around its related content
MUST keep boxes small relative to their container. | topic: sizing | source: Apple HIG Boxes | why: large boxes compete with the container and the surrounding content | check: each box is visibly smaller than the container it sits in
MUST use padding and alignment for subgrouping before nesting boxes. | topic: subgrouping | source: Apple HIG Boxes | why: padding and alignment separate subgroups without adding visual layers | check: subgroups are separated by padding and alignment before any box is nested
MUST NOT nest boxes as a default way to subgroup content. | topic: nesting | source: Apple HIG Boxes | why: nested boxes make the interface busy | check: no box sits inside another box unless padding and alignment cannot separate the content
MUST use a succinct phrase in sentence-style capitalization as a box title. | topic: box titles | source: Apple HIG Boxes | why: a short sentence-style title is easy to scan and read | check: each box title is a short phrase with only its first word and proper nouns capitalized
MUST NOT end a box title with punctuation, except a colon in settings panes. | topic: box titles | source: Apple HIG Boxes | why: trailing punctuation adds clutter to titles | check: box titles have no trailing period, question mark or exclamation mark, and settings pane titles may end with a colon
MUST write box titles so VoiceOver can predict the content of the box. | topic: accessibility | source: Apple HIG Boxes | why: titles help VoiceOver users predict what a box contains before they enter it | check: each box title names what its content is about

Apple-specific (excluded):
- iOS and iPadOS use secondary and tertiary background colors for boxes.
- macOS shows the box title above the box.
- visionOS has no extra considerations on this page.
- Boxes are not supported on tvOS or watchOS.

Persona and journey notes:
- This page states no persona or user journey notes.

COVERAGE: 1 of 1 pages read in full; 7 universal rules extracted; 4 Apple-specific items excluded.
