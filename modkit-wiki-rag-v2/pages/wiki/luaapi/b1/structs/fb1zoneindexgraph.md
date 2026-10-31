---
document_id: "1e4aee45acd5e554cdcedd8d1e4aee25c3e47e7fd2b45aa57cd0f0ea92aa33af"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1zoneindexgraph"
title: "FB1ZoneIndexGraph"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:54+00:00"
content_sha256: "cf14736a6918a06906a6ad4a399dd1f8efec5a8729f7f0d73fb29a54b085dc25"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1zoneindexgraph"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores a pair of zone indices and the door object IDs that connect them, used to represent a bidirectional zone connection. Used during zone graph construction to track which doors bridge specific zone pairs.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`DoorObjectIds``integer[]`List of door object IDs that bridge the two zones.`ZoneIndex1``integer`Index of the first zone in this zone connection pair.`ZoneIndex2``integer`Index of the second zone in this zone connection pair. |
| --- |
| `DoorObjectIds``integer[]`List of door object IDs that bridge the two zones.`ZoneIndex1``integer`Index of the first zone in this zone connection pair.`ZoneIndex2``integer`Index of the second zone in this zone connection pair. |
| `ZoneIndex1``integer`Index of the first zone in this zone connection pair.`ZoneIndex2``integer`Index of the second zone in this zone connection pair. |
| `ZoneIndex2``integer`Index of the second zone in this zone connection pair. |
