---
document_id: "b5cf6cfc95ea807d20cf4e7039309567f5797c6e2697dcacfcbc2ed6453a2269"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1custommobilemessagepooltablerow"
title: "B1CustomMobileMessagePoolTableRow"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:54:18+00:00"
content_sha256: "d064404d4bca6cf6ede260a8c105a6eec00f172c76441148e7c9cd03a1f7d830"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1custommobilemessagepooltablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Data table row defining a pool of custom mobile messages that share a common cooldown. * Groups multiple custom message IDs so they can be randomly selected from the pool.

| PropertyTypeDescriptionMetadataCustomMobileMessageIdsTArrayArray of custom mobile message IDs belonging to this pool.Category: B1CustomMobileMessagePoolTableRow Foreign: CustomMobileMessage.IdCooltimeMinuteint64Minimum cooldown in in-game minutes before another message from this pool can be sent.Category: B1CustomMobileMessagePoolTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| --- |
| CustomMobileMessageIdsTArrayArray of custom mobile message IDs belonging to this pool.Category: B1CustomMobileMessagePoolTableRow Foreign: CustomMobileMessage.IdCooltimeMinuteint64Minimum cooldown in in-game minutes before another message from this pool can be sent.Category: B1CustomMobileMessagePoolTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CooltimeMinuteint64Minimum cooldown in in-game minutes before another message from this pool can be sent.Category: B1CustomMobileMessagePoolTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CommentFStringDev CommentCategory: B1TableRowBase |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoCustom[CustomMobileMessage Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/custommobilemessage)[FB1CustomMobileMessageTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1custommobilemessagetablerow)[FB1CustomScheduleActorRoleData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1customscheduleactorroledata)[FB1CustomSchedulePresetTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1customschedulepresettablerow)[FB1CustomScheduleSlotData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1customscheduleslotdata)[FB1CustomScheduleSlotPresetData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1customscheduleslotpresetdata)[FB1CustomScriptTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1customscripttablerow)
