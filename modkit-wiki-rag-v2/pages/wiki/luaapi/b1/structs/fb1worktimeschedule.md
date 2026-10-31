---
document_id: "f9480693a0850e04d5b01eb8c74ebc008a2776a866f79e851a1e11239558625a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1worktimeschedule"
title: "FB1WorkTimeSchedule"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:51+00:00"
content_sha256: "8be6596d1ca15fdd0ffc85e3ff4456d94602a669fa58ebe0853ddd0649d28e9f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1worktimeschedule"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines the working hours and associated mission for a single day of the week within a work shift.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`DayOfWeek`[`EB1DayOfWeek`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1dayofweek)Day of the week this schedule applies to.`EndTime``integer`Work end time in HHMM format (0-2359).`MaxExtraWorkMinute``integer`Maximum allowed overtime in minutes.`StartTime``integer`Work start time in HHMM format (0-2359).`WorkMissionId``string`Mission ID associated with this work schedule slot. |
| --- |
| `DayOfWeek`[`EB1DayOfWeek`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1dayofweek)Day of the week this schedule applies to.`EndTime``integer`Work end time in HHMM format (0-2359).`MaxExtraWorkMinute``integer`Maximum allowed overtime in minutes.`StartTime``integer`Work start time in HHMM format (0-2359).`WorkMissionId``string`Mission ID associated with this work schedule slot. |
| `EndTime``integer`Work end time in HHMM format (0-2359).`MaxExtraWorkMinute``integer`Maximum allowed overtime in minutes.`StartTime``integer`Work start time in HHMM format (0-2359).`WorkMissionId``string`Mission ID associated with this work schedule slot. |
| `MaxExtraWorkMinute``integer`Maximum allowed overtime in minutes.`StartTime``integer`Work start time in HHMM format (0-2359).`WorkMissionId``string`Mission ID associated with this work schedule slot. |
| `StartTime``integer`Work start time in HHMM format (0-2359).`WorkMissionId``string`Mission ID associated with this work schedule slot. |
| `WorkMissionId``string`Mission ID associated with this work schedule slot. |
