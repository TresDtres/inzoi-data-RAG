---
document_id: "e7db529f45a640e2871e6858b9408638cc782a1d9d6ff035fb94bfa018568ef6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2asyncloadmanager"
title: "FB2AsyncLoadManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:56+00:00"
content_sha256: "037ab0b35c25d943f4ecba75a67e9e5beca446966cccc1af03fdc0e79a5a6116"
chunk: 1
chunk_count: 2
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2asyncloadmanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manages asynchronous load tasks.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2AsyncLoadManager')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2AsyncLoadManager')` |
| EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2AsyncLoadManager')` |
| Category`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2AsyncLoadManager')` |
| Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2AsyncLoadManager')` |
| Require`require('Systems.B2AsyncLoadManager')` |

# Properties (1)

| NameTypeDescription`RequestAsyncMap``table<FB1AsyncLoadId, FB1RequestAsyncLoad>` |
| --- |
| `RequestAsyncMap``table<FB1AsyncLoadId, FB1RequestAsyncLoad>` |

# Functions (6)

| FunctionParametersReturnsDescription`Clear``-``-``IsFinishAsyncLoad`InAsyncLoadId: [`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid)`boolean`Returns whether Finish Async Load.`OnFinishAsyncLoad`InAsyncLoadId: [`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid)`-`Callback invoked on Finish Async Load.`ProcessPendingRemovals``-``-`Performs follow-up processing when the removal queue is non-empty.`RequestAsyncLoad`InRequest: [`FB1RequestAsyncLoad`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1requestasyncload)[`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid)Requests Async Load.`StaticRequestAsyncLoad` *(static)*InRequest: [`FB1RequestAsyncLoad`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1requestasyncload)[`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid) |
| --- |
| `Clear``-``-``IsFinishAsyncLoad`InAsyncLoadId: [`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid)`boolean`Returns whether Finish Async Load.`OnFinishAsyncLoad`InAsyncLoadId: [`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid)`-`Callback invoked on Finish Async Load.`ProcessPendingRemovals``-``-`Performs follow-up processing when the removal queue is non-empty.`RequestAsyncLoad`InRequest: [`FB1RequestAsyncLoad`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1requestasyncload)[`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid)Requests Async Load.`StaticRequestAsyncLoad` *(static)*InRequest: [`FB1RequestAsyncLoad`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1requestasyncload)[`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid) |
| `IsFinishAsyncLoad`InAsyncLoadId: [`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid)`boolean`Returns whether Finish Async Load.`OnFinishAsyncLoad`InAsyncLoadId: [`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid)`-`Callback invoked on Finish Async Load.`ProcessPendingRemovals``-``-`Performs follow-up processing when the removal queue is non-empty.`RequestAsyncLoad`InRequest: [`FB1RequestAsyncLoad`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1requestasyncload)[`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid)Requests Async Load.`StaticRequestAsyncLoad` *(static)*InRequest: [`FB1RequestAsyncLoad`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1requestasyncload)[`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid) |
| `OnFinishAsyncLoad`InAsyncLoadId: [`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid)`-`Callback invoked on Finish Async Load.`ProcessPendingRemovals``-``-`Performs follow-up processing when the removal queue is non-empty.`RequestAsyncLoad`InRequest: [`FB1RequestAsyncLoad`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1requestasyncload)[`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid)Requests Async Load.`StaticRequestAsyncLoad` *(static)*InRequest: [`FB1RequestAsyncLoad`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1requestasyncload)[`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid) |
| `ProcessPendingRemovals``-``-`Performs follow-up processing when the removal queue is non-empty.`RequestAsyncLoad`InRequest: [`FB1RequestAsyncLoad`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1requestasyncload)[`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid)Requests Async Load.`StaticRequestAsyncLoad` *(static)*InRequest: [`FB1RequestAsyncLoad`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1requestasyncload)[`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid) |
| `RequestAsyncLoad`InRequest: [`FB1RequestAsyncLoad`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1requestasyncload)[`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid)Requests Async Load.`StaticRequestAsyncLoad` *(static)*InRequest: [`FB1RequestAsyncLoad`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1requestasyncload)[`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid) |
| `StaticRequestAsyncLoad` *(static)*InRequest: [`FB1RequestAsyncLoad`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1requestasyncload)[`FB1AsyncLoadId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1asyncloadid) |

# Override points (5)

Implement these in Lua as `FB2AsyncLoadManager.Override_Name = function(...) end`.
