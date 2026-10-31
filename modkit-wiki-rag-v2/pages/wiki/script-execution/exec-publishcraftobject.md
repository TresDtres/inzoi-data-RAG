---
document_id: "5ae098f4f234bf99146977aec66532c7a887388632ec226ff1ae4cf6b8de93f7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-publishcraftobject"
title: "Execute_PublishCraftObject"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:40+00:00"
content_sha256: "5c2f5e239e4702ad23ed46da81290fa14e0b09ee20179bcbb2f18002d8225454"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-publishcraftobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Publishes the Target craft object for the Self character. Validates Self is a valid character, Target is a valid craft object owned by Self, then calls CareerComponent::TryPublishCraftObject to register a royalty contract, remove from inventory, and destroy the craft object.

# Parameters

| ParameterDescriptionSelfThe owner character who publishes the craft object.TargetThe craft object entity to be published. |
| --- |
| SelfThe owner character who publishes the craft object.TargetThe craft object entity to be published. |
| TargetThe craft object entity to be published. |

# Examples

| DescriptionCommandPublish the target craft object for SelfPublishCraftObject |
| --- |
| Publish the target craft object for SelfPublishCraftObject |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoObject Spawn & Destroy[AddCraftingProgress](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcraftingprogress)[ChangeObjectWeathering](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeobjectweathering)[DeliverFreelanceCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancecraftobject)[DespawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-despawngameobject)[DestroyCarriableObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycarriableobject)[DestroyChildrenObjects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroychildrenobjects)[DestroyCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycraftobject)[SetCraftObjectVisibility](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setcraftobjectvisibility)[SetInvisible](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setinvisible)[SpawnFakeObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawnfakeobject)[SpawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobject)[SpawnGameObjectToAssignedRestaurantSlots](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobjecttoassignedrestaurantslots)
