---
document_id: "e916e13d9585d0fe5dc33eb1efd726d7d6a03a5cf1a57acdf420124e9a68fdc7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1minimapmark"
title: "FB1MinimapMark"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:28+00:00"
content_sha256: "ed718ee780b1793d0be8259d361b9ee5797dcb48aedda9df68356ac0d7da4085"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1minimapmark"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Represents a mark (icon) placed on the minimap for a tracked entity. Created and managed by UB1MinimapBaseWidget to display party members, NPCs, or points of interest.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Unique identifier of the entity this mark represents. Entity ID of the tracked entity this minimap mark represents.`MarkColorType`[`EB1MinimapMarkColorType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1minimapmarkcolortype)Color type used to distinguish mark categories (e.g. family, enemy). Color type category used to distinguish different mark types (e.g., family vs. move-together).`MarkWidget``any`Widget instance used to render this mark on the minimap. Widget instance used to display this mark on the minimap. |
| --- |
| `EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Unique identifier of the entity this mark represents. Entity ID of the tracked entity this minimap mark represents.`MarkColorType`[`EB1MinimapMarkColorType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1minimapmarkcolortype)Color type used to distinguish mark categories (e.g. family, enemy). Color type category used to distinguish different mark types (e.g., family vs. move-together).`MarkWidget``any`Widget instance used to render this mark on the minimap. Widget instance used to display this mark on the minimap. |
| `MarkColorType`[`EB1MinimapMarkColorType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1minimapmarkcolortype)Color type used to distinguish mark categories (e.g. family, enemy). Color type category used to distinguish different mark types (e.g., family vs. move-together).`MarkWidget``any`Widget instance used to render this mark on the minimap. Widget instance used to display this mark on the minimap. |
| `MarkWidget``any`Widget instance used to render this mark on the minimap. Widget instance used to display this mark on the minimap. |
