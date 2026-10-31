---
document_id: "9ccc3e58f67e0c090488ae7a47619e85897f6d26b1f6d1efbea3f92633124c24"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-waittalksequence"
title: "FB2Action_WaitTalkSequence"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:08+00:00"
content_sha256: "0e4bc4f40279ece39f01ff1917bb42780707107d09c8fdfc95ac1f38fb8d18c2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-waittalksequence"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- WaitTalkSequence action. Override the OnPlay/OnFinish/OnPaused/OnCanceled/OnTick timing hooks in Lua.

# Metadata

| FieldValueKind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_WaitTalkSequence')` |
| --- |
| Kind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_WaitTalkSequence')` |
| EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_WaitTalkSequence')` |
| Category`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_WaitTalkSequence')` |
| Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_WaitTalkSequence')` |
| Require`require('Actions.B2Action_WaitTalkSequence')` |

# Properties (6)

| NameTypeDescription`IsFirstTalk``boolean`Whether this is the character's first talk in the sequence, from Action.S1`PausedOnce``boolean`Whether this action has been paused at least once; disables further pausing eligibility for multi-interaction`ReportedToTalkInstance``boolean`Whether this waiting action has already reported itself to the talk instance, to avoid duplicate reporting`Self``any`Cached self character, used to access TalkComponent/InteractionComponent`StartedTime``FDateTime`Time this wait started, compared against TimeOutDuration each tick`TimeOutDuration``integer`Timeout duration in ticks before waiting for the talk sequence is canceled |
| --- |
| `IsFirstTalk``boolean`Whether this is the character's first talk in the sequence, from Action.S1`PausedOnce``boolean`Whether this action has been paused at least once; disables further pausing eligibility for multi-interaction`ReportedToTalkInstance``boolean`Whether this waiting action has already reported itself to the talk instance, to avoid duplicate reporting`Self``any`Cached self character, used to access TalkComponent/InteractionComponent`StartedTime``FDateTime`Time this wait started, compared against TimeOutDuration each tick`TimeOutDuration``integer`Timeout duration in ticks before waiting for the talk sequence is canceled |
| `PausedOnce``boolean`Whether this action has been paused at least once; disables further pausing eligibility for multi-interaction`ReportedToTalkInstance``boolean`Whether this waiting action has already reported itself to the talk instance, to avoid duplicate reporting`Self``any`Cached self character, used to access TalkComponent/InteractionComponent`StartedTime``FDateTime`Time this wait started, compared against TimeOutDuration each tick`TimeOutDuration``integer`Timeout duration in ticks before waiting for the talk sequence is canceled |
| `ReportedToTalkInstance``boolean`Whether this waiting action has already reported itself to the talk instance, to avoid duplicate reporting`Self``any`Cached self character, used to access TalkComponent/InteractionComponent`StartedTime``FDateTime`Time this wait started, compared against TimeOutDuration each tick`TimeOutDuration``integer`Timeout duration in ticks before waiting for the talk sequence is canceled |
| `Self``any`Cached self character, used to access TalkComponent/InteractionComponent`StartedTime``FDateTime`Time this wait started, compared against TimeOutDuration each tick`TimeOutDuration``integer`Timeout duration in ticks before waiting for the talk sequence is canceled |
| `StartedTime``FDateTime`Time this wait started, compared against TimeOutDuration each tick`TimeOutDuration``integer`Timeout duration in ticks before waiting for the talk sequence is canceled |
| `TimeOutDuration``integer`Timeout duration in ticks before waiting for the talk sequence is canceled |

# Functions (5)

| FunctionParametersReturnsDescription`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| --- |
| `OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |

# Override points (5)

Implement these in Lua as `FB2Action_WaitTalkSequence.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| --- |
| `Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
