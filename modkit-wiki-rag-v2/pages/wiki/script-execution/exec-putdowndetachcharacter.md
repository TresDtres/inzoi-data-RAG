---
document_id: "a44ee865c586aba71e7da248238be8d3b652d24962c6e082d0b56cff09d6e3ff"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-putdowndetachcharacter"
title: "Execute_PutDownDetachCharacter"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:40+00:00"
content_sha256: "7266871e129a8265ef7c5df6d0d45c284a12eb6d7fefdabdd9ebbdead9a492f0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-putdowndetachcharacter"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Puts down and detaches the character currently held in the BaseObject's right hand. The grabbed character is detached at the position and rotation determined by its pending put-down transform.

# Parameters

| ParameterDescriptionBaseObjectThe character currently holding another character (Self or Target). |
| --- |
| BaseObjectThe character currently holding another character (Self or Target). |

# Examples

| DescriptionBaseObjectCommandSelf puts down the held characterSelfPutDownDetachCharacterTarget puts down the held characterTargetPutDownDetachCharacter |
| --- |
| Self puts down the held characterSelfPutDownDetachCharacterTarget puts down the held characterTargetPutDownDetachCharacter |
| Target puts down the held characterTargetPutDownDetachCharacter |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoInventory & Carried Objects[AddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttemplatetobag)[AddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttobag)[AttachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachgrabobject)[CancelInteractionBagByTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelinteractionbagbytag)[DestroyInventoryChild](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroyinventorychild)[DetachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachgrabobject)[HandOverGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-handovergrabobject)[OpenCommonBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencommonbox)[OpenGiftBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opengiftbox)[PickUpAttachCharacter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachcharacter)[PickUpAttachObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachobject)[PickUpServedFoodObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupservedfoodobject)
