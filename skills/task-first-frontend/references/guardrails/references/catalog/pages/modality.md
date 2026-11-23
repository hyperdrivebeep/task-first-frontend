Candidate catalog - evidence only; not executable requirements.

# Modality: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/modality
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: e2c4c0ce20b73a7ae41ccc774e12e8e52a2d8fca8df2a512f116ee26b6e0f5f8
Input words: 857. Candidate rule records: 17. Exclusion blocks: 6.
Original note: p007-modality/modality.md.
Adopted source-linked rules: C-33

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Modality
URL: https://developer.apple.com/design/human-interface-guidelines/modality
Universal rules:
- MUST present content modally only when there is a clear benefit. | topic: Modality | source: https://developer.apple.com/design/human-interface-guidelines/modality | why: a modal view takes people out of their current context and requires an action to dismiss | check: not screenshot-checkable: reviewer compares each modal in the flow against a stated benefit and records whether one exists
- MUST use a modal view only when it helps people focus or make choices that affect their content or device. | topic: Modality | source: https://developer.apple.com/design/human-interface-guidelines/modality | why: people stay focused and make informed choices without losing their previous context | check: not screenshot-checkable: reviewer lists the focus need or the content/device choice each modal serves
- MUST keep modal tasks simple, short, and streamlined (the HIG says "aim to"). | topic: Modality | source: https://developer.apple.com/design/human-interface-guidelines/modality | why: people do not lose track of the task they suspended when they entered the modal | check: not screenshot-checkable: reviewer counts steps in a recorded run of each modal task
- MUST NOT create a modal experience that feels like an app within the app. | topic: Modality | source: https://developer.apple.com/design/human-interface-guidelines/modality | why: people keep a clear sense of where they are and how to get back | check: screenshot at 1440px and 390px of each modal state; reviewer confirms the modal shows one task with no nested sections of the app reachable from it
- MUST NOT present a hierarchy of views within a modal task. | topic: Modality | source: https://developer.apple.com/design/human-interface-guidelines/modality | why: people can forget how to retrace their steps through a hierarchy | check: screenshot at 1440px and 390px of each modal state; reviewer counts drill-in levels across the captured states and expects none beyond one
- MUST provide a single path through the subviews when a modal task must contain subviews. | topic: Modality | source: https://developer.apple.com/design/human-interface-guidelines/modality | why: people always know the way forward and the way back | check: flow capture at 1440px and 390px; reviewer confirms each subview has exactly one forward route and one back route
- MUST NOT include a button inside a modal task that people could mistake for the button that dismisses the modal view. | topic: Modality | source: https://developer.apple.com/design/human-interface-guidelines/modality | why: people do not close the modal by accident when they meant to go forward | check: screenshot at 1440px and 390px of each modal subview; reviewer confirms no second dismiss-like control appears beside the real one
- MUST consider a full-screen modal style for in-depth content or a complex task. | topic: Modality | source: https://developer.apple.com/design/human-interface-guidelines/modality | why: a full-size modal minimizes distractions during long or multistep work | check: not screenshot-checkable: reviewer records the presentation size chosen for each modal and the content depth or task complexity that justifies it
- MUST give every modal view an obvious way to dismiss it. | topic: Modality | source: https://developer.apple.com/design/human-interface-guidelines/modality | why: people are never stuck inside a modal they want to leave | check: screenshot at 1440px and 390px of each modal state; reviewer finds a visible, clearly labeled dismiss control
- MUST follow the dismissal conventions people already know on the target platform. | topic: Modality | source: https://developer.apple.com/design/human-interface-guidelines/modality | why: people dismiss the modal on the first try because the control is where they expect it | check: screenshot at 1440px and 390px; reviewer records the platform convention used for the dismiss control and confirms the capture matches it
- MUST ask for confirmation before closing a modal view when closing could lose user-generated content. | topic: Modality | source: https://developer.apple.com/design/human-interface-guidelines/modality | why: people do not lose work they typed into the modal | check: screenshot at 1440px and 390px after entering unsaved content and triggering close; reviewer confirms a confirmation appears before the modal closes
- MUST explain the situation and give people ways to resolve possible data loss in that confirmation. | topic: Modality | source: https://developer.apple.com/design/human-interface-guidelines/modality | why: people understand what will be lost and can keep it with one action | check: screenshot of the confirmation at 1440px and 390px; reviewer confirms the text names the consequence and at least two resolving actions (for example save or discard) are visible
- MUST apply the same unsaved-content confirmation whether people close the modal with a dismiss gesture or with a dismiss button. | topic: Modality | source: https://developer.apple.com/design/human-interface-guidelines/modality | why: people cannot lose work by choosing a different way to close | check: capture after a dismiss gesture and after a dismiss button, each with unsaved content; reviewer confirms the same prompt appears in both captures
- MUST make a modal view's task easy to identify, for example with a title that names the task or added text that describes it or gives guidance. | topic: Modality | source: https://developer.apple.com/design/human-interface-guidelines/modality | why: people who return from a modal can find their place in the app again | check: screenshot at 1440px and 390px of each modal state; reviewer reads the title or text and confirms it names the task in plain words
- MUST let people dismiss a modal view before another modal view is presented. | topic: Modality | source: https://developer.apple.com/design/human-interface-guidelines/modality | why: people keep their context instead of stacking unresolved choices | check: flow capture at 1440px and 390px; reviewer confirms the first modal's dismiss control is available before a second modal opens
- MUST NOT leave two or more modal views visible at the same time. | topic: Modality | source: https://developer.apple.com/design/human-interface-guidelines/modality | why: people face less visual clutter and cognitive load | check: screenshot at 1440px and 390px during a flow that opens a second modal; reviewer counts visible modal layers and expects one
- MUST NOT display more than one alert at the same time. | topic: Modality | source: https://developer.apple.com/design/human-interface-guidelines/modality | why: people see one important message at a time and can act on it | check: screenshot at 1440px and 390px after triggering two alerts in a row; reviewer confirms only one alert is visible in each capture
Apple-specific (excluded):
- Named Apple component types: sheets, popovers, activity views, action sheets, and confirmation dialogs on iOS, iPadOS, and macOS.
- Platform-specific dismiss placement: top toolbar button and swipe-down on iOS, iPadOS, and watchOS; button in the main content view on macOS and tvOS.
- Separate windows for distinct tasks on iPadOS, macOS, and visionOS.
- visionOS Shared Space and Full Space behavior for full-screen modals, and visionOS immersive experiences.
- Developer references to SwiftUI, UIKit, and AppKit presentation APIs.
- The iOS action sheet with a save option, used as the page's data-loss example.
Persona and journey notes:
- A person who enters a modal view leaves their previous context, may not return right away, and can lose track of the suspended task, especially when the modal covers that context.
- A person who must work through a hierarchy of modal subviews needs one clear way back and relies on familiar dismiss controls to leave.
- A person who edits content in a modal can lose unsaved work when closing, so they need a warning and a way to keep it.
- A person who receives critical information in a modal needs to be able to act on it, which is why alerts must not stack.
COVERAGE:
- modality: read in full (one read), 17 universal rules, 6 excluded
