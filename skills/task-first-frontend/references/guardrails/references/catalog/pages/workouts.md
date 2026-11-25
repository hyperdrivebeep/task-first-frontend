Candidate catalog - evidence only; not executable requirements.

# Workouts: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/workouts
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: d5208e10bfbc81de3d0b8765c80451133e319c3eb721ca1db5d140b3f6f95791
Input words: 695. Candidate rule records: 13. Exclusion blocks: 4.
Original note: p019-workouts/workouts.md.
Adopted source-linked rules: None directly attributed; retained as reviewed candidate evidence, not silently skipped.

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Workouts
URL: https://developer.apple.com/design/human-interface-guidelines/workouts
Universal rules:
- MUST put the data people are most likely to care about first on any screen shown during an active session. | topic: Workouts | source: https://developer.apple.com/design/human-interface-guidelines/workouts | why: people find the number they need mid-activity without searching | check: start a mock session at 1440px and 390px; the first visible block is the session's key metric (for example elapsed time or distance), not a secondary field
- MUST NOT show information or navigation unrelated to the active session, such as a list of other items or other app sections, while a session is running. | topic: Workouts | source: https://developer.apple.com/design/human-interface-guidelines/workouts | why: people stay focused on the activity instead of being pulled away from it | check: during a running mock session at 1440px and 390px, the screen has no list of other items and no links to unrelated sections
- MUST provide pause, resume, and stop controls that are easy to find and easy to tap during an active session. | topic: Workouts | source: https://developer.apple.com/design/human-interface-guidelines/workouts | why: people control the session without hunting for buttons while moving | check: at 1440px and 390px the pause, resume, and stop controls are visible on the first screen without scrolling and each has a visible label
- MUST give clear feedback when a session starts and when it stops. | topic: Workouts | source: https://developer.apple.com/design/human-interface-guidelines/workouts | why: people know the recording state without checking twice | check: capture the screen before start, just after start, and just after stop at 1440px and 390px; each state shows a visible start or stop indication
- MUST show an active session with a visual appearance that differs from the idle state, so it is recognizable at a glance. | topic: Workouts | source: https://developer.apple.com/design/human-interface-guidelines/workouts | why: people tell at a glance whether they are being tracked | check: side-by-side idle and active captures at 1440px and 390px differ in color or layout
- MUST update live metric values on screen as they change during a session. | topic: Workouts | source: https://developer.apple.com/design/human-interface-guidelines/workouts | why: people see progress happen while they are doing the activity | check: not screenshot-checkable: needs a running session where two captures taken seconds apart show different metric values
- MUST explain in plain language why a data source is unavailable during a session. | topic: Workouts | source: https://developer.apple.com/design/human-interface-guidelines/workouts | why: people understand a missing reading is not a fault and keep going | check: force the sensor-unavailable state at 1440px and 390px; the message names the reason in words, not a code or an empty field
- MUST state which data is still being recorded when a data source is unavailable during a session. | topic: Workouts | source: https://developer.apple.com/design/human-interface-guidelines/workouts | why: people know which numbers still count | check: in the forced sensor-unavailable state at 1440px and 390px, the text names at least one metric that keeps recording
- MUST show a summary screen when a session ends that confirms it is finished and shows the recorded results. | topic: Workouts | source: https://developer.apple.com/design/human-interface-guidelines/workouts | why: people know the activity is saved and see the outcome | check: end a mock session; at 1440px and 390px the summary shows a completion statement and the recorded values
- MUST discard or ask the person before keeping a session that ended only seconds after it started. | topic: Workouts | source: https://developer.apple.com/design/human-interface-guidelines/workouts | why: people do not get clutter entries from an accidental start | check: start and immediately stop a mock session; at 1440px and 390px either a discard or keep prompt appears, or no saved entry is shown
- MUST use large font sizes for text people read while in motion. | topic: Workouts | source: https://developer.apple.com/design/human-interface-guidelines/workouts | why: people read the numbers at a glance while moving | check: inspect computed font sizes at 390px and 1440px; the key values are visibly larger than their labels and the body text
- MUST use high-contrast colors for text people read while in motion. | topic: Workouts | source: https://developer.apple.com/design/human-interface-guidelines/workouts | why: people can read the key values in bright light or while moving | check: screenshot at 1440px and 390px and measure text-to-background contrast of the key values with a contrast checker; the HIG page gives no ratio, so the reviewer states the bar used
- MUST arrange the most important text where it is easiest to read while in motion. | topic: Workouts | source: https://developer.apple.com/design/human-interface-guidelines/workouts | why: people get the one value they need without scanning the screen | check: at 390px the most important value is the largest block in the top half of the screen
Apple-specific (excluded):
- Apple Watch wrist-raise display behavior and the use of Apple Watch, iPhone, iPad, Mac, and Apple TV during workouts.
- Matching the wording of the system Workout app's sensor-unavailable explanations.
- The Activity rings view, an Apple-designed component to be used only for its documented purpose.
- Platform support (iOS, iPadOS, watchOS only) and the WorkoutKit and HealthKit resources.
Persona and journey notes:
- People wear a watch during many workouts and carry a phone or tablet during walking, wheelchair pushing, and running; they use larger or stationary devices for live or recorded sessions alone or with others.
- During an active session people do not need the list of workouts or other parts of the app; they start, watch live metrics, pause, resume, stop, and then read a summary.
- Sensor data can be unavailable mid-session (for example, water blocks a heart-rate reading) while people keep exercising, so they need to know what is still recorded.
COVERAGE:
- workouts: read, approx. 700 words, 13 universal rules, 4 excluded
