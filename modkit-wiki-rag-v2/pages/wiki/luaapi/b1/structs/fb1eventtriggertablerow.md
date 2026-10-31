---
document_id: "281070964fc5c17b0cbfac51a2e030d58033c8450a2a2f64592e18fef2c34445"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1eventtriggertablerow"
title: "FB1EventTriggerTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:47+00:00"
content_sha256: "8f148fe540baaa66b53ef7c211128734452535f6f535839bc32559f675fe7808"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1eventtriggertablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining an event trigger, including its probability, cooldown, time ranges, target type, conditions, roles, and scripts to run.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (8)

| NameTypeDescription`CoolTime``integer`Cooldown in hours before this trigger can fire again (minimum 24).`EventRoleInfos``FB1EventRoleInfo[]`List of role infos defining who participates in this event.`Ratio``integer`Relative weight/probability for this trigger to be selected (minimum 1).`RunScripts``FB1EventScriptContext[]`List of script contexts to execute when the trigger fires.`TriggerConditionIds``string[]`List of condition IDs that must be satisfied for this trigger to fire.`TriggerTargetType`[`EB1TriggerTargetType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1triggertargettype)The type of target this trigger acts upon.`TriggerTimeRange``FB1TriggerTimeRange[]`List of in-game time ranges during which this trigger is active.`bUseGlobalRule``boolean`Whether to apply global cooldown rules and participate in automatic hourly checks (false = manual trigger only, no cooldown). |
| --- |
| `CoolTime``integer`Cooldown in hours before this trigger can fire again (minimum 24).`EventRoleInfos``FB1EventRoleInfo[]`List of role infos defining who participates in this event.`Ratio``integer`Relative weight/probability for this trigger to be selected (minimum 1).`RunScripts``FB1EventScriptContext[]`List of script contexts to execute when the trigger fires.`TriggerConditionIds``string[]`List of condition IDs that must be satisfied for this trigger to fire.`TriggerTargetType`[`EB1TriggerTargetType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1triggertargettype)The type of target this trigger acts upon.`TriggerTimeRange``FB1TriggerTimeRange[]`List of in-game time ranges during which this trigger is active.`bUseGlobalRule``boolean`Whether to apply global cooldown rules and participate in automatic hourly checks (false = manual trigger only, no cooldown). |
| `EventRoleInfos``FB1EventRoleInfo[]`List of role infos defining who participates in this event.`Ratio``integer`Relative weight/probability for this trigger to be selected (minimum 1).`RunScripts``FB1EventScriptContext[]`List of script contexts to execute when the trigger fires.`TriggerConditionIds``string[]`List of condition IDs that must be satisfied for this trigger to fire.`TriggerTargetType`[`EB1TriggerTargetType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1triggertargettype)The type of target this trigger acts upon.`TriggerTimeRange``FB1TriggerTimeRange[]`List of in-game time ranges during which this trigger is active.`bUseGlobalRule``boolean`Whether to apply global cooldown rules and participate in automatic hourly checks (false = manual trigger only, no cooldown). |
| `Ratio``integer`Relative weight/probability for this trigger to be selected (minimum 1).`RunScripts``FB1EventScriptContext[]`List of script contexts to execute when the trigger fires.`TriggerConditionIds``string[]`List of condition IDs that must be satisfied for this trigger to fire.`TriggerTargetType`[`EB1TriggerTargetType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1triggertargettype)The type of target this trigger acts upon.`TriggerTimeRange``FB1TriggerTimeRange[]`List of in-game time ranges during which this trigger is active.`bUseGlobalRule``boolean`Whether to apply global cooldown rules and participate in automatic hourly checks (false = manual trigger only, no cooldown). |
| `RunScripts``FB1EventScriptContext[]`List of script contexts to execute when the trigger fires.`TriggerConditionIds``string[]`List of condition IDs that must be satisfied for this trigger to fire.`TriggerTargetType`[`EB1TriggerTargetType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1triggertargettype)The type of target this trigger acts upon.`TriggerTimeRange``FB1TriggerTimeRange[]`List of in-game time ranges during which this trigger is active.`bUseGlobalRule``boolean`Whether to apply global cooldown rules and participate in automatic hourly checks (false = manual trigger only, no cooldown). |
| `TriggerConditionIds``string[]`List of condition IDs that must be satisfied for this trigger to fire.`TriggerTargetType`[`EB1TriggerTargetType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1triggertargettype)The type of target this trigger acts upon.`TriggerTimeRange``FB1TriggerTimeRange[]`List of in-game time ranges during which this trigger is active.`bUseGlobalRule``boolean`Whether to apply global cooldown rules and participate in automatic hourly checks (false = manual trigger only, no cooldown). |
| `TriggerTargetType`[`EB1TriggerTargetType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1triggertargettype)The type of target this trigger acts upon.`TriggerTimeRange``FB1TriggerTimeRange[]`List of in-game time ranges during which this trigger is active.`bUseGlobalRule``boolean`Whether to apply global cooldown rules and participate in automatic hourly checks (false = manual trigger only, no cooldown). |
| `TriggerTimeRange``FB1TriggerTimeRange[]`List of in-game time ranges during which this trigger is active.`bUseGlobalRule``boolean`Whether to apply global cooldown rules and participate in automatic hourly checks (false = manual trigger only, no cooldown). |
| `bUseGlobalRule``boolean`Whether to apply global cooldown rules and participate in automatic hourly checks (false = manual trigger only, no cooldown). |
