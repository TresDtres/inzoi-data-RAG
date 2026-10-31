---
document_id: "1db2228e8d7796b5d4de318cc4401a07c68e6fe0a5876c1baaa5bab4ff89d6a0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2sootobject"
title: "FB2SootObject"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:47+00:00"
content_sha256: "f7bbbc0b769f4ec51610a773df47dea2c89137c8f1853fb36770b52ed79d68cd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/structs/fb2sootobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- No description available.

# Metadata

| FieldValueKind`struct`EnvironmentB2 - SimulationCategory`structs`Extends[`FB2GameObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2gameobject)Require`require('Objects.B2SootObject')` |
| --- |
| Kind`struct`EnvironmentB2 - SimulationCategory`structs`Extends[`FB2GameObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2gameobject)Require`require('Objects.B2SootObject')` |
| EnvironmentB2 - SimulationCategory`structs`Extends[`FB2GameObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2gameobject)Require`require('Objects.B2SootObject')` |
| Category`structs`Extends[`FB2GameObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2gameobject)Require`require('Objects.B2SootObject')` |
| Extends[`FB2GameObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2gameobject)Require`require('Objects.B2SootObject')` |
| Require`require('Objects.B2SootObject')` |

# Properties (2)

| NameTypeDescription`PlacementFlag`[`EB1PlacementFlag`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1placementflag)`bNeedDelayDecal``boolean` |
| --- |
| `PlacementFlag`[`EB1PlacementFlag`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1placementflag)`bNeedDelayDecal``boolean` |
| `bNeedDelayDecal``boolean` |

# Functions (4)

| FunctionParametersReturnsDescription`GetPlacementFlag``-`[`EB1PlacementFlag`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1placementflag)Returns Placement Flag.`IsValidOwnership`InOwnershipType: [`EB1OwnershipType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1ownershiptype), InOwnerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Returns whether Valid Ownership.`SendShowDecal``-``-`Sends Show Decal.`SetPlacementFlag`InFlag: [`EB1PlacementFlag`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1placementflag)`-`Sets Placement Flag. |
| --- |
| `GetPlacementFlag``-`[`EB1PlacementFlag`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1placementflag)Returns Placement Flag.`IsValidOwnership`InOwnershipType: [`EB1OwnershipType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1ownershiptype), InOwnerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Returns whether Valid Ownership.`SendShowDecal``-``-`Sends Show Decal.`SetPlacementFlag`InFlag: [`EB1PlacementFlag`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1placementflag)`-`Sets Placement Flag. |
| `IsValidOwnership`InOwnershipType: [`EB1OwnershipType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1ownershiptype), InOwnerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Returns whether Valid Ownership.`SendShowDecal``-``-`Sends Show Decal.`SetPlacementFlag`InFlag: [`EB1PlacementFlag`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1placementflag)`-`Sets Placement Flag. |
| `SendShowDecal``-``-`Sends Show Decal.`SetPlacementFlag`InFlag: [`EB1PlacementFlag`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1placementflag)`-`Sets Placement Flag. |
| `SetPlacementFlag`InFlag: [`EB1PlacementFlag`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1placementflag)`-`Sets Placement Flag. |

# Override points (1)

Implement these in Lua as `FB2SootObject.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_SendShowDecal``-``-`Sends Show Decal. |
| --- |
| `Override_SendShowDecal``-``-`Sends Show Decal. |
