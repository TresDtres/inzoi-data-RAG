---
document_id: "3f90e25ac45744c4ab1ca2092ff2d2532559821e878dab2f4f4b2d428493ab18"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1randombuffpooltablerow"
title: "FB1RandomBuffPoolTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:10+00:00"
content_sha256: "eeebadb21cad19173ae121f402e4f4ae989d7540663995dd63d24e24996bee20"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1randombuffpooltablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- A table row defining a random buff pool, listing all eligible buffs with their probability weights and an auto-computed total probability sum.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (2)

| NameTypeDescription`RandomBuffPoolData``FB1RandomBuffPoolEntryData[]`List of buff entries with their selection probability weights.`TotalProb``integer`Sum of all probability weights, computed during OnPostJsonDataLoad. |
| --- |
| `RandomBuffPoolData``FB1RandomBuffPoolEntryData[]`List of buff entries with their selection probability weights.`TotalProb``integer`Sum of all probability weights, computed during OnPostJsonDataLoad. |
| `TotalProb``integer`Sum of all probability weights, computed during OnPostJsonDataLoad. |
