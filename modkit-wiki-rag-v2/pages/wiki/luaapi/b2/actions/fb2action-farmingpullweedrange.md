---
document_id: "b2d706325c4c2c0157889f59dbeac913765aa858a0f8a6b78338f48cf766b427"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-farmingpullweedrange"
title: "FB2Action_FarmingPullWeedRange"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:03+00:00"
content_sha256: "c9c4a413b24611027358b4319fa0af508319586cc8d40667b5142e629d1879f3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-farmingpullweedrange"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- FarmingPullWeedRange action. Override the OnPlay/OnFinish/OnPaused/OnCanceled/OnTick timing hooks in Lua.

# Metadata

| FieldValueKind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_FarmingRangeBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-farmingrangebase)Require`require('Actions.B2Action_FarmingPullWeedRange')` |
| --- |
| Kind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_FarmingRangeBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-farmingrangebase)Require`require('Actions.B2Action_FarmingPullWeedRange')` |
| EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_FarmingRangeBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-farmingrangebase)Require`require('Actions.B2Action_FarmingPullWeedRange')` |
| Category`actions`Extends[`FB2Action_FarmingRangeBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-farmingrangebase)Require`require('Actions.B2Action_FarmingPullWeedRange')` |
| Extends[`FB2Action_FarmingRangeBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-farmingrangebase)Require`require('Actions.B2Action_FarmingPullWeedRange')` |
| Require`require('Actions.B2Action_FarmingPullWeedRange')` |

# Functions (5)

| FunctionParametersReturnsDescription`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| --- |
| `OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |

# Override points (5)

Implement these in Lua as `FB2Action_FarmingPullWeedRange.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| --- |
| `Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
