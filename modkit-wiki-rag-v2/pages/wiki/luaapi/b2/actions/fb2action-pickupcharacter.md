---
document_id: "581fa3a4c0f72f97377b70bed4da8cef58ab47006d39ba3c9382f8e32520c4e1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-pickupcharacter"
title: "FB2Action_PickUpCharacter"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:04+00:00"
content_sha256: "b7d56548a6e0ffb564a2374b8dd193bb42dae7e0f7b97840fbf91a29536f044c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-pickupcharacter"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- PickUpCharacter action. Override the OnPlay/OnFinish/OnPaused/OnCanceled/OnTick timing hooks in Lua.

# Metadata

| FieldValueKind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_PickUpCharacter')` |
| --- |
| Kind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_PickUpCharacter')` |
| EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_PickUpCharacter')` |
| Category`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_PickUpCharacter')` |
| Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_PickUpCharacter')` |
| Require`require('Actions.B2Action_PickUpCharacter')` |

# Properties (6)

| NameTypeDescription`AnimMontageName``string`Resolved montage asset name used to play/track the pick-up animation`CurrentAnimTime``number`Elapsed time of pick-up anim montage playback (reset to 0 on OnPlay)`GrabId``string`Grab table row id resolved from Action.S1, describing how the target character is carried`GrabLoopAnimId``string`Looping carry animation id from the grab table's LoopAnimId, applied once the character is attached`PickUpAnimId``string`Resolved pick-up montage animation id used to play the carry motion`TotalPlayLength``number`Total play length of pick-up anim montage (from montage table row) |
| --- |
| `AnimMontageName``string`Resolved montage asset name used to play/track the pick-up animation`CurrentAnimTime``number`Elapsed time of pick-up anim montage playback (reset to 0 on OnPlay)`GrabId``string`Grab table row id resolved from Action.S1, describing how the target character is carried`GrabLoopAnimId``string`Looping carry animation id from the grab table's LoopAnimId, applied once the character is attached`PickUpAnimId``string`Resolved pick-up montage animation id used to play the carry motion`TotalPlayLength``number`Total play length of pick-up anim montage (from montage table row) |
| `CurrentAnimTime``number`Elapsed time of pick-up anim montage playback (reset to 0 on OnPlay)`GrabId``string`Grab table row id resolved from Action.S1, describing how the target character is carried`GrabLoopAnimId``string`Looping carry animation id from the grab table's LoopAnimId, applied once the character is attached`PickUpAnimId``string`Resolved pick-up montage animation id used to play the carry motion`TotalPlayLength``number`Total play length of pick-up anim montage (from montage table row) |
| `GrabId``string`Grab table row id resolved from Action.S1, describing how the target character is carried`GrabLoopAnimId``string`Looping carry animation id from the grab table's LoopAnimId, applied once the character is attached`PickUpAnimId``string`Resolved pick-up montage animation id used to play the carry motion`TotalPlayLength``number`Total play length of pick-up anim montage (from montage table row) |
| `GrabLoopAnimId``string`Looping carry animation id from the grab table's LoopAnimId, applied once the character is attached`PickUpAnimId``string`Resolved pick-up montage animation id used to play the carry motion`TotalPlayLength``number`Total play length of pick-up anim montage (from montage table row) |
| `PickUpAnimId``string`Resolved pick-up montage animation id used to play the carry motion`TotalPlayLength``number`Total play length of pick-up anim montage (from montage table row) |
| `TotalPlayLength``number`Total play length of pick-up anim montage (from montage table row) |

# Functions (5)

| FunctionParametersReturnsDescription`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| --- |
| `OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |

# Override points (5)

Implement these in Lua as `FB2Action_PickUpCharacter.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| --- |
| `Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
