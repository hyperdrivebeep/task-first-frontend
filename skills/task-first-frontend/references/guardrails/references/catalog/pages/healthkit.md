Candidate catalog - evidence only; not executable requirements.

# HealthKit: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/healthkit
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 0405112f0cb82ebb4c77fb6f02101998335ea80192542151db2a6f35346bf146
Input words: 1356. Candidate rule records: 9. Exclusion blocks: 4.
Original note: p127-healthkit/healthkit.md.
Adopted source-linked rules: T-25

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## HealthKit
URL: https://developer.apple.com/design/human-interface-guidelines/healthkit
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST request health data only for relevant health or fitness functionality. | topic: HealthKit | source: https://developer.apple.com/design/human-interface-guidelines/healthkit | why: People do not disclose unrelated sensitive information. | check: Not screenshot-checkable: map requested data types to user-facing features.
- MUST obtain permission, protect sensitive data and clearly show its use. | topic: HealthKit | source: https://developer.apple.com/design/human-interface-guidelines/healthkit | why: People retain trust after granting access. | check: At 1440px and 390px, inspect explanations; separately verify denied and revoked-access behavior.
- MUST provide a clear privacy policy. | topic: HealthKit | source: https://developer.apple.com/design/human-interface-guidelines/healthkit | why: People can understand how data is handled. | check: At 1440px and 390px, inspect the policy entry and readable content.
- MUST request sensitive data when needed and account for permissions changing. | topic: HealthKit | source: https://developer.apple.com/design/human-interface-guidelines/healthkit | why: People see contextual requests and retain control. | check: Not screenshot-checkable: allow, deny and revoke access while exercising the relevant task.
- MUST explain why sensitive data is needed and how it benefits the person. | topic: HealthKit | source: https://developer.apple.com/design/human-interface-guidelines/healthkit | why: People can make an informed decision. | check: At 1440px and 390px, capture the purpose message.
- MUST identify the individual represented by personal progress. | topic: HealthKit | source: https://developer.apple.com/design/human-interface-guidelines/healthkit | why: People do not confuse another person or aggregate with their own. | check: At 1440px and 390px, inspect the identity next to progress.
- MUST keep information graphics meaningful and distinguish adjacent graphics with different meanings. | topic: HealthKit | source: https://developer.apple.com/design/human-interface-guidelines/healthkit | why: People can interpret progress correctly. | check: At 1440px and 390px, inspect labels, margins and visual separation.
- MUST avoid repeating progress notifications already supplied by another part of the experience. | topic: HealthKit | source: https://developer.apple.com/design/human-interface-guidelines/healthkit | why: People avoid duplicate interruption. | check: Not screenshot-checkable: trace one event through all notification sources.
- MUST use user-facing service names rather than developer framework names in explanations. | topic: HealthKit | source: https://developer.apple.com/design/human-interface-guidelines/healthkit | why: People understand the feature. | check: At 1440px and 390px, read permission and integration copy.
Apple-specific (excluded):
- HealthKit authorization API behavior and exclusive system privacy-setting management.
- Activity ring colors, spacing, meanings, ornament/branding restrictions and HKActivityRingView.
- Apple Health icon, copyrighted imagery, official terminology/translations and clear-space rules.
- App Store policy URL requirement and Apple platform availability.
Persona and journey notes:
- People grant, revise or revoke access to highly sensitive data and expect to see how the product uses it.
COVERAGE:
- healthkit: read, 1357 words, 9 universal rules, 4 excluded
