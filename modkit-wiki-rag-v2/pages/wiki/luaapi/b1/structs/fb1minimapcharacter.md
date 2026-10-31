---
document_id: "d1382386d1bde69128000ef51cc334d6b098e439485c2b18a6db78d625c19801"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1minimapcharacter"
title: "FB1MinimapCharacter"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:27+00:00"
content_sha256: "0e8541757e90e49877883eb1657a3a73ec810294c1fa3ff89c2b0db9d8451dbf"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1minimapcharacter"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Holds a character's position and orientation data for minimap rendering. Created by B2MinimapManager for each tracked entity and delivered to the minimap widget via S_UpdateMinimapCharacterPositions packet.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Unique identifier of the character entity displayed on the minimap. Entity ID of the character tracked on the minimap.`Location``FVector`World-space position (X, Y, Z) of the character. World-space location of the character.`Yaw``number`Character's rotation angle around the Z-axis (degrees), used to display facing direction. Yaw angle (degrees) of the character, used to render the facing direction indicator. |
| --- |
| `EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Unique identifier of the character entity displayed on the minimap. Entity ID of the character tracked on the minimap.`Location``FVector`World-space position (X, Y, Z) of the character. World-space location of the character.`Yaw``number`Character's rotation angle around the Z-axis (degrees), used to display facing direction. Yaw angle (degrees) of the character, used to render the facing direction indicator. |
| `Location``FVector`World-space position (X, Y, Z) of the character. World-space location of the character.`Yaw``number`Character's rotation angle around the Z-axis (degrees), used to display facing direction. Yaw angle (degrees) of the character, used to render the facing direction indicator. |
| `Yaw``number`Character's rotation angle around the Z-axis (degrees), used to display facing direction. Yaw angle (degrees) of the character, used to render the facing direction indicator. |
