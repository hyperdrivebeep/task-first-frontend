Candidate catalog - evidence only; not executable requirements.

# Charting data: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/charting-data
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: afe74f5d5b869b717a0adb793b7cb618f5e466ac75981cb35ffebc3727f80b5c
Input words: 1135. Candidate rule records: 19. Exclusion blocks: 5.
Original note: 06-patterns-a-1/charting-data.md.
Adopted source-linked rules: P-27, P-28

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Charting data
URL: https://developer.apple.com/design/human-interface-guidelines/charting-data

Universal rules:
- MUST use a chart to highlight important information about a dataset and state clearly what people can learn from it. | topic: chart purpose | source: "Use a chart when you want to highlight important information about a dataset." | why: charts are visually prominent and draw attention | check: each chart has a stated takeaway that the data supports.
- MUST offer data that needs no analysis or insight in a list or table that people can scroll, search, and sort instead of a chart. | topic: chart vs. list or table | source: "Not every collection of data needs to be displayed in a chart." | why: a chart adds nothing when people only need the values | check: raw-only data is shown as a scrollable, searchable, sortable list or table.
- MUST keep a chart simple by default and let people choose when they want additional details. | topic: chart simplicity | source: "Keep a chart simple, letting people choose when they want additional details." | why: a simple default keeps the chart readable while detail stays available | check: the default view shows only the essential detail, and extra detail is opt-in.
- MUST NOT pack as much data as possible into a chart. | topic: chart density | source: "Resist the temptation to pack as much data as possible into a chart." | why: too much data is visually overwhelming and hides relationships | check: the chart shows only the series and marks needed for its takeaway.
- MUST let people reveal more data gradually when a chart has a lot of data or functionality, such as by detail level or by data subset. | topic: progressive disclosure | source: "consider giving people a way to reveal it gradually." | why: keeps the default view simple while still supporting deep analysis | check: a control exists to change detail level or subset.
- MUST make every chart accessible. | topic: chart accessibility | source: "Make every chart in your app accessible." | why: a chart communicates visually and would otherwise exclude some people | check: every chart in the app has accessibility support.
- MUST provide accessibility labels that describe chart values and chart components. | topic: chart accessibility labels | source: "provide both accessibility labels that describe chart values and components" | why: screen reader users need the values and structure of the chart | check: each value and each component of the chart has a label.
- MUST provide accessibility elements that let people interact with the chart. | topic: chart accessibility elements | source: "and accessibility elements that help people interact with the chart." | why: people must be able to explore the chart with assistive technology | check: the chart exposes navigable accessibility elements for its data points or series.
- MUST NOT treat a descriptive headline or summary as a replacement for accessibility labels. | topic: chart accessibility labels vs. summary text | source: "it doesn't take the place of accessibility labels." | why: a summary gives an overview but does not describe each value | check: summary text is present in addition to, not instead of, the labels.
- MUST prefer common chart types, such as bar charts and line charts, when they fit the data. | topic: chart type selection | source: "In general, prefer using common chart types." | why: people already know how to read familiar chart types | check: the chart type is a common one, or the choice of a novel type is justified by the data.
- MUST help people learn how to interpret a chart when it presents data in a novel way. | topic: novel chart teaching | source: "If you need to create a chart that presents data in a novel way, help people learn how to interpret the chart." | why: an unfamiliar encoding is unreadable without guidance | check: a novel chart includes an explanation, guide, or introduction of its encoding.
- MUST examine the data at several levels (macro totals or averages, mid-level subsets, and individual data points) to find details worth showing. | topic: data perspectives | source: "Examine the data from multiple levels or perspectives to find details you can display to enhance the chart." | why: different levels answer different questions and invite engagement | check: the chart design has been reviewed for summary, subset, and individual-point views.
- MUST add descriptive text, such as titles, subtitles, and annotations, that emphasizes the most important information and any actionable takeaway. | topic: descriptive text | source: "Descriptive text titles, subtitles, and annotations help emphasize the most important information in a chart" | why: text tells people what to notice without interpreting the marks themselves | check: the chart has a title, and its key values or takeaways are annotated.
- MUST keep the descriptive text, labels, and annotations readable. | topic: chart readability | source: "you always want to make it easy for people to read a chart's details and descriptive text — like labels and annotations" | why: unreadable labels make the chart unusable | check: labels and annotations are legible at the size the chart is shown.
- MUST size a chart to its functionality, topic, and level of detail, large enough for its labels and annotations and for the interactivity it supports. | topic: chart size | source: "Match the size of a chart to its functionality, topic, and level of detail." | why: a chart that is too small hides details and a chart that is too large wastes space | check: the chart size fits its labels, annotations, and interactions.
- MUST keep chart type and visual style consistent across multiple charts that serve a similar purpose. | topic: consistency across charts | source: "Prefer consistency across multiple charts, deviating only when you need to highlight differences." | why: a consistent visual approach lets people transfer what they learn from one chart to another | check: charts with the same purpose share chart type and style.
- MUST NOT use a different chart type or style for charts with a similar purpose unless the difference is meaningful. | topic: unrelated-looking charts | source: "you generally don't want to imply that the charts are unrelated by using a different type or style for each one." | why: differing styles imply unrelated data | check: any style difference between similar charts highlights a real difference in the data.
- MUST use one chart type and consistent colors, annotations, layouts, and descriptive text across multiple charts that show the same dataset. | topic: continuity for the same dataset | source: "Maintain continuity among multiple charts that use the same data." | why: consistent styling signals that the dataset is unchanged | check: charts of one dataset share chart type, colors, annotations, layout, and descriptive text.
- MUST keep the expanded version of a chart in the same style, colors, marks, and annotations as its preview. | topic: preview and expanded chart continuity | source: "the expanded version uses the same style, colors, marks, and annotations to strengthen the relationship between the versions." | why: a changed expanded view breaks the link to the preview | check: a preview chart and its expanded version match in style, colors, marks, and annotations.

Apple-specific (excluded):
- Activity rings animated when a Watch pairs with iPhone (Apple hardware and Apple app).
- Weather hourly forecast summary text (Apple app).
- Health Trends screen small and expanded charts (Apple app).
- Reference to the Apple "charts" component and the Apple developer Charts documentation (Apple's own components).
- "Platform considerations" section: no additional considerations for iOS, iPadOS, macOS, tvOS, visionOS, or watchOS (Apple platforms only).

Persona and journey notes:
- A small chart can give glanceable information about one item or preview a larger chart that people can reveal in another view.
- For a complex interactive chart, you might offer several versions, each with more functionality than the last, so people learn it step by step.
- Chart detail reveal supports people who want different levels of detail or subsets of the data.

COVERAGE: full page read; 19 universal rules extracted; 5 Apple-specific items excluded; no platform rules stated beyond Apple exclusions.
