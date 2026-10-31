---
document_id: "4aa733f8a128367503e5f3272e0390e9519e32eb1692a34c3add86f6471765f7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2eventtriggermanager"
title: "FB2EventTriggerManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:58+00:00"
content_sha256: "0ee3100662c316f015797c3b8b0f1dcbeb24bbbeb3ef5eab93dfe4480e2efe54"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2eventtriggermanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manages event triggers.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2EventTriggerManager')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2EventTriggerManager')` |
| EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2EventTriggerManager')` |
| Category`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2EventTriggerManager')` |
| Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2EventTriggerManager')` |
| Require`require('Systems.B2EventTriggerManager')` |

# Properties (10)

| NameTypeDescription`IndividualTriggerCoolTimes``table<FB1EntityId, FB2IndividualTriggerCoolTimes>``SavedTriggerCandidateEvents``FB2TriggerCandidateEvent[]``SelfCandidateIndex``integer``SelfCandidates``FB1EntityId[]``SelfHourlyEventTriggerIndex``integer``TargetCandidateIndex``integer``TargetCandidates``FB1EntityId[]``TargetHourlyEventTriggerIndex``integer``TestNumPerTick``integer`Consider saving this (e.g. for the case where it ended midway).`TriggerCoolTimeMap``table<FB1EntityId, integer>` |
| --- |
| `IndividualTriggerCoolTimes``table<FB1EntityId, FB2IndividualTriggerCoolTimes>``SavedTriggerCandidateEvents``FB2TriggerCandidateEvent[]``SelfCandidateIndex``integer``SelfCandidates``FB1EntityId[]``SelfHourlyEventTriggerIndex``integer``TargetCandidateIndex``integer``TargetCandidates``FB1EntityId[]``TargetHourlyEventTriggerIndex``integer``TestNumPerTick``integer`Consider saving this (e.g. for the case where it ended midway).`TriggerCoolTimeMap``table<FB1EntityId, integer>` |
| `SavedTriggerCandidateEvents``FB2TriggerCandidateEvent[]``SelfCandidateIndex``integer``SelfCandidates``FB1EntityId[]``SelfHourlyEventTriggerIndex``integer``TargetCandidateIndex``integer``TargetCandidates``FB1EntityId[]``TargetHourlyEventTriggerIndex``integer``TestNumPerTick``integer`Consider saving this (e.g. for the case where it ended midway).`TriggerCoolTimeMap``table<FB1EntityId, integer>` |
| `SelfCandidateIndex``integer``SelfCandidates``FB1EntityId[]``SelfHourlyEventTriggerIndex``integer``TargetCandidateIndex``integer``TargetCandidates``FB1EntityId[]``TargetHourlyEventTriggerIndex``integer``TestNumPerTick``integer`Consider saving this (e.g. for the case where it ended midway).`TriggerCoolTimeMap``table<FB1EntityId, integer>` |
| `SelfCandidates``FB1EntityId[]``SelfHourlyEventTriggerIndex``integer``TargetCandidateIndex``integer``TargetCandidates``FB1EntityId[]``TargetHourlyEventTriggerIndex``integer``TestNumPerTick``integer`Consider saving this (e.g. for the case where it ended midway).`TriggerCoolTimeMap``table<FB1EntityId, integer>` |
| `SelfHourlyEventTriggerIndex``integer``TargetCandidateIndex``integer``TargetCandidates``FB1EntityId[]``TargetHourlyEventTriggerIndex``integer``TestNumPerTick``integer`Consider saving this (e.g. for the case where it ended midway).`TriggerCoolTimeMap``table<FB1EntityId, integer>` |
| `TargetCandidateIndex``integer``TargetCandidates``FB1EntityId[]``TargetHourlyEventTriggerIndex``integer``TestNumPerTick``integer`Consider saving this (e.g. for the case where it ended midway).`TriggerCoolTimeMap``table<FB1EntityId, integer>` |
| `TargetCandidates``FB1EntityId[]``TargetHourlyEventTriggerIndex``integer``TestNumPerTick``integer`Consider saving this (e.g. for the case where it ended midway).`TriggerCoolTimeMap``table<FB1EntityId, integer>` |
| `TargetHourlyEventTriggerIndex``integer``TestNumPerTick``integer`Consider saving this (e.g. for the case where it ended midway).`TriggerCoolTimeMap``table<FB1EntityId, integer>` |
| `TestNumPerTick``integer`Consider saving this (e.g. for the case where it ended midway).`TriggerCoolTimeMap``table<FB1EntityId, integer>` |
| `TriggerCoolTimeMap``table<FB1EntityId, integer>` |

# Functions (3)

| FunctionParametersReturnsDescription`ExecuteEventTriggerForCalendar`InEventTriggerId: `string``-``ExecuteEventTriggerForCheat`InEventTriggerId: `string`, InSelfEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InTargetEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-``OnHourChanged`InPrevTime: `FDateTime`, InCurrentTime: `FDateTime``-`Callback invoked on Hour Changed. |
| --- |
| `ExecuteEventTriggerForCalendar`InEventTriggerId: `string``-``ExecuteEventTriggerForCheat`InEventTriggerId: `string`, InSelfEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InTargetEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-``OnHourChanged`InPrevTime: `FDateTime`, InCurrentTime: `FDateTime``-`Callback invoked on Hour Changed. |
| `ExecuteEventTriggerForCheat`InEventTriggerId: `string`, InSelfEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InTargetEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-``OnHourChanged`InPrevTime: `FDateTime`, InCurrentTime: `FDateTime``-`Callback invoked on Hour Changed. |
| `OnHourChanged`InPrevTime: `FDateTime`, InCurrentTime: `FDateTime``-`Callback invoked on Hour Changed. |

# Override points (3)

Implement these in Lua as `FB2EventTriggerManager.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_ExecuteEventTriggerForCalendar`InEventTriggerId: `string``-``Override_ExecuteEventTriggerForCheat`InEventTriggerId: `string`, InSelfEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InTargetEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-``Override_OnHourChanged`InPrevTime: `FDateTime`, InCurrentTime: `FDateTime``-`Callback invoked on Hour Changed. |
| --- |
| `Override_ExecuteEventTriggerForCalendar`InEventTriggerId: `string``-``Override_ExecuteEventTriggerForCheat`InEventTriggerId: `string`, InSelfEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InTargetEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-``Override_OnHourChanged`InPrevTime: `FDateTime`, InCurrentTime: `FDateTime``-`Callback invoked on Hour Changed. |
| `Override_ExecuteEventTriggerForCheat`InEventTriggerId: `string`, InSelfEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InTargetEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-``Override_OnHourChanged`InPrevTime: `FDateTime`, InCurrentTime: `FDateTime``-`Callback invoked on Hour Changed. |
| `Override_OnHourChanged`InPrevTime: `FDateTime`, InCurrentTime: `FDateTime``-`Callback invoked on Hour Changed. |
