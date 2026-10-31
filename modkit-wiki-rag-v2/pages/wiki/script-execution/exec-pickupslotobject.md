---
document_id: "2c4c5727f6c89c02f3ee78ca3560e650ef99926d528e65b9975ea181d6bdb390"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupslotobject"
title: "Execute_PickUpSlotObject"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:37+00:00"
content_sha256: "859056d6888c028c457273e94a33c0f14e44d436ad664537f439347e5419fd4b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-pickupslotobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Picks up a carriable object from the specified slot on the Target object and attaches it to the Self character's hand. The slot must contain an occupying CarriableObject for the pickup to succeed.

# Note

If the selected hand already holds an object, the existing object is destroyed first.

# Parameters

| ParameterDescriptionBaseObjectNot directly used; Self picks up from the Target object's slotS2Slot name to pick up the object from (must contain a CarriableObject) |
| --- |
| BaseObjectNot directly used; Self picks up from the Target object's slotS2Slot name to pick up the object from (must contain a CarriableObject) |
| S2Slot name to pick up the object from (must contain a CarriableObject) |

# Examples

| DescriptionBaseObjectCommandS2Pick up a pizza slice from microwave slotSelfPickUpSlotObjectSlot_InsidePick up an item from a specific storage slotSelfPickUpSlotObjectSlot_Top_01 |
| --- |
| Pick up a pizza slice from microwave slotSelfPickUpSlotObjectSlot_InsidePick up an item from a specific storage slotSelfPickUpSlotObjectSlot_Top_01 |
| Pick up an item from a specific storage slotSelfPickUpSlotObjectSlot_Top_01 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoInventory & Carried Objects[AddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttemplatetobag)[AddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttobag)[AttachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachgrabobject)[CancelInteractionBagByTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelinteractionbagbytag)[DestroyInventoryChild](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroyinventorychild)[DetachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachgrabobject)[HandOverGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-handovergrabobject)[OpenCommonBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencommonbox)[OpenGiftBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opengiftbox)[PickUpAttachCharacter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachcharacter)[PickUpAttachObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachobject)[PickUpServedFoodObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupservedfoodobject)
