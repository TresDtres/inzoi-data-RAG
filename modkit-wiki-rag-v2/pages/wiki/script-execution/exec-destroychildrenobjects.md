---
document_id: "f344fcfaebef9794b0e9285d02f3c451498f527e4d48b6291849736914d78ca1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroychildrenobjects"
title: "Execute_DestroyChildrenObjects"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:25+00:00"
content_sha256: "cfd369b4fc6b2252441e97741b70c8649da62d1874f32b4b927586761d5185af"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-destroychildrenobjects"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Destroys all child objects of the BaseObject that have the specified object tag (S1).

# Parameters

| ParameterDescriptionBaseObjectThe parent object whose tagged children will be destroyedS1Object tag that child objects must have to be destroyed |
| --- |
| BaseObjectThe parent object whose tagged children will be destroyedS1Object tag that child objects must have to be destroyed |
| S1Object tag that child objects must have to be destroyed |

# Examples

| DescriptionBaseObjectCommandS1Remove all children with "Trash" tag from TargetTargetDestroyChildrenObjectsTrashDestroy children tagged "Food" from SelfSelfDestroyChildrenObjectsFoodClear "Ingredient" tagged children from Target containerTargetDestroyChildrenObjectsIngredient |
| --- |
| Remove all children with "Trash" tag from TargetTargetDestroyChildrenObjectsTrashDestroy children tagged "Food" from SelfSelfDestroyChildrenObjectsFoodClear "Ingredient" tagged children from Target containerTargetDestroyChildrenObjectsIngredient |
| Destroy children tagged "Food" from SelfSelfDestroyChildrenObjectsFoodClear "Ingredient" tagged children from Target containerTargetDestroyChildrenObjectsIngredient |
| Clear "Ingredient" tagged children from Target containerTargetDestroyChildrenObjectsIngredient |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoObject Spawn & Destroy[AddCraftingProgress](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcraftingprogress)[ChangeObjectWeathering](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeobjectweathering)[DeliverFreelanceCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancecraftobject)[DespawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-despawngameobject)[DestroyCarriableObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycarriableobject)[DestroyCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycraftobject)[PublishCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-publishcraftobject)[SetCraftObjectVisibility](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setcraftobjectvisibility)[SetInvisible](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setinvisible)[SpawnFakeObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawnfakeobject)[SpawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobject)[SpawnGameObjectToAssignedRestaurantSlots](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobjecttoassignedrestaurantslots)
