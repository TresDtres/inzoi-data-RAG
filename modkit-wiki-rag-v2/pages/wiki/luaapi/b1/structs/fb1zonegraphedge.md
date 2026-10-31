---
document_id: "a69206e542ac333346fd174e00cee1b0e18c0885ebd34437e0f0c69d90d5ce40"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1zonegraphedge"
title: "FB1ZoneGraphEdge"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:53+00:00"
content_sha256: "a103b957ff7dce727418f6122159523f2bd74cffb5150118fe5f2df8e8f0a837"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1zonegraphedge"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Represents a directed edge in the zone graph, linking two zone graph nodes and caching the navigation path between them. Stores the destination zone index, traversal cost, connected node index, and same-zone connection metadata.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`CachedPath``FB1NavigationNode[]`Cached navigation path nodes for this edge's traversal.`ConnectedNodeIndex``integer`Index of the zone graph node this edge connects to.`Cost``integer`Traversal cost for this edge used in zone graph pathfinding.`SameZoneConnectInfo`[`FB1SameZoneConnectEdgeInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1samezoneconnectedgeinfo)Additional connection info used when this edge traverses a same-zone connect node.`ZoneIndex``integer`Index of the destination zone this edge leads to.`bRelateSameZoneConnectNode``boolean`Whether this edge passes through a same-zone connection node. |
| --- |
| `CachedPath``FB1NavigationNode[]`Cached navigation path nodes for this edge's traversal.`ConnectedNodeIndex``integer`Index of the zone graph node this edge connects to.`Cost``integer`Traversal cost for this edge used in zone graph pathfinding.`SameZoneConnectInfo`[`FB1SameZoneConnectEdgeInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1samezoneconnectedgeinfo)Additional connection info used when this edge traverses a same-zone connect node.`ZoneIndex``integer`Index of the destination zone this edge leads to.`bRelateSameZoneConnectNode``boolean`Whether this edge passes through a same-zone connection node. |
| `ConnectedNodeIndex``integer`Index of the zone graph node this edge connects to.`Cost``integer`Traversal cost for this edge used in zone graph pathfinding.`SameZoneConnectInfo`[`FB1SameZoneConnectEdgeInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1samezoneconnectedgeinfo)Additional connection info used when this edge traverses a same-zone connect node.`ZoneIndex``integer`Index of the destination zone this edge leads to.`bRelateSameZoneConnectNode``boolean`Whether this edge passes through a same-zone connection node. |
| `Cost``integer`Traversal cost for this edge used in zone graph pathfinding.`SameZoneConnectInfo`[`FB1SameZoneConnectEdgeInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1samezoneconnectedgeinfo)Additional connection info used when this edge traverses a same-zone connect node.`ZoneIndex``integer`Index of the destination zone this edge leads to.`bRelateSameZoneConnectNode``boolean`Whether this edge passes through a same-zone connection node. |
| `SameZoneConnectInfo`[`FB1SameZoneConnectEdgeInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1samezoneconnectedgeinfo)Additional connection info used when this edge traverses a same-zone connect node.`ZoneIndex``integer`Index of the destination zone this edge leads to.`bRelateSameZoneConnectNode``boolean`Whether this edge passes through a same-zone connection node. |
| `ZoneIndex``integer`Index of the destination zone this edge leads to.`bRelateSameZoneConnectNode``boolean`Whether this edge passes through a same-zone connection node. |
| `bRelateSameZoneConnectNode``boolean`Whether this edge passes through a same-zone connection node. |
