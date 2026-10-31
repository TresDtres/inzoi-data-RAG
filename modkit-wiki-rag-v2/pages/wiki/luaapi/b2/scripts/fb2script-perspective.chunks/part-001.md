---
document_id: "cd785eb51befc9dd4b641ba7fdaad971a5fcd77f648b1733df04f95cd593a0ee"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2script-perspective"
title: "FB2Script_Perspective"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:26+00:00"
content_sha256: "72370cdd0d5d8bdff9a778b2f8861f5fa76d06f2b9130c347ff5164f96143750"
chunk: 1
chunk_count: 2
page_type: "article"
route: "wiki/luaapi/b2/scripts/fb2script-perspective"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Perspective-domain game-rule script (Condition_*/Execute_* static functions). Override in Lua with Override_.

# Metadata

| FieldValueKind`script`EnvironmentB2 - SimulationCategory`scripts`Require`require('Scripts.B2Script_Perspective')` |
| --- |
| Kind`script`EnvironmentB2 - SimulationCategory`scripts`Require`require('Scripts.B2Script_Perspective')` |
| EnvironmentB2 - SimulationCategory`scripts`Require`require('Scripts.B2Script_Perspective')` |
| Category`scripts`Require`require('Scripts.B2Script_Perspective')` |
| Require`require('Scripts.B2Script_Perspective')` |

# Functions (4)

| FunctionParametersReturnsDescription`Condition_MainPerspective` *(static)*ScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), Condition: [`FB1Condition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1condition)`boolean``Condition_PerspectivePoint` *(static)*ScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), Condition: [`FB1Condition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1condition)`boolean``Condition_PerspectivePointDiff` *(static)*ScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), Condition: [`FB1Condition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1condition)`boolean``Execute_AddPerspective` *(static)*ScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), Execute: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-` |
| --- |
| `Condition_MainPerspective` *(static)*ScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), Condition: [`FB1Condition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1condition)`boolean``Condition_PerspectivePoint` *(static)*ScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), Condition: [`FB1Condition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1condition)`boolean``Condition_PerspectivePointDiff` *(static)*ScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), Condition: [`FB1Condition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1condition)`boolean``Execute_AddPerspective` *(static)*ScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), Execute: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-` |
| `Condition_PerspectivePoint` *(static)*ScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), Condition: [`FB1Condition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1condition)`boolean``Condition_PerspectivePointDiff` *(static)*ScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), Condition: [`FB1Condition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1condition)`boolean``Execute_AddPerspective` *(static)*ScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), Execute: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-` |
| `Condition_PerspectivePointDiff` *(static)*ScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), Condition: [`FB1Condition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1condition)`boolean``Execute_AddPerspective` *(static)*ScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), Execute: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-` |
| `Execute_AddPerspective` *(static)*ScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), Execute: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-` |

# Override points (4)

Implement these in Lua as `FB2Script_Perspective.Override_Name = function(...) end`.
