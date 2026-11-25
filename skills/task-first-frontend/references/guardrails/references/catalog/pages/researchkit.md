Candidate catalog - evidence only; not executable requirements.

# ResearchKit: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/researchkit
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 3f140b36072097f0beb20e5b8189e9165c727e46df4b4d5045fa1744c6095a66
Input words: 1014. Candidate rule records: 14. Exclusion blocks: 3.
Original note: p138-researchkit/researchkit.md.
Adopted source-linked rules: T-35

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## ResearchKit
URL: https://developer.apple.com/design/human-interface-guidelines/researchkit
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST introduce a study’s purpose and let returning participants resume quickly. | topic: ResearchKit | source: https://developer.apple.com/design/human-interface-guidelines/researchkit | why: People understand entry without repeating onboarding. | check: At 1440px and 390px, capture first and returning visits.
- MUST check necessary eligibility before asking people to complete consent. | topic: ResearchKit | source: https://developer.apple.com/design/human-interface-guidelines/researchkit | why: Ineligible people avoid wasted effort. | check: At 1440px and 390px, inspect eligibility order and plain questions.
- MUST explain the activity and participant responsibilities before obtaining consent. | topic: ResearchKit | source: https://developer.apple.com/design/human-interface-guidelines/researchkit | why: Agreement is informed. | check: At 1440px and 390px, inspect information available before approval.
- MUST divide lengthy consent into readable sections while keeping the entire document accessible before agreement. | topic: ResearchKit | source: https://developer.apple.com/design/human-interface-guidelines/researchkit | why: People can understand and inspect all terms. | check: At 1440px and 390px, capture overview, detail and full-document access.
- MUST cover data collection, use, benefits, risks, time commitment and withdrawal in consent information where applicable. | topic: ResearchKit | source: https://developer.apple.com/design/human-interface-guidelines/researchkit | why: People know the meaningful consequences. | check: At 1440px and 390px, check each relevant topic against study requirements.
- MUST provide confirmation and a retained consent record after agreement. | topic: ResearchKit | source: https://developer.apple.com/design/human-interface-guidelines/researchkit | why: People can review what they accepted. | check: At 1440px and 390px, capture confirmation and record access; verify delivery separately.
- MUST request only data and notification access necessary for the agreed activity. | topic: ResearchKit | source: https://developer.apple.com/design/human-interface-guidelines/researchkit | why: People avoid unrelated permissions. | check: At 1440px and 390px, compare requests with the stated study needs.
- MUST state survey length and expected completion time before entry. | topic: ResearchKit | source: https://developer.apple.com/design/human-interface-guidelines/researchkit | why: People can decide when to participate. | check: At 1440px and 390px, inspect the survey introduction.
- MUST keep survey questions focused, show progress and make completion explicit. | topic: ResearchKit | source: https://developer.apple.com/design/human-interface-guidelines/researchkit | why: People know where they are and when they are done. | check: At 1440px and 390px, capture first, middle and completed states.
- MUST keep surveys short and separate explanations from the main question. | topic: ResearchKit | source: https://developer.apple.com/design/human-interface-guidelines/researchkit | why: People can answer without unnecessary cognitive load. | check: At 1440px and 390px, inspect the longest question and its supporting text.
- MUST explain active-task steps and any timing or environmental requirements. | topic: ResearchKit | source: https://developer.apple.com/design/human-interface-guidelines/researchkit | why: People can perform the task correctly. | check: At 1440px and 390px, inspect pre-task instructions.
- MUST clearly indicate active-task completion. | topic: ResearchKit | source: https://developer.apple.com/design/human-interface-guidelines/researchkit | why: People know when to stop. | check: At 1440px and 390px, capture the task end state.
- MUST keep personal data correction, withdrawal, consent and privacy information accessible during participation. | topic: ResearchKit | source: https://developer.apple.com/design/human-interface-guidelines/researchkit | why: People retain control after joining. | check: At 1440px and 390px, inspect the profile and withdrawal path.
- MUST provide meaningful participation progress where appropriate. | topic: ResearchKit | source: https://developer.apple.com/design/human-interface-guidelines/researchkit | why: People understand their contribution and upcoming work. | check: At 1440px and 390px, inspect progress against actual completed tasks.
Apple-specific (excluded):
- ResearchKit screen sequence and prebuilt components/APIs.
- Source one-question-per-screen recommendation, study-specific quizzes/signatures and typical emailed PDFs.
- App Store and institutional/ethics requirements are study-specific obligations requiring separate current review.
Persona and journey notes:
- Participants join once, return repeatedly, perform tasks, correct personal data and may withdraw.
COVERAGE:
- researchkit: read, 1015 words, 14 universal rules, 3 excluded
