---
document_id: "36e0a5f9c2b3c59dcaba96c0305afe207986f80298c42f57e38a485a3aa7cc79"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household-biz/household-biz-get-table-capacity"
title: "household_biz.get_table_capacity"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:04+00:00"
content_sha256: "a3d18da45b6b024ce21f6baba4af5c7136fdc088d5e43af7efa78bba89058e57"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household-biz/household-biz-get-table-capacity"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns the number of connected restaurant seats for a specific table (BL-58467). A connected chair is counted only when it has the Seat object tag and an Interaction slot; standalone chairs are not counted.

# Metadata

| FieldValueDisplayGet Table CapacityCategory`household_biz`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayGet Table CapacityCategory`household_biz`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`household_biz`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptiontable_entity_identityIdyes—Table (desk) object entity idhousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| --- |
| table_entity_identityIdyes—Table (desk) object entity idhousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |

# Usage

```
await inzoi.cli.execute('household_biz.get_table_capacity', {  table_entity_id: 0,  household_biz_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
