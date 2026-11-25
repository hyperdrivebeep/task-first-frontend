Candidate catalog - evidence only; not executable requirements.

# Designing for watchOS: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/designing-for-watchos
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: d82c812e0a60bf4abab927441d568ef488c4bdce841fd9d6d8ff827c5fbda276
Input words: 567. Candidate rule records: 9. Exclusion blocks: 9.
Original note: p026-designing-for-watchos/designing-for-watchos.md.
Adopted source-linked rules: None directly attributed; retained as reviewed candidate evidence, not silently skipped.

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Designing for watchOS
URL: https://developer.apple.com/design/human-interface-guidelines/designing-for-watchos
Universal rules:
- MUST keep each core flow glanceable: show the critical information succinctly on one screen and let people finish the targeted action with one or two simple gestures. | topic: Designing for watchOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-watchos | why: people get the answer or finish the task in seconds without digging through screens | check: at 1440px and 390px the key information and the primary action sit on a single screen with no scrolling and at most two taps
- MUST minimize the depth of the navigation hierarchy so every main screen is reachable in few steps. | topic: Designing for watchOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-watchos | why: people do not get lost or spend effort on deep menus | check: at 1440px and 390px a reviewer lists the tap path from the entry screen to each main screen, and the screenshots show a back path for every level
- MUST show actionable content that is relevant in the moment or very soon, based on the person's current data, instead of a generic list. | topic: Designing for watchOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-watchos | why: people see what matters now without searching | check: at 1440px and 390px the first screen shows at least one item tied to the current state of the data, and changing that data in the test set and re-capturing shows the item update
- MUST deliver timely, high-value information in notifications. | topic: Designing for watchOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-watchos | why: people act on alerts that matter instead of learning to ignore noise | check: not screenshot-checkable: relevance and timing depend on real events; a reviewer triggers one notification and confirms it carries the key fact
- MUST let people complete important actions from a notification without opening the app. | topic: Designing for watchOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-watchos | why: people finish the task in one tap instead of switching context | check: at 390px a reviewer triggers a notification, captures its expanded state, and shows the important action completing with the app still closed
- MUST use background color or other background content to convey useful supporting information. | topic: Designing for watchOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-watchos | why: the background tells people something meaningful at a glance | check: at 1440px and 390px a reviewer captures the screen with the background color removed and confirms that some supporting meaning is lost
- MUST make the app useful on its own, adding details and functions beyond its notifications and other entry points. | topic: Designing for watchOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-watchos | why: people get full value when they open the app directly, not only through an alert | check: at 1440px and 390px a reviewer opens the app with no notification or entry point and confirms each main screen shows full details and actions
- MUST keep the experience streamlined and specialized around the few capabilities people value most. | topic: Designing for watchOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-watchos | why: a focused app is quicker to learn and to use | check: not screenshot-checkable: scope is judged against the product's stated core capabilities, not by a visual measure
- MUST support standard tap, swipe, and drag gestures for input. | topic: Designing for watchOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-watchos | why: people use the app with familiar gestures, even while moving | check: not screenshot-checkable: a reviewer replays tap, swipe, and drag on the real surface and confirms each one triggers its action
Apple-specific (excluded):
- Digital Crown for vertical navigation, scrolling, and control on the watch face, Home Screen, and in apps.
- Action button on Apple Watch.
- Siri shortcuts and suggestions.
- Sensor data: GPS, blood oxygen, heart function, altimeter, accelerometer, and gyroscope.
- Always On display on Apple Watch.
- Complications on the watch face.
- Watch faces.
- Materials used to illustrate hierarchy and a sense of place.
- Apple Watch hardware: small wrist-worn display and ergonomics of raising the wrist.
Persona and journey notes:
- People glance at the Always On display many times a day, in concise interactions that can last less than a minute each, whether stationary or in motion.
- People raise the wrist to view the screen from about a foot away and use the opposite hand to interact.
- People use complications, notifications, and Siri interactions more often than the app itself.
COVERAGE:
- designing-for-watchos: read, ~600 words, 9 universal rules, 9 excluded
