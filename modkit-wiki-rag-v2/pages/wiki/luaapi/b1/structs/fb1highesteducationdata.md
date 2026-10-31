---
document_id: "106850a76e56ffad5ef673cb76f753bfeb7661c0544e14fc38257fca62682e7c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1highesteducationdata"
title: "FB1HighestEducationData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:07+00:00"
content_sha256: "00ae6777427d79e729c25d75bb4355726a16c90c43cb1393e582891e80b8b959"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1highesteducationdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that stores the highest education data for a character. Tracks the education level, achievement rating, and the associated job unlocked by education.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`AchievementRank``integer`Achievement rank at graduation (e.g., Excellent, Good, Poor).`CareerDtId``string`CareerDtId (Company.Id) of the school. NAME_None for legacy saves or NPCs without school assignment.`HighestEducationLevel`[`EB1EducationType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1educationtype)The highest education level the character has reached.`JobId``string`Job ID associated with this education record (references Job.Id).`SchoolGrade`[`EB1SchoolGrade`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolgrade)Final weekly evaluation grade at graduation. None for pre-evaluation-era graduates. |
| --- |
| `AchievementRank``integer`Achievement rank at graduation (e.g., Excellent, Good, Poor).`CareerDtId``string`CareerDtId (Company.Id) of the school. NAME_None for legacy saves or NPCs without school assignment.`HighestEducationLevel`[`EB1EducationType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1educationtype)The highest education level the character has reached.`JobId``string`Job ID associated with this education record (references Job.Id).`SchoolGrade`[`EB1SchoolGrade`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolgrade)Final weekly evaluation grade at graduation. None for pre-evaluation-era graduates. |
| `CareerDtId``string`CareerDtId (Company.Id) of the school. NAME_None for legacy saves or NPCs without school assignment.`HighestEducationLevel`[`EB1EducationType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1educationtype)The highest education level the character has reached.`JobId``string`Job ID associated with this education record (references Job.Id).`SchoolGrade`[`EB1SchoolGrade`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolgrade)Final weekly evaluation grade at graduation. None for pre-evaluation-era graduates. |
| `HighestEducationLevel`[`EB1EducationType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1educationtype)The highest education level the character has reached.`JobId``string`Job ID associated with this education record (references Job.Id).`SchoolGrade`[`EB1SchoolGrade`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolgrade)Final weekly evaluation grade at graduation. None for pre-evaluation-era graduates. |
| `JobId``string`Job ID associated with this education record (references Job.Id).`SchoolGrade`[`EB1SchoolGrade`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolgrade)Final weekly evaluation grade at graduation. None for pre-evaluation-era graduates. |
| `SchoolGrade`[`EB1SchoolGrade`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolgrade)Final weekly evaluation grade at graduation. None for pre-evaluation-era graduates. |
