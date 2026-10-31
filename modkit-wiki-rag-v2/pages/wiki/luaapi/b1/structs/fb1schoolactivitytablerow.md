---
document_id: "e0f1c4a86de658ace3822d1f616ed5493bf3aff323c21ddeb6379d0c9bddbe96"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1schoolactivitytablerow"
title: "FB1SchoolActivityTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:19+00:00"
content_sha256: "a44f76aa6795535dadb62db1ae5f9271cad62f1f86b9bf865ae5c6f87ec88c60"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1schoolactivitytablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- School activity data table row. Defines activity-level properties and per-role action assignments. Each record represents one activity (e.g., Math class, Lunch, Principal patrol, Free_Morning). Referenced by FB1SchoolClassScheduleTableRow via ActivityId in DayActivities.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (3)

| NameTypeDescription`DisplayNameTextId``string`Display name text ID for this activity.`Phase`[`EB1SchoolPhase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolphase)Phase represented by this activity. Class and Exam are treated as class-time phases.`RoleActions``FB1SchoolActivityRoleActionData[]`Per-role action definitions for this activity. |
| --- |
| `DisplayNameTextId``string`Display name text ID for this activity.`Phase`[`EB1SchoolPhase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolphase)Phase represented by this activity. Class and Exam are treated as class-time phases.`RoleActions``FB1SchoolActivityRoleActionData[]`Per-role action definitions for this activity. |
| `Phase`[`EB1SchoolPhase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolphase)Phase represented by this activity. Class and Exam are treated as class-time phases.`RoleActions``FB1SchoolActivityRoleActionData[]`Per-role action definitions for this activity. |
| `RoleActions``FB1SchoolActivityRoleActionData[]`Per-role action definitions for this activity. |
