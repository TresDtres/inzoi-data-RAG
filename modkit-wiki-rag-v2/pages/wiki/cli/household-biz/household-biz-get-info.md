---
document_id: "97e9eacf5923b267f55dd9b0ed95bb918ee05a5f8acad22e44c769eac1fa26d0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household-biz/household-biz-get-info"
title: "household_biz.get_info"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:04+00:00"
content_sha256: "b35fbba3b14173389d607c0a82686100216c4c0ff35889c9a6b36cf30b0aa308"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household-biz/household-biz-get-info"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns core business info (template, fees, work time, level, operating state).

# Metadata

| FieldValueDisplayGet HouseholdBiz InfoCategory`household_biz`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayGet HouseholdBiz InfoCategory`household_biz`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`household_biz`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionhousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed character's managed/located business) |
| --- |
| household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed character's managed/located business) |

# Usage

```
await inzoi.cli.execute('household_biz.get_info', {  household_biz_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
