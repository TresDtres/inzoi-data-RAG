---
document_id: "e96c1872d288642b6ed7673bcb73f6c71ebcb695c0c8a93f0635598402643e60"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addperspective"
title: "Execute_AddPerspective"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:08+00:00"
content_sha256: "5cac18c258c2a7cb6a38aa58a470b4b2c6025d3bffd9dcdf39a8580d5da30fec"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addperspective"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds points to the specified perspective for the character. If the character is currently playing an interaction, the change is applied with a cooldown check; otherwise the probability is still applied but the cooldown check is skipped.

# Parameters

| ParameterDescriptionBaseObjectThe character whose perspective will be changed (Self or Target).S1The perspective name to add points to.S2The perspective category used for probability calculation.F1The value to add to the perspective point. |
| --- |
| BaseObjectThe character whose perspective will be changed (Self or Target).S1The perspective name to add points to.S2The perspective category used for probability calculation.F1The value to add to the perspective point. |
| S1The perspective name to add points to.S2The perspective category used for probability calculation.F1The value to add to the perspective point. |
| S2The perspective category used for probability calculation.F1The value to add to the perspective point. |
| F1The value to add to the perspective point. |

# Examples

| DescriptionBaseObjectCommandS1S2F1Increase Freedom perspective by 0.2SelfAddPerspectiveFreedomObject_Type0.2Increase Conservation perspective by 0.5SelfAddPerspectiveConservationObject_Type0.5Increase Authority perspective of Target by 0.3TargetAddPerspectiveAuthorityObject_Type0.3 |
| --- |
| Increase Freedom perspective by 0.2SelfAddPerspectiveFreedomObject_Type0.2Increase Conservation perspective by 0.5SelfAddPerspectiveConservationObject_Type0.5Increase Authority perspective of Target by 0.3TargetAddPerspectiveAuthorityObject_Type0.3 |
| Increase Conservation perspective by 0.5SelfAddPerspectiveConservationObject_Type0.5Increase Authority perspective of Target by 0.3TargetAddPerspectiveAuthorityObject_Type0.3 |
| Increase Authority perspective of Target by 0.3TargetAddPerspectiveAuthorityObject_Type0.3 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoStat, Buff & Desire[AddAllBizModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addallbizmodifier)[AddBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addbuff)[AddCalorie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcalorie)[AddHowling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhowling)[AddModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifier)[AddModifierToChildrenWithTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifiertochildrenwithtag)[AddMuscleImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmuscleimmediate)[AddObesityImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobesityimmediate)[AddRandomBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrandombuff)[AddScaledStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addscaledstat)[AddStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addstat)[AddTransientDesireStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtransientdesirestat)
