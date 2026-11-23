Candidate catalog - evidence only; not executable requirements.

# Drag and drop: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 6212a5d337367764535937f98462c4ce11d7136582c8b4d21c692716c43d5ebb
Input words: 2281. Candidate rule records: 34. Exclusion blocks: 22.
Original note: 06-drag-and-drop/drag-and-drop.md.
Adopted source-linked rules: None directly attributed; retained as reviewed candidate evidence, not silently skipped.

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Drag and drop
URL: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop

Universal rules:
- MUST support drag and drop wherever people can select content in the app. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: people expect to drag selected content everywhere and get confused when it fails in some places. | check: not screenshot-checkable: needs a live drag gesture across several screens.
- MUST offer a menu command or other non-drag way to do every drag-and-drop action. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: people who cannot drag, or prefer not to, still complete the same task. | check: screenshot at 1440px and 390px shows a visible copy or move command that performs the same action as the drag.
- MUST let people undo a drag-and-drop operation after the drop. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: people often drop content in the wrong place and need to return to the previous state. | check: not screenshot-checkable: requires performing a drop and then triggering undo.
- MUST ask for confirmation before a drop that cannot be undone. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: an irreversible drop should not happen by accident. | check: not screenshot-checkable: requires performing an irreversible drop to open the confirmation.
- MUST provide another way to reverse a drop that cannot be undone. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: people still need a way out when undo is not possible. | check: screenshot at 1440px and 390px, taken after the drop, shows the reverse control.
- MUST move content when a drop lands in the same container and copy it when a drop lands in a different container. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: people expect the result of a drop to match where the content came from. | check: not screenshot-checkable: needs before and after drag states in two containers.
- MUST NOT change the default move-or-copy behavior without weighing what most people expect against the risk of frustration or data loss. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: an unexpected move or copy can lose data or confuse people. | check: not screenshot-checkable: a design decision verified by reading the spec for the changed default.
- MUST copy, not move, content dropped into a different app. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: dragging between apps should never remove content from the source app. | check: not screenshot-checkable: needs two apps and a drop between them.
- MUST support dragging a group of selected items together where grouping makes sense. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: people save time by moving many items in one drag. | check: not screenshot-checkable: needs an active multi-item drag.
- MUST offer dragged content in multiple versions, ordered from highest to lowest fidelity. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: a destination can take the best version it supports, so people keep quality. | check: not screenshot-checkable: the offered formats are not visible on screen.
- MUST let a held drag activate a button or segmented control it hovers over, where spring loading applies. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: people can reach a control without dropping and restarting. | check: not screenshot-checkable: needs a captured hover state during the drag.
- MUST show a drag image as soon as a drag starts and keep it visible until the drop. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: people need continuous feedback that the drag is working. | check: not screenshot-checkable: needs a captured frame during the drag.
- MUST make the drag image translucent so the original content and destinations stay visible beneath it. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: people can see where they are dropping while carrying the content. | check: not screenshot-checkable: needs a captured frame during the drag.
- MUST NOT change the drag image constantly or radically while the drag is in progress. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: a shifting image is distracting and hard to follow. | check: not screenshot-checkable: needs several captured frames during one drag.
- MUST show an insertion point or highlight only over a destination that can accept the dragged item. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: people should not be led to drop content where it will be refused. | check: not screenshot-checkable: needs a captured drag over an accepting and a refusing destination.
- MUST NOT show an accept cue on a destination that cannot accept the dragged item; show nothing or an explicit not-allowed cue instead. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: a false accept cue leads people into a failed drop. | check: not screenshot-checkable: needs a captured drag over a refusing destination.
- MUST remove destination highlighting as soon as the dragged content moves off that destination. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: a stale highlight misleads people about where the content will land. | check: not screenshot-checkable: needs two captured frames during one drag.
- MUST give each possible destination a distinct visual cue, shown one at a time. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: people can tell which destination they are about to drop on. | check: not screenshot-checkable: needs a captured drag over several destinations.
- MUST show visible feedback when a drop lands on an invalid destination or fails. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: people need to know the content did not land. | check: not screenshot-checkable: needs a failed drop to capture the feedback.
- MUST change the pointer or cursor to show what a drop will do. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: people can predict the result before they let go. | check: not screenshot-checkable: needs a captured pointer state during the drag.
- MUST scroll a scrolling container automatically while a dragged item is held near its edge, and stop when the drag leaves the container. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: people can reach content that is off screen without releasing. | check: not screenshot-checkable: needs a timed drag over a long list.
- MUST accept the richest version of dropped content that the app supports. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: people keep the most detail the app can use. | check: not screenshot-checkable: the chosen format is not visible on screen.
- MUST extract only the part of dropped content the destination needs. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: unrelated data should not land in the destination. | check: not screenshot-checkable: needs a drop of a structured item and a comparison of the result.
- MUST show progress feedback while dropped content transfers. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: people need to know a slow transfer is still running. | check: screenshot at 1440px and 390px, taken during a forced slow transfer, shows a progress indicator.
- MUST show a placeholder at the drop location in collections, lists, and tables while dropped content transfers. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: people can find the content again when the transfer finishes. | check: screenshot at 1440px and 390px, taken during a forced slow transfer in a list, shows a placeholder row at the drop point.
- MUST show that a drop which starts a task has begun, and keep people informed of its progress. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: people should not wonder whether a drop did anything. | check: screenshot at 1440px and 390px, taken after the drop, shows a task status indicator.
- MUST keep dropped text in the source's font, size, and other attributes when the destination supports the same text styles, and apply the destination's style otherwise. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: text should look the way people expect after a move or copy. | check: screenshot at 1440px and 390px, taken before and after the drop, shows the dropped text in the expected style.
- MUST keep dropped content selected in the destination after the drop. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: people can act on the content they just dropped right away. | check: screenshot at 1440px and 390px, taken after the drop, shows the dropped content with selection styling.
- MUST remove the selection from the source after a drop into a different container and after a copy within the same container. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: the source should not look as if it still holds the selection. | check: screenshot at 1440px and 390px, taken after the drop, shows no selection styling on the source content.
- MUST remove dragged content from its original location after a move within the same container. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: people see the move happen and find no duplicates. | check: screenshot at 1440px and 390px, taken after the move, shows the content gone from its original spot.
- MUST show a count of the dragged items during a multi-item drag, and update the count when a destination accepts only some of them. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: people can confirm they have not missed an item. | check: not screenshot-checkable: needs a captured mid-drag frame.
- MUST let people start a drag from a selection in a single motion, without a pause between selecting and dragging, unless they are still selecting multiple items. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: a pause makes the drag feel slow and broken. | check: not screenshot-checkable: a gesture timing behavior.
- MUST present content dragged out of the app in a format the app can open later. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: people can keep and reuse what they dragged out. | check: not screenshot-checkable: needs a drop into another location and then reopening the file.
- MUST let assistive technologies identify drag sources and drop targets. | topic: Drag and drop | source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop | why: people using assistive tools can still drag and drop. | check: not screenshot-checkable: needs an accessibility tree inspection.

Apple-specific (excluded):
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

COVERAGE:
- drag-and-drop: read, about 2200 words, 34 universal rules, 22 excluded
