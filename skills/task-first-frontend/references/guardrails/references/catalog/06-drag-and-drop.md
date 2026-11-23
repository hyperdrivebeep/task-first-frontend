Legacy candidates - not requirements; use pages/ and the curated rule files.

# HIG extraction catalog: 06-drag-and-drop

Raw extraction by a note-taking child (claude-haiku-5-5, subscription) on 2026-11-03 KST from the locally saved HIG pages. Curated guardrails in ../rules-*.md are chosen from here.

## Drag and drop (34 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop

- [DAD-01] MUST support drag and drop wherever people can select content in the app.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: people expect to drag selected content everywhere and get confused when it fails in some places.
  Check@1440/390: not screenshot-checkable: needs a live drag gesture across several screens.
- [DAD-02] MUST offer a menu command or other non-drag way to do every drag-and-drop action.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: people who cannot drag, or prefer not to, still complete the same task.
  Check@1440/390: screenshot at 1440px and 390px shows a visible copy or move command that performs the same action as the drag.
- [DAD-03] MUST let people undo a drag-and-drop operation after the drop.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: people often drop content in the wrong place and need to return to the previous state.
  Check@1440/390: not screenshot-checkable: requires performing a drop and then triggering undo.
- [DAD-04] MUST ask for confirmation before a drop that cannot be undone.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: an irreversible drop should not happen by accident.
  Check@1440/390: not screenshot-checkable: requires performing an irreversible drop to open the confirmation.
- [DAD-05] MUST provide another way to reverse a drop that cannot be undone.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: people still need a way out when undo is not possible.
  Check@1440/390: screenshot at 1440px and 390px, taken after the drop, shows the reverse control.
- [DAD-06] MUST move content when a drop lands in the same container and copy it when a drop lands in a different container.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: people expect the result of a drop to match where the content came from.
  Check@1440/390: not screenshot-checkable: needs before and after drag states in two containers.
- [DAD-07] MUST NOT change the default move-or-copy behavior without weighing what most people expect against the risk of frustration or data loss.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: an unexpected move or copy can lose data or confuse people.
  Check@1440/390: not screenshot-checkable: a design decision verified by reading the spec for the changed default.
- [DAD-08] MUST copy, not move, content dropped into a different app.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: dragging between apps should never remove content from the source app.
  Check@1440/390: not screenshot-checkable: needs two apps and a drop between them.
- [DAD-09] MUST support dragging a group of selected items together where grouping makes sense.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: people save time by moving many items in one drag.
  Check@1440/390: not screenshot-checkable: needs an active multi-item drag.
- [DAD-10] MUST offer dragged content in multiple versions, ordered from highest to lowest fidelity.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: a destination can take the best version it supports, so people keep quality.
  Check@1440/390: not screenshot-checkable: the offered formats are not visible on screen.
- [DAD-11] MUST let a held drag activate a button or segmented control it hovers over, where spring loading applies.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: people can reach a control without dropping and restarting.
  Check@1440/390: not screenshot-checkable: needs a captured hover state during the drag.
- [DAD-12] MUST show a drag image as soon as a drag starts and keep it visible until the drop.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: people need continuous feedback that the drag is working.
  Check@1440/390: not screenshot-checkable: needs a captured frame during the drag.
- [DAD-13] MUST make the drag image translucent so the original content and destinations stay visible beneath it.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: people can see where they are dropping while carrying the content.
  Check@1440/390: not screenshot-checkable: needs a captured frame during the drag.
- [DAD-14] MUST NOT change the drag image constantly or radically while the drag is in progress.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: a shifting image is distracting and hard to follow.
  Check@1440/390: not screenshot-checkable: needs several captured frames during one drag.
- [DAD-15] MUST show an insertion point or highlight only over a destination that can accept the dragged item.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: people should not be led to drop content where it will be refused.
  Check@1440/390: not screenshot-checkable: needs a captured drag over an accepting and a refusing destination.
- [DAD-16] MUST NOT show an accept cue on a destination that cannot accept the dragged item; show nothing or an explicit not-allowed cue instead.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: a false accept cue leads people into a failed drop.
  Check@1440/390: not screenshot-checkable: needs a captured drag over a refusing destination.
- [DAD-17] MUST remove destination highlighting as soon as the dragged content moves off that destination.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: a stale highlight misleads people about where the content will land.
  Check@1440/390: not screenshot-checkable: needs two captured frames during one drag.
- [DAD-18] MUST give each possible destination a distinct visual cue, shown one at a time.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: people can tell which destination they are about to drop on.
  Check@1440/390: not screenshot-checkable: needs a captured drag over several destinations.
- [DAD-19] MUST show visible feedback when a drop lands on an invalid destination or fails.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: people need to know the content did not land.
  Check@1440/390: not screenshot-checkable: needs a failed drop to capture the feedback.
- [DAD-20] MUST change the pointer or cursor to show what a drop will do.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: people can predict the result before they let go.
  Check@1440/390: not screenshot-checkable: needs a captured pointer state during the drag.
- [DAD-21] MUST scroll a scrolling container automatically while a dragged item is held near its edge, and stop when the drag leaves the container.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: people can reach content that is off screen without releasing.
  Check@1440/390: not screenshot-checkable: needs a timed drag over a long list.
- [DAD-22] MUST accept the richest version of dropped content that the app supports.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: people keep the most detail the app can use.
  Check@1440/390: not screenshot-checkable: the chosen format is not visible on screen.
- [DAD-23] MUST extract only the part of dropped content the destination needs.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: unrelated data should not land in the destination.
  Check@1440/390: not screenshot-checkable: needs a drop of a structured item and a comparison of the result.
- [DAD-24] MUST show progress feedback while dropped content transfers.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: people need to know a slow transfer is still running.
  Check@1440/390: screenshot at 1440px and 390px, taken during a forced slow transfer, shows a progress indicator.
- [DAD-25] MUST show a placeholder at the drop location in collections, lists, and tables while dropped content transfers.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: people can find the content again when the transfer finishes.
  Check@1440/390: screenshot at 1440px and 390px, taken during a forced slow transfer in a list, shows a placeholder row at the drop point.
- [DAD-26] MUST show that a drop which starts a task has begun, and keep people informed of its progress.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: people should not wonder whether a drop did anything.
  Check@1440/390: screenshot at 1440px and 390px, taken after the drop, shows a task status indicator.
- [DAD-27] MUST keep dropped text in the source's font, size, and other attributes when the destination supports the same text styles, and apply the destination's style otherwise.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: text should look the way people expect after a move or copy.
  Check@1440/390: screenshot at 1440px and 390px, taken before and after the drop, shows the dropped text in the expected style.
- [DAD-28] MUST keep dropped content selected in the destination after the drop.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: people can act on the content they just dropped right away.
  Check@1440/390: screenshot at 1440px and 390px, taken after the drop, shows the dropped content with selection styling.
- [DAD-29] MUST remove the selection from the source after a drop into a different container and after a copy within the same container.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: the source should not look as if it still holds the selection.
  Check@1440/390: screenshot at 1440px and 390px, taken after the drop, shows no selection styling on the source content.
- [DAD-30] MUST remove dragged content from its original location after a move within the same container.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: people see the move happen and find no duplicates.
  Check@1440/390: screenshot at 1440px and 390px, taken after the move, shows the content gone from its original spot.
- [DAD-31] MUST show a count of the dragged items during a multi-item drag, and update the count when a destination accepts only some of them.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: people can confirm they have not missed an item.
  Check@1440/390: not screenshot-checkable: needs a captured mid-drag frame.
- [DAD-32] MUST let people start a drag from a selection in a single motion, without a pause between selecting and dragging, unless they are still selecting multiple items.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: a pause makes the drag feel slow and broken.
  Check@1440/390: not screenshot-checkable: a gesture timing behavior.
- [DAD-33] MUST present content dragged out of the app in a format the app can open later.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: people can keep and reuse what they dragged out.
  Check@1440/390: not screenshot-checkable: needs a drop into another location and then reopening the file.
- [DAD-34] MUST let assistive technologies identify drag sources and drop targets.
  HIG: Drag and drop <https://developer.apple.com/design/human-interface-guidelines/drag-and-drop> | Why: people using assistive tools can still drag and drop.
  Check@1440/390: not screenshot-checkable: needs an accessibility tree inspection.

## Entering data (15 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/entering-data

- [ED-01] MUST gather as much information as possible before asking people for input, so they supply the least data necessary.
  HIG: Entering data <https://developer.apple.com/design/human-interface-guidelines/entering-data> | Why: fewer fields mean less effort and fewer mistakes for people.
  Check@1440/390: not screenshot-checkable: needs a walkthrough of the full form flow to count the fields asked.
- [ED-02] MUST get information from the system, such as settings, instead of asking people to enter it.
  HIG: Entering data <https://developer.apple.com/design/human-interface-guidelines/entering-data> | Why: people should not retype what the app can already know.
  Check@1440/390: not screenshot-checkable: needs the data source to compare against the fields shown.
- [ED-03] MUST ask for permission to access data such as location or calendar information, instead of asking people to type it.
  HIG: Entering data <https://developer.apple.com/design/human-interface-guidelines/entering-data> | Why: people can grant access once rather than typing the same details.
  Check@1440/390: not screenshot-checkable: needs the permission prompt flow.
- [ED-04] MUST show a prompt or introductory label that states what each data field needs.
  HIG: Entering data <https://developer.apple.com/design/human-interface-guidelines/entering-data> | Why: people know what to type before they start.
  Check@1440/390: screenshot at 1440px and 390px shows a visible label or placeholder on every data field.
- [ED-05] MUST support every input method the platform makes available, so people can choose the one that works for them.
  HIG: Entering data <https://developer.apple.com/design/human-interface-guidelines/entering-data> | Why: people with different devices and abilities can all finish the form.
  Check@1440/390: not screenshot-checkable: needs each input method exercised on the field.
- [ED-06] MUST use a secure text-entry field for sensitive data, hiding each character as people type it.
  HIG: Entering data <https://developer.apple.com/design/human-interface-guidelines/entering-data> | Why: people's sensitive input should not be readable by someone looking over their shoulder.
  Check@1440/390: screenshot at 1440px and 390px, taken while typing into the sensitive field, shows masked characters.
- [ED-07] MUST NOT prepopulate a password field.
  HIG: Entering data <https://developer.apple.com/design/human-interface-guidelines/entering-data> | Why: a filled password exposes the account to anyone at the screen.
  Check@1440/390: screenshot at 1440px and 390px of the password field on first load shows it empty.
- [ED-08] MUST ask people to enter their password or to authenticate with biometrics or a keychain, rather than filling it in for them.
  HIG: Entering data <https://developer.apple.com/design/human-interface-guidelines/entering-data> | Why: people keep control of who signs in to their account.
  Check@1440/390: not screenshot-checkable: needs a sign-in flow walkthrough.
- [ED-09] MUST offer a list of choices, such as a picker or menu, instead of requiring typed text when the answer comes from a known set.
  HIG: Entering data <https://developer.apple.com/design/human-interface-guidelines/entering-data> | Why: choosing is faster and less error-prone than typing.
  Check@1440/390: screenshot at 1440px and 390px shows a selection control in place of a free-text field for that answer.
- [ED-10] MUST let people provide data by pasting it into a field.
  HIG: Entering data <https://developer.apple.com/design/human-interface-guidelines/entering-data> | Why: people can reuse data they already have without retyping it.
  Check@1440/390: not screenshot-checkable: needs a paste action into the field.
- [ED-11] MUST let people provide data by dragging and dropping it into a field that accepts it.
  HIG: Entering data <https://developer.apple.com/design/human-interface-guidelines/entering-data> | Why: drag and drop feels integrated and saves typing.
  Check@1440/390: not screenshot-checkable: needs a drag gesture onto the field.
- [ED-12] MUST validate field values as soon as people enter them.
  HIG: Entering data <https://developer.apple.com/design/human-interface-guidelines/entering-data> | Why: people catch mistakes before they reach the end of a long form.
  Check@1440/390: screenshot at 1440px and 390px, taken after entering an invalid value, shows a validation message on that field.
- [ED-13] MUST show feedback as soon as a problem is detected, while people can still correct it.
  HIG: Entering data <https://developer.apple.com/design/human-interface-guidelines/entering-data> | Why: people fix errors right away instead of going back through a finished form.
  Check@1440/390: screenshot at 1440px and 390px, taken right after an invalid entry, shows the message next to the field without submitting.
- [ED-14] MUST make it clear which data is required before people can proceed.
  HIG: Entering data <https://developer.apple.com/design/human-interface-guidelines/entering-data> | Why: people should know what they must fill in before they get stuck.
  Check@1440/390: screenshot at 1440px and 390px of an empty form shows a required-field indicator on each required field.
- [ED-15] MUST NOT leave the Next or Continue button available until the required data is entered.
  HIG: Entering data <https://developer.apple.com/design/human-interface-guidelines/entering-data> | Why: a button that cannot succeed leads people into a failed attempt.
  Check@1440/390: screenshot at 1440px and 390px of the form with required fields empty shows the Next or Continue button disabled.

# Exclusions and persona notes

### Drag and drop
Apple-specific, excluded:
- visionOS pinch-and-hold dragging, including along the z-axis.
- iOS and iPadOS touchscreen, pointing-device, and Full Keyboard Access interaction.
- Universal Control dragging between Mac and iPad.
- macOS pointing-device, Full Keyboard Access, VoiceOver, and touch-display interaction.
- Magic Trackpad force-click and iPad hover activating spring-loaded controls.
- Calendar example of dragging an event onto toolbar date segments.
- Option key forcing a copy within the same container.
- UIKit and AppKit accessibility descriptor APIs (accessibilityDragSourceDescriptors, accessibilityDropPointDescriptors).
- iPadOS adding items to an in-progress drag session and multiple simultaneous drops.
- macOS multi-item drag across several apps.
- Finder confirmation when dropping into a write-only folder.
- Photos cancelling photo sharing after a drop.
- macOS background selection and dragging from an inactive window.
- macOS Finder drag of content as a .ics file or clipping; clipping is unrelated to the Clipboard.
- visionOS launching an app to handle content dropped into empty space (NSUserActivity, Safari, Quick Look).
- System alert for time-consuming transfers between apps.
- SF Symbols circle.slash as the not-allowed image.
- Apple's pointer set: copy, drag link, disappearing item, operation not allowed.
- Mail example of extracting only name and email from a contact.
- System-provided text fields and text views auto-scroll and built-in drag support.
- Platform availability: not supported in tvOS or watchOS.
- Developer documentation and related-article links (UIKit, AppKit, FileProvider, HT212757).
Persona and journey notes:
- None stated on this page.

### Entering data
Apple-specific, excluded:
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
