Candidate catalog - evidence only; not executable requirements.

# Sheets: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/sheets
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 67c206d80280657e01064bce47710aa047066d6068c8be57c36c3803fa915185
Input words: 1649. Candidate rule records: 27. Exclusion blocks: 10.
Original note: p072-sheets/sheets.md.
Adopted source-linked rules: C-34

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Sheets
URL: https://developer.apple.com/design/human-interface-guidelines/sheets
Universal rules:
- MUST use a sheet only for a scoped task closely related to the person's current context. | topic: Sheets | source: https://developer.apple.com/design/human-interface-guidelines/sheets | why: people finish a small step without losing their place in the parent view | check: at 1440px and 390px the sheet's title and fields relate to the parent content visible behind the dimmed view
- MUST give a sheet a Cancel or Close button that dismisses it without saving changes. | topic: Sheets | source: https://developer.apple.com/design/human-interface-guidelines/sheets | why: people can back out of a task with no side effects | check: at 1440px and 390px the sheet header shows a Cancel or Close control on every step
- MUST use a Done button only to dismiss a sheet after the task is completed or changes are explicitly saved. | topic: Sheets | source: https://developer.apple.com/design/human-interface-guidelines/sheets | why: people trust that Done means their input was committed | check: not screenshot-checkable: whether Done actually saves needs a run-through of the save action
- MUST pair every Done button with a Cancel button or a Back button. | topic: Sheets | source: https://developer.apple.com/design/human-interface-guidelines/sheets | why: people always have an exit that does not confirm their input | check: at 1440px and 390px the sheet header shows Done next to Cancel or Back
- MUST NOT show Cancel, Done, and Back together in one sheet. | topic: Sheets | source: https://developer.apple.com/design/human-interface-guidelines/sheets | why: three exit controls make the way out unclear | check: at 1440px and 390px the sheet header shows at most two of the three controls at once
- MUST NOT use a Back button to dismiss a sheet; Back only moves to a previous step or to the parent level. | topic: Sheets | source: https://developer.apple.com/design/human-interface-guidelines/sheets | why: people go back a step without losing the sheet | check: not screenshot-checkable: the navigation result of Back needs a click-through of a multi-step sheet
- MUST show only one sheet at a time from the main interface. | topic: Sheets | source: https://developer.apple.com/design/human-interface-guidelines/sheets | why: people never lose track of where they are in the app | check: not screenshot-checkable: requires triggering two sheets in sequence and capturing the stack
- MUST close the current sheet before a new sheet appears from inside it; the first sheet may be shown again after the second is dismissed. | topic: Sheets | source: https://developer.apple.com/design/human-interface-guidelines/sheets | why: closing one sheet does not drop people into another | check: not screenshot-checkable: requires triggering the second sheet and capturing that only one sheet is visible at 1440px and 390px
- MUST consider a full page or a separate view instead of a sheet for complex or prolonged flows. | topic: Sheets | source: https://developer.apple.com/design/human-interface-guidelines/sheets | why: long tasks get room to work and people are not stuck in a small modal | check: not screenshot-checkable: a design decision based on flow length and step count, not a visual state
- MUST use a nonmodal view, not a blocking sheet, for supplementary items that affect the task in the parent view. | topic: Sheets | source: https://developer.apple.com/design/human-interface-guidelines/sheets | why: people keep working in the main view while using the extra controls | check: at 1440px and 390px the parent content stays visible and interactive beside or under the open nonmodal view
- MUST use a non-blocking panel instead of a sheet when people repeatedly enter input and check each result. | topic: Sheets | source: https://developer.apple.com/design/human-interface-guidelines/sheets | why: people can change a value and see its effect without reopening a dialog | check: not screenshot-checkable: requires repeated input with the result observed between steps
- MUST block interaction with the parent view while a modal sheet is open. | topic: Sheets | source: https://developer.apple.com/design/human-interface-guidelines/sheets | why: people cannot change the parent state mid-task by accident | check: not screenshot-checkable: requires clicking parent controls while the sheet is open and confirming no response
- MUST visibly dim or mark the parent view as inactive while a modal sheet is open. | topic: Sheets | source: https://developer.apple.com/design/human-interface-guidelines/sheets | why: people see at a glance that the parent is paused behind the sheet | check: at 1440px and 390px the parent view is visibly dimmed behind the sheet
- MUST return people to the parent view when a sheet closes. | topic: Sheets | source: https://developer.apple.com/design/human-interface-guidelines/sheets | why: people resume exactly where they left off | check: not screenshot-checkable: requires closing the sheet and comparing parent state before and after
- MUST present a sheet at a default size that fits its content. | topic: Sheets | source: https://developer.apple.com/design/human-interface-guidelines/sheets | why: content is readable on open with no resizing | check: at 1440px and 390px the primary content of the sheet is fully visible on open
- MUST allow a sheet to be resized when people need to expand its content for a clearer view. | topic: Sheets | source: https://developer.apple.com/design/human-interface-guidelines/sheets | why: people can read dense content at the size they need | check: a before-and-after pair of screenshots at 1440px and 390px shows the sheet grow after its resize handle is dragged
- MUST NOT size a sheet to cover most or all of its parent view by default. | topic: Sheets | source: https://developer.apple.com/design/human-interface-guidelines/sheets | why: people keep the context of the parent visible | check: at 1440px the default sheet leaves parent content visible around its edges, and at 390px some parent content stays visible above it
- MUST support a swipe-down gesture to dismiss a sheet on touch screens. | topic: Sheets | source: https://developer.apple.com/design/human-interface-guidelines/sheets | why: people dismiss with the gesture they expect, without hunting for a button | check: not screenshot-checkable: requires a swipe gesture on a device or emulator
- MUST ask people to confirm before a sheet with unsaved changes is dismissed by a swipe. | topic: Sheets | source: https://developer.apple.com/design/human-interface-guidelines/sheets | why: a stray swipe does not throw away typed input | check: not screenshot-checkable: requires a swipe with unsaved input and capture of the confirmation prompt
- MUST show a visible grabber on a resizable sheet that people can drag or tap to resize. | topic: Sheets | source: https://developer.apple.com/design/human-interface-guidelines/sheets | why: people see that the sheet can change size | check: at 390px the grabber is visible at the top edge of a resizable sheet
- MUST keep a resizable sheet's resize action reachable by assistive technology. | topic: Sheets | source: https://developer.apple.com/design/human-interface-guidelines/sheets | why: people using screen readers resize the sheet without seeing the screen | check: not screenshot-checkable: requires inspecting the accessibility tree for an adjustable resize control
- MUST show the most relevant items within the first resting height of a resizable sheet. | topic: Sheets | source: https://developer.apple.com/design/human-interface-guidelines/sheets | why: people see useful content without any resizing | check: at 390px the most relevant items are fully visible at the default resting height
- MUST use a sheet only when the task needs a custom title or custom content, and use an alert or confirmation dialog for important information or a set of choices. | topic: Sheets | source: https://developer.apple.com/design/human-interface-guidelines/sheets | why: people get short decisions in the lighter, expected form | check: not screenshot-checkable: a judgement on which component type fits the content
- MUST keep sheet interactions brief and occasional, used only as a temporary interruption for an important task. | topic: Sheets | source: https://developer.apple.com/design/human-interface-guidelines/sheets | why: people are not repeatedly pulled out of their flow | check: not screenshot-checkable: a usage-frequency judgement across the whole flow
- MUST NOT use a sheet to help people navigate the app's content. | topic: Sheets | source: https://developer.apple.com/design/human-interface-guidelines/sheets | why: people navigate with the app's normal navigation, not temporary overlays | check: at 390px the sheet shows a task form or a choice, not a list of destinations to browse
- MUST make the top-leading dismiss label clear, so the sheet does not look like a page or app title. | topic: Sheets | source: https://developer.apple.com/design/human-interface-guidelines/sheets | why: people know how to dismiss the sheet | check: at 390px the top-leading text is a control label such as Cancel or Close, not a heading
- MUST NOT label a sheet's dismiss control so that it suggests the sheet is part of a hierarchical navigation interface. | topic: Sheets | source: https://developer.apple.com/design/human-interface-guidelines/sheets | why: people do not mistake an overlay for a page they can drill into | check: at 1440px and 390px the dismiss label is Cancel, Close, or Done, not a page name
Apple-specific (excluded):
- macOS sheets are rounded, cardlike views that float over their parent window.
- macOS: opening a sheet brings its parent window and document panels forward, and other app windows can be brought forward without dismissing it.
- visionOS: a sheet should not rise from the bottom edge of a window; center it in the field of view, and use a split view for supplementary items.
- iOS and iPadOS: Cancel sits on the leading edge and Done on the trailing edge of the top toolbar, with placement varying by step in multi-step flows.
- iOS and iPadOS: the large and medium detent system and custom detent values.
- iPadOS: page and form sheet presentation styles (UIKit UIModalPresentationStyle).
- watchOS: the sheet is a semitransparent full-screen view with the system blur and desaturation material.
- watchOS: SF Symbols for a changed default dismiss label.
- visionOS: transitioning the app to a Full Space.
- Developer API names: sheet(item:onDismiss:content:), UISheetPresentationController, presentAsSheet(_:).
Persona and journey notes:
- The person is mid-task in a parent view and needs one scoped step, such as attaching a file or choosing a save location, before returning to the parent view.
- People expect to return to the parent view or window when they close a sheet, and they lose track if one sheet leads to another.
- People expect to swipe down to dismiss a sheet rather than tap a button.
- People expand a sheet when they need a clearer view of its content.
- People using assistive technology need to resize a sheet without seeing the screen.
- Complex or long multi-step tasks, such as document or photo editing, may suit a full-page presentation better than a sheet.
COVERAGE:
- sheets: read, ~1300 words, 27 universal rules, 10 excluded
