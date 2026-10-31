---
document_id: "7bb3a76ade5cec1bb04db57702e78fd8bae80ef0b479428071b613e80ee56a59"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1relationshipcategorytablerow"
title: "FB1RelationshipCategoryTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:12+00:00"
content_sha256: "b341786a74b523c50ca0ee3d1bfbf7ee8f51c901e907ac3173de960369d5e208"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1relationshipcategorytablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining a relationship category, including uniqueness and decay removal flags, and a description text ID.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (3)

| NameTypeDescription`DescTextId``string`The text ID for the description of this relationship category.`IsDeleteByDecay``boolean`Whether relationships in this category are automatically removed when their stat decays to zero.`IsUniqueInCategory``boolean`Whether a character can only have one relationship of this category at a time. |
| --- |
| `DescTextId``string`The text ID for the description of this relationship category.`IsDeleteByDecay``boolean`Whether relationships in this category are automatically removed when their stat decays to zero.`IsUniqueInCategory``boolean`Whether a character can only have one relationship of this category at a time. |
| `IsDeleteByDecay``boolean`Whether relationships in this category are automatically removed when their stat decays to zero.`IsUniqueInCategory``boolean`Whether a character can only have one relationship of this category at a time. |
| `IsUniqueInCategory``boolean`Whether a character can only have one relationship of this category at a time. |
