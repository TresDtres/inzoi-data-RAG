---
document_id: "54197c5a7b22060e905102304f43093718164d4a2df8b202a8ebde797030f893"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pathfindgridbitarray"
title: "B1PathFindGridBitArray"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:55:52+00:00"
content_sha256: "5f66704f43f3e05874a20cb248b744c02badb69c0b0159723fac59bcf8527457"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1pathfindgridbitarray"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- A compact bit-array representation of pathfinding collision data for a floor grid, backed by uint64 words. * Supports conditional per-entity overrides and contour extraction for site sliding behavior.

| PropertyTypeDescriptionMetadataCollisionBitArrayTArrayArray of 64-bit words storing packed collision bits for each grid position.Category: B1PathFindGridBitArrayBitsWidthsint32Number of bit positions per row in the grid (width in bits).Category: B1PathFindGridBitArrayWordWidthsint32Number of uint64 words per row in the grid.Category: B1PathFindGridBitArrayWidthint32Width of the grid in grid cells.Category: B1PathFindGridBitArrayDepthint32Depth (height) of the grid in grid cells.Category: B1PathFindGridBitArray |
| --- |
| CollisionBitArrayTArrayArray of 64-bit words storing packed collision bits for each grid position.Category: B1PathFindGridBitArrayBitsWidthsint32Number of bit positions per row in the grid (width in bits).Category: B1PathFindGridBitArrayWordWidthsint32Number of uint64 words per row in the grid.Category: B1PathFindGridBitArrayWidthint32Width of the grid in grid cells.Category: B1PathFindGridBitArrayDepthint32Depth (height) of the grid in grid cells.Category: B1PathFindGridBitArray |
| BitsWidthsint32Number of bit positions per row in the grid (width in bits).Category: B1PathFindGridBitArrayWordWidthsint32Number of uint64 words per row in the grid.Category: B1PathFindGridBitArrayWidthint32Width of the grid in grid cells.Category: B1PathFindGridBitArrayDepthint32Depth (height) of the grid in grid cells.Category: B1PathFindGridBitArray |
| WordWidthsint32Number of uint64 words per row in the grid.Category: B1PathFindGridBitArrayWidthint32Width of the grid in grid cells.Category: B1PathFindGridBitArrayDepthint32Depth (height) of the grid in grid cells.Category: B1PathFindGridBitArray |
| Widthint32Width of the grid in grid cells.Category: B1PathFindGridBitArrayDepthint32Depth (height) of the grid in grid cells.Category: B1PathFindGridBitArray |
| Depthint32Depth (height) of the grid in grid cells.Category: B1PathFindGridBitArray |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoPath[FB1PathFindGridDataOptimized](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pathfindgriddataoptimized)[FB1PathFindGroup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pathfindgroup)[FB1PathFindNode](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1pathfindnode)
