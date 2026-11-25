Candidate catalog - evidence only; not executable requirements.

# Edit menus: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/edit-menus
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 3d27163b3380a58368323d1d097b294b9e81824ab1af1f04904e72a06303da07
Input words: 904. Candidate rule records: 10. Exclusion blocks: 6.
Original note: p052-edit-menus/edit-menus.md.
Adopted source-linked rules: C-10

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

# Edit menus - guardrail notes

Source: https://developer.apple.com/design/human-interface-guidelines/edit-menus
Input: /Volumes/toshiba/work/ui-guardrails-1103/hig-text/edit-menus.md

## Universal guardrail rules

- U1. Prefer the system-provided edit menu. Do not build a custom menu that repeats the same commands; people already know the system one.
- U2. Reveal menus with the system-defined interactions people already know. Do not require a custom gesture for a standard task.
- U3. Offer only commands that apply to the current context. Remove or dim commands that need a selection (Copy, Cut) when nothing is selected, and hide Paste when there is nothing to paste.
- U4. List custom commands next to the relevant system commands, after them in the same section, so the expected ordering holds.
- U5. Keep custom commands few. Do not overwhelm the menu.
- U6. Let people copy content text, including non-editable text, when it makes sense. Do not make control labels copyable.
- U7. Support undo and redo when possible. Menu actions run without confirmation, so undo is the recovery path.
- U8. Do not add controls that duplicate edit-menu functions or standard keyboard shortcuts. Redundant controls crowd the interface.
- U9. Separate deletion commands when their behavior differs. Delete does not touch the pasteboard; Cut copies to the pasteboard before deleting.
- U10. Write custom command labels as short verbs or verb phrases.

## Platform-scoped rules (not universal)

- P1 (iOS): Show the compact horizontal style for touch reveal, with a chevron that expands to a context menu.
- P2 (iPadOS): Support both styles. Touch reveal gives the compact horizontal menu; keyboard or pointer reveal opens a vertical context menu.
- P3 (iOS, iPadOS): Adjust menu placement when it covers important content. The system chooses above or below the target, and the shape and pointer cannot change.
- P4 (macOS): Order custom items in the app's Edit menu per the menu-bar guidance; the context menu also carries edit commands.
- P5 (visionOS): Open the edit menu with the standard pinch-and-hold gesture as a horizontal bar, or as a context menu. No extra visionOS guidance.
- P6 (tvOS, watchOS): No edit menu is provided and editing is rare. Nothing to guard.

## Related pages

menus, context-menus, the-menu-bar, undo-and-redo

## Count

Universal rules: 10 (U1-U10). Platform-scoped rules: 6 (P1-P6).
