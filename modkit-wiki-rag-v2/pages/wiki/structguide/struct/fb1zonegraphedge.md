---
document_id: "27758cbae65b2cdbad07540f31e5a98a5ad55cbfea0355f402336be611613d36"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1zonegraphedge"
title: "B1ZoneGraphEdge"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:27+00:00"
content_sha256: "755d388495bc749a69b3e0f80b801b57a15f31011f85384fdd6f2c9ac1aed586"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1zonegraphedge"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Represents a directed edge in the zone graph, linking two zone graph nodes and caching the navigation path between them. * Stores the destination zone index, traversal cost, connected node index, and same-zone connection metadata.

| PropertyTypeDescriptionMetadataZoneIndexint32Index of the destination zone this edge leads to.Category: B1ZoneGraphEdgebRelateSameZoneConnectNodeboolWhether this edge passes through a same-zone connection node.Category: B1ZoneGraphEdgeSameZoneConnectInfoFB1SameZoneConnectEdgeInfoAdditional connection info used when this edge traverses a same-zone connect node.Category: B1ZoneGraphEdgeCostint32Traversal cost for this edge used in zone graph pathfinding.Category: B1ZoneGraphEdgeConnectedNodeIndexint32Index of the zone graph node this edge connects to.Category: B1ZoneGraphEdgeCachedPathTArrayCached navigation path nodes for this edge's traversal.Category: B1ZoneGraphEdge |
| --- |
| ZoneIndexint32Index of the destination zone this edge leads to.Category: B1ZoneGraphEdgebRelateSameZoneConnectNodeboolWhether this edge passes through a same-zone connection node.Category: B1ZoneGraphEdgeSameZoneConnectInfoFB1SameZoneConnectEdgeInfoAdditional connection info used when this edge traverses a same-zone connect node.Category: B1ZoneGraphEdgeCostint32Traversal cost for this edge used in zone graph pathfinding.Category: B1ZoneGraphEdgeConnectedNodeIndexint32Index of the zone graph node this edge connects to.Category: B1ZoneGraphEdgeCachedPathTArrayCached navigation path nodes for this edge's traversal.Category: B1ZoneGraphEdge |
| bRelateSameZoneConnectNodeboolWhether this edge passes through a same-zone connection node.Category: B1ZoneGraphEdgeSameZoneConnectInfoFB1SameZoneConnectEdgeInfoAdditional connection info used when this edge traverses a same-zone connect node.Category: B1ZoneGraphEdgeCostint32Traversal cost for this edge used in zone graph pathfinding.Category: B1ZoneGraphEdgeConnectedNodeIndexint32Index of the zone graph node this edge connects to.Category: B1ZoneGraphEdgeCachedPathTArrayCached navigation path nodes for this edge's traversal.Category: B1ZoneGraphEdge |
| SameZoneConnectInfoFB1SameZoneConnectEdgeInfoAdditional connection info used when this edge traverses a same-zone connect node.Category: B1ZoneGraphEdgeCostint32Traversal cost for this edge used in zone graph pathfinding.Category: B1ZoneGraphEdgeConnectedNodeIndexint32Index of the zone graph node this edge connects to.Category: B1ZoneGraphEdgeCachedPathTArrayCached navigation path nodes for this edge's traversal.Category: B1ZoneGraphEdge |
| Costint32Traversal cost for this edge used in zone graph pathfinding.Category: B1ZoneGraphEdgeConnectedNodeIndexint32Index of the zone graph node this edge connects to.Category: B1ZoneGraphEdgeCachedPathTArrayCached navigation path nodes for this edge's traversal.Category: B1ZoneGraphEdge |
| ConnectedNodeIndexint32Index of the zone graph node this edge connects to.Category: B1ZoneGraphEdgeCachedPathTArrayCached navigation path nodes for this edge's traversal.Category: B1ZoneGraphEdge |
| CachedPathTArrayCached navigation path nodes for this edge's traversal.Category: B1ZoneGraphEdge |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoZone[FB1ZoneGraphNode](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1zonegraphnode)[FB1ZoneGraphZoneInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1zonegraphzoneinfo)[FB1ZoneIndexGraph](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1zoneindexgraph)
