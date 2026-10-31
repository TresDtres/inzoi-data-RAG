---
document_id: "077b998788ab97d15b948c3b39321deda57788596d65500073c14d6e824c3f3b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2script-ragdoll"
title: "FB2Script_Ragdoll"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:27+00:00"
content_sha256: "0e7d6f359bec0418b1a2e9a53a0f02685240884b119ca2e9f3d79c1711eecfd8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/scripts/fb2script-ragdoll"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Ragdoll-domain game-rule script (Condition_*/Execute_* static functions). Override in Lua with Override_.

# Metadata

| FieldValueKind`script`EnvironmentB2 - SimulationCategory`scripts`Require`require('Scripts.B2Script_Ragdoll')` |
| --- |
| Kind`script`EnvironmentB2 - SimulationCategory`scripts`Require`require('Scripts.B2Script_Ragdoll')` |
| EnvironmentB2 - SimulationCategory`scripts`Require`require('Scripts.B2Script_Ragdoll')` |
| Category`scripts`Require`require('Scripts.B2Script_Ragdoll')` |
| Require`require('Scripts.B2Script_Ragdoll')` |

# Functions (1)

| FunctionParametersReturnsDescription`Execute_EnableRagdoll` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecuteParam: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-` |
| --- |
| `Execute_EnableRagdoll` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecuteParam: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-` |

# Override points (1)

Implement these in Lua as `FB2Script_Ragdoll.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_Execute_EnableRagdoll` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecuteParam: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-`Script execution (Execute). Override in Lua to redefine the behavior. |
| --- |
| `Override_Execute_EnableRagdoll` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecuteParam: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-`Script execution (Execute). Override in Lua to redefine the behavior. |
