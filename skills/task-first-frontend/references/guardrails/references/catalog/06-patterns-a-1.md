Legacy candidates - not requirements; use pages/ and the curated rule files.

# HIG extraction catalog: 06-patterns-a-1

Raw extraction by a note-taking child (claude-haiku-5-5, subscription) on 2026-11-03 KST from the locally saved HIG pages. Curated guardrails in ../rules-*.md are chosen from here.

## Patterns (1 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/patterns

- [PAT-01] None. This page is a topic index; it states no guideline that can become a rule.
  HIG: Patterns <https://developer.apple.com/design/human-interface-guidelines/patterns> | Why: 
  Check@1440/390: 

## Charting data (19 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/charting-data

- [CD-01] MUST use a chart to highlight important information about a dataset and state clearly what people can learn from it.
  HIG: Charting data <https://developer.apple.com/design/human-interface-guidelines/charting-data> | Why: charts are visually prominent and draw attention
  Check@1440/390: each chart has a stated takeaway that the data supports.
- [CD-02] MUST offer data that needs no analysis or insight in a list or table that people can scroll, search, and sort instead of a chart.
  HIG: Charting data <https://developer.apple.com/design/human-interface-guidelines/charting-data> | Why: a chart adds nothing when people only need the values
  Check@1440/390: raw-only data is shown as a scrollable, searchable, sortable list or table.
- [CD-03] MUST keep a chart simple by default and let people choose when they want additional details.
  HIG: Charting data <https://developer.apple.com/design/human-interface-guidelines/charting-data> | Why: a simple default keeps the chart readable while detail stays available
  Check@1440/390: the default view shows only the essential detail, and extra detail is opt-in.
- [CD-04] MUST NOT pack as much data as possible into a chart.
  HIG: Charting data <https://developer.apple.com/design/human-interface-guidelines/charting-data> | Why: too much data is visually overwhelming and hides relationships
  Check@1440/390: the chart shows only the series and marks needed for its takeaway.
- [CD-05] MUST let people reveal more data gradually when a chart has a lot of data or functionality, such as by detail level or by data subset.
  HIG: Charting data <https://developer.apple.com/design/human-interface-guidelines/charting-data> | Why: keeps the default view simple while still supporting deep analysis
  Check@1440/390: a control exists to change detail level or subset.
- [CD-06] MUST make every chart accessible.
  HIG: Charting data <https://developer.apple.com/design/human-interface-guidelines/charting-data> | Why: a chart communicates visually and would otherwise exclude some people
  Check@1440/390: every chart in the app has accessibility support.
- [CD-07] MUST provide accessibility labels that describe chart values and chart components.
  HIG: Charting data <https://developer.apple.com/design/human-interface-guidelines/charting-data> | Why: screen reader users need the values and structure of the chart
  Check@1440/390: each value and each component of the chart has a label.
- [CD-08] MUST provide accessibility elements that let people interact with the chart.
  HIG: Charting data <https://developer.apple.com/design/human-interface-guidelines/charting-data> | Why: people must be able to explore the chart with assistive technology
  Check@1440/390: the chart exposes navigable accessibility elements for its data points or series.
- [CD-09] MUST NOT treat a descriptive headline or summary as a replacement for accessibility labels.
  HIG: Charting data <https://developer.apple.com/design/human-interface-guidelines/charting-data> | Why: a summary gives an overview but does not describe each value
  Check@1440/390: summary text is present in addition to, not instead of, the labels.
- [CD-10] MUST prefer common chart types, such as bar charts and line charts, when they fit the data.
  HIG: Charting data <https://developer.apple.com/design/human-interface-guidelines/charting-data> | Why: people already know how to read familiar chart types
  Check@1440/390: the chart type is a common one, or the choice of a novel type is justified by the data.
- [CD-11] MUST help people learn how to interpret a chart when it presents data in a novel way.
  HIG: Charting data <https://developer.apple.com/design/human-interface-guidelines/charting-data> | Why: an unfamiliar encoding is unreadable without guidance
  Check@1440/390: a novel chart includes an explanation, guide, or introduction of its encoding.
- [CD-12] MUST examine the data at several levels (macro totals or averages, mid-level subsets, and individual data points) to find details worth showing.
  HIG: Charting data <https://developer.apple.com/design/human-interface-guidelines/charting-data> | Why: different levels answer different questions and invite engagement
  Check@1440/390: the chart design has been reviewed for summary, subset, and individual-point views.
- [CD-13] MUST add descriptive text, such as titles, subtitles, and annotations, that emphasizes the most important information and any actionable takeaway.
  HIG: Charting data <https://developer.apple.com/design/human-interface-guidelines/charting-data> | Why: text tells people what to notice without interpreting the marks themselves
  Check@1440/390: the chart has a title, and its key values or takeaways are annotated.
- [CD-14] MUST keep the descriptive text, labels, and annotations readable.
  HIG: Charting data <https://developer.apple.com/design/human-interface-guidelines/charting-data> | Why: unreadable labels make the chart unusable
  Check@1440/390: labels and annotations are legible at the size the chart is shown.
- [CD-15] MUST size a chart to its functionality, topic, and level of detail, large enough for its labels and annotations and for the interactivity it supports.
  HIG: Charting data <https://developer.apple.com/design/human-interface-guidelines/charting-data> | Why: a chart that is too small hides details and a chart that is too large wastes space
  Check@1440/390: the chart size fits its labels, annotations, and interactions.
- [CD-16] MUST keep chart type and visual style consistent across multiple charts that serve a similar purpose.
  HIG: Charting data <https://developer.apple.com/design/human-interface-guidelines/charting-data> | Why: a consistent visual approach lets people transfer what they learn from one chart to another
  Check@1440/390: charts with the same purpose share chart type and style.
- [CD-17] MUST NOT use a different chart type or style for charts with a similar purpose unless the difference is meaningful.
  HIG: Charting data <https://developer.apple.com/design/human-interface-guidelines/charting-data> | Why: differing styles imply unrelated data
  Check@1440/390: any style difference between similar charts highlights a real difference in the data.
- [CD-18] MUST use one chart type and consistent colors, annotations, layouts, and descriptive text across multiple charts that show the same dataset.
  HIG: Charting data <https://developer.apple.com/design/human-interface-guidelines/charting-data> | Why: consistent styling signals that the dataset is unchanged
  Check@1440/390: charts of one dataset share chart type, colors, annotations, layout, and descriptive text.
- [CD-19] MUST keep the expanded version of a chart in the same style, colors, marks, and annotations as its preview.
  HIG: Charting data <https://developer.apple.com/design/human-interface-guidelines/charting-data> | Why: a changed expanded view breaks the link to the preview
  Check@1440/390: a preview chart and its expanded version match in style, colors, marks, and annotations.

## Collaboration and sharing (14 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/collaboration-and-sharing

- [CAS-01] MUST place the share control in a convenient, visible location, such as a toolbar, so people can easily start sharing or collaborating.
  HIG: Collaboration and sharing <https://developer.apple.com/design/human-interface-guidelines/collaboration-and-sharing> | Why: sharing is only used if it is easy to find
  Check@1440/390: the share control is reachable from a primary toolbar or equivalent visible location.
- [CAS-02] MUST write succinct phrases that summarize each sharing permission the app supports.
  HIG: Collaboration and sharing <https://developer.apple.com/design/human-interface-guidelines/collaboration-and-sharing> | Why: people need to understand access at a glance
  Check@1440/390: each permission summary is a short phrase stating who can access and what they can do.
- [CAS-03] MUST provide a set of simple sharing options that streamline collaboration setup.
  HIG: Collaboration and sharing <https://developer.apple.com/design/human-interface-guidelines/collaboration-and-sharing> | Why: a long setup flow discourages collaboration
  Check@1440/390: starting a collaboration needs only a few steps and a small number of choices.
- [CAS-04] MUST keep the number of custom sharing choices to a minimum.
  HIG: Collaboration and sharing <https://developer.apple.com/design/human-interface-guidelines/collaboration-and-sharing> | Why: each extra choice adds decisions people must make
  Check@1440/390: the custom sharing options list contains only choices the collaboration functionality needs.
- [CAS-05] MUST group custom sharing choices so people understand them at a glance.
  HIG: Collaboration and sharing <https://developer.apple.com/design/human-interface-guidelines/collaboration-and-sharing> | Why: grouped choices are easier to scan than a flat list
  Check@1440/390: related choices, such as access and editing rights, are shown together.
- [CAS-06] MUST show a visible collaboration status indicator, placed next to the share control, as soon as collaboration starts.
  HIG: Collaboration and sharing <https://developer.apple.com/design/human-interface-guidelines/collaboration-and-sharing> | Why: the indicator reminds people that content is shared and shows who is sharing it
  Check@1440/390: once collaboration starts, the content shows a prominent indicator of the shared state and the sharing participants. Note: the source names an Apple component; only the concept is kept here.
- [CAS-07] MUST offer custom actions in the collaboration popover only when they are needed.
  HIG: Collaboration and sharing <https://developer.apple.com/design/human-interface-guidelines/collaboration-and-sharing> | Why: unneeded actions add clutter to a secondary surface
  Check@1440/390: every custom action in the collaboration popover serves an active collaboration need.
- [CAS-08] MUST NOT overwhelm people with too much information in the collaboration popover.
  HIG: Collaboration and sharing <https://developer.apple.com/design/human-interface-guidelines/collaboration-and-sharing> | Why: the popover is a quick-access surface, not a full screen
  Check@1440/390: the popover shows only the most essential items people need while collaborating.
- [CAS-09] MUST customize the title of the collaboration-management button when that makes sense for the app, instead of keeping a generic default label.
  HIG: Collaboration and sharing <https://developer.apple.com/design/human-interface-guidelines/collaboration-and-sharing> | Why: a title that names the app's content or action is clearer than a generic label
  Check@1440/390: the management button label fits the app's terminology when customization is appropriate.
- [CAS-10] MUST provide a collaboration-management view where people can change collaboration settings and add or remove collaborators.
  HIG: Collaboration and sharing <https://developer.apple.com/design/human-interface-guidelines/collaboration-and-sharing> | Why: people must be able to change who is in a collaboration
  Check@1440/390: the app offers a view to change settings and manage membership.
- [CAS-11] MUST offer the types of file sharing the app supports in its share interface.
  HIG: Collaboration and sharing <https://developer.apple.com/design/human-interface-guidelines/collaboration-and-sharing> | Why: the share interface should match what the app can actually share
  Check@1440/390: each file-sharing type the app supports appears in its share interface, and no unsupported type appears.
- [CAS-12] MUST let people send a copy of shared content when the app supports it, by including the file or a plain-text representation of it in the collaboration payload.
  HIG: Collaboration and sharing <https://developer.apple.com/design/human-interface-guidelines/collaboration-and-sharing> | Why: some people need a standalone copy instead of live collaboration
  Check@1440/390: a send-copy action produces a file or plain-text copy of the shared content.
- [CAS-13] MUST post collaboration event notifications for the event types the app supports, such as content changes, membership changes, and mentions of a participant.
  HIG: Collaboration and sharing <https://developer.apple.com/design/human-interface-guidelines/collaboration-and-sharing> | Why: people need to know when others change or mention something in shared content
  Check@1440/390: each notification is tied to a specific event type that occurred. Note: the source says "consider"; this rule applies when the app posts such notifications.
- [CAS-14] MUST include a link in each collaboration event notification that opens the relevant view in the app.
  HIG: Collaboration and sharing <https://developer.apple.com/design/human-interface-guidelines/collaboration-and-sharing> | Why: a notification without a link forces people to search for the change
  Check@1440/390: each notification opens the view where its event happened. Note: the source names an Apple link type; only the concept (a link to the relevant view) is kept here.

# Exclusions and persona notes

### Patterns
Apple-specific, excluded:
- The entire topic list (charting-data through workouts) is a link index to other Apple HIG pages, not guidance on this page.
Persona and journey notes:
- None stated on this page.

### Charting data
Apple-specific, excluded:
- Activity rings animated when a Watch pairs with iPhone (Apple hardware and Apple app).
- Weather hourly forecast summary text (Apple app).
- Health Trends screen small and expanded charts (Apple app).
- Reference to the Apple "charts" component and the Apple developer Charts documentation (Apple's own components).
- "Platform considerations" section: no additional considerations for iOS, iPadOS, macOS, tvOS, visionOS, or watchOS (Apple platforms only).
Persona and journey notes:
- A small chart can give glanceable information about one item or preview a larger chart that people can reveal in another view.
- For a complex interactive chart, you might offer several versions, each with more functionality than the last, so people learn it step by step.
- Chart detail reveal supports people who want different levels of detail or subsets of the data.

### Collaboration and sharing
Apple-specific, excluded:
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
