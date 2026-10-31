---
document_id: "0ea82cca1f964d8f2d06241138c9781ed726434cb8b9cfa3598b477e0d4d1936"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2script-slot"
title: "FB2Script_Slot"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:28+00:00"
content_sha256: "f72cd7b438a66e71032fa971d63cda8fe2d6b7c6518f62fa201f74b2acc7b5c0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/scripts/fb2script-slot"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Slot-domain game-rule script (Condition_*/Execute_* static functions). Override in Lua with Override_.

# Metadata

| FieldValueKind`script`EnvironmentB2 - SimulationCategory`scripts`Require`require('Scripts.B2Script_Slot')` |
| --- |
| Kind`script`EnvironmentB2 - SimulationCategory`scripts`Require`require('Scripts.B2Script_Slot')` |
| EnvironmentB2 - SimulationCategory`scripts`Require`require('Scripts.B2Script_Slot')` |
| Category`scripts`Require`require('Scripts.B2Script_Slot')` |
| Require`require('Scripts.B2Script_Slot')` |

# Functions (1)

| FunctionParametersReturnsDescription`Condition_AvailableSlotCount` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InConditionParam: [`FB1Condition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1condition)`boolean` |
| --- |
| `Condition_AvailableSlotCount` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InConditionParam: [`FB1Condition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1condition)`boolean` |

# Override points (1)

Implement these in Lua as `FB2Script_Slot.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_Condition_AvailableSlotCount` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InConditionParam: [`FB1Condition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1condition)`boolean`Script condition check (Condition). Override in Lua to redefine the condition result. |
| --- |
| `Override_Condition_AvailableSlotCount` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InConditionParam: [`FB1Condition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1condition)`boolean`Script condition check (Condition). Override in Lua to redefine the condition result. |
