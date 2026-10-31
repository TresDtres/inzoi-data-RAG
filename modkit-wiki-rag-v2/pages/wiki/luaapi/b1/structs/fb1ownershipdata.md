---
document_id: "92ff492798d7384ced693503fd4f8e2d8bf5034c6a70d0218ee30c84854dd3f4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1ownershipdata"
title: "FB1OwnershipData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:38+00:00"
content_sha256: "cdc1d417fb8f2bde61fe84266d06e76797dfd0d884d54894b21f50aabe95b1f4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1ownershipdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Serializable ownership data recording the ownership type and owner entity ID of a placed game object. Persisted as part of the object save data to track who owns or placed each object in the world.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`OwnerId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character or entity that owns this object.`OwnershipType`[`EB1OwnershipType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1ownershiptype)Type of ownership (e.g., Personal, Household, Public) for this object. |
| --- |
| `OwnerId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character or entity that owns this object.`OwnershipType`[`EB1OwnershipType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1ownershiptype)Type of ownership (e.g., Personal, Household, Public) for this object. |
| `OwnershipType`[`EB1OwnershipType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1ownershiptype)Type of ownership (e.g., Personal, Household, Public) for this object. |
