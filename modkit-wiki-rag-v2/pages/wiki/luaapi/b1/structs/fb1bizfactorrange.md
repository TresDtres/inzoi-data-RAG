---
document_id: "9eec5f052aee073f2658f2b116b8981d939a837c33963bb54246b04bbc43ee09"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1bizfactorrange"
title: "FB1BizFactorRange"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:11+00:00"
content_sha256: "be61634fefd5201b48c00814495aa9fc2bcd1ce1a8474baa71ad8da4db7967b2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1bizfactorrange"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Represents an inclusive integer range with optional open bounds for a single business review factor, used to clamp or validate satisfaction scores per factor type.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`LowerBound``integer`Lower bound of the range; leave at default (INT_MIN) to represent an open lower bound.`UpperBound``integer`Upper bound of the range; leave at default (INT_MAX) to represent an open upper bound. |
| --- |
| `LowerBound``integer`Lower bound of the range; leave at default (INT_MIN) to represent an open lower bound.`UpperBound``integer`Upper bound of the range; leave at default (INT_MAX) to represent an open upper bound. |
| `UpperBound``integer`Upper bound of the range; leave at default (INT_MAX) to represent an open upper bound. |
