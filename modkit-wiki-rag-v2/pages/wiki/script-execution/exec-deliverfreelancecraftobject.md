---
document_id: "d15827936db383484e54a7bfee787c9e760361e54ad3f07eee0bad78a5e531f9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancecraftobject"
title: "Execute_DeliverFreelanceCraftObject"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:24+00:00"
content_sha256: "524d753c4a054210318cf983ec4bdf978f1ecf74886b4c55dc56c50dd06769f0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-deliverfreelancecraftobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Delivers the Target craft object for the Self character's active freelance order. Validates Self is a valid character, Target is a valid craft object owned by Self, then calls FreelanceManager::DeliverCraftObject to complete the quest, remove from inventory, and destroy the craft object.

# Parameters

| ParameterDescriptionSelfThe owner character who delivers the craft object.TargetThe craft object entity to be delivered. |
| --- |
| SelfThe owner character who delivers the craft object.TargetThe craft object entity to be delivered. |
| TargetThe craft object entity to be delivered. |

# Examples

| DescriptionCommandDeliver the target craft object for Self's orderDeliverFreelanceCraftObject |
| --- |
| Deliver the target craft object for Self's orderDeliverFreelanceCraftObject |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoObject Spawn & Destroy[AddCraftingProgress](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcraftingprogress)[ChangeObjectWeathering](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeobjectweathering)[DespawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-despawngameobject)[DestroyCarriableObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycarriableobject)[DestroyChildrenObjects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroychildrenobjects)[DestroyCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycraftobject)[PublishCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-publishcraftobject)[SetCraftObjectVisibility](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setcraftobjectvisibility)[SetInvisible](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setinvisible)[SpawnFakeObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawnfakeobject)[SpawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobject)[SpawnGameObjectToAssignedRestaurantSlots](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobjecttoassignedrestaurantslots)
