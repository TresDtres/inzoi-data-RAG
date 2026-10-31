---
document_id: "41f557bbf7cd7df2df8950f87c393d81870fd356542b0a4ccf466e367b2aa123"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-continuecrafting"
title: "FB2Action_ContinueCrafting"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:01+00:00"
content_sha256: "f3992ac6e25a6726c7cedb17e9b9d8a241ad0fa2102b6438a90c68e9d7ee0cbe"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-continuecrafting"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- ContinueCrafting action. Override the OnPlay/OnFinish/OnPaused/OnCanceled/OnTick timing hooks in Lua.

# Metadata

| FieldValueKind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_ContinueCrafting')` |
| --- |
| Kind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_ContinueCrafting')` |
| EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_ContinueCrafting')` |
| Category`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_ContinueCrafting')` |
| Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_ContinueCrafting')` |
| Require`require('Actions.B2Action_ContinueCrafting')` |

# Properties (3)

| NameTypeDescription`ContinueCraftingMethod`[`EB2ContinueCraftingMethod`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2continuecraftingmethod)how CraftObjectEntityId is resolved - directly from the target entity, or via a named slot on the target`CraftObjectEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)entity id of the craft object being resumed, resolved by FindCraftObject()`CraftingSlotName``string`name of the slot holding the craft object to continue, used when ContinueCraftingMethod is CraftingSlot |
| --- |
| `ContinueCraftingMethod`[`EB2ContinueCraftingMethod`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2continuecraftingmethod)how CraftObjectEntityId is resolved - directly from the target entity, or via a named slot on the target`CraftObjectEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)entity id of the craft object being resumed, resolved by FindCraftObject()`CraftingSlotName``string`name of the slot holding the craft object to continue, used when ContinueCraftingMethod is CraftingSlot |
| `CraftObjectEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)entity id of the craft object being resumed, resolved by FindCraftObject()`CraftingSlotName``string`name of the slot holding the craft object to continue, used when ContinueCraftingMethod is CraftingSlot |
| `CraftingSlotName``string`name of the slot holding the craft object to continue, used when ContinueCraftingMethod is CraftingSlot |

# Functions (6)

| FunctionParametersReturnsDescription`GetRequirePostureInfo`OutPostureId: `string`, OutBodyParts: [`EB1AnimBodyParts`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1animbodyparts), OutSlotDirection: [`EB1SlotDirection`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1slotdirection)`boolean`Returns Require Posture Info.`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| --- |
| `GetRequirePostureInfo`OutPostureId: `string`, OutBodyParts: [`EB1AnimBodyParts`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1animbodyparts), OutSlotDirection: [`EB1SlotDirection`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1slotdirection)`boolean`Returns Require Posture Info.`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |

# Override points (5)

Implement these in Lua as `FB2Action_ContinueCrafting.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| --- |
| `Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
