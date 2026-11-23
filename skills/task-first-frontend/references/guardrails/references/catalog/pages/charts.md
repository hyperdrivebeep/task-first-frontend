Candidate catalog - evidence only; not executable requirements.

# Charts: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/charts
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 133cf620f8839f0949a984585239e305aefbad939041a873ca024496c9e58f6d
Input words: 3130. Candidate rule records: 34. Exclusion blocks: 7.
Original note: p031-charts/charts.md.
Adopted source-linked rules: C-52

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Charts
URL: https://developer.apple.com/design/human-interface-guidelines/charts

Universal rules:
- MUST state the chart's purpose in a title or description that people read before they examine the marks. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: people need context before they examine details. | check: desktop 1440px and mobile 390px - a title or description sits above the plot area at both widths.
- MUST summarize the chart's main message in a visible title or subtitle. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: people grasp key information quickly. | check: desktop 1440px and mobile 390px - the main-message text is visible without opening any detail at both widths.
- MUST NOT require interaction to reveal critical information. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: many people will never interact with the chart. | check: desktop 1440px and mobile 390px - critical values are visible in the static screen at both widths.
- MUST use bar marks to compare values across categories or to show parts of a whole. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: bars support category comparison and part-to-whole reading. | check: desktop 1440px and mobile 390px - the category comparison uses bars at both widths.
- MUST use line marks to show how values change over time. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: the slope of a line reveals change and trend. | check: desktop 1440px and mobile 390px - a time series is drawn as one connected line at both widths.
- MUST use point marks to show how two properties relate or to reveal outliers and clusters. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: individual values stay distinct and inspectable. | check: desktop 1440px and mobile 390px - each value is a distinct point at both widths.
- MUST use a fixed axis range when the minimum and maximum values are meaningful for all possible data values. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: fixed bounds such as 0% and 100% keep a stable meaning. | check: not screenshot-checkable: the choice depends on the range of possible data values, not on the rendered layout.
- MUST use a dynamic axis range when values vary widely and the marks should fill the plot area. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: the largest value stays close to the top of the chart. | check: desktop 1440px and mobile 390px - the largest value sits near the top edge of the plot area at both widths.
- MUST choose the axis lower bound based on the mark type and the chart's use. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: the same bound helps or hurts comparison depending on the mark. | check: not screenshot-checkable: the choice depends on the design intent of the data, not on the rendered layout.
- MUST NOT anchor the axis at zero when meaningful differences sit far from zero. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: a zero baseline can hide those differences. | check: not screenshot-checkable: depends on the value distribution of the data.
- MUST use familiar tick and grid-line sequences, such as 0, 5, 10, instead of uncommon intervals such as 1, 6, 11. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: people see a common interval at a glance. | check: desktop 1440px and mobile 390px - tick labels follow a common step at both widths.
- MUST NOT draw so many grid lines that they distract from the data. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: too many lines overwhelm the marks. | check: desktop 1440px and mobile 390px - grid lines stay visually lighter than the marks at both widths.
- MUST NOT draw so few grid lines that a mark's value becomes hard to estimate. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: grid lines let people estimate values away from an axis. | check: desktop 1440px and mobile 390px - a reader can estimate mark values from the visible grid lines at both widths.
- MUST match grid-line density and visual weight to the chart's context and the interactions it supports. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: interactive inspection needs fewer and lighter grid lines. | check: not screenshot-checkable: depends on which interactions and tasks the app supports.
- MUST make the data the most visually prominent element, with descriptions and axes supporting it without competing. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: the visual hierarchy should follow relative importance. | check: desktop 1440px and mobile 390px - the marks are the strongest visual element at both widths.
- MUST maximize the plot-area width in a compact layout. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: a wider plot area gives enough room to examine the chart. | check: desktop 1440px and mobile 390px - the plot area spans nearly the full content width at mobile 390px.
- MUST keep vertical-axis labels as short as possible without losing clarity. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: short labels leave room for the important data. | check: desktop 1440px and mobile 390px - vertical-axis labels fit without truncation at both widths.
- MUST NOT rely on color alone to tell data apart or to convey essential information. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: some people cannot discern colors. | check: desktop 1440px and mobile 390px - the series remain distinguishable in a grayscale capture at both widths.
- MUST add visual separators between adjacent stacked marks that use different colors. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: separators help people tell individual marks apart. | check: desktop 1440px and mobile 390px - a visible gap or line separates stacked segments at both widths.
- MUST add a legend that explains any color or shape used to denote value categories. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: a legend describes properties that position does not show. | check: desktop 1440px and mobile 390px - the legend is visible next to the chart at both widths.
- MUST align the chart's leading edge with the leading edge of other views on the same screen. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: a shared leading edge keeps the screen clean. | check: desktop 1440px and mobile 390px - the chart's left edge matches the left edge of adjacent content at both widths.
- MUST provide an accessibility label for each important or interactive chart element, or for a group of marks when a label per mark adds nothing. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: a chart needs more than one label, unlike an image. | check: not screenshot-checkable: accessibility labels are read by assistive technology and are not visible in a screenshot.
- MUST include context such as date or location in each value's accessibility label, not only the raw value. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: a bare value is rarely enough to understand. | check: not screenshot-checkable: a text-content check on the labels.
- MUST NOT use subjective terms such as rapidly, gradually, or almost in data descriptions. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: actual values let people form their own interpretation. | check: not screenshot-checkable: a text-content check on the descriptions.
- MUST write dates and units unambiguously, such as "June 6" and "60 minutes", not "6/6" or "60m". | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: abbreviations and numeric dates are ambiguous. | check: not screenshot-checkable: a text-content check on the descriptions.
- MUST describe what each data series represents rather than the colors that show it. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: color descriptions add unnecessary and distracting information. | check: not screenshot-checkable: a text-content check on the labels.
- MUST refer to each axis the same way and in the same order throughout the app's descriptions. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: consistency reduces the time needed to find the relevant axis. | check: not screenshot-checkable: a text-content check across the app's descriptions.
- MUST hide visible axis and tick labels from assistive technologies when accessibility labels already convey their values. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: the values reach assistive technology through accessibility labels. | check: not screenshot-checkable: depends on the accessibility tree, not the visual layout.
- MUST give a text overview of the chart type, what each axis represents, and the upper and lower axis bounds when no other chart summary is provided. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: people need the chart's structure to interpret it. | check: not screenshot-checkable: depends on the text summary exposed to assistive technology.
- MUST make an interactive chart navigable by keyboard alone in a logical, predictable order. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: default focus order can jump back and forth across the chart. | check: not screenshot-checkable: depends on focus order at runtime.
- MUST let keyboard users move focus among subsets of values when the dataset is very large. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: stepping through every data point is impractical for large datasets. | check: not screenshot-checkable: depends on focus behavior at runtime.
- MUST NOT signal changes to marks or axes with animation alone. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: people who turn off animations would miss the change. | check: not screenshot-checkable: depends on runtime behavior with animations on and off.
- MUST expand the hit target to the whole plot area when individual marks are too small to target. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: small marks are hard to hit with a finger or pointer. | check: not screenshot-checkable: depends on pointer and touch hit testing at runtime.
- MUST make every chart accessible to everyone, regardless of how they perceive content. | topic: Charts | source: https://developer.apple.com/design/human-interface-guidelines/charts | why: charts are infographics and need full accessibility. | check: not screenshot-checkable: an overarching requirement verified through the accessibility rules above.

Apple-specific (excluded):
- VoiceOver and Audio Graphs: Apple OS accessibility features.
- Swift Charts default accessibility elements and accessibilityRespondsToUserInteraction(_:): Apple framework and API.
- Switch Control and full keyboard access: Apple OS input features.
- Notification (UIKit) and Notification (AppKit): Apple frameworks.
- Health Steps chart, Health blood-pressure point marks, Stocks, Weather, Maps, and Heart Rate in watchOS: Apple's own apps.
- watchOS guidance to avoid complex chart interactions: Apple OS platform guidance.
- Creating-a-chart-using-Swift-Charts, charting-data, and color#Inclusive-color cross-references: Apple developer docs.

Persona and journey notes:
- Persona: people who use assistive technology. Journey: they rely on the title and descriptions to decide whether to explore the chart.
- Persona: people with certain cognitive disabilities. Journey: they rely on descriptions to grasp the purpose and main message before details.
- Persona: people with reduced motor control. Journey: they need a larger hit area to scrub across values.
- Persona: people who turn off animations. Journey: they must still learn about changes through non-animated cues.
- Persona: people who cannot discern colors. Journey: they rely on shapes, legends, and separators.
- Persona: people using keyboard or switch-style input. Journey: they move through values in a predictable order.

COVERAGE:
- Pages read: 1 (charts), input read in full.
- Sections checked: Anatomy (definitions only, no MUST rules), Marks, Axes, Descriptive content, Best practices, Color, Enhancing the accessibility of a chart, Platform considerations, Resources, Change log (no rules).
- Universal rules: 34.
- Apple-specific items excluded: 7.
