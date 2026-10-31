---
document_id: "60ed0fc988ea6958bc4f2ae6cc383bba6758f8fc4a126e42ea6633dddafc3eb1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1scheduledexamdata"
title: "FB1ScheduledExamData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:19+00:00"
content_sha256: "66b7a82605bb67a9237c12fc098087bef678e1f66c7f10449933fbc8c853351f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1scheduledexamdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Exam pre-registration runtime data. Pre-registration purpose: calendar display + DaysUntilSiteEvent condition behavior (e.g. an expectation firing 3 days before the exam).

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`PreRegistrationTimeTaskId`[`FB1TimeTaskId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timetaskid)The TimeTask that performs the exam pre-registration; Invalid when none is scheduled.`SiteEventIdsBySection``table<integer, FB1SchoolSectionExamList>`The pre-registered exam SiteEventIds keyed by class section index. |
| --- |
| `PreRegistrationTimeTaskId`[`FB1TimeTaskId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timetaskid)The TimeTask that performs the exam pre-registration; Invalid when none is scheduled.`SiteEventIdsBySection``table<integer, FB1SchoolSectionExamList>`The pre-registered exam SiteEventIds keyed by class section index. |
| `SiteEventIdsBySection``table<integer, FB1SchoolSectionExamList>`The pre-registered exam SiteEventIds keyed by class section index. |
