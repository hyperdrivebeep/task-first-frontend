Candidate catalog - evidence only; not executable requirements.

# Tap to Pay on iPhone: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/tap-to-pay-on-iphone
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 5739121d3ea6a14d40e9c16b26f22512cd287212e101576f60b593e69feacdf3
Input words: 2286. Candidate rule records: 15. Exclusion blocks: 4.
Original note: p143-tap-to-pay-on-iphone/tap-to-pay-on-iphone.md.
Adopted source-linked rules: T-39

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Tap to Pay on iPhone
URL: https://developer.apple.com/design/human-interface-guidelines/tap-to-pay-on-iphone
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST complete required merchant activation before a customer-facing checkout when practical. | topic: Tap to Pay on iPhone | source: https://developer.apple.com/design/human-interface-guidelines/tap-to-pay-on-iphone | why: Customers do not wait for avoidable setup. | check: At 1440px and 390px, inspect onboarding and first-checkout setup.
- MUST restrict administrative acceptance to authorized roles and explain how other users can proceed. | topic: Tap to Pay on iPhone | source: https://developer.apple.com/design/human-interface-guidelines/tap-to-pay-on-iphone | why: A cashier does not encounter an unexplained block. | check: At 1440px and 390px, capture administrator and nonadministrator activation.
- MUST teach supported payment methods, positioning and accessible PIN entry in discoverable help. | topic: Tap to Pay on iPhone | source: https://developer.apple.com/design/human-interface-guidelines/tap-to-pay-on-iphone | why: Merchants can guide unfamiliar customers. | check: At 1440px and 390px, inspect tutorial and persistent help entry.
- MUST prepare payment capability early and show truthful configuration progress when checkout begins before readiness. | topic: Tap to Pay on iPhone | source: https://developer.apple.com/design/human-interface-guidelines/tap-to-pay-on-iphone | why: Merchants know why they are waiting. | check: Not screenshot-checkable: start checkout during configuration and inspect progress/continuation.
- MUST let merchants choose an appropriate payment method within checkout. | topic: Tap to Pay on iPhone | source: https://developer.apple.com/design/human-interface-guidelines/tap-to-pay-on-iphone | why: They can switch methods without leaving the sale. | check: At 1440px and 390px, capture payment choices and fallback path.
- MUST keep payment method actions discoverable and distinguish them clearly. | topic: Tap to Pay on iPhone | source: https://developer.apple.com/design/human-interface-guidelines/tap-to-pay-on-iphone | why: Merchants choose the intended method. | check: At 1440px and 390px, inspect choices without unnecessary scrolling.
- MUST collect tips and other amount-changing choices before requesting final payment. | topic: Tap to Pay on iPhone | source: https://developer.apple.com/design/human-interface-guidelines/tap-to-pay-on-iphone | why: Customers see the correct total. | check: At 1440px and 390px, capture prepayment choices and final amount.
- MUST distinguish a successful card read from authorized payment. | topic: Tap to Pay on iPhone | source: https://developer.apple.com/design/human-interface-guidelines/tap-to-pay-on-iphone | why: People do not mistake reading a card for completing a sale. | check: Not screenshot-checkable: capture successful read followed by delayed or declined authorization.
- MUST show authorization progress until a transaction result is known. | topic: Tap to Pay on iPhone | source: https://developer.apple.com/design/human-interface-guidelines/tap-to-pay-on-iphone | why: People understand that processing continues. | check: At 1440px and 390px, capture the waiting and final result states.
- MUST clearly show success or decline and offer a receipt when available. | topic: Tap to Pay on iPhone | source: https://developer.apple.com/design/human-interface-guidelines/tap-to-pay-on-iphone | why: Both parties know the transaction outcome. | check: At 1440px and 390px, capture each result and receipt options.
- MUST offer another payment method or another attempt after an unsuccessful read. | topic: Tap to Pay on iPhone | source: https://developer.apple.com/design/human-interface-guidelines/tap-to-pay-on-iphone | why: The checkout can recover. | check: At 1440px and 390px, capture unsupported/unreadable card recovery and exercise it.
- MUST describe actionable payment setup errors plainly and provide a suitable resolution. | topic: Tap to Pay on iPhone | source: https://developer.apple.com/design/human-interface-guidelines/tap-to-pay-on-iphone | why: Merchants can fix the actual problem. | check: At 1440px and 390px, inspect representative error messages and actions.
- MUST make unresolved-payment help easy to reach. | topic: Tap to Pay on iPhone | source: https://developer.apple.com/design/human-interface-guidelines/tap-to-pay-on-iphone | why: Merchants can obtain assistance. | check: At 1440px and 390px, inspect help and support actions.
- MUST label nonpayment card reading by its real purpose. | topic: Tap to Pay on iPhone | source: https://developer.apple.com/design/human-interface-guidelines/tap-to-pay-on-iphone | why: People do not confuse lookup or verification with charging. | check: At 1440px and 390px, compare payment, lookup, refund and stored-card actions.
- MUST separate loyalty-only actions from payment acceptance. | topic: Tap to Pay on iPhone | source: https://developer.apple.com/design/human-interface-guidelines/tap-to-pay-on-iphone | why: Merchants do not start the wrong transaction. | check: At 1440px and 390px, inspect distinct labels and flows.
Apple-specific (excluded):
- Tap to Pay entitlement, supported PSP, ProximityReader APIs and regional payment requirements.
- Specific preparation lifecycle, system read/checkmark timing and legal terms.
- Mandatory Tap to Pay labels/SF Symbols and Apple logo restrictions.
- Apple Wallet loyalty reading and supported device/platform limits.
Persona and journey notes:
- A merchant under time pressure needs setup, customer guidance, a final amount, authorization proof and a fallback when payment fails.
COVERAGE:
- tap-to-pay-on-iphone: read, 2287 words, 15 universal rules, 4 excluded
