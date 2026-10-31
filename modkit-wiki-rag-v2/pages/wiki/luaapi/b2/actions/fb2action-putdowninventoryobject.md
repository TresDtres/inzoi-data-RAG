---
document_id: "ac030e3a1a970e8feebeacfa669b01c6b86effa6a344044e4727d661571d0e59"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-putdowninventoryobject"
title: "FB2Action_PutDownInventoryObject"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:05+00:00"
content_sha256: "3f5e10401cf4bb57cfc21b5c3a6fb6affdf53a0e7fc4d8f8fb7bf1742bd41716"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-putdowninventoryobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- PutDownInventoryObject action. Override the OnPlay/OnFinish/OnPaused/OnCanceled/OnTick timing hooks in Lua.

# Metadata

| FieldValueKind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_PutDownInventoryObject')` |
| --- |
| Kind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_PutDownInventoryObject')` |
| EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_PutDownInventoryObject')` |
| Category`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_PutDownInventoryObject')` |
| Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_PutDownInventoryObject')` |
| Require`require('Actions.B2Action_PutDownInventoryObject')` |

# Properties (6)

| NameTypeDescription`AnimMontageName``string`Montage name resolved from PutDownAnimId to put down the carried object`CurrentAnimTime``number`Elapsed time of put-down anim montage playback (reset on OnPlay)`FloorPutDownLocation``FVector`Floor location to put down the carried object when there's no target entity, computed via site pathfinding`GrabId``string`FB1GrabTableRow row id for the carried object (hardcoded to Food), used to resolve the put-down animation`PutDownAnimId``string`Anim id used to find the put-down montage for the carried object`TotalPlayLength``number`Total play length of the resolved put-down anim montage (from montage table row) |
| --- |
| `AnimMontageName``string`Montage name resolved from PutDownAnimId to put down the carried object`CurrentAnimTime``number`Elapsed time of put-down anim montage playback (reset on OnPlay)`FloorPutDownLocation``FVector`Floor location to put down the carried object when there's no target entity, computed via site pathfinding`GrabId``string`FB1GrabTableRow row id for the carried object (hardcoded to Food), used to resolve the put-down animation`PutDownAnimId``string`Anim id used to find the put-down montage for the carried object`TotalPlayLength``number`Total play length of the resolved put-down anim montage (from montage table row) |
| `CurrentAnimTime``number`Elapsed time of put-down anim montage playback (reset on OnPlay)`FloorPutDownLocation``FVector`Floor location to put down the carried object when there's no target entity, computed via site pathfinding`GrabId``string`FB1GrabTableRow row id for the carried object (hardcoded to Food), used to resolve the put-down animation`PutDownAnimId``string`Anim id used to find the put-down montage for the carried object`TotalPlayLength``number`Total play length of the resolved put-down anim montage (from montage table row) |
| `FloorPutDownLocation``FVector`Floor location to put down the carried object when there's no target entity, computed via site pathfinding`GrabId``string`FB1GrabTableRow row id for the carried object (hardcoded to Food), used to resolve the put-down animation`PutDownAnimId``string`Anim id used to find the put-down montage for the carried object`TotalPlayLength``number`Total play length of the resolved put-down anim montage (from montage table row) |
| `GrabId``string`FB1GrabTableRow row id for the carried object (hardcoded to Food), used to resolve the put-down animation`PutDownAnimId``string`Anim id used to find the put-down montage for the carried object`TotalPlayLength``number`Total play length of the resolved put-down anim montage (from montage table row) |
| `PutDownAnimId``string`Anim id used to find the put-down montage for the carried object`TotalPlayLength``number`Total play length of the resolved put-down anim montage (from montage table row) |
| `TotalPlayLength``number`Total play length of the resolved put-down anim montage (from montage table row) |

# Functions (5)

| FunctionParametersReturnsDescription`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| --- |
| `OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |

# Override points (5)

Implement these in Lua as `FB2Action_PutDownInventoryObject.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| --- |
| `Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
