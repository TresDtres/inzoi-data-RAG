---
document_id: "656d0d773edc7eb3665aca9f9d4667d873ea778c01e3f61882d7051b3daba339"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citygraphpath"
title: "FB1CityGraphPath"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:28+00:00"
content_sha256: "8ac3f419ca7302156942197dd117e7d4016a7d071f0f59af4a84144b35cd8a15"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1citygraphpath"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Represents the result of a city graph pathfinding query, containing the start and end points, the ordered sequence of lane keys, and the total pathfinding cost.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`From`[`FB1CityGraphPoint`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citygraphpoint)Start point of this path result.`Keys``FB1CityGraphLaneKey[]`Ordered list of lane keys forming the route from start to end.`To`[`FB1CityGraphPoint`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citygraphpoint)End point of this path result.`TotalCost``number`Total accumulated cost of the found path; -1 indicates no valid path.`bLanePathFilled``boolean`Whether the detailed lane point path has been filled in for this result. |
| --- |
| `From`[`FB1CityGraphPoint`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citygraphpoint)Start point of this path result.`Keys``FB1CityGraphLaneKey[]`Ordered list of lane keys forming the route from start to end.`To`[`FB1CityGraphPoint`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citygraphpoint)End point of this path result.`TotalCost``number`Total accumulated cost of the found path; -1 indicates no valid path.`bLanePathFilled``boolean`Whether the detailed lane point path has been filled in for this result. |
| `Keys``FB1CityGraphLaneKey[]`Ordered list of lane keys forming the route from start to end.`To`[`FB1CityGraphPoint`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citygraphpoint)End point of this path result.`TotalCost``number`Total accumulated cost of the found path; -1 indicates no valid path.`bLanePathFilled``boolean`Whether the detailed lane point path has been filled in for this result. |
| `To`[`FB1CityGraphPoint`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citygraphpoint)End point of this path result.`TotalCost``number`Total accumulated cost of the found path; -1 indicates no valid path.`bLanePathFilled``boolean`Whether the detailed lane point path has been filled in for this result. |
| `TotalCost``number`Total accumulated cost of the found path; -1 indicates no valid path.`bLanePathFilled``boolean`Whether the detailed lane point path has been filled in for this result. |
| `bLanePathFilled``boolean`Whether the detailed lane point path has been filled in for this result. |
