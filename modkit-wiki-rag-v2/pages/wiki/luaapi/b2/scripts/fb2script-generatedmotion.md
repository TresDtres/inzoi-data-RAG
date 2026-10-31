---
document_id: "c9f37937f969dc67005f348b9838d0cd0383d0b633ebd3ed712d50443f753ff1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2script-generatedmotion"
title: "FB2Script_GeneratedMotion"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:25+00:00"
content_sha256: "d409ed249f1544059175213e90adfacc11e07b2f7a24b0124c3b893a71a7e275"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/scripts/fb2script-generatedmotion"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- GeneratedMotion-domain game-rule script (Condition_*/Execute_* static functions). Override in Lua with Override_.

# Metadata

| FieldValueKind`script`EnvironmentB2 - SimulationCategory`scripts`Require`require('Scripts.B2Script_GeneratedMotion')` |
| --- |
| Kind`script`EnvironmentB2 - SimulationCategory`scripts`Require`require('Scripts.B2Script_GeneratedMotion')` |
| EnvironmentB2 - SimulationCategory`scripts`Require`require('Scripts.B2Script_GeneratedMotion')` |
| Category`scripts`Require`require('Scripts.B2Script_GeneratedMotion')` |
| Require`require('Scripts.B2Script_GeneratedMotion')` |

# Functions (2)

| FunctionParametersReturnsDescription`Condition_EnableGenerateMotion` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InConditionParam: [`FB1Condition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1condition)`boolean``Condition_HasGeneratedMotionIndex` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InConditionParam: [`FB1Condition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1condition)`boolean` |
| --- |
| `Condition_EnableGenerateMotion` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InConditionParam: [`FB1Condition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1condition)`boolean``Condition_HasGeneratedMotionIndex` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InConditionParam: [`FB1Condition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1condition)`boolean` |
| `Condition_HasGeneratedMotionIndex` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InConditionParam: [`FB1Condition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1condition)`boolean` |

# Override points (2)

Implement these in Lua as `FB2Script_GeneratedMotion.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_Condition_EnableGenerateMotion` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InConditionParam: [`FB1Condition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1condition)`boolean`Script condition check (Condition). Override in Lua to redefine the condition result.`Override_Condition_HasGeneratedMotionIndex` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InConditionParam: [`FB1Condition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1condition)`boolean`Script condition check (Condition). Override in Lua to redefine the condition result. |
| --- |
| `Override_Condition_EnableGenerateMotion` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InConditionParam: [`FB1Condition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1condition)`boolean`Script condition check (Condition). Override in Lua to redefine the condition result.`Override_Condition_HasGeneratedMotionIndex` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InConditionParam: [`FB1Condition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1condition)`boolean`Script condition check (Condition). Override in Lua to redefine the condition result. |
| `Override_Condition_HasGeneratedMotionIndex` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InConditionParam: [`FB1Condition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1condition)`boolean`Script condition check (Condition). Override in Lua to redefine the condition result. |
