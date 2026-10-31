---
document_id: "f04727db2c7b16f707b34b8a596ca1121d6140badd2c99ff1647ea6413aa2a46"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1bordersavedata"
title: "FB1BorderSaveData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:13+00:00"
content_sha256: "9125056b6312fc76db4106d3a254adf9c606be782aa72557cde37d1dcc62aea3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1bordersavedata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Saved data for a bordered region defined by an outer polygon and optional inner hole polygons.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`Holes``FB1Polygon2SaveData[]`The list of inner hole polygons that exclude regions from this border.`Outer`[`FB1Polygon2SaveData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1polygon2savedata)The outer boundary polygon of this bordered region.`bOuterIsCW``boolean`Whether the outer polygon vertices are in clockwise order. |
| --- |
| `Holes``FB1Polygon2SaveData[]`The list of inner hole polygons that exclude regions from this border.`Outer`[`FB1Polygon2SaveData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1polygon2savedata)The outer boundary polygon of this bordered region.`bOuterIsCW``boolean`Whether the outer polygon vertices are in clockwise order. |
| `Outer`[`FB1Polygon2SaveData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1polygon2savedata)The outer boundary polygon of this bordered region.`bOuterIsCW``boolean`Whether the outer polygon vertices are in clockwise order. |
| `bOuterIsCW``boolean`Whether the outer polygon vertices are in clockwise order. |
