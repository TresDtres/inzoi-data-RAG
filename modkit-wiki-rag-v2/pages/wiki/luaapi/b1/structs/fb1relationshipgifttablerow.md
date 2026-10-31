---
document_id: "4d2533095f69c650b516cb96ba6cc94b4b969474a587925bfef1f26f0cbaf09d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipgifttablerow"
title: "FB1RelationshipGiftTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:14+00:00"
content_sha256: "454e97328aec7f48cc21074daee4e8a0285a0ccf1f66023b04a0310e53b2646c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1relationshipgifttablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- DataTable row defining a relationship gift template including its object, condition, and reward.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (4)

| NameTypeDescription`ConditionData`[`FB1RelationshipGiftConditionData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipgiftconditiondata)Conditions that must be met for this gift to be sent.`GiftBoxObjectIds``string[]`List of gift box object IDs associated with this gift definition.`ObjectData`[`FB1RelationshipGiftObjectData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipgiftobjectdata)Data describing the actual object to be gifted.`RewardData`[`FB1RelationshipGiftRewardData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipgiftrewarddata)Reward granted to the giver or receiver upon successful gift. |
| --- |
| `ConditionData`[`FB1RelationshipGiftConditionData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipgiftconditiondata)Conditions that must be met for this gift to be sent.`GiftBoxObjectIds``string[]`List of gift box object IDs associated with this gift definition.`ObjectData`[`FB1RelationshipGiftObjectData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipgiftobjectdata)Data describing the actual object to be gifted.`RewardData`[`FB1RelationshipGiftRewardData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipgiftrewarddata)Reward granted to the giver or receiver upon successful gift. |
| `GiftBoxObjectIds``string[]`List of gift box object IDs associated with this gift definition.`ObjectData`[`FB1RelationshipGiftObjectData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipgiftobjectdata)Data describing the actual object to be gifted.`RewardData`[`FB1RelationshipGiftRewardData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipgiftrewarddata)Reward granted to the giver or receiver upon successful gift. |
| `ObjectData`[`FB1RelationshipGiftObjectData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipgiftobjectdata)Data describing the actual object to be gifted.`RewardData`[`FB1RelationshipGiftRewardData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipgiftrewarddata)Reward granted to the giver or receiver upon successful gift. |
| `RewardData`[`FB1RelationshipGiftRewardData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipgiftrewarddata)Reward granted to the giver or receiver upon successful gift. |
