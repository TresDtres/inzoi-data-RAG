---
document_id: "1bfb3c058b1eb61b9fcd7b30f441d35de7029bfe182a59e6511e9c1be5e7036b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1mainrelationshiptablerow"
title: "FB1MainRelationshipTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:24+00:00"
content_sha256: "894b66706abce75250697cce8a9af8b2a60ed45cc34bdc591e0342498abb7eb4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1mainrelationshiptablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining the main relationship determination weights for a specific condition, used to select which stat drives the main relationship.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (4)

| NameTypeDescription`BusinessRate``integer`The selection weight for the business relationship stat.`FriendshipRate``integer`The selection weight for the friendship relationship stat.`RomanceRate``integer`The selection weight for the romance relationship stat.`bRefresh``boolean`Whether to refresh the main relationship calculation when this row is applied. |
| --- |
| `BusinessRate``integer`The selection weight for the business relationship stat.`FriendshipRate``integer`The selection weight for the friendship relationship stat.`RomanceRate``integer`The selection weight for the romance relationship stat.`bRefresh``boolean`Whether to refresh the main relationship calculation when this row is applied. |
| `FriendshipRate``integer`The selection weight for the friendship relationship stat.`RomanceRate``integer`The selection weight for the romance relationship stat.`bRefresh``boolean`Whether to refresh the main relationship calculation when this row is applied. |
| `RomanceRate``integer`The selection weight for the romance relationship stat.`bRefresh``boolean`Whether to refresh the main relationship calculation when this row is applied. |
| `bRefresh``boolean`Whether to refresh the main relationship calculation when this row is applied. |
