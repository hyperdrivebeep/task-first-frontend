Candidate catalog - evidence only; not executable requirements.

# Managing notifications: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/managing-notifications
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 366bf89537d0325984ff7f1644e5171c39d2b8a66f89e6befc2a80a7e949e331
Input words: 1026. Candidate rule records: 14. Exclusion blocks: 13.
Original note: p006-managing-notifications/managing-notifications.md.
Adopted source-linked rules: P-20

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Managing notifications

URL: https://developer.apple.com/design/human-interface-guidelines/managing-notifications

Universal rules:
1. Get people's permission before sending any notification.
2. Identify the types of notifications your product can send before deciding how each type behaves.
3. Assign an urgency level to every notification you send.
4. Represent the urgency of each notification accurately, because people can turn off all notifications and an inflated urgency level costs trust.
5. Do not use a high urgency level to interrupt people with low-priority information.
6. Use the urgency tier that breaks through quiet or scheduled-delivery settings, but is not the most severe tier, only for information that is relevant in the moment.
7. Use that same tier only for an event that is happening now or will happen within the next hour.
8. Use the most severe urgency tier only for urgent health and safety information that directly impacts the person and demands immediate attention; such notifications are extremely rare.
9. Never send a marketing or promotional notification at an urgency level that can break through a person's quiet or scheduled-delivery settings.
10. Send marketing or promotional notifications only after people explicitly agree to receive them.
11. Before requesting marketing permission, show an alert, modal view, or other interface that describes the types of information you will send.
12. The marketing permission interface must give people a clear way to opt in or opt out.
13. Provide an in-app settings screen that lets people change their notification choice, for both informational and marketing notifications.
14. Make sure people can manage their notification settings within your app.

Apple-specific (excluded):
- Focus: setting up a Focus, Focus filtering, and which contacts and apps may break through a Focus.
- Delivery scheduling and scheduled-delivery summaries as an OS feature.
- Communication notifications, SiriKit intents, and Siri customization of notification behavior.
- System-defined interruption level names (Passive, Active, Time Sensitive, Critical) and their behavior table.
- The Critical notification entitlement.
- Ring/Silent switch behavior on iPhone and iPad.
- The OS-level prompt that describes Time Sensitive notifications the first time one arrives, and the periodic system review of Time Sensitive notifications.
- The OS-level "silence all notifications" setting and government alerts in some locales.
- The note that a Focus-delayed notification is still available as soon as it arrives.
- watchOS: per-notification options (Mute 1 Hour, Turn off Time Sensitive) and Apple Watch notification settings in the Apple Watch app.
- Developer references: INSendMessageIntent, UNNotificationContentProviding, UNNotificationInterruptionLevel, UserNotifications, settings.
- Platform considerations section: no additional considerations for iOS, iPadOS, macOS, tvOS, or visionOS.
- Related link to privacy (Apple guideline page, not a rule on this page).

Persona and journey notes:
- People want notifications about things they care about, but they do not always want to be interrupted.
- People can change their notification permission decision in settings at any time.
- People can turn off all notifications, so urgency levels must be realistic.
- People may agree to marketing notifications from an app and still expect those notifications never to interrupt them during quiet periods.
- People who use a subscription app might welcome an offer to subscribe; game players might welcome a special offer tied to a live event.

COVERAGE:
- Read: managing-notifications.md, read in full (1 of 1 page).
- Sections covered: intro, Integrating with Focus, Best practices, Sending marketing notifications, Platform considerations, watchOS, Resources.
- Universal rules: 14.
