Candidate catalog - evidence only; not executable requirements.

# Complications: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/complications
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra child.
Snapshot SHA-256: 47e61f0600bc9cc4be7a211b6c0d8846492863506a3c53550ce4ff715a573930
Input words: 3441. Candidate rule records: 25. Exclusion blocks: 10.
Original note: p094-complications/complications.md.
Adopted source-linked rules: T-04

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Complications
URL: https://developer.apple.com/design/human-interface-guidelines/complications
Reader: Astra child, 2026-11-04 KST

Universal rules:
- MUST identify the essential, relevant information people want to see at a glance when designing a compact information surface. | topic: Complications | source: https://developer.apple.com/design/human-interface-guidelines/complications | why: a small persistent surface earns its space by answering a useful question quickly | check: 1440px and 390px screenshots of the compact surface show the identified essential information without requiring the full app to be visible.
- MUST keep dynamic information on a glanceable surface feeling current rather than rely on a static launcher with no meaningful data. | topic: Complications | source: https://developer.apple.com/design/human-interface-guidelines/complications | why: people can trust the surface for timely information | check: not screenshot-checkable: data-freshness probe changing the underlying data and checking the displayed information at the relevant update times.
- MUST support the available compact layout families when useful content can be provided for them. | topic: Complications | source: https://developer.apple.com/design/human-interface-guidelines/complications | why: people can use the information in more of their chosen layouts | check: not screenshot-checkable: layout-availability probe enumerating supported host layouts and checking that each useful variant can be selected and populated.
- MUST provide a recognizable app image that still launches the app when a supported compact layout cannot present useful information. | topic: Complications | source: https://developer.apple.com/design/human-interface-guidelines/complications | why: the constrained placement can still offer useful access | check: not screenshot-checkable: constrained-layout fallback probe selecting the layout, checking its recognizable launcher image, and activating it to open the app.
- MUST consider multiple content variants within a compact layout family when people benefit from configuring distinct aspects of the app together. | topic: Complications | source: https://developer.apple.com/design/human-interface-guidelines/complications | why: users can build a view centered on the information they personally care about | check: not screenshot-checkable: multi-variant configuration probe placing distinct variants together and confirming that each retains its own content.
- MUST consider a preconfigured, shareable arrangement when offering a coordinated set of compact information surfaces. | topic: Complications | source: https://developer.apple.com/design/human-interface-guidelines/complications | why: people can begin using a useful collection without configuring every component | check: not screenshot-checkable: preset-adoption probe applying the shared arrangement and checking that the intended collection is usable without further configuration.
- MUST give each compact information variant a deep link to its most relevant area rather than send every variant to the same generic destination. | topic: Complications | source: https://developer.apple.com/design/human-interface-guidelines/complications | why: people can continue directly from the information that attracted their attention | check: not screenshot-checkable: variant-destination probe activating every variant and matching the destination to its displayed content.
- MUST help people prevent sensitive information on an always-visible surface from being seen by others. | topic: Complications | source: https://developer.apple.com/design/human-interface-guidelines/complications | why: convenient glanceable access does not expose private information unnecessarily | check: not screenshot-checkable: bystander-privacy probe enabling the available privacy protection and checking the always-visible state for sensitive content.
- MUST time displayed information according to when that particular data becomes useful, such as showing preparation information before an event and forecasts for their applicable time. | topic: Complications | source: https://developer.apple.com/design/human-interface-guidelines/complications | why: the surface answers the user's current need rather than merely showing the next stored record | check: not screenshot-checkable: timeline-boundary probe advancing a controlled clock across the chosen display times and checking the information shown.
- MUST prioritize useful update times when a host limits refreshes or stored timeline entries. | topic: Complications | source: https://developer.apple.com/design/human-interface-guidelines/complications | why: limited update capacity is spent on the information changes that matter | check: not screenshot-checkable: update-budget probe replaying the planned timeline under the host's actual limits and verifying that useful entries remain available.
- MUST use a closed ring or gauge when the intended meaning is a value expressed as a portion of a whole. | topic: Complications | source: https://developer.apple.com/design/human-interface-guidelines/complications | why: the visual form communicates completion or proportion accurately | check: 1440px and 390px screenshots show a known part-of-whole value using a closed gauge with a corresponding fill.
- MUST use an open ring or gauge when the value lies within arbitrary bounds rather than representing a percentage of a whole. | topic: Complications | source: https://developer.apple.com/design/human-interface-guidelines/complications | why: the display avoids suggesting a completion percentage where none exists | check: 1440px and 390px screenshots show an arbitrary-range value in an open gauge and place the value consistently within the defined range.
- MUST consider a segmented gauge when an app-defined range needs to convey rapidly changing values. | topic: Complications | source: https://developer.apple.com/design/human-interface-guidelines/complications | why: the representation can communicate quick changes within the meaningful range | check: not screenshot-checkable: rapid-value replay probe feeding a changing sequence through the segmented representation and checking that the displayed changes remain understandable.
- MUST preserve important information without relying on color alone, including when the surface is rendered in a single tint. | topic: Complications | source: https://developer.apple.com/design/human-interface-guidelines/complications | why: users retain the same meaning when color distinctions disappear | check: 1440px and 390px paired full-color and single-tint screenshots show that labels, shapes, positions, or other non-color cues preserve each important distinction.
- MUST design compact imagery and content to remain effective in a user-selected tinted presentation. | topic: Complications | source: https://developer.apple.com/design/human-interface-guidelines/complications | why: people can choose a preferred appearance without losing recognizable content | check: 1440px and 390px paired full-color and tinted screenshots show recognizable images and legible text and gauges in both presentations.
- MUST supply an alternative image for tinted mode when desaturating the full-color image produces a poor result. | topic: Complications | source: https://developer.apple.com/design/human-interface-guidelines/complications | why: imagery remains recognizable when its original color treatment cannot survive conversion | check: 1440px and 390px screenshots compare the problematic desaturated image with the selected tinted alternative and show preserved subject recognition.
- MUST choose line weights that remain visible at a glance and suit the image's size and complexity, especially for people in motion. | topic: Complications | source: https://developer.apple.com/design/human-interface-guidelines/complications | why: fine detail does not disappear during brief or moving viewing | check: not screenshot-checkable: in-motion glance-recognition probe presenting the actual-size compact imagery and checking recognition of its essential strokes.
- MUST provide static placeholder imagery for every supported compact variant when no live content is available. | topic: Complications | source: https://developer.apple.com/design/human-interface-guidelines/complications | why: first-use and no-content states still have a usable visual representation | check: 1440px and 390px screenshots of each variant in forced no-content and selection-preview states show its static placeholder instead of an unintended blank.
- MUST size placeholders for their actual layout rather than assume the live image and placeholder share dimensions. | topic: Complications | source: https://developer.apple.com/design/human-interface-guidelines/complications | why: no-content states fit the available space as reliably as populated states | check: 1440px and 390px paired placeholder and populated screenshots for each applicable layout show intended framing without cropping or stretching.
- MUST consider an oversized presentation when a compact surface offers a larger format for especially important information. | topic: Complications | source: https://developer.apple.com/design/human-interface-guidelines/complications | why: the most important content can take advantage of a layout designed to emphasize it | check: 1440px and 390px screenshots of the large-format variant show the selected important content using the available region effectively.
- MUST consider a larger rectangular information surface for detailed charts, graphs, or diagrams of a value or process changing over time. | topic: Complications | source: https://developer.apple.com/design/human-interface-guidelines/complications | why: time-varying detail has enough space to remain understandable | check: 1440px and 390px screenshots show the time-varying detail fitting its rectangular surface with the main data readable.
- MUST give primary chart data stronger visual contrast than supporting grid lines and labels on glanceable information surfaces. | topic: Complications | source: https://developer.apple.com/design/human-interface-guidelines/complications | why: the data stands out quickly from the chart's supporting structure | check: 1440px and 390px screenshots show primary marks visually emphasized over grid lines and secondary labels while the supporting information remains readable.
- MUST consider informative or recognizable background content when adapting a compact information surface to a contextual stack. | topic: Complications | source: https://developer.apple.com/design/human-interface-guidelines/complications | why: people can identify the item or understand its information quickly in a collection | check: 1440px and 390px screenshots of the stack show how the chosen background communicates information or identifies the item.
- MUST provide relevance information when the host can use it to surface an item at the times it is most useful. | topic: Complications | source: https://developer.apple.com/design/human-interface-guidelines/complications | why: people encounter timely information without searching for it | check: not screenshot-checkable: relevance-context probe supplying appropriate and inappropriate times or contexts and inspecting the relevance signals provided to the host.
- MUST consider a layout optimized for the contextual stack when an existing compact surface appears there. | topic: Complications | source: https://developer.apple.com/design/human-interface-guidelines/complications | why: reused information remains effective in its new presentation context | check: 1440px and 390px screenshots of the original and stack presentations show the stack version fitting its host while preserving the useful information.

Apple-specific (excluded):
- Apple Watch faces, wrist-raise presentation, complication slot counts, watchOS family availability, and earlier nongraphic styles that do not adopt the wearer's selected color.
- WidgetKit preference for watchOS 9 and later; ClockKit migration and the earlier-version complication data source protocol.
- Watch-face sharing mechanisms, Always-On Retina integration, system timeline storage and refresh machinery, and linked watchOS implementation APIs.
- WidgetRenderingMode, system grayscale/tint processing, legacy graphic-only tint applicability, and the specific recommendation of line widths generally at least two points.
- Circular: named watch faces, regular and extra-large layouts, bezel text spanning nearly 180 degrees, circular masks, every device-size image and placeholder table, and SwiftUI rounded/medium text defaults.
- Corner: named watch faces, full-color and multicolor template capabilities, circular masks, every device-size image and placeholder table, and SwiftUI rounded/semibold text defaults.
- Inline: utilitarian small and large placement rules, named watch faces, permitted content combinations and leading icon placement, and all device-size dimensions.
- Rectangular: supported template fields and multicolor text, watchOS 10 Smart Stack availability, App Intents and accessoryRectangular integration, all device-size image dimensions, automatic four-point corner radius, and SwiftUI rounded/medium text defaults.
- Legacy templates: Circular small, Modular small, Modular large, and Extra large template structures, named watch faces, all dimension and placeholder tables, maximum stack-width semantics, and the Modular large three-row capacity.
- Complications are unsupported on iOS, iPadOS, macOS, tvOS, and visionOS.

Persona and journey notes:
- A person glancing briefly or while moving needs essential current information without opening the full app.
- A person configuring a preferred layout benefits from suitable sizes, multiple app-specific information variants, and optional ready-made arrangements.
- A person selecting a variant expects its activation to continue into the corresponding detail rather than a generic app landing area.
- A person with an always-visible display needs control over bystander exposure; a person preferring tint needs meaning preserved after color conversion.
- First installation, unavailable data, and the selection carousel are placeholder journeys; placeholder and live content can use different sizes.
- Conditional transfer: layout families, shareable arrangements, timeline budgets, tinted rendering, oversized formats, and contextual stacks apply only where the target offers an equivalent capability.
- Numeric watch specifications remain excluded. The source's two-point line guidance is not converted into a web pixel minimum; its visibility rationale transfers instead.
- Ambiguity: some supplied dimension cells contain inconsistent formatting, including the Inline small 41mm flat cell and the Circular small 40mm/42mm placeholder cell. They are read and excluded without silently correcting or generalizing their numbers.
- Word-count convention: COVERAGE preserves the supplied batch count of 3442. Splitting the source on whitespace without trimming produces 3442 entries, including a trailing empty entry; trimming first gives 3441 words.
- Checks above specify future evidence. The requested 1440px and 390px screenshots assess equivalent web presentations, not physical watch legibility; no screenshots or behavior probes were executed.

COVERAGE:
- complications: read, 3442 words, 25 universal rules, 10 excluded

Source headings covered (exact text, in source order):
- Complications
- Best practices
- Visual design
- Circular
- Corner
- Inline
- Rectangular
- Legacy templates
- Circular small
- Modular small
- Modular large
- Extra large
- Platform considerations
- Resources
- Related
- Developer documentation
- Videos
- Change log
