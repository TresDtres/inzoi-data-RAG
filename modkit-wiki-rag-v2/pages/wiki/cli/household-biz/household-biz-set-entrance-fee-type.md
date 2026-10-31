---
document_id: "d8b1eae31be2a591df89634df6d82efd60a5d5e3781409b38d7b3aedaead09ca"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household-biz/household-biz-set-entrance-fee-type"
title: "household_biz.set_entrance_fee_type"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:05+00:00"
content_sha256: "1c64300a72f8a4a40c7bb2ea40e83556f37972202642c3de7ae62dcdf87b943d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household-biz/household-biz-set-entrance-fee-type"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Sets the entrance fee type for a household business.

# Metadata

| FieldValueDisplaySet Entrance Fee TypeCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplaySet Entrance Fee TypeCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptiontypestringyes—Entrance fee type (Free/PerHour/PerEntry)household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| --- |
| typestringyes—Entrance fee type (Free/PerHour/PerEntry)household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |

# Usage

```
await inzoi.cli.execute('household_biz.set_entrance_fee_type', {  type: '',  household_biz_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
