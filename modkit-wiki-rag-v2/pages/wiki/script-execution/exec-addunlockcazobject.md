---
document_id: "fd75271df48a13a3bcc88657d8c08fe35a8f4662be522e76daa7da8321d289e1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addunlockcazobject"
title: "Execute_AddUnlockCAZObject"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:11+00:00"
content_sha256: "26cdc8aaddf043ce613d4444277a6824b06bedefdf8f08a384ebbdc07848d9be"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addunlockcazobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Unlocks a specific CAZ (customization) object for the BaseObject character, if it is not already unlocked.

# Parameters

| ParameterDescriptionBaseObjectThe character to unlock the CAZ object for (Self or Target).S1The Object ID of the CAZ item to unlock.S2The table name of the CAZ object (e.g., AttachedAccessoryMesh, GarmentTopMesh). Omit _E0x suffix for DLC. |
| --- |
| BaseObjectThe character to unlock the CAZ object for (Self or Target).S1The Object ID of the CAZ item to unlock.S2The table name of the CAZ object (e.g., AttachedAccessoryMesh, GarmentTopMesh). Omit _E0x suffix for DLC. |
| S1The Object ID of the CAZ item to unlock.S2The table name of the CAZ object (e.g., AttachedAccessoryMesh, GarmentTopMesh). Omit _E0x suffix for DLC. |
| S2The table name of the CAZ object (e.g., AttachedAccessoryMesh, GarmentTopMesh). Omit _E0x suffix for DLC. |

# Examples

| DescriptionBaseObjectCommandUnlock earring W_Earring009 for SelfSelfAddUnlockCAZObjectUnlock a hair mesh for TargetTargetAddUnlockCAZObjectUnlock a top garment for SelfSelfAddUnlockCAZObject |
| --- |
| Unlock earring W_Earring009 for SelfSelfAddUnlockCAZObjectUnlock a hair mesh for TargetTargetAddUnlockCAZObjectUnlock a top garment for SelfSelfAddUnlockCAZObject |
| Unlock a hair mesh for TargetTargetAddUnlockCAZObjectUnlock a top garment for SelfSelfAddUnlockCAZObject |
| Unlock a top garment for SelfSelfAddUnlockCAZObject |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoQuest, Memory & Milestone[AddDoodle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adddoodle)[AddMilestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmilestone)[AddUnlockGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addunlockgameobject)[ClearDoodles](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cleardoodles)[ProfileUnlock](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-profileunlock)[SendCollectionInformation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-sendcollectioninformation)
