Candidate catalog - evidence only; not executable requirements.

# Action sheets: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/action-sheets
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: ba01df3d3ab0162e1eb2e3315995bc0ef5aa859854ab9e09ae12711cd82d23c3
Input words: 613. Candidate rule records: 16. Exclusion blocks: 6.
Original note: p066-action-sheets/action-sheets.md.
Adopted source-linked rules: C-36

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Action sheets

URL: https://developer.apple.com/design/human-interface-guidelines/action-sheets

Universal rules:
- MUST use an action sheet, not an alert, to offer choices related to an intentional action. | topic: choice prompt type | source: Best practices | why: an alert is usually unexpected and does not carry additional choices, while an action sheet gives people related options for an action they started | check: a prompt offering several choices for an action the user initiated is an action sheet, not an alert
- MUST NOT expect an alert to present choices beyond its confirm and cancel pair. | topic: alert scope | source: Best practices | why: alerts do not provide additional choices related to the action | check: an alert has at most a confirm and a cancel option
- MUST use an alert, not an action sheet, to tell people about a problem or a change in the current situation. | topic: problem notice type | source: Best practices | why: alerts generally tell people about a problem or change that might require them to act | check: problem and state-change notices are alerts and not action sheets
- MUST use action sheets sparingly. | topic: frequency | source: Best practices | why: action sheets interrupt the current task to present important information and choices | check: count how often one flow shows an action sheet and confirm each one is needed
- MUST NOT show an action sheet when the choice is not needed. | topic: interruption | source: Best practices | why: people pay more attention to action sheets when they appear rarely | check: every action sheet has a decision that cannot be made from the surrounding context
- MUST keep action sheet titles short enough to display on a single line. | topic: title length | source: Best practices | why: long titles are hard to read quickly and get truncated or need scrolling | check: the title fits on one line at default text size
- MUST NOT add a message to an action sheet unless it is necessary. | topic: message line | source: Best practices | why: the title combined with the current action context usually explains the choices | check: remove the message line and confirm the choices are still understandable
- MUST provide a Cancel button when people need to reject an action that might destroy data. | topic: cancel availability | source: Best practices | why: people need a way to back out of a potentially destructive choice | check: any action sheet offering a destructive option includes a Cancel button
- MUST place the Cancel button at the bottom of the action sheet. | topic: cancel placement | source: Best practices | why: a consistent bottom position makes dismissal predictable | check: Cancel is the last element of the sheet
- MUST mark buttons that perform destructive actions with the destructive style. | topic: destructive styling | source: Best practices | why: destructive choices must be visually distinct so people notice their effect | check: every button that deletes or discards data uses the destructive style
- MUST place destructive buttons at the top of the action sheet. | topic: destructive placement | source: Best practices | why: the top position is where destructive choices are most noticeable | check: destructive buttons precede non-destructive ones
- MUST use an action sheet, not a menu, to present choices related to an action. | topic: action sheet versus menu | source: iOS, iPadOS | why: people expect an action sheet when an action may need clarifying choices and a menu when they choose to reveal it | check: an action with follow-up choices uses an action sheet, and a control that reveals options uses a menu
- MUST NOT let an action sheet scroll. | topic: scrolling | source: iOS, iPadOS | why: more buttons take more time to choose from, and scrolling can cause accidental taps | check: all options are visible without scrolling the sheet
- MUST give each action sheet button one of three styles: default, destructive, or cancel, that conveys the button's effect. | topic: button style | source: watchOS | why: the style tells people what a button does before they tap it | check: every button has an explicit style matching its effect
- MUST NOT show more than four buttons in an action sheet, including the Cancel button. | topic: option count | source: watchOS | why: fewer onscreen buttons let people see all options at once on small displays | check: count all buttons including Cancel and confirm the total is four or fewer
- MUST NOT provide more than three additional choices besides the Cancel button. | topic: option count | source: watchOS | why: Cancel is required, so three extra choices keep the sheet within the four-button limit | check: the non-Cancel button count is three or fewer

Apple-specific (excluded):
- SwiftUI confirmationDialog and UIKit actionSheet API names and developer notes are Apple implementation details.
- The watchOS device-dependent appearance description is Apple-specific.
- The statement that action sheets are not supported in visionOS is Apple-specific.
- The statement of no additional macOS or tvOS considerations is Apple-specific.
- The Mail draft example on iPhone is an Apple product example.
- The rule that SwiftUI confirmation dialogs include a Cancel button by default is Apple-specific.

Persona and journey notes:
- A person who started a potentially destructive action, such as discarding an edited draft, needs a clear way to choose between related outcomes or cancel.
- A person who is interrupted by an action sheet mid-task needs the title and context alone to be enough to decide quickly.
- A person on a small display, such as a watch, needs the option count kept low so every choice is visible at once.

COVERAGE: Read the full page action-sheets.md (Best practices, Platform considerations for iOS/iPadOS and watchOS, Resources); 16 universal rules written, 6 Apple-specific items excluded.
