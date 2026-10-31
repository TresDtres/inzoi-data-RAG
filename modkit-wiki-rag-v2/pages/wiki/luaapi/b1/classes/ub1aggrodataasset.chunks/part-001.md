---
document_id: "f391c3dd366ecd2994587cd7ddec2b94c2c29e0817dc381fc8527314e7260442"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1aggrodataasset"
title: "UB1AggroDataAsset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:44+00:00"
content_sha256: "aaed6f35fec6cab0cb68c36be3030b2008f89c8360fb5ed417015e43386d9c79"
chunk: 1
chunk_count: 4
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1aggrodataasset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Common chase configuration for the aggro system (single instance). FB2AggroManager fetches it via DA_GET on every call (no caching, hot-reload friendly). - MaxAggro: cap on the (Source, Target) total (sum of all Reason buckets in that pair) - DecayPerMinute: amount subtracted per minute (oldest-first) - OffsetDistance: default arrival distance used when TableRow.OffsetDistanceOverride is negative - ChaseInteractionBagId: InteractionBag auto-queued at chase start (optional) - MaxTargetsPerSource: cap on the number of concurrent Target entries one Source may hold - PathRefreshIntervalGameMinutes: re-path interval during chase (game minutes)

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| Category`classes`Extends`UB1DataAssetBase` |
| Extends`UB1DataAssetBase` |

# Properties (15)
