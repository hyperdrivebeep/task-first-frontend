Candidate catalog - evidence only; not executable requirements.

# Undo and redo: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/undo-and-redo
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: d83f84f799c2a96f890084d2ea32b592ca03ec632c8ea4cdcc72ee51c334b608
Input words: 657. Candidate rule records: 8. Exclusion blocks: 9.
Original note: p018-undo-and-redo/undo-and-redo.md.
Adopted source-linked rules: P-11 (I-02 removed in the 2026-11-07 review: claim not on this page)

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Undo and redo

URL: https://developer.apple.com/design/human-interface-guidelines/undo-and-redo

Universal rules:
MUST | Help people predict the result of each undo and redo as much as possible. | Source: Best practices
MUST | Label undo and redo menu items so they identify the result of the action (for example, Undo Typing or Redo Bold). | Source: Best practices
MUST | Show the result of each undo and redo, scrolling to or otherwise highlighting content that is no longer visible. | Source: Best practices
MUST NOT | Place unnecessary limits on the number of times people can undo or redo. | Source: Best practices
MUST | Allow people to undo every action they performed since a logical step such as opening a document or saving their work. | Source: Best practices
MUST NOT | Provide dedicated undo and redo buttons unless they are necessary. | Source: Best practices
MUST | When dedicated undo and redo buttons are provided, place them in a toolbar. | Source: Best practices
MUST | Briefly and precisely describe the operation being undone or redone in the undo or redo label or prompt. | Source: iOS, iPadOS

Apple-specific (excluded):
The iOS alert title that automatically prefixes "Undo " or "Redo " with a trailing space is an Apple OS feature.
The iOS shake-to-undo alert shown when the device is shaken is an Apple OS feature.
The standard system-provided symbols for undo and redo are Apple's own symbol set.
Using system-supported undo and redo methods such as the Edit menu, keyboard shortcuts, or shaking an iPhone is an Apple OS feature.
Not redefining standard gestures such as the three-finger swipe or shaking an iPhone for undo and redo is an Apple OS gesture rule.
The macOS rule to place undo and redo at the top of the Edit menu and support Command-Z and Shift-Command-Z is an Apple OS feature.
The iPad keyboard shortcut and pointing-device wording in Resources is an Apple feature reference.
The visionOS, tvOS, and watchOS platform notes are platform availability statements, not rules.
The Foundation UndoManager developer documentation link is an Apple framework reference.

Persona and journey notes:
People expect undo and redo to reverse recent actions and often try undoing several times until something changes.
People may not remember which earlier action an undo targets, which can cause unintended changes and frustration.
Repeated undo presses on an action with no visible effect come from people thinking the action had no effect, so the visible result of each undo and redo matters.
Consider, but the page does not require, giving people a way to revert a batch of related small adjustments (for example, incremental changes to one property) in one step.
Consider, but the page does not require, giving people a way to revert all changes since opening a document or saving their work.

COVERAGE:
Intro: read, no rules beyond the MUST and MUST NOT lines above (predictability and visibility of results are covered by the first and third universal rules).
Best practices: four paragraphs read; predict-results, menu labels, show-results, undo-multiple-times, batch and revert-to-save considerations, and undo-button necessity covered.
Platform considerations: visionOS, tvOS, watchOS notes read (no rules); iOS and iPadOS two paragraphs read; macOS one paragraph read.
Resources: read; related links and developer documentation are references, not rules.
Total universal rules on this page: 8.
