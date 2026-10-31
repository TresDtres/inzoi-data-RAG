---
document_id: "ffbfc03f25f91f7744fc4c8983f74e423e6d51cc2506856b25a980b9e57c126b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household-biz/household-biz-set-employee-activities"
title: "household_biz.set_employee_activities"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:05+00:00"
content_sha256: "7da8426870e6c2d6784168d726451e17e951ae23d8e27894cd9e8439c767867c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household-biz/household-biz-set-employee-activities"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Sets the assigned activity id list for a household business employee.

# Metadata

| FieldValueDisplaySet Employee ActivitiesCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplaySet Employee ActivitiesCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionemployee_identityIdyes—Employee entity idactivity_idsstringyes—Comma-separated activity idshousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| --- |
| employee_identityIdyes—Employee entity idactivity_idsstringyes—Comma-separated activity idshousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| activity_idsstringyes—Comma-separated activity idshousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |

# Usage

```
await inzoi.cli.execute('household_biz.set_employee_activities', {  employee_id: 0,  activity_ids: '',  household_biz_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
