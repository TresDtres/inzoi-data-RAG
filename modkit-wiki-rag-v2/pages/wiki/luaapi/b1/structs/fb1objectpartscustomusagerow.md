---
document_id: "f575ce1e51eb62a8d064c8965ae82ada3e4ba0b26f823ee55c80bd5fd14a6ac2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1objectpartscustomusagerow"
title: "FB1ObjectPartsCustomUsageRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:35+00:00"
content_sha256: "28b5563ac37d7819dac15f0f35258820343a47c411a7ea0af5e977613bf23c76"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1objectpartscustomusagerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data table row defining the customization capabilities for a specific object part group. Specifies which mesh groups, material change groups, and material groups are available.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (5)

| NameTypeDescription`MaterialChangeGroups``string[]`List of material change group IDs available for switching materials on this part.`MaterialGroups``string[]`List of customizable material group IDs available for color and parameter editing on this part.`MeshGroups``string[]`List of mesh group IDs whose meshes can be swapped on this object part.`UsableAITexture``boolean`Whether this object part can use AI-generated textures.`UsableImportedTexture``boolean`Whether this object part can use imported (user-provided) textures. |
| --- |
| `MaterialChangeGroups``string[]`List of material change group IDs available for switching materials on this part.`MaterialGroups``string[]`List of customizable material group IDs available for color and parameter editing on this part.`MeshGroups``string[]`List of mesh group IDs whose meshes can be swapped on this object part.`UsableAITexture``boolean`Whether this object part can use AI-generated textures.`UsableImportedTexture``boolean`Whether this object part can use imported (user-provided) textures. |
| `MaterialGroups``string[]`List of customizable material group IDs available for color and parameter editing on this part.`MeshGroups``string[]`List of mesh group IDs whose meshes can be swapped on this object part.`UsableAITexture``boolean`Whether this object part can use AI-generated textures.`UsableImportedTexture``boolean`Whether this object part can use imported (user-provided) textures. |
| `MeshGroups``string[]`List of mesh group IDs whose meshes can be swapped on this object part.`UsableAITexture``boolean`Whether this object part can use AI-generated textures.`UsableImportedTexture``boolean`Whether this object part can use imported (user-provided) textures. |
| `UsableAITexture``boolean`Whether this object part can use AI-generated textures.`UsableImportedTexture``boolean`Whether this object part can use imported (user-provided) textures. |
| `UsableImportedTexture``boolean`Whether this object part can use imported (user-provided) textures. |
