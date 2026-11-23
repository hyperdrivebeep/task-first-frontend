Candidate catalog - evidence only; not executable requirements.

# Scroll views: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/scroll-views
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 447243ec3889b548de022720b51e33fa90c201aba3672b2e15b2506168eb00b1
Input words: 1925. Candidate rule records: 27. Exclusion blocks: 21.
Original note: p071-scroll-views/scroll-views.md.
Adopted source-linked rules: C-18

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Scroll views
URL: https://developer.apple.com/design/human-interface-guidelines/scroll-views
Universal rules:
- MUST support default system scrolling gestures and keyboard shortcuts | Scrolling input | Best practices | People expect systemwide scrolling behavior to work everywhere | not screenshot-checkable: requires driving gestures and key presses, not a static capture
- MUST use the elastic scroll behavior people expect for scroll indicators when building custom scrolling | Scroll indicator | Best practices | Custom scrolling must feel like the scrolling people already know | not screenshot-checkable: elastic motion is only visible while scrolling
- MUST make it apparent when content extends beyond the view, such as by showing partial content at the view edge | Scrollability cue | Best practices | Scroll indicators are not always visible, so people need another signal that more content exists | check at 1440px and 390px
- MUST NOT nest a scroll view inside another scroll view with the same orientation | Nested scroll views | Best practices | Same-orientation nesting creates an unpredictable interface that is difficult to control | check at 1440px and 390px
- MUST consider supporting page-by-page scrolling where it makes sense for the content | Paging | Best practices | Some people prefer scrolling a fixed amount of content per interaction | not screenshot-checkable: depends on scroll interaction, not a static layout
- MUST consider a unit of overlap, such as a line of text, a row of glyphs, or part of a picture, subtracted from the page size during page-by-page scrolling | Paging overlap | Best practices | Overlap helps people keep their context between pages | not screenshot-checkable: depends on scroll position over time
- MUST scroll automatically to bring newly selected content or a hidden insertion point into view when the app selects content or places the insertion point in a hidden area | Automatic scrolling | Best practices | Relevant content left out of view leaves people without context | not screenshot-checkable: requires a triggered selection in a hidden area
- MUST scroll back to the insertion point as soon as people begin entering text in a location that is not currently visible | Automatic scrolling | Best practices | Typing into a hidden location is confusing | not screenshot-checkable: requires typing after navigating to another location
- MUST follow the pointer by scrolling in the direction it moves when the pointer passes the view edge during a selection | Pointer selection | Best practices | Selection would otherwise stop at the edge | not screenshot-checkable: requires an active pointer drag
- MUST scroll until a selection is in view before performing an operation on it when people scroll to a new location before acting on the selection | Selection | Best practices | Operations must apply to a selection people can see | not screenshot-checkable: requires a multi-step interaction
- MUST scroll automatically only as much as necessary to help people retain context | Automatic scrolling | Best practices | Over-scrolling loses people's place, and a partly visible selection does not need full scrolling | not screenshot-checkable: depends on interaction timing
- MUST set appropriate maximum and minimum zoom scale values when supporting zoom | Zoom limits | Best practices | Unbounded zoom, such as one character filling the screen, makes no sense in most situations | not screenshot-checkable: requires zoom gestures
- MUST NOT use a scroll edge effect unless a scroll view is behind floating interface elements | Scroll edge effect | Scroll edge effects | The effect exists only to separate floating elements from scrolling content | check at 1440px and 390px
- MUST NOT use a scroll edge effect as decoration | Scroll edge effect | Scroll edge effects | The effect is functional, not decorative | check at 1440px and 390px
- MUST apply one scroll edge effect per view | Scroll edge effect | Scroll edge effects | One effect per view keeps the separation clear | check at 1440px and 390px
- MUST keep scroll edge effects equal in height across split-view panes so they stay aligned | Scroll edge effect | Scroll edge effects | Mismatched heights break pane alignment | check at 1440px and 390px
- MUST keep controls visually distinct from scrolling content when a scroll edge effect is applied | Scroll edge effect | Scroll edge effects | Keeping controls distinct is the purpose of the effect | check at 1440px and 390px
- MUST consider showing a page control when a scroll view is in page-by-page mode | Page indication | iOS, iPadOS | A page control shows how many chunks of content exist and which one is visible | check at 1440px and 390px
- MUST NOT show a scroll indicator on the same axis as a page control shown with the same scroll view | Redundant controls | iOS, iPadOS | Two controls on one axis confuse people | check at 1440px and 390px
- MUST use the same size for all controls in a panel that uses small scroll bars | Control sizing | macOS | Mixed control sizes in one panel look inconsistent | check at 1440px and 390px
- MUST consider increasing margins when content uses tight margins so the scroll indicator does not overlap content | Indicator margins | visionOS | An indicator overlapping content obscures it | check at 1440px and 390px
- MUST prefer the automatic scroll edge effect style, using the default automatic style where possible | Scroll edge effect style | Scroll edge effects | The automatic style gives more opaque separation for toolbars with many controls, text outside materials, Liquid Glass controls, and pinned table headers | check at 1440px and 390px
- MUST thoroughly test control legibility in a variety of contexts when using the soft scroll edge effect style | Scroll edge effect style | Scroll edge effects | The soft style can reduce control legibility, so it needs testing before use | check at 1440px and 390px
- MUST prefer vertically scrolling content | Scroll direction | watchOS | People use the Digital Crown to navigate to and within apps on Apple Watch | check at 1440px and 390px
- MUST use tab views to provide page-by-page scrolling | Page-by-page scrolling | watchOS | Tab views displayed as pages let people move through content one full-screen page at a time | not screenshot-checkable: depends on the app's navigation structure, not one static layout
- MUST consider limiting an individual page of paged content to a single screen height | Paged content height | watchOS | A one-screen page clarifies each page's purpose | check at 1440px and 390px
- MUST place variable-height pages after fixed-height pages when possible | Page order | watchOS | Fixed-height pages first keeps navigation predictable | not screenshot-checkable: depends on the page ordering in the app's content model
Apple-specific (excluded):
- macOS calls the scroll indicator a scroll bar
- macOS small or mini scroll bar sizes for panels that share space with other windows
- visionOS scroll indicator has a small fixed size and a fixed placement (trailing edge centered vertically, bottom edge centered horizontally)
- visionOS scroll indicator appears at the window edge when people swipe
- visionOS jog bar with tick marks that adjust scroll speed when people drag the indicator
- visionOS Look to Scroll must be added to each scroll view individually
- visionOS Look to Scroll is reserved for reading or browsing views and avoided for controls and dense information (Notes example)
- visionOS Look to Scroll requires removing parallax or scroll-position animations first
- visionOS Look to Scroll starts when the gaze rests near the scroll view boundary
- visionOS Look to Scroll views should prefer the full width or full height of the window
- visionOS Look to Scroll inset scroll views need clear boundaries (Notes example)
- visionOS Look to Scroll must be supported in all similar views once supported in one
- tvOS views have no distinct scroll indicators; the system keeps focused items visible
- watchOS tab views displayed as full-screen pages stacked vertically
- watchOS page indicator beside the Digital Crown
- watchOS page indicator expands into a scroll indicator for long pages
- Scroll edge effects apply to iOS, iPadOS, and macOS only (platform scope)
- Developer references: PagingScrollTargetBehavior, ScrollEdgeEffectStyle, NSScrollEdgeEffectStyle, ScrollInputKind, look, ScrollView, UIScrollView, NSScrollView, WKPageOrientation
- Related links: page-controls, gestures, pointing-devices, tab-views
- Change log entries dated June 2023 through June 2026
- Example apps: Weather, Notes, Music, Safari
Persona and journey notes: people scroll by gesture, keyboard, pointer, eyes on visionOS, and the Digital Crown on watchOS; people reading long text or browsing collections need clear edges and scroll cues; people search for text, select across hidden areas, type into a remote insertion point, and drag selections past the edge; a horizontal scroll view may sit inside a vertical one or the reverse; panels may coexist with other windows.
COVERAGE: scroll-views | approx 1250 words | 27 universal rules | 21 excluded
