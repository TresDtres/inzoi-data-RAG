---
document_id: "2fa4a7952c876b98713ed4d0dd1737e3df22a3fcdb3f1e087e2c8a18324a76d7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1schoolweeklyresult"
title: "FB1SchoolWeeklyResult"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:21+00:00"
content_sha256: "fa64ed15eb1e6e3a0cf24c8688735f7d82316ccf637ab4c6dc943ba5a9ac0eff"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1schoolweeklyresult"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- One week's evaluation result. Per-item scores + total score + grade. One is produced each Friday in FinalizeWeeklyEvaluation and permanently kept in WeeklyHistory.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (8)

| NameTypeDescription`AttendanceScore``integer`The attendance score for this week (0~15).`ExamScore``integer`The exam score for this week (0~40, sum of the two slots).`Grade`[`EB1SchoolGrade`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolgrade)The letter grade derived from the total score for this week.`HomeworkScore``integer`The homework score for this week (0~20).`ParticipationScore``integer`The class participation score for this week (0~25).`RelationshipScore``integer`The peer-relationship bonus score for this week (0~10).`TotalScore``integer`The total weekly score, sum of all categories (0~100).`WeekIndex``integer`Week number since school enrollment (from 1). Assigned in FinalizeWeeklyEvaluation as (last entry's WeekIndex + 1) or 1. The number stays continuous even if WeeklyHistory is trimmed beyond DA->MaxWeeklyHistoryCount. |
| --- |
| `AttendanceScore``integer`The attendance score for this week (0~15).`ExamScore``integer`The exam score for this week (0~40, sum of the two slots).`Grade`[`EB1SchoolGrade`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolgrade)The letter grade derived from the total score for this week.`HomeworkScore``integer`The homework score for this week (0~20).`ParticipationScore``integer`The class participation score for this week (0~25).`RelationshipScore``integer`The peer-relationship bonus score for this week (0~10).`TotalScore``integer`The total weekly score, sum of all categories (0~100).`WeekIndex``integer`Week number since school enrollment (from 1). Assigned in FinalizeWeeklyEvaluation as (last entry's WeekIndex + 1) or 1. The number stays continuous even if WeeklyHistory is trimmed beyond DA->MaxWeeklyHistoryCount. |
| `ExamScore``integer`The exam score for this week (0~40, sum of the two slots).`Grade`[`EB1SchoolGrade`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolgrade)The letter grade derived from the total score for this week.`HomeworkScore``integer`The homework score for this week (0~20).`ParticipationScore``integer`The class participation score for this week (0~25).`RelationshipScore``integer`The peer-relationship bonus score for this week (0~10).`TotalScore``integer`The total weekly score, sum of all categories (0~100).`WeekIndex``integer`Week number since school enrollment (from 1). Assigned in FinalizeWeeklyEvaluation as (last entry's WeekIndex + 1) or 1. The number stays continuous even if WeeklyHistory is trimmed beyond DA->MaxWeeklyHistoryCount. |
| `Grade`[`EB1SchoolGrade`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolgrade)The letter grade derived from the total score for this week.`HomeworkScore``integer`The homework score for this week (0~20).`ParticipationScore``integer`The class participation score for this week (0~25).`RelationshipScore``integer`The peer-relationship bonus score for this week (0~10).`TotalScore``integer`The total weekly score, sum of all categories (0~100).`WeekIndex``integer`Week number since school enrollment (from 1). Assigned in FinalizeWeeklyEvaluation as (last entry's WeekIndex + 1) or 1. The number stays continuous even if WeeklyHistory is trimmed beyond DA->MaxWeeklyHistoryCount. |
| `HomeworkScore``integer`The homework score for this week (0~20).`ParticipationScore``integer`The class participation score for this week (0~25).`RelationshipScore``integer`The peer-relationship bonus score for this week (0~10).`TotalScore``integer`The total weekly score, sum of all categories (0~100).`WeekIndex``integer`Week number since school enrollment (from 1). Assigned in FinalizeWeeklyEvaluation as (last entry's WeekIndex + 1) or 1. The number stays continuous even if WeeklyHistory is trimmed beyond DA->MaxWeeklyHistoryCount. |
| `ParticipationScore``integer`The class participation score for this week (0~25).`RelationshipScore``integer`The peer-relationship bonus score for this week (0~10).`TotalScore``integer`The total weekly score, sum of all categories (0~100).`WeekIndex``integer`Week number since school enrollment (from 1). Assigned in FinalizeWeeklyEvaluation as (last entry's WeekIndex + 1) or 1. The number stays continuous even if WeeklyHistory is trimmed beyond DA->MaxWeeklyHistoryCount. |
| `RelationshipScore``integer`The peer-relationship bonus score for this week (0~10).`TotalScore``integer`The total weekly score, sum of all categories (0~100).`WeekIndex``integer`Week number since school enrollment (from 1). Assigned in FinalizeWeeklyEvaluation as (last entry's WeekIndex + 1) or 1. The number stays continuous even if WeeklyHistory is trimmed beyond DA->MaxWeeklyHistoryCount. |
| `TotalScore``integer`The total weekly score, sum of all categories (0~100).`WeekIndex``integer`Week number since school enrollment (from 1). Assigned in FinalizeWeeklyEvaluation as (last entry's WeekIndex + 1) or 1. The number stays continuous even if WeeklyHistory is trimmed beyond DA->MaxWeeklyHistoryCount. |
| `WeekIndex``integer`Week number since school enrollment (from 1). Assigned in FinalizeWeeklyEvaluation as (last entry's WeekIndex + 1) or 1. The number stays continuous even if WeeklyHistory is trimmed beyond DA->MaxWeeklyHistoryCount. |
