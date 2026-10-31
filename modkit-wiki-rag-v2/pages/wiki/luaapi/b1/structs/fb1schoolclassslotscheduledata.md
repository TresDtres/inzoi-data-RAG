---
document_id: "bae90836e503867d4e02c073a484ab7a3623aac4f154c11856a64d412265244c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1schoolclassslotscheduledata"
title: "FB1SchoolClassSlotScheduleData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:20+00:00"
content_sha256: "7064155e6733812f09ee7855423101add2cb23bfecd983d23f75e86500b838d2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1schoolclassslotscheduledata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Groups a schedule slot with its per-day activity assignments.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`Comment``string`Editor-only note describing this slot schedule entry (transient, not used at runtime).`DayActivities``FB1SchoolClassDayActivityData[]`Per-day activity assignments for this schedule slot.`ScheduleSlotPresetDataId``string`Schedule slot preset data ID referencing a CustomScheduleSlotPresetData entry (e.g., School_Period1, School_Lunch).`SchoolScheduleType`[`EB1SchoolScheduleType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolscheduletype)Identifies which ScheduleStudioData this slot targets (e.g., School_Normal, School_Class, Business). |
| --- |
| `Comment``string`Editor-only note describing this slot schedule entry (transient, not used at runtime).`DayActivities``FB1SchoolClassDayActivityData[]`Per-day activity assignments for this schedule slot.`ScheduleSlotPresetDataId``string`Schedule slot preset data ID referencing a CustomScheduleSlotPresetData entry (e.g., School_Period1, School_Lunch).`SchoolScheduleType`[`EB1SchoolScheduleType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolscheduletype)Identifies which ScheduleStudioData this slot targets (e.g., School_Normal, School_Class, Business). |
| `DayActivities``FB1SchoolClassDayActivityData[]`Per-day activity assignments for this schedule slot.`ScheduleSlotPresetDataId``string`Schedule slot preset data ID referencing a CustomScheduleSlotPresetData entry (e.g., School_Period1, School_Lunch).`SchoolScheduleType`[`EB1SchoolScheduleType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolscheduletype)Identifies which ScheduleStudioData this slot targets (e.g., School_Normal, School_Class, Business). |
| `ScheduleSlotPresetDataId``string`Schedule slot preset data ID referencing a CustomScheduleSlotPresetData entry (e.g., School_Period1, School_Lunch).`SchoolScheduleType`[`EB1SchoolScheduleType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolscheduletype)Identifies which ScheduleStudioData this slot targets (e.g., School_Normal, School_Class, Business). |
| `SchoolScheduleType`[`EB1SchoolScheduleType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolscheduletype)Identifies which ScheduleStudioData this slot targets (e.g., School_Normal, School_Class, Business). |
