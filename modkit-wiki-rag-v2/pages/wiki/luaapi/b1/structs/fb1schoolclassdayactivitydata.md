---
document_id: "cc609572ff95b2485bc6a03cbfa3ef9080aef495b3db458a21286101fdf7eaff"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1schoolclassdayactivitydata"
title: "FB1SchoolClassDayActivityData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:19+00:00"
content_sha256: "dfd857e3b9d1a4952a43e36d4b2028f3f7d51e111198beb9334bc6f757f5ea7b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1schoolclassdayactivitydata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Maps a day of the week to an activity within a schedule slot, with per-day slot-level properties.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`ActivityId``string`Activity ID for this day (e.g., Social, Math, Language, Science, PE, Art, Free_Morning, Free_Lunch, Exam, PrincipalPatrol).`Comment``string`Editor-only note describing this day's activity entry (transient, not used at runtime).`DayOfWeek`[`EB1DayOfWeek`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1dayofweek)Day of the week.`GotoOtherSiteName``string`Site name to move to if different from school site on this day. NAME_None means current site.`RoomPurposeId``string`Room purpose where this slot takes place on this day (e.g., Classroom, ScienceLab, Gym).`bNeedEarlyMove``boolean`Whether students need to move to the location early before this slot starts on this day. |
| --- |
| `ActivityId``string`Activity ID for this day (e.g., Social, Math, Language, Science, PE, Art, Free_Morning, Free_Lunch, Exam, PrincipalPatrol).`Comment``string`Editor-only note describing this day's activity entry (transient, not used at runtime).`DayOfWeek`[`EB1DayOfWeek`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1dayofweek)Day of the week.`GotoOtherSiteName``string`Site name to move to if different from school site on this day. NAME_None means current site.`RoomPurposeId``string`Room purpose where this slot takes place on this day (e.g., Classroom, ScienceLab, Gym).`bNeedEarlyMove``boolean`Whether students need to move to the location early before this slot starts on this day. |
| `Comment``string`Editor-only note describing this day's activity entry (transient, not used at runtime).`DayOfWeek`[`EB1DayOfWeek`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1dayofweek)Day of the week.`GotoOtherSiteName``string`Site name to move to if different from school site on this day. NAME_None means current site.`RoomPurposeId``string`Room purpose where this slot takes place on this day (e.g., Classroom, ScienceLab, Gym).`bNeedEarlyMove``boolean`Whether students need to move to the location early before this slot starts on this day. |
| `DayOfWeek`[`EB1DayOfWeek`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1dayofweek)Day of the week.`GotoOtherSiteName``string`Site name to move to if different from school site on this day. NAME_None means current site.`RoomPurposeId``string`Room purpose where this slot takes place on this day (e.g., Classroom, ScienceLab, Gym).`bNeedEarlyMove``boolean`Whether students need to move to the location early before this slot starts on this day. |
| `GotoOtherSiteName``string`Site name to move to if different from school site on this day. NAME_None means current site.`RoomPurposeId``string`Room purpose where this slot takes place on this day (e.g., Classroom, ScienceLab, Gym).`bNeedEarlyMove``boolean`Whether students need to move to the location early before this slot starts on this day. |
| `RoomPurposeId``string`Room purpose where this slot takes place on this day (e.g., Classroom, ScienceLab, Gym).`bNeedEarlyMove``boolean`Whether students need to move to the location early before this slot starts on this day. |
| `bNeedEarlyMove``boolean`Whether students need to move to the location early before this slot starts on this day. |
