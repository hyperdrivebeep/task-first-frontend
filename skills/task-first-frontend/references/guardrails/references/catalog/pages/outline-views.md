Candidate catalog - evidence only; not executable requirements.

# Outline views: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/outline-views
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: f762963c8686a1ac80dce68202fb5ebf29beae1398723e509d1658e4bd9f0bc1
Input words: 646. Candidate rule records: 24. Exclusion blocks: 5.
Original note: p043-outline-views/outline-views.md.
Adopted source-linked rules: C-22

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Outline views
URL: https://developer.apple.com/design/human-interface-guidelines/outline-views

Universal rules:
- MUST use a table instead of an outline view to present data that is not hierarchical. | topic: view choice | source: Best practices | why: outline views are for hierarchical data | check: non-hierarchical data is shown in a table, not an outline view
- MUST expose the data hierarchy in the first column only. | topic: outline view columns | source: Best practices | why: other columns display attributes of the primary column's data | check: only the first column shows the parent and child structure
- MAY display attributes that apply to the hierarchical data in columns other than the first. | topic: outline view columns | source: Best practices | why: attributes supplement the primary data | check: non-first columns hold attributes of the hierarchical items, not new hierarchy
- MUST use descriptive column headings that provide context. | topic: column headings | source: Best practices | why: headings provide context | check: every column heading states what its values mean
- MUST use nouns or short noun phrases for column headings. | topic: column headings | source: Best practices | why: not stated on page | check: each heading is a noun or short noun phrase
- MUST NOT put punctuation in column headings. | topic: column headings | source: Best practices | why: not stated on page | check: headings contain no punctuation marks
- MUST NOT put a trailing colon in a column heading. | topic: column headings | source: Best practices | why: not stated on page | check: no heading ends with a colon
- MUST provide column headings in every multi-column outline view. | topic: column headings | source: Best practices | why: headings provide context | check: each column of a multi-column outline view has a heading
- MUST use a label or other means to provide enough context in a single-column outline view without a column heading. | topic: column headings | source: Best practices | why: a missing heading removes context | check: a single-column outline view without a heading still has visible context
- SHOULD let people click column headings to sort an outline view. | topic: sorting | source: Best practices | why: not stated on page | check: a sortable outline view offers column-heading sorting
- MUST let a click on a column heading perform an ascending or descending sort in a sortable outline view. | topic: sorting | source: Best practices | why: people sort by column | check: clicking a column heading sorts the rows ascending or descending
- MUST sort at each hierarchy level when people click the primary column heading. | topic: sorting | source: Best practices | why: keeps the hierarchy intact while sorting | check: top-level items are sorted, then the items within each parent are sorted
- MUST sort in the opposite direction when people click the heading of a column that is already sorted. | topic: sorting | source: Best practices | why: not stated on page | check: a second click on the same sorted heading reverses the sort direction
- MUST let people resize columns. | topic: column width | source: Best practices | why: data displayed in an outline view often varies in width | check: each column width can be adjusted by the user
- MUST make it easy for people to expand or collapse nested containers. | topic: expand and collapse | source: Best practices | why: people navigate nested containers | check: each parent container can be expanded and collapsed by the user
- MUST retain people's expansion choices by storing the expansion state. | topic: expand and collapse | source: Best practices | why: people should not have to navigate back to the same place | check: the expanded levels shown when the view reappears match the previous state
- SHOULD use alternating row colors in a multi-column outline view. | topic: row styling | source: Best practices | why: alternating colors help people track row values across columns in wide views | check: multi-column outline views alternate row colors
- MUST let people edit data in an editable outline view when editing makes sense in the app. | topic: editing | source: Best practices | why: not stated on page | check: each editable cell can be changed where the app allows editing
- MUST let people single-click an editable outline view cell to edit its contents. | topic: editing | source: Best practices | why: people expect single-click editing in an editable cell | check: a single click on an editable cell starts editing
- MAY give a double-click on a cell a different response than the single-click edit, such as opening an item. | topic: editing | source: Best practices | why: a cell can respond differently to a double click | check: any double-click behavior is distinct from the single-click edit and is intentional
- MAY let people reorder, add, and remove rows when that is useful. | topic: editing | source: Best practices | why: not stated on page | check: reorder, add, and remove are offered only where they help the task
- SHOULD truncate cell text with a centered ellipsis instead of clipping it. | topic: text truncation | source: Best practices | why: a middle ellipsis keeps the beginning and end of the text, making content more distinct and recognizable than clipped text | check: long cell text shows a middle ellipsis, not a clipped cut-off
- SHOULD offer a search field to help people find values quickly in a lengthy outline view. | topic: search | source: Best practices | why: helps people find values quickly | check: a lengthy outline view has a search field
- SHOULD include a search field in the toolbar of a window whose primary feature is an outline view. | topic: search | source: Best practices | why: windows with an outline view as the primary feature often include one | check: the window toolbar contains a search field when the outline view is the main content

Apple-specific (excluded):
- Platform note: not supported in iOS, iPadOS, tvOS, visionOS, or watchOS.
- Finder window examples: Finder sort behavior and the Finder navigation example.
- Option-click on a disclosure triangle (Apple modifier key).
- Developer documentation and resources: OutlineGroup (SwiftUI), NSOutlineView (AppKit).
- Related pages by name: column-views, lists-and-tables, split-views, search-fields.

Persona and journey notes: none

COVERAGE: Read 1 of 1 file (outline-views.md, full text). Best-practice rules extracted: 23. Descriptive and permissive sentences not listed as rules: the opening description, the note that outline views often sit beside related content in split views, and the optional secondary-column sorting.
