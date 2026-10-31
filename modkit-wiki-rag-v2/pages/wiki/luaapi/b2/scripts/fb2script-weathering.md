---
document_id: "740138f764db3a8f9640ef1348b9c3f34c43b25497bd6e75f6f0d0659abaffcb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2script-weathering"
title: "FB2Script_Weathering"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:29+00:00"
content_sha256: "fdf882e4da0d2e2d5a674bb4bfaac5c85ca95bc792e752301c0253196d1167da"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/scripts/fb2script-weathering"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Weathering-domain game-rule script (Condition_*/Execute_* static functions). Override in Lua with Override_.

# Metadata

| FieldValueKind`script`EnvironmentB2 - SimulationCategory`scripts`Require`require('Scripts.B2Script_Weathering')` |
| --- |
| Kind`script`EnvironmentB2 - SimulationCategory`scripts`Require`require('Scripts.B2Script_Weathering')` |
| EnvironmentB2 - SimulationCategory`scripts`Require`require('Scripts.B2Script_Weathering')` |
| Category`scripts`Require`require('Scripts.B2Script_Weathering')` |
| Require`require('Scripts.B2Script_Weathering')` |

# Functions (1)

| FunctionParametersReturnsDescription`Execute_ChangeObjectWeathering` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecuteParam: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-` |
| --- |
| `Execute_ChangeObjectWeathering` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecuteParam: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-` |

# Override points (1)

Implement these in Lua as `FB2Script_Weathering.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_Execute_ChangeObjectWeathering` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecuteParam: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-`Script execution (Execute). Override in Lua to redefine the behavior. |
| --- |
| `Override_Execute_ChangeObjectWeathering` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecuteParam: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-`Script execution (Execute). Override in Lua to redefine the behavior. |
