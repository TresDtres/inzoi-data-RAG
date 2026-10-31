---
document_id: "b796caa5ccdc1645d1db63c08e0d57a19f5491fbde0fd7d2b88492aa5992f722"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawnnewinventoryobject"
title: "Execute_SpawnNewInventoryObject"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:58+00:00"
content_sha256: "d8b4348f788d0214bce53cf8c2470b7d69b82d5204d671a1fc930847ee57f07a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-spawnnewinventoryobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Creates a new CarriableObject and puts it directly into the BaseObject character's inventory. Unlike SpawnNewCarriableObject, this does not attach the object to the character's hand, so it can be safely used from any action type (not just PickUp).

# Parameters

| ParameterDescriptionBaseObjectThe character whose inventory will receive the spawned objectS1Object.Id to spawn (Object.json Id) |
| --- |
| BaseObjectThe character whose inventory will receive the spawned objectS1Object.Id to spawn (Object.json Id) |
| S1Object.Id to spawn (Object.json Id) |

# Examples

| DescriptionBaseObjectCommandS1Spawn souvenir into character's inventorySelfSpawnNewInventoryObjectShopStall_v01 |
| --- |
| Spawn souvenir into character's inventorySelfSpawnNewInventoryObjectShopStall_v01 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoInventory & Carried Objects[AddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttemplatetobag)[AddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttobag)[AttachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachgrabobject)[CancelInteractionBagByTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelinteractionbagbytag)[DestroyInventoryChild](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroyinventorychild)[DetachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachgrabobject)[HandOverGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-handovergrabobject)[OpenCommonBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencommonbox)[OpenGiftBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opengiftbox)[PickUpAttachCharacter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachcharacter)[PickUpAttachObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachobject)[PickUpServedFoodObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupservedfoodobject)
