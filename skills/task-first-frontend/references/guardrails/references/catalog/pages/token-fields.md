Candidate catalog - evidence only; not executable requirements.

# Token fields: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/token-fields
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 44d14ce505b3f024f2573d276a12a23c49b2f1ab894a5c58d40fc33ed406d6a9
Input words: 313. Candidate rule records: 3. Exclusion blocks: 4.
Original note: p064-token-fields/token-fields.md.
Adopted source-linked rules: None directly attributed; retained as reviewed candidate evidence, not silently skipped.

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Token fields
URL: https://developer.apple.com/design/human-interface-guidelines/token-fields

Universal rules:
- MUST convert text the person types into a token when they type a comma, which the page gives as the default conversion trigger | topic: text-to-token conversion | source: HIG Token fields, Best practices ("By default, text people enter turns into a token whenever they type a comma") | why: the page states comma as the default trigger | check: type "name@example.com," and confirm the text becomes a token
- MUST insert a suggested item into the field as a token when the person selects that suggestion | topic: suggestion selection | source: HIG Token fields, Overview ("When people select a suggested recipient, Mail inserts the recipient into the field as a token") | why: a selected suggestion must become the same kind of token as typed input | check: type a partial match, select the suggestion, and confirm a token appears
- MUST let people select a token as a single unit, because the page defines token fields as making tokens easy to select and manipulate | topic: token selection | source: HIG Token fields, Overview ("easy to select and manipulate") | why: tokens are the objects people act on, not plain text | check: click a token and confirm the whole token is selected, not individual characters

Apple-specific (excluded):
- Not supported in iOS, iPadOS, tvOS, visionOS, or watchOS (platform availability).
- Mail address-field example and the recipient token's VIP and contact-card commands (Apple app behavior).
- NSTokenField AppKit API reference (Apple API).
- Related pages text-fields, search-fields, context-menus (cross-references, not rules on this page).

Persona and journey notes:
- Persona: a person entering several recipients or search terms into one field.
- Journey: type a name, pick a suggestion or type a comma, see it become a token, then select it or open its menu.

COVERAGE: Read the full page in one read of hig-text/token-fields.md. Covered Overview, Best practices, Platform considerations, and Resources. The Best practices guidance to add a context menu, add extra conversion shortcuts such as Return, and customize the suggestion delay is phrased as optional ("Consider", "People often benefit"), so it is not counted as a universal rule. Extracted 3 universal rules; 4 Apple-specific exclusions recorded.
