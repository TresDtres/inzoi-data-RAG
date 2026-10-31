---
document_id: "59d2f9d17ed5f2721024be8592b26ac6b2f6a55444ac815ef44b831c4e7baf9d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1objectcustomizematerialpartsrow"
title: "FB1ObjectCustomizeMaterialPartsRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:34+00:00"
content_sha256: "1e364bdaaf7adb357df5cf52b7652accf2ce96604df3e6efab2d9e2674197d9d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1objectcustomizematerialpartsrow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data table row defining the full set of customizable material parts for an object and an optional actor swap group. Each row maps an object's surface areas to their customization rules via part definitions.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (2)

| NameTypeDescription`ChangeActorId``string`ID of the group that can be swapped out with another object.`Parts``FB1ObjectPartsDefinition[]`Defines the parts that make up each object. |
| --- |
| `ChangeActorId``string`ID of the group that can be swapped out with another object.`Parts``FB1ObjectPartsDefinition[]`Defines the parts that make up each object. |
| `Parts``FB1ObjectPartsDefinition[]`Defines the parts that make up each object. |
