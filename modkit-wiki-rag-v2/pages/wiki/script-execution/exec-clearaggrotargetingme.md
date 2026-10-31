---
document_id: "e4d8da1d45139811ff1139771abe00bf209583e918aaadef38a39ff09200ddb1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearaggrotargetingme"
title: "Execute_ClearAggroTargetingMe"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:21+00:00"
content_sha256: "15c59ac4b0c427664aeb46fc30bcb060f7ca508f6dbc33cdaf360a6d249a9d76"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-clearaggrotargetingme"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Clears aggro that other characters hold toward BaseObject. This is the reverse direction of ClearAggro, which only ever touches aggro BaseObject itself holds, so the two do not overlap.

Every holder is reached because the sweep walks all aggro sources rather than a counterpart the script names. That is the point of this command: flipping ClearAggro's BaseObject to the other side only reaches the one character the script happens to know about, which breaks as soon as more than one character is pursuing BaseObject.

S1 empty removes every entry aimed at BaseObject. S1 as an AggroReason removes only that reason from those entries, leaving an entry alive when it still holds another reason - use it to stop one kind of pursuit without wiping aggro that has nothing to do with it.

What this does and does not stop: once an entry is gone no new chase toward BaseObject is started and no arrival fires, so the arrest or attack that would have landed does not. A chase already on its way is not cancelled though - the pursuer walks out its current path and ends there. Do not reach for this expecting a pursuer to halt on the spot. A holder left with no aggro at all walks back to where its pursuit began.

# Parameters

| ParameterDescriptionBaseObjectThe character being targeted, whose incoming aggro is clearedNonBaseObjectNot used - every holder is swept, not just the counterpartS1NAME_None: remove every entry aimed at BaseObject. Else: AggroReason to removeF1Not used - this always clears fully rather than decreasing |
| --- |
| BaseObjectThe character being targeted, whose incoming aggro is clearedNonBaseObjectNot used - every holder is swept, not just the counterpartS1NAME_None: remove every entry aimed at BaseObject. Else: AggroReason to removeF1Not used - this always clears fully rather than decreasing |
| NonBaseObjectNot used - every holder is swept, not just the counterpartS1NAME_None: remove every entry aimed at BaseObject. Else: AggroReason to removeF1Not used - this always clears fully rather than decreasing |
| S1NAME_None: remove every entry aimed at BaseObject. Else: AggroReason to removeF1Not used - this always clears fully rather than decreasing |
| F1Not used - this always clears fully rather than decreasing |

# Examples

| DescriptionBaseObjectCommandS1Stop everyone from pursuing SelfSelfClearAggroTargetingMeStop every police arrest pursuit aimed at the arrested targetTargetClearAggroTargetingMeAggro_Police_ArrestStop everyone attacking Self, keeping other pursuit reasonsSelfClearAggroTargetingMeAttackedByOther |
| --- |
| Stop everyone from pursuing SelfSelfClearAggroTargetingMeStop every police arrest pursuit aimed at the arrested targetTargetClearAggroTargetingMeAggro_Police_ArrestStop everyone attacking Self, keeping other pursuit reasonsSelfClearAggroTargetingMeAttackedByOther |
| Stop every police arrest pursuit aimed at the arrested targetTargetClearAggroTargetingMeAggro_Police_ArrestStop everyone attacking Self, keeping other pursuit reasonsSelfClearAggroTargetingMeAttackedByOther |
| Stop everyone attacking Self, keeping other pursuit reasonsSelfClearAggroTargetingMeAttackedByOther |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCrime, Loan & Insurance[AddAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addaggro)[AddInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinsurance)[AddRepossession](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepossession)[ClearAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearaggro)[CompleteSteal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completesteal)[GoToJail](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-gotojail)[LoanDisbursement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-loandisbursement)[LoanRepayment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-loanrepayment)[RemoveInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removeinsurance)[ResetCrimeScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-resetcrimescore)[SeizeAndFineStolenObjects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-seizeandfinestolenobjects)[SetStolenDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setstolendriving)
