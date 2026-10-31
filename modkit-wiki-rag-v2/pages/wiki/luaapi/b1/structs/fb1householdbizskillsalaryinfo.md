---
document_id: "b240aae427812696b10a9792985507a38c4712dcfe20920caa71ca76f0fc2171"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1householdbizskillsalaryinfo"
title: "FB1HouseholdBizSkillSalaryInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:08+00:00"
content_sha256: "8e31257f836cb8676c3755936650a2f9ca5325388b3d9b5da22ad200f9941753"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1householdbizskillsalaryinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Maps a minimum employee skill level to a salary multiplier, used to scale hourly wages based on the highest skill level an employee has attained.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`SalaryMultiplier``number`Multiplier applied to the base hourly wage when the employee's skill level meets this threshold (1.0 = no change).`SkillLevel``integer`Minimum skill level at or above which this salary multiplier applies. |
| --- |
| `SalaryMultiplier``number`Multiplier applied to the base hourly wage when the employee's skill level meets this threshold (1.0 = no change).`SkillLevel``integer`Minimum skill level at or above which this salary multiplier applies. |
| `SkillLevel``integer`Minimum skill level at or above which this salary multiplier applies. |
