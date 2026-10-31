---
document_id: "8ddf5d582a83a500f39bc037601fc3be0128c4a172eaeda53f4f1a37cbc82f96"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-progresscrafting"
title: "FB2Action_ProgressCrafting"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:05+00:00"
content_sha256: "4eb87bfa8fd166b4c7630e61dac479a00a9a88812cb453f3c7e53af5f3992e6d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-progresscrafting"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- ProgressCrafting action. Override the OnPlay/OnFinish/OnPaused/OnCanceled/OnTick timing hooks in Lua.

# Metadata

| FieldValueKind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_ProgressCrafting')` |
| --- |
| Kind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_ProgressCrafting')` |
| EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_ProgressCrafting')` |
| Category`actions`Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_ProgressCrafting')` |
| Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_ProgressCrafting')` |
| Require`require('Actions.B2Action_ProgressCrafting')` |

# Properties (5)

| NameTypeDescription`CachedObjectStatComponent``any`Cached stat component of the crafting object, used for repeated progress reads`InitialProgress``number`Progress percent captured at action start/resume, used as the baseline for elapsed time calculations`ObjectEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity id of the crafting object being worked on, fetched from self's CraftingComponent`PrevTotalProgressTime``number`Last known total crafting time, used to detect buff-induced changes that require resyncing progress`bSentCraftingProgressStart``boolean`Whether the freelance creation crafting start info has been sent, gates resend/stop logic |
| --- |
| `CachedObjectStatComponent``any`Cached stat component of the crafting object, used for repeated progress reads`InitialProgress``number`Progress percent captured at action start/resume, used as the baseline for elapsed time calculations`ObjectEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity id of the crafting object being worked on, fetched from self's CraftingComponent`PrevTotalProgressTime``number`Last known total crafting time, used to detect buff-induced changes that require resyncing progress`bSentCraftingProgressStart``boolean`Whether the freelance creation crafting start info has been sent, gates resend/stop logic |
| `InitialProgress``number`Progress percent captured at action start/resume, used as the baseline for elapsed time calculations`ObjectEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity id of the crafting object being worked on, fetched from self's CraftingComponent`PrevTotalProgressTime``number`Last known total crafting time, used to detect buff-induced changes that require resyncing progress`bSentCraftingProgressStart``boolean`Whether the freelance creation crafting start info has been sent, gates resend/stop logic |
| `ObjectEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity id of the crafting object being worked on, fetched from self's CraftingComponent`PrevTotalProgressTime``number`Last known total crafting time, used to detect buff-induced changes that require resyncing progress`bSentCraftingProgressStart``boolean`Whether the freelance creation crafting start info has been sent, gates resend/stop logic |
| `PrevTotalProgressTime``number`Last known total crafting time, used to detect buff-induced changes that require resyncing progress`bSentCraftingProgressStart``boolean`Whether the freelance creation crafting start info has been sent, gates resend/stop logic |
| `bSentCraftingProgressStart``boolean`Whether the freelance creation crafting start info has been sent, gates resend/stop logic |

# Functions (5)

| FunctionParametersReturnsDescription`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| --- |
| `OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |

# Override points (5)

Implement these in Lua as `FB2Action_ProgressCrafting.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| --- |
| `Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
