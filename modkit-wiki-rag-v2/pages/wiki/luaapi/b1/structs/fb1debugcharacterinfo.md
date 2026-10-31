---
document_id: "a85a237f6ffd6ccd8a159048fde39fbc0935643071a585019908d18935c97d77"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1debugcharacterinfo"
title: "FB1DebugCharacterInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:39+00:00"
content_sha256: "dda837bdde2bcdd3cc55c2af3ead7b31bcb5cf019f981337cedb56fc885ed3dc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1debugcharacterinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores debug display information for a single character entity, including location and a map of debug strings per category.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`DebugStringMap``table<EB1DebugCharacter, string>`Map of debug category types to their formatted debug string values.`EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character this debug info belongs to.`Location``FVector`World location of the character used for debug overlay positioning. |
| --- |
| `DebugStringMap``table<EB1DebugCharacter, string>`Map of debug category types to their formatted debug string values.`EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character this debug info belongs to.`Location``FVector`World location of the character used for debug overlay positioning. |
| `EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character this debug info belongs to.`Location``FVector`World location of the character used for debug overlay positioning. |
| `Location``FVector`World location of the character used for debug overlay positioning. |
