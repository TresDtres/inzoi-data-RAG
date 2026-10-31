---
document_id: "03e6671f7aef91794f3bccec4b32a895703a19486e8a9ca651e232795705dc08"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household-biz/household-biz-get-restaurant-dish-batches"
title: "household_biz.get_restaurant_dish_batches"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:04+00:00"
content_sha256: "c5ecd02cf27ffd858d89384519d4ac3d11227baefca8132ba27f0f34e1bab191"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household-biz/household-biz-get-restaurant-dish-batches"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns restaurant cooking/serving batches with tray placement, cloche, and CookedDishInfo validation details (BL-58473/BL-58474).

# Metadata

| FieldValueDisplayGet Restaurant Dish BatchesCategory`household_biz`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayGet Restaurant Dish BatchesCategory`household_biz`Access`Public`Scope`B2Authority`Tags—Aliases— |
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
await inzoi.cli.execute('household_biz.get_restaurant_dish_batches', {  household_biz_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
