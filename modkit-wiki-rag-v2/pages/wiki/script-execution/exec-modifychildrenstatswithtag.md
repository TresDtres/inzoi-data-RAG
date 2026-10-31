---
document_id: "6529afad08f24843d8046fb90ee740a9c9b340aeac5d070dcc15e59ea65c6241"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-modifychildrenstatswithtag"
title: "Execute_ModifyChildrenStatsWithTag"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:33+00:00"
content_sha256: "544980bce0ef52451950f6d701677a6679a504a6c9ce65b6d70980536197e277"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-modifychildrenstatswithtag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds a stat value to all child entities of the BaseObject that have a matching ObjectTag.

# Parameters

| ParameterDescriptionBaseObjectThe parent entity whose children are iteratedS1Stat name to modify on matching child objectsS2ObjectTag that child objects must haveF1Amount of stat to add (negative values are allowed) |
| --- |
| BaseObjectThe parent entity whose children are iteratedS1Stat name to modify on matching child objectsS2ObjectTag that child objects must haveF1Amount of stat to add (negative values are allowed) |
| S1Stat name to modify on matching child objectsS2ObjectTag that child objects must haveF1Amount of stat to add (negative values are allowed) |
| S2ObjectTag that child objects must haveF1Amount of stat to add (negative values are allowed) |
| F1Amount of stat to add (negative values are allowed) |

# Examples

| DescriptionBaseObjectCommandS1S2F1Add 10 Hungry to all "FoodItem" children of SelfSelfModifyChildrenStatsWithTagHungryFoodItem10Subtract 5 Energy from all "Machine" children of TargetTargetModifyChildrenStatsWithTagEnergyMachine-5Add 1 Cleanliness to all "Furniture" children of SelfSelfModifyChildrenStatsWithTagCleanlinessFurniture1 |
| --- |
| Add 10 Hungry to all "FoodItem" children of SelfSelfModifyChildrenStatsWithTagHungryFoodItem10Subtract 5 Energy from all "Machine" children of TargetTargetModifyChildrenStatsWithTagEnergyMachine-5Add 1 Cleanliness to all "Furniture" children of SelfSelfModifyChildrenStatsWithTagCleanlinessFurniture1 |
| Subtract 5 Energy from all "Machine" children of TargetTargetModifyChildrenStatsWithTagEnergyMachine-5Add 1 Cleanliness to all "Furniture" children of SelfSelfModifyChildrenStatsWithTagCleanlinessFurniture1 |
| Add 1 Cleanliness to all "Furniture" children of SelfSelfModifyChildrenStatsWithTagCleanlinessFurniture1 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoStat, Buff & Desire[AddAllBizModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addallbizmodifier)[AddBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addbuff)[AddCalorie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcalorie)[AddHowling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhowling)[AddModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifier)[AddModifierToChildrenWithTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifiertochildrenwithtag)[AddMuscleImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmuscleimmediate)[AddObesityImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobesityimmediate)[AddPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addperspective)[AddRandomBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrandombuff)[AddScaledStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addscaledstat)[AddStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addstat)
