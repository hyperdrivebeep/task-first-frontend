Legacy candidates - not requirements; use pages/ and the curated rule files.

# HIG extraction catalog: 07-feedback

Raw extraction by a note-taking child (claude-haiku-5-5, subscription) on 2026-11-03 KST from the locally saved HIG pages. Curated guardrails in ../rules-*.md are chosen from here.

## Feedback (12 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/feedback

- [FEE-01] MUST give feedback that communicates the current status, the success or failure of important actions, warnings about risky actions, and chances to correct a mistake.
  HIG: Feedback <https://developer.apple.com/design/human-interface-guidelines/feedback> | Why: People need to know what is happening, what they can do next, and how to avoid mistakes.
  Check@1440/390: Screenshot each state (status, success, failure, warning, correction prompt) at 1440px and 390px and confirm each one shows visible feedback.
- [FEE-02] MUST match the delivery of feedback to its significance: show status passively and interrupt only for information that risks data loss.
  HIG: Feedback <https://developer.apple.com/design/human-interface-guidelines/feedback> | Why: A passive status line does not disturb me, and a real risk is not missed behind a quiet label.
  Check@1440/390: Screenshot a status message and a data-loss warning at 1440px and 390px; the status is non-blocking and the warning is modal or blocking.
- [FEE-03] MUST provide each feedback message through at least two channels, such as color with a text label or icon, so it does not depend on color alone.
  HIG: Feedback <https://developer.apple.com/design/human-interface-guidelines/feedback> | Why: People who cannot see color, or who look away, still receive the message.
  Check@1440/390: Screenshot an error and a success state at 1440px and 390px and confirm each has a text label or icon besides its color. Sound and haptic channels are not screenshot-checkable: they need a manual audio and device test.
- [FEE-04] MUST show status feedback near the items it describes.
  HIG: Feedback <https://developer.apple.com/design/human-interface-guidelines/feedback> | Why: I can check status without leaving what I am doing.
  Check@1440/390: Screenshot a list item with status at 1440px and 390px and confirm the status indicator or count sits next to that item or in the toolbar of its screen.
- [FEE-05] MUST use alerts only for critical information.
  HIG: Feedback <https://developer.apple.com/design/human-interface-guidelines/feedback> | Why: Alerts interrupt my work, so they should only appear when the information is important.
  Check@1440/390: Screenshot the alerts shown during a normal flow at 1440px and 390px and confirm each one carries critical information.
- [FEE-06] MUST make an alert actionable when an action is possible.
  HIG: Feedback <https://developer.apple.com/design/human-interface-guidelines/feedback> | Why: An alert that offers a next step lets me resolve the problem at once.
  Check@1440/390: Screenshot an alert at 1440px and 390px and confirm it includes at least one button that resolves the problem.
- [FEE-07] MUST NOT use alerts for unimportant information or show them too often.
  HIG: Feedback <https://developer.apple.com/design/human-interface-guidelines/feedback> | Why: Frequent alerts train me to ignore them, so the important ones lose their effect.
  Check@1440/390: not screenshot-checkable: frequency of alerts across a session needs a recorded run, not a single screenshot.
- [FEE-08] MUST warn people before a task that causes unexpected and irreversible data loss.
  HIG: Feedback <https://developer.apple.com/design/human-interface-guidelines/feedback> | Why: A surprise permanent loss of my data is the worst outcome, so I need a chance to stop.
  Check@1440/390: Screenshot the confirmation shown before an irreversible destructive action at 1440px and 390px and confirm it names the data at risk.
- [FEE-09] MUST NOT warn people when data loss is the expected result of their action.
  HIG: Feedback <https://developer.apple.com/design/human-interface-guidelines/feedback> | Why: Repeated warnings for an action I chose slow me down and add noise.
  Check@1440/390: Screenshot a routine delete action that moves the item to a recoverable place at 1440px and 390px and confirm no extra warning appears.
- [FEE-10] MUST confirm completion of a significant action or task when confirmation helps.
  HIG: Feedback <https://developer.apple.com/design/human-interface-guidelines/feedback> | Why: For an important transaction, a clear success message tells me it went through.
  Check@1440/390: Screenshot the screen after a significant action such as a payment at 1440px and 390px and confirm it shows a visible success confirmation.
- [FEE-11] MUST reserve completion confirmations for activities important enough to need them.
  HIG: Feedback <https://developer.apple.com/design/human-interface-guidelines/feedback> | Why: I expect routine actions to succeed, so extra confirmations add clutter.
  Check@1440/390: Screenshot a routine successful action at 1440px and 390px and confirm no confirmation message appears.
- [FEE-12] MUST tell people when a command cannot be carried out, and explain why.
  HIG: Feedback <https://developer.apple.com/design/human-interface-guidelines/feedback> | Why: A silent failure leaves me guessing what went wrong and what to do next.
  Check@1440/390: Screenshot a request that cannot be completed, such as a missing required field, at 1440px and 390px and confirm the screen states the reason.

## File management (31 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/file-management

- [FM-01] MUST provide menu commands and keyboard shortcuts for creating and opening documents.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: I expect to create or open a file the same way I do everywhere else, from a menu or a key.
  Check@1440/390: Screenshot the app's menu bar or command list showing New and Open at 1440px, and confirm a keyboard shortcut is listed beside each; at 390px confirm the same commands are reachable from the app's menu control.
- [FM-02] MUST include a visible Add (+) control for creating a new document, even when keyboard shortcuts exist.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: I should not have to know a shortcut to start a new file.
  Check@1440/390: Screenshot the document list at 1440px and 390px and confirm a visible + control creates a new document.
- [FM-03] MUST make a custom file browser follow the file-system layout people already know from the platform's file manager.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: Familiar folders and layout let me find my files without relearning the app.
  Check@1440/390: Screenshot the custom file browser at 1440px and 390px and confirm folders are shown in a hierarchy with names and locations I can read.
- [FM-04] MUST let people browse the rest of the file system from a custom file browser, not only the folder it opens to.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: I may need a file that is outside the default folder.
  Check@1440/390: Screenshot the custom file browser at 1440px and 390px and confirm a control exists that navigates to a parent folder or other location.
- [FM-05] MUST preserve people's work unless they cancel or delete it.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: Losing edits I made is the outcome I fear most.
  Check@1440/390: not screenshot-checkable: preservation needs a run that edits a file, quits, and reopens it to confirm the edits remain.
- [FM-06] MUST NOT make people take an explicit action to save their work; save periodically while they are editing.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: I should not have to remember to press save to keep what I wrote.
  Check@1440/390: not screenshot-checkable: periodic saving needs a timed run that edits content and checks the stored file without a save action.
- [FM-07] MUST save automatically when people close a file or switch to another app.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: Leaving a document should never lose my last changes.
  Check@1440/390: not screenshot-checkable: needs a run that edits, closes or switches apps, and confirms the stored file holds the edit.
- [FM-08] MUST hide file extensions by default.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: A clean file name is easier to read when I am not managing file types.
  Check@1440/390: Screenshot a save dialog at 1440px and confirm file names show no extension by default; at 390px confirm the same.
- [FM-09] MUST let people choose to show file extensions.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: When I need the extension, I should be able to see it.
  Check@1440/390: Screenshot the same save dialog with the show-extensions option turned on at 1440px and 390px and confirm the extensions appear.
- [FM-10] MUST show the current file-extension choice in every save and open interface.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: The names I see should match the setting I chose, in every dialog.
  Check@1440/390: Screenshot one save dialog and one open dialog with the setting on and then off at 1440px and 390px and confirm both dialogs match the setting.
- [FM-11] MUST provide previews of the files the app handles so people can view them in the app.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: I want to see what a file contains before I open it.
  Check@1440/390: Screenshot a file preview for each handled file type at 1440px and 390px and confirm the content is visible.
- [FM-12] MUST provide a preview viewer so people can preview files the app cannot open, when the app lets them attach or interact with such files.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: I can check an attachment without leaving the app even if the app cannot edit it.
  Check@1440/390: Screenshot the preview of an unsupported attached file at 1440px and 390px and confirm the content is shown without an error page.
- [FM-13] MUST provide a preview generator for custom file types the app produces.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: Other tools can then show my documents, so I can find them more easily.
  Check@1440/390: not screenshot-checkable: the preview appears in another app's file list, so it needs a manual check in that app.
- [FM-14] MUST use motion sparingly, because too much motion can confuse or disorient people.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: Constant movement makes it hard for me to focus on my content.
  Check@1440/390: not screenshot-checkable: judging motion amount needs a screen recording of the animated element over time.
- [FM-15] MUST check the layout across every screen size and orientation the app supports.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: A layout that breaks on my screen size makes the app unusable for me.
  Check@1440/390: Screenshot the main file screen at 1440px and 390px, in portrait and landscape where supported, and confirm no element is cut off or overlapping.
- [FM-16] MUST list only documents that fit the current context in a file provider extension.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: A list full of files the current task cannot use wastes my time.
  Check@1440/390: Screenshot the extension's file list opened from an app that handles one file type at 1440px and 390px and confirm only that type is listed.
- [FM-17] MUST let people choose a destination when exporting or moving documents.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: I decide where my file goes, not the app.
  Check@1440/390: Screenshot the export or move screen at 1440px and 390px and confirm a destination picker is visible.
- [FM-18] MUST let people navigate to a specific destination in the directory hierarchy when the app does not store documents in a single directory.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: When files live in many folders, I need to reach the one I want.
  Check@1440/390: Screenshot the destination picker at 1440px and 390px and confirm I can move into a nested folder.
- [FM-19] MUST offer a way to add new subdirectories in the destination picker.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: I can organize a new export without leaving the flow.
  Check@1440/390: Screenshot the destination picker at 1440px and 390px and confirm a create-folder control is visible.
- [FM-20] MUST NOT add a custom top toolbar inside a file provider extension view that already has one.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: Two stacked toolbars are confusing and take space from the content I need.
  Check@1440/390: Screenshot the extension view at 1440px and 390px and confirm only one toolbar appears at the top.
- [FM-21] MUST make a custom file-opening interface convenient, with an action such as open recent.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: Reopening my last file should take one step.
  Check@1440/390: Screenshot the custom open interface at 1440px and 390px and confirm a recent-files action is visible.
- [FM-22] MUST let people select multiple documents to open at once in a custom file-opening interface.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: I can open a batch of files in one step instead of one at a time.
  Check@1440/390: Screenshot the custom open interface with two files selected at 1440px and 390px and confirm both selections show as chosen.
- [FM-23] MUST provide a save interface that lets people change a file's name, format, or location.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: I should be able to name and place my file where I want it.
  Check@1440/390: Screenshot the save interface at 1440px and 390px and confirm fields or controls for name, format, and location are visible.
- [FM-24] MUST title a new unsaved document "Untitled" until people choose a name.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: A clear placeholder name tells me the file has not been named yet.
  Check@1440/390: Screenshot a new unsaved document's title at 1440px and 390px and confirm it reads "Untitled".
- [FM-25] MUST default a save view to a logical location.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: The save dialog should start where I am likely to want the file.
  Check@1440/390: Screenshot the save view opened for a new document at 1440px and 390px and confirm the default folder shown is a sensible one.
- [FM-26] MUST give people a way to choose the file format when the app saves in more than one format.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: I need a file in the format another program accepts.
  Check@1440/390: Screenshot the save interface at 1440px and 390px and confirm a format picker lists the available formats.
- [FM-27] MUST add a custom accessory with useful settings to the save dialog when it helps the task.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: Options I need at save time stay in the same step.
  Check@1440/390: Screenshot the save dialog with its accessory at 1440px and 390px and confirm the settings are visible and labeled.
- [FM-28] MUST show an unsaved-changes indicator when autosave is off.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: When autosave is off, I need to know my work has not been stored yet.
  Check@1440/390: Screenshot a document with autosave off and unsaved edits at 1440px and 390px and confirm an unsaved-changes indicator is visible.
- [FM-29] MUST present a save prompt when people close, quit, log out, or restart with unsaved changes and autosave off.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: A prompt before closing keeps me from losing edits I did not save.
  Check@1440/390: Screenshot the close prompt shown on a document with unsaved edits and autosave off at 1440px and 390px and confirm it offers a save choice.
- [FM-30] MUST NOT show an unsaved-changes indicator when autosave is on.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: A dot would suggest I must act to keep my work, which is false when autosave is on.
  Check@1440/390: Screenshot a document with autosave on and edits pending at 1440px and 390px and confirm no unsaved-changes indicator appears.
- [FM-31] MUST remove the "Edited" title suffix as soon as the work is autosaved or explicitly saved.
  HIG: File management <https://developer.apple.com/design/human-interface-guidelines/file-management> | Why: A stale "Edited" label makes me think my saved work is still at risk.
  Check@1440/390: Screenshot the title bar with the Edited suffix before saving and again after saving at 1440px and 390px and confirm the suffix is gone after the save.

# Exclusions and persona notes

### Feedback
Apple-specific, excluded:
- Avoid an indeterminate progress indicator in a watchOS app, and tell people they will receive a notification when the process completes. | topic: Feedback | source: https://developer.apple.com/design/human-interface-guidelines/feedback | why: Apple-specific watchOS guidance about animated loading indicators on the watch display.
- Apple examples (Mail unread count in iOS and iPadOS, Apple Pay confirmation, Maps directions, Finder deleting files) and the pointers to playing-haptics, playing-audio, motion, alerts, and UIKit animation-and-haptics are Apple product references, not general rules.
Persona and journey notes:
- A person who relies on sound or haptics needs the same message to appear in another channel as well.
- A person checking status between tasks needs status near the item, not in a separate alert.
- A person about to delete or overwrite data needs one clear warning before the irreversible step, and no warning for ordinary deletes.
- A person who sees a disabled or failed action needs the reason on the same screen.

### File management
Apple-specific, excluded:
- Document launcher on iOS and iPadOS: title card with primary and secondary buttons, distinct background, accessory placement, and launcher layout. | topic: File management | source: https://developer.apple.com/design/human-interface-guidelines/file-management | why: Apple-specific launcher API and layout.
- macOS file browsing: use the default Finder file browser unless there is an important reason for a custom one. | topic: File management | source: https://developer.apple.com/design/human-interface-guidelines/file-management | why: Refers to the Finder as the platform's browser.
- macOS open panel: customizing the Open button title to match the task. | topic: File management | source: https://developer.apple.com/design/human-interface-guidelines/file-management | why: Specific to the macOS open panel.
- Finder Sync extensions: sync badges, contextual menu items, and toolbar buttons in the Finder. | topic: File management | source: https://developer.apple.com/design/human-interface-guidelines/file-management | why: Specific to Apple's Finder Sync extension point.
- macOS placement of the unsaved dot on the close button and in the Window menu, and of the Edited suffix in the title bar. | topic: File management | source: https://developer.apple.com/design/human-interface-guidelines/file-management | why: The rule's placement is macOS-specific; the underlying state rules are kept above.
- Apple product examples (Pages, Keynote, Photos, Preview, Numbers, Mail, Finder, Files), the Command-key shortcut display, and the File menu placement. | topic: File management | source: https://developer.apple.com/design/human-interface-guidelines/file-management | why: Illustrations of Apple products, not general rules.
Persona and journey notes:
- A person creating a new document expects a menu command or shortcut, and a visible + control if they do not know the shortcut.
- A person browsing files in a custom browser expects to reach folders outside the one it opens to.
- A person editing a document expects no save step, and sees an unsaved marker only when autosave is off.
- A person who wants to check an attachment the app cannot open expects a preview instead of an error.
