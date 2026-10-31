---
document_id: "8dd573ffafc16608e732a6fb56edbb67ebe2f826e434a8e586a62ab18f9af11d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2script-spawner"
title: "FB2Script_Spawner"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:28+00:00"
content_sha256: "54b246c2c5e55a05de9b0e1f5a7d7f4e81fc3eb547ca39f220c3f60341356cdc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/scripts/fb2script-spawner"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Spawner-domain game-rule script (Condition_*/Execute_* static functions). Override in Lua with Override_.

# Metadata

| FieldValueKind`script`EnvironmentB2 - SimulationCategory`scripts`Require`require('Scripts.B2Script_Spawner')` |
| --- |
| Kind`script`EnvironmentB2 - SimulationCategory`scripts`Require`require('Scripts.B2Script_Spawner')` |
| EnvironmentB2 - SimulationCategory`scripts`Require`require('Scripts.B2Script_Spawner')` |
| Category`scripts`Require`require('Scripts.B2Script_Spawner')` |
| Require`require('Scripts.B2Script_Spawner')` |

# Functions (2)

| FunctionParametersReturnsDescription`Execute_SetMeshToNearestSpawner` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), Execute: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-``Execute_SetMeshToSpawner` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), Execute: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-` |
| --- |
| `Execute_SetMeshToNearestSpawner` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), Execute: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-``Execute_SetMeshToSpawner` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), Execute: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-` |
| `Execute_SetMeshToSpawner` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), Execute: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-` |

# Override points (2)

Implement these in Lua as `FB2Script_Spawner.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_Execute_SetMeshToNearestSpawner` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), Execute: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-`Script execution (Execute). Override in Lua to redefine the behavior.`Override_Execute_SetMeshToSpawner` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), Execute: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-`Script execution (Execute). Override in Lua to redefine the behavior. |
| --- |
| `Override_Execute_SetMeshToNearestSpawner` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), Execute: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-`Script execution (Execute). Override in Lua to redefine the behavior.`Override_Execute_SetMeshToSpawner` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), Execute: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-`Script execution (Execute). Override in Lua to redefine the behavior. |
| `Override_Execute_SetMeshToSpawner` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), Execute: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-`Script execution (Execute). Override in Lua to redefine the behavior. |
