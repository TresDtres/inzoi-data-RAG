---
document_id: "4ae11c37c6451615bb3f9e115c28af4683fb8f2efdb10bbb32efccc7a67511ef"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1schedulestudiodata"
title: "FB1ScheduleStudioData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:19+00:00"
content_sha256: "08903aed0bcb00cc20467e2c41d69f9424b96c3d66fc4f1a21949a69e363741c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1schedulestudiodata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- The schedule data attached to a site, containing actor role assignments and time-slotted actions. ActorRoles: fixed role assignments per site; ScheduleSlots: per-timeslot role actions. Multiple instances may exist per Career (e.g., School has Normal + per-class entries).

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`ActorRoles``FB1CustomScheduleActorRoleData[]`Fixed role assignments per site (do not change between schedules) The list of actor roles permanently assigned to this site.`ClassIndex``integer`Class section index. Only meaningful when SchoolScheduleType == School_Class.`ScheduleId``string`The original ID of the applied schedule. If provided by a developer, it maps to FB1CustomSchedulePresetTableRow. If no match is found, it is treated as a user-created custom schedule.`ScheduleSlots``FB1CustomScheduleSlotData[]`Timetable The ordered list of schedule slots defining the daily timetable.`SchoolScheduleType`[`EB1SchoolScheduleType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolscheduletype)Identifies the type and purpose of this schedule data entry. |
| --- |
| `ActorRoles``FB1CustomScheduleActorRoleData[]`Fixed role assignments per site (do not change between schedules) The list of actor roles permanently assigned to this site.`ClassIndex``integer`Class section index. Only meaningful when SchoolScheduleType == School_Class.`ScheduleId``string`The original ID of the applied schedule. If provided by a developer, it maps to FB1CustomSchedulePresetTableRow. If no match is found, it is treated as a user-created custom schedule.`ScheduleSlots``FB1CustomScheduleSlotData[]`Timetable The ordered list of schedule slots defining the daily timetable.`SchoolScheduleType`[`EB1SchoolScheduleType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolscheduletype)Identifies the type and purpose of this schedule data entry. |
| `ClassIndex``integer`Class section index. Only meaningful when SchoolScheduleType == School_Class.`ScheduleId``string`The original ID of the applied schedule. If provided by a developer, it maps to FB1CustomSchedulePresetTableRow. If no match is found, it is treated as a user-created custom schedule.`ScheduleSlots``FB1CustomScheduleSlotData[]`Timetable The ordered list of schedule slots defining the daily timetable.`SchoolScheduleType`[`EB1SchoolScheduleType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolscheduletype)Identifies the type and purpose of this schedule data entry. |
| `ScheduleId``string`The original ID of the applied schedule. If provided by a developer, it maps to FB1CustomSchedulePresetTableRow. If no match is found, it is treated as a user-created custom schedule.`ScheduleSlots``FB1CustomScheduleSlotData[]`Timetable The ordered list of schedule slots defining the daily timetable.`SchoolScheduleType`[`EB1SchoolScheduleType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolscheduletype)Identifies the type and purpose of this schedule data entry. |
| `ScheduleSlots``FB1CustomScheduleSlotData[]`Timetable The ordered list of schedule slots defining the daily timetable.`SchoolScheduleType`[`EB1SchoolScheduleType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolscheduletype)Identifies the type and purpose of this schedule data entry. |
| `SchoolScheduleType`[`EB1SchoolScheduleType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolscheduletype)Identifies the type and purpose of this schedule data entry. |
