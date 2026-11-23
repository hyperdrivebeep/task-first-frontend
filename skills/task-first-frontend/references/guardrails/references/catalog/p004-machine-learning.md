Legacy candidates - not requirements; use pages/ and the curated rule files.

# HIG extraction catalog: p004-machine-learning

Raw extraction by a note-taking child (claude-haiku-5-5, subscription) on 2026-11-03 KST from the locally saved HIG pages. Curated guardrails in ../rules-*.md are chosen from here.

## Machine learning (106 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/machine-learning

- [ML-01] MUST design the model and the UI/UX together, because the feature depends on both.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Results are only as useful as the experience that presents them.
  Check@1440/390: The design doc names both the model behavior and the UI behavior for each ML feature.
- [ML-02] MUST keep the intended app experience in mind when tuning model behavior, data use, and metrics.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Model tuning can take a long time and can drift from the experience.
  Check@1440/390: Each metric maps to a stated experience goal.
- [ML-03] MUST be prepared to change data use and metrics when the app experience changes.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Model behavior is slow to adjust, so the plan must allow for change.
  Check@1440/390: The plan lists what changes when the experience changes.
- [ML-04] MUST NOT design fixed reactions to a static set of scenarios; design the experience by teaching the app how to interpret data and react.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: ML behavior depends on changing data and conditions.
  Check@1440/390: Specs describe interpretation rules, not a fixed scenario table.
- [ML-05] MUST define the role of machine learning in the app before designing how the app receives and displays data.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: The role determines which input and output patterns apply.
  Check@1440/390: A written role statement exists for each ML feature.
- [ML-06] MUST use the defined role to choose input and output patterns for feedback, displaying data, handling mistakes, and corrections.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Patterns are grouped into inputs and outputs and guide each area.
  Check@1440/390: Each area in the spec links to a chosen pattern.
- [ML-07] MUST classify each ML feature as critical or complementary, based on whether the app still works without it.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Critical features face higher accuracy expectations.
  Check@1440/390: Each feature has a recorded classification.
- [ML-08] MUST meet higher accuracy and reliability expectations for features central to the app's purpose.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: People expect accurate results from central features; secondary features tolerate more error.
  Check@1440/390: Central features have accuracy targets that secondary features do not need to match.
- [ML-09] MUST prioritize accuracy and reliability for features that use sensitive data.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Inaccurate results from sensitive data have more serious consequences.
  Check@1440/390: Sensitive-data features list accuracy targets and reliability checks.
- [ML-10] MUST protect user privacy at all times, regardless of how sensitive the data is.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Privacy applies to all apps and all data.
  Check@1440/390: Every data flow has a privacy protection stated in the spec.
- [ML-11] MUST classify each feature as proactive or reactive and design for the tolerance that classification implies.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: People tolerate less error from results they did not request.
  Check@1440/390: Each feature has a recorded classification and matching quality bar.
- [ML-12] MUST reduce intrusive or irrelevant results from proactive features, which may require additional data.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Unrequested results can feel intrusive or irrelevant.
  Check@1440/390: Proactive features have a relevance check before display.
- [ML-13] MUST classify each feature as visible or invisible.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Visible and invisible features build reliability impressions differently.
  Check@1440/390: Each feature has a recorded visibility classification.
- [ML-14] MUST account for the difficulty invisible features have in communicating reliability and receiving feedback.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: People may not know an invisible feature exists, so they cannot judge or correct it.
  Check@1440/390: Invisible features have a stated plan for reliability signals and feedback.
- [ML-15] MUST classify each feature as dynamic or static, and plan calibration and feedback to match.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Dynamic features often need calibration and feedback; static features often do not.
  Check@1440/390: Dynamic features list their feedback and calibration paths.
- [ML-16] MUST request explicit feedback only when necessary.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: People must act to give explicit feedback, so it adds work.
  Check@1440/390: Each explicit prompt has a stated reason it cannot be replaced by implicit feedback.
- [ML-17] MUST make providing explicit feedback a voluntary task.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Feedback must not feel mandatory.
  Check@1440/390: Skipping feedback has no penalty and no blocking step.
- [ML-18] MUST describe each explicit feedback option in simple, direct language that states its consequence.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: People need to know what happens when they choose an option.
  Check@1440/390: Each option reads as an outcome, such as "Suggest less pop music".
- [ML-19] MUST NOT use imprecise terms such as "dislike" for explicit feedback options.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Imprecise terms do not convey consequences and are hard to translate.
  Check@1440/390: No option uses vague sentiment words.
- [ML-20] MUST NOT use an icon by itself as an explicit feedback option; icons may accompany the option text.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: An icon alone may not show granularity or consequences.
  Check@1440/390: Every icon appears next to a text label.
- [ML-21] MUST offer multiple explicit feedback options that become progressively more specific.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Multiple options give control and help people remove unwanted results.
  Check@1440/390: Option lists go from general to specific.
- [ML-22] MUST act immediately on explicit feedback and persist the resulting change everywhere in the app.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Immediate reaction builds trust that feedback is remembered.
  Check@1440/390: Hidden content stays hidden on all surfaces after feedback.
- [ML-23] MUST use explicit feedback about when and where to show results to refine presentation.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: A result can be wanted but badly timed.
  Check@1440/390: Timing or context feedback changes when results appear.
- [ML-24] MUST secure implicit feedback data with strict privacy controls.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Implicit feedback can reveal sensitive user information.
  Check@1440/390: Implicit feedback storage and access are covered by privacy controls.
- [ML-25] MUST tell people how the app gets and shares their information, and give them ways to restrict that flow.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: People are surprised when actions in one app affect another and may lose trust.
  Check@1440/390: The app discloses data sources and offers restriction controls.
- [ML-26] MUST NOT let implicit feedback only reinforce current behavior; leave room for people to explore new things.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Reinforcement helps short term and can hurt long term.
  Check@1440/390: Recommendation sets include some new or different items.
- [ML-27] MUST use multiple feedback signals from different sources before inferring intent.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Single indirect signals can be misread.
  Check@1440/390: Intent inference uses at least two independent signals.
- [ML-28] MUST NOT treat one indirect action, such as viewing, sharing, or adding to an album, as proof of a positive preference.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Implicit feedback is indirect and does not reveal true intent alone.
  Check@1440/390: No rule maps a single action directly to a preference.
- [ML-29] MUST NOT offer recommendations based on private or sensitive implicit feedback.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Shared or communal devices can expose sensitive suggestions.
  Check@1440/390: Sensitive-topic signals are excluded from recommendation inputs.
- [ML-30] MUST base recommendations on recent implicit feedback and fall back to historical feedback only when recent feedback is unavailable.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Tastes and appearance change over time.
  Check@1440/390: Recency ordering is applied before any historical fallback.
- [ML-31] MUST update predictions on a cadence that matches the person's mental model of the feature.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Typing suggestions update instantly, while song lists that keep changing feel rushed.
  Check@1440/390: Each feature has a stated update cadence tied to its expected behavior.
- [ML-32] MUST expect implicit feedback to shift after UI changes and account for those shifts when interpreting data.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Even small UI moves change how people interact.
  Check@1440/390: UI changes are logged alongside feedback analysis.
- [ML-33] MUST NOT rely solely on implicit feedback to inform results.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Implicit feedback is limited to what people already see and do.
  Check@1440/390: Results also use at least one non-implicit input.
- [ML-34] MUST use calibration only when the feature cannot function without the initial information.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Calibration takes effort before people get value.
  Check@1440/390: Each calibration step is required for the feature to run.
- [ML-35] MUST keep information collected during calibration secure.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Calibration can collect sensitive information.
  Check@1440/390: Calibration data follows the same protection as other sensitive data.
- [ML-36] MUST explain why the information is needed, emphasizing what the feature does rather than how it works.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: People join calibration when they understand the benefit.
  Check@1440/390: The calibration intro states the benefit in one plain sentence.
- [ML-37] MUST collect only the most essential information during calibration.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Minimal requests increase comfort and trust.
  Check@1440/390: Each calibration question is needed for the feature to function.
- [ML-38] MUST NOT ask people to calibrate more than once, except when calibrating with an object rather than a person.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Repeated calibration adds burden.
  Check@1440/390: Later information comes from feedback, not new calibration.
- [ML-39] MUST calibrate early in the user experience.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Early calibration lets the feature start working sooner.
  Check@1440/390: Calibration appears near first use.
- [ML-40] MUST prioritize a few important pieces of information and infer the rest from other sources or from feedback.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Brief calibration takes time and effort.
  Check@1440/390: The calibration flow asks only for the priority items.
- [ML-41] MUST NOT ask for information that most people would have to look up.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Lookup work makes calibration hard.
  Check@1440/390: Calibration questions are answerable from memory.
- [ML-42] MUST NOT ask people to perform actions that might be difficult during calibration.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Difficult actions cause people to quit.
  Check@1440/390: Calibration steps are reviewed for physical or mental difficulty.
- [ML-43] MUST give people an explicit calibration goal and show their progress toward it.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Progress display tells people what to do and how far they are.
  Check@1440/390: The calibration screen shows a goal and a progress indicator.
- [ML-44] MUST give actionable recommendations as soon as calibration progress stalls.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Stalls make people feel stuck and lose trust.
  Check@1440/390: A stall state shows a concrete next action.
- [ML-45] MUST NOT imply that something is wrong or that the person is at fault while guiding calibration.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Blame damages trust.
  Check@1440/390: Stall and error copy is reviewed for fault language.
- [ML-46] MUST NOT leave a person during calibration without a clear next step.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: A person with no next step feels powerless.
  Check@1440/390: Every calibration state has a visible next action.
- [ML-47] MUST show an explicit completion and a clear path to the feature when calibration succeeds.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Completion rewards effort and shifts focus to the feature.
  Check@1440/390: Success state links to the feature.
- [ML-48] MUST let people cancel calibration at any point, with an easy control.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: People need an exit without commitment.
  Check@1440/390: Cancel is reachable from every calibration step.
- [ML-49] MUST NOT show messaging about a canceled calibration or imply judgment about the choice.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Canceling is neutral; the feature asks again on next use.
  Check@1440/390: No cancel confirmation or judgment copy exists.
- [ML-50] MUST give people a way to update or remove calibration information, both inside and outside the calibration experience.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Editing gives control and builds trust.
  Check@1440/390: Calibration data can be edited from settings.
- [ML-51] MUST anticipate mistakes and design ways to avoid them and mitigate them when they happen.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Mistakes are inevitable and damage trust.
  Check@1440/390: Each feature lists its likely mistakes and mitigations.
- [ML-52] MUST provide tools for handling mistakes that address their actual consequences.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Mistake consequences vary widely.
  Check@1440/390: Each serious mistake has a tool that resolves its consequence.
- [ML-53] MUST learn from mistakes when doing so improves the app, treating each mistake as a data point, and weigh the unpredictability learning can add.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Learning can improve models but can also destabilize the experience.
  Check@1440/390: Learning changes are reviewed for unpredictability before release.
- [ML-54] MUST match the seriousness of corrective actions to the consequences of the mistake.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Minor errors and serious errors need different responses.
  Check@1440/390: Corrective tools are ranked by consequence severity.
- [ML-55] MUST make frequent or predictable mistakes easy to correct.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Hard corrections erode trust.
  Check@1440/390: The most common mistake has a one-step correction.
- [ML-56] MUST keep updating the feature to reflect evolving interests and domain information, without requiring work from people.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Improvements should not depend on person effort.
  Check@1440/390: Update paths require no user action.
- [ML-57] MUST address mistakes without complicating the UI when possible.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Corrections and limitations fit UI better than attributions.
  Check@1440/390: Mistake handling adds no extra screens for common cases.
- [ML-58] MUST weigh each mistake-handling pattern's UI effect against its risk of compounding the mistake.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: A wrong attribution magnifies the original error.
  Check@1440/390: Each pattern has a recorded compounding-risk check.
- [ML-59] MUST apply extra care to avoiding mistakes in proactive features.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: People have less patience with mistakes they did not request.
  Check@1440/390: Proactive features have a stricter error threshold.
- [ML-60] MUST consider how fixing a mistake in one area affects other areas and overall accuracy.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Optimizing one category can reduce accuracy in another.
  Check@1440/390: Each fix is evaluated against a fixed set of other categories.
- [ML-61] MUST expect mistake patterns to change as models evolve and re-check them after each model change.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Mistakes shift as models change.
  Check@1440/390: Mistake analysis is rerun after each model update.
- [ML-62] MUST use what is known about people's preferences to choose which mistake areas to work on first.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Preferences point to the mistakes that matter most.
  Check@1440/390: Mistake work is ordered by preference data.
- [ML-63] MUST give people familiar, easy ways to make corrections, and show the steps the automation takes so the same controls can refine or undo the result.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Confusion about corrections blocks recovery.
  Check@1440/390: Automated steps are visible and reusable as correction controls.
- [ML-64] MUST instantly display corrected content when a person makes a correction.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Immediate value rewards effort.
  Check@1440/390: Corrected output appears without a reload or delay step.
- [ML-65] MUST persist corrections so people do not have to repeat them.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Repeated corrections waste effort.
  Check@1440/390: A corrected item stays corrected after restart.
- [ML-66] MUST respond immediately to a correction of a correction and persist that update too.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: People often correct a correction by mistake.
  Check@1440/390: Re-corrections apply and persist the same way as first corrections.
- [ML-67] MUST balance the benefit of an automated feature against the effort required to correct it.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: People stop using automation that is harder than doing the task by hand.
  Check@1440/390: Correction steps are fewer than the manual task steps.
- [ML-68] MUST NOT rely on corrections to make up for low-quality results.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Depending on corrections erodes trust and value.
  Check@1440/390: Result quality meets its bar without corrections.
- [ML-69] MUST confirm a correction will lead to higher-quality results before using it to update models.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Bad corrections can degrade models.
  Check@1440/390: Correction-based updates are validated against quality measures first.
- [ML-70] MUST prefer guided corrections over freeform corrections when possible; a combination of both is allowed.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Guided corrections need less user effort.
  Check@1440/390: Corrections offer alternatives when the feature can supply them.
- [ML-71] MUST decide between a single result and multiple results based on the feature's design.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Feature design sets the right result count.
  Check@1440/390: Each feature states its result count and reason.
- [ML-72] MUST provide multiple options where they give people control and help bridge the gap between predictions and what people want.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Options give control and set realistic expectations.
  Check@1440/390: Multi-option features show the reason for multiple options.
- [ML-73] MUST present diverse options and balance the accuracy of a response with the diversity of the set.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Different types of options help people choose and discover.
  Check@1440/390: Option sets include more than one type of result.
- [ML-74] MUST NOT present too many options, because each option adds cognitive load.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: People must evaluate every option before choosing.
  Check@1440/390: Option lists stay within a stated maximum.
- [ML-75] MUST list options on one screen when possible, so people do not scroll to find the right one.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Scrolling slows choice.
  Check@1440/390: Option lists fit one screen at target sizes.
- [ML-76] MUST list the most likely option first.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Likely options let people finish quickly.
  Check@1440/390: The first option has the highest rank score.
- [ML-77] MUST select the first option by default when it makes sense for the app.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Default selection lets people reach goals without reading every option.
  Check@1440/390: The default option is the top-ranked option.
- [ML-78] MUST make similar options easy to distinguish with brief descriptions and highlighted differences.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Similar options cause wrong choices, such as wrong route choices.
  Check@1440/390: Each option has a description, and differences are visually marked.
- [ML-79] MUST group options into categories people can scan quickly when there are too many to display in one view.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Long unsorted lists are hard to scan.
  Check@1440/390: Large sets are grouped and labeled.
- [ML-80] MUST learn from selections to refine options when doing so does not adversely affect the experience.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Selections show what people prefer.
  Check@1440/390: Refinement is applied only when it does not reduce quality.
- [ML-81] MUST NOT keep offering results that are known to be incorrect.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Repeated wrong results reduce trust in predictions.
  Check@1440/390: Known-incorrect results are removed from later option sets.
- [ML-82] MUST verify that confidence values correspond to result quality before presenting them.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Higher confidence does not always mean higher quality.
  Check@1440/390: Confidence is checked against quality across thresholds or versions.
- [ML-83] MUST NOT convey confidence to people when its relationship to result quality is unknown.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Unreliable confidence misleads people.
  Check@1440/390: No confidence display ships without a verified correlation.
- [ML-84] MUST know what confidence values mean before deciding how to present them.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Presentation depends on what the value represents.
  Check@1440/390: The spec defines the value's meaning in plain terms.
- [ML-85] MUST NOT present low-quality results in a prominent way.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Prominent weak results erode trust.
  Check@1440/390: Low-confidence results are shown in a secondary position or not at all.
- [ML-86] MUST translate confidence values into concepts people already understand.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: A raw value alone does not explain how it relates to a result.
  Check@1440/390: Confidence appears as a plain concept, not a bare number.
- [ML-87] MUST convey confidence through ranking or ordering when attributions are not helpful.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Order implies confidence without extra text.
  Check@1440/390: Results are ordered by verified confidence.
- [ML-88] MUST express displayed confidence as semantic categories, such as "high chance" and "low chance", when numbers do not help.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Categories give context and make results comparable.
  Check@1440/390: Category labels map to verified value ranges.
- [ML-89] MUST show interval or percentage values where people expect statistical information.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Weather, sports, and polling users expect numeric accuracy.
  Check@1440/390: Statistical features show an interval or percentage.
- [ML-90] MUST convey confidence as actionable suggestions when possible.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: People decide faster from actions than from numbers.
  Check@1440/390: Confidence text ends in a usable next step.
- [ML-91] MUST adapt the presentation of results to confidence thresholds when those thresholds change what people can do.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Different confidence levels may need different interactions.
  Check@1440/390: Each threshold has a stated presentation.
- [ML-92] MUST NOT show results below a set confidence threshold for suggestions and proactive features, once confidence is known to track quality.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Poor proactive results annoy people and cost trust.
  Check@1440/390: Suggestions below the threshold are not displayed.
- [ML-93] MUST present an attribution as the basis or rationale for a result without explaining how the model works.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Attributions give transparency without technical detail.
  Check@1440/390: Attribution text names the behavior, not the model method.
- [ML-94] MUST choose whether to show attributions based on the effect you want, such as transparency, reduced impact of mistakes, mental model, or trust.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Attribution effects differ by goal.
  Check@1440/390: The spec states the goal for each attribution.
- [ML-95] MUST use attributions to help people distinguish among multiple results.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Attributions explain why each option differs.
  Check@1440/390: Each option in a set carries a distinct attribution.
- [ML-96] MUST avoid attributions that are too specific or too general.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Too specific feels like surveillance; too general feels impersonal.
  Check@1440/390: Attribution text is reviewed for specificity balance.
- [ML-97] MUST keep attributions factual and based on objective analysis.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Attributions should help reasoning, not provoke emotion.
  Check@1440/390: Attribution text describes observed behavior only.
- [ML-98] MUST NOT imply understanding or judgment of people's emotions, preferences, or beliefs in an attribution.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: "Because you love" makes claims about feelings the app cannot know.
  Check@1440/390: Attribution wording uses "because you've read", not "because you love".
- [ML-99] MUST NOT use technical or statistical jargon in attributions, unless the result itself is statistical or technical.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Jargon does not help people assess results.
  Check@1440/390: Attribution copy has no percentages or model terms, except for statistical domains.
- [ML-100] MUST identify the scenarios where limitations affect the user experience and design ways to help people work with them.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Limitations look like defects when expectations do not match.
  Check@1440/390: Each feature lists its limitation scenarios and mitigations.
- [ML-101] MUST set people's expectations before they use the feature when a limitation is serious but rare.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Early awareness lets people decide how to rely on the feature.
  Check@1440/390: The pre-use message or marketing names the limitation.
- [ML-102] MUST show people how to get the best results while they use the feature.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Without guidance, people expect the feature to do everything.
  Check@1440/390: Each feature shows at least one usage tip in context.
- [ML-103] MUST explain why inferior results occur when they happen.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Explanations help people understand the feature and adjust expectations.
  Check@1440/390: Poor-result states include a stated reason.
- [ML-104] MUST suggest alternative ways to reach the goal instead of showing no results.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Alternatives keep people moving toward their goal.
  Check@1440/390: Empty states offer at least one alternative action.
- [ML-105] MUST use attribution to set expectations when the effects of a limitation are not serious.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: Attribution sets expectations without extra UI.
  Check@1440/390: Minor limitations are covered by attribution text.
- [ML-106] MUST consider telling people when a limitation is resolved.
  HIG: Machine learning <https://developer.apple.com/design/human-interface-guidelines/machine-learning> | Why: People can return to interactions they avoided.
  Check@1440/390: Removed limitations trigger a notice in the next release.

# Exclusions and persona notes


