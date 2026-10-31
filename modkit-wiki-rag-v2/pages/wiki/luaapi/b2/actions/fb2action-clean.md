---
document_id: "4e2f4235675b9dea2710769c3cdda0522e58e285eceff14ce146c2ae3260d3ce"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-clean"
title: "FB2Action_Clean"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:01+00:00"
content_sha256: "18a669f22d6ef9769011174204d2e1037c8c449155e56874a4234853f1058a5b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-clean"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Clean action. Override the OnPlay/OnFinish/OnPaused/OnCanceled/OnTick timing hooks in Lua.

# Metadata

| FieldValueKind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_Clean')` |
| --- |
| Kind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_Clean')` |
| EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_Clean')` |
| Category`actions`Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_Clean')` |
| Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_Clean')` |
| Require`require('Actions.B2Action_Clean')` |

# Properties (5)

| NameTypeDescription`AddingDustyValue``number`Dust-value delta (from the clean object's ReduceDustyValue) applied to nearby dusty objects on finish`ChangeNormalStateObjectTag``string`Tag identifying game objects whose state should reset to Normal when cleaned (CleanDusty only)`EffectiveDistance``number`Max distance from the character within which nearby dusty objects are affected on finish`InDoorObjectId``string`Randomly selected indoor clean-target object id, used when there is no explicit interaction target`OutDoorObjectId``string`Randomly selected outdoor clean-target object id, used when there is no explicit interaction target |
| --- |
| `AddingDustyValue``number`Dust-value delta (from the clean object's ReduceDustyValue) applied to nearby dusty objects on finish`ChangeNormalStateObjectTag``string`Tag identifying game objects whose state should reset to Normal when cleaned (CleanDusty only)`EffectiveDistance``number`Max distance from the character within which nearby dusty objects are affected on finish`InDoorObjectId``string`Randomly selected indoor clean-target object id, used when there is no explicit interaction target`OutDoorObjectId``string`Randomly selected outdoor clean-target object id, used when there is no explicit interaction target |
| `ChangeNormalStateObjectTag``string`Tag identifying game objects whose state should reset to Normal when cleaned (CleanDusty only)`EffectiveDistance``number`Max distance from the character within which nearby dusty objects are affected on finish`InDoorObjectId``string`Randomly selected indoor clean-target object id, used when there is no explicit interaction target`OutDoorObjectId``string`Randomly selected outdoor clean-target object id, used when there is no explicit interaction target |
| `EffectiveDistance``number`Max distance from the character within which nearby dusty objects are affected on finish`InDoorObjectId``string`Randomly selected indoor clean-target object id, used when there is no explicit interaction target`OutDoorObjectId``string`Randomly selected outdoor clean-target object id, used when there is no explicit interaction target |
| `InDoorObjectId``string`Randomly selected indoor clean-target object id, used when there is no explicit interaction target`OutDoorObjectId``string`Randomly selected outdoor clean-target object id, used when there is no explicit interaction target |
| `OutDoorObjectId``string`Randomly selected outdoor clean-target object id, used when there is no explicit interaction target |

# Functions (5)

| FunctionParametersReturnsDescription`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| --- |
| `OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |

# Override points (5)

Implement these in Lua as `FB2Action_Clean.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| --- |
| `Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
