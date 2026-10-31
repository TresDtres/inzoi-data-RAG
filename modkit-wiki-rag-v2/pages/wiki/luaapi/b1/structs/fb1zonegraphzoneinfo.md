---
document_id: "d44ef3a181b7f75d4b17cb4c29d3b425c8180628c41a9609131d596771b95223"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1zonegraphzoneinfo"
title: "FB1ZoneGraphZoneInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:53+00:00"
content_sha256: "7e7d967c1605b75e5ef7ee3104cb3c2f616812dbf421c2d057ee2baa5ab6c00c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1zonegraphzoneinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores zone graph connectivity data for a single zone, tracking connected node indices and the floor level it occupies. Used to resolve inter-zone transitions during pathfinding.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`ConnectedNodeIndex``integer[]`Indices of zone graph nodes connected to this zone.`ZoneFloorLevel``integer`Floor level index this zone resides on. |
| --- |
| `ConnectedNodeIndex``integer[]`Indices of zone graph nodes connected to this zone.`ZoneFloorLevel``integer`Floor level index this zone resides on. |
| `ZoneFloorLevel``integer`Floor level index this zone resides on. |
