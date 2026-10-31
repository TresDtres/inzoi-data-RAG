---
document_id: "a7e1a73f069aab374a8f005070d6fa9b5f2e75f31dca36f8811de9c2b1645cc9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2entitymovecomponent"
title: "FB2EntityMoveComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:12+00:00"
content_sha256: "392c40fef4f79a19fc9eeef11cec93e7ff025ebaf0b576fa05408cacef950a6f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/components/fb2entitymovecomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Component that manages entity movement.

# Metadata

| FieldValueKind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2EntityMoveComponent')` |
| --- |
| Kind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2EntityMoveComponent')` |
| EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2EntityMoveComponent')` |
| Category`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2EntityMoveComponent')` |
| Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2EntityMoveComponent')` |
| Require`require('Components.B2EntityMoveComponent')` |

# Properties (1)

| NameTypeDescription`CurrentRequest`[`FB2MoveRequest`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2moverequest) |
| --- |
| `CurrentRequest`[`FB2MoveRequest`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2moverequest) |

# Functions (2)

| FunctionParametersReturnsDescription`IsInputMove``-``boolean`Returns whether Input Move.`RequestMove`InRequest: [`FB2MoveRequest`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2moverequest)`-`Requests Move. |
| --- |
| `IsInputMove``-``boolean`Returns whether Input Move.`RequestMove`InRequest: [`FB2MoveRequest`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2moverequest)`-`Requests Move. |
| `RequestMove`InRequest: [`FB2MoveRequest`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2moverequest)`-`Requests Move. |

# Override points (1)

Implement these in Lua as `FB2EntityMoveComponent.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_RequestMove`InRequest: [`FB2MoveRequest`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2moverequest)`-`Requests Move. |
| --- |
| `Override_RequestMove`InRequest: [`FB2MoveRequest`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2moverequest)`-`Requests Move. |
