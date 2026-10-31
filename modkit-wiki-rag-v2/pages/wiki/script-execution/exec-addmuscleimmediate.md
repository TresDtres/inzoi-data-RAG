---
document_id: "74b415cc4d3baced3104e7c726e1e654a9ff2681e91370dba55f668093c3dbcc"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmuscleimmediate"
title: "Execute_AddMuscleImmediate"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:08+00:00"
content_sha256: "0ef7c51b2296db99333f89abbf3a024b1ee5eff61506e146e5966d9d9ced2b0d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addmuscleimmediate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Immediately increases or decreases the character's muscle mass value by the given delta amount.

# Parameters

| ParameterDescriptionBaseObjectThe character whose muscle mass value will be modified (Self or Target).F1Muscle delta to apply immediately (positive to increase, negative to decrease). |
| --- |
| BaseObjectThe character whose muscle mass value will be modified (Self or Target).F1Muscle delta to apply immediately (positive to increase, negative to decrease). |
| F1Muscle delta to apply immediately (positive to increase, negative to decrease). |

# Examples

| DescriptionBaseObjectCommandF1Immediately increases self's muscle mass by 1.SelfAddMuscleImmediate1Immediately decreases self's muscle mass by 1.SelfAddMuscleImmediate-1Immediately increases target's muscle mass by 2.TargetAddMuscleImmediate2Immediately decreases target's muscle mass by 2.TargetAddMuscleImmediate-2 |
| --- |
| Immediately increases self's muscle mass by 1.SelfAddMuscleImmediate1Immediately decreases self's muscle mass by 1.SelfAddMuscleImmediate-1Immediately increases target's muscle mass by 2.TargetAddMuscleImmediate2Immediately decreases target's muscle mass by 2.TargetAddMuscleImmediate-2 |
| Immediately decreases self's muscle mass by 1.SelfAddMuscleImmediate-1Immediately increases target's muscle mass by 2.TargetAddMuscleImmediate2Immediately decreases target's muscle mass by 2.TargetAddMuscleImmediate-2 |
| Immediately increases target's muscle mass by 2.TargetAddMuscleImmediate2Immediately decreases target's muscle mass by 2.TargetAddMuscleImmediate-2 |
| Immediately decreases target's muscle mass by 2.TargetAddMuscleImmediate-2 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoStat, Buff & Desire[AddAllBizModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addallbizmodifier)[AddBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addbuff)[AddCalorie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcalorie)[AddHowling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhowling)[AddModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifier)[AddModifierToChildrenWithTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifiertochildrenwithtag)[AddObesityImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobesityimmediate)[AddPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addperspective)[AddRandomBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrandombuff)[AddScaledStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addscaledstat)[AddStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addstat)[AddTransientDesireStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtransientdesirestat)
