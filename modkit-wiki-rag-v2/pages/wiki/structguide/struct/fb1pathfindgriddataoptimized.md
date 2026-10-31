---
document_id: "239691078d3c03843e22205fd20ee9639fcdaf438b9907cfdea4dd0bd1157955"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pathfindgriddataoptimized"
title: "B1PathFindGridDataOptimized"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:55:52+00:00"
content_sha256: "2964190e52b96786f9ef61a70eb6b8a8c23686b7833d5e92b7ff793272fc2dd7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1pathfindgriddataoptimized"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Memory-optimized pathfinding grid cell data packed into 8 bytes using fixed-point encoding and bit-packing. * Stores grid state, floor/ceil heights, zone index, safety space, and boolean flags with backward-compatible serialization.

| PropertyTypeDescriptionMetadataFloorHeightPackedint16Packed floor height using fixed-point encoding with scale 2 (precision 0.5, range +/-16383.5).Category: B1PathFindGridDataOptimizedCeilHeightPackedint16Packed ceiling height using fixed-point encoding with scale 2.Category: B1PathFindGridDataOptimizedPackedDatauint32Packed data word containing ZoneIndex (12 bits), SafetySquareSpace (12 bits), State (4 bits), and boolean flags (4 bits).Category: B1PathFindGridDataOptimized |
| --- |
| FloorHeightPackedint16Packed floor height using fixed-point encoding with scale 2 (precision 0.5, range +/-16383.5).Category: B1PathFindGridDataOptimizedCeilHeightPackedint16Packed ceiling height using fixed-point encoding with scale 2.Category: B1PathFindGridDataOptimizedPackedDatauint32Packed data word containing ZoneIndex (12 bits), SafetySquareSpace (12 bits), State (4 bits), and boolean flags (4 bits).Category: B1PathFindGridDataOptimized |
| CeilHeightPackedint16Packed ceiling height using fixed-point encoding with scale 2.Category: B1PathFindGridDataOptimizedPackedDatauint32Packed data word containing ZoneIndex (12 bits), SafetySquareSpace (12 bits), State (4 bits), and boolean flags (4 bits).Category: B1PathFindGridDataOptimized |
| PackedDatauint32Packed data word containing ZoneIndex (12 bits), SafetySquareSpace (12 bits), State (4 bits), and boolean flags (4 bits).Category: B1PathFindGridDataOptimized |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoPath[FB1PathFindGridBitArray](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pathfindgridbitarray)[FB1PathFindGroup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pathfindgroup)[FB1PathFindNode](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pathfindnode)
