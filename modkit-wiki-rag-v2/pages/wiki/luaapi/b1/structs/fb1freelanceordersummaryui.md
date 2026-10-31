---
document_id: "0ebc8c3d3fa224028d684550b1127d8f84188e1d14eb0d27fa9fad7be5f32e6e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelanceordersummaryui"
title: "FB1FreelanceOrderSummaryUI"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:56+00:00"
content_sha256: "6f8c9d2c78aa8174b3aff9b4f96a1bee606ce8b5946591e588e99339cfe9676a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1freelanceordersummaryui"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Wraps FB1FreelanceOrderSummary with a pre-computed bCanAccept flag. bCanAccept is computed in B2 based on the character's license ownership, and is used in packets sent from B2 to B1 for UI display.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`Summary`[`FB1FreelanceOrderSummary`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelanceordersummary)Original summary data.`bCanAccept``boolean`Can the character accept this order? (pre-computed in B2). |
| --- |
| `Summary`[`FB1FreelanceOrderSummary`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelanceordersummary)Original summary data.`bCanAccept``boolean`Can the character accept this order? (pre-computed in B2). |
| `bCanAccept``boolean`Can the character accept this order? (pre-computed in B2). |
