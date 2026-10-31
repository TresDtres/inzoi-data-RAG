---
document_id: "e100bb06635cf174e66a62aab1e43bbe2228570c2a7f93e4f443c8db4b9ab881"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-handovergrabobject"
title: "Execute_HandOverGrabObject"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:30+00:00"
content_sha256: "da087c0e379f3b702db1c721aaae5ee344fe4e0de913b7acadb30106259f2bbe"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-handovergrabobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Detaches the object from the Self (Giver) character's hand and attaches it to the Target (Receiver) character's hand. Returns early if the Giver has nothing to hand over, or if the Receiver's hands are already full. Optionally triggers the hand-over receive script on the object if S1 is "True".

# Note

Ownership of the handed-over object is transferred to the Receiver character after handover.

# Parameters

| ParameterDescriptionBaseObjectNot directly used; Self is the giver and Target is the receiverS1Optional "True" to trigger the object's HandOver receive script after handover |
| --- |
| BaseObjectNot directly used; Self is the giver and Target is the receiverS1Optional "True" to trigger the object's HandOver receive script after handover |
| S1Optional "True" to trigger the object's HandOver receive script after handover |

# Examples

| DescriptionBaseObjectCommandS1Hand over the held object from Self to TargetSelfHandOverGrabObjectHand over and trigger the object's receive scriptSelfHandOverGrabObjectTrue |
| --- |
| Hand over the held object from Self to TargetSelfHandOverGrabObjectHand over and trigger the object's receive scriptSelfHandOverGrabObjectTrue |
| Hand over and trigger the object's receive scriptSelfHandOverGrabObjectTrue |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoInventory & Carried Objects[AddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttemplatetobag)[AddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttobag)[AttachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachgrabobject)[CancelInteractionBagByTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelinteractionbagbytag)[DestroyInventoryChild](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroyinventorychild)[DetachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachgrabobject)[OpenCommonBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencommonbox)[OpenGiftBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opengiftbox)[PickUpAttachCharacter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachcharacter)[PickUpAttachObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachobject)[PickUpServedFoodObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupservedfoodobject)[PickUpSlotObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupslotobject)
