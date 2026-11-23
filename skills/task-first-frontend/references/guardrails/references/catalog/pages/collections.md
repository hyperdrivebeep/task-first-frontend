Candidate catalog - evidence only; not executable requirements.

# Collections: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/collections
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: aa5d1135f940b8901692829c30c8835169cd3a6e1c4304599a47cdd53b423313
Input words: 304. Candidate rule records: 9. Exclusion blocks: 3.
Original note: p037-collections/collections.md.
Adopted source-linked rules: C-21

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Collections
URL: https://developer.apple.com/design/human-interface-guidelines/collections
Universal rules:
- MUST use the standard row or grid layout whenever possible | topic: layout default | source: Best practices | why: people expect the simple default horizontal row or grid appearance | check: the collection uses the default row or grid unless a custom layout is clearly needed
- MUST NOT create a custom layout that might confuse people or draw undue attention to itself | topic: custom layout | source: Best practices | why: unfamiliar layouts confuse people and compete with the content | check: any custom layout is simple, expected, and does not pull attention from the content
- SHOULD consider a table instead of a collection for text | topic: content type | source: Best practices | why: textual information is easier to view and digest in a scrollable list | check: text-only content is shown in a list or table rather than a collection
- MUST make items easy to choose | topic: item selection | source: Best practices | why: people get frustrated and lose interest when items are hard to reach | check: every item can be reached and selected without difficulty
- MUST use adequate padding around images | topic: spacing | source: Best practices | why: padding keeps focus and hover effects easy to see and prevents content from overlapping | check: images have padding that makes focus or hover effects visible and no content overlaps
- MAY add custom interactions beyond the default behavior only when the app requires them | topic: gestures | source: Best practices | why: extra gestures serve custom actions the app needs | check: each added gesture maps to a custom action the app actually requires
- SHOULD consider animations that give feedback when people insert, delete, or reorder items | topic: change feedback | source: Best practices | why: animation makes item changes easy to follow | check: insert, delete, and reorder changes are shown with an animation, standard or custom
- MUST make dynamic layout changes make sense and easy to track | topic: layout change | source: Platform considerations, iOS and iPadOS | why: an unclear layout change confuses people | check: each dynamic layout change can be explained and followed visually
- SHOULD avoid changing the layout while people are viewing or interacting with it, unless the change responds to an explicit action | topic: layout stability | source: Platform considerations, iOS and iPadOS | why: unexpected movement during interaction disrupts people | check: layout changes during viewing or interaction are triggered by an explicit action
Apple-specific (excluded):
- Default gestures of tap to select, touch and hold to edit, and swipe to scroll (Apple interaction defaults)
- Platform note: no additional considerations for macOS, tvOS, or visionOS, and collections are not supported in watchOS
- Developer resources: UICollectionView (UIKit) and NSCollectionView (AppKit), plus related pages on lists and tables, image views, and layout
Persona and journey notes:
- People browsing image-based content in a collection expect the default row or grid and a predictable way to select and scroll.
- When people add, remove, or reorder items, they need animated feedback, and dynamic layout changes should not surprise them mid-task.
COVERAGE: collections, approx 400 words, 9 universal rules, 3 excluded
