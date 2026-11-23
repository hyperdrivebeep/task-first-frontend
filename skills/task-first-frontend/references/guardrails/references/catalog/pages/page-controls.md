Candidate catalog - evidence only; not executable requirements.

# Page controls: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/page-controls
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 9e8affde4c1ec431eb43784bc2e10612cf37a7d93dbffc4285bf31c00a60de7e
Input words: 1182. Candidate rule records: 18. Exclusion blocks: 8.
Original note: p068-page-controls/page-controls.md.
Adopted source-linked rules: C-16

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Page controls
URL: https://developer.apple.com/design/human-interface-guidelines/page-controls
Universal rules:
- MUST use a page control only to move through an ordered, sequential list of pages. | topic: Page controls | source: https://developer.apple.com/design/human-interface-guidelines/page-controls | why: people read the control as next and previous, so they are not misled about how the content is organized | check: at 1440px and 390px the control appears only on a carousel or paged view with ordered pages, never on a nav tree or tab group
- MUST NOT use a page control for hierarchical or nonsequential pages; use a sidebar or split view for complex navigation. | topic: Page controls | source: https://developer.apple.com/design/human-interface-guidelines/page-controls | why: people do not have to guess the structure of a non-linear section | check: not screenshot-checkable: depends on the information architecture; the reviewer reads the app's navigation map and confirms non-linear sections use a sidebar or split view
- MUST center the page control horizontally near the bottom of the view or window. | topic: Page controls | source: https://developer.apple.com/design/human-interface-guidelines/page-controls | why: people always find the control in the same place | check: at 1440px and 390px the control's center x equals the viewport center x and it sits in the bottom band of the view
- MUST NOT show more than about 10 indicators for peer pages; use a grid or another arrangement that lets people reach pages in any order. | topic: Page controls | source: https://developer.apple.com/design/human-interface-guidelines/page-controls | why: more than about 10 dots cannot be counted at a glance, so people lose their place | check: at 1440px and 390px a screen with 12 peer pages uses a grid or similar, not a row of dots
- MUST keep indicator dots equally spaced and clip the overflow instead of shrinking the gaps when they do not fit. | topic: Page controls | source: https://developer.apple.com/design/human-interface-guidelines/page-controls | why: even spacing keeps the row readable and signals that more pages exist | check: at 390px with many pages the dots keep equal gaps and the row is cut at its edge
- MUST show one indicator per page, with a solid dot marking the current page. | topic: Page controls | source: https://developer.apple.com/design/human-interface-guidelines/page-controls | why: people see where they are and roughly how far through the list they are | check: at 1440px and 390px exactly one dot is solid and its position matches the visible page
- MUST change the default indicator image only when the image adds meaning to the whole control. | topic: Page controls | source: https://developer.apple.com/design/human-interface-guidelines/page-controls | why: people do not have to decode a decorative icon | check: at 1440px and 390px the indicators are plain dots unless the screen's content explains a custom default icon
- MUST keep custom indicator images simple, with no complex shapes, negative space, text, or inner lines. | topic: Page controls | source: https://developer.apple.com/design/human-interface-guidelines/page-controls | why: small icons stay readable and do not blur into a muddy shape | check: at 390px, zoomed in on the indicator row, each custom image is identifiable at its rendered size with no interior detail lost
- MUST NOT use more than two different indicator images in one page control. | topic: Page controls | source: https://developer.apple.com/design/human-interface-guidelines/page-controls | why: people do not have to memorize the meaning of many icons | check: at 1440px and 390px the count of distinct indicator images in one control is at most two
- MUST NOT apply custom colors to indicator images; let the system color them so the current-page dot keeps its contrast. | topic: Page controls | source: https://developer.apple.com/design/human-interface-guidelines/page-controls | why: the current page stays easy to spot in every context | check: at 1440px and 390px in the default appearance the current-page dot is visibly different from the others
- MUST place indicators on a backdrop when the content behind them would reduce their contrast. | topic: Page controls | source: https://developer.apple.com/design/human-interface-guidelines/page-controls | why: indicators stay visible over photos and busy content | check: at 1440px and 390px the control over a light image and over a dark image keeps all indicators visible, with a backdrop where needed
- MUST keep the indicator backdrop always visible only when the page control is the screen's primary navigation; otherwise show it only while people interact with the control. | topic: Page controls | source: https://developer.apple.com/design/human-interface-guidelines/page-controls | why: a secondary control stays out of the way and a primary one is never missed | check: at 1440px and 390px on an idle screen the primary control shows its backdrop and a secondary control hides it until hover or touch
- MUST NOT let people drag through pages on a page control that gives no visual feedback while it is dragged. | topic: Page controls | source: https://developer.apple.com/design/human-interface-guidelines/page-controls | why: people can see where the drag is taking them, so they do not overshoot or lose their place | check: not screenshot-checkable: needs a recorded drag; the reviewer records a drag at 1440px and 390px and confirms feedback at each step
- MUST let a tap on the leading or trailing side of the current indicator move to the previous or next page. | topic: Page controls | source: https://developer.apple.com/design/human-interface-guidelines/page-controls | why: one tap moves one page without precise aiming | check: at 1440px and 390px, tapping the left and right halves of the current dot changes to the previous and next page, shown by before and after screenshots
- MUST let people drag across the control to move through pages in sequence. | topic: Page controls | source: https://developer.apple.com/design/human-interface-guidelines/page-controls | why: people can scan many pages quickly | check: at 1440px and 390px a recorded drag across the control changes pages in order, shown by screenshots at each step
- MUST let a drag past the first or last edge jump to the first or last page. | topic: Page controls | source: https://developer.apple.com/design/human-interface-guidelines/page-controls | why: people reach either end of a long list in one gesture | check: at 1440px and 390px, dragging past the leading edge then the trailing edge shows the first and last page, shown by screenshots
- MUST NOT animate page transitions during a drag; animate only a discrete tap. | topic: Page controls | source: https://developer.apple.com/design/human-interface-guidelines/page-controls | why: fast dragging does not lag or flash | check: not screenshot-checkable: depends on motion timing; the reviewer records a fast drag at 390px and confirms no transition animation and no lag
- MUST give each page in a paged list a clear, distinct purpose. | topic: Page controls | source: https://developer.apple.com/design/human-interface-guidelines/page-controls | why: people know why each page is there and do not page through duplicates | check: at 1440px and 390px each page shows a distinct heading or content, and no two pages look the same
Apple-specific (excluded):
- Page controls are not supported on macOS.
- On iPadOS, the pointer can target a specific indicator.
- On tvOS, page controls suit collections of full-screen pages, and extra controls on those screens make focus hard to keep.
- On visionOS, people only see the page position and cannot interact with the page control.
- On watchOS, the page control sits at the screen bottom or beside the Digital Crown, and vertical pagination is preferred over horizontal.
- On watchOS, limit each page to one screen height and place variable-height pages after fixed-height pages.
- The location.fill and bookmark.fill symbols and the Weather example use SF Symbols and Apple's own app.
- Developer notes on the tap-versus-scrub API split, the background style names, and the preferredIndicatorImage and setIndicatorImage calls are Apple framework APIs.
Persona and journey notes:
- People step through an ordered list to find the page they want, and they can build custom lists of pages.
- People estimate where they are in the list from the highlighted dot.
- People scrub quickly through pages and need feedback while they do.
- People must memorize what each custom indicator image means, so too many image types confuse them.
COVERAGE:
- page-controls: read, approx 1,250 words, 18 universal rules, 8 excluded
