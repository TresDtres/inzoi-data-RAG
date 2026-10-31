---
document_id: "57c0075bc22f0ed350597e8a23582a5406e7a92c0d0b156333fad7bac53633e0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household-biz/household-biz-list-employees"
title: "household_biz.list_employees"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:05+00:00"
content_sha256: "3b01f6c883772b4284a106075975a701f4942c44bb079c94a38beec525e3ea9e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household-biz/household-biz-list-employees"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns all employees of a household business with their role info.

# Metadata

| FieldValueDisplayList EmployeesCategory`household_biz`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayList EmployeesCategory`household_biz`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`household_biz`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionhousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| --- |
| household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |

# Usage

```
await inzoi.cli.execute('household_biz.list_employees', {  household_biz_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
