---
document_id: "87ea4a0b563041c9e95cb213dbaaa9cc1a8dd5b30e5a126ed895fc0af23f548c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1pathfindgridbitarray"
title: "FB1PathFindGridBitArray"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:00+00:00"
content_sha256: "13a536d0f1d2daed78ad6ec509703587752c432b5b6464418aaa0082d1ae5e9c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1pathfindgridbitarray"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- A compact bit-array representation of pathfinding collision data for a floor grid, backed by uint64 words. Supports conditional per-entity overrides and contour extraction for site sliding behavior.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`BitsWidths``integer`Number of bit positions per row in the grid (width in bits).`CollisionBitArray``integer[]`Array of 64-bit words storing packed collision bits for each grid position.`Depth``integer`Depth (height) of the grid in grid cells.`Width``integer`Width of the grid in grid cells.`WordWidths``integer`Number of uint64 words per row in the grid. |
| --- |
| `BitsWidths``integer`Number of bit positions per row in the grid (width in bits).`CollisionBitArray``integer[]`Array of 64-bit words storing packed collision bits for each grid position.`Depth``integer`Depth (height) of the grid in grid cells.`Width``integer`Width of the grid in grid cells.`WordWidths``integer`Number of uint64 words per row in the grid. |
| `CollisionBitArray``integer[]`Array of 64-bit words storing packed collision bits for each grid position.`Depth``integer`Depth (height) of the grid in grid cells.`Width``integer`Width of the grid in grid cells.`WordWidths``integer`Number of uint64 words per row in the grid. |
| `Depth``integer`Depth (height) of the grid in grid cells.`Width``integer`Width of the grid in grid cells.`WordWidths``integer`Number of uint64 words per row in the grid. |
| `Width``integer`Width of the grid in grid cells.`WordWidths``integer`Number of uint64 words per row in the grid. |
| `WordWidths``integer`Number of uint64 words per row in the grid. |
