Candidate catalog - evidence only; not executable requirements.

# Column views: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/column-views
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 09d91637453ecf20978cda370a4921c5d4b33ade9f12d10aa6e6e8024cf065be
Input words: 298. Candidate rule records: 11. Exclusion blocks: 5.
Original note: p038-column-views/column-views.md.
Adopted source-linked rules: C-23

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Column views
URL: https://developer.apple.com/design/human-interface-guidelines/column-views

Universal rules:
- MUST arrange the data hierarchy so that each level is shown as one vertical column. | Source: Overview
- MUST show the data items within each column as horizontal rows. | Source: Overview
- MUST display the children of a selected parent item in the next column. | Source: Overview
- MUST mark each parent item that has nested child items with a triangle icon. | Source: Overview
- MUST let people keep navigating into children until they reach an item with no children. | Source: Overview
- MUST let people navigate back up the hierarchy to explore other branches of data. | Source: Overview
- MUST show the root level of the data hierarchy in the first column. | Source: Best practices
- MUST consider a column view only for a deep data hierarchy that people navigate back and forth between frequently. | Source: Best practices
- MUST NOT use a column view when people need the sorting capabilities that lists and tables provide. | Source: Best practices
- MUST consider showing information about the selected item when it has no nested items to display. | Source: Best practices
- MUST let people resize columns, especially when the names of some data items are too long to fit the default column width. | Source: Best practices

Apple-specific (excluded):
- Finder offers a column view for navigating directory structures (example product reference). | Reason: Apple product example
- Column views are not supported in iOS, iPadOS, tvOS, visionOS, or watchOS. | Reason: Apple platform support
- Use split views for hierarchical content in iPadOS or visionOS apps. | Reason: Apple platform guidance
- Related pages: lists-and-tables, outline-views, split-views. | Reason: Apple cross-references
- Developer documentation: NSBrowser (AppKit). | Reason: Apple API reference

Persona and journey notes:
- People who navigate deep hierarchies often move back and forth between levels and expect to scroll back to the first column to restart from the top.
- People use the selected item's preview and details (such as dates, file type, and size) when a branch ends with no children.

COVERAGE:
- column-views: read, 295 words, 11 universal rules, 5 excluded
