---
document_id: "86656d2e54045abb2618355d169d0b2accf72fbbfdaa503e93465865709bd381"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1floorpathfindgrid"
title: "FB1FloorPathFindGrid"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:52+00:00"
content_sha256: "15e38f6241ef1c43f5b086ebffb24c0a6eed53aa045409a7d1b819f8d6b3694c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1floorpathfindgrid"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores the array of pathfinding grid data for a single floor level, with SoA (Struct of Arrays) serialization support. Uses LLM tagging for memory tracking and supports both legacy AoS and optimized SoA layouts during serialization (kept as bytes because there is so much pathfinding data).

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (1)

| NameTypeDescription`PathFindGridData``FB1PathFindGridDataOptimized[]`Array of optimized pathfinding grid cell data for all grid positions on this floor. |
| --- |
| `PathFindGridData``FB1PathFindGridDataOptimized[]`Array of optimized pathfinding grid cell data for all grid positions on this floor. |
