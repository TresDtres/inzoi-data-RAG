---
document_id: "883c75a8ddca28a53e39a7c348b2995bc8df3148f87e62b0f04c208111f8ca3b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opengiftbox"
title: "Execute_OpenGiftBox"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:35+00:00"
content_sha256: "020614b14a72152f6506e01bc998eb52147c2ffcc425b93bf0bbd2e08f0a826b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-opengiftbox"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Self opens the Target gift box entity, spawns the contained gift object in Self's right hand, applies the relationship reward defined in the gift data, and removes the gift box from the manager. Also triggers the OpenGiftBox smart situation to expose Self's reaction.

# Note

Target must be a valid gift box entity registered in the GiftManager with Self as the recipient. If the gift object data is valid, the object is spawned and attached to Self's right hand with the appropriate grab animation.

# Parameters

| ParameterDescriptionBaseObjectThe character opening the gift box; Target is the gift box entity (Self) |
| --- |
| BaseObjectThe character opening the gift box; Target is the gift box entity (Self) |

# Examples

| DescriptionBaseObjectCommandSelf opens a gift box sent by someoneSelfOpenGiftBoxSelf opens gift box and receives the contained objectSelfOpenGiftBox |
| --- |
| Self opens a gift box sent by someoneSelfOpenGiftBoxSelf opens gift box and receives the contained objectSelfOpenGiftBox |
| Self opens gift box and receives the contained objectSelfOpenGiftBox |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoInventory & Carried Objects[AddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttemplatetobag)[AddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttobag)[AttachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachgrabobject)[CancelInteractionBagByTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelinteractionbagbytag)[DestroyInventoryChild](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroyinventorychild)[DetachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachgrabobject)[HandOverGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-handovergrabobject)[OpenCommonBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencommonbox)[PickUpAttachCharacter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachcharacter)[PickUpAttachObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachobject)[PickUpServedFoodObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupservedfoodobject)[PickUpSlotObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupslotobject)
