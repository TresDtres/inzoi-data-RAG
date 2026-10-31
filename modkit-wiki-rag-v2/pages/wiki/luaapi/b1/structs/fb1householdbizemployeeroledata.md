---
document_id: "d9185d0060dd3d9b211e569f27e499b9041065134212d54da7996dee4f1977f9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1householdbizemployeeroledata"
title: "FB1HouseholdBizEmployeeRoleData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:08+00:00"
content_sha256: "abe8c3d824b74e911960cb8c30f0fb09a15d92198bceba354673f4ab5d54196e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1householdbizemployeeroledata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores runtime employee role data including the base template, role name, salary level, recommended activities, and uniform assignment.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (7)

| NameTypeDescription`BaseTemplateId``string`Base template ID used when this role was auto-generated from a template.`RecommendedActivityIdList``string[]`List of recommended activity IDs for this employee role.`RoleNameData`[`FB1DisplayNameData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1displaynamedata)User-defined role name display data (employee activity name).`SalaryLevelType`[`EB1HouseholdBizSalaryLevelType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1householdbizsalaryleveltype)Salary level tier for this employee role.`SkillRecommendSetList``FB1BizEmployeeSkillRecommendSet[]`Weighted skills used to filter and rank employee candidates for this role.`WorkOutfitId``string`Costume ID assigned as the work uniform for this employee role.`WorkTimeData`[`FB1CareerWorkTimeData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1careerworktimedata)Per-employee work schedule (days + hours). Base defaults to the business operating hours; editable per employee. |
| --- |
| `BaseTemplateId``string`Base template ID used when this role was auto-generated from a template.`RecommendedActivityIdList``string[]`List of recommended activity IDs for this employee role.`RoleNameData`[`FB1DisplayNameData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1displaynamedata)User-defined role name display data (employee activity name).`SalaryLevelType`[`EB1HouseholdBizSalaryLevelType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1householdbizsalaryleveltype)Salary level tier for this employee role.`SkillRecommendSetList``FB1BizEmployeeSkillRecommendSet[]`Weighted skills used to filter and rank employee candidates for this role.`WorkOutfitId``string`Costume ID assigned as the work uniform for this employee role.`WorkTimeData`[`FB1CareerWorkTimeData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1careerworktimedata)Per-employee work schedule (days + hours). Base defaults to the business operating hours; editable per employee. |
| `RecommendedActivityIdList``string[]`List of recommended activity IDs for this employee role.`RoleNameData`[`FB1DisplayNameData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1displaynamedata)User-defined role name display data (employee activity name).`SalaryLevelType`[`EB1HouseholdBizSalaryLevelType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1householdbizsalaryleveltype)Salary level tier for this employee role.`SkillRecommendSetList``FB1BizEmployeeSkillRecommendSet[]`Weighted skills used to filter and rank employee candidates for this role.`WorkOutfitId``string`Costume ID assigned as the work uniform for this employee role.`WorkTimeData`[`FB1CareerWorkTimeData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1careerworktimedata)Per-employee work schedule (days + hours). Base defaults to the business operating hours; editable per employee. |
| `RoleNameData`[`FB1DisplayNameData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1displaynamedata)User-defined role name display data (employee activity name).`SalaryLevelType`[`EB1HouseholdBizSalaryLevelType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1householdbizsalaryleveltype)Salary level tier for this employee role.`SkillRecommendSetList``FB1BizEmployeeSkillRecommendSet[]`Weighted skills used to filter and rank employee candidates for this role.`WorkOutfitId``string`Costume ID assigned as the work uniform for this employee role.`WorkTimeData`[`FB1CareerWorkTimeData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1careerworktimedata)Per-employee work schedule (days + hours). Base defaults to the business operating hours; editable per employee. |
| `SalaryLevelType`[`EB1HouseholdBizSalaryLevelType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1householdbizsalaryleveltype)Salary level tier for this employee role.`SkillRecommendSetList``FB1BizEmployeeSkillRecommendSet[]`Weighted skills used to filter and rank employee candidates for this role.`WorkOutfitId``string`Costume ID assigned as the work uniform for this employee role.`WorkTimeData`[`FB1CareerWorkTimeData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1careerworktimedata)Per-employee work schedule (days + hours). Base defaults to the business operating hours; editable per employee. |
| `SkillRecommendSetList``FB1BizEmployeeSkillRecommendSet[]`Weighted skills used to filter and rank employee candidates for this role.`WorkOutfitId``string`Costume ID assigned as the work uniform for this employee role.`WorkTimeData`[`FB1CareerWorkTimeData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1careerworktimedata)Per-employee work schedule (days + hours). Base defaults to the business operating hours; editable per employee. |
| `WorkOutfitId``string`Costume ID assigned as the work uniform for this employee role.`WorkTimeData`[`FB1CareerWorkTimeData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1careerworktimedata)Per-employee work schedule (days + hours). Base defaults to the business operating hours; editable per employee. |
| `WorkTimeData`[`FB1CareerWorkTimeData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1careerworktimedata)Per-employee work schedule (days + hours). Base defaults to the business operating hours; editable per employee. |
