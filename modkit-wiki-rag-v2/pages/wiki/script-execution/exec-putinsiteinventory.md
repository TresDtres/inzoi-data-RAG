---
document_id: "7aeea957840ede0a18c9234a437440f5bd1be707153de7ad2469ea28e672e2ef"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-putinsiteinventory"
title: "Execute_PutInSiteInventory"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:41+00:00"
content_sha256: "8568955ebb68b88aae91509ff6aa0f6a5f391425a81418742c836d532d4b066b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-putinsiteinventory"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Puts the BaseObject game object into the home site inventory of the Self character. The object and all its grouped children are added to the site inventory. Self must own a home. Returns early if the object is already in the site inventory.

# Parameters

| ParameterDescriptionBaseObjectThe game object to be stored into the Self character's home site inventory |
| --- |
| BaseObjectThe game object to be stored into the Self character's home site inventory |

# Examples

| DescriptionBaseObjectCommandStore Target object into Self's home site inventoryTargetPutInSiteInventoryStore Self object into home site inventorySelfPutInSiteInventory |
| --- |
| Store Target object into Self's home site inventoryTargetPutInSiteInventoryStore Self object into home site inventorySelfPutInSiteInventory |
| Store Self object into home site inventorySelfPutInSiteInventory |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoInventory & Carried Objects[AddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttemplatetobag)[AddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttobag)[AttachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachgrabobject)[CancelInteractionBagByTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelinteractionbagbytag)[DestroyInventoryChild](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroyinventorychild)[DetachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachgrabobject)[HandOverGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-handovergrabobject)[OpenCommonBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencommonbox)[OpenGiftBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opengiftbox)[PickUpAttachCharacter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachcharacter)[PickUpAttachObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachobject)[PickUpServedFoodObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupservedfoodobject)
