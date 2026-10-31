---
document_id: "a5df20fd452f9e19515ab54ad4b8041c680d342c306d0c4ef4bffa89c0449e85"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1meshspawntagtablerow"
title: "FB1MeshSpawnTagTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:26+00:00"
content_sha256: "aaec5cbb1a197470c26feb81399c8042334dd21bf3771444a201d8accf294e3f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1meshspawntagtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data table row that maps mesh IDs using tags for spawning at shared vehicle sites. Vehicles are spawned with the appropriate mesh based on their tags to match the city.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (2)

| NameTypeDescription`DefaultMeshId``string`The default mesh ID used as a fallback for cities that share or are missing specific data.`MeshDescriptionIds``table<string, string>`A map of city tag names to their corresponding mesh description IDs. |
| --- |
| `DefaultMeshId``string`The default mesh ID used as a fallback for cities that share or are missing specific data.`MeshDescriptionIds``table<string, string>`A map of city tag names to their corresponding mesh description IDs. |
| `MeshDescriptionIds``table<string, string>`A map of city tag names to their corresponding mesh description IDs. |
