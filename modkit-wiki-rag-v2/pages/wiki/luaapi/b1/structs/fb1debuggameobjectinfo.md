---
document_id: "3a20c3dc21e9fd13dfba24375ed8ff964aa3fd03e53b2ca35f98e311e6154057"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1debuggameobjectinfo"
title: "FB1DebugGameObjectInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:39+00:00"
content_sha256: "eeb2bef9d4013bda7ba99977cd3b85316442eb732c34ae5b378addc067de23fe"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1debuggameobjectinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores debug display information for a single game object entity, including location and a map of debug strings per category.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`DebugStringMap``table<EB1DebugGameObject, string>`Map of debug category types to their formatted debug string values.`EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the game object this debug info belongs to.`Location``FVector`World location of the game object used for debug overlay positioning. |
| --- |
| `DebugStringMap``table<EB1DebugGameObject, string>`Map of debug category types to their formatted debug string values.`EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the game object this debug info belongs to.`Location``FVector`World location of the game object used for debug overlay positioning. |
| `EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the game object this debug info belongs to.`Location``FVector`World location of the game object used for debug overlay positioning. |
| `Location``FVector`World location of the game object used for debug overlay positioning. |
