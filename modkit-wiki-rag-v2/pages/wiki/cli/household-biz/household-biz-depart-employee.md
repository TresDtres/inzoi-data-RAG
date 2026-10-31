---
document_id: "34124bd7f1e147f91fa973cf7e11c8edf0471432d34a7bbc3b8dd485255f6d9c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household-biz/household-biz-depart-employee"
title: "household_biz.depart_employee"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:03+00:00"
content_sha256: "5137fbdd82f52e4442ef95a1cfdaeef1fecfcdfe893ed5d40635ec918188a654"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household-biz/household-biz-depart-employee"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Makes an employee voluntarily leave (quit) a household business.

# Metadata

| FieldValueDisplayDepart EmployeeCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayDepart EmployeeCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptioncandidate_identityIdyes—Employee entity id to departhousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| --- |
| candidate_identityIdyes—Employee entity id to departhousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |

# Usage

```
await inzoi.cli.execute('household_biz.depart_employee', {  candidate_id: 0,  household_biz_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
