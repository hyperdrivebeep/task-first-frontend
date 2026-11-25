Candidate catalog - evidence only; not executable requirements.

# Printing: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/printing
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: a8376b13ad75ae338955116b228f7d906774a6465fc11aa56af6ced958225675
Input words: 497. Candidate rule records: 11. Exclusion blocks: 10.
Original note: p014-printing/printing.md.
Adopted source-linked rules: P-37

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Printing
URL: https://developer.apple.com/design/human-interface-guidelines/printing

Universal rules:
- MUST place the Print action in the standard location where people expect it for each platform the app runs on. | topic: Printing | source: https://developer.apple.com/design/human-interface-guidelines/printing | why: people find printing quickly instead of searching for it. | check: at 1440px the Print action is in the primary menu or toolbar; at 390px it is in the main action menu or toolbar.
- MUST dim or remove the Print action when there is nothing to print or no printer is available. | topic: Printing | source: https://developer.apple.com/design/human-interface-guidelines/printing | why: people never tap a Print action that cannot succeed. | check: at 1440px and 390px the Print action is disabled or absent when the content is empty or no printer is available.
- MUST dim or hide a custom print button whenever printing is not possible. | topic: Printing | source: https://developer.apple.com/design/human-interface-guidelines/printing | why: people are not offered a button that leads nowhere. | check: at 1440px and 390px the custom print button is disabled or hidden in the no-printer or nothing-to-print state.
- MUST present print options such as page range, number of copies, and two-sided printing only when the printer supports them. | topic: Printing | source: https://developer.apple.com/design/human-interface-guidelines/printing | why: people do not configure options that the printer will silently ignore. | check: at 1440px and 390px the option list changes between a printer that supports two-sided printing and one that does not.
- MUST make interdependencies between print options visible, such as disabling an option that conflicts with another selected option. | topic: Printing | source: https://developer.apple.com/design/human-interface-guidelines/printing | why: people understand why an option is unavailable and avoid invalid combinations. | check: at 1440px and 390px selecting a conflicting option disables the dependent option on screen.
- MUST separate advanced print options from frequently used print options. | topic: Printing | source: https://developer.apple.com/design/human-interface-guidelines/printing | why: people with common needs reach their options without scanning rare ones. | check: at 1440px and 390px the frequent options are visible by default and the advanced options are in a separate group.
- MUST hide advanced print options behind a disclosure control until people need them. | topic: Printing | source: https://developer.apple.com/design/human-interface-guidelines/printing | why: people are not distracted by rarely used settings. | check: at 1440px and 390px the advanced options are collapsed by default and expand when the disclosure control is activated.
- MUST label the advanced print options section as "Advanced Options". | topic: Printing | source: https://developer.apple.com/design/human-interface-guidelines/printing | why: people recognize the section by its name and know it is optional. | check: at 1440px and 390px the disclosure control for the advanced section reads "Advanced Options".
- MUST let people preview the effect of a print setting when that setting changes how the output looks. | topic: Printing | source: https://developer.apple.com/design/human-interface-guidelines/printing | why: people see the result before they print and waste less paper; the HIG says "consider" here, so treat this as a recommendation. | check: at 1440px and 390px changing the setting updates the preview thumbnail on screen.
- MUST keep modified print settings with the document at least until the document is closed. | topic: Printing | source: https://developer.apple.com/design/human-interface-guidelines/printing | why: people who print the same document again do not have to set everything up again; the HIG says "consider" here, so treat this as a recommendation. | check: not screenshot-checkable: requires changing settings, closing the document, reopening it, and confirming the settings persist.
- MUST NOT build a custom version of a print option that the platform already provides. | topic: Printing | source: https://developer.apple.com/design/human-interface-guidelines/printing | why: people get the same behavior and familiar controls instead of a second, different version. | check: not screenshot-checkable: requires reviewing the print settings list in code against the platform's built-in options.

Apple-specific (excluded):
- Custom print panel category with app-specific options is a macOS print panel feature.
- Page setup dialog for page size, orientation, and scaling is a macOS feature.
- Presenting options through the system-provided view and UIPrintInteractionController is an Apple framework.
- Integrating system-provided print functionality is an Apple OS feature.
- Print button in the macOS toolbar and optional toolbar customization are macOS toolbar features.
- Toolbar button opening an action sheet on iOS and iPadOS names Apple's UIKit components.
- Printing is not supported in tvOS or watchOS, a fact about Apple platforms.
- No additional considerations for iOS, iPadOS, or visionOS is an Apple platform statement.
- Keynote's presenter notes, slide backgrounds, and skipped-slides options are Apple's own app example.
- Related links to file-management and the menu bar File menu are Apple HIG pages.

Persona and journey notes:
- A person prints a document from the app and wants to find Print without searching.
- A person prints only when a printer is available and expects the app to say so before they tap.
- A person prints a page range, several copies, or both sides, and wants only the options the printer can use.
- A person rarely needs advanced options and wants them out of the way until they do.
- A person may change a setting and want to see its effect before printing.
- A person reprints the same document later and expects their settings to still be there.

COVERAGE:
- p014-printing: read, approx 430 words, 11 universal rules, 10 excluded
