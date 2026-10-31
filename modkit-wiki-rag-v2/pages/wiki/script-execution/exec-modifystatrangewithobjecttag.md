---
document_id: "85db6b67ac196be05d0748b08ed07e0e1d99eccdd40e2847a345607261645cf3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-modifystatrangewithobjecttag"
title: "Execute_ModifyStatRangeWithObjectTag"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:33+00:00"
content_sha256: "57fad9d4cf2c8ca5a7f71cbbb2072b3908e5a379bb430dc890d68ad4758a3e2e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-modifystatrangewithobjecttag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds a stat value to all nearby game objects that have a matching ObjectTag, within the specified range from the BaseObject.

# Parameters

| ParameterDescriptionBaseObjectThe entity used as the origin point for the range checkS1Stat name to modify on matching objectsS2ObjectTag that target objects must haveF1Amount of stat to add (negative values are allowed)F2Maximum 2D distance (radius) from the BaseObject's location |
| --- |
| BaseObjectThe entity used as the origin point for the range checkS1Stat name to modify on matching objectsS2ObjectTag that target objects must haveF1Amount of stat to add (negative values are allowed)F2Maximum 2D distance (radius) from the BaseObject's location |
| S1Stat name to modify on matching objectsS2ObjectTag that target objects must haveF1Amount of stat to add (negative values are allowed)F2Maximum 2D distance (radius) from the BaseObject's location |
| S2ObjectTag that target objects must haveF1Amount of stat to add (negative values are allowed)F2Maximum 2D distance (radius) from the BaseObject's location |
| F1Amount of stat to add (negative values are allowed)F2Maximum 2D distance (radius) from the BaseObject's location |
| F2Maximum 2D distance (radius) from the BaseObject's location |

# Examples

| DescriptionBaseObjectCommandS1S2F1F2Add 10 Hungry to all "FoodItem" objects within 300 of SelfSelfModifyStatRangeWithObjectTagHungryFoodItem10300Subtract 5 Energy from all "Machine" objects within 500 of TargetTargetModifyStatRangeWithObjectTagEnergyMachine-5500Add 1 Cleanliness to all "Furniture" objects within 200 of SelfSelfModifyStatRangeWithObjectTagCleanlinessFurniture1200 |
| --- |
| Add 10 Hungry to all "FoodItem" objects within 300 of SelfSelfModifyStatRangeWithObjectTagHungryFoodItem10300Subtract 5 Energy from all "Machine" objects within 500 of TargetTargetModifyStatRangeWithObjectTagEnergyMachine-5500Add 1 Cleanliness to all "Furniture" objects within 200 of SelfSelfModifyStatRangeWithObjectTagCleanlinessFurniture1200 |
| Subtract 5 Energy from all "Machine" objects within 500 of TargetTargetModifyStatRangeWithObjectTagEnergyMachine-5500Add 1 Cleanliness to all "Furniture" objects within 200 of SelfSelfModifyStatRangeWithObjectTagCleanlinessFurniture1200 |
| Add 1 Cleanliness to all "Furniture" objects within 200 of SelfSelfModifyStatRangeWithObjectTagCleanlinessFurniture1200 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoStat, Buff & Desire[AddAllBizModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addallbizmodifier)[AddBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addbuff)[AddCalorie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcalorie)[AddHowling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhowling)[AddModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifier)[AddModifierToChildrenWithTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifiertochildrenwithtag)[AddMuscleImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmuscleimmediate)[AddObesityImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobesityimmediate)[AddPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addperspective)[AddRandomBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrandombuff)[AddScaledStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addscaledstat)[AddStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addstat)
