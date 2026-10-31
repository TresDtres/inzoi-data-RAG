---
document_id: "831326d6592d6b3513529e1ee26ad0776089de008999bdebdb07c87947bc6519"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-inventorychildremovemodifier"
title: "Execute_InventoryChildRemoveModifier"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:31+00:00"
content_sha256: "5cc9d314f1fcdd91f6d7edc7a28afbc99d479aa4b5a4f95462759b7a44d5f4a8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-inventorychildremovemodifier"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Removes the specified modifier from all child objects currently stored in the inventory of the base entity.

# Parameters

| ParameterDescriptionBaseObjectThe inventory owner whose child objects lose the modifier.S1The modifier ID to remove (must not be None). |
| --- |
| BaseObjectThe inventory owner whose child objects lose the modifier.S1The modifier ID to remove (must not be None). |
| S1The modifier ID to remove (must not be None). |

# Examples

| DescriptionBaseObjectCommandS1Remove a frozen modifier from all items in Self's inventorySelfInventoryChildRemoveModifierModifier_FrozenRemove a spoiled modifier from all items in Target's inventoryTargetInventoryChildRemoveModifierModifier_Spoiled |
| --- |
| Remove a frozen modifier from all items in Self's inventorySelfInventoryChildRemoveModifierModifier_FrozenRemove a spoiled modifier from all items in Target's inventoryTargetInventoryChildRemoveModifierModifier_Spoiled |
| Remove a spoiled modifier from all items in Target's inventoryTargetInventoryChildRemoveModifierModifier_Spoiled |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoStat, Buff & Desire[AddAllBizModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addallbizmodifier)[AddBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addbuff)[AddCalorie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcalorie)[AddHowling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhowling)[AddModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifier)[AddModifierToChildrenWithTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifiertochildrenwithtag)[AddMuscleImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmuscleimmediate)[AddObesityImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobesityimmediate)[AddPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addperspective)[AddRandomBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrandombuff)[AddScaledStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addscaledstat)[AddStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addstat)
