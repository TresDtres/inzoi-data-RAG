---
document_id: "2b5b7c8d9837faccf0d320d770594f51fe152095d23a1d694b4bd5de300df6df"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearaggro"
title: "Execute_ClearAggro"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:21+00:00"
content_sha256: "d6500f6bd3e2c922583c949350bbda326d8db572ea5fd8145711f721f773254d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-clearaggro"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Clears aggro held by BaseObject (Source). Behavior branches on S1:

- S1 == NAME_None → RemoveAggro: clears all aggro entries on Source.
- S1 == "Target" → RemoveAggroForTarget: clears only the entry against NonBaseObject.
- S1 == AggroReason → DecreaseAggroByReason: subtracts the matching Reason bucket across all of Source's entries. F1 > 0 subtracts that amount; F1 <= 0 subtracts INT32_MAX, effectively zeroing the bucket.

"Target" is a literal sentinel string (case-sensitive). It is not an Aggro.json row Id, so there is no collision risk with Reason values.

# Parameters

| ParameterDescriptionBaseObjectThe Source character whose aggro is being clearedNonBaseObjectUsed only when S1 == "Target" (resolved automatically as the opposite of BaseObject)S1NAME_None: clear all. "Target": clear only NonBaseObject entry. Else: AggroReason.F1When S1 is an AggroReason and F1 > 0, subtract F1 from the matching bucket |
| --- |
| BaseObjectThe Source character whose aggro is being clearedNonBaseObjectUsed only when S1 == "Target" (resolved automatically as the opposite of BaseObject)S1NAME_None: clear all. "Target": clear only NonBaseObject entry. Else: AggroReason.F1When S1 is an AggroReason and F1 > 0, subtract F1 from the matching bucket |
| NonBaseObjectUsed only when S1 == "Target" (resolved automatically as the opposite of BaseObject)S1NAME_None: clear all. "Target": clear only NonBaseObject entry. Else: AggroReason.F1When S1 is an AggroReason and F1 > 0, subtract F1 from the matching bucket |
| S1NAME_None: clear all. "Target": clear only NonBaseObject entry. Else: AggroReason.F1When S1 is an AggroReason and F1 > 0, subtract F1 from the matching bucket |
| F1When S1 is an AggroReason and F1 > 0, subtract F1 from the matching bucket |

# Examples

| DescriptionBaseObjectCommandS1F1Clear all of Self's aggro entriesSelfClearAggroClear Self's aggro entry toward NonBaseObject onlySelfClearAggroTargetSubtract 20 AttackedByOther aggro from all of Self's entriesSelfClearAggroAttackedByOther20Fully clear AttackedByOther reason bucket on all entriesSelfClearAggroAttackedByOther |
| --- |
| Clear all of Self's aggro entriesSelfClearAggroClear Self's aggro entry toward NonBaseObject onlySelfClearAggroTargetSubtract 20 AttackedByOther aggro from all of Self's entriesSelfClearAggroAttackedByOther20Fully clear AttackedByOther reason bucket on all entriesSelfClearAggroAttackedByOther |
| Clear Self's aggro entry toward NonBaseObject onlySelfClearAggroTargetSubtract 20 AttackedByOther aggro from all of Self's entriesSelfClearAggroAttackedByOther20Fully clear AttackedByOther reason bucket on all entriesSelfClearAggroAttackedByOther |
| Subtract 20 AttackedByOther aggro from all of Self's entriesSelfClearAggroAttackedByOther20Fully clear AttackedByOther reason bucket on all entriesSelfClearAggroAttackedByOther |
| Fully clear AttackedByOther reason bucket on all entriesSelfClearAggroAttackedByOther |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCrime, Loan & Insurance[AddAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addaggro)[AddInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinsurance)[AddRepossession](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepossession)[ClearAggroTargetingMe](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearaggrotargetingme)[CompleteSteal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completesteal)[GoToJail](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-gotojail)[LoanDisbursement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-loandisbursement)[LoanRepayment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-loanrepayment)[RemoveInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removeinsurance)[ResetCrimeScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-resetcrimescore)[SeizeAndFineStolenObjects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-seizeandfinestolenobjects)[SetStolenDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setstolendriving)
