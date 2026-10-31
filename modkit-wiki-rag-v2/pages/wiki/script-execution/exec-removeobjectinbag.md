---
document_id: "109dba65c1fd3d4330d108311e54d515729c99791bbb783492f421f5a5bdc753"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removeobjectinbag"
title: "Execute_RemoveObjectInBag"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:45+00:00"
content_sha256: "e2398eacf450353fd87ad2928c64ebb761156a81f74007a4c194f521a24d3611"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-removeobjectinbag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Removes the specified item from the bag.

# Note

If the removal fails, a toast message is displayed: "No stored items available."

# Parameters

| ParameterDescriptionBaseObjectThe inventory owner from which the item will be removedS1The Id from Object.json for the item to be removedF1The number of items to remove (minimum: 1) |
| --- |
| BaseObjectThe inventory owner from which the item will be removedS1The Id from Object.json for the item to be removedF1The number of items to remove (minimum: 1) |
| S1The Id from Object.json for the item to be removedF1The number of items to remove (minimum: 1) |
| F1The number of items to remove (minimum: 1) |

# Examples

| DescriptionBaseObjectCommandRemove 1 Yukgaejang item from Self's bagSelfRemoveObjectInBagRemove 1 item from Target's bagTargetRemoveObjectInBagRemove 3 items from Self's bagSelfRemoveObjectInBag |
| --- |
| Remove 1 Yukgaejang item from Self's bagSelfRemoveObjectInBagRemove 1 item from Target's bagTargetRemoveObjectInBagRemove 3 items from Self's bagSelfRemoveObjectInBag |
| Remove 1 item from Target's bagTargetRemoveObjectInBagRemove 3 items from Self's bagSelfRemoveObjectInBag |
| Remove 3 items from Self's bagSelfRemoveObjectInBag |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoInventory & Carried Objects[AddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttemplatetobag)[AddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttobag)[AttachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachgrabobject)[CancelInteractionBagByTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelinteractionbagbytag)[DestroyInventoryChild](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroyinventorychild)[DetachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachgrabobject)[HandOverGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-handovergrabobject)[OpenCommonBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencommonbox)[OpenGiftBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opengiftbox)[PickUpAttachCharacter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachcharacter)[PickUpAttachObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachobject)[PickUpServedFoodObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupservedfoodobject)
