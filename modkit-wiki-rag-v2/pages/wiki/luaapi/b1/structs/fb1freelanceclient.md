---
document_id: "a1edf613f0f57d5aadd762473442555d7620191d8933e0ea3a56a84373423e6f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelanceclient"
title: "FB1FreelanceClient"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:54+00:00"
content_sha256: "4baec9865a8a1fee3045722d246668d21527e34b28c2bd54925f88238262a6c5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1freelanceclient"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Runtime reference to a client or recipient for an order, storing the client type, entity ID, and optional spawn site entity ID. Client/recipient reference for orders.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`ClientType`[`EB1FreelanceClientType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelanceclienttype)Client type (NPC or Company).`EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)EntityId of the client/recipient.`SpawnSiteEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Site EntityId where NPC will spawn (valid only when ClientType is NPC and S2 is specified). |
| --- |
| `ClientType`[`EB1FreelanceClientType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelanceclienttype)Client type (NPC or Company).`EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)EntityId of the client/recipient.`SpawnSiteEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Site EntityId where NPC will spawn (valid only when ClientType is NPC and S2 is specified). |
| `EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)EntityId of the client/recipient.`SpawnSiteEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Site EntityId where NPC will spawn (valid only when ClientType is NPC and S2 is specified). |
| `SpawnSiteEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Site EntityId where NPC will spawn (valid only when ClientType is NPC and S2 is specified). |
