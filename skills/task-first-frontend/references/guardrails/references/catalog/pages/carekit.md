Candidate catalog - evidence only; not executable requirements.

# CareKit: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/carekit
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 4234b735b896489f08e18ae330ae897daa89b72bcb851521c4f3892e62e4bcaf
Input words: 2590. Candidate rule records: 20. Exclusion blocks: 4.
Original note: p124-carekit/carekit.md.
Adopted source-linked rules: T-24

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## CareKit
URL: https://developer.apple.com/design/human-interface-guidelines/carekit
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST provide a clear privacy policy for sensitive-data experiences. | topic: CareKit | source: https://developer.apple.com/design/human-interface-guidelines/carekit | why: People can understand data handling. | check: At 1440px and 390px, inspect the policy entry and readable explanation.
- MUST obtain permission for sensitive device data and protect both entered and imported data. | topic: CareKit | source: https://developer.apple.com/design/human-interface-guidelines/carekit | why: People control access regardless of source. | check: Not screenshot-checkable: test permission states and inspect data handling using synthetic records.
- MUST request sensitive access when the related task needs it and explain the benefit. | topic: CareKit | source: https://developer.apple.com/design/human-interface-guidelines/carekit | why: People understand the reason in context. | check: At 1440px and 390px, capture the request during its associated task.
- MUST make recurring tasks identifiable by a clear title and schedule. | topic: CareKit | source: https://developer.apple.com/design/human-interface-guidelines/carekit | why: People know what to do and when. | check: At 1440px and 390px, inspect task cards and upcoming occurrences.
- MUST match task presentation to one-step action, instructions, event logging or multiple steps. | topic: CareKit | source: https://developer.apple.com/design/human-interface-guidelines/carekit | why: People understand how to record completion. | check: At 1440px and 390px, compare each task type with its interaction.
- MUST timestamp logged events when their timing matters. | topic: CareKit | source: https://developer.apple.com/design/human-interface-guidelines/carekit | why: People and collaborators can interpret history. | check: At 1440px and 390px, inspect recorded events and verify timestamps.
- MUST track multistep or repeated task completion at the relevant step level. | topic: CareKit | source: https://developer.apple.com/design/human-interface-guidelines/carekit | why: People do not mistake one completed step for the whole task. | check: At 1440px and 390px, capture partial and full completion.
- MUST use compact grids only when concise labels sufficiently explain each action. | topic: CareKit | source: https://developer.apple.com/design/human-interface-guidelines/carekit | why: Density does not erase necessary instructions. | check: At 1440px and 390px, compare grid labels with required task details.
- MUST use color only as reinforcement for task categories. | topic: CareKit | source: https://developer.apple.com/design/human-interface-guidelines/carekit | why: People can distinguish tasks without color. | check: At 1440px and 390px, inspect labels or symbols in grayscale.
- MUST describe tasks accurately in familiar concise language. | topic: CareKit | source: https://developer.apple.com/design/human-interface-guidelines/carekit | why: People avoid misunderstanding domain jargon. | check: At 1440px and 390px, read instructions against approved task content.
- MUST supplement complex physical tasks with useful visual demonstrations when text is insufficient. | topic: CareKit | source: https://developer.apple.com/design/human-interface-guidelines/carekit | why: People can understand the required action. | check: At 1440px and 390px, inspect associated image/video instructions.
- MUST provide clear chart titles, short labels and meaningful axes. | topic: CareKit | source: https://developer.apple.com/design/human-interface-guidelines/carekit | why: People can interpret their progress. | check: At 1440px and 390px, inspect the complete chart.
- MUST distinguish chart series clearly and explain ambiguous encodings with a legend. | topic: CareKit | source: https://developer.apple.com/design/human-interface-guidelines/carekit | why: People do not confuse data categories. | check: At 1440px and 390px, inspect series, legend and contrast.
- MUST state time units on time-based charts. | topic: CareKit | source: https://developer.apple.com/design/human-interface-guidelines/carekit | why: People interpret the observation period correctly. | check: At 1440px and 390px, inspect axes and range labels.
- MUST consolidate dense data and preserve readability across widely differing magnitudes. | topic: CareKit | source: https://developer.apple.com/design/human-interface-guidelines/carekit | why: Small values remain inspectable. | check: At 1440px and 390px, capture dense and extreme-value datasets; check transformations are explicit.
- MUST show useful trends with enough context to interpret them. | topic: CareKit | source: https://developer.apple.com/design/human-interface-guidelines/carekit | why: People can understand progress over time. | check: At 1440px and 390px, compare the displayed narrative with underlying data; do not infer causation from correlation.
- MUST keep trusted support contacts easy to identify and contact. | topic: CareKit | source: https://developer.apple.com/design/human-interface-guidelines/carekit | why: People can get help from the intended person. | check: At 1440px and 390px, inspect contact identity and communication actions.
- MUST minimize and combine recurring-task reminders where useful. | topic: CareKit | source: https://developer.apple.com/design/human-interface-guidelines/carekit | why: People with many tasks are not overwhelmed. | check: Not screenshot-checkable: inspect notification volume for a dense schedule.
- MUST offer task-relevant detail and immediate actions in reminders when appropriate. | topic: CareKit | source: https://developer.apple.com/design/human-interface-guidelines/carekit | why: People can complete a task without losing context. | check: At 1440px and 390px, inspect reminder detail and completion actions.
- MUST use meaningful task symbols and unobtrusive branding in care-oriented workflows. | topic: CareKit | source: https://developer.apple.com/design/human-interface-guidelines/carekit | why: Promotion does not distract from personal goals. | check: At 1440px and 390px, inspect symbols and brand emphasis.
Apple-specific (excluded):
- CareKit UI/Store schema, view styles and Apple framework APIs.
- HealthKit system-only privacy settings and authorization mechanisms.
- ResearchKit consent module, motion/photo integration and SF Symbols defaults.
- App Store submission policy location and Apple platform support.
Persona and journey notes:
- People follow recurring plans, record events or symptoms, inspect progress and contact a trusted team.
- Notification burden differs greatly between a light and a dense daily schedule.
COVERAGE:
- carekit: read, 2591 words, 20 universal rules, 4 excluded
