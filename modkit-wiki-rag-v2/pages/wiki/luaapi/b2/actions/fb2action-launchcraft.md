---
document_id: "29d59d336dc0feea7a7894b816c1b75f9c815c8dfc796c5b62c73296c139882c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-launchcraft"
title: "FB2Action_LaunchCraft"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:04+00:00"
content_sha256: "0c2425f3e5bd063148d98da499447d34a12b5f518ef5799504e6d3f5b7060603"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-launchcraft"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- LaunchCraft action. Override the OnPlay/OnFinish/OnPaused/OnCanceled/OnTick timing hooks in Lua.

# Metadata

| FieldValueKind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_LaunchCraft')` |
| --- |
| Kind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_LaunchCraft')` |
| EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_LaunchCraft')` |
| Category`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_LaunchCraft')` |
| Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_LaunchCraft')` |
| Require`require('Actions.B2Action_LaunchCraft')` |

# Properties (3)

| NameTypeDescription`CraftingId``string`Crafting category id (from Action.S1), used to look up available recipes and drive the crafting UI/auto-start`CraftingPolicy`[`EB1CraftingPolicyType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1craftingpolicytype)Crafting policy (from Action.S2), forwarded to the crafting UI packet and auto-craft calls`bIsCraftingUIClosed``boolean`Whether the crafting UI has been closed (or auto-craft already started), letting OnTick finish the action |
| --- |
| `CraftingId``string`Crafting category id (from Action.S1), used to look up available recipes and drive the crafting UI/auto-start`CraftingPolicy`[`EB1CraftingPolicyType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1craftingpolicytype)Crafting policy (from Action.S2), forwarded to the crafting UI packet and auto-craft calls`bIsCraftingUIClosed``boolean`Whether the crafting UI has been closed (or auto-craft already started), letting OnTick finish the action |
| `CraftingPolicy`[`EB1CraftingPolicyType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1craftingpolicytype)Crafting policy (from Action.S2), forwarded to the crafting UI packet and auto-craft calls`bIsCraftingUIClosed``boolean`Whether the crafting UI has been closed (or auto-craft already started), letting OnTick finish the action |
| `bIsCraftingUIClosed``boolean`Whether the crafting UI has been closed (or auto-craft already started), letting OnTick finish the action |

# Functions (6)

| FunctionParametersReturnsDescription`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick.`SetCraftingUIClosed``-``-`Sets Crafting UIClosed. |
| --- |
| `OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick.`SetCraftingUIClosed``-``-`Sets Crafting UIClosed. |
| `OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick.`SetCraftingUIClosed``-``-`Sets Crafting UIClosed. |
| `OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick.`SetCraftingUIClosed``-``-`Sets Crafting UIClosed. |
| `OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick.`SetCraftingUIClosed``-``-`Sets Crafting UIClosed. |
| `OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick.`SetCraftingUIClosed``-``-`Sets Crafting UIClosed. |
| `SetCraftingUIClosed``-``-`Sets Crafting UIClosed. |

# Override points (5)

Implement these in Lua as `FB2Action_LaunchCraft.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| --- |
| `Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
