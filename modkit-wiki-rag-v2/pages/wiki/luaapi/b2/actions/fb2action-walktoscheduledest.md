---
document_id: "f2d73361a94f6e3116a3df8da23dcf9999d7a4c4b94b8eaf9efd2eeae64f1c23"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-walktoscheduledest"
title: "FB2Action_WalkToScheduleDest"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:09+00:00"
content_sha256: "108016938e09a0ace6aaba9cb889bcec50429af41529dacb37a44e538601140e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-walktoscheduledest"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Action that moves to the current CustomSchedule slot's destination (RoomPurpose or GotoOtherSite).

# Metadata

| FieldValueKind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_WalkTo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-walkto)Require`require('Actions.B2Action_WalkToScheduleDest')` |
| --- |
| Kind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_WalkTo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-walkto)Require`require('Actions.B2Action_WalkToScheduleDest')` |
| EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_WalkTo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-walkto)Require`require('Actions.B2Action_WalkToScheduleDest')` |
| Category`actions`Extends[`FB2Action_WalkTo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-walkto)Require`require('Actions.B2Action_WalkToScheduleDest')` |
| Extends[`FB2Action_WalkTo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-walkto)Require`require('Actions.B2Action_WalkToScheduleDest')` |
| Require`require('Actions.B2Action_WalkToScheduleDest')` |

# Properties (2)

| NameTypeDescription`PendingRoomSiteEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Destination site id to arrive at before resuming the pending stage-2 room move`bArrivedSiteNeedRoomMove``boolean`Cross-site two-stage move state. True when the character is outside the destination room's site and fell back to stage 1 (site-to-site move). A one-shot flag to continue the stage-2 move to the room via another RequestPath after arriving at the site. Not snapshotted (transient state); when reset to false on save/restore, it ends normally at the site arrival point (the room move can be redone by re-clicking). |
| --- |
| `PendingRoomSiteEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Destination site id to arrive at before resuming the pending stage-2 room move`bArrivedSiteNeedRoomMove``boolean`Cross-site two-stage move state. True when the character is outside the destination room's site and fell back to stage 1 (site-to-site move). A one-shot flag to continue the stage-2 move to the room via another RequestPath after arriving at the site. Not snapshotted (transient state); when reset to false on save/restore, it ends normally at the site arrival point (the room move can be redone by re-clicking). |
| `bArrivedSiteNeedRoomMove``boolean`Cross-site two-stage move state. True when the character is outside the destination room's site and fell back to stage 1 (site-to-site move). A one-shot flag to continue the stage-2 move to the room via another RequestPath after arriving at the site. Not snapshotted (transient state); when reset to false on save/restore, it ends normally at the site arrival point (the room move can be redone by re-clicking). |

# Functions (4)

| FunctionParametersReturnsDescription`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| --- |
| `OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPaused``-``-`Callback invoked on Paused.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |

# Override points (4)

Implement these in Lua as `FB2Action_WalkToScheduleDest.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| --- |
| `Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
