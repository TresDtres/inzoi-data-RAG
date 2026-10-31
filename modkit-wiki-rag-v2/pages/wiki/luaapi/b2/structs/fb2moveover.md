---
document_id: "6f9d5e215288f9b2d6242b1ad05b349930f5b6548905b909b9c29d5c730fe020"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2moveover"
title: "FB2MoveOver"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:41+00:00"
content_sha256: "249983a34a532e01380e2d0f330e1c6e18874e93e4e7c406fd3b2607c297730d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/structs/fb2moveover"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- No description available.

# Metadata

| FieldValueKind`struct`EnvironmentB2 - SimulationCategory`structs`Require`require('Objects.B2MoveOver')` |
| --- |
| Kind`struct`EnvironmentB2 - SimulationCategory`structs`Require`require('Objects.B2MoveOver')` |
| EnvironmentB2 - SimulationCategory`structs`Require`require('Objects.B2MoveOver')` |
| Category`structs`Require`require('Objects.B2MoveOver')` |
| Require`require('Objects.B2MoveOver')` |

# Properties (2)

| NameTypeDescription`MoveOverState`[`EB2MoveOverState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2moveoverstate)`TargetLocation``FVector` |
| --- |
| `MoveOverState`[`EB2MoveOverState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2moveoverstate)`TargetLocation``FVector` |
| `TargetLocation``FVector` |

# Functions (4)

| FunctionParametersReturnsDescription`IsActive``-``boolean`Returns whether Active.`RequestCancelMoveOver``-``-`Requests Cancel Move Over.`RequestClearMoveOver``-``-`Requests Clear Move Over.`RequestMoveOverByLocation`InLocation: `FVector``-`Requests Move Over By Location. |
| --- |
| `IsActive``-``boolean`Returns whether Active.`RequestCancelMoveOver``-``-`Requests Cancel Move Over.`RequestClearMoveOver``-``-`Requests Clear Move Over.`RequestMoveOverByLocation`InLocation: `FVector``-`Requests Move Over By Location. |
| `RequestCancelMoveOver``-``-`Requests Cancel Move Over.`RequestClearMoveOver``-``-`Requests Clear Move Over.`RequestMoveOverByLocation`InLocation: `FVector``-`Requests Move Over By Location. |
| `RequestClearMoveOver``-``-`Requests Clear Move Over.`RequestMoveOverByLocation`InLocation: `FVector``-`Requests Move Over By Location. |
| `RequestMoveOverByLocation`InLocation: `FVector``-`Requests Move Over By Location. |

# Override points (2)

Implement these in Lua as `FB2MoveOver.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_RequestCancelMoveOver``-``-`Requests Cancel Move Over.`Override_RequestClearMoveOver``-``-`Requests Clear Move Over. |
| --- |
| `Override_RequestCancelMoveOver``-``-`Requests Cancel Move Over.`Override_RequestClearMoveOver``-``-`Requests Clear Move Over. |
| `Override_RequestClearMoveOver``-``-`Requests Clear Move Over. |
