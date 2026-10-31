---
document_id: "2f6a1e8eab5456aad5b2fd90f89fac4a65a18aabf1c5af6feb3fd07d93c49876"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-waitforasyncload"
title: "FB2Action_WaitForAsyncLoad"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:08+00:00"
content_sha256: "0da6e51c732bf99379157ca6b7d3d0f102900aaa7c7c5828b20ffcf84ac3066a"
chunk: 1
chunk_count: 2
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-waitforasyncload"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Action automatically added when AsyncLoad is used.

# Metadata

| FieldValueKind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_WaitForAsyncLoad')` |
| --- |
| Kind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_WaitForAsyncLoad')` |
| EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_WaitForAsyncLoad')` |
| Category`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_WaitForAsyncLoad')` |
| Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_WaitForAsyncLoad')` |
| Require`require('Actions.B2Action_WaitForAsyncLoad')` |

# Properties (3)

| NameTypeDescription`AsyncLoadId`[`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid)id of the async load being waited on, set externally via SetAsyncLoadId() and matched in OnFinishAsyncLoad()`CoopSchedulerId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)id of the coop scheduler this wait belongs to, set externally via SetCoopSchedulerId() and used to check/notify the shared coop pending-load state`IsNeedCoopPendingAsyncLoad``boolean`whether the coop scheduler requires waiting for its shared pending-load signal before finishing, computed in InitializeSetting() |
| --- |
| `AsyncLoadId`[`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid)id of the async load being waited on, set externally via SetAsyncLoadId() and matched in OnFinishAsyncLoad()`CoopSchedulerId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)id of the coop scheduler this wait belongs to, set externally via SetCoopSchedulerId() and used to check/notify the shared coop pending-load state`IsNeedCoopPendingAsyncLoad``boolean`whether the coop scheduler requires waiting for its shared pending-load signal before finishing, computed in InitializeSetting() |
| `CoopSchedulerId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)id of the coop scheduler this wait belongs to, set externally via SetCoopSchedulerId() and used to check/notify the shared coop pending-load state`IsNeedCoopPendingAsyncLoad``boolean`whether the coop scheduler requires waiting for its shared pending-load signal before finishing, computed in InitializeSetting() |
| `IsNeedCoopPendingAsyncLoad``boolean`whether the coop scheduler requires waiting for its shared pending-load signal before finishing, computed in InitializeSetting() |

# Functions (7)

| FunctionParametersReturnsDescription`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick.`SetAsyncLoadId`InAsyncLoadId: [`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid)`-`Sets Async Load Id.`SetCoopSchedulerId`InCoopSchedulerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Sets Coop Scheduler Id. |
| --- |
| `OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick.`SetAsyncLoadId`InAsyncLoadId: [`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid)`-`Sets Async Load Id.`SetCoopSchedulerId`InCoopSchedulerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Sets Coop Scheduler Id. |
| `OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick.`SetAsyncLoadId`InAsyncLoadId: [`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid)`-`Sets Async Load Id.`SetCoopSchedulerId`InCoopSchedulerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Sets Coop Scheduler Id. |
| `OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick.`SetAsyncLoadId`InAsyncLoadId: [`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid)`-`Sets Async Load Id.`SetCoopSchedulerId`InCoopSchedulerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Sets Coop Scheduler Id. |
| `OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick.`SetAsyncLoadId`InAsyncLoadId: [`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid)`-`Sets Async Load Id.`SetCoopSchedulerId`InCoopSchedulerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Sets Coop Scheduler Id. |
| `OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick.`SetAsyncLoadId`InAsyncLoadId: [`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid)`-`Sets Async Load Id.`SetCoopSchedulerId`InCoopSchedulerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Sets Coop Scheduler Id. |
| `SetAsyncLoadId`InAsyncLoadId: [`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid)`-`Sets Async Load Id.`SetCoopSchedulerId`InCoopSchedulerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Sets Coop Scheduler Id. |
| `SetCoopSchedulerId`InCoopSchedulerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Sets Coop Scheduler Id. |

# Override points (5)

Implement these in Lua as `FB2Action_WaitForAsyncLoad.Override_Name = function(...) end`.
