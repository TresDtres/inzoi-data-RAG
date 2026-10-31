---
document_id: "6a8d73cfd36830cfb4fbdbe6cac84f2913504d15fdff3a70a6b8c3dd759ae258"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schedulestudiodata"
title: "B1ScheduleStudioData"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:56:31+00:00"
content_sha256: "fa77ac68d4c93f00aa4c30006ca835e0ff35cc6f7f445890fb28be89aff297e4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1schedulestudiodata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- The schedule data attached to a site, containing actor role assignments and time-slotted actions. * ActorRoles: fixed role assignments per site; ScheduleSlots: per-timeslot role actions. * Multiple instances may exist per Career (e.g., School has Normal + per-class entries).

| PropertyTypeDescriptionMetadataSchoolScheduleTypeEB1SchoolScheduleTypeIdentifies the type and purpose of this schedule data entry.Category: B1ScheduleStudioDataClassIndexint32Class section index. Only meaningful when SchoolScheduleType == School_Class.Category: B1ScheduleStudioDataScheduleIdFName* The original ID of the applied schedule. If provided by a developer, it maps to FB1CustomSchedulePresetTableRow. * If no match is found, it is treated as a user-created custom schedule.Category: B1ScheduleStudioDataActorRolesTArrayThe list of actor roles permanently assigned to this site.Category: B1ScheduleStudioDataScheduleSlotsTArrayThe ordered list of schedule slots defining the daily timetable.Category: B1ScheduleStudioData |
| --- |
| SchoolScheduleTypeEB1SchoolScheduleTypeIdentifies the type and purpose of this schedule data entry.Category: B1ScheduleStudioDataClassIndexint32Class section index. Only meaningful when SchoolScheduleType == School_Class.Category: B1ScheduleStudioDataScheduleIdFName* The original ID of the applied schedule. If provided by a developer, it maps to FB1CustomSchedulePresetTableRow. * If no match is found, it is treated as a user-created custom schedule.Category: B1ScheduleStudioDataActorRolesTArrayThe list of actor roles permanently assigned to this site.Category: B1ScheduleStudioDataScheduleSlotsTArrayThe ordered list of schedule slots defining the daily timetable.Category: B1ScheduleStudioData |
| ClassIndexint32Class section index. Only meaningful when SchoolScheduleType == School_Class.Category: B1ScheduleStudioDataScheduleIdFName* The original ID of the applied schedule. If provided by a developer, it maps to FB1CustomSchedulePresetTableRow. * If no match is found, it is treated as a user-created custom schedule.Category: B1ScheduleStudioDataActorRolesTArrayThe list of actor roles permanently assigned to this site.Category: B1ScheduleStudioDataScheduleSlotsTArrayThe ordered list of schedule slots defining the daily timetable.Category: B1ScheduleStudioData |
| ScheduleIdFName* The original ID of the applied schedule. If provided by a developer, it maps to FB1CustomSchedulePresetTableRow. * If no match is found, it is treated as a user-created custom schedule.Category: B1ScheduleStudioDataActorRolesTArrayThe list of actor roles permanently assigned to this site.Category: B1ScheduleStudioDataScheduleSlotsTArrayThe ordered list of schedule slots defining the daily timetable.Category: B1ScheduleStudioData |
| ActorRolesTArrayThe list of actor roles permanently assigned to this site.Category: B1ScheduleStudioDataScheduleSlotsTArrayThe ordered list of schedule slots defining the daily timetable.Category: B1ScheduleStudioData |
| ScheduleSlotsTArrayThe ordered list of schedule slots defining the daily timetable.Category: B1ScheduleStudioData |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoSchedule[ScheduleInfo Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/scheduleinfo)[FB1Schedule](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schedule)[FB1ScheduleActorRoleAssignment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1scheduleactorroleassignment)[FB1ScheduleActorRolePresetTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1scheduleactorrolepresettablerow)[FB1ScheduleDetail](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1scheduledetail)[FB1ScheduleInfoTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1scheduleinfotablerow)[FB1ScheduleMissionInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schedulemissioninfo)[FB1ScheduleSlotRoleActionData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1scheduleslotroleactiondata)[FB1ScheduleSlotRoleActionPresetData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1scheduleslotroleactionpresetdata)
