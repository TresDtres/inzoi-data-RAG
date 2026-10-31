---
document_id: "49c713b73ef8693d9658ce52a8438175b9a1c9e6406d856e2482f4745a79ddff"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-gotojail"
title: "Execute_GoToJail"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:30+00:00"
content_sha256: "e446ae5ad63a01a0d963e93ae569d2750301903d3a381131e795d92d7e36d741"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-gotojail"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Sends the BaseObject character to jail. Handles vehicle dismount, clears the current character state, teleports to the city prison, and applies the prisoner post-process (buff/outfit/timeline).

The delay is controlled by F1 (in-game minutes):

- F1 <= 0 (or near zero): sends to jail immediately (synchronous, not affected by interaction queue cancellation - useful right after the target is subdued).
- F1 > 0: schedules a one-shot TimeTask and sends to jail after the given in-game time elapses.

# Parameters

| ParameterDescriptionBaseObjectThe character to send to jail (Self or Target)F1Delay before imprisonment, in in-game minutes. <= 0 (or near zero) = immediate |
| --- |
| BaseObjectThe character to send to jail (Self or Target)F1Delay before imprisonment, in in-game minutes. <= 0 (or near zero) = immediate |
| F1Delay before imprisonment, in in-game minutes. <= 0 (or near zero) = immediate |

# Examples

| DescriptionBaseObjectCommandF1Send Self to jail immediatelySelfGoToJailSend the subdued Target to jail immediatelyTargetGoToJail0Send Self to jail after 60 in-game minutesSelfGoToJail60 |
| --- |
| Send Self to jail immediatelySelfGoToJailSend the subdued Target to jail immediatelyTargetGoToJail0Send Self to jail after 60 in-game minutesSelfGoToJail60 |
| Send the subdued Target to jail immediatelyTargetGoToJail0Send Self to jail after 60 in-game minutesSelfGoToJail60 |
| Send Self to jail after 60 in-game minutesSelfGoToJail60 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCrime, Loan & Insurance[AddAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addaggro)[AddInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinsurance)[AddRepossession](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepossession)[ClearAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearaggro)[ClearAggroTargetingMe](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearaggrotargetingme)[CompleteSteal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completesteal)[LoanDisbursement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-loandisbursement)[LoanRepayment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-loanrepayment)[RemoveInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removeinsurance)[ResetCrimeScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-resetcrimescore)[SeizeAndFineStolenObjects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-seizeandfinestolenobjects)[SetStolenDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setstolendriving)
