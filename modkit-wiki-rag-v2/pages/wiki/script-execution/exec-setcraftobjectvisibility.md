---
document_id: "a461616b5f0792668c3f2013f3a56d754f2b7b587be1667fc1d7f5c215318ee5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setcraftobjectvisibility"
title: "Execute_SetCraftObjectVisibility"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:54+00:00"
content_sha256: "4cc876606dff10500178e805a7d0bde7f9e5fef17e941caa491634b7bcf9054e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-setcraftobjectvisibility"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Sets the visibility (show or hide) of the current craft object of the BaseObject character. If S1 is "TRUE", the craft object is shown; any other value hides it.

# Parameters

| ParameterDescriptionBaseObjectThe character whose craft object visibility will be changedS1Visibility flag: "TRUE" to show, any other value to hide |
| --- |
| BaseObjectThe character whose craft object visibility will be changedS1Visibility flag: "TRUE" to show, any other value to hide |
| S1Visibility flag: "TRUE" to show, any other value to hide |

# Examples

| DescriptionBaseObjectCommandS1Show the craft object for SelfSelfSetCraftObjectVisibilityTRUEHide the craft object for SelfSelfSetCraftObjectVisibilityFALSEShow the craft object for TargetTargetSetCraftObjectVisibilityTRUE |
| --- |
| Show the craft object for SelfSelfSetCraftObjectVisibilityTRUEHide the craft object for SelfSelfSetCraftObjectVisibilityFALSEShow the craft object for TargetTargetSetCraftObjectVisibilityTRUE |
| Hide the craft object for SelfSelfSetCraftObjectVisibilityFALSEShow the craft object for TargetTargetSetCraftObjectVisibilityTRUE |
| Show the craft object for TargetTargetSetCraftObjectVisibilityTRUE |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoObject Spawn & Destroy[AddCraftingProgress](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcraftingprogress)[ChangeObjectWeathering](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeobjectweathering)[DeliverFreelanceCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancecraftobject)[DespawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-despawngameobject)[DestroyCarriableObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycarriableobject)[DestroyChildrenObjects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroychildrenobjects)[DestroyCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycraftobject)[PublishCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-publishcraftobject)[SetInvisible](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setinvisible)[SpawnFakeObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawnfakeobject)[SpawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobject)[SpawnGameObjectToAssignedRestaurantSlots](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobjecttoassignedrestaurantslots)
