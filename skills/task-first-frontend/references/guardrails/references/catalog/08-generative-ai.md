Legacy candidates - not requirements; use pages/ and the curated rule files.

# HIG extraction catalog: 08-generative-ai

Raw extraction by a note-taking child (claude-haiku-5-5, subscription) on 2026-11-03 KST from the locally saved HIG pages. Curated guardrails in ../rules-*.md are chosen from here.

## Generative AI (87 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/generative-ai

- [GA-01] MUST design AI features responsibly, weighing their direct and indirect impacts on people, systems, and society.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people are not exposed to harms that only appear after launch
  Check@1440/390: not screenshot-checkable: a design-process rule, verified by a written impact review.
- [GA-02] MUST keep people in control of decision making and of the overall experience.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people keep agency instead of having AI act for them
  Check@1440/390: not screenshot-checkable: verified by a flow walkthrough in which every AI step can be declined or left.
- [GA-03] MUST honor people's requests when they are in scope and the expected output is clear.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people get the output they asked for
  Check@1440/390: not screenshot-checkable: verified by test requests and their resulting outputs.
- [GA-04] MUST handle sensitive content in requests carefully.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people's sensitive requests are not mishandled
  Check@1440/390: not screenshot-checkable: verified by a test set of sensitive requests and the logged responses.
- [GA-05] MUST give people a way to dismiss generated content they do not want, shown on the generated content.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people can discard output without friction
  Check@1440/390: screenshot at 1440px and 390px shows a dismiss control on each generated item.
- [GA-06] MUST let people revert a content transformation or other action they do not agree with.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: a bad transformation is never permanent
  Check@1440/390: screenshot at 1440px and 390px shows a revert control after a transformation is applied.
- [GA-07] MUST let people retry a content transformation or other action.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people can get a better result without starting over
  Check@1440/390: screenshot at 1440px and 390px shows a retry control on generated output.
- [GA-08] MUST clearly identify where and when AI is used.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people know what produced the content they see
  Check@1440/390: screenshot at 1440px and 390px shows an AI label next to each AI-generated element.
- [GA-09] MUST NOT trick someone into thinking they are interacting with, or viewing content authored by, a human when they are dealing with AI.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people are not misled about who or what they are talking to
  Check@1440/390: screenshot at 1440px and 390px shows an AI label on AI-authored messages, and no human-style name or avatar on them.
- [GA-10] MUST ask people for the information a feature needs about them, rather than inferring personal or cultural characteristics, when generating images or descriptions of people.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people are not labeled by assumptions about who they are
  Check@1440/390: not screenshot-checkable: verified by a prompt review showing the attribute is requested from the user.
- [GA-11] MUST consider how assumptions and personal attributes might affect the feature before designing it.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: the feature works for people who differ from the designer's assumptions
  Check@1440/390: not screenshot-checkable: a design-review record of assumptions and attributes.
- [GA-12] MUST seek clarity before making assumptions that may lead to common stereotypes, such as about gender identity or relationship type.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people are not stereotyped by the output
  Check@1440/390: not screenshot-checkable: verified by output review across varied test inputs.
- [GA-13] MUST test the feature across a diverse set of people to identify and correct stereotypes and confirm inclusive results.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: the feature works for more people, not just the common case
  Check@1440/390: not screenshot-checkable: verified by a test report covering a diverse set of people.
- [GA-14] MUST offer a generative feature only where it gives clear and specific value, such as time savings, better communication, or enhanced creativity.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people are not given AI features that add no real benefit
  Check@1440/390: not screenshot-checkable: verified by a written value statement for each feature.
- [GA-15] MUST keep the experience working when a generative feature is unavailable or the person opts not to use it.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people can still reach their goal without AI
  Check@1440/390: screenshot at 1440px and 390px with the feature turned off shows the core flow complete, with no empty or broken state.
- [GA-16] MUST consider offering a non-AI fallback when one is possible.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people who avoid AI still have a usable path
  Check@1440/390: screenshot at 1440px and 390px with the feature off shows a non-AI alternative control.
- [GA-17] MUST tell people when and where the app uses AI, so they can knowingly choose to use an AI-powered feature.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people set their own expectations before they use AI
  Check@1440/390: screenshot at 1440px and 390px shows the AI disclosure before or at the point of use.
- [GA-18] MUST disclose AI use in a way that aligns with the regulations of each region where the app is offered.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people in every region get the disclosure the law requires
  Check@1440/390: not screenshot-checkable: verified by a regional legal review of the disclosure text.
- [GA-19] MUST set clear expectations about what the AI feature can and cannot do.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people build an accurate mental model of the feature
  Check@1440/390: screenshot at 1440px and 390px shows a capability statement at the feature's entry point.
- [GA-20] MUST disclose known limitations of the AI feature up front.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people are not surprised by weak results later
  Check@1440/390: screenshot at 1440px and 390px shows the limitation text before the first use.
- [GA-21] MUST show people how to get good results from the AI feature.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people succeed on their first few tries
  Check@1440/390: screenshot at 1440px and 390px shows usage guidance at the feature's entry point.
- [GA-22] MUST explain why inferior results occur when they occur.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people understand a poor result and know how to improve it
  Check@1440/390: screenshot at 1440px and 390px of a weak-result state shows an explanation next to the output.
- [GA-23] MUST consider offering a brief tutorial when a generative feature is introduced.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people learn the feature before relying on it
  Check@1440/390: screenshot at 1440px and 390px of the first run shows a tutorial or introduction.
- [GA-24] MUST consider offering curated suggestions for open-ended inputs, such as a search bar or generation prompt.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people know what to type to get started
  Check@1440/390: screenshot at 1440px and 390px of the empty input shows suggestion items.
- [GA-25] MUST choose a model type that fits the feature's needs and protects people's privacy, weighing privacy alongside capability and performance.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people's data is protected without losing needed capability
  Check@1440/390: not screenshot-checkable: verified by a recorded model-selection decision with its privacy trade-offs.
- [GA-26] MUST, for server-based processing, process as much information on the device as possible.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: less of the person's data leaves their device
  Check@1440/390: not screenshot-checkable: verified by a data-flow review.
- [GA-27] MUST, for server-based processing, minimize what is shared with the server.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: the server receives only what the feature needs
  Check@1440/390: not screenshot-checkable: verified by a data-flow review of each server request.
- [GA-28] MUST tell people when their information may be sent to a server.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people know before their data leaves the device
  Check@1440/390: screenshot at 1440px and 390px shows a server-sharing notice before the data is sent.
- [GA-29] MUST show people what information is shared with a server.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people can see exactly what leaves their device
  Check@1440/390: screenshot at 1440px and 390px shows the shared data before or at send.
- [GA-30] MUST explain what data may be stored off-device or used for training.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people know where their data may persist
  Check@1440/390: screenshot at 1440px and 390px shows the storage and training statement in the disclosure.
- [GA-31] MUST ask permission before using personal information and usage data in an AI feature.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people's personal data is not used without their consent
  Check@1440/390: screenshot at 1440px and 390px shows a permission prompt before the first use of personal data.
- [GA-32] MUST use only the minimum data needed once permission is granted.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people's exposure is limited even when they say yes
  Check@1440/390: not screenshot-checkable: verified by a data-flow review against the feature's stated need.
- [GA-33] MUST offer a clear way to opt out of the use of personal data by the AI feature.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people can withdraw consent at any time
  Check@1440/390: screenshot at 1440px and 390px shows an opt-out control in settings or the permission prompt.
- [GA-34] MUST obtain explicit permission before using sensitive data for model improvement or storage.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people's sensitive data is not repurposed without a clear yes
  Check@1440/390: screenshot at 1440px and 390px shows an explicit opt-in control for that use.
- [GA-35] MUST handle sensitive data used for model improvement or storage with care.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: sensitive data is protected after it is collected
  Check@1440/390: not screenshot-checkable: verified by a data-handling review.
- [GA-36] MUST understand a third party's privacy approach before sharing data with that third party.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people's data is not handled by a party with weaker protections
  Check@1440/390: not screenshot-checkable: verified by a written review of each third party's privacy terms.
- [GA-37] MUST account for the possibility that model outputs inadvertently contain sensitive information.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people's private details do not leak through generated text
  Check@1440/390: not screenshot-checkable: verified by output testing logs.
- [GA-38] MUST disclose how the app and its model use and store personal information.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people can judge their own privacy risk
  Check@1440/390: screenshot at 1440px and 390px shows the privacy disclosure text.
- [GA-39] MUST explain the benefit of sharing personal information when asking permission, in concise, specific, and easy-to-understand words.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people say yes for reasons they understand
  Check@1440/390: screenshot at 1440px and 390px of the permission prompt names one concrete benefit in plain words.
- [GA-40] MUST state whether the model uses personal information for training and improvement.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people know whether their data shapes the model
  Check@1440/390: screenshot at 1440px and 390px shows a training statement in the disclosure.
- [GA-41] MUST evaluate model capabilities hands-on, as early in design as possible.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: the design rests on what the model actually does
  Check@1440/390: not screenshot-checkable: verified by a recorded evaluation session.
- [GA-42] MUST design for a model being unavailable because of device compatibility, network access, or battery level.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people do not hit a broken feature when conditions change
  Check@1440/390: screenshot at 1440px and 390px with the model unavailable shows a complete, non-broken state.
- [GA-43] MUST choose datasets that include a diverse range of subject matter representations.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: the model serves more subjects fairly
  Check@1440/390: not screenshot-checkable: verified by a dataset composition report.
- [GA-44] MUST learn where each dataset comes from and how it was gathered.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: data problems are found before they reach people
  Check@1440/390: not screenshot-checkable: verified by a dataset provenance record.
- [GA-45] MUST hold a relevant license for all data you do not personally own.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: the app avoids legal exposure over its training data
  Check@1440/390: not screenshot-checkable: verified by a license inventory.
- [GA-46] MUST offer appropriate choices when using people's data.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people keep control over their own data
  Check@1440/390: screenshot at 1440px and 390px shows a choice control for each use of people's data.
- [GA-47] MUST allow time for testing and evaluation to reduce the bias and misinformation a model may learn and repeat.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people receive fewer biased or false outputs
  Check@1440/390: not screenshot-checkable: verified by a schedule and evaluation report that includes bias and misinformation checks.
- [GA-48] MUST guide people on how to use the generative feature so they can steer it toward good results.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people get useful output on their first attempts
  Check@1440/390: screenshot at 1440px and 390px shows guidance text at the input.
- [GA-49] MUST consider offering diverse predefined example inputs that hint at what the feature can do.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people see what is possible without guessing
  Check@1440/390: screenshot at 1440px and 390px shows several varied example inputs.
- [GA-50] MUST clearly communicate that AI-generated content may contain errors.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people do not take a plausible but wrong answer as fact
  Check@1440/390: screenshot at 1440px and 390px shows an error notice near AI-generated text.
- [GA-51] MUST scope what the model is asked to generate to minimize hallucinations.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people receive fewer invented details
  Check@1440/390: not screenshot-checkable: verified by a prompt-scope review.
- [GA-52] MUST NOT request factual information from a model unless the model has access to verified, up-to-date information for the task.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people do not receive confident but made-up facts
  Check@1440/390: not screenshot-checkable: verified by a review of each factual request against its data source.
- [GA-53] MUST NOT use AI-generated content in situations where a hallucination could misinform and harm someone.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people are not harmed by invented content
  Check@1440/390: not screenshot-checkable: verified by a risk review of each use case.
- [GA-54] MUST consider whether a mistake or an inability to reverse an action would cause extra work or stress before performing a task.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people do not face costly errors they cannot undo
  Check@1440/390: not screenshot-checkable: verified by a written risk assessment per task.
- [GA-55] MUST NOT automate destructive actions, such as deleting photos.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people do not lose data to an automated action
  Check@1440/390: not screenshot-checkable: verified by a code-path review showing destructive actions require a person's explicit step.
- [GA-56] MUST NOT automate actions that are hard to undo, such as making a purchase on a person's behalf.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people do not pay or commit without choosing to
  Check@1440/390: not screenshot-checkable: verified by a code-path review of each irreversible action.
- [GA-57] MUST ask for confirmation before performing a significant action on someone's behalf.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people approve significant changes before they happen
  Check@1440/390: screenshot at 1440px and 390px shows a confirmation step before the action.
- [GA-58] MUST adhere to model-specific usage policies.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: the app is not withdrawn for policy breaches
  Check@1440/390: not screenshot-checkable: verified by a policy compliance checklist per model.
- [GA-59] MUST adhere to the government and regulatory AI policy that applies in each locale where the generative feature is available.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people in each locale get a lawful feature
  Check@1440/390: not screenshot-checkable: verified by a per-locale regulatory review.
- [GA-60] MUST make generated results easy to refine or revert, with controls such as Edit, Undo, Retry, or Adjust near the generated content.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people keep control while still benefiting from automation
  Check@1440/390: screenshot at 1440px and 390px shows those controls adjacent to the output.
- [GA-61] MUST give a clear signal when people's adjustments or personalizations take effect.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people see that their changes worked and trust the feature
  Check@1440/390: screenshot at 1440px and 390px after an adjustment shows a visible change or confirmation.
- [GA-62] MUST coach people to improve their request when output is blocked or undesirable.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people know how to succeed on the next try
  Check@1440/390: screenshot at 1440px and 390px of a blocked state shows guidance text, not only an error.
- [GA-63] MUST consider offering example requests that lead to better results when a request is blocked.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people have a concrete next request to try
  Check@1440/390: screenshot at 1440px and 390px of a blocked state shows example requests.
- [GA-64] MUST proactively identify risks of misuse and harm, and devise policies to address them.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people are protected from accidental and purposeful misuse
  Check@1440/390: not screenshot-checkable: verified by a written risk register with policies.
- [GA-65] MUST test requests that are out of scope, unrelated to the app, poorly phrased, vague, or ambiguous.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people get sensible responses to messy inputs
  Check@1440/390: not screenshot-checkable: verified by a logged test set of such requests.
- [GA-66] MUST test personal, sensitive, or controversial requests, and requests that encourage harmful or incorrect results.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people are not harmed by responses to hard requests
  Check@1440/390: not screenshot-checkable: verified by a logged test set of such requests.
- [GA-67] MUST use what testing reveals to improve the model, prevention, and responses.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: each test round makes the feature safer
  Check@1440/390: not screenshot-checkable: verified by a change log linking test findings to fixes.
- [GA-68] MUST strive to avoid replicating copyrighted content in outputs.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people and the app avoid infringing output
  Check@1440/390: not screenshot-checkable: verified by sampled output review against known copyrighted works.
- [GA-69] MUST curate inputs to reduce copyright risk, such as letting people choose from a set of pre-approved prompts.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: the feature avoids requests that invite copied content
  Check@1440/390: screenshot at 1440px and 390px shows the pre-approved prompt list where it is used.
- [GA-70] MUST consider explicitly telling the model to avoid mimicking certain content or styles.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: outputs imitate fewer protected works
  Check@1440/390: not screenshot-checkable: verified by a prompt configuration review.
- [GA-71] MUST factor the processing time of generative models into the design, since they typically take longer than non-generative models.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people are not left waiting without a plan
  Check@1440/390: screenshot at 1440px and 390px of the generation state shows the designed wait experience.
- [GA-72] MUST design a loading experience, or generate in the background while the person uses another part of the app, when generation takes time.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people keep working during generation
  Check@1440/390: screenshot at 1440px and 390px shows a loading state or background indicator, with the rest of the app usable.
- [GA-73] MUST give specific feedback during generation that describes what is actually happening, not a vague status message.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: waiting feels purposeful and uncertainty drops
  Check@1440/390: screenshot at 1440px and 390px shows a status message naming the actual step.
- [GA-74] MUST, when something goes wrong during generation, describe what happened in plain language.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people understand the failure without decoding it
  Check@1440/390: screenshot at 1440px and 390px of an error state shows a plain-language description.
- [GA-75] MUST offer a clear next step when something goes wrong during generation.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people can recover without getting stuck
  Check@1440/390: screenshot at 1440px and 390px of an error state shows an action the person can take.
- [GA-76] MUST consider offering alternate, meaningfully different results so people can choose the one they want.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people gain control and bridge the gap between the model's reading and their intent
  Check@1440/390: screenshot at 1440px and 390px shows at least two meaningfully different results to choose from.
- [GA-77] MUST plan how the model will improve over time, adapting to people's behavior, feedback, new data, and enhanced capabilities.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: the feature gets better instead of stagnating
  Check@1440/390: not screenshot-checkable: verified by a written model improvement plan.
- [GA-78] MUST plan fine-tuning, retesting, and prompt engineering whenever the app moves to a newer base model.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: a model upgrade does not quietly degrade results
  Check@1440/390: not screenshot-checkable: verified by a model-upgrade checklist.
- [GA-79] MUST thoroughly test and refine every model update to find and correct unexpected behavior.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people do not meet new bugs after an update
  Check@1440/390: not screenshot-checkable: verified by a regression test report per update.
- [GA-80] MUST let people share feedback on outputs.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people can report good and bad results
  Check@1440/390: screenshot at 1440px and 390px shows a feedback control on the output.
- [GA-81] MUST make providing feedback voluntary.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people's time is respected
  Check@1440/390: screenshot at 1440px and 390px shows the feedback control with no required step or blocking prompt.
- [GA-82] MUST place the feedback control in a clear location that does not interrupt the experience.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people can find feedback without losing their place
  Check@1440/390: screenshot at 1440px and 390px shows the control beside the output and not covering content.
- [GA-83] MUST consider offering a quick thumbs-up and thumbs-down way to give feedback.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people can rate a result in one tap
  Check@1440/390: screenshot at 1440px and 390px shows both buttons on the output.
- [GA-84] MUST consider offering a way to share detailed feedback for complicated issues.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people can explain complex problems fully
  Check@1440/390: screenshot at 1440px and 390px shows a detailed-feedback entry point.
- [GA-85] MUST take feedback seriously and resolve reported issues quickly.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people trust a feature that fixes what they report
  Check@1440/390: not screenshot-checkable: verified by a feedback triage log with resolution times.
- [GA-86] MUST design features that can adapt as models and their resource needs change.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: the feature keeps working as the technology moves on
  Check@1440/390: not screenshot-checkable: verified by an architecture review.
- [GA-87] MUST separate the model from the user experience so the model can be swapped without redesigning the experience.
  HIG: Generative AI <https://developer.apple.com/design/human-interface-guidelines/generative-ai> | Why: people keep the same experience when the model changes
  Check@1440/390: not screenshot-checkable: verified by an architecture review showing a model interface boundary.

## Going full screen (19 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/going-full-screen

- [GFS-01] MUST offer a full-screen mode for a game, media viewing (video or photo slideshow), or an in-depth task that needs a distraction-free environment.
  HIG: Going full screen <https://developer.apple.com/design/human-interface-guidelines/going-full-screen> | Why: People who want to focus or be immersed can do so without leaving the app.
  Check@1440/390: At 1440px and 390px, screenshot the game, media or task screen; a full-screen entry control is visible at both widths.
- [GFS-02] MUST NOT programmatically resize the window when full-screen mode starts.
  HIG: Going full screen <https://developer.apple.com/design/human-interface-guidelines/going-full-screen> | Why: The window keeps the size people chose, so nothing shifts under them.
  Check@1440/390: not screenshot-checkable: requires observing window size changes at runtime, not a static screen state.
- [GFS-03] MUST keep essential content prominent when the full-screen window is larger than the windowed one.
  HIG: Going full screen <https://developer.apple.com/design/human-interface-guidelines/going-full-screen> | Why: People still see what matters most when the extra space appears.
  Check@1440/390: At 1440px, screenshot the windowed and full-screen layouts; the primary content is the most prominent element in both.
- [GFS-04] MUST keep the same items in full-screen mode and change only the interface proportions.
  HIG: Going full screen <https://developer.apple.com/design/human-interface-guidelines/going-full-screen> | Why: People find the same things where they expect them.
  Check@1440/390: At 1440px, screenshot the windowed and full-screen layouts; the same labelled items appear in both.
- [GFS-05] MUST keep full-screen layout adjustments subtle enough that the interface stays consistent.
  HIG: Going full screen <https://developer.apple.com/design/human-interface-guidelines/going-full-screen> | Why: The app still looks like itself after going full screen.
  Check@1440/390: At 1440px and 390px, screenshot windowed and full-screen; font, colour and component styles match.
- [GFS-06] MUST NOT cause visually jarring transitions when switching between full-screen and windowed modes.
  HIG: Going full screen <https://developer.apple.com/design/human-interface-guidelines/going-full-screen> | Why: People are not startled by a sudden jump in layout.
  Check@1440/390: not screenshot-checkable: requires capturing the transition frames, not a single static state.
- [GFS-07] MUST keep essential features and controls available so people can finish the task without leaving full-screen mode.
  HIG: Going full screen <https://developer.apple.com/design/human-interface-guidelines/going-full-screen> | Why: People complete their task without a detour out of full screen.
  Check@1440/390: At 1440px and 390px, screenshot the task screen in full-screen mode; every essential control is visible or one action away.
- [GFS-08] MUST keep playback controls persistently available or easy to reveal in a full-screen media experience.
  HIG: Going full screen <https://developer.apple.com/design/human-interface-guidelines/going-full-screen> | Why: People can pause, seek or adjust without hunting for controls.
  Check@1440/390: At 1440px and 390px, screenshot the full-screen player with controls shown and hidden; controls are visible or revealed by one action.
- [GFS-09] MUST let people resume where they left off when they return to the experience after switching away.
  HIG: Going full screen <https://developer.apple.com/design/human-interface-guidelines/going-full-screen> | Why: People do not lose their place when they come back.
  Check@1440/390: not screenshot-checkable: requires a before-and-after navigation sequence, not one screen.
- [GFS-10] MUST pause a game or slideshow automatically when people leave the full-screen experience.
  HIG: Going full screen <https://developer.apple.com/design/human-interface-guidelines/going-full-screen> | Why: People do not miss anything while they are away.
  Check@1440/390: not screenshot-checkable: requires observing playback state after switching away.
- [GFS-11] MUST let people choose when to exit full-screen mode.
  HIG: Going full screen <https://developer.apple.com/design/human-interface-guidelines/going-full-screen> | Why: People stay in control of their own view.
  Check@1440/390: At 1440px and 390px, screenshot full-screen mode; a visible exit control is present at both widths.
- [GFS-12] MUST NOT end full-screen mode automatically when people switch to another experience or finish an absorbing activity.
  HIG: Going full screen <https://developer.apple.com/design/human-interface-guidelines/going-full-screen> | Why: People are not thrown out of their focus mid-activity.
  Check@1440/390: not screenshot-checkable: requires observing mode state after a switch or completion event.
- [GFS-13] MUST hide toolbars and navigation controls only temporarily, and only when the content is the primary focus.
  HIG: Going full screen <https://developer.apple.com/design/human-interface-guidelines/going-full-screen> | Why: People get a distraction-free view without losing their controls for good.
  Check@1440/390: At 1440px and 390px, screenshot the content view with toolbars hidden and then shown; the bars are present in the shown state.
- [GFS-14] MUST let people restore hidden toolbars and navigation controls with a familiar gesture or action, such as tapping, swiping down, or moving the cursor to the top of the screen.
  HIG: Going full screen <https://developer.apple.com/design/human-interface-guidelines/going-full-screen> | Why: People get their controls back without searching for them.
  Check@1440/390: At 1440px and 390px, screenshot the hidden state and the state after the reveal action; the controls are back after the action.
- [GFS-15] MUST keep toolbars and navigation controls visible when they are essential for navigation or performing tasks.
  HIG: Going full screen <https://developer.apple.com/design/human-interface-guidelines/going-full-screen> | Why: People can always move through the app and finish their tasks.
  Check@1440/390: At 1440px and 390px, screenshot a navigation-dependent screen in full-screen mode; the navigation controls are visible.
- [GFS-16] MUST guard a full-screen game or app against accidental exits.
  HIG: Going full screen <https://developer.apple.com/design/human-interface-guidelines/going-full-screen> | Why: People do not drop out of play because of an accidental touch or click.
  Check@1440/390: not screenshot-checkable: exit prevention is input-handling behaviour, not a visual state.
- [GFS-17] MUST let people choose when to enter full-screen mode.
  HIG: Going full screen <https://developer.apple.com/design/human-interface-guidelines/going-full-screen> | Why: People decide when the window fills the screen.
  Check@1440/390: At 1440px, screenshot the windowed state; a user-visible enter control is present and the window is not already full screen.
- [GFS-18] MUST NOT offer a custom menu of window modes.
  HIG: Going full screen <https://developer.apple.com/design/human-interface-guidelines/going-full-screen> | Why: People find one familiar way to change the window size.
  Check@1440/390: At 1440px, screenshot the app's View and window menus; no custom window-mode menu appears.
- [GFS-19] MUST NOT change the display mode automatically when a game goes full screen.
  HIG: Going full screen <https://developer.apple.com/design/human-interface-guidelines/going-full-screen> | Why: People stay in control of their own display mode.
  Check@1440/390: not screenshot-checkable: requires reading the display configuration before and after entering full screen.

# Exclusions and persona notes

### Generative AI
Apple-specific, excluded:
- Genmoji and the Apple Intelligence summarization feature are cited as Apple feature examples.
- The FoundationModels framework and its requirement for a compatible device with Apple Intelligence turned on.
- Image Playground's "Unable to use that description" message is an Apple app's wording.
- The Vision framework and capturing body motion in 3D are cited as Apple framework examples of non-generative models.
- The developer documentation links (FoundationModels, CoreAI, ai-machine-learning) and the Foundation Models acceptable-use requirements are Apple frameworks and Apple policy.
Persona and journey notes:
- Person: someone who uses AI features to create content, communicate, or finish tasks, and who needs to know when AI is involved, what it can and cannot do, and what personal data leaves the device.
- Journey: first introduction (tutorial or capability statement), entering a request (guidance and example inputs), waiting for output (a specific progress message), reviewing output (choose, edit, retry, revert, dismiss), and giving feedback (optional).
- Journey: when a request is blocked or generation fails, the person needs an explanation and a clear next step.

### Going full screen
Apple-specific, excluded:
- Revealing the Dock in iPadOS and macOS full-screen apps, and ignoring an initial bottom-edge swipe (Apple OS feature).
- Hiding the Dock entirely in macOS (Apple OS feature).
- Home Screen indicator auto-hide and the one-swipe exit on iOS and iPadOS (Apple OS feature).
- Two-swipe exit option through preferredScreenEdgesDeferringSystemGestures (Apple framework).
- System-provided macOS full-screen support, including the camera housing accommodation (Apple OS feature).
- Enter Full Screen button, View menu item and Control-Command-F shortcut (Apple's own components and shortcut).
- Full-screen not supported on tvOS, visionOS or watchOS (Apple platforms).
- visionOS window toolbar hiding, Apple Vision Pro immersive expectations and Digital Crown passthrough (Apple hardware).
- Developer references: fullScreenCover, NSScreen, CollectionBehavior, toggleFullScreen, hideDock, managing-your-game-window-for-metal-in-macos (Apple frameworks).
Persona and journey notes:
- Persona: a player, a viewer of photos or video, or a person doing a focused, in-depth task.
- Journey: enter full screen, keep the controls they need, switch away and return to find their place, then exit when they choose.
