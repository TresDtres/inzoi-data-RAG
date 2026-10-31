---
document_id: "555ddaf9358f331ff66ec3aa1467b1c230854f44170a69c4f39279c1cd1dbf80"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1dayscheduleinfo"
title: "FB1DayScheduleInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:40+00:00"
content_sha256: "de828c28f9d7f6120a1e7c59cad5d268abae6dfb684d70a8bbb814532f3b1481"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1dayscheduleinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a single time slot in a day schedule, including start/end times and associated scripts and mission.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`BeginTime``integer`The start time of this schedule slot in HHMM format.`EndTime``integer`The end time of this schedule slot in HHMM format.`FinishScriptId``string`The script ID executed when this schedule slot finishes.`MissionInfo`[`FB1ScheduleMissionInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1schedulemissioninfo)Mission information tied to this schedule slot.`StartScriptId``string`The script ID executed when this schedule slot begins. |
| --- |
| `BeginTime``integer`The start time of this schedule slot in HHMM format.`EndTime``integer`The end time of this schedule slot in HHMM format.`FinishScriptId``string`The script ID executed when this schedule slot finishes.`MissionInfo`[`FB1ScheduleMissionInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1schedulemissioninfo)Mission information tied to this schedule slot.`StartScriptId``string`The script ID executed when this schedule slot begins. |
| `EndTime``integer`The end time of this schedule slot in HHMM format.`FinishScriptId``string`The script ID executed when this schedule slot finishes.`MissionInfo`[`FB1ScheduleMissionInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1schedulemissioninfo)Mission information tied to this schedule slot.`StartScriptId``string`The script ID executed when this schedule slot begins. |
| `FinishScriptId``string`The script ID executed when this schedule slot finishes.`MissionInfo`[`FB1ScheduleMissionInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1schedulemissioninfo)Mission information tied to this schedule slot.`StartScriptId``string`The script ID executed when this schedule slot begins. |
| `MissionInfo`[`FB1ScheduleMissionInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1schedulemissioninfo)Mission information tied to this schedule slot.`StartScriptId``string`The script ID executed when this schedule slot begins. |
| `StartScriptId``string`The script ID executed when this schedule slot begins. |
