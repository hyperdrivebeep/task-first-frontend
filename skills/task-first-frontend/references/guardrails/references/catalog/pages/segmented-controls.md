Candidate catalog - evidence only; not executable requirements.

# Segmented controls: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/segmented-controls
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 79b8f8ea45bc49bc7240098ec489d4e61825df09f3eb073876c3744dc789435f
Input words: 904. Candidate rule records: 10. Exclusion blocks: 3.
Original note: p080-segmented-controls/segmented-controls.md.
Adopted source-linked rules: C-41

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Segmented controls
URL: https://developer.apple.com/design/human-interface-guidelines/segmented-controls
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST group only closely related choices or actions in a segmented control. | topic: Segmented controls | source: https://developer.apple.com/design/human-interface-guidelines/segmented-controls | why: People understand what the group affects. | check: At 1440px and 390px, compare segment purposes with the object or view they control.
- MUST keep selection controls and momentary action controls distinct within a group. | topic: Segmented controls | source: https://developer.apple.com/design/human-interface-guidelines/segmented-controls | why: People can predict whether a press selects or executes. | check: Not screenshot-checkable: activate every segment and verify one consistent interaction type; capture states at 1440px and 390px.
- MUST keep the selected state clear when segments represent a choice. | topic: Segmented controls | source: https://developer.apple.com/design/human-interface-guidelines/segmented-controls | why: People know the current setting. | check: At 1440px and 390px, capture each selection and verify its visible identification.
- MUST limit segments to a readily scanned group appropriate to the available width. | topic: Segmented controls | source: https://developer.apple.com/design/human-interface-guidelines/segmented-controls | why: People avoid slow navigation through crowded choices. | check: At 1440px and 390px, check all labels fit; HIG suggests about five to seven for wide interfaces and about five on iPhone, not a universal hard cap.
- MUST keep segment widths and content footprints consistent where practical. | topic: Segmented controls | source: https://developer.apple.com/design/human-interface-guidelines/segmented-controls | why: The group reads as a balanced set of peers. | check: At 1440px and 390px, compare widths and label/icon occupancy.
- MUST use a consistent text or image label treatment within one segmented group. | topic: Segmented controls | source: https://developer.apple.com/design/human-interface-guidelines/segmented-controls | why: Mixed treatments do not obscure peer relationships. | check: At 1440px and 390px, inspect all segment labels together.
- MUST use nouns or noun phrases to label segmented choices. | topic: Segmented controls | source: https://developer.apple.com/design/human-interface-guidelines/segmented-controls | why: The label identifies what is selected. | check: At 1440px and 390px, read every choice label.
- MUST distinguish related subview switches from navigation to separate application sections. | topic: Segmented controls | source: https://developer.apple.com/design/human-interface-guidelines/segmented-controls | why: People understand the navigation hierarchy. | check: At 1440px and 390px, compare segment destinations with the main navigation.
- MUST explain ambiguous icon segments with descriptive labels or tooltips. | topic: Segmented controls | source: https://developer.apple.com/design/human-interface-guidelines/segmented-controls | why: People can identify the action or choice. | check: At 1440px and 390px, capture visible labels and pointer/focus tooltips; confirm accessible descriptions separately.
- MUST separate focus-activated segments from nearby focusable controls enough to avoid accidental changes. | topic: Segmented controls | source: https://developer.apple.com/design/human-interface-guidelines/segmented-controls | why: Remote-style navigation does not select an unintended option. | check: Not screenshot-checkable: navigate adjoining controls using the actual focus input; capture focus positions at 1440px and 390px.
Apple-specific (excluded):
- macOS tab-view placement, spring loading and force-click behavior.
- tvOS split-view preference and visionOS gaze tooltip implementation.
- Apple platform availability and title-capitalization convention.
Persona and journey notes:
- A person changes related attributes, actions or subviews and needs to see selection without reopening a menu.
COVERAGE:
- segmented-controls: read, 905 words, 10 universal rules, 3 excluded
