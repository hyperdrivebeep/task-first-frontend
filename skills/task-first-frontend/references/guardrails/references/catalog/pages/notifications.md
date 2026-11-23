Candidate catalog - evidence only; not executable requirements.

# Notifications: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/notifications
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 83188f8df8fb9ed54b8af684074bf8706a5228b20e0e601b3ea4a404e4233a47
Input words: 2160. Candidate rule records: 20. Exclusion blocks: 4.
Original note: p096-notifications/notifications.md.
Adopted source-linked rules: P-21

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Notifications
URL: https://developer.apple.com/design/human-interface-guidelines/notifications
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST get consent before sending notifications. | topic: Notifications | source: https://developer.apple.com/design/human-interface-guidelines/notifications | why: People control interruptions. | check: Not screenshot-checkable: inspect permission state and attempt delivery before/after consent; capture 1440px and 390px consent states.
- MUST send concise, timely notifications containing useful information. | topic: Notifications | source: https://developer.apple.com/design/human-interface-guidelines/notifications | why: People can understand the update quickly. | check: At 1440px and 390px, read the shortest and longest real notification.
- MUST NOT repeatedly notify about the same event because someone has not responded. | topic: Notifications | source: https://developer.apple.com/design/human-interface-guidelines/notifications | why: People can respond at their convenience. | check: Not screenshot-checkable: leave an event unread and inspect emitted notification history.
- MUST offer immediate notification actions rather than instructions people must memorize for later. | topic: Notifications | source: https://developer.apple.com/design/human-interface-guidelines/notifications | why: People can finish simple tasks in context. | check: At 1440px and 390px, inspect actionable content and its controls.
- MUST show task errors in their relevant task context rather than as an unrelated notification. | topic: Notifications | source: https://developer.apple.com/design/human-interface-guidelines/notifications | why: People can identify and recover from failure. | check: At 1440px and 390px, trigger an error and capture the in-context alert or feedback.
- MUST update an active view unobtrusively when its notification event arrives. | topic: Notifications | source: https://developer.apple.com/design/human-interface-guidelines/notifications | why: People are not interrupted by information already in view. | check: Not screenshot-checkable: deliver an event while the related view is foreground; record and capture both widths.
- MUST exclude sensitive personal details from notifications visible to bystanders. | topic: Notifications | source: https://developer.apple.com/design/human-interface-guidelines/notifications | why: Private data is not exposed on shared surfaces. | check: At 1440px and 390px, inspect locked and unlocked previews using synthetic private data.
- MUST use specific short titles only when they add context. | topic: Notifications | source: https://developer.apple.com/design/human-interface-guidelines/notifications | why: The prominent line helps identify the update. | check: At 1440px and 390px, inspect title and body together.
- MUST write complete concise notification text and let the host manage truncation. | topic: Notifications | source: https://developer.apple.com/design/human-interface-guidelines/notifications | why: Content remains intelligible across surfaces. | check: At 1440px and 390px, capture long and localized messages.
- MUST provide a generic descriptive preview when detailed previews are hidden. | topic: Notifications | source: https://developer.apple.com/design/human-interface-guidelines/notifications | why: People can judge relevance without revealing private detail. | check: At 1440px and 390px, capture preview-disabled notifications.
- MUST avoid repeating identity already supplied by the notification host. | topic: Notifications | source: https://developer.apple.com/design/human-interface-guidelines/notifications | why: People see useful content rather than duplicate branding. | check: At 1440px and 390px, inspect title, icon and body.
- MUST NOT rely on notification sound to carry essential information. | topic: Notifications | source: https://developer.apple.com/design/human-interface-guidelines/notifications | why: Muted or unheard notifications remain understandable. | check: At 1440px and 390px, inspect the silent notification; test with sound disabled.
- MUST keep notification actions relevant, brief and explicit about their outcomes. | topic: Notifications | source: https://developer.apple.com/design/human-interface-guidelines/notifications | why: People can complete common tasks quickly. | check: At 1440px and 390px, capture all localized action labels and their context.
- MUST avoid a redundant action whose only effect duplicates opening the notification. | topic: Notifications | source: https://developer.apple.com/design/human-interface-guidelines/notifications | why: People are not distracted by duplicate controls. | check: At 1440px and 390px, compare every action with tapping the notification.
- MUST provide adequate context and a distinct appearance for destructive notification actions. | topic: Notifications | source: https://developer.apple.com/design/human-interface-guidelines/notifications | why: People avoid irreversible mistakes. | check: At 1440px and 390px, inspect consequences and destructive styling before execution.
- MUST keep unread badges synchronized with content that remains unread. | topic: Notifications | source: https://developer.apple.com/design/human-interface-guidelines/notifications | why: People trust the count. | check: Not screenshot-checkable: read and clear items across surfaces; compare actual unread count with badge frames at both widths.
- MUST make essential updates discoverable inside the product when badges or brief previews are disabled or missed. | topic: Notifications | source: https://developer.apple.com/design/human-interface-guidelines/notifications | why: People do not lose critical information. | check: Not screenshot-checkable: disable badges/previews, deliver an event and open the product; capture the discoverable update at both widths.
- MUST respect a choice to disable badges rather than imitating them with custom overlays. | topic: Notifications | source: https://developer.apple.com/design/human-interface-guidelines/notifications | why: People retain their notification preferences. | check: At 1440px and 390px, capture the product after disabling badging; inspect behavior.
- MUST keep an informative static notification state when dynamic content is unavailable. | topic: Notifications | source: https://developer.apple.com/design/human-interface-guidelines/notifications | why: People can still understand an update offline. | check: At 1440px and 390px, capture a notification without network or connected companion device.
- MUST prioritize the most useful nondestructive action when a shortcut invokes the first eligible action. | topic: Notifications | source: https://developer.apple.com/design/human-interface-guidelines/notifications | why: The shortcut performs an expected safe response. | check: At 1440px and 390px, inspect action order and test the shortcut separately.
Apple-specific (excluded):
- Apple system notification title/icon placement, title casing and SF Symbols.
- System badge allowed content and Notification Center zero-count clearing semantics.
- watchOS short/long looks, sash styling, four-action limit and double-tap hardware.
- UserNotifications/SwiftUI/SpriteKit/SceneKit APIs and device support.
Persona and journey notes:
- People receive updates away from the app, may ignore them, hide previews or act without opening the full app.
COVERAGE:
- notifications: read, 2161 words, 20 universal rules, 4 excluded
