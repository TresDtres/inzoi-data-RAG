---
document_id: "484f2200110d7f6fb30521ffa813ee4901fb3f5f24e73e708f2fbd8391349c0f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1customscripttablerow"
title: "B1CustomScriptTableRow"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:54:19+00:00"
content_sha256: "67e2ddd198db96a631a9fbe1f65c4f43c75aee56348a968216caedf97c87992e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1customscripttablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- DataTable row declaring a mod-provided Custom Script handler. ** Loaded at mod load time by BlueModManager and forwarded to FB2ScriptModRegistry: * - Id (inherited) is the CommandName referenced from FB1Condition/FB1Execute.S1 * when Command == EB1ConditionType::Custom / EB1ExecuteType::Custom. * Must follow the "{ModId}.{CommandName}" convention (e.g. "FishingPro.AddXP"). * - LuaScript / LuaFunction together identify which Lua function is bound as the handler body. ** Phase 1 carries an empty base-game JSON file (no built-in custom handlers). * Phase 2 wires the per-mod row data through the mod loader.

| PropertyTypeDescriptionMetadataTypeEB1CustomScriptTypeWhether this row registers a Condition (returns bool) or an Execute (runs effects).Category: B1CustomScriptTableRowLuaScriptFStringLua source file path. Mod-relative for mod rows; project-relative for base-game rows (rare).Category: B1CustomScriptTableRowLuaFunctionFNameName of the Lua function declared in LuaScript that backs this command.Category: B1CustomScriptTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| --- |
| TypeEB1CustomScriptTypeWhether this row registers a Condition (returns bool) or an Execute (runs effects).Category: B1CustomScriptTableRowLuaScriptFStringLua source file path. Mod-relative for mod rows; project-relative for base-game rows (rare).Category: B1CustomScriptTableRowLuaFunctionFNameName of the Lua function declared in LuaScript that backs this command.Category: B1CustomScriptTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| LuaScriptFStringLua source file path. Mod-relative for mod rows; project-relative for base-game rows (rare).Category: B1CustomScriptTableRowLuaFunctionFNameName of the Lua function declared in LuaScript that backs this command.Category: B1CustomScriptTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| LuaFunctionFNameName of the Lua function declared in LuaScript that backs this command.Category: B1CustomScriptTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CommentFStringDev CommentCategory: B1TableRowBase |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoCustom[CustomMobileMessage Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/custommobilemessage)[FB1CustomMobileMessagePoolTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1custommobilemessagepooltablerow)[FB1CustomMobileMessageTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1custommobilemessagetablerow)[FB1CustomScheduleActorRoleData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1customscheduleactorroledata)[FB1CustomSchedulePresetTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1customschedulepresettablerow)[FB1CustomScheduleSlotData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1customscheduleslotdata)[FB1CustomScheduleSlotPresetData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1customscheduleslotpresetdata)
