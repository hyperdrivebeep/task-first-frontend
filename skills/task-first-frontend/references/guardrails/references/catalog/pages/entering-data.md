Candidate catalog - evidence only; not executable requirements.

# Entering data: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/entering-data
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 9d3edf4cb9f8b1c1eefe8427bc98797928aa9af020bbce15aea559ba0799cbf1
Input words: 665. Candidate rule records: 15. Exclusion blocks: 9.
Original note: 06-drag-and-drop/entering-data.md.
Adopted source-linked rules: P-08, P-09

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Entering data
URL: https://developer.apple.com/design/human-interface-guidelines/entering-data

Universal rules:
- MUST gather as much information as possible before asking people for input, so they supply the least data necessary. | topic: Entering data | source: https://developer.apple.com/design/human-interface-guidelines/entering-data | why: fewer fields mean less effort and fewer mistakes for people. | check: not screenshot-checkable: needs a walkthrough of the full form flow to count the fields asked.
- MUST get information from the system, such as settings, instead of asking people to enter it. | topic: Entering data | source: https://developer.apple.com/design/human-interface-guidelines/entering-data | why: people should not retype what the app can already know. | check: not screenshot-checkable: needs the data source to compare against the fields shown.
- MUST ask for permission to access data such as location or calendar information, instead of asking people to type it. | topic: Entering data | source: https://developer.apple.com/design/human-interface-guidelines/entering-data | why: people can grant access once rather than typing the same details. | check: not screenshot-checkable: needs the permission prompt flow.
- MUST show a prompt or introductory label that states what each data field needs. | topic: Entering data | source: https://developer.apple.com/design/human-interface-guidelines/entering-data | why: people know what to type before they start. | check: screenshot at 1440px and 390px shows a visible label or placeholder on every data field.
- MUST support every input method the platform makes available, so people can choose the one that works for them. | topic: Entering data | source: https://developer.apple.com/design/human-interface-guidelines/entering-data | why: people with different devices and abilities can all finish the form. | check: not screenshot-checkable: needs each input method exercised on the field.
- MUST use a secure text-entry field for sensitive data, hiding each character as people type it. | topic: Entering data | source: https://developer.apple.com/design/human-interface-guidelines/entering-data | why: people's sensitive input should not be readable by someone looking over their shoulder. | check: screenshot at 1440px and 390px, taken while typing into the sensitive field, shows masked characters.
- MUST NOT prepopulate a password field. | topic: Entering data | source: https://developer.apple.com/design/human-interface-guidelines/entering-data | why: a filled password exposes the account to anyone at the screen. | check: screenshot at 1440px and 390px of the password field on first load shows it empty.
- MUST ask people to enter their password or to authenticate with biometrics or a keychain, rather than filling it in for them. | topic: Entering data | source: https://developer.apple.com/design/human-interface-guidelines/entering-data | why: people keep control of who signs in to their account. | check: not screenshot-checkable: needs a sign-in flow walkthrough.
- MUST offer a list of choices, such as a picker or menu, instead of requiring typed text when the answer comes from a known set. | topic: Entering data | source: https://developer.apple.com/design/human-interface-guidelines/entering-data | why: choosing is faster and less error-prone than typing. | check: screenshot at 1440px and 390px shows a selection control in place of a free-text field for that answer.
- MUST let people provide data by pasting it into a field. | topic: Entering data | source: https://developer.apple.com/design/human-interface-guidelines/entering-data | why: people can reuse data they already have without retyping it. | check: not screenshot-checkable: needs a paste action into the field.
- MUST let people provide data by dragging and dropping it into a field that accepts it. | topic: Entering data | source: https://developer.apple.com/design/human-interface-guidelines/entering-data | why: drag and drop feels integrated and saves typing. | check: not screenshot-checkable: needs a drag gesture onto the field.
- MUST validate field values as soon as people enter them. | topic: Entering data | source: https://developer.apple.com/design/human-interface-guidelines/entering-data | why: people catch mistakes before they reach the end of a long form. | check: screenshot at 1440px and 390px, taken after entering an invalid value, shows a validation message on that field.
- MUST show feedback as soon as a problem is detected, while people can still correct it. | topic: Entering data | source: https://developer.apple.com/design/human-interface-guidelines/entering-data | why: people fix errors right away instead of going back through a finished form. | check: screenshot at 1440px and 390px, taken right after an invalid entry, shows the message next to the field without submitting.
- MUST make it clear which data is required before people can proceed. | topic: Entering data | source: https://developer.apple.com/design/human-interface-guidelines/entering-data | why: people should know what they must fill in before they get stuck. | check: screenshot at 1440px and 390px of an empty form shows a required-field indicator on each required field.
- MUST NOT leave the Next or Continue button available until the required data is entered. | topic: Entering data | source: https://developer.apple.com/design/human-interface-guidelines/entering-data | why: a button that cannot succeed leads people into a failed attempt. | check: screenshot at 1440px and 390px of the form with required fields empty shows the Next or Continue button disabled.

Apple-specific (excluded):
- SecureField developer API.
- isSecureDigitEntry tvOS option for obscuring digit entry.
- visionOS system text field blurring secure input during AirPlay.
- macOS expansion tooltip for clipped text.
- Link to managing-accounts guidance.
- Number formatter, an Apple API that restricts numeric input and formats values.
- Platform considerations stating no extra guidance for iOS, iPadOS, tvOS, visionOS, or watchOS.
- Developer documentation link to Input-events in SwiftUI.
- Related links to text-fields, virtual-keyboards, and keyboards.

Persona and journey notes:
- None stated on this page.

COVERAGE:
- entering-data: read, about 350 words, 15 universal rules, 9 excluded
