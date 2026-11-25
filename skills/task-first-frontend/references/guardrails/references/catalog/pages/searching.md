Candidate catalog - evidence only; not executable requirements.

# Searching: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/searching
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 37ad1899f4035db342fb1c0c6339a929bf0a277a7d7f2fdf0e86eed1d0e06fab
Input words: 693. Candidate rule records: 9. Exclusion blocks: 5.
Original note: p016-searching/searching.md.
Adopted source-linked rules: P-17, P-18

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Searching
URL: https://developer.apple.com/design/human-interface-guidelines/searching
Universal rules:
- MUST provide a search field for finding content within the app. | topic: Searching | source: https://developer.apple.com/design/human-interface-guidelines/searching | why: people find what they want by typing instead of hunting through screens | check: at 1440px and 390px the search field is visible on the main screen without opening a menu
- MUST offer a way to scope or filter search results by attributes such as creation date, file size, or file type when the content has those attributes. | topic: Searching | source: https://developer.apple.com/design/human-interface-guidelines/searching | why: people narrow a long result list down to the item they want | check: at 1440px and 390px a scope or filter control is visible with the results, and choosing a value changes the result list
- MUST provide a way to find content within the open document, page, or window. | topic: Searching | source: https://developer.apple.com/design/human-interface-guidelines/searching | why: people locate a passage in a long item without leaving it | check: at 1440px and 390px the in-document find control is visible while the document is open, and typing a term highlights its matches
- MUST place search in a primary position on the screen when search matters to the task. | topic: Searching | source: https://developer.apple.com/design/human-interface-guidelines/searching | why: people see search without hunting, so they use it | check: at 1440px and 390px the search control sits in the main toolbar, a bottom toolbar, or a dedicated tab, not inside an overflow menu
- MUST provide one clearly identified location that searches all of the app's content. | topic: Searching | source: https://developer.apple.com/design/human-interface-guidelines/searching | why: people have one place to look and need not guess which section holds an item | check: at 1440px and 390px exactly one global search control is present on the main screen and it has a visible label or placeholder
- MUST show the current search scope with placeholder text, a scope bar or token, or a title. | topic: Searching | source: https://developer.apple.com/design/human-interface-guidelines/searching | why: people know what they are searching, so results make sense | check: at 1440px and 390px the empty search field shows placeholder text or a scope token that names the area being searched
- MUST provide search suggestions, such as recent searches before typing or predictive suggestions while typing. | topic: Searching | source: https://developer.apple.com/design/human-interface-guidelines/searching | why: people type less and search faster | check: at 1440px and 390px focusing an empty search field shows recent searches, and typing one letter shows matching suggestions
- MUST provide a way to clear search history whenever search history is shown. | topic: Searching | source: https://developer.apple.com/design/human-interface-guidelines/searching | why: people control what their earlier searches reveal | check: at 1440px and 390px the recent-searches list has a visible clear control, and activating it empties the list
- MUST consider privacy before showing search history in a place where other people could see it. | topic: Searching | source: https://developer.apple.com/design/human-interface-guidelines/searching | why: people do not expose past searches to someone looking over their shoulder or using a shared screen | check: not screenshot-checkable: whether history is visible depends on who can see the screen and the sharing context, not on layout alone
Apple-specific (excluded):
- Spotlight indexing of app content, metadata, and a Spotlight File Importer plug-in (Apple OS and framework)
- Spotlight search launched from inside the app and system-wide search results (Apple OS feature)
- System-provided open and save views with their built-in search field (Apple's own components)
- Quick Look preview generator for custom file types (Apple framework)
- searchSuggestions(_:) and CSImportExtension developer APIs (Apple frameworks)
Persona and journey notes:
- People expect to use a search field to find content inside an app and want to type less while searching.
- People want to narrow results by attributes such as creation date, file size, or file type.
- People search within an open document as well as across the whole app, and they need to know which area a search covers.
- People may not want their past searches visible to others, and they want control over clearing them.
COVERAGE:
- searching: read, approx 650 words, 9 universal rules, 5 excluded
