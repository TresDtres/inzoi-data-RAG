---
document_id: "af332bb6a0777efa3963f444ba4e8f2598d82e7a9cfbb14464c44837423c12d0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1collectionrewardtablerow"
title: "FB1CollectionRewardTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:31+00:00"
content_sha256: "43eb1f984ce296c43680fe605a66ef707c2082bda794721968d382293b1c9efc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1collectionrewardtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining a collection reward, triggered when a specified number of encyclopedia entries are completed.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (3)

| NameTypeDescription`CollectionCategoryId``string`Collection category to count completions for. Use "All" to count across all categories.`CollectionCount``integer`Number of completed collection entries required to trigger the reward.`ScriptIds``string[]`Script IDs to execute when the required collection count is reached. |
| --- |
| `CollectionCategoryId``string`Collection category to count completions for. Use "All" to count across all categories.`CollectionCount``integer`Number of completed collection entries required to trigger the reward.`ScriptIds``string[]`Script IDs to execute when the required collection count is reached. |
| `CollectionCount``integer`Number of completed collection entries required to trigger the reward.`ScriptIds``string[]`Script IDs to execute when the required collection count is reached. |
| `ScriptIds``string[]`Script IDs to execute when the required collection count is reached. |
