---
document_id: "97c0045203302c6053b392ec8e80618b79713db5288782974c053e1643223809"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citygraphnode"
title: "FB1CityGraphNode"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:28+00:00"
content_sha256: "c9c5e9c6c7d383b599aa5a3c45ff136880ebd56ef3db1bf3e88b4fa18a57f2c6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1citygraphnode"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Represents a node in the city graph, storing its index, category, world position, width, unique identifier, and list of connected road links.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`Category`[`EB1CityGraphCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphcategory)Traffic category flags applicable to this node (e.g., Pedestrian, Car).`Index``integer`Global index of this node in the city graph node array.`Links``FB1CityGraphNodeLink[]`List of road links connecting to this node.`Position``FVector`World-space position of this node.`UID``string`Unique named identifier for this node.`Width``number`Width of the node, used for pathfinding and visualization. |
| --- |
| `Category`[`EB1CityGraphCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphcategory)Traffic category flags applicable to this node (e.g., Pedestrian, Car).`Index``integer`Global index of this node in the city graph node array.`Links``FB1CityGraphNodeLink[]`List of road links connecting to this node.`Position``FVector`World-space position of this node.`UID``string`Unique named identifier for this node.`Width``number`Width of the node, used for pathfinding and visualization. |
| `Index``integer`Global index of this node in the city graph node array.`Links``FB1CityGraphNodeLink[]`List of road links connecting to this node.`Position``FVector`World-space position of this node.`UID``string`Unique named identifier for this node.`Width``number`Width of the node, used for pathfinding and visualization. |
| `Links``FB1CityGraphNodeLink[]`List of road links connecting to this node.`Position``FVector`World-space position of this node.`UID``string`Unique named identifier for this node.`Width``number`Width of the node, used for pathfinding and visualization. |
| `Position``FVector`World-space position of this node.`UID``string`Unique named identifier for this node.`Width``number`Width of the node, used for pathfinding and visualization. |
| `UID``string`Unique named identifier for this node.`Width``number`Width of the node, used for pathfinding and visualization. |
| `Width``number`Width of the node, used for pathfinding and visualization. |
