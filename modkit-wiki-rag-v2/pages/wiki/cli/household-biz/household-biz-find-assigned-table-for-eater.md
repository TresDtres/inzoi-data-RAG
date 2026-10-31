---
document_id: "1591bd95c98eb330981eb4b2b6a43d73be9636d275447699fad75a48d65d9337"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household-biz/household-biz-find-assigned-table-for-eater"
title: "household_biz.find_assigned_table_for_eater"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:03+00:00"
content_sha256: "a87e39d923374911b33c5bef23159088415c4350b1cefd1fec6077663f13d7fe"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household-biz/household-biz-find-assigned-table-for-eater"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns the table entity id currently registered to the given eater, if any (BL-58467).

# Metadata

| FieldValueDisplayFind Assigned Table For EaterCategory`household_biz`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayFind Assigned Table For EaterCategory`household_biz`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`household_biz`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptioneater_identityIdyes—Eater (customer) entity idhousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| --- |
| eater_identityIdyes—Eater (customer) entity idhousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |

# Usage

```
await inzoi.cli.execute('household_biz.find_assigned_table_for_eater', {  eater_id: 0,  household_biz_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
