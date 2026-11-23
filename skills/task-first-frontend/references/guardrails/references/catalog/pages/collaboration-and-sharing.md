Candidate catalog - evidence only; not executable requirements.

# Collaboration and sharing: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/collaboration-and-sharing
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 0b103597e22b9fceca3bcabfb85216f9e04003ff804c1a65af8c572773e89474
Input words: 956. Candidate rule records: 14. Exclusion blocks: 14.
Original note: 06-patterns-a-1/collaboration-and-sharing.md.
Adopted source-linked rules: P-22

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Collaboration and sharing
URL: https://developer.apple.com/design/human-interface-guidelines/collaboration-and-sharing

Universal rules:
- MUST place the share control in a convenient, visible location, such as a toolbar, so people can easily start sharing or collaborating. | topic: share control placement | source: "Place the Share button in a convenient location, like a toolbar, to make it easy for people to start sharing or collaborating." | why: sharing is only used if it is easy to find | check: the share control is reachable from a primary toolbar or equivalent visible location.
- MUST write succinct phrases that summarize each sharing permission the app supports. | topic: permission summary text | source: "Write succinct phrases that summarize the sharing permissions you support." | why: people need to understand access at a glance | check: each permission summary is a short phrase stating who can access and what they can do.
- MUST provide a set of simple sharing options that streamline collaboration setup. | topic: sharing options | source: "Provide a set of simple sharing options that streamline collaboration setup." | why: a long setup flow discourages collaboration | check: starting a collaboration needs only a few steps and a small number of choices.
- MUST keep the number of custom sharing choices to a minimum. | topic: custom sharing choices | source: "Keep the number of custom choices to a minimum" | why: each extra choice adds decisions people must make | check: the custom sharing options list contains only choices the collaboration functionality needs.
- MUST group custom sharing choices so people understand them at a glance. | topic: grouping of sharing choices | source: "and group them in ways that help people understand them at a glance." | why: grouped choices are easier to scan than a flat list | check: related choices, such as access and editing rights, are shown together.
- MUST show a visible collaboration status indicator, placed next to the share control, as soon as collaboration starts. | topic: collaboration status indicator | source: "Prominently display the Collaboration button as soon as collaboration starts." | why: the indicator reminds people that content is shared and shows who is sharing it | check: once collaboration starts, the content shows a prominent indicator of the shared state and the sharing participants. Note: the source names an Apple component; only the concept is kept here.
- MUST offer custom actions in the collaboration popover only when they are needed. | topic: custom collaboration actions | source: "Provide custom actions in the collaboration popover only if needed." | why: unneeded actions add clutter to a secondary surface | check: every custom action in the collaboration popover serves an active collaboration need.
- MUST NOT overwhelm people with too much information in the collaboration popover. | topic: collaboration popover density | source: "You don't want to overwhelm people with too much information" | why: the popover is a quick-access surface, not a full screen | check: the popover shows only the most essential items people need while collaborating.
- MUST customize the title of the collaboration-management button when that makes sense for the app, instead of keeping a generic default label. | topic: management button title | source: "If it makes sense in your app, customize the title of the modal view's collaboration-management button." | why: a title that names the app's content or action is clearer than a generic label | check: the management button label fits the app's terminology when customization is appropriate.
- MUST provide a collaboration-management view where people can change collaboration settings and add or remove collaborators. | topic: collaboration management | source: "reveal the collaboration-management view where they can change settings and add or remove collaborators." | why: people must be able to change who is in a collaboration | check: the app offers a view to change settings and manage membership.
- MUST offer the types of file sharing the app supports in its share interface. | topic: file sharing types | source: "customize the share sheet or sharing popover to offer the types of file sharing your app supports." | why: the share interface should match what the app can actually share | check: each file-sharing type the app supports appears in its share interface, and no unsupported type appears.
- MUST let people send a copy of shared content when the app supports it, by including the file or a plain-text representation of it in the collaboration payload. | topic: send-copy support | source: "For custom collaboration, you can support 'send copy' functionality in the share sheet by including a file — or a plain text representation of it — in your collaboration object." | why: some people need a standalone copy instead of live collaboration | check: a send-copy action produces a file or plain-text copy of the shared content.
- MUST post collaboration event notifications for the event types the app supports, such as content changes, membership changes, and mentions of a participant. | topic: collaboration event notifications | source: "Consider posting collaboration event notifications... Choose the type of event that occurred — such as a change in the content or the collaboration membership, or the mention of a participant." | why: people need to know when others change or mention something in shared content | check: each notification is tied to a specific event type that occurred. Note: the source says "consider"; this rule applies when the app posts such notifications.
- MUST include a link in each collaboration event notification that opens the relevant view in the app. | topic: notification links | source: "include a universal link people can use to open the relevant view in your app." | why: a notification without a link forces people to search for the change | check: each notification opens the view where its event happened. Note: the source names an Apple link type; only the concept (a link to the relevant view) is kept here.

Apple-specific (excluded):
- Messages app: system sharing and notifications through Messages, and Messages conversations as a drop target.
- Share sheet and sharing popover as Apple system components, including the iOS 16, iPadOS 16, and macOS 13 versions.
- Collaboration button as an Apple component, and its default "Manage Shared File" title.
- ShareLink and the SwiftUI share link API.
- CloudKit, iCloud Drive, and CloudKit sharing management view provided by the system.
- Universal links as an Apple OS feature.
- SharePlay for real-time activities.
- FaceTime and communication buttons inside the Collaboration popover.
- SWHighlightEvent and SharedWithYou as Apple developer APIs.
- visionOS: Shared Space, Full Space, and system screen streaming.
- watchOS: ShareLink usage.
- tvOS: collaboration not available.
- Platform considerations sections and change log entries.
- The Notes app example.

Persona and journey notes:
- People start collaboration from a share control, then use a permission summary to define who can access and edit the content.
- After collaboration starts, people can see who is sharing, communicate with collaborators, use custom actions, and manage the shared content from one popover.
- Collaborators are notified when someone mentions them, changes content, or joins or leaves, and the notification opens the relevant view.

COVERAGE: full page read (original read and full re-read after compaction, toolu_01YcE6RWqNjqjHGtBMP2SQ44); 13 universal rules extracted; Apple-specific items excluded; 2 rules keep only the concept of an Apple-named component or link type (status indicator, notification link); event-notification rule notes the source's "consider" wording.
