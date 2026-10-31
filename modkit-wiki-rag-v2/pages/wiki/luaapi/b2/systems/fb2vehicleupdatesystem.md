---
document_id: "b7e2cd9954d2cde58c037fd35116fcd07a50a9d8ee628d1e44feeb7e0575b730"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2vehicleupdatesystem"
title: "FB2VehicleUpdateSystem"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:45:01+00:00"
content_sha256: "0903307151cf235678753640a91bfe99ae47aaec39973e988ae84e6fd290c7d4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2vehicleupdatesystem"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Calls Entity::Tick directly to run OnTick -> all Component::Tick -> OnPostTick. Applies a distance-based interval.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2VehicleUpdateSystem')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2VehicleUpdateSystem')` |
| EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2VehicleUpdateSystem')` |
| Category`systems`Extends`FB2Subsystem`Require`require('Systems.FB2VehicleUpdateSystem')` |
| Extends`FB2Subsystem`Require`require('Systems.FB2VehicleUpdateSystem')` |
| Require`require('Systems.FB2VehicleUpdateSystem')` |

# Properties (8)

| NameTypeDescription`CurrentTime_Cached``number``LastCleanupTime``number``PendingRegistrations``any[]``PendingUnregistrations``FB1EntityId[]``RegisteredVehicles``FB2VehicleUpdateEntry[]``UpdatedVehicles``FB2Vehicle[]``VehicleIndexMap``table<FB1EntityId, integer>``bIsProcessingTick``boolean`Prevents array modification during Tick processing. |
| --- |
| `CurrentTime_Cached``number``LastCleanupTime``number``PendingRegistrations``any[]``PendingUnregistrations``FB1EntityId[]``RegisteredVehicles``FB2VehicleUpdateEntry[]``UpdatedVehicles``FB2Vehicle[]``VehicleIndexMap``table<FB1EntityId, integer>``bIsProcessingTick``boolean`Prevents array modification during Tick processing. |
| `LastCleanupTime``number``PendingRegistrations``any[]``PendingUnregistrations``FB1EntityId[]``RegisteredVehicles``FB2VehicleUpdateEntry[]``UpdatedVehicles``FB2Vehicle[]``VehicleIndexMap``table<FB1EntityId, integer>``bIsProcessingTick``boolean`Prevents array modification during Tick processing. |
| `PendingRegistrations``any[]``PendingUnregistrations``FB1EntityId[]``RegisteredVehicles``FB2VehicleUpdateEntry[]``UpdatedVehicles``FB2Vehicle[]``VehicleIndexMap``table<FB1EntityId, integer>``bIsProcessingTick``boolean`Prevents array modification during Tick processing. |
| `PendingUnregistrations``FB1EntityId[]``RegisteredVehicles``FB2VehicleUpdateEntry[]``UpdatedVehicles``FB2Vehicle[]``VehicleIndexMap``table<FB1EntityId, integer>``bIsProcessingTick``boolean`Prevents array modification during Tick processing. |
| `RegisteredVehicles``FB2VehicleUpdateEntry[]``UpdatedVehicles``FB2Vehicle[]``VehicleIndexMap``table<FB1EntityId, integer>``bIsProcessingTick``boolean`Prevents array modification during Tick processing. |
| `UpdatedVehicles``FB2Vehicle[]``VehicleIndexMap``table<FB1EntityId, integer>``bIsProcessingTick``boolean`Prevents array modification during Tick processing. |
| `VehicleIndexMap``table<FB1EntityId, integer>``bIsProcessingTick``boolean`Prevents array modification during Tick processing. |
| `bIsProcessingTick``boolean`Prevents array modification during Tick processing. |

# Functions (3)

| FunctionParametersReturnsDescription`IsRegistered`EntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Returns whether Registered.`Tick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number`, TickScale: `number``-`Called after SpreadOut and before the ComponentScheduler.`UnregisterVehicle`EntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Vehicle. |
| --- |
| `IsRegistered`EntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Returns whether Registered.`Tick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number`, TickScale: `number``-`Called after SpreadOut and before the ComponentScheduler.`UnregisterVehicle`EntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Vehicle. |
| `Tick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number`, TickScale: `number``-`Called after SpreadOut and before the ComponentScheduler.`UnregisterVehicle`EntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Vehicle. |
| `UnregisterVehicle`EntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Vehicle. |

# Override points (2)

Implement these in Lua as `FB2VehicleUpdateSystem.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_Tick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number`, TickScale: `number``-`Called after SpreadOut and before the ComponentScheduler.`Override_UnregisterVehicle`EntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Vehicle. |
| --- |
| `Override_Tick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number`, TickScale: `number``-`Called after SpreadOut and before the ComponentScheduler.`Override_UnregisterVehicle`EntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Vehicle. |
| `Override_UnregisterVehicle`EntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Vehicle. |
