---
document_id: "a9030bb4c8ad1a231adb409356671a72804fe5bcd2a206ff78a94c3a227242ee"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2script-autonomyoption"
title: "FB2Script_AutonomyOption"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:23+00:00"
content_sha256: "cd9b1a4e8cf121630d4354efc964825dad981a6d44bac065555d4b94e1fead4f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/scripts/fb2script-autonomyoption"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- AutonomyOption-domain game-rule script (Condition_*/Execute_* static functions). Override in Lua with Override_.

# Metadata

| FieldValueKind`script`EnvironmentB2 - SimulationCategory`scripts`Require`require('Scripts.B2Script_AutonomyOption')` |
| --- |
| Kind`script`EnvironmentB2 - SimulationCategory`scripts`Require`require('Scripts.B2Script_AutonomyOption')` |
| EnvironmentB2 - SimulationCategory`scripts`Require`require('Scripts.B2Script_AutonomyOption')` |
| Category`scripts`Require`require('Scripts.B2Script_AutonomyOption')` |
| Require`require('Scripts.B2Script_AutonomyOption')` |

# Functions (1)

| FunctionParametersReturnsDescription`Condition_ToggleAutonomyOptionEnabled` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InConditionParam: [`FB1Condition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1condition)`boolean` |
| --- |
| `Condition_ToggleAutonomyOptionEnabled` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InConditionParam: [`FB1Condition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1condition)`boolean` |

# Override points (1)

Implement these in Lua as `FB2Script_AutonomyOption.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_Condition_ToggleAutonomyOptionEnabled` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InConditionParam: [`FB1Condition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1condition)`boolean`Script condition check (Condition). Override in Lua to redefine the condition result. |
| --- |
| `Override_Condition_ToggleAutonomyOptionEnabled` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InConditionParam: [`FB1Condition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1condition)`boolean`Script condition check (Condition). Override in Lua to redefine the condition result. |
