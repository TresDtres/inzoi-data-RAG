---
document_id: "8545911fc1dac522e298a733c7d021e93d118afc19954712f03ac51bbfcbdecd"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2swimmingpoolhandler"
title: "FB2SwimmingPoolHandler"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:48+00:00"
content_sha256: "145481f29c9492e4fac77434d877c2286aa59cc102830fa2e3b3f46069b89d02"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/structs/fb2swimmingpoolhandler"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- No description available.

# Metadata

| FieldValueKind`struct`EnvironmentB2 - SimulationCategory`structs`Require`require('Objects.B2SwimmingPoolHandler')` |
| --- |
| Kind`struct`EnvironmentB2 - SimulationCategory`structs`Require`require('Objects.B2SwimmingPoolHandler')` |
| EnvironmentB2 - SimulationCategory`structs`Require`require('Objects.B2SwimmingPoolHandler')` |
| Category`structs`Require`require('Objects.B2SwimmingPoolHandler')` |
| Require`require('Objects.B2SwimmingPoolHandler')` |

# Properties (4)

| NameTypeDescription`CurrentPhase`[`EB1SwimmingPoolAnimPhase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1swimmingpoolanimphase)`EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`Param`[`FB2SwimmingPoolParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2swimmingpoolparam)`bAnimEnded``boolean` |
| --- |
| `CurrentPhase`[`EB1SwimmingPoolAnimPhase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1swimmingpoolanimphase)`EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`Param`[`FB2SwimmingPoolParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2swimmingpoolparam)`bAnimEnded``boolean` |
| `EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`Param`[`FB2SwimmingPoolParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2swimmingpoolparam)`bAnimEnded``boolean` |
| `Param`[`FB2SwimmingPoolParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2swimmingpoolparam)`bAnimEnded``boolean` |
| `bAnimEnded``boolean` |

# Functions (2)

| FunctionParametersReturnsDescription`IsUsingSwimmingPool``-``boolean`Returns whether Using Swimming Pool.`RequestUsingSwimmingPool`InParam: [`FB2SwimmingPoolParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2swimmingpoolparam)`-`Requests Using Swimming Pool. |
| --- |
| `IsUsingSwimmingPool``-``boolean`Returns whether Using Swimming Pool.`RequestUsingSwimmingPool`InParam: [`FB2SwimmingPoolParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2swimmingpoolparam)`-`Requests Using Swimming Pool. |
| `RequestUsingSwimmingPool`InParam: [`FB2SwimmingPoolParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2swimmingpoolparam)`-`Requests Using Swimming Pool. |

# Override points (1)

Implement these in Lua as `FB2SwimmingPoolHandler.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_RequestUsingSwimmingPool`InParam: [`FB2SwimmingPoolParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2swimmingpoolparam)`-`Requests Using Swimming Pool. |
| --- |
| `Override_RequestUsingSwimmingPool`InParam: [`FB2SwimmingPoolParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2swimmingpoolparam)`-`Requests Using Swimming Pool. |
