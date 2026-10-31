---
document_id: "b0f294031572731c7616bdcc2c8bdc6ee0227f53092cb86fc0f90d7bdf277bab"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-putdowndetachobject"
title: "Execute_PutDownDetachObject"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:41+00:00"
content_sha256: "d3f3ff16d625bfd33cd33cc9e002738a7f326b51451285ea03ec0f9ce85b1b9e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-putdowndetachobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Detaches the carriable object from the Self character's hand and puts it down. The object can be placed on the Target object's slot, on the floor, or into inventory. Uses PutDownContext to determine which hand to release. If S1 is "Destroy", the held object is destroyed.

# Note

If TargetEntityId has an available slot for the held object, places it there and attaches as a grouping object. If PendingPutDown is set (floor placement), places the object at the pending floor location with collision enabled.

# Parameters

| ParameterDescriptionBaseObjectNot directly used; Self detaches and puts down the held objectS1Optional "Destroy" to destroy the held object instead of placing it |
| --- |
| BaseObjectNot directly used; Self detaches and puts down the held objectS1Optional "Destroy" to destroy the held object instead of placing it |
| S1Optional "Destroy" to destroy the held object instead of placing it |

# Examples

| DescriptionBaseObjectCommandPut down held object on table slot or floorSelfPutDownDetachObjectDestroy the held object instead of placing itSelfPutDownDetachObject |
| --- |
| Put down held object on table slot or floorSelfPutDownDetachObjectDestroy the held object instead of placing itSelfPutDownDetachObject |
| Destroy the held object instead of placing itSelfPutDownDetachObject |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoInventory & Carried Objects[AddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttemplatetobag)[AddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttobag)[AttachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachgrabobject)[CancelInteractionBagByTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelinteractionbagbytag)[DestroyInventoryChild](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroyinventorychild)[DetachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachgrabobject)[HandOverGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-handovergrabobject)[OpenCommonBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencommonbox)[OpenGiftBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opengiftbox)[PickUpAttachCharacter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachcharacter)[PickUpAttachObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachobject)[PickUpServedFoodObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupservedfoodobject)
