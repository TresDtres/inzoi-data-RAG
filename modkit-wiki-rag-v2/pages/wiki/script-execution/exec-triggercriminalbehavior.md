---
document_id: "29a886a19a95f6493011671a7c961cb3d6f9285b8600acdded481bc1bf090179"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-triggercriminalbehavior"
title: "Execute_TriggerCriminalBehavior"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:03+00:00"
content_sha256: "60394680adf869e08d7d7d08b2f37edd3c8f966f5ca074420b55643693786f3e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-triggercriminalbehavior"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Raises a criminal behavior on the BaseObject character from a script, for crimes that are not driven by a single interaction or talk (an active mode assault, for example).

The script only states that the behavior happened: which crime it is, how much score it adds and which conditions must pass all live in Crime data. S1 selects the crime and S2 selects the CriminalBehavior entries whose ScriptTriggerTags contains that key, so score tuning stays in one place instead of being spread across scripts.

Every matching entry is raised, one per entry, exactly like an interaction that belongs to several entries. For each of them it is the same pipeline as a criminal interaction/talk: one criminal behavior is recorded, the entry's ConditionIds decide whether the score is applied, CriminalBehaviorScriptIds always run, and CrimeReportScriptIds run once the accumulated score reaches CrimeScoreReportThreshold. Characters under HighTeen are ignored, and the score is clamped to the crime's CrimeScoreMin/Max.

# Parameters

| ParameterDescriptionBaseObjectThe character who committed the crimeS1Crime ID to raise, e.g. Crime_AssaultS2Script trigger key declared in that crime's CriminalBehaviors[].ScriptTriggerTags |
| --- |
| BaseObjectThe character who committed the crimeS1Crime ID to raise, e.g. Crime_AssaultS2Script trigger key declared in that crime's CriminalBehaviors[].ScriptTriggerTags |
| S1Crime ID to raise, e.g. Crime_AssaultS2Script trigger key declared in that crime's CriminalBehaviors[].ScriptTriggerTags |
| S2Script trigger key declared in that crime's CriminalBehaviors[].ScriptTriggerTags |

F1 and F2 are not used: scores are defined by the CriminalBehavior entry, not by the script. This command must not be placed in a crime's CriminalBehaviorScriptIds or CrimeReportScriptIds: those run inside crime processing, so re-entering the same crime would recurse forever. Data validation rejects that usage, and FB2CrimeComponent blocks re-entry per CrimeId at runtime.

# Examples

| DescriptionBaseObjectCommandS1S2Raise the active mode assault behavior on SelfSelfTriggerCriminalBehaviorCrime_AssaultActiveAssaultRaise the same behavior on the Target of the scriptTargetTriggerCriminalBehaviorCrime_AssaultActiveAssault |
| --- |
| Raise the active mode assault behavior on SelfSelfTriggerCriminalBehaviorCrime_AssaultActiveAssaultRaise the same behavior on the Target of the scriptTargetTriggerCriminalBehaviorCrime_AssaultActiveAssault |
| Raise the same behavior on the Target of the scriptTargetTriggerCriminalBehaviorCrime_AssaultActiveAssault |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoCrime, Loan & Insurance[AddAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addaggro)[AddInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinsurance)[AddRepossession](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepossession)[ClearAggro](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearaggro)[ClearAggroTargetingMe](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-clearaggrotargetingme)[CompleteSteal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completesteal)[GoToJail](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-gotojail)[LoanDisbursement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-loandisbursement)[LoanRepayment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-loanrepayment)[RemoveInsurance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removeinsurance)[ResetCrimeScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-resetcrimescore)[SeizeAndFineStolenObjects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-seizeandfinestolenobjects)
