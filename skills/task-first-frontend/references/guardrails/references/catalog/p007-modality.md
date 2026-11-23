Legacy candidates - not requirements; use pages/ and the curated rule files.

# HIG extraction catalog: p007-modality

Raw extraction by a note-taking child (claude-haiku-5-5, subscription) on 2026-11-03 KST from the locally saved HIG pages. Curated guardrails in ../rules-*.md are chosen from here.

## Modality (17 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/modality

- [MOD-01] MUST present content modally only when there is a clear benefit.
  HIG: Modality <https://developer.apple.com/design/human-interface-guidelines/modality> | Why: a modal view takes people out of their current context and requires an action to dismiss
  Check@1440/390: not screenshot-checkable: reviewer compares each modal in the flow against a stated benefit and records whether one exists
- [MOD-02] MUST use a modal view only when it helps people focus or make choices that affect their content or device.
  HIG: Modality <https://developer.apple.com/design/human-interface-guidelines/modality> | Why: people stay focused and make informed choices without losing their previous context
  Check@1440/390: not screenshot-checkable: reviewer lists the focus need or the content/device choice each modal serves
- [MOD-03] MUST keep modal tasks simple, short, and streamlined (the HIG says "aim to").
  HIG: Modality <https://developer.apple.com/design/human-interface-guidelines/modality> | Why: people do not lose track of the task they suspended when they entered the modal
  Check@1440/390: not screenshot-checkable: reviewer counts steps in a recorded run of each modal task
- [MOD-04] MUST NOT create a modal experience that feels like an app within the app.
  HIG: Modality <https://developer.apple.com/design/human-interface-guidelines/modality> | Why: people keep a clear sense of where they are and how to get back
  Check@1440/390: screenshot at 1440px and 390px of each modal state; reviewer confirms the modal shows one task with no nested sections of the app reachable from it
- [MOD-05] MUST NOT present a hierarchy of views within a modal task.
  HIG: Modality <https://developer.apple.com/design/human-interface-guidelines/modality> | Why: people can forget how to retrace their steps through a hierarchy
  Check@1440/390: screenshot at 1440px and 390px of each modal state; reviewer counts drill-in levels across the captured states and expects none beyond one
- [MOD-06] MUST provide a single path through the subviews when a modal task must contain subviews.
  HIG: Modality <https://developer.apple.com/design/human-interface-guidelines/modality> | Why: people always know the way forward and the way back
  Check@1440/390: flow capture at 1440px and 390px; reviewer confirms each subview has exactly one forward route and one back route
- [MOD-07] MUST NOT include a button inside a modal task that people could mistake for the button that dismisses the modal view.
  HIG: Modality <https://developer.apple.com/design/human-interface-guidelines/modality> | Why: people do not close the modal by accident when they meant to go forward
  Check@1440/390: screenshot at 1440px and 390px of each modal subview; reviewer confirms no second dismiss-like control appears beside the real one
- [MOD-08] MUST consider a full-screen modal style for in-depth content or a complex task.
  HIG: Modality <https://developer.apple.com/design/human-interface-guidelines/modality> | Why: a full-size modal minimizes distractions during long or multistep work
  Check@1440/390: not screenshot-checkable: reviewer records the presentation size chosen for each modal and the content depth or task complexity that justifies it
- [MOD-09] MUST give every modal view an obvious way to dismiss it.
  HIG: Modality <https://developer.apple.com/design/human-interface-guidelines/modality> | Why: people are never stuck inside a modal they want to leave
  Check@1440/390: screenshot at 1440px and 390px of each modal state; reviewer finds a visible, clearly labeled dismiss control
- [MOD-10] MUST follow the dismissal conventions people already know on the target platform.
  HIG: Modality <https://developer.apple.com/design/human-interface-guidelines/modality> | Why: people dismiss the modal on the first try because the control is where they expect it
  Check@1440/390: screenshot at 1440px and 390px; reviewer records the platform convention used for the dismiss control and confirms the capture matches it
- [MOD-11] MUST ask for confirmation before closing a modal view when closing could lose user-generated content.
  HIG: Modality <https://developer.apple.com/design/human-interface-guidelines/modality> | Why: people do not lose work they typed into the modal
  Check@1440/390: screenshot at 1440px and 390px after entering unsaved content and triggering close; reviewer confirms a confirmation appears before the modal closes
- [MOD-12] MUST explain the situation and give people ways to resolve possible data loss in that confirmation.
  HIG: Modality <https://developer.apple.com/design/human-interface-guidelines/modality> | Why: people understand what will be lost and can keep it with one action
  Check@1440/390: screenshot of the confirmation at 1440px and 390px; reviewer confirms the text names the consequence and at least two resolving actions (for example save or discard) are visible
- [MOD-13] MUST apply the same unsaved-content confirmation whether people close the modal with a dismiss gesture or with a dismiss button.
  HIG: Modality <https://developer.apple.com/design/human-interface-guidelines/modality> | Why: people cannot lose work by choosing a different way to close
  Check@1440/390: capture after a dismiss gesture and after a dismiss button, each with unsaved content; reviewer confirms the same prompt appears in both captures
- [MOD-14] MUST make a modal view's task easy to identify, for example with a title that names the task or added text that describes it or gives guidance.
  HIG: Modality <https://developer.apple.com/design/human-interface-guidelines/modality> | Why: people who return from a modal can find their place in the app again
  Check@1440/390: screenshot at 1440px and 390px of each modal state; reviewer reads the title or text and confirms it names the task in plain words
- [MOD-15] MUST let people dismiss a modal view before another modal view is presented.
  HIG: Modality <https://developer.apple.com/design/human-interface-guidelines/modality> | Why: people keep their context instead of stacking unresolved choices
  Check@1440/390: flow capture at 1440px and 390px; reviewer confirms the first modal's dismiss control is available before a second modal opens
- [MOD-16] MUST NOT leave two or more modal views visible at the same time.
  HIG: Modality <https://developer.apple.com/design/human-interface-guidelines/modality> | Why: people face less visual clutter and cognitive load
  Check@1440/390: screenshot at 1440px and 390px during a flow that opens a second modal; reviewer counts visible modal layers and expects one
- [MOD-17] MUST NOT display more than one alert at the same time.
  HIG: Modality <https://developer.apple.com/design/human-interface-guidelines/modality> | Why: people see one important message at a time and can act on it
  Check@1440/390: screenshot at 1440px and 390px after triggering two alerts in a row; reviewer confirms only one alert is visible in each capture

# Exclusions and persona notes

### Modality
Apple-specific, excluded:
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
