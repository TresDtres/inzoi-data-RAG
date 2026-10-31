---
document_id: "59a39cd27ec9ff8fabc6c8cb4d5454f3d1357d5dc7695dd8da62a33b931ed5f2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2minimapmanager"
title: "FB2MinimapManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:59+00:00"
content_sha256: "ba78108a6dec4a807774a13f9fa942d79f46b4d3b6216a668d66f83b22173f23"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2minimapmanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manages minimap data.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2MinimapManager')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2MinimapManager')` |
| EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2MinimapManager')` |
| Category`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2MinimapManager')` |
| Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2MinimapManager')` |
| Require`require('Systems.B2MinimapManager')` |

# Properties (4)

| NameTypeDescription`AccumulatedTime``number``PendingMarks``FB1MinimapMarkInfo[]``TrackedEntityIds``FB1EntityId[]``UpdateInterval``number` |
| --- |
| `AccumulatedTime``number``PendingMarks``FB1MinimapMarkInfo[]``TrackedEntityIds``FB1EntityId[]``UpdateInterval``number` |
| `PendingMarks``FB1MinimapMarkInfo[]``TrackedEntityIds``FB1EntityId[]``UpdateInterval``number` |
| `TrackedEntityIds``FB1EntityId[]``UpdateInterval``number` |
| `UpdateInterval``number` |

# Functions (3)

| FunctionParametersReturnsDescription`AddTrackedEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InMarkColorType: [`EB1MinimapMarkColorType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1minimapmarkcolortype)`-`Adds Tracked Entity.`OnChangePossessHouseholdId`InPrevHouseholdId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InNewHouseholdId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Change Possess Household Id.`RemoveTrackedEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Removes Tracked Entity. |
| --- |
| `AddTrackedEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InMarkColorType: [`EB1MinimapMarkColorType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1minimapmarkcolortype)`-`Adds Tracked Entity.`OnChangePossessHouseholdId`InPrevHouseholdId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InNewHouseholdId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Change Possess Household Id.`RemoveTrackedEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Removes Tracked Entity. |
| `OnChangePossessHouseholdId`InPrevHouseholdId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InNewHouseholdId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Change Possess Household Id.`RemoveTrackedEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Removes Tracked Entity. |
| `RemoveTrackedEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Removes Tracked Entity. |

# Override points (3)

Implement these in Lua as `FB2MinimapManager.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_AddTrackedEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InMarkColorType: [`EB1MinimapMarkColorType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1minimapmarkcolortype)`-`Adds Tracked Entity.`Override_OnChangePossessHouseholdId`InPrevHouseholdId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InNewHouseholdId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Change Possess Household Id.`Override_RemoveTrackedEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Removes Tracked Entity. |
| --- |
| `Override_AddTrackedEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InMarkColorType: [`EB1MinimapMarkColorType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1minimapmarkcolortype)`-`Adds Tracked Entity.`Override_OnChangePossessHouseholdId`InPrevHouseholdId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InNewHouseholdId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Change Possess Household Id.`Override_RemoveTrackedEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Removes Tracked Entity. |
| `Override_OnChangePossessHouseholdId`InPrevHouseholdId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InNewHouseholdId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Change Possess Household Id.`Override_RemoveTrackedEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Removes Tracked Entity. |
| `Override_RemoveTrackedEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Removes Tracked Entity. |
