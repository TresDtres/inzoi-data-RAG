---
document_id: "c5898743909563d3b049d4ce8323adf60ff7b32100e942146b5115a3e9ae1817"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1ladderobjectsavedata"
title: "FB1LadderObjectSaveData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:15+00:00"
content_sha256: "a8b1e10ecb2dca6371eee8b0a44922dc57126109f8da6340036904bed2599f59"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1ladderobjectsavedata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that stores save data for a ladder object. Contains physical placement, floor linkage, and neighbor ladder entity references.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (11)

| NameTypeDescription`AttachType``integer`Attachment type (0 = default, see EB1LadderAttach).`AttachedFloor``integer`Floor level this ladder is attached to.`AttachedWall``integer`Wall ID this ladder is attached to.`DownLadderEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the ladder connected below this one.`LadderHeight``number`Height of the ladder in world units.`LinkedFloorLevels``integer[]`List of floor levels this ladder is linked to.`SnapFloorLevel``integer`Floor level index at which this ladder snaps.`SnapPlatformWall``integer`Wall ID of the platform wall this ladder snaps to.`UpLadderEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the ladder connected above this one.`bIsLinkedDownLadder``boolean`Whether this ladder is linked to a lower ladder.`bIsLinkedUpLadder``boolean`Whether this ladder is linked to an upper ladder. |
| --- |
| `AttachType``integer`Attachment type (0 = default, see EB1LadderAttach).`AttachedFloor``integer`Floor level this ladder is attached to.`AttachedWall``integer`Wall ID this ladder is attached to.`DownLadderEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the ladder connected below this one.`LadderHeight``number`Height of the ladder in world units.`LinkedFloorLevels``integer[]`List of floor levels this ladder is linked to.`SnapFloorLevel``integer`Floor level index at which this ladder snaps.`SnapPlatformWall``integer`Wall ID of the platform wall this ladder snaps to.`UpLadderEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the ladder connected above this one.`bIsLinkedDownLadder``boolean`Whether this ladder is linked to a lower ladder.`bIsLinkedUpLadder``boolean`Whether this ladder is linked to an upper ladder. |
| `AttachedFloor``integer`Floor level this ladder is attached to.`AttachedWall``integer`Wall ID this ladder is attached to.`DownLadderEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the ladder connected below this one.`LadderHeight``number`Height of the ladder in world units.`LinkedFloorLevels``integer[]`List of floor levels this ladder is linked to.`SnapFloorLevel``integer`Floor level index at which this ladder snaps.`SnapPlatformWall``integer`Wall ID of the platform wall this ladder snaps to.`UpLadderEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the ladder connected above this one.`bIsLinkedDownLadder``boolean`Whether this ladder is linked to a lower ladder.`bIsLinkedUpLadder``boolean`Whether this ladder is linked to an upper ladder. |
| `AttachedWall``integer`Wall ID this ladder is attached to.`DownLadderEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the ladder connected below this one.`LadderHeight``number`Height of the ladder in world units.`LinkedFloorLevels``integer[]`List of floor levels this ladder is linked to.`SnapFloorLevel``integer`Floor level index at which this ladder snaps.`SnapPlatformWall``integer`Wall ID of the platform wall this ladder snaps to.`UpLadderEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the ladder connected above this one.`bIsLinkedDownLadder``boolean`Whether this ladder is linked to a lower ladder.`bIsLinkedUpLadder``boolean`Whether this ladder is linked to an upper ladder. |
| `DownLadderEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the ladder connected below this one.`LadderHeight``number`Height of the ladder in world units.`LinkedFloorLevels``integer[]`List of floor levels this ladder is linked to.`SnapFloorLevel``integer`Floor level index at which this ladder snaps.`SnapPlatformWall``integer`Wall ID of the platform wall this ladder snaps to.`UpLadderEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the ladder connected above this one.`bIsLinkedDownLadder``boolean`Whether this ladder is linked to a lower ladder.`bIsLinkedUpLadder``boolean`Whether this ladder is linked to an upper ladder. |
| `LadderHeight``number`Height of the ladder in world units.`LinkedFloorLevels``integer[]`List of floor levels this ladder is linked to.`SnapFloorLevel``integer`Floor level index at which this ladder snaps.`SnapPlatformWall``integer`Wall ID of the platform wall this ladder snaps to.`UpLadderEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the ladder connected above this one.`bIsLinkedDownLadder``boolean`Whether this ladder is linked to a lower ladder.`bIsLinkedUpLadder``boolean`Whether this ladder is linked to an upper ladder. |
| `LinkedFloorLevels``integer[]`List of floor levels this ladder is linked to.`SnapFloorLevel``integer`Floor level index at which this ladder snaps.`SnapPlatformWall``integer`Wall ID of the platform wall this ladder snaps to.`UpLadderEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the ladder connected above this one.`bIsLinkedDownLadder``boolean`Whether this ladder is linked to a lower ladder.`bIsLinkedUpLadder``boolean`Whether this ladder is linked to an upper ladder. |
| `SnapFloorLevel``integer`Floor level index at which this ladder snaps.`SnapPlatformWall``integer`Wall ID of the platform wall this ladder snaps to.`UpLadderEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the ladder connected above this one.`bIsLinkedDownLadder``boolean`Whether this ladder is linked to a lower ladder.`bIsLinkedUpLadder``boolean`Whether this ladder is linked to an upper ladder. |
| `SnapPlatformWall``integer`Wall ID of the platform wall this ladder snaps to.`UpLadderEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the ladder connected above this one.`bIsLinkedDownLadder``boolean`Whether this ladder is linked to a lower ladder.`bIsLinkedUpLadder``boolean`Whether this ladder is linked to an upper ladder. |
| `UpLadderEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the ladder connected above this one.`bIsLinkedDownLadder``boolean`Whether this ladder is linked to a lower ladder.`bIsLinkedUpLadder``boolean`Whether this ladder is linked to an upper ladder. |
| `bIsLinkedDownLadder``boolean`Whether this ladder is linked to a lower ladder.`bIsLinkedUpLadder``boolean`Whether this ladder is linked to an upper ladder. |
| `bIsLinkedUpLadder``boolean`Whether this ladder is linked to an upper ladder. |
