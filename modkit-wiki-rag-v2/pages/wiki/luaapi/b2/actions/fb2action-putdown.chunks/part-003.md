---
document_id: "3d888c972b48eb6c70e4945bfec88247af17822b698865a431d9b85a37d9dccb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-putdown"
title: "FB2Action_PutDown"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:05+00:00"
content_sha256: "80f3f22a373812deea96c97dd59205acfc9af6f9a199720da639c0604fbc4aef"
chunk: 3
chunk_count: 3
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-putdown"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

od)How to put down object/character`PutDownRotation``FRotator`World rotation to put down grab entity`SelectedHand`[`EB1HandType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1handtype)Hand with grab entity`TotalPlayLength``number`Total play length of put-down anim montage (from montage table row) |
| `PutDownLocation``FVector`World location to put down grab entity`PutDownMethod`[`EB1PutDownMethod`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1putdownmethod)How to put down object/character`PutDownRotation``FRotator`World rotation to put down grab entity`SelectedHand`[`EB1HandType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1handtype)Hand with grab entity`TotalPlayLength``number`Total play length of put-down anim montage (from montage table row) |
| `PutDownMethod`[`EB1PutDownMethod`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1putdownmethod)How to put down object/character`PutDownRotation``FRotator`World rotation to put down grab entity`SelectedHand`[`EB1HandType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1handtype)Hand with grab entity`TotalPlayLength``number`Total play length of put-down anim montage (from montage table row) |
| `PutDownRotation``FRotator`World rotation to put down grab entity`SelectedHand`[`EB1HandType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1handtype)Hand with grab entity`TotalPlayLength``number`Total play length of put-down anim montage (from montage table row) |
| `SelectedHand`[`EB1HandType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1handtype)Hand with grab entity`TotalPlayLength``number`Total play length of put-down anim montage (from montage table row) |
| `TotalPlayLength``number`Total play length of put-down anim montage (from montage table row) |

# Functions (6)

| FunctionParametersReturnsDescription`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick.`SetPutDownMethod`InMethod: [`EB1PutDownMethod`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1putdownmethod)`-`Sets Put Down Method. |
| --- |
| `OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick.`SetPutDownMethod`InMethod: [`EB1PutDownMethod`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1putdownmethod)`-`Sets Put Down Method. |
| `OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick.`SetPutDownMethod`InMethod: [`EB1PutDownMethod`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1putdownmethod)`-`Sets Put Down Method. |
| `OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick.`SetPutDownMethod`InMethod: [`EB1PutDownMethod`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1putdownmethod)`-`Sets Put Down Method. |
| `OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick.`SetPutDownMethod`InMethod: [`EB1PutDownMethod`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1putdownmethod)`-`Sets Put Down Method. |
| `OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick.`SetPutDownMethod`InMethod: [`EB1PutDownMethod`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1putdownmethod)`-`Sets Put Down Method. |
| `SetPutDownMethod`InMethod: [`EB1PutDownMethod`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1putdownmethod)`-`Sets Put Down Method. |

# Override points (5)

Implement these in Lua as `FB2Action_PutDown.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| --- |
| `Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
