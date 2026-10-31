---
document_id: "b4b116593a40c20c358c13fabb9715a3f8cc117039ca1dd803d9a53d1ee1c6c9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawnpickedinventoryobject"
title: "Execute_SpawnPickedInventoryObject"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:59+00:00"
content_sha256: "ffb17653d0980be63698bd238ed5e74df78d96019556423ee32669239240cbd5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-spawnpickedinventoryobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Takes the currently selected (picked) inventory object out of the inventory and attaches it to the right hand of the BaseObject character. The picked object is determined by the InteractionComponent's current interaction picked entity.

# Parameters

| ParameterDescriptionBaseObjectThe character who will receive the object taken out of the inventory |
| --- |
| BaseObjectThe character who will receive the object taken out of the inventory |

# Examples

| DescriptionBaseObjectCommandSelf picks up the selected item from inventorySelfSpawnPickedInventoryObjectTarget picks up the currently picked inventory itemTargetSpawnPickedInventoryObject |
| --- |
| Self picks up the selected item from inventorySelfSpawnPickedInventoryObjectTarget picks up the currently picked inventory itemTargetSpawnPickedInventoryObject |
| Target picks up the currently picked inventory itemTargetSpawnPickedInventoryObject |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoInventory & Carried Objects[AddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttemplatetobag)[AddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttobag)[AttachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachgrabobject)[CancelInteractionBagByTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelinteractionbagbytag)[DestroyInventoryChild](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroyinventorychild)[DetachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachgrabobject)[HandOverGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-handovergrabobject)[OpenCommonBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencommonbox)[OpenGiftBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opengiftbox)[PickUpAttachCharacter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachcharacter)[PickUpAttachObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachobject)[PickUpServedFoodObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupservedfoodobject)
