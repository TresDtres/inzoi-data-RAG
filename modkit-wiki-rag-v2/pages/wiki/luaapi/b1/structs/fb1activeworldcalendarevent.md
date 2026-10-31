---
document_id: "3493e6ee25af1a193ee3eceb979a008aa03ed46224bd955fb7bf87fef7069cad"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1activeworldcalendarevent"
title: "FB1ActiveWorldCalendarEvent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:09+00:00"
content_sha256: "ff38105fcfd4a6915d80ece1860d779ad03670725e57b3e7a45fdf3d2ce486aa"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1activeworldcalendarevent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Represents an active world calendar event at runtime, holding the event identifier and its associated active script schedules.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`ActivityFeedSchedules``FB1ActivityFeedSchedule[]`List of pending ActivityFeed schedules for this event.`EventId``string`Identifier of the active calendar event.`EventTriggerSchedules``FB1EventTriggerSchedule[]`List of pending EventTrigger schedules for this event.`FxSchedules``FB1ActiveCalendarEventSchedule[]`List of active script schedules associated with this event.`bFinishScriptRun``boolean`Whether the FinishScript has run today (fired once at the schedule EndTime).`bStartScriptRun``boolean`Whether the StartScript has run today (fired once at the schedule StartTime). |
| --- |
| `ActivityFeedSchedules``FB1ActivityFeedSchedule[]`List of pending ActivityFeed schedules for this event.`EventId``string`Identifier of the active calendar event.`EventTriggerSchedules``FB1EventTriggerSchedule[]`List of pending EventTrigger schedules for this event.`FxSchedules``FB1ActiveCalendarEventSchedule[]`List of active script schedules associated with this event.`bFinishScriptRun``boolean`Whether the FinishScript has run today (fired once at the schedule EndTime).`bStartScriptRun``boolean`Whether the StartScript has run today (fired once at the schedule StartTime). |
| `EventId``string`Identifier of the active calendar event.`EventTriggerSchedules``FB1EventTriggerSchedule[]`List of pending EventTrigger schedules for this event.`FxSchedules``FB1ActiveCalendarEventSchedule[]`List of active script schedules associated with this event.`bFinishScriptRun``boolean`Whether the FinishScript has run today (fired once at the schedule EndTime).`bStartScriptRun``boolean`Whether the StartScript has run today (fired once at the schedule StartTime). |
| `EventTriggerSchedules``FB1EventTriggerSchedule[]`List of pending EventTrigger schedules for this event.`FxSchedules``FB1ActiveCalendarEventSchedule[]`List of active script schedules associated with this event.`bFinishScriptRun``boolean`Whether the FinishScript has run today (fired once at the schedule EndTime).`bStartScriptRun``boolean`Whether the StartScript has run today (fired once at the schedule StartTime). |
| `FxSchedules``FB1ActiveCalendarEventSchedule[]`List of active script schedules associated with this event.`bFinishScriptRun``boolean`Whether the FinishScript has run today (fired once at the schedule EndTime).`bStartScriptRun``boolean`Whether the StartScript has run today (fired once at the schedule StartTime). |
| `bFinishScriptRun``boolean`Whether the FinishScript has run today (fired once at the schedule EndTime).`bStartScriptRun``boolean`Whether the StartScript has run today (fired once at the schedule StartTime). |
| `bStartScriptRun``boolean`Whether the StartScript has run today (fired once at the schedule StartTime). |
