---
document_id: "3daccd73fbb2aa9770ef820f131029c6d6be4c2a224840bd65739154d6c864da"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-rentalreturn"
title: "FB2Action_RentalReturn"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:06+00:00"
content_sha256: "64ebcc117911fec7028e0854e3a5357e16a86afdbe270d01dbde6b4948ce1f6c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-rentalreturn"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- RentalReturn action. Override the OnPlay/OnFinish/OnPaused/OnCanceled/OnTick timing hooks in Lua.

# Metadata

| FieldValueKind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_RentalReturn')` |
| --- |
| Kind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_RentalReturn')` |
| EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_RentalReturn')` |
| Category`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_RentalReturn')` |
| Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_RentalReturn')` |
| Require`require('Actions.B2Action_RentalReturn')` |

# Functions (5)

| FunctionParametersReturnsDescription`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| --- |
| `OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |

# Override points (5)

Implement these in Lua as `FB2Action_RentalReturn.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| --- |
| `Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
