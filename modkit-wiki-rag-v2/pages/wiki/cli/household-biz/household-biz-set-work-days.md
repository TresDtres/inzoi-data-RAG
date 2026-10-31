---
document_id: "8f759e5c0fb08ef4843364f94c594d5fd5bf88ff9768539db23738d7ff8c7665"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household-biz/household-biz-set-work-days"
title: "household_biz.set_work_days"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:05+00:00"
content_sha256: "ff7cc79b81e53ddd199f523451807a608dafe0dfff2424bf5285e3f0c6eabc33"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household-biz/household-biz-set-work-days"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Sets the weekly operating days for a household business.

# Metadata

| FieldValueDisplaySet Work DaysCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplaySet Work DaysCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptiondaysstringyes—Comma-separated day names, e.g. Sunday,Monday,Tuesdayhousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| --- |
| daysstringyes—Comma-separated day names, e.g. Sunday,Monday,Tuesdayhousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |

# Usage

```
await inzoi.cli.execute('household_biz.set_work_days', {  days: '',  household_biz_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
