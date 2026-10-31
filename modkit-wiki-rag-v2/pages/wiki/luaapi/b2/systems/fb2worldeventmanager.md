---
document_id: "7457aa940557641f11df90f2460e38d00ffa6c4d2524695ad7b674667418ac5c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2worldeventmanager"
title: "FB2WorldEventManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:45:01+00:00"
content_sha256: "f11b6952b5585df39e3f96425d62c26bb5426f785ed24ed70d0dd0d08e473195"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2worldeventmanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manages world events.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2WorldEventManager')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2WorldEventManager')` |
| EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2WorldEventManager')` |
| Category`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2WorldEventManager')` |
| Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2WorldEventManager')` |
| Require`require('Systems.B2WorldEventManager')` |

# Properties (1)

| NameTypeDescription`EventTriggerInfos``FB2EventTriggerInfo[]` |
| --- |
| `EventTriggerInfos``FB2EventTriggerInfo[]` |

# Functions (2)

| FunctionParametersReturnsDescription`LoadEventTriggerJsonFile``-``-`Loads Event Trigger Json File.`OnTimeChanged`InHour: `integer`, InMinute: `integer``-`Callback invoked on Time Changed. |
| --- |
| `LoadEventTriggerJsonFile``-``-`Loads Event Trigger Json File.`OnTimeChanged`InHour: `integer`, InMinute: `integer``-`Callback invoked on Time Changed. |
| `OnTimeChanged`InHour: `integer`, InMinute: `integer``-`Callback invoked on Time Changed. |

# Override points (2)

Implement these in Lua as `FB2WorldEventManager.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_LoadEventTriggerJsonFile``-``-`Loads Event Trigger Json File.`Override_OnTimeChanged`InHour: `integer`, InMinute: `integer``-`Callback invoked on Time Changed. |
| --- |
| `Override_LoadEventTriggerJsonFile``-``-`Loads Event Trigger Json File.`Override_OnTimeChanged`InHour: `integer`, InMinute: `integer``-`Callback invoked on Time Changed. |
| `Override_OnTimeChanged`InHour: `integer`, InMinute: `integer``-`Callback invoked on Time Changed. |
