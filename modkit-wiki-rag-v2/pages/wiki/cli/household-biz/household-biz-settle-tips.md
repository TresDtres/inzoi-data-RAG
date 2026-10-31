---
document_id: "e6c33f2c23bf81c16e0a9ccf9662f9bfb7c28c44802ee97e6d6060a20d7e5c59"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household-biz/household-biz-settle-tips"
title: "household_biz.settle_tips"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:05+00:00"
content_sha256: "fc090f18e4797bb83f2012d50242fa9810321469c66b92b4401230b127a07fb6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household-biz/household-biz-settle-tips"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Settles the tip bottle and distributes it evenly among currently working employees.

# Metadata

| FieldValueDisplaySettle TipsCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplaySettle TipsCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptioninclude_manager_if_workingboolnotrueWhether to include the manager in the split if they are workinghousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| --- |
| include_manager_if_workingboolnotrueWhether to include the manager in the split if they are workinghousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |

# Usage

```
await inzoi.cli.execute('household_biz.settle_tips', {  include_manager_if_working: true, // optional  household_biz_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
