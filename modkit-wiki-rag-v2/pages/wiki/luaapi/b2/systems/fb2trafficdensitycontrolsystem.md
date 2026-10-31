---
document_id: "5e1ae4aa5bc91d8d86bcd0709e42edb4a136a430a8191248880eec9020379b67"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2trafficdensitycontrolsystem"
title: "FB2TrafficDensityControlSystem"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:45:01+00:00"
content_sha256: "aecc504124245ba3008cd05a473f0ef74c4853e7bcea94f7ad2c26cce2ed7bbf"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2trafficdensitycontrolsystem"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Traffic density control system.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2TrafficDensityControlSystem')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2TrafficDensityControlSystem')` |
| EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2TrafficDensityControlSystem')` |
| Category`systems`Extends`FB2Subsystem`Require`require('Systems.FB2TrafficDensityControlSystem')` |
| Extends`FB2Subsystem`Require`require('Systems.FB2TrafficDensityControlSystem')` |
| Require`require('Systems.FB2TrafficDensityControlSystem')` |

# Properties (2)

| NameTypeDescription`AccumulateTick``number``PendingRemoveVehicles``FB1EntityId[]` |
| --- |
| `AccumulateTick``number``PendingRemoveVehicles``FB1EntityId[]` |
| `PendingRemoveVehicles``FB1EntityId[]` |

# Functions (4)

| FunctionParametersReturnsDescription`AddToRemove`InVehicle: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Adds To Remove.`Instance` *(static)*`-`[`FB2TrafficDensityControlSystem`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2trafficdensitycontrolsystem)`ProcessPendingRemoveVehicles``-``-``Tick`DeltaTime: `number`, CurrentTime: `FDateTime``-` |
| --- |
| `AddToRemove`InVehicle: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Adds To Remove.`Instance` *(static)*`-`[`FB2TrafficDensityControlSystem`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2trafficdensitycontrolsystem)`ProcessPendingRemoveVehicles``-``-``Tick`DeltaTime: `number`, CurrentTime: `FDateTime``-` |
| `Instance` *(static)*`-`[`FB2TrafficDensityControlSystem`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2trafficdensitycontrolsystem)`ProcessPendingRemoveVehicles``-``-``Tick`DeltaTime: `number`, CurrentTime: `FDateTime``-` |
| `ProcessPendingRemoveVehicles``-``-``Tick`DeltaTime: `number`, CurrentTime: `FDateTime``-` |
| `Tick`DeltaTime: `number`, CurrentTime: `FDateTime``-` |

# Override points (4)

Implement these in Lua as `FB2TrafficDensityControlSystem.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_AddToRemove`InVehicle: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Adds To Remove.`Override_CalculateSpawnInterval`TotalCount: `TotalCount`, TotalCapacity: `TotalCapacity``number``Override_ProcessPendingRemoveVehicles``-``-``Override_Tick`DeltaTime: `number`, CurrentTime: `FDateTime``-` |
| --- |
| `Override_AddToRemove`InVehicle: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Adds To Remove.`Override_CalculateSpawnInterval`TotalCount: `TotalCount`, TotalCapacity: `TotalCapacity``number``Override_ProcessPendingRemoveVehicles``-``-``Override_Tick`DeltaTime: `number`, CurrentTime: `FDateTime``-` |
| `Override_CalculateSpawnInterval`TotalCount: `TotalCount`, TotalCapacity: `TotalCapacity``number``Override_ProcessPendingRemoveVehicles``-``-``Override_Tick`DeltaTime: `number`, CurrentTime: `FDateTime``-` |
| `Override_ProcessPendingRemoveVehicles``-``-``Override_Tick`DeltaTime: `number`, CurrentTime: `FDateTime``-` |
| `Override_Tick`DeltaTime: `number`, CurrentTime: `FDateTime``-` |
