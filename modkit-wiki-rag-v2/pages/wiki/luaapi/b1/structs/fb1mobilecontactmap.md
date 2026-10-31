---
document_id: "922efe4b2da3fb56480c555b3982853db62626994eddb05d4e415880f20867ac"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1mobilecontactmap"
title: "FB1MobileContactMap"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:29+00:00"
content_sha256: "4b28d0f5d5dc57d0a5c50186c8358af05be5861b8a2d12209e574833cffac5f9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1mobilecontactmap"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores the contact list for a character, mapping target entity IDs to their block state. Tracks which entities are in the contact list and whether any of them are currently blocked.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (1)

| NameTypeDescription`ContactMap``table<FB1EntityId, boolean>`Key: target entity ID. Value: true if the owning character is blocking that entity. |
| --- |
| `ContactMap``table<FB1EntityId, boolean>`Key: target entity ID. Value: true if the owning character is blocking that entity. |
