---
document_id: "dde04e3caa1d5b76d1942172a1c8c4539e5cda2eef4e91151ca1ee2ac0e1a17b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1samezoneconnectedgeinfo"
title: "FB1SameZoneConnectEdgeInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:18+00:00"
content_sha256: "ff93a2a60a01714566001a97ea082ed4e4653cc9daf5335abb64aaabe37aa2cf"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1samezoneconnectedgeinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores edge connectivity information between two zones sharing the same connect node, tracking entry direction for each zone. Used when resolving zone graph edges that span a single connection node shared by two zones.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`bFromZoneIndex1``boolean`Whether this edge originates from zone index 1's side of the connection.`bToZoneIndex1``boolean`Whether this edge targets zone index 1's side of the connection. |
| --- |
| `bFromZoneIndex1``boolean`Whether this edge originates from zone index 1's side of the connection.`bToZoneIndex1``boolean`Whether this edge targets zone index 1's side of the connection. |
| `bToZoneIndex1``boolean`Whether this edge targets zone index 1's side of the connection. |
