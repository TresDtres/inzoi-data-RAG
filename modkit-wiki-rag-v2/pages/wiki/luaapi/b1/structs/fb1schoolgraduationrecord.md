---
document_id: "d54040b919711794ea0d644df8a039fd11eb5b1f46da23df32c499cd455eecbb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1schoolgraduationrecord"
title: "FB1SchoolGraduationRecord"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:20+00:00"
content_sha256: "86f2c6ddfb7431da412b7aeab3910ae6652f94d738666160e820dd1f21eccb3c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1schoolgraduationrecord"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- A character's single school graduation record. Replaces the Student-type entries (FB1JobInfo) of FB2JobComponent::JobInfos. Mapping from the old FB1JobInfo: JobId <- JobId, AchievementLevel <- Level (used by scripts such as Condition_IsGraduationRank), GraduationTicks <- the current ticks. Used by FB2CareerComponent::GraduationRecords / IsGraduation() / GetGraduationRecord().

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`AchievementRank``integer`The member's Rank at graduation. Comparison value for the Condition_IsGraduationRank script.`CareerDtId``string`CareerDtId (Company.Id) of the graduated school. NAME_None for old saves.`EducationType`[`EB1EducationType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1educationtype)Education type of the graduated school. Stored directly without deriving from JobId.`GraduationTicks``integer`Game ticks at graduation.`JobId``string`Student JobId of the graduated school.`SchoolGrade`[`EB1SchoolGrade`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolgrade)The last weekly evaluation grade at graduation. None for graduates from before the evaluation system. |
| --- |
| `AchievementRank``integer`The member's Rank at graduation. Comparison value for the Condition_IsGraduationRank script.`CareerDtId``string`CareerDtId (Company.Id) of the graduated school. NAME_None for old saves.`EducationType`[`EB1EducationType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1educationtype)Education type of the graduated school. Stored directly without deriving from JobId.`GraduationTicks``integer`Game ticks at graduation.`JobId``string`Student JobId of the graduated school.`SchoolGrade`[`EB1SchoolGrade`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolgrade)The last weekly evaluation grade at graduation. None for graduates from before the evaluation system. |
| `CareerDtId``string`CareerDtId (Company.Id) of the graduated school. NAME_None for old saves.`EducationType`[`EB1EducationType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1educationtype)Education type of the graduated school. Stored directly without deriving from JobId.`GraduationTicks``integer`Game ticks at graduation.`JobId``string`Student JobId of the graduated school.`SchoolGrade`[`EB1SchoolGrade`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolgrade)The last weekly evaluation grade at graduation. None for graduates from before the evaluation system. |
| `EducationType`[`EB1EducationType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1educationtype)Education type of the graduated school. Stored directly without deriving from JobId.`GraduationTicks``integer`Game ticks at graduation.`JobId``string`Student JobId of the graduated school.`SchoolGrade`[`EB1SchoolGrade`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolgrade)The last weekly evaluation grade at graduation. None for graduates from before the evaluation system. |
| `GraduationTicks``integer`Game ticks at graduation.`JobId``string`Student JobId of the graduated school.`SchoolGrade`[`EB1SchoolGrade`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolgrade)The last weekly evaluation grade at graduation. None for graduates from before the evaluation system. |
| `JobId``string`Student JobId of the graduated school.`SchoolGrade`[`EB1SchoolGrade`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolgrade)The last weekly evaluation grade at graduation. None for graduates from before the evaluation system. |
| `SchoolGrade`[`EB1SchoolGrade`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolgrade)The last weekly evaluation grade at graduation. None for graduates from before the evaluation system. |
