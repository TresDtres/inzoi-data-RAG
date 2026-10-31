---
document_id: "75526fdf5a15606e6058275519e3690d99fdde330e119a8466d93ff01daab542"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/b2script-pocketmarket"
title: "B2Script_PocketMarket"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:22+00:00"
content_sha256: "cbac7e0d93f963aea1945bee6d1ddc327faca8567278cc433ad9dcc78d99f0d3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/scripts/b2script-pocketmarket"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- PocketMarket-domain game-rule script. Override in Lua with Override_.

# Metadata

| FieldValueKind`script`EnvironmentB2 - SimulationCategory`scripts`Require`require('Scripts.B2Script_PocketMarket')` |
| --- |
| Kind`script`EnvironmentB2 - SimulationCategory`scripts`Require`require('Scripts.B2Script_PocketMarket')` |
| EnvironmentB2 - SimulationCategory`scripts`Require`require('Scripts.B2Script_PocketMarket')` |
| Category`scripts`Require`require('Scripts.B2Script_PocketMarket')` |
| Require`require('Scripts.B2Script_PocketMarket')` |

# Functions (2)

| FunctionParametersReturnsDescription`Execute_PocketMarketRemoveSellingItem` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecuteParam: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-``Execute_PocketMarketSellingItemSold` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecuteParam: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-` |
| --- |
| `Execute_PocketMarketRemoveSellingItem` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecuteParam: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-``Execute_PocketMarketSellingItemSold` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecuteParam: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-` |
| `Execute_PocketMarketSellingItemSold` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecuteParam: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-` |

# Override points (4)

Implement these in Lua as `B2Script_PocketMarket.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_Condition_HasRegisteredPocketMarketSellingItem`InScriptContext: `InScriptContext`, InConditionParam: `InConditionParam``boolean`Script condition check (Condition). Override in Lua to redefine the condition result.`Override_Condition_IsRegisteredPocketMarketSellingItem`InScriptContext: `InScriptContext`, InConditionParam: `InConditionParam``boolean`Script condition check (Condition). Override in Lua to redefine the condition result.`Override_Execute_PocketMarketRemoveSellingItem` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecuteParam: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-`Script execution (Execute). Override in Lua to redefine the behavior.`Override_Execute_PocketMarketSellingItemSold` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecuteParam: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-`Script execution (Execute). Override in Lua to redefine the behavior. |
| --- |
| `Override_Condition_HasRegisteredPocketMarketSellingItem`InScriptContext: `InScriptContext`, InConditionParam: `InConditionParam``boolean`Script condition check (Condition). Override in Lua to redefine the condition result.`Override_Condition_IsRegisteredPocketMarketSellingItem`InScriptContext: `InScriptContext`, InConditionParam: `InConditionParam``boolean`Script condition check (Condition). Override in Lua to redefine the condition result.`Override_Execute_PocketMarketRemoveSellingItem` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecuteParam: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-`Script execution (Execute). Override in Lua to redefine the behavior.`Override_Execute_PocketMarketSellingItemSold` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecuteParam: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-`Script execution (Execute). Override in Lua to redefine the behavior. |
| `Override_Condition_IsRegisteredPocketMarketSellingItem`InScriptContext: `InScriptContext`, InConditionParam: `InConditionParam``boolean`Script condition check (Condition). Override in Lua to redefine the condition result.`Override_Execute_PocketMarketRemoveSellingItem` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecuteParam: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-`Script execution (Execute). Override in Lua to redefine the behavior.`Override_Execute_PocketMarketSellingItemSold` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecuteParam: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-`Script execution (Execute). Override in Lua to redefine the behavior. |
| `Override_Execute_PocketMarketRemoveSellingItem` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecuteParam: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-`Script execution (Execute). Override in Lua to redefine the behavior.`Override_Execute_PocketMarketSellingItemSold` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecuteParam: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-`Script execution (Execute). Override in Lua to redefine the behavior. |
| `Override_Execute_PocketMarketSellingItemSold` *(static)*InScriptContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext), InExecuteParam: [`FB1Execute`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute)`-`Script execution (Execute). Override in Lua to redefine the behavior. |
