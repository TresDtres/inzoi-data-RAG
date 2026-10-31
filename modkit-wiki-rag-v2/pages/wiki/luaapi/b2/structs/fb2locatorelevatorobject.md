---
document_id: "c9cd539f067ce598e6a33529b68ebaac54b46c2839e5f4dbd65ff0e8079207b5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2locatorelevatorobject"
title: "FB2LocatorElevatorObject"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:40+00:00"
content_sha256: "2cdcfa98ffa6ae27aba8ee8ee4aeb2c7532748bee544096b9a4fa4343b67f406"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/structs/fb2locatorelevatorobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- No description available.

# Metadata

| FieldValueKind`struct`EnvironmentB2 - SimulationCategory`structs`Extends[`FB2GameObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2gameobject)Require`require('Objects.B2LocatorElevatorObject')` |
| --- |
| Kind`struct`EnvironmentB2 - SimulationCategory`structs`Extends[`FB2GameObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2gameobject)Require`require('Objects.B2LocatorElevatorObject')` |
| EnvironmentB2 - SimulationCategory`structs`Extends[`FB2GameObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2gameobject)Require`require('Objects.B2LocatorElevatorObject')` |
| Category`structs`Extends[`FB2GameObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2gameobject)Require`require('Objects.B2LocatorElevatorObject')` |
| Extends[`FB2GameObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2gameobject)Require`require('Objects.B2LocatorElevatorObject')` |
| Require`require('Objects.B2LocatorElevatorObject')` |

# Properties (1)

| NameTypeDescription`TeleportLocation``FVector` |
| --- |
| `TeleportLocation``FVector` |

# Functions (5)

| FunctionParametersReturnsDescription`GetTeleportLocation``-``FVector`Returns Teleport Location.`IsNeedSpawnUpdate``-``boolean`Returns whether Need Spawn Update.`IsValidOwnership`InOwnershipType: [`EB1OwnershipType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1ownershiptype), InOwnerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Returns whether Valid Ownership.`OnSpawnedGameObject`InSpawnedTransform: `FTransform``-`Callback invoked on Spawned Game Object.`SetTeleportLocation`InLocation: `FVector``-`Sets Teleport Location. |
| --- |
| `GetTeleportLocation``-``FVector`Returns Teleport Location.`IsNeedSpawnUpdate``-``boolean`Returns whether Need Spawn Update.`IsValidOwnership`InOwnershipType: [`EB1OwnershipType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1ownershiptype), InOwnerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Returns whether Valid Ownership.`OnSpawnedGameObject`InSpawnedTransform: `FTransform``-`Callback invoked on Spawned Game Object.`SetTeleportLocation`InLocation: `FVector``-`Sets Teleport Location. |
| `IsNeedSpawnUpdate``-``boolean`Returns whether Need Spawn Update.`IsValidOwnership`InOwnershipType: [`EB1OwnershipType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1ownershiptype), InOwnerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Returns whether Valid Ownership.`OnSpawnedGameObject`InSpawnedTransform: `FTransform``-`Callback invoked on Spawned Game Object.`SetTeleportLocation`InLocation: `FVector``-`Sets Teleport Location. |
| `IsValidOwnership`InOwnershipType: [`EB1OwnershipType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1ownershiptype), InOwnerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Returns whether Valid Ownership.`OnSpawnedGameObject`InSpawnedTransform: `FTransform``-`Callback invoked on Spawned Game Object.`SetTeleportLocation`InLocation: `FVector``-`Sets Teleport Location. |
| `OnSpawnedGameObject`InSpawnedTransform: `FTransform``-`Callback invoked on Spawned Game Object.`SetTeleportLocation`InLocation: `FVector``-`Sets Teleport Location. |
| `SetTeleportLocation`InLocation: `FVector``-`Sets Teleport Location. |

# Override points (1)

Implement these in Lua as `FB2LocatorElevatorObject.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_OnSpawnedGameObject`InSpawnedTransform: `FTransform``-`Callback invoked on Spawned Game Object. |
| --- |
| `Override_OnSpawnedGameObject`InSpawnedTransform: `FTransform``-`Callback invoked on Spawned Game Object. |
