Candidate catalog - evidence only; not executable requirements.

# Live Activities: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/live-activities
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 9dd09516f4e48528db1f274f5aae82b3206544a143f06c7d89190331e19eb6bb
Input words: 4229. Candidate rule records: 26. Exclusion blocks: 6.
Original note: p100-live-activities/live-activities.md.
Adopted source-linked rules: T-07, T-08

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Live Activities
URL: https://developer.apple.com/design/human-interface-guidelines/live-activities
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST use live tracking for a task or event with a defined beginning and end. | topic: Live Activities | source: https://developer.apple.com/design/human-interface-guidelines/live-activities | why: People understand what is being tracked. | check: At 1440px and 390px, identify task start, active and finished states.
- MUST prioritize essential live information and provide a route to detail. | topic: Live Activities | source: https://developer.apple.com/design/human-interface-guidelines/live-activities | why: People can glance first and investigate when needed. | check: At 1440px and 390px, compare compact content with the linked detail.
- MUST NOT put unrelated advertising into task progress. | topic: Live Activities | source: https://developer.apple.com/design/human-interface-guidelines/live-activities | why: People can trust the tracking surface. | check: At 1440px and 390px, inspect all live content states.
- MUST redact sensitive data on publicly visible live surfaces or provide an innocuous summary. | topic: Live Activities | source: https://developer.apple.com/design/human-interface-guidelines/live-activities | why: Bystanders cannot read private details. | check: At 1440px and 390px, capture locked and ambient appearances with synthetic data.
- MUST preserve recognizable product identity across live presentations and supported themes. | topic: Live Activities | source: https://developer.apple.com/design/human-interface-guidelines/live-activities | why: People recognize the source of an update. | check: At 1440px and 390px, compare theme and size variants.
- MUST keep essential live text legible with sufficiently prominent size and weight. | topic: Live Activities | source: https://developer.apple.com/design/human-interface-guidelines/live-activities | why: People can understand a glanceable update. | check: At 1440px and 390px, inspect the smallest variant and longest values.
- MUST adapt live content to each supported size instead of truncating key information. | topic: Live Activities | source: https://developer.apple.com/design/human-interface-guidelines/live-activities | why: People receive meaningful information in constrained space. | check: At 1440px and 390px, capture compact, minimal and expanded equivalents.
- MUST use only the space needed to communicate current live information clearly. | topic: Live Activities | source: https://developer.apple.com/design/human-interface-guidelines/live-activities | why: The status surface does not unnecessarily occupy the screen. | check: At 1440px and 390px, compare sparse and detailed states.
- MUST use concise abbreviations or meaningful graphics in very narrow live layouts. | topic: Live Activities | source: https://developer.apple.com/design/human-interface-guidelines/live-activities | why: Key status still fits. | check: At 1440px and 390px, inspect the narrowest supported presentation and accessible expansion.
- MUST align rounded content and margins with the enclosing shape. | topic: Live Activities | source: https://developer.apple.com/design/human-interface-guidelines/live-activities | why: Content does not collide with curved edges. | check: At 1440px and 390px, inspect corners and equal margins.
- MUST retain sufficient contrast for live information over custom backgrounds and dimmed appearances. | topic: Live Activities | source: https://developer.apple.com/design/human-interface-guidelines/live-activities | why: People can read status in their chosen environment. | check: At 1440px and 390px, capture supported backgrounds and dimmed state; measure contrast separately.
- MUST use update animation to explain changed information. | topic: Live Activities | source: https://developer.apple.com/design/human-interface-guidelines/live-activities | why: People can identify the change. | check: Not screenshot-checkable: record one real update; capture before, middle and end at both widths.
- MUST preserve object identity and relative layout during live size transitions. | topic: Live Activities | source: https://developer.apple.com/design/human-interface-guidelines/live-activities | why: People can follow information across views. | check: Not screenshot-checkable: record compact-to-expanded transitions and compare matching elements at both widths.
- MUST avoid collisions between elements during a layout transition. | topic: Live Activities | source: https://developer.apple.com/design/human-interface-guidelines/live-activities | why: Information remains readable while moving. | check: Not screenshot-checkable: inspect intermediate frames of every layout transition.
- MUST open the relevant task or event when a live surface is activated. | topic: Live Activities | source: https://developer.apple.com/design/human-interface-guidelines/live-activities | why: People do not have to search again. | check: At 1440px and 390px, capture the tapped surface and verify its exact destination.
- MUST keep live-surface actions simple, essential and directly related to the tracked activity. | topic: Live Activities | source: https://developer.apple.com/design/human-interface-guidelines/live-activities | why: Controls do not crowd useful information. | check: At 1440px and 390px, inspect each action purpose and spacing.
- MUST support a direct response when a meaningful event update calls for one. | topic: Live Activities | source: https://developer.apple.com/design/human-interface-guidelines/live-activities | why: People can act while the information is relevant. | check: At 1440px and 390px, capture the update and task-specific response.
- MUST start live tracking at an expected task moment and let people turn it off from the related view. | topic: Live Activities | source: https://developer.apple.com/design/human-interface-guidelines/live-activities | why: People retain control over persistent updates. | check: Not screenshot-checkable: start a task, then disable tracking from its related screen; capture both widths.
- MUST update live content only when the underlying information changes. | topic: Live Activities | source: https://developer.apple.com/design/human-interface-guidelines/live-activities | why: People avoid pointless distraction. | check: Not screenshot-checkable: observe an unchanged source and verify no cosmetic refresh churn.
- MUST alert only for essential live updates and avoid duplicate push notifications for the same update. | topic: Live Activities | source: https://developer.apple.com/design/human-interface-guidelines/live-activities | why: People avoid repeated interruptions. | check: Not screenshot-checkable: trace the same event across live updates and notifications.
- MUST consolidate related tracked events when separate status surfaces would force repeated switching. | topic: Live Activities | source: https://developer.apple.com/design/human-interface-guidelines/live-activities | why: People can follow related activity efficiently. | check: At 1440px and 390px, inspect multiple concurrent related events and their identifiers.
- MUST end active tracking immediately when the task ends. | topic: Live Activities | source: https://developer.apple.com/design/human-interface-guidelines/live-activities | why: People do not mistake finished work for ongoing work. | check: Not screenshot-checkable: complete the task and verify immediate state change at both widths.
- MUST keep a completed summary only for a duration useful to its task. | topic: Live Activities | source: https://developer.apple.com/design/human-interface-guidelines/live-activities | why: Old summaries do not crowd current activity. | check: At 1440px and 390px, capture completion and eventual dismissal; verify lifecycle timing separately.
- MUST keep split compact regions semantically unified and link them to the same task. | topic: Live Activities | source: https://developer.apple.com/design/human-interface-guidelines/live-activities | why: People understand them as one update. | check: At 1440px and 390px, inspect both regions and test each destination.
- MUST keep a minimal live view recognizable and show useful current information where space allows. | topic: Live Activities | source: https://developer.apple.com/design/human-interface-guidelines/live-activities | why: A small view communicates more than decoration. | check: At 1440px and 390px, inspect minimal states over an actual update.
- MUST avoid implying interactivity in driving contexts where actions are disabled. | topic: Live Activities | source: https://developer.apple.com/design/human-interface-guidelines/live-activities | why: Drivers see relevant information without unusable controls. | check: At 1440px and 390px, inspect the driving-specific presentation; verify disabled-input behavior separately.
Apple-specific (excluded):
- ActivityKit start platforms, system placements and Dynamic Island/TrueDepth geometry.
- Eight-hour activity duration, four-hour retained summary and suggested 15-30-minute dismissal windows.
- Logo-mark container restrictions, black backgrounds and key-line tint rules.
- Exact device dimensions, 28-point limited layout, 14-point margins and two-second animation maximum.
- StandBy scaling/red tint, CarPlay resolution tables, watchOS Smart Stack and iPhone Mirroring APIs.
- Apple App Shortcut creation and framework-specific layout methods.
Persona and journey notes:
- People track deliveries, rides, sports or workouts across devices, then enter detail or act.
- A shared ambient or in-car display has different privacy, attention and interaction constraints.
COVERAGE:
- live-activities: read, 4230 words, 26 universal rules, 6 excluded
