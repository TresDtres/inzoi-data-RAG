---
document_id: "5e1467cdf72162e1d7420bc8130160b17f5325fba72d1b162744904a73320a60"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1zoneindexgraph"
title: "B1ZoneIndexGraph"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:28+00:00"
content_sha256: "7b041a2ab736d91a84dcbf5cfee1ebac1dd2e152600d8cea1759c450da87c733"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1zoneindexgraph"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Stores a pair of zone indices and the door object IDs that connect them, used to represent a bidirectional zone connection. * Used during zone graph construction to track which doors bridge specific zone pairs.

| PropertyTypeDescriptionMetadataZoneIndex1int32Index of the first zone in this zone connection pair.Category: B1ZoneIndexGraphZoneIndex2int32Index of the second zone in this zone connection pair.Category: B1ZoneIndexGraphDoorObjectIdsTArrayList of door object IDs that bridge the two zones.Category: B1ZoneIndexGraph |
| --- |
| ZoneIndex1int32Index of the first zone in this zone connection pair.Category: B1ZoneIndexGraphZoneIndex2int32Index of the second zone in this zone connection pair.Category: B1ZoneIndexGraphDoorObjectIdsTArrayList of door object IDs that bridge the two zones.Category: B1ZoneIndexGraph |
| ZoneIndex2int32Index of the second zone in this zone connection pair.Category: B1ZoneIndexGraphDoorObjectIdsTArrayList of door object IDs that bridge the two zones.Category: B1ZoneIndexGraph |
| DoorObjectIdsTArrayList of door object IDs that bridge the two zones.Category: B1ZoneIndexGraph |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoZone[FB1ZoneGraphEdge](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1zonegraphedge)[FB1ZoneGraphNode](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1zonegraphnode)[FB1ZoneGraphZoneInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1zonegraphzoneinfo)
