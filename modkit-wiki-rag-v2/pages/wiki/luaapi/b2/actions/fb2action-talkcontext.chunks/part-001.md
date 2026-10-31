---
document_id: "7e5d01797521aa163684e08804d23a6244569e008d2b48526e2d4133a33ec62d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-talkcontext"
title: "FB2Action_TalkContext"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:07+00:00"
content_sha256: "25e2a867d08066c656e3ec2598efd2dbd3d2b6bcfc7676bdd068939337b957b7"
chunk: 1
chunk_count: 2
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-talkcontext"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- TalkContext action. Override the OnPlay/OnFinish/OnPaused/OnCanceled/OnTick timing hooks in Lua.

# Metadata

| FieldValueKind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_TalkContext')` |
| --- |
| Kind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_TalkContext')` |
| EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_TalkContext')` |
| Category`actions`Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_TalkContext')` |
| Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_TalkContext')` |
| Require`require('Actions.B2Action_TalkContext')` |

# Properties (8)

| NameTypeDescription`CurrentMontageTimeOut``number`Elapsed time accumulator counting toward OverridedMontageTimeOut`HiddenGrabObject``boolean`Whether the grabbed object should be hidden while talking (from the coop talk action context)`LookAtTargetCharacter`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Target character entity id this character should look at while talking, if set (from the coop talk action context)`OverridedMontageTimeOut``number`Forced montage duration (seconds) to wait when bOverridedMontagePlayTime is set`TalkFinishScriptIds``string[]`Script ids run once when the talk action finishes (from the coop talk action context)`TalkStartScriptIds``string[]`Script ids run once when the talk action starts (from the coop talk action context)`bNotPlayingAnim``boolean`Whether this talk is voice-only, with animation driven externally by the speaker's notify, skipping this action's own PlayAnim setup`bOverridedMontagePlayTime``boolean`Whether montage play time is overridden by a fixed forced duration instead of the natural animation length |
| --- |
| `CurrentMontageTimeOut``number`Elapsed time accumulator counting toward OverridedMontageTimeOut`HiddenGrabObject``boolean`Whether the grabbed object should be hidden while talking (from the coop talk action context)`LookAtTargetCharacter`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Target character entity id this character should look at while talking, if set (from the coop talk action context)`OverridedMontageTimeOut``number`Forced montage duration (seconds) to wait when bOverridedMontagePlayTime is set`TalkFinishScriptIds``string[]`Script ids run once when the talk action finishes (from the coop talk action context)`TalkStartScriptIds``string[]`Script ids run once when the talk action starts (from the coop talk action context)`bNotPlayingAnim``boolean`Whether this talk is voice-only, with animation driven externally by the speaker's notify, skipping this action's own PlayAnim setup`bOverridedMontagePlayTime``boolean`Whether montage play time is overridden by a fixed forced duration instead of the natural animation length |
| `HiddenGrabObject``boolean`Whether the grabbed object should be hidden while talking (from the coop talk action context)`LookAtTargetCharacter`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Target character entity id this character should look at while talking, if set (from the coop talk action context)`OverridedMontageTimeOut``number`Forced montage duration (seconds) to wait when bOverridedMontagePlayTime is set`TalkFinishScriptIds``string[]`Script ids run once when the talk action finishes (from the coop talk action context)`TalkStartScriptIds``string[]`Script ids run once when the talk action starts (from the coop talk action context)`bNotPlayingAnim``boolean`Whether this talk is voice-only, with animation driven externally by the speaker's notify, skipping this action's own PlayAnim setup`bOverridedMontagePlayTime``boolean`Whether montage play time is overridden by a fixed forced duration instead of the natural animation length |
| `LookAtTargetCharacter`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Target character entity id this character should look at while talking, if set (from the coop talk action context)`OverridedMontageTimeOut``number`Forced montage duration (seconds) to wait when bOverridedMontagePlayTime is set`TalkFinishScriptIds``string[]`Script ids run once when the talk action finishes (from the coop talk action context)`TalkStartScriptIds``string[]`Script ids run once when the talk action starts (from the coop talk action context)`bNotPlayingAnim``boolean`Whether this talk is voice-only, with animation driven externally by the speaker's notify, skipping this action's own PlayAnim setup`bOverridedMontagePlayTime``boolean`Whether montage play time is overridden by a fixed forced duration instead of the natural animation length |
| `OverridedMontageTimeOut``number`Forced montage duration (seconds) to wait when bOverridedMontagePlayTime is set`TalkFinishScriptIds``string[]`Script ids run once when the talk action finishes (from the coop talk action context)`TalkStartScriptIds``string[]`Script ids run once when the talk action starts (from the coop talk action context)`bNotPlayingAnim``boolean`Whether this talk is voice-only, with animation driven externally by the speaker's notify, skipping this action's own PlayAnim setup`bOverridedMontagePlayTime``boolean`Whether montage play time is overridden by a fixed forced duration instead of the natural animation length |
| `TalkFinishScriptIds``string[]`Script ids run once when the talk action finishes (from the coop talk action context)`TalkStartScriptIds``string[]`Script ids run once when the talk action starts (from the coop talk action context)`bNotPlayingAnim``boolean`Whether this talk is voice-only, with animation driven externally by the speaker's notify, skipping this action's own PlayAnim setup`bOverridedMontagePlayTime``boolean`Whether montage play time is overridden by a fixed forced duration instead of the natural animation length |
| `TalkStartScriptIds``string[]`Script ids run once when the talk action starts (from the coop talk action context)`bNotPlayingAnim``boolean`Whether this talk is voice-only, with animation driven externally by the speaker's notify, skipping this action's own PlayAnim setup`bOverridedMontagePlayTime``boolean`Whether montage play time is overridden by a fixed forced duration instead of the natural animation length |
| `bNotPlayingAnim``boolean`Whether this talk is voice-only, with animation driven externally by the speaker's notify, skipping this action's own PlayAnim setup`bOverridedMontagePlayTime``boolean`Whether montage play time is overridden by a fixed forced duration instead of the natural animation length |
| `bOverridedMontagePlayTime``boolean`Whether montage play time is overridden by a fixed forced duration instead of the natural animation length |

# Functions (5)

| FunctionParametersReturnsDescription`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| --- |
| `OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |

# Override points (5)

Implement these in Lua as `FB2Action_TalkContext.Override_Name = function(...) end`.
