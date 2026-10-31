---
document_id: "325263c2e0d90cd11527de2fe90d5542fd5a9758dc7c219bec13b237ac1dff16"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2script-service"
title: "FB2Script_Service"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:27+00:00"
content_sha256: "696f504fbfd4507ca0b0ddad597945dfedf9863acc9fe1afa96036cd5b873415"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/scripts/fb2script-service"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Service-domain game-rule script (Condition_*/Execute_* static functions). Override in Lua with Override_.

# Metadata

| FieldValueKind`script`EnvironmentB2 - SimulationCategory`scripts`Require`require('Scripts.B2Script_Service')` |
| --- |
| Kind`script`EnvironmentB2 - SimulationCategory`scripts`Require`require('Scripts.B2Script_Service')` |
| EnvironmentB2 - SimulationCategory`scripts`Require`require('Scripts.B2Script_Service')` |
| Category`scripts`Require`require('Scripts.B2Script_Service')` |
| Require`require('Scripts.B2Script_Service')` |

# Functions (2)

| FunctionParametersReturnsDescription`Execute_FinishService` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecute: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-``Execute_RequestService` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecute: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-` |
| --- |
| `Execute_FinishService` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecute: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-``Execute_RequestService` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecute: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-` |
| `Execute_RequestService` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecute: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-` |

# Override points (2)

Implement these in Lua as `FB2Script_Service.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_Execute_FinishService` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecute: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-`Script execution (Execute). Override in Lua to redefine the behavior.`Override_Execute_RequestService` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecute: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-`Script execution (Execute). Override in Lua to redefine the behavior. |
| --- |
| `Override_Execute_FinishService` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecute: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-`Script execution (Execute). Override in Lua to redefine the behavior.`Override_Execute_RequestService` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecute: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-`Script execution (Execute). Override in Lua to redefine the behavior. |
| `Override_Execute_RequestService` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecute: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-`Script execution (Execute). Override in Lua to redefine the behavior. |
