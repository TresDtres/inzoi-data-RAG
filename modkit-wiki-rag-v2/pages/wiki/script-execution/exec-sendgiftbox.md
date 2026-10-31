---
document_id: "5644ae14464ab3e45261b5d7188510c25853053a02ae992cafcbe83d7b5bc80a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-sendgiftbox"
title: "Execute_SendGiftBox"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:52+00:00"
content_sha256: "23128871a3d898b7c8a6304a71c9520add77ff183ed972a9ff02de73271edca4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-sendgiftbox"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Sends a relationship-based gift box. If S2 (MobileMessagePartiesId) is specified, the sender and receiver are determined by MobileMessageParties data; otherwise sends from Self to Target.

# Parameters

| ParameterDescriptionBaseObjectReference entity for the script contextS1GiftBoxId to sendS2MobileMessagePartiesId (optional; if omitted, Self is sender and Target is receiver) |
| --- |
| BaseObjectReference entity for the script contextS1GiftBoxId to sendS2MobileMessagePartiesId (optional; if omitted, Self is sender and Target is receiver) |
| S1GiftBoxId to sendS2MobileMessagePartiesId (optional; if omitted, Self is sender and Target is receiver) |
| S2MobileMessagePartiesId (optional; if omitted, Self is sender and Target is receiver) |

# Examples

| DescriptionBaseObjectCommandS1S2Send a birthday gift box from Self to TargetSelfSendGiftBoxGiftBox_BirthdaySend a thank-you gift box using a specific parties definitionSelfSendGiftBoxGiftBox_ThankYouParties_FriendToPlayerSend a holiday gift box to TargetSelfSendGiftBoxGiftBox_HolidaySend a wedding gift using a neighbor-to-player party setupSelfSendGiftBoxGiftBox_WeddingParties_NeighborToPlayer |
| --- |
| Send a birthday gift box from Self to TargetSelfSendGiftBoxGiftBox_BirthdaySend a thank-you gift box using a specific parties definitionSelfSendGiftBoxGiftBox_ThankYouParties_FriendToPlayerSend a holiday gift box to TargetSelfSendGiftBoxGiftBox_HolidaySend a wedding gift using a neighbor-to-player party setupSelfSendGiftBoxGiftBox_WeddingParties_NeighborToPlayer |
| Send a thank-you gift box using a specific parties definitionSelfSendGiftBoxGiftBox_ThankYouParties_FriendToPlayerSend a holiday gift box to TargetSelfSendGiftBoxGiftBox_HolidaySend a wedding gift using a neighbor-to-player party setupSelfSendGiftBoxGiftBox_WeddingParties_NeighborToPlayer |
| Send a holiday gift box to TargetSelfSendGiftBoxGiftBox_HolidaySend a wedding gift using a neighbor-to-player party setupSelfSendGiftBoxGiftBox_WeddingParties_NeighborToPlayer |
| Send a wedding gift using a neighbor-to-player party setupSelfSendGiftBoxGiftBox_WeddingParties_NeighborToPlayer |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoInventory & Carried Objects[AddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttemplatetobag)[AddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttobag)[AttachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachgrabobject)[CancelInteractionBagByTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelinteractionbagbytag)[DestroyInventoryChild](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroyinventorychild)[DetachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachgrabobject)[HandOverGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-handovergrabobject)[OpenCommonBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencommonbox)[OpenGiftBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opengiftbox)[PickUpAttachCharacter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachcharacter)[PickUpAttachObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachobject)[PickUpServedFoodObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupservedfoodobject)
