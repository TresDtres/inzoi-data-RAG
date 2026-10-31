---
document_id: "8e5d1154c2d3007e0d398aa4169d7958f3397627a2c7ed1f791425460522f4e3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1vehiclepartcache"
title: "FB1VehiclePartCache"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:47+00:00"
content_sha256: "ba2ad58ed2f6eeb30dfe72e95af3d40c78410048fcec20cec883e86bb70468ee"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1vehiclepartcache"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Cached runtime data for a vehicle part, including its default state, mesh names, and state-to-action map.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`DefaultState``string`Default state name applied when the part is first initialized.`MeshName``string[]`List of mesh component names associated with this vehicle part.`StateSettings``table<string, FB1VehiclePartState>`Map of state names to their corresponding part action settings. |
| --- |
| `DefaultState``string`Default state name applied when the part is first initialized.`MeshName``string[]`List of mesh component names associated with this vehicle part.`StateSettings``table<string, FB1VehiclePartState>`Map of state names to their corresponding part action settings. |
| `MeshName``string[]`List of mesh component names associated with this vehicle part.`StateSettings``table<string, FB1VehiclePartState>`Map of state names to their corresponding part action settings. |
| `StateSettings``table<string, FB1VehiclePartState>`Map of state names to their corresponding part action settings. |
