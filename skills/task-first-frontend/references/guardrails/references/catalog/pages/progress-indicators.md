Candidate catalog - evidence only; not executable requirements.

# Progress indicators: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/progress-indicators
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 0eb48001b5512fa485abe2408d59cbdff90e154ab2178c31dc9c0ec5683a5604
Input words: 1026. Candidate rule records: 13. Exclusion blocks: 2.
Original note: p089-progress-indicators/progress-indicators.md.
Adopted source-linked rules: P-06, P-07, C-48

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Progress indicators
URL: https://developer.apple.com/design/human-interface-guidelines/progress-indicators
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST show active progress during lengthy work and remove the indicator after completion. | topic: Progress indicators | source: https://developer.apple.com/design/human-interface-guidelines/progress-indicators | why: People distinguish work from completion. | check: Not screenshot-checkable: capture start, active and finished states during a full run at 1440px and 390px.
- MUST use determinate progress when completion is measurable. | topic: Progress indicators | source: https://developer.apple.com/design/human-interface-guidelines/progress-indicators | why: People can decide whether to wait. | check: At 1440px and 390px, compare displayed progress with operation telemetry.
- MUST report advancement accurately rather than front-loading misleading percentages. | topic: Progress indicators | source: https://developer.apple.com/design/human-interface-guidelines/progress-indicators | why: People can trust estimated progress. | check: Not screenshot-checkable: record displayed versus actual completed work through the slow final stage; attach both-width frames.
- MUST keep ongoing progress visibly active and explain a stalled operation with recovery guidance. | topic: Progress indicators | source: https://developer.apple.com/design/human-interface-guidelines/progress-indicators | why: People distinguish activity from failure. | check: Not screenshot-checkable: record activity and inject a stall; capture feedback at 1440px and 390px.
- MUST switch indeterminate progress to determinate when the amount of work becomes known. | topic: Progress indicators | source: https://developer.apple.com/design/human-interface-guidelines/progress-indicators | why: People gain useful completion information. | check: Not screenshot-checkable: record the moment total work becomes known and the resulting display at both widths.
- MUST preserve indicator shape when changing progress modes. | topic: Progress indicators | source: https://developer.apple.com/design/human-interface-guidelines/progress-indicators | why: Progress does not disrupt layout. | check: At 1440px and 390px, compare mode-change geometry; do not replace a spinner with a bar.
- MUST use a concise task-specific progress description when context is helpful. | topic: Progress indicators | source: https://developer.apple.com/design/human-interface-guidelines/progress-indicators | why: People know what the app is doing. | check: At 1440px and 390px, read the progress label.
- MUST place progress consistently across related operations. | topic: Progress indicators | source: https://developer.apple.com/design/human-interface-guidelines/progress-indicators | why: People know where status appears. | check: At 1440px and 390px, compare related tasks.
- MUST offer cancellation when stopping is safe. | topic: Progress indicators | source: https://developer.apple.com/design/human-interface-guidelines/progress-indicators | why: People retain control over waiting. | check: Not screenshot-checkable: cancel and verify processing stops; capture controls and final state at both widths.
- MUST explain cancellation losses and offer confirmation or resumption before discarding progress. | topic: Progress indicators | source: https://developer.apple.com/design/human-interface-guidelines/progress-indicators | why: People avoid accidental loss. | check: At 1440px and 390px, capture the consequence and resume controls; exercise their behavior.
- MUST offer pause where useful when cancellation would discard work. | topic: Progress indicators | source: https://developer.apple.com/design/human-interface-guidelines/progress-indicators | why: People can defer a task without losing it. | check: Not screenshot-checkable: pause and resume a supported operation; capture both-width status.
- MUST refresh changing content automatically rather than relying on every refresh being manual. | topic: Progress indicators | source: https://developer.apple.com/design/human-interface-guidelines/progress-indicators | why: People receive current ordinary data. | check: Not screenshot-checkable: change the source and verify automatic updating; capture both-width results.
- MUST add refresh labels only when they convey useful context. | topic: Progress indicators | source: https://developer.apple.com/design/human-interface-guidelines/progress-indicators | why: People avoid redundant instructions. | check: At 1440px and 390px, inspect optional last-updated or content-specific text.
Apple-specific (excluded):
- Apple platform-specific progress appearances, tint and framework APIs.
- iOS pull-to-refresh mechanics and macOS unlabeled-spinner preference.
Persona and journey notes:
- People wait, choose another task, pause, cancel or resume based on accurate status.
COVERAGE:
- progress-indicators: read, 1027 words, 13 universal rules, 2 excluded
