Candidate catalog - evidence only; not executable requirements.

# Split views: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/split-views
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: b41a27acc3bb8c437d5e07c40b1f0e0faef168e2a7e68d93ff737bd356d242e7
Input words: 1079. Candidate rule records: 12. Exclusion blocks: 12.
Original note: p044-split-views/split-views.md.
Adopted source-linked rules: C-14

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Split views

URL: https://developer.apple.com/design/human-interface-guidelines/split-views

Universal rules
- MUST persistently highlight the current selection in each pane that leads to the detail view. | topic: Split views | source: https://developer.apple.com/design/human-interface-guidelines/split-views | why: the selected appearance keeps people oriented across panes. | check: desktop 1440px and mobile 390px screenshot check
- MUST consider letting people drag and drop content between panes. | topic: Split views | source: https://developer.apple.com/design/human-interface-guidelines/split-views | why: dragging moves content between hierarchy levels of the app. | check: not screenshot-checkable: drag and drop is an interaction, not a static layout
- MUST NOT show multiple panes at a compact width where the content would wrap or truncate. | topic: Split views | source: https://developer.apple.com/design/human-interface-guidelines/split-views | why: multiple panes in too little width become hard to read and to interact with. | check: mobile 390px screenshot check
- MUST design the split view layout for narrow, compact, and intermediate window widths as well as full width. | topic: Split views | source: https://developer.apple.com/design/human-interface-guidelines/split-views | why: resizable windows pass through every width. | check: desktop 1440px and mobile 390px screenshot check
- MUST keep navigation between the panes logical at every supported window width. | topic: Split views | source: https://developer.apple.com/design/human-interface-guidelines/split-views | why: people must still be able to move between panes when the layout changes. | check: not screenshot-checkable: navigation order is interaction behavior
- MUST set reasonable default minimum and maximum pane sizes. | topic: Split views | source: https://developer.apple.com/design/human-interface-guidelines/split-views | why: defaults that are too small or too large break the layout. | check: desktop 1440px and mobile 390px screenshot check
- MUST use pane sizes that keep the divider visible when people can resize the panes. | topic: Split views | source: https://developer.apple.com/design/human-interface-guidelines/split-views | why: a divider that disappears is difficult to use. | check: desktop 1440px and mobile 390px screenshot check
- MUST NOT let a pane shrink to a size where its divider seems to disappear. | topic: Split views | source: https://developer.apple.com/design/human-interface-guidelines/split-views | why: a pane that is too small hides the divider and its resize handle. | check: desktop 1440px and mobile 390px screenshot check
- MUST consider letting people hide a pane when it reduces distraction or gives more room for editing. | topic: Split views | source: https://developer.apple.com/design/human-interface-guidelines/split-views | why: hiding panes gives editing content more room. | check: not screenshot-checkable: hiding is a toggled interaction
- MUST provide more than one way to reveal a hidden pane, such as a toolbar button or a menu command with a keyboard shortcut. | topic: Split views | source: https://developer.apple.com/design/human-interface-guidelines/split-views | why: people must be able to restore a hidden pane through several routes. | check: desktop 1440px and mobile 390px screenshot check
- MUST display the selected item's contents in the secondary pane when an item is selected in the primary pane. | topic: Split views | source: https://developer.apple.com/design/human-interface-guidelines/split-views | why: the primary-to-secondary relationship is the core split view navigation pattern. | check: desktop 1440px and mobile 390px screenshot check
- MUST use the leading pane to list the top-level items or collections when the split view serves as a navigation sidebar. | topic: Split views | source: https://developer.apple.com/design/human-interface-guidelines/split-views | why: the leading pane is the entry point to the app hierarchy. | check: desktop 1440px and mobile 390px screenshot check

Apple-specific (excluded)
- iOS: prefer a split view only in a regular environment, not a compact one. Excluded because it names the iPhone compact size class; the general width rule is kept above.
- iPadOS: a split view includes two vertical panes or three vertical panes. Excluded because it is iPad layout guidance.
- iPadOS: navigation between panes at narrow, compact, and intermediate widths. Generalized into the universal width rules above; the iPad wording itself is excluded.
- macOS: arrange panes vertically, horizontally, or both. Excluded because it describes AppKit split view arrangement.
- macOS: prefer the thin one-point divider style. Excluded because it names the macOS DividerStyle enum.
- tvOS: use a split view to help people filter content. Excluded because it is tvOS interaction guidance.
- tvOS: default split view is one third primary and two thirds secondary, or half and half. Excluded because it is tvOS layout guidance.
- tvOS: display a single title above a split view and choose its alignment. Excluded because it is tvOS layout guidance.
- visionOS: prefer a split view over a new window for supplementary information. Excluded because it is visionOS spatial guidance.
- watchOS: the split view displays either the list or a detail view full screen. Excluded because it is watchOS guidance.
- watchOS: show the most relevant detail view at launch and use vertical tab views with the Digital Crown. Excluded because it is watchOS guidance.
- Resources and change log: related links, developer docs, and dated change entries. Excluded because they are not guidance.

Persona and journey notes
- People orient themselves by the highlighted selection in each pane, so the selection state carries the navigation meaning.
- A tertiary pane appears only when items in the secondary pane contain additional content.
- People hide navigation panes while editing content and bring them back when they need navigation.
- Some split views hold supplementary groups around a main canvas, such as a navigator, notes, and an inspector around slide content; this use is rare.
- People move content between hierarchy levels by dragging it between panes.

COVERAGE
- Read the full page, one file: split-views.md.
- Sections covered: introduction, best practices, platform considerations for iOS, iPadOS, macOS, tvOS, visionOS, and watchOS, resources, and change log.
- Universal rules extracted: 12.
