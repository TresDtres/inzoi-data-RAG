---
document_id: "6e7e112bb62156d02e16f1682b37477f4e99d4caea7e71a0ffca299bbda2fc45"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachobject"
title: "Execute_PickUpAttachObject"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:37+00:00"
content_sha256: "6d83618a6a6db2a22a5f54616ac51e583e543b57fcc68458b1c671e228b35d85"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-pickupattachobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Picks up the Target carriable object from the world and attaches it to the Self character's hand. Disables collision on the picked-up object and updates pathfinding if it was on the floor.

# Note

If the selected hand already holds an object, the existing object is destroyed first.

# Parameters

| ParameterDescriptionBaseObjectNot directly used; Self picks up the Target CarriableObject |
| --- |
| BaseObjectNot directly used; Self picks up the Target CarriableObject |

# Examples

| DescriptionBaseObjectCommandCharacter picks up a plate from a tableSelfPickUpAttachObjectCharacter picks up a tool from the floorSelfPickUpAttachObject |
| --- |
| Character picks up a plate from a tableSelfPickUpAttachObjectCharacter picks up a tool from the floorSelfPickUpAttachObject |
| Character picks up a tool from the floorSelfPickUpAttachObject |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoInventory & Carried Objects[AddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttemplatetobag)[AddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttobag)[AttachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachgrabobject)[CancelInteractionBagByTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelinteractionbagbytag)[DestroyInventoryChild](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroyinventorychild)[DetachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachgrabobject)[HandOverGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-handovergrabobject)[OpenCommonBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencommonbox)[OpenGiftBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opengiftbox)[PickUpAttachCharacter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachcharacter)[PickUpServedFoodObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupservedfoodobject)[PickUpSlotObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupslotobject)
