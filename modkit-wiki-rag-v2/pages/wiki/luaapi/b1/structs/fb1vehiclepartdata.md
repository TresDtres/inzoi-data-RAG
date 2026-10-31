---
document_id: "5842a6feb6f1dddeacabb7c137c2efaf25fe9ea277dc4ca383e78ac84940ba7f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1vehiclepartdata"
title: "FB1VehiclePartData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:47+00:00"
content_sha256: "2eab05e4e7a4e7a3cd4f7dcd35b03470b63cdfc13ef0327fd9876e929dab399f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1vehiclepartdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Runtime data for a specific vehicle part, combining mesh names, current state, and state-to-action settings.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`MeshName``string[]`List of mesh component names associated with this part at runtime.`State``string`Current active state name for this vehicle part.`StateSettings``table<string, FB1VehiclePartState>`Map of state names to their action settings for this part. |
| --- |
| `MeshName``string[]`List of mesh component names associated with this part at runtime.`State``string`Current active state name for this vehicle part.`StateSettings``table<string, FB1VehiclePartState>`Map of state names to their action settings for this part. |
| `State``string`Current active state name for this vehicle part.`StateSettings``table<string, FB1VehiclePartState>`Map of state names to their action settings for this part. |
| `StateSettings``table<string, FB1VehiclePartState>`Map of state names to their action settings for this part. |
