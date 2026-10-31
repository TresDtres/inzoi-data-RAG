---
document_id: "9f646f16fb634fd2ae0749dc21ce7265ddeefda949acee40454a581cb6e137c5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-coop"
title: "FB2Action_Coop"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:01+00:00"
content_sha256: "e8f8750f72062f157ca3d9c6356720cf5c9f76d6121aa2e8daea08d938552de9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-coop"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Coop action. Override the OnPlay/OnFinish/OnPaused/OnCanceled/OnTick timing hooks in Lua.

# Metadata

| FieldValueKind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_Coop')` |
| --- |
| Kind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_Coop')` |
| EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_Coop')` |
| Category`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_Coop')` |
| Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_Coop')` |
| Require`require('Actions.B2Action_Coop')` |

# Properties (5)

| NameTypeDescription`CoopId``string`coop table row id to start, from InAction.S1 or resolved from the current interaction's coop-start info`CoopType`[`EB1CoopType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1cooptype)type of coop to start, from InAction.S2 or resolved from the current interaction/zoi-group-rotation state`DelayTime``number`Checked the entire Coop scheduler family (B2CoopScheduler_Bargain/Coop/EnterVehicle/HandOver/MoveTogether/Talk/Visit/ZoiGroupMove/Competition/GroupRotation) - DelayTime appears nowhere else in the codebase. Likely a LUAPROPERTY hook for a Lua-side override that's never exercised in current C++ code`InteractionBagId``string`current interaction bag id, cached at OnPlay for use in coop request params`LastCoopResult`[`EB1CoopResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1coopresult)result of the last coop/talk start attempt, used to build the result toast message |
| --- |
| `CoopId``string`coop table row id to start, from InAction.S1 or resolved from the current interaction's coop-start info`CoopType`[`EB1CoopType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1cooptype)type of coop to start, from InAction.S2 or resolved from the current interaction/zoi-group-rotation state`DelayTime``number`Checked the entire Coop scheduler family (B2CoopScheduler_Bargain/Coop/EnterVehicle/HandOver/MoveTogether/Talk/Visit/ZoiGroupMove/Competition/GroupRotation) - DelayTime appears nowhere else in the codebase. Likely a LUAPROPERTY hook for a Lua-side override that's never exercised in current C++ code`InteractionBagId``string`current interaction bag id, cached at OnPlay for use in coop request params`LastCoopResult`[`EB1CoopResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1coopresult)result of the last coop/talk start attempt, used to build the result toast message |
| `CoopType`[`EB1CoopType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1cooptype)type of coop to start, from InAction.S2 or resolved from the current interaction/zoi-group-rotation state`DelayTime``number`Checked the entire Coop scheduler family (B2CoopScheduler_Bargain/Coop/EnterVehicle/HandOver/MoveTogether/Talk/Visit/ZoiGroupMove/Competition/GroupRotation) - DelayTime appears nowhere else in the codebase. Likely a LUAPROPERTY hook for a Lua-side override that's never exercised in current C++ code`InteractionBagId``string`current interaction bag id, cached at OnPlay for use in coop request params`LastCoopResult`[`EB1CoopResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1coopresult)result of the last coop/talk start attempt, used to build the result toast message |
| `DelayTime``number`Checked the entire Coop scheduler family (B2CoopScheduler_Bargain/Coop/EnterVehicle/HandOver/MoveTogether/Talk/Visit/ZoiGroupMove/Competition/GroupRotation) - DelayTime appears nowhere else in the codebase. Likely a LUAPROPERTY hook for a Lua-side override that's never exercised in current C++ code`InteractionBagId``string`current interaction bag id, cached at OnPlay for use in coop request params`LastCoopResult`[`EB1CoopResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1coopresult)result of the last coop/talk start attempt, used to build the result toast message |
| `InteractionBagId``string`current interaction bag id, cached at OnPlay for use in coop request params`LastCoopResult`[`EB1CoopResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1coopresult)result of the last coop/talk start attempt, used to build the result toast message |
| `LastCoopResult`[`EB1CoopResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1coopresult)result of the last coop/talk start attempt, used to build the result toast message |

# Functions (5)

| FunctionParametersReturnsDescription`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| --- |
| `OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |

# Override points (5)

Implement these in Lua as `FB2Action_Coop.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| --- |
| `Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
