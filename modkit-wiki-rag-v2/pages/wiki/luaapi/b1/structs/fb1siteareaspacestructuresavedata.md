---
document_id: "f4dea660ac94f360c99c914a9fc1d7b09a57d0cd4eca7342f05b053d268451e6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1siteareaspacestructuresavedata"
title: "FB1SiteAreaSpaceStructureSaveData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:25+00:00"
content_sha256: "c95648bb461694e3d4a2ae57d510eb5a49e24a5353e659f89878138233891e83"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1siteareaspacestructuresavedata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Saved data for a single space structure in a site area layer, including its border and open edges.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`Border`[`FB1BorderSaveData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1bordersavedata)The border polygon data defining the boundary of this space structure.`InnerSpacesInternalIndexArray``integer[]`The list of internal indices of inner spaces contained within this structure.`InternalIndex``integer`The internal index identifying this space structure within its layer.`OpenEdges``integer[]`The list of open (passable) edge IDs within this space structure.`SpaceAttribute``integer`A bitmask encoding additional attributes of this space structure. |
| --- |
| `Border`[`FB1BorderSaveData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1bordersavedata)The border polygon data defining the boundary of this space structure.`InnerSpacesInternalIndexArray``integer[]`The list of internal indices of inner spaces contained within this structure.`InternalIndex``integer`The internal index identifying this space structure within its layer.`OpenEdges``integer[]`The list of open (passable) edge IDs within this space structure.`SpaceAttribute``integer`A bitmask encoding additional attributes of this space structure. |
| `InnerSpacesInternalIndexArray``integer[]`The list of internal indices of inner spaces contained within this structure.`InternalIndex``integer`The internal index identifying this space structure within its layer.`OpenEdges``integer[]`The list of open (passable) edge IDs within this space structure.`SpaceAttribute``integer`A bitmask encoding additional attributes of this space structure. |
| `InternalIndex``integer`The internal index identifying this space structure within its layer.`OpenEdges``integer[]`The list of open (passable) edge IDs within this space structure.`SpaceAttribute``integer`A bitmask encoding additional attributes of this space structure. |
| `OpenEdges``integer[]`The list of open (passable) edge IDs within this space structure.`SpaceAttribute``integer`A bitmask encoding additional attributes of this space structure. |
| `SpaceAttribute``integer`A bitmask encoding additional attributes of this space structure. |
