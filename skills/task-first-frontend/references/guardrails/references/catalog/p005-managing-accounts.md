Legacy candidates - not requirements; use pages/ and the curated rule files.

# HIG extraction catalog: p005-managing-accounts

Raw extraction by a note-taking child (claude-haiku-5-5, subscription) on 2026-11-03 KST from the locally saved HIG pages. Curated guardrails in ../rules-*.md are chosen from here.

## Managing accounts (26 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/managing-accounts

- [MA-01] MUST ask people to create an account only when core functionality requires one.
  HIG: Managing accounts <https://developer.apple.com/design/human-interface-guidelines/managing-accounts> | Why: people use the app without an account they do not need
  Check@1440/390: 1440px and 390px captures of the entry screen show usable content with no sign-up gate (whether a feature counts as core needs a product-scope review)
- [MA-02] MUST explain the benefits of creating an account and how to sign up.
  HIG: Managing accounts <https://developer.apple.com/design/human-interface-guidelines/managing-accounts> | Why: people know what they gain before they commit to an account
  Check@1440/390: 1440px and 390px captures of the sign-up entry point show a benefit statement and the sign-up steps
- [MA-03] MUST show a brief, friendly reason and its benefits in the sign-in view when an account is required.
  HIG: Managing accounts <https://developer.apple.com/design/human-interface-guidelines/managing-accounts> | Why: people understand why they must sign in before they do it
  Check@1440/390: 1440px and 390px captures of the sign-in view show a short reason sentence above the form
- [MA-04] MUST NOT force sign-in before people can do anything useful; ask for sign-in only when the action they take needs an account.
  HIG: Managing accounts <https://developer.apple.com/design/human-interface-guidelines/managing-accounts> | Why: people do not abandon the app at a sign-in wall before seeing its value
  Check@1440/390: 1440px and 390px captures of first launch reach a useful screen with no sign-in prompt, and the prompt appears only at the action that needs an account
- [MA-05] MUST prefer passkeys over passwords for account creation and sign-in.
  HIG: Managing accounts <https://developer.apple.com/design/human-interface-guidelines/managing-accounts> | Why: people skip creating and remembering passwords
  Check@1440/390: 1440px and 390px captures of the sign-up and sign-in screens show a passkey path where the person enters only a user name
- [MA-06] MUST require two-factor authentication whenever the app still uses passwords.
  HIG: Managing accounts <https://developer.apple.com/design/human-interface-guidelines/managing-accounts> | Why: a stolen password alone does not open the account
  Check@1440/390: 1440px and 390px captures of the password sign-in flow show a second-factor step after the password entry
- [MA-07] MUST name the specific authentication method on its sign-in control, for example "Sign In with Face ID" rather than "Sign In".
  HIG: Managing accounts <https://developer.apple.com/design/human-interface-guidelines/managing-accounts> | Why: people know what will happen before they tap
  Check@1440/390: 1440px and 390px captures of the sign-in screen show a button label that names the method
- [MA-08] MUST show only the authentication methods available on the current device and in the current context.
  HIG: Managing accounts <https://developer.apple.com/design/human-interface-guidelines/managing-accounts> | Why: people never tap a method that cannot work on their device
  Check@1440/390: not screenshot-checkable: availability depends on device capability; a reviewer runs the sign-in flow on a device without the method and confirms its control is absent
- [MA-09] MUST NOT offer an in-app biometric opt-in setting when the operating system already controls that choice.
  HIG: Managing accounts <https://developer.apple.com/design/human-interface-guidelines/managing-accounts> | Why: people avoid a redundant toggle that could confuse them
  Check@1440/390: 1440px and 390px captures of the account and settings screens show no biometric opt-in toggle
- [MA-10] MUST NOT use the term "passcode" for account authentication.
  HIG: Managing accounts <https://developer.apple.com/design/human-interface-guidelines/managing-accounts> | Why: people do not think they must reuse their device unlock code in the app
  Check@1440/390: 1440px and 390px captures of the sign-in and settings screens show no "passcode" wording
- [MA-11] MUST let people delete an account they created in the app, not only deactivate it.
  HIG: Managing accounts <https://developer.apple.com/design/human-interface-guidelines/managing-accounts> | Why: people can actually remove their data and account
  Check@1440/390: 1440px and 390px captures of the account settings show a delete action distinct from any deactivate action
- [MA-12] MUST comply with the legal requirements for account deletion and the right to be forgotten in each region the app serves.
  HIG: Managing accounts <https://developer.apple.com/design/human-interface-guidelines/managing-accounts> | Why: people in each region get the deletion rights the law gives them
  Check@1440/390: not screenshot-checkable: legal compliance needs a jurisdiction and policy review
- [MA-13] MUST clearly explain which accounts or information the app must keep, and the process it must follow, when law prevents full deletion.
  HIG: Managing accounts <https://developer.apple.com/design/human-interface-guidelines/managing-accounts> | Why: people understand what remains and why before they confirm
  Check@1440/390: 1440px and 390px captures of the deletion flow show a retained-data notice before the confirm step
- [MA-14] MUST provide a clear way to start account deletion inside the app.
  HIG: Managing accounts <https://developer.apple.com/design/human-interface-guidelines/managing-accounts> | Why: people can delete without leaving the app
  Check@1440/390: 1440px and 390px captures of the account settings show a visible delete entry point
- [MA-15] MUST link directly to a web page where people can delete their account when the app cannot do it, and that link must be easy to find, not buried in the privacy policy or terms.
  HIG: Managing accounts <https://developer.apple.com/design/human-interface-guidelines/managing-accounts> | Why: people always have a route to delete and need not hunt for it
  Check@1440/390: 1440px and 390px captures of the account settings show the deletion link outside the privacy policy and terms pages
- [MA-16] MUST give the same account-deletion experience in the app and on the website, with neither version longer or more complicated than the other.
  HIG: Managing accounts <https://developer.apple.com/design/human-interface-guidelines/managing-accounts> | Why: people get the same result and effort whichever route they choose
  Check@1440/390: 1440px and 390px captures of both the in-app and web deletion flows show the same steps and the same number of screens
- [MA-17] MUST offer immediate deletion whenever the app offers scheduled account deletion.
  HIG: Managing accounts <https://developer.apple.com/design/human-interface-guidelines/managing-accounts> | Why: people who want the account gone now can do it now
  Check@1440/390: 1440px and 390px captures of the deletion screen show an immediate option beside any scheduled option
- [MA-18] MUST tell people when account deletion will complete.
  HIG: Managing accounts <https://developer.apple.com/design/human-interface-guidelines/managing-accounts> | Why: people know what to expect because full deletion can take time
  Check@1440/390: 1440px and 390px captures of the deletion confirmation show a completion timing statement
- [MA-19] MUST notify people when account deletion has finished.
  HIG: Managing accounts <https://developer.apple.com/design/human-interface-guidelines/managing-accounts> | Why: people know the process is over without checking again
  Check@1440/390: 1440px and 390px captures of the completion notice, shown after deletion finishes, show a finished-status message
- [MA-20] MUST explain that a paid subscription keeps billing until it is cancelled, even after the account is deleted, when the app sells purchases.
  HIG: Managing accounts <https://developer.apple.com/design/human-interface-guidelines/managing-accounts> | Why: people avoid being charged after they think they have left
  Check@1440/390: 1440px and 390px captures of the deletion flow show a billing notice when the account has an active subscription
- [MA-21] MUST tell people to cancel their subscription or request a refund after deleting the account, when the app sells purchases.
  HIG: Managing accounts <https://developer.apple.com/design/human-interface-guidelines/managing-accounts> | Why: people know the one step that stops charges and gets money back
  Check@1440/390: 1440px and 390px captures of the post-deletion screen show the cancel and refund instructions
- [MA-22] MUST give instructions for cancelling subscriptions and managing purchases when the app sells purchases.
  HIG: Managing accounts <https://developer.apple.com/design/human-interface-guidelines/managing-accounts> | Why: people can stop or change a purchase without contacting support
  Check@1440/390: 1440px and 390px captures of the help or account screen show the cancel and manage-purchases steps
- [MA-23] MUST support account deletion even when the subscription was bought outside the app.
  HIG: Managing accounts <https://developer.apple.com/design/human-interface-guidelines/managing-accounts> | Why: people can delete their account whatever channel they paid through
  Check@1440/390: 1440px and 390px captures of the deletion entry point show it for an account whose subscription was bought elsewhere
- [MA-24] MUST ask only for the minimum information needed when entering text is difficult.
  HIG: Managing accounts <https://developer.apple.com/design/human-interface-guidelines/managing-accounts> | Why: people finish sign-up without a long, slow form
  Check@1440/390: 1440px and 390px captures of the sign-up screen show only the fields required to create the account
- [MA-25] MUST let people sign up or authenticate on another device when entering information on the current device is hard.
  HIG: Managing accounts <https://developer.apple.com/design/human-interface-guidelines/managing-accounts> | Why: people finish sign-in on a device that is easy to type on
  Check@1440/390: 1440px and 390px captures of the sign-in screen show a sign-in or sign-up option that uses another device
- [MA-26] MUST direct people to a website on another device when the information they must enter is more than a small amount.
  HIG: Managing accounts <https://developer.apple.com/design/human-interface-guidelines/managing-accounts> | Why: people avoid typing a long form on a hard-to-type device
  Check@1440/390: 1440px and 390px captures of the sign-up screen show a website link for a long form instead of an inline form

# Exclusions and persona notes

### Managing accounts
Apple-specific, excluded:
- Sign in with Apple as the recommended sign-in service, its developer guidance, and revoking its tokens on account deletion (Apple sign-in service; the generic sign-in and deletion rules above are kept).
- Passkey developer guidance via Authentication Services, iCloud Keychain verification codes, and LABiometryType guidance (Apple frameworks; the passkey and two-factor rules are kept generically).
- Face ID as the example authentication method name (Apple hardware; rule 7 is kept with generic wording).
- TV Provider Authentication, sign-out through Settings > TV Provider, and the statement that Settings > Privacy is not a sign-out control (Apple TV OS features and Settings structure).
- tvOS shared-account profile handling, user-independent keychain, and the user-management entitlement (Apple frameworks).
- tvOS email keyboard screen with recent addresses and associated-domain credential suggestions (Apple system components and OS features).
- watchOS iCloud Keychain sync for autofill (Apple OS feature).
- Apple billing and the in-app purchase subscription help links (Apple billing system; the billing and cancellation rules above are kept generically).
Persona and journey notes:
- A person who wants to try the app before committing and leaves when forced to sign in at launch; the journey is browse first, then sign in only at the moment an account is needed.
- A person who wants their account and data fully removed, possibly with a paid subscription, and needs a completion time, a finished notice, and billing guidance.
- A person whose legal records must be kept after a deletion request, who needs to know what remains and the process that applies.
- A TV viewer who enters text with a remote, possibly on a device shared with other household members.
