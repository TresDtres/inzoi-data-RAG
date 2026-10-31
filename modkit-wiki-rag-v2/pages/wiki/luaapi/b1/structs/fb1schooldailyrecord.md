---
document_id: "bb5a57a4c5fff76330a4d2bdfe2afa5610323a8dcd511b7aa0c0b1d2bee29d56"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1schooldailyrecord"
title: "FB1SchoolDailyRecord"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:20+00:00"
content_sha256: "fde39b30504f5bf373912788b52ff173b98726ad7044d65a7e4f8ee6e6352153"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1schooldailyrecord"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- One day's school activity record for a single student. Accumulated Mon-Fri in FB1SchoolEvaluationData::DailyRecords[5] and reset every Monday in OnWeekReset.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`Attendance`[`EB1SchoolAttendance`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolattendance)The attendance status recorded for this day.`Homework`[`EB1SchoolHomeworkResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolhomeworkresult)The homework result recorded for this day.`NegativeRelationEvents``integer`The count of negative peer interactions recorded this day.`PositiveRelationEvents``integer`Record of positive/negative interactions with students that day. Used for weekday feedback wall-post priority and to compute the weekly RelationshipScore (0-10). |
| --- |
| `Attendance`[`EB1SchoolAttendance`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolattendance)The attendance status recorded for this day.`Homework`[`EB1SchoolHomeworkResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolhomeworkresult)The homework result recorded for this day.`NegativeRelationEvents``integer`The count of negative peer interactions recorded this day.`PositiveRelationEvents``integer`Record of positive/negative interactions with students that day. Used for weekday feedback wall-post priority and to compute the weekly RelationshipScore (0-10). |
| `Homework`[`EB1SchoolHomeworkResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolhomeworkresult)The homework result recorded for this day.`NegativeRelationEvents``integer`The count of negative peer interactions recorded this day.`PositiveRelationEvents``integer`Record of positive/negative interactions with students that day. Used for weekday feedback wall-post priority and to compute the weekly RelationshipScore (0-10). |
| `NegativeRelationEvents``integer`The count of negative peer interactions recorded this day.`PositiveRelationEvents``integer`Record of positive/negative interactions with students that day. Used for weekday feedback wall-post priority and to compute the weekly RelationshipScore (0-10). |
| `PositiveRelationEvents``integer`Record of positive/negative interactions with students that day. Used for weekday feedback wall-post priority and to compute the weekly RelationshipScore (0-10). |
