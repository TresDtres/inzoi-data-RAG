---
document_id: "3ef41c78dc67a77728ee93523950a9a10fde3ba8be268c488dc5ad8689a5eaa8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2animationupdatesystem"
title: "FB2AnimationUpdateSystem"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:56+00:00"
content_sha256: "827a012a833d258a69da2dd0ead87f03fcd59c392932e40d3ae84564d106b58b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2animationupdatesystem"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Registers per Entity and processes all of an Entity's AnimInstances sequentially. Same pattern as AuraSystem (FB1EntityId + TStructPtr). Renamed from FB2AnimNotifySchedulerSystem to FB2AnimationUpdateSystem.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2AnimationUpdateSystem')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2AnimationUpdateSystem')` |
| EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2AnimationUpdateSystem')` |
| Category`systems`Extends`FB2Subsystem`Require`require('Systems.FB2AnimationUpdateSystem')` |
| Extends`FB2Subsystem`Require`require('Systems.FB2AnimationUpdateSystem')` |
| Require`require('Systems.FB2AnimationUpdateSystem')` |

# Properties (6)

| NameTypeDescription`CurrentGameTime``number``EntityIndexMap``table<FB1EntityId, integer>``LastCleanupTime``number``PendingUnregistrations``FB1EntityId[]``RegisteredEntities``FB2AnimUpdateEntry[]``bIsProcessingTick``boolean`Prevents array modification during Tick processing. Prevents an OOB crash where RegisteredEntities is modified on the ProcessAnimNotifyEventTick -> RunScript -> Entity::Destroy -> UnregisterEntity path. |
| --- |
| `CurrentGameTime``number``EntityIndexMap``table<FB1EntityId, integer>``LastCleanupTime``number``PendingUnregistrations``FB1EntityId[]``RegisteredEntities``FB2AnimUpdateEntry[]``bIsProcessingTick``boolean`Prevents array modification during Tick processing. Prevents an OOB crash where RegisteredEntities is modified on the ProcessAnimNotifyEventTick -> RunScript -> Entity::Destroy -> UnregisterEntity path. |
| `EntityIndexMap``table<FB1EntityId, integer>``LastCleanupTime``number``PendingUnregistrations``FB1EntityId[]``RegisteredEntities``FB2AnimUpdateEntry[]``bIsProcessingTick``boolean`Prevents array modification during Tick processing. Prevents an OOB crash where RegisteredEntities is modified on the ProcessAnimNotifyEventTick -> RunScript -> Entity::Destroy -> UnregisterEntity path. |
| `LastCleanupTime``number``PendingUnregistrations``FB1EntityId[]``RegisteredEntities``FB2AnimUpdateEntry[]``bIsProcessingTick``boolean`Prevents array modification during Tick processing. Prevents an OOB crash where RegisteredEntities is modified on the ProcessAnimNotifyEventTick -> RunScript -> Entity::Destroy -> UnregisterEntity path. |
| `PendingUnregistrations``FB1EntityId[]``RegisteredEntities``FB2AnimUpdateEntry[]``bIsProcessingTick``boolean`Prevents array modification during Tick processing. Prevents an OOB crash where RegisteredEntities is modified on the ProcessAnimNotifyEventTick -> RunScript -> Entity::Destroy -> UnregisterEntity path. |
| `RegisteredEntities``FB2AnimUpdateEntry[]``bIsProcessingTick``boolean`Prevents array modification during Tick processing. Prevents an OOB crash where RegisteredEntities is modified on the ProcessAnimNotifyEventTick -> RunScript -> Entity::Destroy -> UnregisterEntity path. |
| `bIsProcessingTick``boolean`Prevents array modification during Tick processing. Prevents an OOB crash where RegisteredEntities is modified on the ProcessAnimNotifyEventTick -> RunScript -> Entity::Destroy -> UnregisterEntity path. |

# Functions (6)

| FunctionParametersReturnsDescription`GetCurrentGameTime``-``number`Returns Current Game Time.`GetRegisteredCount``-``integer`Returns Registered Count.`IsRegistered`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Checks whether it is registered.`RegisterEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Registers Entity.`Tick`DeltaTime: `number``-`Called after the Entity Tick.`UnregisterEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Entity. |
| --- |
| `GetCurrentGameTime``-``number`Returns Current Game Time.`GetRegisteredCount``-``integer`Returns Registered Count.`IsRegistered`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Checks whether it is registered.`RegisterEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Registers Entity.`Tick`DeltaTime: `number``-`Called after the Entity Tick.`UnregisterEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Entity. |
| `GetRegisteredCount``-``integer`Returns Registered Count.`IsRegistered`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Checks whether it is registered.`RegisterEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Registers Entity.`Tick`DeltaTime: `number``-`Called after the Entity Tick.`UnregisterEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Entity. |
| `IsRegistered`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Checks whether it is registered.`RegisterEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Registers Entity.`Tick`DeltaTime: `number``-`Called after the Entity Tick.`UnregisterEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Entity. |
| `RegisterEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Registers Entity.`Tick`DeltaTime: `number``-`Called after the Entity Tick.`UnregisterEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Entity. |
| `Tick`DeltaTime: `number``-`Called after the Entity Tick.`UnregisterEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Entity. |
| `UnregisterEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Entity. |

# Override points (3)

Implement these in Lua as `FB2AnimationUpdateSystem.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_RegisterEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Registers Entity.`Override_Tick`DeltaTime: `number``-`Called after the Entity Tick.`Override_UnregisterEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Entity. |
| --- |
| `Override_RegisterEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Registers Entity.`Override_Tick`DeltaTime: `number``-`Called after the Entity Tick.`Override_UnregisterEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Entity. |
| `Override_Tick`DeltaTime: `number``-`Called after the Entity Tick.`Override_UnregisterEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Entity. |
| `Override_UnregisterEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Entity. |
