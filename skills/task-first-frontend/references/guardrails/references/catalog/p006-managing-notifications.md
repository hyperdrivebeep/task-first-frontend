Legacy candidates - not requirements; use pages/ and the curated rule files.

# HIG extraction catalog: p006-managing-notifications

Raw extraction by a note-taking child (claude-haiku-5-5, subscription) on 2026-11-03 KST from the locally saved HIG pages. Curated guardrails in ../rules-*.md are chosen from here.

## Managing notifications (14 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/managing-notifications

- [MN-01] Get people's permission before sending any notification.
  HIG: Managing notifications <https://developer.apple.com/design/human-interface-guidelines/managing-notifications> | Why: 
  Check@1440/390: 
- [MN-02] Identify the types of notifications your product can send before deciding how each type behaves.
  HIG: Managing notifications <https://developer.apple.com/design/human-interface-guidelines/managing-notifications> | Why: 
  Check@1440/390: 
- [MN-03] Assign an urgency level to every notification you send.
  HIG: Managing notifications <https://developer.apple.com/design/human-interface-guidelines/managing-notifications> | Why: 
  Check@1440/390: 
- [MN-04] Represent the urgency of each notification accurately, because people can turn off all notifications and an inflated urgency level costs trust.
  HIG: Managing notifications <https://developer.apple.com/design/human-interface-guidelines/managing-notifications> | Why: 
  Check@1440/390: 
- [MN-05] Do not use a high urgency level to interrupt people with low-priority information.
  HIG: Managing notifications <https://developer.apple.com/design/human-interface-guidelines/managing-notifications> | Why: 
  Check@1440/390: 
- [MN-06] Use the urgency tier that breaks through quiet or scheduled-delivery settings, but is not the most severe tier, only for information that is relevant in the moment.
  HIG: Managing notifications <https://developer.apple.com/design/human-interface-guidelines/managing-notifications> | Why: 
  Check@1440/390: 
- [MN-07] Use that same tier only for an event that is happening now or will happen within the next hour.
  HIG: Managing notifications <https://developer.apple.com/design/human-interface-guidelines/managing-notifications> | Why: 
  Check@1440/390: 
- [MN-08] Use the most severe urgency tier only for urgent health and safety information that directly impacts the person and demands immediate attention; such notifications are extremely rare.
  HIG: Managing notifications <https://developer.apple.com/design/human-interface-guidelines/managing-notifications> | Why: 
  Check@1440/390: 
- [MN-09] Never send a marketing or promotional notification at an urgency level that can break through a person's quiet or scheduled-delivery settings.
  HIG: Managing notifications <https://developer.apple.com/design/human-interface-guidelines/managing-notifications> | Why: 
  Check@1440/390: 
- [MN-10] Send marketing or promotional notifications only after people explicitly agree to receive them.
  HIG: Managing notifications <https://developer.apple.com/design/human-interface-guidelines/managing-notifications> | Why: 
  Check@1440/390: 
- [MN-11] Before requesting marketing permission, show an alert, modal view, or other interface that describes the types of information you will send.
  HIG: Managing notifications <https://developer.apple.com/design/human-interface-guidelines/managing-notifications> | Why: 
  Check@1440/390: 
- [MN-12] The marketing permission interface must give people a clear way to opt in or opt out.
  HIG: Managing notifications <https://developer.apple.com/design/human-interface-guidelines/managing-notifications> | Why: 
  Check@1440/390: 
- [MN-13] Provide an in-app settings screen that lets people change their notification choice, for both informational and marketing notifications.
  HIG: Managing notifications <https://developer.apple.com/design/human-interface-guidelines/managing-notifications> | Why: 
  Check@1440/390: 
- [MN-14] Make sure people can manage their notification settings within your app.
  HIG: Managing notifications <https://developer.apple.com/design/human-interface-guidelines/managing-notifications> | Why: 
  Check@1440/390: 

# Exclusions and persona notes

### Managing notifications
Apple-specific, excluded:
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
