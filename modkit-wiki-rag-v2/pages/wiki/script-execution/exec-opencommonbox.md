---
document_id: "ec340456c342735452c580c2c7f4a75fbc6dca5617e04d729f7277f3070afe8a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencommonbox"
title: "Execute_OpenCommonBox"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:35+00:00"
content_sha256: "7ee709bf8fbd33a747c1be658da80872aa27111241cf66e8ad260ff6af6b0679"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-opencommonbox"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Deletes the target box and immediately adds the objects it contained to Self's inventory. Self is the Zoi who opens the box; Target is the box object. BaseObject must always be Self. If S1 is set to InBulk, all parcel boxes with the same recipient within the lot are opened at once.

# Parameters

| ParameterDescriptionBaseObjectMust be Self (the Zoi receiving the items)S1Set to InBulk to open all matching parcel boxes on the lot at once (optional) |
| --- |
| BaseObjectMust be Self (the Zoi receiving the items)S1Set to InBulk to open all matching parcel boxes on the lot at once (optional) |
| S1Set to InBulk to open all matching parcel boxes on the lot at once (optional) |

# Examples

| DescriptionBaseObjectCommandOpen the target box and receive its contentsSelfOpenCommonBoxOpen all parcel boxes for the same recipient within the lot at onceSelfOpenCommonBox |
| --- |
| Open the target box and receive its contentsSelfOpenCommonBoxOpen all parcel boxes for the same recipient within the lot at onceSelfOpenCommonBox |
| Open all parcel boxes for the same recipient within the lot at onceSelfOpenCommonBox |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoInventory & Carried Objects[AddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttemplatetobag)[AddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttobag)[AttachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachgrabobject)[CancelInteractionBagByTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelinteractionbagbytag)[DestroyInventoryChild](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroyinventorychild)[DetachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachgrabobject)[HandOverGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-handovergrabobject)[OpenGiftBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opengiftbox)[PickUpAttachCharacter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachcharacter)[PickUpAttachObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachobject)[PickUpServedFoodObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupservedfoodobject)[PickUpSlotObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupslotobject)
