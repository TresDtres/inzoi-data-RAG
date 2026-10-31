---
document_id: "783abe9638b0c1febbea9268ff6b3c18c23d6b33783d6cfde4cfbab6c776a63b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2eventtriggerinfo"
title: "FB2EventTriggerInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:36+00:00"
content_sha256: "a7468a53d4ca9363f111a328c99cf08ff3fa7d2a2460f7f942dcec4734918aa1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/structs/fb2eventtriggerinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- No description available.

# Metadata

| FieldValueKind`struct`EnvironmentB2 - SimulationCategory`structs`Require`require('Systems.FB2EventTriggerInfo')` |
| --- |
| Kind`struct`EnvironmentB2 - SimulationCategory`structs`Require`require('Systems.FB2EventTriggerInfo')` |
| EnvironmentB2 - SimulationCategory`structs`Require`require('Systems.FB2EventTriggerInfo')` |
| Category`structs`Require`require('Systems.FB2EventTriggerInfo')` |
| Require`require('Systems.FB2EventTriggerInfo')` |

# Properties (6)

| NameTypeDescription`BeginTime``integer``Conditions``FB1Condition[]``EndTime``integer``Executes``FB1Execute[]``IsDone``boolean``Type`[`EB2TriggerType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2triggertype) |
| --- |
| `BeginTime``integer``Conditions``FB1Condition[]``EndTime``integer``Executes``FB1Execute[]``IsDone``boolean``Type`[`EB2TriggerType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2triggertype) |
| `Conditions``FB1Condition[]``EndTime``integer``Executes``FB1Execute[]``IsDone``boolean``Type`[`EB2TriggerType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2triggertype) |
| `EndTime``integer``Executes``FB1Execute[]``IsDone``boolean``Type`[`EB2TriggerType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2triggertype) |
| `Executes``FB1Execute[]``IsDone``boolean``Type`[`EB2TriggerType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2triggertype) |
| `IsDone``boolean``Type`[`EB2TriggerType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2triggertype) |
| `Type`[`EB2TriggerType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2triggertype) |

# Functions (4)

| FunctionParametersReturnsDescription`ApplyEvent`InContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext)`-`Applies Event.`CheckEventTrigger`InCurrentTime: `integer`, InContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext)`boolean`Checks Event Trigger.`IsInTime`InTime: `integer``boolean`Returns whether In Time.`Reset``-``-` |
| --- |
| `ApplyEvent`InContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext)`-`Applies Event.`CheckEventTrigger`InCurrentTime: `integer`, InContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext)`boolean`Checks Event Trigger.`IsInTime`InTime: `integer``boolean`Returns whether In Time.`Reset``-``-` |
| `CheckEventTrigger`InCurrentTime: `integer`, InContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext)`boolean`Checks Event Trigger.`IsInTime`InTime: `integer``boolean`Returns whether In Time.`Reset``-``-` |
| `IsInTime`InTime: `integer``boolean`Returns whether In Time.`Reset``-``-` |
| `Reset``-``-` |

# Override points (3)

Implement these in Lua as `FB2EventTriggerInfo.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_ApplyEvent`InContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext)`-`Applies Event.`Override_CheckEventTrigger`InCurrentTime: `integer`, InContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext)`boolean`Checks Event Trigger.`Override_Reset``-``-` |
| --- |
| `Override_ApplyEvent`InContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext)`-`Applies Event.`Override_CheckEventTrigger`InCurrentTime: `integer`, InContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext)`boolean`Checks Event Trigger.`Override_Reset``-``-` |
| `Override_CheckEventTrigger`InCurrentTime: `integer`, InContext: [`FB2ScriptContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/scripts/fb2scriptcontext)`boolean`Checks Event Trigger.`Override_Reset``-``-` |
| `Override_Reset``-``-` |
