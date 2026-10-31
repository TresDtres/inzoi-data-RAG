---
document_id: "c59d7a5a9235cd1bf506536e27058cf0650f1608e22a2ecd73b127a6badda329"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1royaltyactivityfeedtablerow"
title: "FB1RoyaltyActivityFeedTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:17+00:00"
content_sha256: "2aabcb8ccca7f734d4b6b10613028c434098bc458383be3f2bedb30090fbf3f6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1royaltyactivityfeedtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- RoyaltyActivityFeed.json — ActivityFeed mapping per category x event (32 rows).

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (6)

| NameTypeDescription`ActivityFeedId``string`ActivityFeed ID (references ActivityFeed.json).`BuffId``string`Buff ID to grant.`Category`[`EB1RoyaltyCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1royaltycategory)Publishing category.`EventType`[`EB1RoyaltyEventType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1royaltyeventtype)Event type.`JackpotTier`[`EB1JackpotTier`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1jackpottier)Jackpot tier (only valid for Jackpot events).`QualityGroup`[`EB1RoyaltyQualityGroup`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1royaltyqualitygroup)Quality group (Mega tier only: Bad/Fair/Common). |
| --- |
| `ActivityFeedId``string`ActivityFeed ID (references ActivityFeed.json).`BuffId``string`Buff ID to grant.`Category`[`EB1RoyaltyCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1royaltycategory)Publishing category.`EventType`[`EB1RoyaltyEventType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1royaltyeventtype)Event type.`JackpotTier`[`EB1JackpotTier`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1jackpottier)Jackpot tier (only valid for Jackpot events).`QualityGroup`[`EB1RoyaltyQualityGroup`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1royaltyqualitygroup)Quality group (Mega tier only: Bad/Fair/Common). |
| `BuffId``string`Buff ID to grant.`Category`[`EB1RoyaltyCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1royaltycategory)Publishing category.`EventType`[`EB1RoyaltyEventType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1royaltyeventtype)Event type.`JackpotTier`[`EB1JackpotTier`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1jackpottier)Jackpot tier (only valid for Jackpot events).`QualityGroup`[`EB1RoyaltyQualityGroup`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1royaltyqualitygroup)Quality group (Mega tier only: Bad/Fair/Common). |
| `Category`[`EB1RoyaltyCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1royaltycategory)Publishing category.`EventType`[`EB1RoyaltyEventType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1royaltyeventtype)Event type.`JackpotTier`[`EB1JackpotTier`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1jackpottier)Jackpot tier (only valid for Jackpot events).`QualityGroup`[`EB1RoyaltyQualityGroup`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1royaltyqualitygroup)Quality group (Mega tier only: Bad/Fair/Common). |
| `EventType`[`EB1RoyaltyEventType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1royaltyeventtype)Event type.`JackpotTier`[`EB1JackpotTier`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1jackpottier)Jackpot tier (only valid for Jackpot events).`QualityGroup`[`EB1RoyaltyQualityGroup`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1royaltyqualitygroup)Quality group (Mega tier only: Bad/Fair/Common). |
| `JackpotTier`[`EB1JackpotTier`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1jackpottier)Jackpot tier (only valid for Jackpot events).`QualityGroup`[`EB1RoyaltyQualityGroup`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1royaltyqualitygroup)Quality group (Mega tier only: Bad/Fair/Common). |
| `QualityGroup`[`EB1RoyaltyQualityGroup`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1royaltyqualitygroup)Quality group (Mega tier only: Bad/Fair/Common). |
