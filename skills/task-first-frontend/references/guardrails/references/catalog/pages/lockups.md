Candidate catalog - evidence only; not executable requirements.

# Lockups: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/lockups
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: d57716e6cba0278b2e5e7383d4c3031111a02c31b5b68169a197a3cc375520e6
Input words: 382. Candidate rule records: 5. Exclusion blocks: 8.
Original note: p042-lockups/lockups.md.
Adopted source-linked rules: None directly attributed; retained as reviewed candidate evidence, not silently skipped.

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Lockups
URL: https://developer.apple.com/design/human-interface-guidelines/lockups
Universal rules:
- MUST leave enough space between adjacent items so that an item which grows on focus does not overlap or displace its neighbors. | Layout spacing | Apple HIG, Lockups, Best practices ("Allow adequate space between lockups") | A focused item expands, so tight spacing causes collisions | Check that the expanded size of a focused item does not overlap any neighboring item.
- MUST use the same width and height for every item in a row or group. | Consistent sizing | Apple HIG, Lockups, Best practices ("Use consistent lockup sizes within a row or group") | Matching sizes make a group of buttons or images look orderly | Check that all items in one row have identical width and height.
- MUST prefer an image over initials when an image is available. | Avatar content | Apple HIG, Lockups, Monograms ("Prefer images over initials") | An image of a person creates a more intimate connection than text | Check that the image is rendered whenever one is supplied.
- MUST show initials in place of the image only when no image is available. | Avatar fallback | Apple HIG, Lockups, Monograms ("If an image isn't available, the person's initials appear in place of an image") | Initials are the fallback when no picture exists | Check that the initials render when the image value is empty.
- MUST size each image container to fit its content. | Media sizing | Apple HIG, Lockups, Posters ("Posters can be any size, but the size needs to be appropriate for their content") | An oversized or undersized container breaks the content it holds | Check that the container size suits the image content at each supported layout width.
Apple-specific (excluded):
- Lockup as one unit of header, content and footer that expands together on focus: depends on the tvOS focus model.
- Header above and footer below the main content of a lockup: part of the Apple lockup structure.
- Caption button title and subtitle, and image-or-text content: Apple's TVCaptionButtonView component.
- Caption button tilt that follows swipe direction on focus: tvOS focus motion.
- Monogram as a circular picture with a name: Apple's TVMonogramContentView component.
- Poster title and subtitle hidden until focus: tvOS focus behavior.
- Card with header, footer and content for ratings and reviews: Apple's TVCardView component.
- Not supported on iOS, iPadOS, macOS, visionOS or watchOS: Apple platform scope.
Persona and journey notes:
- The page targets tvOS viewers who move focus with a remote, so focus-driven motion is part of the design; no other persona or journey is stated.
COVERAGE:
- lockups: read, approx 560 words, 5 universal rules, 8 excluded
