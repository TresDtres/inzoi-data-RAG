---
document_id: "c3dec96cd256e706a4f181c8487a71fef9b0bb335adf349c48cd96e843cb4293"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipgiftdata"
title: "FB1RelationshipGiftData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:14+00:00"
content_sha256: "d7b989247c73455b4dd9fa1deb5739269074e4ff89497b0d88dc5633f54a2351"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1relationshipgiftdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Runtime data representing an active gift transaction between two entities.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (7)

| NameTypeDescription`FromEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the character sending the gift.`GiftEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The unique entity ID of this gift instance.`GiftSendTime``integer`The game time (ticks) when the gift was sent.`GiftType`[`EB1GiftType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gifttype)The type category of this gift.`ObjectData`[`FB1RelationshipGiftObjectData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipgiftobjectdata)The object data describing what is being gifted.`RewardData`[`FB1RelationshipGiftRewardData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipgiftrewarddata)The reward data applied upon successful gift delivery.`ToEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the character receiving the gift. |
| --- |
| `FromEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the character sending the gift.`GiftEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The unique entity ID of this gift instance.`GiftSendTime``integer`The game time (ticks) when the gift was sent.`GiftType`[`EB1GiftType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gifttype)The type category of this gift.`ObjectData`[`FB1RelationshipGiftObjectData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipgiftobjectdata)The object data describing what is being gifted.`RewardData`[`FB1RelationshipGiftRewardData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipgiftrewarddata)The reward data applied upon successful gift delivery.`ToEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the character receiving the gift. |
| `GiftEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The unique entity ID of this gift instance.`GiftSendTime``integer`The game time (ticks) when the gift was sent.`GiftType`[`EB1GiftType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gifttype)The type category of this gift.`ObjectData`[`FB1RelationshipGiftObjectData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipgiftobjectdata)The object data describing what is being gifted.`RewardData`[`FB1RelationshipGiftRewardData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipgiftrewarddata)The reward data applied upon successful gift delivery.`ToEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the character receiving the gift. |
| `GiftSendTime``integer`The game time (ticks) when the gift was sent.`GiftType`[`EB1GiftType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gifttype)The type category of this gift.`ObjectData`[`FB1RelationshipGiftObjectData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipgiftobjectdata)The object data describing what is being gifted.`RewardData`[`FB1RelationshipGiftRewardData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipgiftrewarddata)The reward data applied upon successful gift delivery.`ToEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the character receiving the gift. |
| `GiftType`[`EB1GiftType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gifttype)The type category of this gift.`ObjectData`[`FB1RelationshipGiftObjectData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipgiftobjectdata)The object data describing what is being gifted.`RewardData`[`FB1RelationshipGiftRewardData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipgiftrewarddata)The reward data applied upon successful gift delivery.`ToEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the character receiving the gift. |
| `ObjectData`[`FB1RelationshipGiftObjectData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipgiftobjectdata)The object data describing what is being gifted.`RewardData`[`FB1RelationshipGiftRewardData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipgiftrewarddata)The reward data applied upon successful gift delivery.`ToEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the character receiving the gift. |
| `RewardData`[`FB1RelationshipGiftRewardData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipgiftrewarddata)The reward data applied upon successful gift delivery.`ToEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the character receiving the gift. |
| `ToEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the character receiving the gift. |
