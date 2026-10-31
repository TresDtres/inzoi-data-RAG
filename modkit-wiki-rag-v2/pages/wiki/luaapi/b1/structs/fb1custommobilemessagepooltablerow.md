---
document_id: "d85745d0d3ed408a8b9d071294dcfbe671576b3868ede0800abc50b96b4fd954"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1custommobilemessagepooltablerow"
title: "FB1CustomMobileMessagePoolTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:37+00:00"
content_sha256: "ccc97a0aa052b036786ac5e019fcee9d88b6fb891b83cfc7c23398ea88c90797"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1custommobilemessagepooltablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data table row defining a pool of custom mobile messages that share a common cooldown. Groups multiple custom message IDs so they can be randomly selected from the pool.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (2)

| NameTypeDescription`CooltimeMinute``integer`Minimum cooldown in in-game minutes before another message from this pool can be sent.`CustomMobileMessageIds``string[]`Array of custom mobile message IDs belonging to this pool. |
| --- |
| `CooltimeMinute``integer`Minimum cooldown in in-game minutes before another message from this pool can be sent.`CustomMobileMessageIds``string[]`Array of custom mobile message IDs belonging to this pool. |
| `CustomMobileMessageIds``string[]`Array of custom mobile message IDs belonging to this pool. |
