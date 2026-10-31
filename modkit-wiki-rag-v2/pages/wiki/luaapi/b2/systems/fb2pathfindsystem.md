---
document_id: "aac7c4cfea1c6f72444aa361726a44e468601d5e6339c38a3a6c49c6d27d3b9e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2pathfindsystem"
title: "FB2PathFindSystem"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:59+00:00"
content_sha256: "8a0a7bc11535535d57a98ed6138f010fe8fa24938f2c1098cc4f7aa2dc667648"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2pathfindsystem"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- facade class. (concatenate multiple navigation implmentation.)

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2PathFindSystem')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2PathFindSystem')` |
| EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2PathFindSystem')` |
| Category`systems`Extends`FB2Subsystem`Require`require('Systems.FB2PathFindSystem')` |
| Extends`FB2Subsystem`Require`require('Systems.FB2PathFindSystem')` |
| Require`require('Systems.FB2PathFindSystem')` |

# Properties (5)

| NameTypeDescription`NavigationData``any``NavigationQueryFilter``any``NavigationSubsystem``any``PathFindConfig``any``QueuedPathFindThreadPool``FQueuedThreadPool` |
| --- |
| `NavigationData``any``NavigationQueryFilter``any``NavigationSubsystem``any``PathFindConfig``any``QueuedPathFindThreadPool``FQueuedThreadPool` |
| `NavigationQueryFilter``any``NavigationSubsystem``any``PathFindConfig``any``QueuedPathFindThreadPool``FQueuedThreadPool` |
| `NavigationSubsystem``any``PathFindConfig``any``QueuedPathFindThreadPool``FQueuedThreadPool` |
| `PathFindConfig``any``QueuedPathFindThreadPool``FQueuedThreadPool` |
| `QueuedPathFindThreadPool``FQueuedThreadPool` |

# Functions (6)

| FunctionParametersReturnsDescription`CheckExistNavPointByLocation`InSource: `FVector``boolean`Checks Exist Nav Point By Location.`CheckExistNavPointWithExtent`InSource: `FVector`, InExtent: `FVector`, OutProjectedLocation: `FVector``boolean`Checks Exist Nav Point With Extent.`FindNavFloor`InSource: `FVector`, InDestination: `FVector`, QueryExtent: `FVector``boolean`Finds and returns Nav Floor.`FindRandomPointInRadius`InRequesterId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InOrigin: `FVector`, InRadius: `number`, OutLocation: `FVector``boolean`Finds and returns Random Point In Radius.`IsExistNavFloor`InLocation: `FVector`, QueryExtent: `FVector``boolean`Returns whether Exist Nav Floor.`IsOnWalkableGrid`Destination: `FVector``boolean`Returns whether On Walkable Grid. |
| --- |
| `CheckExistNavPointByLocation`InSource: `FVector``boolean`Checks Exist Nav Point By Location.`CheckExistNavPointWithExtent`InSource: `FVector`, InExtent: `FVector`, OutProjectedLocation: `FVector``boolean`Checks Exist Nav Point With Extent.`FindNavFloor`InSource: `FVector`, InDestination: `FVector`, QueryExtent: `FVector``boolean`Finds and returns Nav Floor.`FindRandomPointInRadius`InRequesterId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InOrigin: `FVector`, InRadius: `number`, OutLocation: `FVector``boolean`Finds and returns Random Point In Radius.`IsExistNavFloor`InLocation: `FVector`, QueryExtent: `FVector``boolean`Returns whether Exist Nav Floor.`IsOnWalkableGrid`Destination: `FVector``boolean`Returns whether On Walkable Grid. |
| `CheckExistNavPointWithExtent`InSource: `FVector`, InExtent: `FVector`, OutProjectedLocation: `FVector``boolean`Checks Exist Nav Point With Extent.`FindNavFloor`InSource: `FVector`, InDestination: `FVector`, QueryExtent: `FVector``boolean`Finds and returns Nav Floor.`FindRandomPointInRadius`InRequesterId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InOrigin: `FVector`, InRadius: `number`, OutLocation: `FVector``boolean`Finds and returns Random Point In Radius.`IsExistNavFloor`InLocation: `FVector`, QueryExtent: `FVector``boolean`Returns whether Exist Nav Floor.`IsOnWalkableGrid`Destination: `FVector``boolean`Returns whether On Walkable Grid. |
| `FindNavFloor`InSource: `FVector`, InDestination: `FVector`, QueryExtent: `FVector``boolean`Finds and returns Nav Floor.`FindRandomPointInRadius`InRequesterId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InOrigin: `FVector`, InRadius: `number`, OutLocation: `FVector``boolean`Finds and returns Random Point In Radius.`IsExistNavFloor`InLocation: `FVector`, QueryExtent: `FVector``boolean`Returns whether Exist Nav Floor.`IsOnWalkableGrid`Destination: `FVector``boolean`Returns whether On Walkable Grid. |
| `FindRandomPointInRadius`InRequesterId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InOrigin: `FVector`, InRadius: `number`, OutLocation: `FVector``boolean`Finds and returns Random Point In Radius.`IsExistNavFloor`InLocation: `FVector`, QueryExtent: `FVector``boolean`Returns whether Exist Nav Floor.`IsOnWalkableGrid`Destination: `FVector``boolean`Returns whether On Walkable Grid. |
| `IsExistNavFloor`InLocation: `FVector`, QueryExtent: `FVector``boolean`Returns whether Exist Nav Floor.`IsOnWalkableGrid`Destination: `FVector``boolean`Returns whether On Walkable Grid. |
| `IsOnWalkableGrid`Destination: `FVector``boolean`Returns whether On Walkable Grid. |

# Override points (1)

Implement these in Lua as `FB2PathFindSystem.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_FindNavFloor`InSource: `FVector`, OutDestination: `FVector`, QueryExtent: `FVector``boolean`Finds and returns Nav Floor. |
| --- |
| `Override_FindNavFloor`InSource: `FVector`, OutDestination: `FVector`, QueryExtent: `FVector``boolean`Finds and returns Nav Floor. |
