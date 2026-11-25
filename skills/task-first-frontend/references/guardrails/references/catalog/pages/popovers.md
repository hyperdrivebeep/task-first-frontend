Candidate catalog - evidence only; not executable requirements.

# Popovers: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/popovers
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 92d25057bd232be2a048ecaa2106190d6fc890b21e9f34b8396b19056e0cc08d
Input words: 715. Candidate rule records: 22. Exclusion blocks: 8.
Original note: p070-popovers/popovers.md.
Adopted source-linked rules: C-35

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Popovers
URL: https://developer.apple.com/design/human-interface-guidelines/popovers
Universal rules:
- MUST expose only a small amount of information or functionality in a popover | content scope | HIG Popovers, Best practices | a popover disappears after people interact with it | Check at 1440px and 390px: popover body shows one small block of content with no long scroll region.
- MUST limit a popover to a few related tasks | content scope | HIG Popovers, Best practices | a transient view can only support a short, focused interaction | Check at 1440px and 390px: popover contains one group of related controls only.
- MUST prefer a popover over a sidebar or panel for content needed only temporarily | layout choice | HIG Popovers, Best practices | sidebars and panels take up a lot of space | not screenshot-checkable: choosing the container is a design decision, not a visible state.
- MUST point the popover arrow as directly as possible at the element that revealed it | anchoring | HIG Popovers, Best practices | the arrow shows which control opened the popover | Check at 1440px and 390px: arrow tip sits on or directly next to the trigger control.
- MUST avoid covering the element that revealed the popover | anchoring | HIG Popovers, Best practices | the trigger must stay visible for context | Check at 1440px and 390px: the trigger control is fully visible while the popover is open.
- MUST avoid covering essential content that people need while using the popover | anchoring | HIG Popovers, Best practices | people may need to see underlying content while they act | Check at 1440px and 390px: essential underlying content stays visible beside the open popover.
- MUST show a Close button only when it adds clarity, such as exiting with or without saving changes | dismissal | HIG Popovers, Best practices | an unneeded Close button adds clutter | Check at 1440px and 390px: a Close button appears only where its save or discard outcome differs.
- MUST close a popover when people click or tap outside its bounds | dismissal | HIG Popovers, Best practices | outside click is the normal dismissal path | Check at 1440px and 390px: a tap outside the popover removes it in the next screenshot.
- MUST close a popover when people select an item in it | dismissal | HIG Popovers, Best practices | selecting an item completes the task | Check at 1440px and 390px: after an item is selected, the popover is absent in the next screenshot.
- MUST keep a popover open while multiple selections are possible, until people dismiss it explicitly or click or tap outside its bounds | dismissal | HIG Popovers, Best practices | closing after each pick would block multi-select | Check at 1440px and 390px: after one selection the popover remains open in the screenshot.
- MUST save people's work when a nonmodal popover closes automatically | data safety | HIG Popovers, Best practices | people can dismiss a nonmodal popover by accident | not screenshot-checkable: the requirement is the saved state after dismissal, not a visible UI state.
- MUST discard people's work only when people click or tap an explicit Cancel button | data safety | HIG Popovers, Best practices | discarding on any other close loses work | not screenshot-checkable: the requirement is the stored data after dismissal, not a visible UI state.
- MUST show only one popover at a time | stacking | HIG Popovers, Best practices | multiple popovers clutter the interface and cause confusion | Check at 1440px and 390px: after two triggers are tapped, only one popover is visible.
- MUST NOT show a cascade or hierarchy of popovers in which one popover emerges from another | stacking | HIG Popovers, Best practices | nested popovers confuse people | Check at 1440px and 390px: no popover opens from inside another popover.
- MUST close the open popover before showing a new popover | stacking | HIG Popovers, Best practices | keeps one popover on screen at a time | Check at 1440px and 390px: the old popover is gone before the new one appears.
- MUST NOT display any other view on top of a popover | stacking | HIG Popovers, Best practices | another layer hides the popover and its controls | Check at 1440px and 390px: no other view overlaps the open popover.
- MUST let people close one popover and open another with a single click or tap | switching | HIG Popovers, Best practices | extra gestures slow down several bar buttons that each open a popover | Check at 1440px and 390px: one tap on another trigger shows its popover in the next screenshot.
- MUST size a popover only big enough to display its contents and point to where it came from | sizing | HIG Popovers, Best practices | an oversized popover wastes space | Check at 1440px and 390px: no empty area exists beyond the content.
- MUST animate size changes of a popover | sizing | HIG Popovers, Best practices | animation shows the same popover resizing instead of a new one replacing it | not screenshot-checkable: the requirement is the motion between states, not a static frame.
- MUST NOT use the word "popover" in help documentation | help copy | HIG Popovers, Best practices | people know controls and tasks, not the component name | not screenshot-checkable: a copy review of help text, with no visual state.
- MUST refer to a specific task or selection in help text instead of the popover | help copy | HIG Popovers, Best practices | names the control people act on | not screenshot-checkable: a copy review of help text, with no visual state.
- MUST NOT show a warning inside a popover | warnings | HIG Popovers, Best practices | people can miss or accidentally close a popover | not screenshot-checkable: a rule about message type choice, not a visible state.
Apple-specific (excluded):
- visionOS: no additional popover considerations (Apple platform)
- tvOS and watchOS: popovers are not supported (Apple platforms)
- iOS and iPadOS: avoid popovers in compact views, use size-class layouts, and use full-screen sheets there instead (Apple size classes and sheet component)
- macOS: a popover can be made detachable into a separate panel (Apple AppKit panel)
- macOS: consider letting people detach a popover into a panel (Apple platform feature)
- macOS: make minimal appearance changes to a detached popover panel (Apple panel behavior)
- Alerts: use an alert instead of a popover for warnings, and the alert exception to the overlay rule (Apple alert component)
- Related and developer resources: sheets, action sheets, alerts, modality, SwiftUI, UIKit, AppKit docs (Apple components and frameworks)
Persona and journey notes:
- People who click or tap a control or interactive area; journey: open the popover, complete a few related tasks, the popover closes, and people return to the content they were reviewing.
COVERAGE:
popovers: read, approx 650 words, 22 universal rules, 8 excluded
