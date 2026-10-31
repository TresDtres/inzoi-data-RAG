---
document_id: "92d7569649751906ab8d6af97e45b800840547109bbcc7bc409c4333c34c0cf3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household-biz/household-biz-fire-employee"
title: "household_biz.fire_employee"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:03+00:00"
content_sha256: "a266d9c0799a05206bc872c067e315ac98857bcb632e5c0565c7da5b012350c9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household-biz/household-biz-fire-employee"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Fires an employee from a household business.

# Metadata

| FieldValueDisplayFire EmployeeCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayFire EmployeeCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptioncandidate_identityIdyes—Employee entity id to firehousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| --- |
| candidate_identityIdyes—Employee entity id to firehousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |

# Usage

```
await inzoi.cli.execute('household_biz.fire_employee', {  candidate_id: 0,  household_biz_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
