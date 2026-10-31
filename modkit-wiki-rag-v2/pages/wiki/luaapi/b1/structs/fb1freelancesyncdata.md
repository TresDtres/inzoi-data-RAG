---
document_id: "5fc470fc967e55ab7a9ebcbca3acffd2109881cd662f066f31d3b1ccf8a253b1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancesyncdata"
title: "FB1FreelanceSyncData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:57+00:00"
content_sha256: "57b12a21ae00644dbd75e5bef76c2d61ac2ab937fb6fe1eeef1d2bebd7be63d5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1freelancesyncdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Aggregated freelance data synced from the server in a single packet. Used as a parameter grouping for UB1FreelanceUIHandler::CacheAllFreelanceData.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`ActiveOrders``FB1FreelanceActiveOrderData[]`List of orders currently in progress for the character.`Licenses``FB1License[]`List of license UI data for all licenses the character has interacted with.`OrderSummaries``FB1FreelanceOrderSummaryUI[]`List of available order summaries with their UI acceptability flags.`Statistics`[`FB1FreelanceStatistics`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancestatistics)Cumulative freelance statistics for the character.`bHasPenaltyFlow``boolean`Whether a penalty flow is currently in progress. |
| --- |
| `ActiveOrders``FB1FreelanceActiveOrderData[]`List of orders currently in progress for the character.`Licenses``FB1License[]`List of license UI data for all licenses the character has interacted with.`OrderSummaries``FB1FreelanceOrderSummaryUI[]`List of available order summaries with their UI acceptability flags.`Statistics`[`FB1FreelanceStatistics`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancestatistics)Cumulative freelance statistics for the character.`bHasPenaltyFlow``boolean`Whether a penalty flow is currently in progress. |
| `Licenses``FB1License[]`List of license UI data for all licenses the character has interacted with.`OrderSummaries``FB1FreelanceOrderSummaryUI[]`List of available order summaries with their UI acceptability flags.`Statistics`[`FB1FreelanceStatistics`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancestatistics)Cumulative freelance statistics for the character.`bHasPenaltyFlow``boolean`Whether a penalty flow is currently in progress. |
| `OrderSummaries``FB1FreelanceOrderSummaryUI[]`List of available order summaries with their UI acceptability flags.`Statistics`[`FB1FreelanceStatistics`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancestatistics)Cumulative freelance statistics for the character.`bHasPenaltyFlow``boolean`Whether a penalty flow is currently in progress. |
| `Statistics`[`FB1FreelanceStatistics`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancestatistics)Cumulative freelance statistics for the character.`bHasPenaltyFlow``boolean`Whether a penalty flow is currently in progress. |
| `bHasPenaltyFlow``boolean`Whether a penalty flow is currently in progress. |
