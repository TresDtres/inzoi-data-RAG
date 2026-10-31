---
document_id: "dbad0826ab097e07c5e36114a39b6793ed71ce2827a01c7d1d9febcc9d253e39"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-putdowninventoryobject"
title: "Execute_PutDownInventoryObject"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:41+00:00"
content_sha256: "bf0f005f308b6385a2f4f492f4214b992af329f4e7c7051e757c647a08f689b5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-putdowninventoryobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Places the pending put-down object from Self's inventory into the Target slot or on the floor. If a Target entity exists, places the object into the corresponding slot on the Target object. If no Target entity exists, places the object on the floor at the pending floor location, enabling collision and updating the site pathfinding grid.

# Parameters

| ParameterDescriptionBaseObjectNot directly used; Self entity's inventory pending put-down object is placed |
| --- |
| BaseObjectNot directly used; Self entity's inventory pending put-down object is placed |

# Examples

| DescriptionBaseObjectCommandPlace pending inventory object onto Target slotSelfPutDownInventoryObjectPlace pending inventory object on the floorSelfPutDownInventoryObject |
| --- |
| Place pending inventory object onto Target slotSelfPutDownInventoryObjectPlace pending inventory object on the floorSelfPutDownInventoryObject |
| Place pending inventory object on the floorSelfPutDownInventoryObject |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoInventory & Carried Objects[AddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttemplatetobag)[AddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttobag)[AttachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachgrabobject)[CancelInteractionBagByTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelinteractionbagbytag)[DestroyInventoryChild](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroyinventorychild)[DetachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachgrabobject)[HandOverGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-handovergrabobject)[OpenCommonBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencommonbox)[OpenGiftBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opengiftbox)[PickUpAttachCharacter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachcharacter)[PickUpAttachObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachobject)[PickUpServedFoodObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupservedfoodobject)
