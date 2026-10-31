---
document_id: "4bd48afa5c367a57a084bc77764e7b12ec5e39903f223d2ff4f141249077e2cb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citypathfindgroup"
title: "FB1CityPathFindGroup"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:29+00:00"
content_sha256: "4f19cd718c4f3e05ca33c038113bb06d79f5f76b6214789e372f7d7a9f58b01a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1citypathfindgroup"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores pathfinding group definitions for a city, along with a lookup map from site name to group index. Used by the pathfinding system to quickly determine which group a site belongs to.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`PathFindGroups``FB1PathFindGroup[]`Array of pathfinding groups, each containing a set of sites that share a pathfinding partition.`SiteAreaPathGroupIndex``table<string, integer>`Lookup map from site area name to its pathfinding group index. |
| --- |
| `PathFindGroups``FB1PathFindGroup[]`Array of pathfinding groups, each containing a set of sites that share a pathfinding partition.`SiteAreaPathGroupIndex``table<string, integer>`Lookup map from site area name to its pathfinding group index. |
| `SiteAreaPathGroupIndex``table<string, integer>`Lookup map from site area name to its pathfinding group index. |
