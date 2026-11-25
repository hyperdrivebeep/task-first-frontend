Candidate catalog - evidence only; not executable requirements.

# Widgets: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/widgets
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 83370141fc503560b40d0506e87aaede1df0ae9a8d62a7a01313fa7227cc25b3
Input words: 6277. Candidate rule records: 31. Exclusion blocks: 6.
Original note: p103-widgets/widgets.md.
Adopted source-linked rules: T-05, T-06

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Widgets
URL: https://developer.apple.com/design/human-interface-guidelines/widgets
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST focus a glanceable widget on a simple purpose central to the product. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: People see useful information quickly. | check: At 1440px and 390px, identify the one purpose and remove unrelated content.
- MUST provide useful content or actions beyond repeating an app-launch icon. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: The small surface earns its place. | check: At 1440px and 390px, compare information and functionality with an ordinary launcher.
- MUST keep time-sensitive widget content fresh at a frequency matched to user need. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: People can rely on displayed information. | check: Not screenshot-checkable: compare source changes with refreshes over a representative interval.
- MUST add sizes only when each provides a useful level of information or action. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: Larger areas offer value rather than stretched content. | check: At 1440px and 390px, compare all supported size variants.
- MUST balance glanceable primary information with secondary detail. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: People can scan quickly or inspect more deeply. | check: At 1440px and 390px, inspect reading hierarchy and density.
- MUST preserve the same primary purpose across widget sizes. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: People recognize variants as the same tool. | check: At 1440px and 390px, compare small and large information priorities.
- MUST keep branding subordinate to useful content. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: Identity does not consume scarce task space. | check: At 1440px and 390px, inspect branding versus task information.
- MUST allow configuration when meaningful content depends on personal choices. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: People see the locations, items or interests relevant to them. | check: At 1440px and 390px, capture initial and configured states.
- MUST avoid requiring setup when useful content can be selected automatically. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: People can benefit immediately. | check: At 1440px and 390px, capture an unconfigured first use.
- MUST NOT reuse a widget-like appearance for an in-app element with conflicting behavior. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: Visual familiarity predicts interaction. | check: At 1440px and 390px, compare matching appearances and test each action separately.
- MUST state the benefit of signing in when authentication unlocks widget information. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: People understand why sign-in is needed. | check: At 1440px and 390px, inspect signed-out copy and signed-in value.
- MUST reveal data age when people may check more often than updates occur. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: People do not mistake stale data for current data. | check: At 1440px and 390px, capture a stale state with its last-updated indication.
- MUST keep previously available content visible during refresh when it remains useful. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: People avoid losing information behind unnecessary placeholders. | check: At 1440px and 390px, capture background refresh with existing content.
- MUST signal meaningful data changes without unnecessary animation. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: People notice relevant updates. | check: Not screenshot-checkable: record a data update and reduced-motion counterpart.
- MUST reserve complex tasks for the full application. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: A small view stays usable. | check: At 1440px and 390px, inspect simple widget actions and the linked complex workflow.
- MUST open the precise related content when a widget is activated. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: People do not have to find the item again. | check: At 1440px and 390px, capture activation and verify its destination.
- MUST keep widget targets distinguishable and easy to activate without hitting neighbors. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: People avoid accidental actions. | check: At 1440px and 390px, inspect target spacing and probe hit regions.
- MUST adapt content and assets to actual rendered sizes and scale factors. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: Scaled widgets remain legible. | check: At 1440px and 390px, capture every supported variant rather than a stretched master.
- MUST preserve readable margins and coordinate inner curves with the enclosing shape. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: Content does not crowd or collide with corners. | check: At 1440px and 390px, inspect edge spacing and nested radii.
- MUST use readable text and scalable text elements rather than rasterized words. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: Text remains sharp and available to assistive output. | check: At 1440px and 390px, capture enlarged text; inspect DOM/accessibility output separately.
- MUST convey meaning through text or symbols in addition to color. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: Monochrome and tinted versions remain understandable. | check: At 1440px and 390px, capture grayscale or supported tint variations.
- MUST keep image and color emphasis subordinate to the widget information. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: A vivid image does not overwhelm the task. | check: At 1440px and 390px, compare full-color and subdued appearances.
- MUST verify hierarchy and contrast in each supported appearance and lighting context. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: Information remains readable after customization. | check: At 1440px and 390px, capture theme, tint, dim and representative background variants.
- MUST preview the actual capabilities of each widget using real or clearly simulated content. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: People can make an informed choice. | check: At 1440px and 390px, compare gallery preview with installed behavior.
- MUST preserve recognizable structure while initial dynamic content loads. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: People recognize the widget before data arrives. | check: At 1440px and 390px, capture initial placeholders and final content.
- MUST describe the widget with a concise action-focused sentence. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: People know what it helps them do. | check: At 1440px and 390px, read the gallery description.
- MUST group size variants under a shared description when they serve the same purpose. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: People do not mistake sizes for different tools. | check: At 1440px and 390px, inspect the widget chooser.
- MUST use a real-time tracking surface rather than implying periodically refreshed information is live. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: People understand update guarantees. | check: Not screenshot-checkable: compare refresh capability with the claimed task; capture freshness labeling.
- MUST simplify distant views and enlarge essential text while preserving shared elements across distance changes. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: People can read across a room and recognize the nearby continuation. | check: Not screenshot-checkable by widths alone: inspect intended viewing distances and capture corresponding simplified/detailed variants.
- MUST consider shared-display visibility when presenting personal content. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: People understand who can see their information. | check: At 1440px and 390px, inspect shared and personal display variants with synthetic data.
- MUST choose spatial size and placement for the actual surrounding environment when a widget persists in space. | topic: Widgets | source: https://developer.apple.com/design/human-interface-guidelines/widgets | why: The widget fits a desk, wall or room without losing usability. | check: Not screenshot-checkable by widths alone: inspect the supported physical placements, distance and scale.
Apple-specific (excluded):
- WidgetKit size families, exact device/point/mm dimensions and system rendering-mode APIs.
- Apple HomeView, Smart Stack, Lock Screen and platform context tables.
- Liquid Glass, system font/SF Symbols preferences, 11-point guidance and 16/11-point margins.
- Two-second animation limit, Dynamic Type ranges and platform scaling rules.
- visionOS 75-125 percent scale, elevated/recessed mounting, paper/glass treatments and frame options.
- watchOS relevancy APIs, default background, gallery Add-button tint and red-tint StandBy behavior.
Persona and journey notes:
- People customize a quick-access surface and glance repeatedly rather than opening the full app.
- Some displays are distant, shared, dimmed or periodically refreshed; the same content needs different detail and privacy.
COVERAGE:
- widgets: read, 6278 words, 31 universal rules, 6 excluded
