---
document_id: "f6b00f6d2a012fc02ca2595fba6fde9f8c7830e51a42180b648debca1f55643a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2timelinemanager"
title: "FB2TimelineManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:45:01+00:00"
content_sha256: "92436c5c11c4aefb4c93f4257af1ef41edb0d03f9bffa48895152914d492b207"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2timelinemanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manages timelines (schedule / sequence timelines).

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2TimelineManager')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2TimelineManager')` |
| EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2TimelineManager')` |
| Category`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2TimelineManager')` |
| Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2TimelineManager')` |
| Require`require('Systems.B2TimelineManager')` |

# Properties (4)

| NameTypeDescription`EditModeScheduleStateSnapshot``table<FB1EntityId, EB1ScheduleControlState>``ScheduleIdGenerator``any``bMaintainScheduleWhenNotPlaying``boolean``bTimelineEditMode``boolean` |
| --- |
| `EditModeScheduleStateSnapshot``table<FB1EntityId, EB1ScheduleControlState>``ScheduleIdGenerator``any``bMaintainScheduleWhenNotPlaying``boolean``bTimelineEditMode``boolean` |
| `ScheduleIdGenerator``any``bMaintainScheduleWhenNotPlaying``boolean``bTimelineEditMode``boolean` |
| `bMaintainScheduleWhenNotPlaying``boolean``bTimelineEditMode``boolean` |
| `bTimelineEditMode``boolean` |

# Functions (9)

| FunctionParametersReturnsDescription`GenerateScheduleId``-`[`FB1ScheduleId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1scheduleid)Generates Schedule Id.`GetLastScheduleId``-`[`FB1ScheduleId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1scheduleid)Returns Last Schedule Id.`IsMaintainScheduleWhenNotPlaying``-``boolean`Returns whether Maintain Schedule When Not Playing.`IsTimelineEditMode``-``boolean`Returns whether Timeline Edit Mode.`RefreshChangedScheduleStates``-``-``SetMaintainScheduleWhenNotPlaying`bInValue: `boolean``-`Sets Maintain Schedule When Not Playing.`SetScheduleIdCounterValue`InValue: [`FB1ScheduleId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1scheduleid)`-`Sets Schedule Id Counter Value.`SetTimelineEditMode`bSet: `boolean``-`Sets Timeline Edit Mode.`SnapshotHouseholdScheduleStates`InPossessEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-` |
| --- |
| `GenerateScheduleId``-`[`FB1ScheduleId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1scheduleid)Generates Schedule Id.`GetLastScheduleId``-`[`FB1ScheduleId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1scheduleid)Returns Last Schedule Id.`IsMaintainScheduleWhenNotPlaying``-``boolean`Returns whether Maintain Schedule When Not Playing.`IsTimelineEditMode``-``boolean`Returns whether Timeline Edit Mode.`RefreshChangedScheduleStates``-``-``SetMaintainScheduleWhenNotPlaying`bInValue: `boolean``-`Sets Maintain Schedule When Not Playing.`SetScheduleIdCounterValue`InValue: [`FB1ScheduleId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1scheduleid)`-`Sets Schedule Id Counter Value.`SetTimelineEditMode`bSet: `boolean``-`Sets Timeline Edit Mode.`SnapshotHouseholdScheduleStates`InPossessEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-` |
| `GetLastScheduleId``-`[`FB1ScheduleId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1scheduleid)Returns Last Schedule Id.`IsMaintainScheduleWhenNotPlaying``-``boolean`Returns whether Maintain Schedule When Not Playing.`IsTimelineEditMode``-``boolean`Returns whether Timeline Edit Mode.`RefreshChangedScheduleStates``-``-``SetMaintainScheduleWhenNotPlaying`bInValue: `boolean``-`Sets Maintain Schedule When Not Playing.`SetScheduleIdCounterValue`InValue: [`FB1ScheduleId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1scheduleid)`-`Sets Schedule Id Counter Value.`SetTimelineEditMode`bSet: `boolean``-`Sets Timeline Edit Mode.`SnapshotHouseholdScheduleStates`InPossessEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-` |
| `IsMaintainScheduleWhenNotPlaying``-``boolean`Returns whether Maintain Schedule When Not Playing.`IsTimelineEditMode``-``boolean`Returns whether Timeline Edit Mode.`RefreshChangedScheduleStates``-``-``SetMaintainScheduleWhenNotPlaying`bInValue: `boolean``-`Sets Maintain Schedule When Not Playing.`SetScheduleIdCounterValue`InValue: [`FB1ScheduleId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1scheduleid)`-`Sets Schedule Id Counter Value.`SetTimelineEditMode`bSet: `boolean``-`Sets Timeline Edit Mode.`SnapshotHouseholdScheduleStates`InPossessEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-` |
| `IsTimelineEditMode``-``boolean`Returns whether Timeline Edit Mode.`RefreshChangedScheduleStates``-``-``SetMaintainScheduleWhenNotPlaying`bInValue: `boolean``-`Sets Maintain Schedule When Not Playing.`SetScheduleIdCounterValue`InValue: [`FB1ScheduleId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1scheduleid)`-`Sets Schedule Id Counter Value.`SetTimelineEditMode`bSet: `boolean``-`Sets Timeline Edit Mode.`SnapshotHouseholdScheduleStates`InPossessEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-` |
| `RefreshChangedScheduleStates``-``-``SetMaintainScheduleWhenNotPlaying`bInValue: `boolean``-`Sets Maintain Schedule When Not Playing.`SetScheduleIdCounterValue`InValue: [`FB1ScheduleId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1scheduleid)`-`Sets Schedule Id Counter Value.`SetTimelineEditMode`bSet: `boolean``-`Sets Timeline Edit Mode.`SnapshotHouseholdScheduleStates`InPossessEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-` |
| `SetMaintainScheduleWhenNotPlaying`bInValue: `boolean``-`Sets Maintain Schedule When Not Playing.`SetScheduleIdCounterValue`InValue: [`FB1ScheduleId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1scheduleid)`-`Sets Schedule Id Counter Value.`SetTimelineEditMode`bSet: `boolean``-`Sets Timeline Edit Mode.`SnapshotHouseholdScheduleStates`InPossessEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-` |
| `SetScheduleIdCounterValue`InValue: [`FB1ScheduleId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1scheduleid)`-`Sets Schedule Id Counter Value.`SetTimelineEditMode`bSet: `boolean``-`Sets Timeline Edit Mode.`SnapshotHouseholdScheduleStates`InPossessEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-` |
| `SetTimelineEditMode`bSet: `boolean``-`Sets Timeline Edit Mode.`SnapshotHouseholdScheduleStates`InPossessEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-` |
| `SnapshotHouseholdScheduleStates`InPossessEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-` |

# Override points (3)

Implement these in Lua as `FB2TimelineManager.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_GenerateScheduleId``-`[`FB1ScheduleId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1scheduleid)Generates Schedule Id.`Override_RefreshChangedScheduleStates``-``-``Override_SnapshotHouseholdScheduleStates`InPossessEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-` |
| --- |
| `Override_GenerateScheduleId``-`[`FB1ScheduleId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1scheduleid)Generates Schedule Id.`Override_RefreshChangedScheduleStates``-``-``Override_SnapshotHouseholdScheduleStates`InPossessEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-` |
| `Override_RefreshChangedScheduleStates``-``-``Override_SnapshotHouseholdScheduleStates`InPossessEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-` |
| `Override_SnapshotHouseholdScheduleStates`InPossessEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-` |
