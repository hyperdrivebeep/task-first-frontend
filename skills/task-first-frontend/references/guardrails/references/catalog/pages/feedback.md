Candidate catalog - evidence only; not executable requirements.

# Feedback: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/feedback
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: bfdb58ade03b41151b70be85ebef241d9efd74dd1310162e288fc0a9a20a19f7
Input words: 585. Candidate rule records: 12. Exclusion blocks: 2.
Original note: 07-feedback/feedback.md.
Adopted source-linked rules: P-04

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Feedback
URL: https://developer.apple.com/design/human-interface-guidelines/feedback

Universal rules:
- MUST give feedback that communicates the current status, the success or failure of important actions, warnings about risky actions, and chances to correct a mistake. | topic: Feedback | source: https://developer.apple.com/design/human-interface-guidelines/feedback | why: People need to know what is happening, what they can do next, and how to avoid mistakes. | check: Screenshot each state (status, success, failure, warning, correction prompt) at 1440px and 390px and confirm each one shows visible feedback.
- MUST match the delivery of feedback to its significance: show status passively and interrupt only for information that risks data loss. | topic: Feedback | source: https://developer.apple.com/design/human-interface-guidelines/feedback | why: A passive status line does not disturb me, and a real risk is not missed behind a quiet label. | check: Screenshot a status message and a data-loss warning at 1440px and 390px; the status is non-blocking and the warning is modal or blocking.
- MUST provide each feedback message through at least two channels, such as color with a text label or icon, so it does not depend on color alone. | topic: Feedback | source: https://developer.apple.com/design/human-interface-guidelines/feedback | why: People who cannot see color, or who look away, still receive the message. | check: Screenshot an error and a success state at 1440px and 390px and confirm each has a text label or icon besides its color. Sound and haptic channels are not screenshot-checkable: they need a manual audio and device test.
- MUST show status feedback near the items it describes. | topic: Feedback | source: https://developer.apple.com/design/human-interface-guidelines/feedback | why: I can check status without leaving what I am doing. | check: Screenshot a list item with status at 1440px and 390px and confirm the status indicator or count sits next to that item or in the toolbar of its screen.
- MUST use alerts only for critical information. | topic: Feedback | source: https://developer.apple.com/design/human-interface-guidelines/feedback | why: Alerts interrupt my work, so they should only appear when the information is important. | check: Screenshot the alerts shown during a normal flow at 1440px and 390px and confirm each one carries critical information.
- MUST make an alert actionable when an action is possible. | topic: Feedback | source: https://developer.apple.com/design/human-interface-guidelines/feedback | why: An alert that offers a next step lets me resolve the problem at once. | check: Screenshot an alert at 1440px and 390px and confirm it includes at least one button that resolves the problem.
- MUST NOT use alerts for unimportant information or show them too often. | topic: Feedback | source: https://developer.apple.com/design/human-interface-guidelines/feedback | why: Frequent alerts train me to ignore them, so the important ones lose their effect. | check: not screenshot-checkable: frequency of alerts across a session needs a recorded run, not a single screenshot.
- MUST warn people before a task that causes unexpected and irreversible data loss. | topic: Feedback | source: https://developer.apple.com/design/human-interface-guidelines/feedback | why: A surprise permanent loss of my data is the worst outcome, so I need a chance to stop. | check: Screenshot the confirmation shown before an irreversible destructive action at 1440px and 390px and confirm it names the data at risk.
- MUST NOT warn people when data loss is the expected result of their action. | topic: Feedback | source: https://developer.apple.com/design/human-interface-guidelines/feedback | why: Repeated warnings for an action I chose slow me down and add noise. | check: Screenshot a routine delete action that moves the item to a recoverable place at 1440px and 390px and confirm no extra warning appears.
- MUST confirm completion of a significant action or task when confirmation helps. | topic: Feedback | source: https://developer.apple.com/design/human-interface-guidelines/feedback | why: For an important transaction, a clear success message tells me it went through. | check: Screenshot the screen after a significant action such as a payment at 1440px and 390px and confirm it shows a visible success confirmation.
- MUST reserve completion confirmations for activities important enough to need them. | topic: Feedback | source: https://developer.apple.com/design/human-interface-guidelines/feedback | why: I expect routine actions to succeed, so extra confirmations add clutter. | check: Screenshot a routine successful action at 1440px and 390px and confirm no confirmation message appears.
- MUST tell people when a command cannot be carried out, and explain why. | topic: Feedback | source: https://developer.apple.com/design/human-interface-guidelines/feedback | why: A silent failure leaves me guessing what went wrong and what to do next. | check: Screenshot a request that cannot be completed, such as a missing required field, at 1440px and 390px and confirm the screen states the reason.

Apple-specific (excluded):
- Avoid an indeterminate progress indicator in a watchOS app, and tell people they will receive a notification when the process completes. | topic: Feedback | source: https://developer.apple.com/design/human-interface-guidelines/feedback | why: Apple-specific watchOS guidance about animated loading indicators on the watch display.
- Apple examples (Mail unread count in iOS and iPadOS, Apple Pay confirmation, Maps directions, Finder deleting files) and the pointers to playing-haptics, playing-audio, motion, alerts, and UIKit animation-and-haptics are Apple product references, not general rules.

Persona and journey notes:
- A person who relies on sound or haptics needs the same message to appear in another channel as well.
- A person checking status between tasks needs status near the item, not in a separate alert.
- A person about to delete or overwrite data needs one clear warning before the irreversible step, and no warning for ordinary deletes.
- A person who sees a disabled or failed action needs the reason on the same screen.

COVERAGE:
- feedback: read, 620 words, 12 universal rules, 1 excluded
