---
document_id: "5499223c6eeb852d3c6615fa058cce146cc7f809de30d0809ca65e39e7c8a956"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2divehandler"
title: "FB2DiveHandler"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:35+00:00"
content_sha256: "795bbbb30be36b5783e0c799defd1593e09544866fefcebb5c1fb7172a0f083e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/structs/fb2divehandler"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- No description available.

# Metadata

| FieldValueKind`struct`EnvironmentB2 - SimulationCategory`structs`Require`require('Objects.B2DiveHandler')` |
| --- |
| Kind`struct`EnvironmentB2 - SimulationCategory`structs`Require`require('Objects.B2DiveHandler')` |
| EnvironmentB2 - SimulationCategory`structs`Require`require('Objects.B2DiveHandler')` |
| Category`structs`Require`require('Objects.B2DiveHandler')` |
| Require`require('Objects.B2DiveHandler')` |

# Properties (4)

| NameTypeDescription`CurrentPhase`[`EB1DivePhase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1divephase)`EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`Param`[`FB2DiveParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2diveparam)`bAnimEnded``boolean` |
| --- |
| `CurrentPhase`[`EB1DivePhase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1divephase)`EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`Param`[`FB2DiveParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2diveparam)`bAnimEnded``boolean` |
| `EntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`Param`[`FB2DiveParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2diveparam)`bAnimEnded``boolean` |
| `Param`[`FB2DiveParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2diveparam)`bAnimEnded``boolean` |
| `bAnimEnded``boolean` |

# Functions (2)

| FunctionParametersReturnsDescription`IsDiving``-``boolean`Returns whether Diving.`RequestDive`InParam: [`FB2DiveParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2diveparam)`-`Requests Dive. |
| --- |
| `IsDiving``-``boolean`Returns whether Diving.`RequestDive`InParam: [`FB2DiveParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2diveparam)`-`Requests Dive. |
| `RequestDive`InParam: [`FB2DiveParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2diveparam)`-`Requests Dive. |

# Override points (1)

Implement these in Lua as `FB2DiveHandler.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_RequestDive`InParam: [`FB2DiveParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2diveparam)`-`Requests Dive. |
| --- |
| `Override_RequestDive`InParam: [`FB2DiveParam`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2diveparam)`-`Requests Dive. |
