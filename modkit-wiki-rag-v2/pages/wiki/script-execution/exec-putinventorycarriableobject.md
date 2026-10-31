---
document_id: "5e2728897d3e7a232857692d636944b5f37d38b47b452b80caee5145a8c6c23b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-putinventorycarriableobject"
title: "Execute_PutInventoryCarriableObject"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:42+00:00"
content_sha256: "4ebdfd524ced620e00dcb546c3b65a053e49f80b8a8d5d7a8e3af401f5082b39"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-putinventorycarriableobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Puts the carriable object held in Self's right hand into an inventory. If S1 is "TargetInventory", the object is placed into the Target entity's inventory. Otherwise, it is placed into Self's own inventory.

# Parameters

| ParameterDescriptionBaseObjectNot directly used; Self entity always holds the object to be placedS1Optional "TargetInventory" to place into the Target's inventory; otherwise Self's own |
| --- |
| BaseObjectNot directly used; Self entity always holds the object to be placedS1Optional "TargetInventory" to place into the Target's inventory; otherwise Self's own |
| S1Optional "TargetInventory" to place into the Target's inventory; otherwise Self's own |

# Examples

| DescriptionBaseObjectCommandS1Put held object into Self's inventorySelfPutInventoryCarriableObjectPut held object into Target's inventorySelfPutInventoryCarriableObjectTargetInventory |
| --- |
| Put held object into Self's inventorySelfPutInventoryCarriableObjectPut held object into Target's inventorySelfPutInventoryCarriableObjectTargetInventory |
| Put held object into Target's inventorySelfPutInventoryCarriableObjectTargetInventory |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoInventory & Carried Objects[AddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttemplatetobag)[AddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttobag)[AttachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachgrabobject)[CancelInteractionBagByTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelinteractionbagbytag)[DestroyInventoryChild](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroyinventorychild)[DetachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachgrabobject)[HandOverGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-handovergrabobject)[OpenCommonBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencommonbox)[OpenGiftBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opengiftbox)[PickUpAttachCharacter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachcharacter)[PickUpAttachObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachobject)[PickUpServedFoodObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupservedfoodobject)
