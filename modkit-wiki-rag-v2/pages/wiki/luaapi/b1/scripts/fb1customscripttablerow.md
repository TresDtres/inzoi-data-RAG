---
document_id: "3c07af3a393873eb1f3587117473af3944d35a819a65a26294880c31c4da9d5e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/scripts/fb1customscripttablerow"
title: "FB1CustomScriptTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:39:43+00:00"
content_sha256: "c0bbb23b6dbd4b4a64b1c959530e6fafe9aba7755a89b23a0b3b0a72f4db0f12"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/scripts/fb1customscripttablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- DataTable row declaring a mod-provided Custom Script handler. Loaded at mod load time by BlueModManager and forwarded to FB2ScriptModRegistry: - Id (inherited) is the CommandName referenced from FB1Condition/FB1Execute.S1 when Command == EB1ConditionType::Custom / EB1ExecuteType::Custom. Must follow the "{ModId}.{CommandName}" convention (e.g. "FishingPro.AddXP"). - LuaScript / LuaFunction together identify which Lua function is bound as the handler body. Phase 1 carries an empty base-game JSON file (no built-in custom handlers). Phase 2 wires the per-mod row data through the mod loader.

# Metadata

| FieldValueKind`script`EnvironmentB1 - PresentationCategory`scripts`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`script`EnvironmentB1 - PresentationCategory`scripts`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`scripts`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`scripts`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (3)

| NameTypeDescription`LuaFunction``string`Name of the Lua function declared in LuaScript that backs this command.`LuaScript``string`Lua source file path. Mod-relative for mod rows; project-relative for base-game rows (rare).`Type`[`EB1CustomScriptType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1customscripttype)Whether this row registers a Condition (returns bool) or an Execute (runs effects). |
| --- |
| `LuaFunction``string`Name of the Lua function declared in LuaScript that backs this command.`LuaScript``string`Lua source file path. Mod-relative for mod rows; project-relative for base-game rows (rare).`Type`[`EB1CustomScriptType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1customscripttype)Whether this row registers a Condition (returns bool) or an Execute (runs effects). |
| `LuaScript``string`Lua source file path. Mod-relative for mod rows; project-relative for base-game rows (rare).`Type`[`EB1CustomScriptType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1customscripttype)Whether this row registers a Condition (returns bool) or an Execute (runs effects). |
| `Type`[`EB1CustomScriptType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1customscripttype)Whether this row registers a Condition (returns bool) or an Execute (runs effects). |
