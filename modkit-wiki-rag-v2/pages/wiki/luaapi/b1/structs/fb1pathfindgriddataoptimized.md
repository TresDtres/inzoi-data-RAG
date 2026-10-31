---
document_id: "789c7ee952c2c8eb9f39301fe313f38c7e8cb0127e3bdd30adaf81b235280922"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1pathfindgriddataoptimized"
title: "FB1PathFindGridDataOptimized"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:00+00:00"
content_sha256: "346cb7eb26d135d657e72966dd698046652777bbe39346285522a57be85a64e4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1pathfindgriddataoptimized"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Memory-optimized pathfinding grid cell data packed into 8 bytes using fixed-point encoding and bit-packing. Stores grid state, floor/ceil heights, zone index, safety space, and boolean flags with backward-compatible serialization.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`CeilHeightPacked``integer`Packed ceiling height using fixed-point encoding with scale 2.`FloorHeightPacked``integer`Packed floor height using fixed-point encoding with scale 2 (precision 0.5, range +/-16383.5).`PackedData``integer`Packed data word containing ZoneIndex (12 bits), SafetySquareSpace (12 bits), State (4 bits), and boolean flags (4 bits). |
| --- |
| `CeilHeightPacked``integer`Packed ceiling height using fixed-point encoding with scale 2.`FloorHeightPacked``integer`Packed floor height using fixed-point encoding with scale 2 (precision 0.5, range +/-16383.5).`PackedData``integer`Packed data word containing ZoneIndex (12 bits), SafetySquareSpace (12 bits), State (4 bits), and boolean flags (4 bits). |
| `FloorHeightPacked``integer`Packed floor height using fixed-point encoding with scale 2 (precision 0.5, range +/-16383.5).`PackedData``integer`Packed data word containing ZoneIndex (12 bits), SafetySquareSpace (12 bits), State (4 bits), and boolean flags (4 bits). |
| `PackedData``integer`Packed data word containing ZoneIndex (12 bits), SafetySquareSpace (12 bits), State (4 bits), and boolean flags (4 bits). |
