---
document_id: "fb569a2e8f181c74f8e9e243bf28de2604bf54115f26a3e995cc0032c695b816"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachgrabobject"
title: "Execute_AttachGrabObject"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:15+00:00"
content_sha256: "becde1c2ae20baee476e0b4038b3db75f4fc12434375251796e6a142cb07043e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-attachgrabobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Attaches a grab object to the right hand of the specified BaseObject. If the character is already holding an object, it will be destroyed before attaching the new one. If the character is currently climbing a ladder, the command will not execute.

# Parameters

| ParameterDescriptionBaseObjectThe character to attach the grab object to (Self or Target).S1Object data table ID of the object to attach (ObjectDataTableId). |
| --- |
| BaseObjectThe character to attach the grab object to (Self or Target).S1Object data table ID of the object to attach (ObjectDataTableId). |
| S1Object data table ID of the object to attach (ObjectDataTableId). |

# Examples

| DescriptionBaseObjectCommandS1Attach an umbrella to SelfSelfAttachGrabObjectUmbrella01Attach an apple to TargetTargetAttachGrabObjectGrowFood_AppleAttach an umbrella to TargetTargetAttachGrabObjectUmbrella01Attach a book to SelfSelfAttachGrabObjectBook01 |
| --- |
| Attach an umbrella to SelfSelfAttachGrabObjectUmbrella01Attach an apple to TargetTargetAttachGrabObjectGrowFood_AppleAttach an umbrella to TargetTargetAttachGrabObjectUmbrella01Attach a book to SelfSelfAttachGrabObjectBook01 |
| Attach an apple to TargetTargetAttachGrabObjectGrowFood_AppleAttach an umbrella to TargetTargetAttachGrabObjectUmbrella01Attach a book to SelfSelfAttachGrabObjectBook01 |
| Attach an umbrella to TargetTargetAttachGrabObjectUmbrella01Attach a book to SelfSelfAttachGrabObjectBook01 |
| Attach a book to SelfSelfAttachGrabObjectBook01 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoInventory & Carried Objects[AddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttemplatetobag)[AddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttobag)[CancelInteractionBagByTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelinteractionbagbytag)[DestroyInventoryChild](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroyinventorychild)[DetachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachgrabobject)[HandOverGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-handovergrabobject)[OpenCommonBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencommonbox)[OpenGiftBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opengiftbox)[PickUpAttachCharacter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachcharacter)[PickUpAttachObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachobject)[PickUpServedFoodObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupservedfoodobject)[PickUpSlotObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupslotobject)
