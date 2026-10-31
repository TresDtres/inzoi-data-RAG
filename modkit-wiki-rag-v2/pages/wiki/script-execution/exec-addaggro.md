---
document_id: "165e7603873d5b15a716f9fd7fbc0f99bc41e2150a653e417d47c6ab59a5ae33"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addaggro"
title: "Execute_AddAggro"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:03+00:00"
content_sha256: "5bcd48be15807c6ff85bb7e6271b70b072e36f5f0375b23e5696dfcad86f0e28"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addaggro"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds aggro from BaseObject (Source) to NonBaseObject (Target) for the given Reason. Routes to B2AggroHelper::AddAggro, which delegates to FB2AggroManager.

S1 is the AggroReason — must be a row Id from Aggro.json (e.g. AttackedByOther, Threatened). F1 is the aggro value, cast to int32. Non-positive values are rejected to keep parity with manager-side AddAggro guards.

# Parameters

| ParameterDescriptionBaseObjectThe Source character (the one whose aggro entry is updated)NonBaseObjectThe Target character (resolved automatically as the opposite of BaseObject)S1AggroReason — Aggro.json TableRow Id (e.g. AttackedByOther)F1AggroValue — positive integer accumulated into the (Source, Target) Reason bucket |
| --- |
| BaseObjectThe Source character (the one whose aggro entry is updated)NonBaseObjectThe Target character (resolved automatically as the opposite of BaseObject)S1AggroReason — Aggro.json TableRow Id (e.g. AttackedByOther)F1AggroValue — positive integer accumulated into the (Source, Target) Reason bucket |
| NonBaseObjectThe Target character (resolved automatically as the opposite of BaseObject)S1AggroReason — Aggro.json TableRow Id (e.g. AttackedByOther)F1AggroValue — positive integer accumulated into the (Source, Target) Reason bucket |
| S1AggroReason — Aggro.json TableRow Id (e.g. AttackedByOther)F1AggroValue — positive integer accumulated into the (Source, Target) Reason bucket |
| F1AggroValue — positive integer accumulated into the (Source, Target) Reason bucket |

# Examples

| DescriptionBaseObjectCommandS1F1Self gains 50 AttackedByOther aggro toward TargetSelfAddAggroAttackedByOther50Target gains 30 ItemStolen aggro toward SelfTargetAddAggroItemStolen30 |
| --- |
| Self gains 50 AttackedByOther aggro toward TargetSelfAddAggroAttackedByOther50Target gains 30 ItemStolen aggro toward SelfTargetAddAggroItemStolen30 |
| Target gains 30 ItemStolen aggro toward SelfTargetAddAggroItemStolen30 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCrime, Loan & Insurance[AddInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinsurance)[AddRepossession](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepossession)[ClearAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearaggro)[ClearAggroTargetingMe](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearaggrotargetingme)[CompleteSteal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completesteal)[GoToJail](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-gotojail)[LoanDisbursement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-loandisbursement)[LoanRepayment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-loanrepayment)[RemoveInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removeinsurance)[ResetCrimeScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-resetcrimescore)[SeizeAndFineStolenObjects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-seizeandfinestolenobjects)[SetStolenDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setstolendriving)
