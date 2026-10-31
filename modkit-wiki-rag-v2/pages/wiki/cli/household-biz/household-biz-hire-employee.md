---
document_id: "87bed1cb5f31624b00e914644bf8023c42d6e56f8887145a806d5aaf39bf6b09"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household-biz/household-biz-hire-employee"
title: "household_biz.hire_employee"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:04+00:00"
content_sha256: "fb499365e42245038899ed95544e5cce8be2496f08f47b7144a2dd05b971f593"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household-biz/household-biz-hire-employee"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Hires a character as an employee of a household business.

# Metadata

| FieldValueDisplayHire EmployeeCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayHire EmployeeCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptioncandidate_identityIdyes—Character entity id to hiresalary_levelstringnoNormalSalary level (VeryLow/Low/Normal/High/VeryHigh)work_outfit_typestringnoDefaultWork outfit preset typerole_name_text_idstringno—Role display name text idignore_schedule_conflictboolnofalseWhether to ignore work schedule conflictshousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| --- |
| candidate_identityIdyes—Character entity id to hiresalary_levelstringnoNormalSalary level (VeryLow/Low/Normal/High/VeryHigh)work_outfit_typestringnoDefaultWork outfit preset typerole_name_text_idstringno—Role display name text idignore_schedule_conflictboolnofalseWhether to ignore work schedule conflictshousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| salary_levelstringnoNormalSalary level (VeryLow/Low/Normal/High/VeryHigh)work_outfit_typestringnoDefaultWork outfit preset typerole_name_text_idstringno—Role display name text idignore_schedule_conflictboolnofalseWhether to ignore work schedule conflictshousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| work_outfit_typestringnoDefaultWork outfit preset typerole_name_text_idstringno—Role display name text idignore_schedule_conflictboolnofalseWhether to ignore work schedule conflictshousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| role_name_text_idstringno—Role display name text idignore_schedule_conflictboolnofalseWhether to ignore work schedule conflictshousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| ignore_schedule_conflictboolnofalseWhether to ignore work schedule conflictshousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |

# Usage

```
await inzoi.cli.execute('household_biz.hire_employee', {  candidate_id: 0,  salary_level: 'Normal', // optional  work_outfit_type: 'Default', // optional  role_name_text_id: '', // optional  ignore_schedule_conflict: false, // optional  household_biz_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
