---
document_id: "dc0c301304297a4403b01187566dd6ef6ffb4d04160788ccb2ce0ab46ca026e3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1schoolclassscheduledata"
title: "FB1SchoolClassScheduleData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:21+00:00"
content_sha256: "dc273723d043e3b458744e10aabff2321d546c0993d75ca25b74bb1f7eefad98"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1schoolclassscheduledata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Per-class section schedule data. Groups a class index with its slot schedules.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`ClassIndex``integer`Class section index. School_Class type: 0-based index. School_Normal type: INDEX_NONE(-1).`SlotSchedules``FB1SchoolClassSlotScheduleData[]`Per-slot schedule data containing day-of-week to activity mappings. |
| --- |
| `ClassIndex``integer`Class section index. School_Class type: 0-based index. School_Normal type: INDEX_NONE(-1).`SlotSchedules``FB1SchoolClassSlotScheduleData[]`Per-slot schedule data containing day-of-week to activity mappings. |
| `SlotSchedules``FB1SchoolClassSlotScheduleData[]`Per-slot schedule data containing day-of-week to activity mappings. |
