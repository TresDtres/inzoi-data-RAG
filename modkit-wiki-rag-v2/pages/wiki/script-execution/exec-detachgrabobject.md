---
document_id: "cb9ebe8e5cf23a01163f58efe10f08f5b03a19c542a2db4cbd0708c9058b067c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachgrabobject"
title: "Execute_DetachGrabObject"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:47:48+00:00"
content_sha256: "9ee96d69018de2842f780637d94ed7abbf583cf44ca1cfb8920a4f6ea4cc65eb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-detachgrabobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Detaches and destroys the grab object currently held by the specified BaseObject. If called during a PutDown action's notify (PutDownContext is set), uses the hand the action resolved (PutDownContext.SelectedHand); otherwise falls back to the right hand.

# Parameters

| ParameterDescriptionBaseObjectThe character to detach the held grab object from (Self or Target). |
| --- |
| BaseObjectThe character to detach the held grab object from (Self or Target). |

# Examples

| DescriptionBaseObjectCommandDetach the held object from SelfSelfDetachGrabObjectDetach the held object from TargetTargetDetachGrabObject |
| --- |
| Detach the held object from SelfSelfDetachGrabObjectDetach the held object from TargetTargetDetachGrabObject |
| Detach the held object from TargetTargetDetachGrabObject |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoInventory & Carried Objects[AddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttemplatetobag)[AddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttobag)[AttachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachgrabobject)[CancelInteractionBagByTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelinteractionbagbytag)[DestroyInventoryChild](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroyinventorychild)[HandOverGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-handovergrabobject)[OpenCommonBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencommonbox)[OpenGiftBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opengiftbox)[PickUpAttachCharacter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachcharacter)[PickUpAttachObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachobject)[PickUpServedFoodObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupservedfoodobject)[PickUpSlotObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupslotobject)
