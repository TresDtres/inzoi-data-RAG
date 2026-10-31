---
document_id: "24de0f2abd9f6ae20192b85f3afaf1980af351612207bbe043efd6439a70d1da"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pregnancy"
title: "Execute_Pregnancy"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:39+00:00"
content_sha256: "c913ec5d3c4e16feb75397257382a3be68eac8de8560e8144b4cafd0c122d694"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-pregnancy"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Executes pregnancy-related functionality based on the instruction type in S1. Prepare: stores the father's genetics; the female between Self/Target receives them automatically. Start: begins pregnancy using last prepared genetics; the first state is PregnancyTest. Proceed: advances to the next pregnancy state; at ImminentBirth, triggers DA_Life FinishPregnancyLifeTriggerId. Cancel: cancels the pregnancy.

# Parameters

| ParameterDescriptionBaseObjectPregnant character target (Self or Target); Prepare auto-selects the pregnant targetS1Instruction type: Prepare, Start, Proceed, or Cancel |
| --- |
| BaseObjectPregnant character target (Self or Target); Prepare auto-selects the pregnant targetS1Instruction type: Prepare, Start, Proceed, or Cancel |
| S1Instruction type: Prepare, Start, Proceed, or Cancel |

# Examples

| DescriptionBaseObjectCommandPrepare pregnancy (store father's genetics)SelfPregnancyStart pregnancy after the attemptSelfPregnancyAdvance to the next pregnancy stateSelfPregnancyCancel the pregnancySelfPregnancy |
| --- |
| Prepare pregnancy (store father's genetics)SelfPregnancyStart pregnancy after the attemptSelfPregnancyAdvance to the next pregnancy stateSelfPregnancyCancel the pregnancySelfPregnancy |
| Start pregnancy after the attemptSelfPregnancyAdvance to the next pregnancy stateSelfPregnancyCancel the pregnancySelfPregnancy |
| Advance to the next pregnancy stateSelfPregnancyCancel the pregnancySelfPregnancy |
| Cancel the pregnancySelfPregnancy |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoFamily & Life Events[AddFamilyMonitoringNotification](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addfamilymonitoringnotification)[Adoption](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adoption)[ChildBirth](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-childbirth)[Cohabit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cohabit)[Death](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-death)[Divorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-divorce)[Marriage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-marriage)
