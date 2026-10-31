---
document_id: "bc1d33cbdd30f0c78e3ed21b33d199f99eeb751129433f4cce4e08d29e673cdf"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setinvisible"
title: "Execute_SetInvisible"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:55+00:00"
content_sha256: "1ceb3b628f852ae8def76b1a0952cfa881fb713c707fef9c988071e60e79e333"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-setinvisible"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Sets the visibility of the specified character. When F1 is non-zero the character is hidden; when F1 is near zero the character becomes visible. A reason string (S1) is required, and all active reasons must be cleared before visibility is fully restored.

# Parameters

| ParameterDescriptionBaseObjectThe character whose visibility will be changed (Self or Target).S1Reason identifier for this visibility change (e.g. "Sleep", "HiddenInCutscene").F1Non-zero value to hide the character; near-zero (0.0) to make visible. |
| --- |
| BaseObjectThe character whose visibility will be changed (Self or Target).S1Reason identifier for this visibility change (e.g. "Sleep", "HiddenInCutscene").F1Non-zero value to hide the character; near-zero (0.0) to make visible. |
| S1Reason identifier for this visibility change (e.g. "Sleep", "HiddenInCutscene").F1Non-zero value to hide the character; near-zero (0.0) to make visible. |
| F1Non-zero value to hide the character; near-zero (0.0) to make visible. |

# Examples

| DescriptionBaseObjectCommandS1F1Hides self with reason Sleep.SelfSetInvisibleSleep1.0Restores self visibility with reason Sleep.SelfSetInvisibleSleep0.0Hides target with reason HiddenInCutscene.TargetSetInvisibleHiddenInCutscene1.0Restores target visibility with reason HiddenInCutscene.TargetSetInvisibleHiddenInCutscene0.0 |
| --- |
| Hides self with reason Sleep.SelfSetInvisibleSleep1.0Restores self visibility with reason Sleep.SelfSetInvisibleSleep0.0Hides target with reason HiddenInCutscene.TargetSetInvisibleHiddenInCutscene1.0Restores target visibility with reason HiddenInCutscene.TargetSetInvisibleHiddenInCutscene0.0 |
| Restores self visibility with reason Sleep.SelfSetInvisibleSleep0.0Hides target with reason HiddenInCutscene.TargetSetInvisibleHiddenInCutscene1.0Restores target visibility with reason HiddenInCutscene.TargetSetInvisibleHiddenInCutscene0.0 |
| Hides target with reason HiddenInCutscene.TargetSetInvisibleHiddenInCutscene1.0Restores target visibility with reason HiddenInCutscene.TargetSetInvisibleHiddenInCutscene0.0 |
| Restores target visibility with reason HiddenInCutscene.TargetSetInvisibleHiddenInCutscene0.0 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoObject Spawn & Destroy[AddCraftingProgress](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcraftingprogress)[ChangeObjectWeathering](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeobjectweathering)[DeliverFreelanceCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancecraftobject)[DespawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-despawngameobject)[DestroyCarriableObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycarriableobject)[DestroyChildrenObjects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroychildrenobjects)[DestroyCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycraftobject)[PublishCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-publishcraftobject)[SetCraftObjectVisibility](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setcraftobjectvisibility)[SpawnFakeObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawnfakeobject)[SpawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobject)[SpawnGameObjectToAssignedRestaurantSlots](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobjecttoassignedrestaurantslots)
