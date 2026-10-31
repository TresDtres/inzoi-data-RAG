---
document_id: "3bd989e4b324fa6bf32cb2b32f0e5aab8623ee5ba151375651f76a19ee8aac5d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-modifygrabbedobjectstat"
title: "Execute_ModifyGrabbedObjectStat"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:33+00:00"
content_sha256: "f4184ccf4c25f609351141a028a371dcb3982dfeedd5f3270ea60bc68379efae"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-modifygrabbedobjectstat"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds a stat value to the object currently grabbed in the BaseObject's specified hand.

# Parameters

| ParameterDescriptionBaseObjectThe entity whose held (grabbed) object will have its stat modifiedS1Stat name to modify on the grabbed objectS2Hand type (EB1HandType enum name) specifying which hand to check, e.g., RightHand, LeftHandF1Amount of stat to add (negative values are allowed) |
| --- |
| BaseObjectThe entity whose held (grabbed) object will have its stat modifiedS1Stat name to modify on the grabbed objectS2Hand type (EB1HandType enum name) specifying which hand to check, e.g., RightHand, LeftHandF1Amount of stat to add (negative values are allowed) |
| S1Stat name to modify on the grabbed objectS2Hand type (EB1HandType enum name) specifying which hand to check, e.g., RightHand, LeftHandF1Amount of stat to add (negative values are allowed) |
| S2Hand type (EB1HandType enum name) specifying which hand to check, e.g., RightHand, LeftHandF1Amount of stat to add (negative values are allowed) |
| F1Amount of stat to add (negative values are allowed) |

# Examples

| DescriptionBaseObjectCommandS1S2F1Add 10 Hungry to the object in Self's right handSelfModifyGrabbedObjectStatHungryRightHand10Subtract 5 Energy from the object in Self's left handSelfModifyGrabbedObjectStatEnergyLeftHand-5Add 20 Cleanliness to the object grabbed in Target's right handTargetModifyGrabbedObjectStatCleanlinessRightHand20 |
| --- |
| Add 10 Hungry to the object in Self's right handSelfModifyGrabbedObjectStatHungryRightHand10Subtract 5 Energy from the object in Self's left handSelfModifyGrabbedObjectStatEnergyLeftHand-5Add 20 Cleanliness to the object grabbed in Target's right handTargetModifyGrabbedObjectStatCleanlinessRightHand20 |
| Subtract 5 Energy from the object in Self's left handSelfModifyGrabbedObjectStatEnergyLeftHand-5Add 20 Cleanliness to the object grabbed in Target's right handTargetModifyGrabbedObjectStatCleanlinessRightHand20 |
| Add 20 Cleanliness to the object grabbed in Target's right handTargetModifyGrabbedObjectStatCleanlinessRightHand20 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoStat, Buff & Desire[AddAllBizModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addallbizmodifier)[AddBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addbuff)[AddCalorie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcalorie)[AddHowling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhowling)[AddModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifier)[AddModifierToChildrenWithTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifiertochildrenwithtag)[AddMuscleImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmuscleimmediate)[AddObesityImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobesityimmediate)[AddPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addperspective)[AddRandomBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrandombuff)[AddScaledStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addscaledstat)[AddStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addstat)
