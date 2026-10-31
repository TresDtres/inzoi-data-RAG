---
document_id: "bda482b5dd5a0b9fabc04eedcda2c0f64af954de39f3d17413cedf82db21cfa3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-bookread"
title: "FB2Action_BookRead"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:00+00:00"
content_sha256: "1799ce54333083cd587aa22f5db60c41128dd701b6575626a1e17d32b55392f4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-bookread"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- BookRead action. Override the OnPlay/OnFinish/OnPaused/OnCanceled/OnTick timing hooks in Lua.

# Metadata

| FieldValueKind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_BookRead')` |
| --- |
| Kind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_BookRead')` |
| EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_BookRead')` |
| Category`actions`Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_BookRead')` |
| Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_BookRead')` |
| Require`require('Actions.B2Action_BookRead')` |

# Properties (6)

| NameTypeDescription`BookAnimId``string`Book-side animation id (from Action.S2), used to resolve the book object's montage`BookAnimMontageName``string`Resolved montage row id for the book object's animation, used to play the montage`BookDtId``string`Book data table id of the target carriable book, resolved at init and used for all book table lookups`BookReadTickTime``integer`Accumulated elapsed reading time in ticks, compared against the book's TotalReadTime to know when to end the loop`PrevTickTime``integer`Timestamp (game ticks) of the last tick update, used to compute the elapsed-tick delta added to BookReadTickTime`ProgressTime``number`Total time this reading session should take, computed from the book's TotalReadTime and current game time scale |
| --- |
| `BookAnimId``string`Book-side animation id (from Action.S2), used to resolve the book object's montage`BookAnimMontageName``string`Resolved montage row id for the book object's animation, used to play the montage`BookDtId``string`Book data table id of the target carriable book, resolved at init and used for all book table lookups`BookReadTickTime``integer`Accumulated elapsed reading time in ticks, compared against the book's TotalReadTime to know when to end the loop`PrevTickTime``integer`Timestamp (game ticks) of the last tick update, used to compute the elapsed-tick delta added to BookReadTickTime`ProgressTime``number`Total time this reading session should take, computed from the book's TotalReadTime and current game time scale |
| `BookAnimMontageName``string`Resolved montage row id for the book object's animation, used to play the montage`BookDtId``string`Book data table id of the target carriable book, resolved at init and used for all book table lookups`BookReadTickTime``integer`Accumulated elapsed reading time in ticks, compared against the book's TotalReadTime to know when to end the loop`PrevTickTime``integer`Timestamp (game ticks) of the last tick update, used to compute the elapsed-tick delta added to BookReadTickTime`ProgressTime``number`Total time this reading session should take, computed from the book's TotalReadTime and current game time scale |
| `BookDtId``string`Book data table id of the target carriable book, resolved at init and used for all book table lookups`BookReadTickTime``integer`Accumulated elapsed reading time in ticks, compared against the book's TotalReadTime to know when to end the loop`PrevTickTime``integer`Timestamp (game ticks) of the last tick update, used to compute the elapsed-tick delta added to BookReadTickTime`ProgressTime``number`Total time this reading session should take, computed from the book's TotalReadTime and current game time scale |
| `BookReadTickTime``integer`Accumulated elapsed reading time in ticks, compared against the book's TotalReadTime to know when to end the loop`PrevTickTime``integer`Timestamp (game ticks) of the last tick update, used to compute the elapsed-tick delta added to BookReadTickTime`ProgressTime``number`Total time this reading session should take, computed from the book's TotalReadTime and current game time scale |
| `PrevTickTime``integer`Timestamp (game ticks) of the last tick update, used to compute the elapsed-tick delta added to BookReadTickTime`ProgressTime``number`Total time this reading session should take, computed from the book's TotalReadTime and current game time scale |
| `ProgressTime``number`Total time this reading session should take, computed from the book's TotalReadTime and current game time scale |

# Functions (3)

| FunctionParametersReturnsDescription`OnFinish``-``-`Callback invoked on Finish.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| --- |
| `OnFinish``-``-`Callback invoked on Finish.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |

# Override points (3)

Implement these in Lua as `FB2Action_BookRead.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| --- |
| `Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
