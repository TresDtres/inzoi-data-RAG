---
document_id: "13c0218c98e60bc750769f97cce303374d64a16161b050637c0965f1d4aecdca"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citylocation"
title: "FB1CityLocation"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:29+00:00"
content_sha256: "5ff8e8701e7649e10e6c1c42d701b1c5d84676e269559609f6b59a25f47baeb9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1citylocation"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that defines named city locations for a set of maps. Maps level names to world-space positions and specifies whether the location must be set for all maps.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`CityLocation``table<string, FVector>`Map from level name to world-space location for this city point.`bMustSetToAllMap``boolean`Whether this location must be defined for every map in the data asset. |
| --- |
| `CityLocation``table<string, FVector>`Map from level name to world-space location for this city point.`bMustSetToAllMap``boolean`Whether this location must be defined for every map in the data asset. |
| `bMustSetToAllMap``boolean`Whether this location must be defined for every map in the data asset. |
