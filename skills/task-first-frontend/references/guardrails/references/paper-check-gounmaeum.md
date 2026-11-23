Read-only paper check, 2026-11-04 KST; no visual or behavioral PASS.

# Applying the guardrail to a real page

Five journey-gap candidates were found. Zero were demonstrated to be findings an ordinary review would miss. There was no independent baseline review, so this exercise does not establish a detection advantage.

Target: https://gounmaeum-landing.vercel.app/

The live HTML returned HTTP 200 at 2026-11-04 12:05:56 KST and exactly matched the supplied snapshot. Seven relevant CSS/JS assets also returned HTTP 200; their reading finished at 12:09:18 KST. See [source evidence](paper-source-evidence.md) for URLs, selectors, line ranges and hashes.

This is a prelaunch business-adoption page. It already discloses future launch, example screens, payment-processor dependencies and the difference between platform fees and paid services. It offers a real telephone inquiry route and a brochure. Source code also includes reduced-motion and manual-reading paths. None of these is reported as missing, and none received a runtime PASS.

## Fixed people and journeys

| Situation | Experience and constraint | Complete intended journey |
|---|---|---|
| HR buyer planning adoption | First-time evaluator with a near-term company event | Understand current availability, decide whether the timing works, choose a relevant inquiry and understand its outcome. |
| Bereaved employee or family member | Distressed, possibly arriving at night without an available administrator | Determine whether help is available now, find the correct urgent route, understand approval requirements and the next step. This is a plausible secondary arrival, not proof the landing page is an employee portal. |
| Buyer unable to call now | In a meeting, without a dialer, or unable to use voice comfortably | Choose an accessible asynchronous route, leave a minimal request and receive an accurate acknowledgment or recoverable error. |
| Privacy-conscious employee or approver | Needs to understand sensitive information before participating | Inspect who sees what, publication versus retention, the policy and a question/request route. |
| Company or family cost evaluator | Different payers and uncertain variable costs | Identify the payer, known price, exclusions and variables, then obtain an appropriate itemized estimate before commitment. |

These are test situations inferred from the page's audience and offer, not observed user-study results.

## 1. Availability remains an incomplete decision

**Ideal:** A buyer can distinguish available-now, inquiry-only, planned and externally gated capabilities, and understand what happens after inquiry.

**Observed:** The hero says launch is upcoming. Examples and the payment dependency are labeled. The onboarding sequence describes registration and setup, while the availability FAQ and inquiry defer timing to a call. There is no consolidated feature-level readiness summary in the inspected HTML.

**Evidence:** E1; `.hero-status`, `#flow .story-footnote`, `#onboarding .steps`, `#faq .faq-item:nth-child(6)`, `#apply`; HTML lines 102, 351, 583-586, 611 and 623-639. The public launch-label configuration is unset.

**Inferred consequence:** A buyer can understand that launch is future yet remain unable to decide whether the next step concerns a current manual service, a pilot or a future launch discussion. The page does not hide prelaunch status.

**Guardrails:** F-01, F-37, F-41 and P-04.

**Proposed correction:** Place one operator-approved availability summary beside the offer and inquiry. Preserve existing disclosures and label unresolved timing honestly. Do not invent a live capability or launch date.

**Proof required, not run:** At 1440 x 900 and 390 x 844, capture the offer, relevant feature qualifiers and inquiry destination. Using the same HR scenario, ask a reader what is available now, what is pending and what inquiry produces. Confirm real operational availability separately.

## 2. Immediate help and business adoption share an unclear route

**Ideal:** A distressed arrival can identify the appropriate immediate-help route and understand whether employer approval must happen first.

**Observed:** Service and FAQ copy describes round-the-clock funeral reception. The care action leads to the general inquiry section, whose phone number is labeled for business adoption and launch information. The inspected page has no separately identified urgent branch or administrator-unavailable instruction.

**Evidence:** E2; `#services .bento-tile-feature p`, `#care .mechanic-step`, `#care a[data-interest="care"]`, `#faq .faq-item:nth-child(3)` and `#apply-contact`; HTML lines 164, 420-435, 608 and 623-639.

**Inferred consequence:** Someone under stress may be uncertain whether the adoption number also handles immediate help, whether that service is available before launch or whether they must wait for company approval. The number was not called; it is not reported as wrong or unanswered.

**Guardrails:** F-02, F-36, F-41, P-03 and P-04.

**Proposed correction:** Explain the operator-confirmed routes for adoption and immediate help. If one number serves both, say so and clarify the actual hours and steps. If current urgent service is unavailable, state that and provide only an approved alternative.

**Proof required, not run:** At both fixed widths, start from the care/FAQ section and inspect the claim together with its help route and current-availability qualifier. Run a scripted night-time scenario with an unavailable administrator. Test link routing through an intercepted or approved setup; do not make an unsolicited live call.

## 3. A visitor unable to call cannot leave an inquiry through the page

**Ideal:** The visitor can choose a monitored non-call route, understand the expected response and receive truthful acknowledgment.

**Observed:** Inquiry actions converge on the phone section. The complete source has three telephone links, no mailto link, no form and no `data-apply-form` mount target. The brochure is informational. The shipped form module mounts conditionally on an absent element, and its endpoint configuration is unset.

**Evidence:** E3; `#intro a[data-download]`, `#apply .apply-steps`, `#apply-contact`, `.mobile-cta a`; HTML lines 95, 627-639, 656, 666 and 674; `scripts/form.js` lines 147-150 and 188-189; `scripts/site-config.js` line 39.

**Inferred consequence:** Someone who cannot call can read but cannot leave an inquiry through this published page. This is not a failed visible form, a broken submission endpoint or proof the business has no other channels.

**Guardrails:** F-02, F-03, P-08 and P-04.

**Proposed correction:** Add one verified asynchronous route beside the phone option, using an existing monitored channel if available. State response expectations and request only necessary information. Do not expose dormant form code as a working submission flow.

**Proof required, not run:** At both widths, inspect channel choice and return from a declined phone handoff. In an authorized test environment, verify delivery, acknowledgment, failure, retry and duplicate activation as applicable. A visible success message alone does not prove receipt.

## 4. Privacy assurances lack a complete inspection path

**Ideal:** A visitor can inspect relevant data use, access, publication expiry, record retention and recourse before sharing sensitive information.

**Observed:** The page describes phone authentication, access removal for departed employees, recipient selection and limited publication. It also describes roster import, document extraction and accumulated records. The inspected footer has no policy route; policy, terms and retention configuration values are unset.

**Evidence:** E4; `#flow [data-story-panel]`, `#console .feature-list`, `#operator .trust-item`, `.footer-nav .footer-links`; HTML lines 267, 294, 404-406, 566-569 and 654-657; `scripts/site-config.js` lines 33-35. A CSS comment about policy links does not create one.

**Inferred consequence:** A visitor can see useful intentions but cannot complete a data-handling assessment through this page. Publication expiry is not evidence of record deletion. No leak, actual permission failure or legal violation was established.

**Guardrails:** F-31, F-32 and F-33.

**Proposed correction:** Publish approved explanations and working policy links. Separate visibility expiry from retained records, explain relevant access and provide a question/request route. Label undecided prelaunch details instead of inventing guarantees.

**Proof required, not run:** At both widths, find the explanation and policy without submitting information. Separately verify actual authorization, access removal and retention using an approved system and synthetic records. A working document link cannot prove those controls.

## 5. Honest exclusions still leave an incomplete total-cost journey

**Ideal:** Company and family payers can identify known charges, exclusions and variables, then obtain an appropriate itemized estimate.

**Observed:** The page distinguishes zero platform fees from family-paid care and company-funded items. Four package prices and several exclusions are disclosed. Facility/cremation costs, reimbursement scope or excess costs and transfer-fee conditions are not fully priced; some are explicitly deferred to consultation.

**Evidence:** E5; `#intro .money-block`, `#products .plan-price`, `#products .plan-spec`, `#products .plans-notes`, `#cost .cost-table` and `#cost .cost-notes`; HTML lines 89-90, 454-505, 511-514 and 532-539.

**Inferred consequence:** Readers may understand the zero platform fee correctly yet remain unable to compare a full family expense or company transaction cost without consultation. This is not a finding that all charges are hidden or that every service is advertised as free.

**Guardrails:** F-15, F-36 and T-18 as a conditional transfer of precommitment price clarity. This page was not treated as an implemented in-app checkout.

**Proposed correction:** Separate company and family cost paths. Publish confirmed rules where possible; otherwise offer an itemized quote route that names required inputs and variable items. Use only approved prices and assumptions in any worked example.

**Proof required, not run:** At both widths, retain the selected package, payer and exclusions through the decision. Use fixed family-care and company-budget scenarios to test whether a reader can identify known and variable costs and request the right estimate. No payment or quote request was sent.

## Verdict and limits

The source-only application is complete: five specific candidates, their ideal journeys, source observations, proposed corrections and fixed proof cases are recorded. Visual, accessibility and operational behavior remain UNVERIFIED.

No browser was driven, no screenshots captured, no form submitted, no telephone link activated and no website changed. The PDF, unrelated assets and business systems were not inspected. Existing reduced-motion and manual-reading source safeguards were acknowledged without treating source presence as proof of their runtime quality.

An ordinary competent review could find any of these five candidates. The useful output here is explicit linkage from a person and situation to a complete journey and testable correction. This exercise found nothing that can honestly be claimed as uniquely missed by a plain review.
