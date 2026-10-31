---
document_id: "246de237de15a969b78aae89477a05ea0b360361b28c85ad29eaa6befb7295b2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-farmingplantseedrange"
title: "FB2Action_FarmingPlantSeedRange"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:02+00:00"
content_sha256: "28a7137e44f96d11072045bfcb34dde2c4ee3c9a2865c2051bc3df0b05a4ddc3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-farmingplantseedrange"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- FarmingPlantSeedRange action. Override the OnPlay/OnFinish/OnPaused/OnCanceled/OnTick timing hooks in Lua.

# Metadata

| FieldValueKind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_FarmingRangeBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-farmingrangebase)Require`require('Actions.B2Action_FarmingPlantSeedRange')` |
| --- |
| Kind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_FarmingRangeBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-farmingrangebase)Require`require('Actions.B2Action_FarmingPlantSeedRange')` |
| EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_FarmingRangeBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-farmingrangebase)Require`require('Actions.B2Action_FarmingPlantSeedRange')` |
| Category`actions`Extends[`FB2Action_FarmingRangeBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-farmingrangebase)Require`require('Actions.B2Action_FarmingPlantSeedRange')` |
| Extends[`FB2Action_FarmingRangeBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-farmingrangebase)Require`require('Actions.B2Action_FarmingPlantSeedRange')` |
| Require`require('Actions.B2Action_FarmingPlantSeedRange')` |

# Properties (1)

| NameTypeDescription`ResolvedSeedInfo`[`FB2ResolvedSeedInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2resolvedseedinfo)Seed and crop info resolved from the character's grabbed seed object, used to plant crops and consume seeds on finish |
| --- |
| `ResolvedSeedInfo`[`FB2ResolvedSeedInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2resolvedseedinfo)Seed and crop info resolved from the character's grabbed seed object, used to plant crops and consume seeds on finish |

# Functions (5)

| FunctionParametersReturnsDescription`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| --- |
| `OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |

# Override points (5)

Implement these in Lua as `FB2Action_FarmingPlantSeedRange.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| --- |
| `Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
