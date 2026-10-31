---
document_id: "8f1a3dc8613f5771413a4f04b531b74545d8fac564f09fb03a8dd94e6c653540"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citygraphroad"
title: "FB1CityGraphRoad"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:28+00:00"
content_sha256: "a860d525ae4284f1736f4ec41c9fc8a0be9552bdc0e5ec694f4bcd25fad0ff31"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1citygraphroad"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Represents a road segment in the city graph, storing its index, category, bidirectionality, length, connected node indices, and lane index range.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (9)

| NameTypeDescription`BeginLaneIndex``integer`Index of the first FB1CityGraphLane belonging to this road.`Category`[`EB1CityGraphCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphcategory)Traffic category flags applicable to this road.`EndLaneIndex``integer`Index of the last FB1CityGraphLane belonging to this road.`FromNodeIndex``integer`Index of the FB1CityGraphNode at the start of this road.`Index``integer`Global index of this road in the city graph road array.`Length``number`Total length of this road segment in world units.`ToNodeIndex``integer`Index of the FB1CityGraphNode at the end of this road.`UID``string`Unique named identifier for this road.`bBidirectional``boolean`Whether this road supports two-way traffic. |
| --- |
| `BeginLaneIndex``integer`Index of the first FB1CityGraphLane belonging to this road.`Category`[`EB1CityGraphCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphcategory)Traffic category flags applicable to this road.`EndLaneIndex``integer`Index of the last FB1CityGraphLane belonging to this road.`FromNodeIndex``integer`Index of the FB1CityGraphNode at the start of this road.`Index``integer`Global index of this road in the city graph road array.`Length``number`Total length of this road segment in world units.`ToNodeIndex``integer`Index of the FB1CityGraphNode at the end of this road.`UID``string`Unique named identifier for this road.`bBidirectional``boolean`Whether this road supports two-way traffic. |
| `Category`[`EB1CityGraphCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphcategory)Traffic category flags applicable to this road.`EndLaneIndex``integer`Index of the last FB1CityGraphLane belonging to this road.`FromNodeIndex``integer`Index of the FB1CityGraphNode at the start of this road.`Index``integer`Global index of this road in the city graph road array.`Length``number`Total length of this road segment in world units.`ToNodeIndex``integer`Index of the FB1CityGraphNode at the end of this road.`UID``string`Unique named identifier for this road.`bBidirectional``boolean`Whether this road supports two-way traffic. |
| `EndLaneIndex``integer`Index of the last FB1CityGraphLane belonging to this road.`FromNodeIndex``integer`Index of the FB1CityGraphNode at the start of this road.`Index``integer`Global index of this road in the city graph road array.`Length``number`Total length of this road segment in world units.`ToNodeIndex``integer`Index of the FB1CityGraphNode at the end of this road.`UID``string`Unique named identifier for this road.`bBidirectional``boolean`Whether this road supports two-way traffic. |
| `FromNodeIndex``integer`Index of the FB1CityGraphNode at the start of this road.`Index``integer`Global index of this road in the city graph road array.`Length``number`Total length of this road segment in world units.`ToNodeIndex``integer`Index of the FB1CityGraphNode at the end of this road.`UID``string`Unique named identifier for this road.`bBidirectional``boolean`Whether this road supports two-way traffic. |
| `Index``integer`Global index of this road in the city graph road array.`Length``number`Total length of this road segment in world units.`ToNodeIndex``integer`Index of the FB1CityGraphNode at the end of this road.`UID``string`Unique named identifier for this road.`bBidirectional``boolean`Whether this road supports two-way traffic. |
| `Length``number`Total length of this road segment in world units.`ToNodeIndex``integer`Index of the FB1CityGraphNode at the end of this road.`UID``string`Unique named identifier for this road.`bBidirectional``boolean`Whether this road supports two-way traffic. |
| `ToNodeIndex``integer`Index of the FB1CityGraphNode at the end of this road.`UID``string`Unique named identifier for this road.`bBidirectional``boolean`Whether this road supports two-way traffic. |
| `UID``string`Unique named identifier for this road.`bBidirectional``boolean`Whether this road supports two-way traffic. |
| `bBidirectional``boolean`Whether this road supports two-way traffic. |
