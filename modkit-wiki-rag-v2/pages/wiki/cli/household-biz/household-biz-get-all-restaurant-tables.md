---
document_id: "8a8a5df4b8fc62d7fc0d717f4418cb51d332d2210f2111159b2442862dc2422a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household-biz/household-biz-get-all-restaurant-tables"
title: "household_biz.get_all_restaurant_tables"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:03+00:00"
content_sha256: "b59b5a435221f1fea933b4e49679520f5666133e8375cebcdf0b5c78cd6c999b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household-biz/household-biz-get-all-restaurant-tables"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns entity ids of all restaurant tables at this business's site (BL-58467). The table itself needs no object tag, but it must have at least one connected chair with the Seat object tag and an Interaction slot.

# Metadata

| FieldValueDisplayGet All Restaurant TablesCategory`household_biz`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayGet All Restaurant TablesCategory`household_biz`Access`Public`Scope`B2Authority`Tags—Aliases— |
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
await inzoi.cli.execute('household_biz.get_all_restaurant_tables', {  household_biz_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
