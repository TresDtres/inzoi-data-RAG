---
document_id: "c51e2d288e4a0da73951678363dd5d1e28ed0fb414d278c91ffa217c152ca037"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removemodifiertochildrenwithtag"
title: "Execute_RemoveModifierToChildrenWithTag"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:45+00:00"
content_sha256: "41573570545feeabbfd2264dfde4c6252c1730309d926bebac28b876165c826e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-removemodifiertochildrenwithtag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Removes the specified modifier from every child of the base object that has a matching object tag.

# Parameters

| ParameterDescriptionBaseObjectThe parent entity whose children are searched.S1The modifier ID to remove from matching children.S2The object tag used to filter which children lose the modifier. |
| --- |
| BaseObjectThe parent entity whose children are searched.S1The modifier ID to remove from matching children.S2The object tag used to filter which children lose the modifier. |
| S1The modifier ID to remove from matching children.S2The object tag used to filter which children lose the modifier. |
| S2The object tag used to filter which children lose the modifier. |

# Examples

| DescriptionBaseObjectCommandS1S2Remove frozen modifier from all tagged children of SelfSelfRemoveModifierToChildrenWithTagModifier_FrozenTag_FoodRemove spoiled modifier from all tagged children of TargetTargetRemoveModifierToChildrenWithTagModifier_SpoiledTag_Organic |
| --- |
| Remove frozen modifier from all tagged children of SelfSelfRemoveModifierToChildrenWithTagModifier_FrozenTag_FoodRemove spoiled modifier from all tagged children of TargetTargetRemoveModifierToChildrenWithTagModifier_SpoiledTag_Organic |
| Remove spoiled modifier from all tagged children of TargetTargetRemoveModifierToChildrenWithTagModifier_SpoiledTag_Organic |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoStat, Buff & Desire[AddAllBizModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addallbizmodifier)[AddBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addbuff)[AddCalorie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcalorie)[AddHowling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhowling)[AddModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifier)[AddModifierToChildrenWithTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifiertochildrenwithtag)[AddMuscleImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmuscleimmediate)[AddObesityImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobesityimmediate)[AddPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addperspective)[AddRandomBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrandombuff)[AddScaledStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addscaledstat)[AddStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addstat)
