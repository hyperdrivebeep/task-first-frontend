Candidate catalog - evidence only; not executable requirements.

# Activity views: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/activity-views
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: bb3c3e351d0cb49cc32682bf12bfe8e1518693716ddb1f4234ee0f05a9f960b3
Input words: 1030. Candidate rule records: 10. Exclusion blocks: 7.
Original note: p048-activity-views/activity-views.md.
Adopted source-linked rules: None directly attributed; retained as reviewed candidate evidence, not silently skipped.

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Activity views
URL: https://developer.apple.com/design/human-interface-guidelines/activity-views

Universal rules:
- MUST NOT | Create duplicate versions of common actions that the activity view already provides | Section: Best practices
- MUST | Give an app-specific action that is similar to an existing action a custom title that says what it does | Section: Best practices
- MUST | Write a succinct, descriptive title for each custom action, short enough to avoid wrapping or truncation | Section: Best practices
- MUST NOT | Put the company or product name in a custom action title | Section: Best practices
- MUST | Show custom actions only when they are appropriate to the current context | Section: Best practices
- MUST | Exclude system-provided actions that do not apply to the app, where the platform allows exclusion | Section: Best practices
- MUST NOT | Provide an alternative way to do the same thing that the standard share control already does | Section: Best practices
- MUST | Continue a time-consuming task in the background when it is started from a share or action surface | Section: Share and action extensions
- MUST | Give people a way to check the status of a background task in the main app | Section: Share and action extensions
- MUST NOT | Notify people merely because a task completed; notify only about a problem | Section: Share and action extensions

Apple-specific (excluded):
- Share sheet and popover presentation, and the Action button that reveals the activity view
- Photos example actions (Copy Photo, Add to Album, Adjust Location) and the default ordering that lists app-specific actions before system actions
- System actions named in the page (Add to Files, AirPlay, Print, Copy) and the user's ability to reorder or edit the system list
- SF Symbols recommendation and the 70x70 pixel custom icon area
- Share and action app extensions: system composition view preference, including the app name or app elements in an action extension interface, and the rule against displaying extra modal views above an extension (alerts only when necessary)
- Platform support: iOS, iPadOS and visionOS supported; macOS, tvOS and watchOS not supported for the activity view
- Developer resources: UIActivityViewController, UIActivity, app-extension-support, and related sheets and popovers pages

Persona and journey notes:
- People open the activity view while viewing a page or document, or after selecting an item, by choosing the Action or Share control.
- People expect the system share control to offer the standard actions, so an app should not present a second control for the same job.
- People can edit the action list to keep the actions they use most, so custom actions compete with their own choices.
- A share or action flow may run long; the sheet closes at completion, so people return to the main app to see progress and are interrupted only when something goes wrong.

COVERAGE: 1 of 1 file read completely (intro, best practices, share and action extensions, platform considerations, resources); 10 universal rules extracted, Apple-specific items listed as excluded.
