Candidate catalog - evidence only; not executable requirements.

# Lists and tables: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/lists-and-tables
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 20f9ce74778b4c8fdd5498550a8737e0c5754e766c9a3ba901e88a5a470e7140
Input words: 1241. Candidate rule records: 18. Exclusion blocks: 5.
Original note: p041-lists-and-tables/lists-and-tables.md.
Adopted source-linked rules: C-19, C-20

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Lists and tables

URL: https://developer.apple.com/design/human-interface-guidelines/lists-and-tables

Universal rules:
- MUST prefer displaying text in a list or table when the content is meant to be scanned and read. | content format | Best practices | row-based format makes text easy to scan and read | check: text-heavy content uses a list or table
- MUST consider a collection instead of a list or table when items vary widely in size or many images must be displayed. | layout choice | Best practices | rows suit uniform text, not wide size variation or many images | check: variable-size or image-heavy content uses a collection
- MUST allow people to edit a table when editing makes sense for the data. | editing | Best practices | editing lets people adapt the data to their needs | check: editable tables expose the edit actions the data supports
- MUST allow people to reorder list items even when they cannot add or remove items. | editing | Best practices | people appreciate being able to reorder a list | check: order-sensitive lists support reordering
- MUST provide feedback when people select a list item. | selection feedback | Best practices | people need confirmation that their selection registered | check: selecting a row produces a visible response
- MUST vary selection feedback depending on whether selecting the item reveals a new view or toggles the item's state. | selection feedback | Best practices | the same feedback does not fit both navigation and state change | check: navigation rows and toggle rows show different feedback
- MUST persistently highlight the selected row in a table that helps people navigate a hierarchy, to clarify the path they are taking. | hierarchy navigation | Best practices | persistent highlight shows where people are in the hierarchy | check: the selected row in a hierarchy table stays highlighted
- MUST briefly highlight a row and add a selection indicator such as a checkmark in a table that lists options. | option selection | Best practices | a brief highlight plus a checkmark marks the chosen option without leaving persistent state | check: option rows show a checkmark after selection
- MUST keep item text succinct so row content is comfortable to read. | content length | Content | short text minimizes truncation and wrapping and is easier to scan | check: item text stays short enough to fit rows without heavy wrapping
- MUST avoid over-large table rows when each item contains a large amount of text. | content length | Content | large rows are hard to scan | check: long-content items show titles in the list
- MUST, when items contain large amounts of text, list item titles only and let people choose an item to reveal its content in a detail view. | content length | Content | a detail view holds long content without bloating rows | check: long-content items open a detail view
- MUST preserve readability of text that might otherwise be clipped or truncated, especially when people can vary the table width. | truncation | Content | recognizable content matters when a table narrows | check: narrowing the table keeps item text recognizable
- MUST consider a middle ellipsis for truncated item text so that both the beginning and the end of the content remain visible. | truncation | Content | a middle ellipsis keeps items distinguishable | check: truncated items with similar prefixes stay distinguishable
- MUST use descriptive column headings in a multicolumn table. | column headings | Content | descriptive headings let people understand each column | check: every column has a descriptive heading
- MUST write column headings as nouns or short noun phrases without ending punctuation. | column headings | Content | consistent heading form keeps headings scannable | check: headings are nouns or short noun phrases with no trailing punctuation
- MUST provide a label or header for a single-column table view that shows no column heading. | column headings | Content | people need context for the table | check: single-column tables without a heading show a label or header
- MUST choose a table or list style that coordinates with the data and the platform. | style | Style | styles communicate grouping, hierarchy, and experience | check: the chosen style matches the data grouping and platform conventions
- MUST choose a row style that fits the information the row needs to display. | style | Style | the row layout must carry the required content | check: each row shows its required content without crowding

Apple-specific (excluded):
- iOS, iPadOS, visionOS: info button only reveals more information; disclosure indicator for drilling into subviews; no index on tables with trailing controls; edit mode required before selecting items; grouped style headers and footers.
- macOS: column heading click sorts and re-sorts in the opposite direction; resizable columns; alternating row colors; outline view for hierarchical data.
- tvOS: focused rows highlight and enlarge with rounded corners; do not add custom image masks.
- watchOS: limit row count; keep detail views short for vertical page-based navigation; elliptical style.
- Developer API references (ListStyle, UIListContentConfiguration, disclosureIndicator, NSTableView, and similar) and the Resources, Videos, and Change log sections are not rules.

Persona and journey notes:
- Persona: people who scan text quickly, people who navigate a hierarchy, people who compare values across columns in a wide table.
- Journey: browse rows, select an item, see feedback (reveal a view or toggle state), optionally reorder or edit, return to the list with the path or selection still visible.

COVERAGE: 1 page read; 18 universal rules extracted from the general sections (Best practices, Content, Style); platform sections excluded as Apple-specific.
