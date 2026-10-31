---
document_id: "d800dcbb18dd56176cb0be9638303099c15ecc93c8bf4fba32604e6b8c81d13e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-scanpurchasableinteraction"
title: "FB2TimeTask_ScanPurchasableInteraction"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:53+00:00"
content_sha256: "90fa3ec97b2e5531d50592da3a9f447f8a372006e2b177f7cf634a4d5e2c7d7e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/structs/fb2timetask-scanpurchasableinteraction"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Progressively scans a Site's objects BatchSize per tick to cache purchasable interactions (matching the DA's PurchaseDesireProductInteractionTags) on the HouseholdBiz. When one pass finishes, it re-compares the Site's object list to reflect additions/removals.

# Metadata

| FieldValueKind`struct`EnvironmentB2 - SimulationCategory`structs`Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |
| --- |
| Kind`struct`EnvironmentB2 - SimulationCategory`structs`Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |
| EnvironmentB2 - SimulationCategory`structs`Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |
| Category`structs`Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |
| Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |

# Properties (6)

| NameTypeDescription`BizEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`CachedStallSaleableObjectIdsMap``table<FB1EntityId, FB1EntityIdArray>``IdleCountUntilFullRescan``integer``KnownSiteObjectIds``table<FB1EntityId, boolean>``PendingScanObjectIds``FB1EntityId[]``ScanIndex``integer` |
| --- |
| `BizEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`CachedStallSaleableObjectIdsMap``table<FB1EntityId, FB1EntityIdArray>``IdleCountUntilFullRescan``integer``KnownSiteObjectIds``table<FB1EntityId, boolean>``PendingScanObjectIds``FB1EntityId[]``ScanIndex``integer` |
| `CachedStallSaleableObjectIdsMap``table<FB1EntityId, FB1EntityIdArray>``IdleCountUntilFullRescan``integer``KnownSiteObjectIds``table<FB1EntityId, boolean>``PendingScanObjectIds``FB1EntityId[]``ScanIndex``integer` |
| `IdleCountUntilFullRescan``integer``KnownSiteObjectIds``table<FB1EntityId, boolean>``PendingScanObjectIds``FB1EntityId[]``ScanIndex``integer` |
| `KnownSiteObjectIds``table<FB1EntityId, boolean>``PendingScanObjectIds``FB1EntityId[]``ScanIndex``integer` |
| `PendingScanObjectIds``FB1EntityId[]``ScanIndex``integer` |
| `ScanIndex``integer` |
