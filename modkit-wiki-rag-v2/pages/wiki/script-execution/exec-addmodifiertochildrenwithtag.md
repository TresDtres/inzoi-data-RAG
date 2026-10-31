---
document_id: "65a6084d1a54cc1fb9dbe9892532ed164a959c2971df4d420b9544ab66fa25ba"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifiertochildrenwithtag"
title: "Execute_AddModifierToChildrenWithTag"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:08+00:00"
content_sha256: "bf087e1a64045e69c453247cad411d6fc2ceb2c618ecf988bbacbf4b03ce3563"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addmodifiertochildrenwithtag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds the specified modifier to every child of the base object that has a matching object tag.

# Parameters

| ParameterDescriptionBaseObjectThe parent entity whose children are searched.S1The modifier ID to add to matching children.S2The object tag used to filter which children receive the modifier. |
| --- |
| BaseObjectThe parent entity whose children are searched.S1The modifier ID to add to matching children.S2The object tag used to filter which children receive the modifier. |
| S1The modifier ID to add to matching children.S2The object tag used to filter which children receive the modifier. |
| S2The object tag used to filter which children receive the modifier. |

# Examples

| DescriptionBaseObjectCommandS1S2Add frozen modifier to all tagged children of SelfSelfAddModifierToChildrenWithTagModifier_FrozenTag_FoodAdd spoiled modifier to all tagged children of TargetTargetAddModifierToChildrenWithTagModifier_SpoiledTag_Organic |
| --- |
| Add frozen modifier to all tagged children of SelfSelfAddModifierToChildrenWithTagModifier_FrozenTag_FoodAdd spoiled modifier to all tagged children of TargetTargetAddModifierToChildrenWithTagModifier_SpoiledTag_Organic |
| Add spoiled modifier to all tagged children of TargetTargetAddModifierToChildrenWithTagModifier_SpoiledTag_Organic |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoStat, Buff & Desire[AddAllBizModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addallbizmodifier)[AddBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addbuff)[AddCalorie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcalorie)[AddHowling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhowling)[AddModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifier)[AddMuscleImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmuscleimmediate)[AddObesityImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobesityimmediate)[AddPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addperspective)[AddRandomBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrandombuff)[AddScaledStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addscaledstat)[AddStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addstat)[AddTransientDesireStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtransientdesirestat)
