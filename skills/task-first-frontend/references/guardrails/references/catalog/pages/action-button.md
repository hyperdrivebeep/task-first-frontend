Candidate catalog - evidence only; not executable requirements.

# Action button: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/action-button
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: f26c2f7efd6e07e9636fa39803ab5770ebfa26dae3450cbb75877b9f844602a6
Input words: 727. Candidate rule records: 6. Exclusion blocks: 15.
Original note: p047-action-button/action-button.md.
Adopted source-linked rules: none (I-23 removed in the 2026-11-07 review: Apple hardware-specific)

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Action button
URL: https://developer.apple.com/design/human-interface-guidelines/action-button
Universal rules:
- MUST support the Action button with a set of your app's essential functions. | topic: Action button | source: https://developer.apple.com/design/human-interface-guidelines/action-button | why: the button gives quick access to a function people already use regularly. | check: not screenshot-checkable: function selection is a product-scope decision
- MUST write each action label to begin with a verb, use present tense, and exclude articles and prepositions. | topic: Action button | source: https://developer.apple.com/design/human-interface-guidelines/action-button | why: people read these labels in Settings, where they must describe the action succinctly. | check: not screenshot-checkable: label wording is checked as text, not layout
- MUST keep each action label to a maximum of three words. | topic: Action button | source: https://developer.apple.com/design/human-interface-guidelines/action-button | why: short labels suit the Settings screen, for example "Start Race" instead of "Started Race" or "Start the Race." | check: not screenshot-checkable: word count is checked on the label string
- MUST write a short label that succinctly describes each supported action. | topic: Action button | source: https://developer.apple.com/design/human-interface-guidelines/action-button | why: people see these labels when they configure the Action button's behavior. | check: not screenshot-checkable: label content is checked as text
- MUST NOT repeat the guidance Settings shows for configuring the Action button, or other usage tips the system provides. | topic: Action button | source: https://developer.apple.com/design/human-interface-guidelines/action-button | why: the page says to avoid such repeated content because the system already teaches configuration and usage. | check: not screenshot-checkable: content review of app copy
- MUST let people run actions without leaving their current context when possible, using lightweight multitasking such as Live Activities and custom snippets. | topic: Action button | source: https://developer.apple.com/design/human-interface-guidelines/action-button | why: launching the full app interrupts the task the person is doing. | check: reviewer proof at 1440px and 390px that the action completes on the current screen without navigating away
Apple-specific (excluded):
- The Action button is available on supported iPhone and Apple Watch models.
- The Action button is not supported in iPadOS, macOS, tvOS, or visionOS.
- People choose the Action button's function at setup and can change it later in Settings.
- An App Shortcut bound to the Action button runs like a voice request to Siri or a tap in Spotlight.
- An App Shortcut that only opens the app is not needed, because the system already provides that function.
- The Action button can run an App Shortcut, a system function such as turning the flashlight on or off, or an activity action.
- The system automatically helps people configure the Action button to start one of the app's functions.
- App icon, widgets, and Apple Watch complications are the system's other quick entry points into an app.
- On Apple Watch Ultra, the Action button supports activity actions such as workouts and dives.
- On Apple Watch, the first press can drop a waypoint, start a dive, or begin a specific workout.
- On Apple Watch, secondary presses can mark a segment or move to the next modality in a multi-part workout.
- On Apple Watch, a secondary function should support or advance the primary action, and more than one secondary function raises cognitive load.
- On Apple Watch, later presses should add functionality rather than stop the main task.
- Pressing the Action button and side button together pauses the current function, except in dive apps.
- On iOS, the "Set Timer" action prompts for a duration and then launches a Live Activity with the countdown.
Persona and journey notes:
- On Apple Watch, people often use the Action button without looking at the screen, so a follow-up press must flow logically from the first.
- The Action button is another quick way to reach a function people already use regularly.
COVERAGE:
- action-button: read, approx 640 words, 6 universal rules, 15 excluded
