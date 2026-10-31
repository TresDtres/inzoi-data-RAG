---
document_id: "745ddad520d86fded1f745d5565257fc43b469794957feaba8ce879236b1fcdc"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-spawnvehicle"
title: "FB2Action_SpawnVehicle"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:07+00:00"
content_sha256: "6d85e198d35e435b63a217806e0f46e0a59aa3718c391412c44628ce15217490"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-spawnvehicle"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- SpawnVehicle action. Override the OnPlay/OnFinish/OnPaused/OnCanceled/OnTick timing hooks in Lua.

# Metadata

| FieldValueKind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_SpawnVehicle')` |
| --- |
| Kind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_SpawnVehicle')` |
| EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_SpawnVehicle')` |
| Category`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_SpawnVehicle')` |
| Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_SpawnVehicle')` |
| Require`require('Actions.B2Action_SpawnVehicle')` |

# Properties (4)

| NameTypeDescription`NavPathRetryCount``integer`B2PathFindSystem::AsyncQueryPath has no retry-count parameter at all, and this class's path-find failure handler calls TryFinish immediately with no retry loop (checked sibling B2Action_SpawnVehicleAtGarage.h too - also unused there)`SpawnLocation``FVector`World location resolved for spawning the vehicle (via NavMesh search or city graph point)`SpawnRotation``FRotator`World rotation resolved for spawning the vehicle (via NavMesh search or city graph point)`bAllowSpawnOnNavMesh``boolean`Whether to spawn the vehicle near the character via a NavMesh-based search instead of a city graph road point query |
| --- |
| `NavPathRetryCount``integer`B2PathFindSystem::AsyncQueryPath has no retry-count parameter at all, and this class's path-find failure handler calls TryFinish immediately with no retry loop (checked sibling B2Action_SpawnVehicleAtGarage.h too - also unused there)`SpawnLocation``FVector`World location resolved for spawning the vehicle (via NavMesh search or city graph point)`SpawnRotation``FRotator`World rotation resolved for spawning the vehicle (via NavMesh search or city graph point)`bAllowSpawnOnNavMesh``boolean`Whether to spawn the vehicle near the character via a NavMesh-based search instead of a city graph road point query |
| `SpawnLocation``FVector`World location resolved for spawning the vehicle (via NavMesh search or city graph point)`SpawnRotation``FRotator`World rotation resolved for spawning the vehicle (via NavMesh search or city graph point)`bAllowSpawnOnNavMesh``boolean`Whether to spawn the vehicle near the character via a NavMesh-based search instead of a city graph road point query |
| `SpawnRotation``FRotator`World rotation resolved for spawning the vehicle (via NavMesh search or city graph point)`bAllowSpawnOnNavMesh``boolean`Whether to spawn the vehicle near the character via a NavMesh-based search instead of a city graph road point query |
| `bAllowSpawnOnNavMesh``boolean`Whether to spawn the vehicle near the character via a NavMesh-based search instead of a city graph road point query |

# Functions (5)

| FunctionParametersReturnsDescription`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| --- |
| `OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |

# Override points (5)

Implement these in Lua as `FB2Action_SpawnVehicle.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| --- |
| `Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
