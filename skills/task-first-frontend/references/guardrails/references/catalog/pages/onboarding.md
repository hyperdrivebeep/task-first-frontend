Candidate catalog - evidence only; not executable requirements.

# Onboarding: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/onboarding
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 05fc820e6130b881882facdc782eb1b92e7d655a413b2e1058cd61ca22a0930f
Input words: 739. Candidate rule records: 18. Exclusion blocks: 2.
Original note: p010-onboarding/onboarding.md.
Adopted source-linked rules: P-02

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Onboarding
URL: https://developer.apple.com/design/human-interface-guidelines/onboarding
Universal rules:
- MUST design the onboarding flow to be fast, fun, and optional. | topic: Onboarding | source: https://developer.apple.com/design/human-interface-guidelines/onboarding | why: people are more likely to complete onboarding when it is quick and entertaining | check: not screenshot-checkable: judged by timing the full flow and confirming a skip path exists
- MUST start onboarding after launch has finished, not as part of the launch experience. | topic: Onboarding | source: https://developer.apple.com/design/human-interface-guidelines/onboarding | why: people are not held behind a teaching sequence during launch | check: not screenshot-checkable: verified by a cold launch recording
- MUST provide an interactive onboarding experience where people perform the task being taught instead of only viewing instructional material. | topic: Onboarding | source: https://developer.apple.com/design/human-interface-guidelines/onboarding | why: people retain information better when they perform the task | check: screenshot of the onboarding step shows a control the person can operate, not a text-only panel
- MUST let people safely test an action, discover a feature, or try a game mechanic during onboarding. | topic: Onboarding | source: https://developer.apple.com/design/human-interface-guidelines/onboarding | why: people can try things without risk to their content | check: not screenshot-checkable: confirmed by running the trial and checking that real data is left unchanged
- MUST display instructional content that refers to a specific area of the interface near that area. | topic: Onboarding | source: https://developer.apple.com/design/human-interface-guidelines/onboarding | why: people do not have to search the screen to match an instruction to its control | check: screenshot shows the instruction adjacent to the element it describes
- MUST design any prerequisite onboarding flow as brief and enjoyable, without requiring people to memorize a lot of information. | topic: Onboarding | source: https://developer.apple.com/design/human-interface-guidelines/onboarding | why: long or heavy flows get abandoned | check: not screenshot-checkable: judged by step count and by whether later steps depend on recalling earlier content
- MUST NOT teach so much in onboarding that people feel overwhelmed. | topic: Onboarding | source: https://developer.apple.com/design/human-interface-guidelines/onboarding | why: overwhelmed people are less likely to remember what they learned | check: not screenshot-checkable: judged from the total instructional content across onboarding screens
- MUST NOT present a skipped tutorial again on subsequent launches. | topic: Onboarding | source: https://developer.apple.com/design/human-interface-guidelines/onboarding | why: people are not forced through the same content twice | check: not screenshot-checkable: verified by relaunching after a skip and observing the launch sequence
- MUST make an optional tutorial easy for people to find later, for example in a help, account, or settings area. | topic: Onboarding | source: https://developer.apple.com/design/human-interface-guidelines/onboarding | why: people who skipped can still get the instruction when they want it | check: screenshot of the help or settings screen shows a visible tutorial entry
- MUST keep onboarding content focused on the experience the app provides, not on how to use the system or device. | topic: Onboarding | source: https://developer.apple.com/design/human-interface-guidelines/onboarding | why: people come to onboarding to learn about the app | check: screenshot shows copy about app features with no system or device operation steps
- MUST design a splash screen graphic, when a splash screen is used, to communicate its message succinctly. | topic: Onboarding | source: https://developer.apple.com/design/human-interface-guidelines/onboarding | why: people absorb the splash at a glance without reading paragraphs | check: screenshot of the splash shows one message readable at a glance
- MUST keep the splash screen on screen only as long as people need to absorb its message at a glance. | topic: Onboarding | source: https://developer.apple.com/design/human-interface-guidelines/onboarding | why: a long splash delays people from using the app | check: not screenshot-checkable: measured in a launch recording
- MUST NOT let large downloads make people wait before they can interact after first launch, whether or not they go through onboarding. | topic: Onboarding | source: https://developer.apple.com/design/human-interface-guidelines/onboarding | why: people want to start using the app immediately | check: not screenshot-checkable: verified by a first-launch run on a throttled connection
- MUST NOT display licensing details or disclaimers within the onboarding flow. | topic: Onboarding | source: https://developer.apple.com/design/human-interface-guidelines/onboarding | why: legal text should not interrupt people starting the app | check: screenshot of each onboarding screen shows no license or disclaimer text
- MUST, when licensing or disclaimer content has to appear in onboarding, integrate it in a balanced way that does not disrupt the experience. | topic: Onboarding | source: https://developer.apple.com/design/human-interface-guidelines/onboarding | why: the experience stays uninterrupted | check: screenshot shows such content as a non-blocking element, not a screen the next step depends on
- MUST postpone nonessential setup and customization steps. | topic: Onboarding | source: https://developer.apple.com/design/human-interface-guidelines/onboarding | why: people reach the main content without configuration work | check: screenshot of the first screens shows no nonessential setup step before the first usable screen
- MUST provide reasonable default settings so most people can use the app without extra configuration. | topic: Onboarding | source: https://developer.apple.com/design/human-interface-guidelines/onboarding | why: most people start immediately without extra work | check: screenshot of the main screen after a fresh install shows usable content with no setup gate
- MUST, when the app does not integrate a permission request into onboarding, present that request when people first access the function that relies on private data or resources. | topic: Onboarding | source: https://developer.apple.com/design/human-interface-guidelines/onboarding | why: people are asked when the request makes sense to them | check: not screenshot-checkable: verified by a fresh-install walkthrough of the first-use path
Apple-specific (excluded):
- Developer guidance for context-specific tips points to TipKit, an Apple framework.
- Letting the App Store display agreements and disclaimers relies on the Apple App Store.
Persona and journey notes:
- People enter onboarding to learn about the app, not about the system or device.
- People want to start using the app right after first launch, whether or not they go through onboarding.
- People retain more from performing a task than from reading about it, and feel overwhelmed when too much is taught at once.
- Soft guidance (the page says consider or prefer, so it is not a MUST or MUST NOT): consider context-specific tips instead of a single onboarding flow; consider making a separate tutorial optional; consider integrating a permission request into onboarding when the app needs private data before it can function; prefer letting people experience the app before rating or purchase prompts; add onboarding only when the app cannot be understood by simply using it.
- Journey: first launch, then an optional, brief onboarding after launch, then use with tips at the point of need, permission requests at first use of the function that needs them, and rating or purchase prompts only after engagement; a skipped tutorial stays reachable in help, account, or settings.
COVERAGE:
onboarding: read, approx 700 words, 18 universal rules, 2 excluded
