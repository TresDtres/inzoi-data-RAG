---
document_id: "1c5190159bb9223470ca9fbed05e265169350bd4243ae8b7038e0452f988c7c3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2meetingmanager"
title: "FB2MeetingManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:59+00:00"
content_sha256: "ba0ed1e18d257cf6af4a724a2ead71dbaaefbb1fd0be3e43d5509038f0cd7080"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2meetingmanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manages meetings.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2MeetingManager')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2MeetingManager')` |
| EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2MeetingManager')` |
| Category`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2MeetingManager')` |
| Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2MeetingManager')` |
| Require`require('Systems.B2MeetingManager')` |

# Properties (6)

| NameTypeDescription`CachedDayOfWeek`[`EB1DayOfWeek`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1dayofweek)`MeetingOverrideTimelineEndTime``integer``MeetingOverrideTimelineStartTime``integer``MeetingRequestPossessHouseHoldTime``integer``MeetingWatingData``FB2MeetingWatingData[]``NextMeetingMathcingTicks``integer` |
| --- |
| `CachedDayOfWeek`[`EB1DayOfWeek`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1dayofweek)`MeetingOverrideTimelineEndTime``integer``MeetingOverrideTimelineStartTime``integer``MeetingRequestPossessHouseHoldTime``integer``MeetingWatingData``FB2MeetingWatingData[]``NextMeetingMathcingTicks``integer` |
| `MeetingOverrideTimelineEndTime``integer``MeetingOverrideTimelineStartTime``integer``MeetingRequestPossessHouseHoldTime``integer``MeetingWatingData``FB2MeetingWatingData[]``NextMeetingMathcingTicks``integer` |
| `MeetingOverrideTimelineStartTime``integer``MeetingRequestPossessHouseHoldTime``integer``MeetingWatingData``FB2MeetingWatingData[]``NextMeetingMathcingTicks``integer` |
| `MeetingRequestPossessHouseHoldTime``integer``MeetingWatingData``FB2MeetingWatingData[]``NextMeetingMathcingTicks``integer` |
| `MeetingWatingData``FB2MeetingWatingData[]``NextMeetingMathcingTicks``integer` |
| `NextMeetingMathcingTicks``integer` |

# Functions (3)

| FunctionParametersReturnsDescription`CheckMeetingRule_Common`EntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)[`EB2MeetingCheckResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2meetingcheckresult)Checks Meeting Rule_Common.`CheckMeetingRule_Conditions`SelfEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), TargetEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InConditions: `FB1Condition[]`[`EB2MeetingCheckResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2meetingcheckresult)Checks Meeting Rule_Conditions.`OnDayChanged`InPrevTime: `FDateTime`, InCurrentTime: `FDateTime``-`Callback invoked on Day Changed. |
| --- |
| `CheckMeetingRule_Common`EntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)[`EB2MeetingCheckResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2meetingcheckresult)Checks Meeting Rule_Common.`CheckMeetingRule_Conditions`SelfEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), TargetEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InConditions: `FB1Condition[]`[`EB2MeetingCheckResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2meetingcheckresult)Checks Meeting Rule_Conditions.`OnDayChanged`InPrevTime: `FDateTime`, InCurrentTime: `FDateTime``-`Callback invoked on Day Changed. |
| `CheckMeetingRule_Conditions`SelfEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), TargetEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InConditions: `FB1Condition[]`[`EB2MeetingCheckResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2meetingcheckresult)Checks Meeting Rule_Conditions.`OnDayChanged`InPrevTime: `FDateTime`, InCurrentTime: `FDateTime``-`Callback invoked on Day Changed. |
| `OnDayChanged`InPrevTime: `FDateTime`, InCurrentTime: `FDateTime``-`Callback invoked on Day Changed. |

# Override points (3)

Implement these in Lua as `FB2MeetingManager.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_CheckMeetingRule_Common`EntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)[`EB2MeetingCheckResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2meetingcheckresult)Checks Meeting Rule_Common.`Override_CheckMeetingRule_Conditions`SelfEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), TargetEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InConditions: `FB1Condition[]`[`EB2MeetingCheckResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2meetingcheckresult)Checks Meeting Rule_Conditions.`Override_OnDayChanged`InPrevTime: `FDateTime`, InCurrentTime: `FDateTime``-`Callback invoked on Day Changed. |
| --- |
| `Override_CheckMeetingRule_Common`EntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)[`EB2MeetingCheckResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2meetingcheckresult)Checks Meeting Rule_Common.`Override_CheckMeetingRule_Conditions`SelfEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), TargetEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InConditions: `FB1Condition[]`[`EB2MeetingCheckResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2meetingcheckresult)Checks Meeting Rule_Conditions.`Override_OnDayChanged`InPrevTime: `FDateTime`, InCurrentTime: `FDateTime``-`Callback invoked on Day Changed. |
| `Override_CheckMeetingRule_Conditions`SelfEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), TargetEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InConditions: `FB1Condition[]`[`EB2MeetingCheckResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2meetingcheckresult)Checks Meeting Rule_Conditions.`Override_OnDayChanged`InPrevTime: `FDateTime`, InCurrentTime: `FDateTime``-`Callback invoked on Day Changed. |
| `Override_OnDayChanged`InPrevTime: `FDateTime`, InCurrentTime: `FDateTime``-`Callback invoked on Day Changed. |
