Candidate catalog - evidence only; not executable requirements.

# Home Screen quick actions: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/home-screen-quick-actions
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: a5b899564425cac036268593349938adf7367e6bd41a6dc59d7de71b4f0c136e
Input words: 481. Candidate rule records: 12. Exclusion blocks: 7.
Original note: p058-home-screen-quick-actions/home-screen-quick-actions.md.
Adopted source-linked rules: None directly attributed; retained as reviewed candidate evidence, not silently skipped.

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Home Screen quick actions

URL: https://developer.apple.com/design/human-interface-guidelines/home-screen-quick-actions

Universal rules:
- MUST create quick actions only for compelling, high-value tasks | topic: quick action selection | source: HIG page "Home Screen quick actions", Best practices | why: quick actions give people a fast path to tasks they value most | check: every action maps to a high-value task in the app
- MUST provide at least one useful quick action | topic: quick action count | source: HIG page "Home Screen quick actions", Best practices | why: people expect every app to offer at least one useful quick action | check: the app defines one or more quick actions that perform a useful task
- MUST NOT provide more than four quick actions | topic: quick action count | source: HIG page "Home Screen quick actions", Best practices | why: the menu allows a total of four app-specific actions | check: the configured quick action list has four or fewer entries
- MUST NOT make unpredictable changes to quick actions | topic: dynamic quick actions | source: HIG page "Home Screen quick actions", Best practices | why: people lose trust in a menu that changes without a clear reason | check: changes to quick actions follow a rule people can understand
- MUST make dynamic quick-action changes in ways people can predict | topic: dynamic quick actions | source: HIG page "Home Screen quick actions", Best practices | why: predictable updates keep the menu relevant and trustworthy | check: each dynamic change (location, activity, time of day, settings) has a stated, consistent trigger
- MUST give each quick action a succinct title that instantly communicates the result of the action | topic: quick action titles | source: HIG page "Home Screen quick actions", Best practices | why: people must understand what happens before they choose an action | check: each title names the outcome of the action in a few words
- MUST NOT include the app name or extraneous information in a quick action title or subtitle | topic: quick action text | source: HIG page "Home Screen quick actions", Best practices | why: extra words waste limited space and add no meaning | check: title and subtitle contain only the action's purpose or context
- MUST keep quick action title and subtitle text short to avoid truncation | topic: quick action text | source: HIG page "Home Screen quick actions", Best practices | why: long text is cut off in the menu | check: text fits the menu without truncation at default text size
- MUST take localization into account when writing quick action titles and subtitles | topic: quick action text | source: HIG page "Home Screen quick actions", Best practices | why: translated text grows or shrinks and must still read clearly and fit | check: titles and subtitles are localizable and remain short in longer languages
- MUST provide a subtitle only when a quick action needs more context | topic: quick action subtitle | source: HIG page "Home Screen quick actions", Best practices | why: a subtitle is optional and should add information, not repeat the title | check: each subtitle adds context that the title does not give
- MUST provide a familiar interface icon for each quick action | topic: quick action icons | source: HIG page "Home Screen quick actions", Best practices | why: a familiar icon helps people recognize the action at a glance | check: every quick action has an icon that matches a common action meaning
- MUST NOT use an emoji in place of a symbol or interface icon for a quick action | topic: quick action icons | source: HIG page "Home Screen quick actions", Best practices | why: emoji are full color and do not adapt to Dark Mode, while interface symbols are monochromatic and keep contrast | check: no quick action icon is an emoji character

Apple-specific (excluded from universal rules):
- Home Screen placement, touch-and-hold menu, and 3D Touch press menu
- Mail, Maps, and Messages examples
- SF Symbols as the preferred icon source
- Quick Action Icon Template included with #ios-apps
- Standard icons reference list
- UIKit developer documentation (add-home-screen-quick-actions)
- Platform notes: iOS and iPadOS have no additional considerations; quick actions are not supported in macOS, tvOS, visionOS, or watchOS

Persona notes:
- A returning user who wants one common task in the app without opening it first.
- A user who expects each app to offer a useful shortcut and who notices unstable or unclear menu items.
- A user who reads quick action text quickly, often in a language other than the app's source language.

Journey notes:
- The user touches and holds the app icon on the Home Screen and sees the quick action menu.
- The user scans titles and icons, then chooses one action.
- The app performs the action directly, skipping the normal launch path.
- Over time, the menu may update with new information, so each change must remain predictable to the user.

COVERAGE: 1 of 1 pages read in full; 12 universal rules extracted; Apple-specific items listed above and excluded.
