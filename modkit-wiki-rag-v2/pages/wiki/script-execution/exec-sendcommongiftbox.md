---
document_id: "2a07211d2501f35b63741c526178319c684088406dd4b5a332725811ffb2c5b0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-sendcommongiftbox"
title: "Execute_SendCommonGiftBox"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:52+00:00"
content_sha256: "0b2b6b38847308aaab559528d9809a27fbf8ae9fbbacfe09f186a80faa304b54"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-sendcommongiftbox"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Randomly selects a gift box from the CommonGiftBoxList in the RelationshipDataAsset and sends it to the BaseObject entity.

# Parameters

| ParameterDescriptionBaseObjectThe entity that will receive the gift boxS1CarriableObjectType enum name (e.g., Food, Furniture, Goods)S2Additional parameter passed to GiftManager.SendGiftBox (optional) |
| --- |
| BaseObjectThe entity that will receive the gift boxS1CarriableObjectType enum name (e.g., Food, Furniture, Goods)S2Additional parameter passed to GiftManager.SendGiftBox (optional) |
| S1CarriableObjectType enum name (e.g., Food, Furniture, Goods)S2Additional parameter passed to GiftManager.SendGiftBox (optional) |
| S2Additional parameter passed to GiftManager.SendGiftBox (optional) |

# Examples

| DescriptionBaseObjectCommandS1S2Send a random common food gift box to SelfSelfSendCommonGiftBoxFoodSend a random common furniture gift box to TargetTargetSendCommonGiftBoxFurnitureSend a random common goods gift box to SelfSelfSendCommonGiftBoxGoods |
| --- |
| Send a random common food gift box to SelfSelfSendCommonGiftBoxFoodSend a random common furniture gift box to TargetTargetSendCommonGiftBoxFurnitureSend a random common goods gift box to SelfSelfSendCommonGiftBoxGoods |
| Send a random common furniture gift box to TargetTargetSendCommonGiftBoxFurnitureSend a random common goods gift box to SelfSelfSendCommonGiftBoxGoods |
| Send a random common goods gift box to SelfSelfSendCommonGiftBoxGoods |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoInventory & Carried Objects[AddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttemplatetobag)[AddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttobag)[AttachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachgrabobject)[CancelInteractionBagByTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelinteractionbagbytag)[DestroyInventoryChild](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroyinventorychild)[DetachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachgrabobject)[HandOverGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-handovergrabobject)[OpenCommonBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencommonbox)[OpenGiftBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opengiftbox)[PickUpAttachCharacter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachcharacter)[PickUpAttachObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachobject)[PickUpServedFoodObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupservedfoodobject)
