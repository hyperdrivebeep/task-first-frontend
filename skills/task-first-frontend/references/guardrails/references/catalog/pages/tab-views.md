Candidate catalog - evidence only; not executable requirements.

# Tab views: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/tab-views
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 756f9e9e28d36a684547b81d1417617795408bcb33591c5a1816cc33729631ea
Input words: 486. Candidate rule records: 10. Exclusion blocks: 4.
Original note: p045-tab-views/tab-views.md.
Adopted source-linked rules: None directly attributed; retained as reviewed candidate evidence, not silently skipped.

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

# Tab views
URL: https://developer.apple.com/design/human-interface-guidelines/tab-views

Universal rules:
- MUST group only closely related content into the panes of one tab view. | topic: Tab views | source: https://developer.apple.com/design/human-interface-guidelines/tab-views | why: a tab view signals that its panes are alternatives of the same kind, so unrelated content breaks that expectation | check: not screenshot-checkable: depends on the relationship between the pane contents, not on pixels alone
- MUST keep every control inside a pane limited to that pane's own content. | topic: Tab views | source: https://developer.apple.com/design/human-interface-guidelines/tab-views | why: panes are mutually exclusive, so a control that changes another pane is confusing and hard to predict | check: at 1440px and 390px switch to each tab, change a control in it, then switch to the other tabs and confirm they did not change
- MUST give every tab a label that describes the contents of its pane. | topic: Tab views | source: https://developer.apple.com/design/human-interface-guidelines/tab-views | why: people can predict a pane's contents before selecting its tab | check: at 1440px and 390px every tab shows non-empty label text that names the pane's content
- SHOULD use a noun or short noun phrase for each tab label. | topic: Tab views | source: https://developer.apple.com/design/human-interface-guidelines/tab-views | why: nouns name content clearly and keep labels short; a verb phrase may fit only in some contexts | check: at 1440px and 390px tab labels read as nouns or short noun phrases
- MUST use title-style capitalization for tab labels. | topic: Tab views | source: https://developer.apple.com/design/human-interface-guidelines/tab-views | why: consistent capitalization makes labels look like a set of peer destinations | check: at 1440px and 390px every tab label capitalizes its major words
- SHOULD NOT use a pop-up menu to switch between a small number of panes. | topic: Tab views | source: https://developer.apple.com/design/human-interface-guidelines/tab-views | why: a tabbed control switches with one selection and shows every choice at once; a pop-up needs two actions and hides its choices (a pop-up is acceptable only when there are too many panes to show as tabs) | check: not screenshot-checkable: a design judgment on pane count and interaction cost; verify by counting the taps or clicks needed to reach each pane
- SHOULD NOT present more than six tabs in one tab view. | topic: Tab views | source: https://developer.apple.com/design/human-interface-guidelines/tab-views | why: more than six tabs becomes overwhelming and causes layout problems; the HIG says to consider another pattern at six or more | check: at 1440px and 390px count the tabs; more than six is a failure
- MUST place the tabbed control on the top edge of the content area when it is shown. | topic: Tab views | source: https://developer.apple.com/design/human-interface-guidelines/tab-views | why: a consistent position lets people find the pane switcher before they read the content | check: at 1440px and 390px the tab control sits along the top edge of the tab view's content area
- SHOULD NOT hide the tabbed control unless the app switches panes programmatically. | topic: Tab views | source: https://developer.apple.com/design/human-interface-guidelines/tab-views | why: a hidden control removes the visible way for people to switch panes | check: with the control hidden at 1440px and 390px, confirm the app offers another visible way to reach each pane, or that no user action needs to switch panes
- SHOULD inset a tab view by leaving a margin of window-body area on all sides. | topic: Tab views | source: https://developer.apple.com/design/human-interface-guidelines/tab-views | why: the margin separates the tab view from neighboring controls and keeps room for controls that are not part of the tab view | check: at 1440px and 390px measure a visible margin between the tab view edges and the surrounding window body on all four sides, unless it is deliberately extended to the window edges

Apple-specific (excluded):
- Tab views are not supported on iOS, iPadOS, tvOS, or visionOS.
- iOS and iPadOS suggest a segmented control for similar functionality.
- watchOS displays tab views with page controls.
- Developer APIs named in the resources: TabView (SwiftUI) and NSTabView (AppKit).

Persona and journey notes:
- none

COVERAGE:
- tab-views: read, about 500 words, 10 universal rules, 4 excluded
