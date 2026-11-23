Candidate catalog - evidence only; not executable requirements.

# iCloud: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/icloud
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: ad2b7b7c4bafa7a9c5b39f7a6794a666faf8f612991fe8d7cb4ad8a8edd0a4ed
Input words: 723. Candidate rule records: 9. Exclusion blocks: 2.
Original note: p129-icloud/icloud.md.
Adopted source-linked rules: T-27

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## iCloud
URL: https://developer.apple.com/design/human-interface-guidelines/icloud
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST make shared content available without unnecessary per-document synchronization choices. | topic: iCloud | source: https://developer.apple.com/design/human-interface-guidelines/icloud | why: People can find their content across devices. | check: At 1440px and 390px, inspect first use and document availability across two devices.
- MUST balance current content with storage and bandwidth constraints and reveal newer versions when downloads are deferred. | topic: iCloud | source: https://developer.apple.com/design/human-interface-guidelines/icloud | why: People understand stale local content. | check: At 1440px and 390px, capture deferred-update state and the download choice.
- MUST show unobtrusive feedback for downloads that take noticeable time. | topic: iCloud | source: https://developer.apple.com/design/human-interface-guidelines/icloud | why: People know an update is still working. | check: At 1440px and 390px, capture a throttled update and completion.
- MUST avoid consuming paid shared storage with regenerable resources. | topic: iCloud | source: https://developer.apple.com/design/human-interface-guidelines/icloud | why: People keep space for their own content. | check: Not screenshot-checkable: inspect stored content classes and resulting usage.
- MUST remain usable offline and explain synchronization limits unobtrusively. | topic: iCloud | source: https://developer.apple.com/design/human-interface-guidelines/icloud | why: People know changes are not yet on other devices. | check: At 1440px and 390px, capture offline editing and pending-sync state.
- MUST synchronize meaningful continuation state while leaving device-specific preferences local when appropriate. | topic: iCloud | source: https://developer.apple.com/design/human-interface-guidelines/icloud | why: People resume the task without losing useful context. | check: Not screenshot-checkable: move between devices with a known last-read or progress state.
- MUST explain when deletion affects all synchronized devices and confirm consequential removal. | topic: iCloud | source: https://developer.apple.com/design/human-interface-guidelines/icloud | why: People avoid unexpected distributed data loss. | check: At 1440px and 390px, capture deletion scope and confirmation.
- MUST resolve version conflicts promptly or make remaining versions easy to compare and choose. | topic: iCloud | source: https://developer.apple.com/design/human-interface-guidelines/icloud | why: People avoid working on the wrong version. | check: At 1440px and 390px, capture conflicting versions; verify selected result and preserved data.
- MUST include accessible remote content in search results. | topic: iCloud | source: https://developer.apple.com/design/human-interface-guidelines/icloud | why: People can find their content without knowing its storage location. | check: At 1440px and 390px, search for known local and remote items.
Apple-specific (excluded):
- iCloud enablement, all-or-none initial choice and Documents backup behavior.
- CloudKit/GameSave APIs and built-in game synchronization alerts.
Persona and journey notes:
- People move between devices, lose connectivity, update large documents or face conflicting edits.
COVERAGE:
- icloud: read, 724 words, 9 universal rules, 2 excluded
