---
document_id: "bd436c9f30bc2032f3b8bf4d4282a5e3c57ce5c6be402ec8725bb3134a923c9b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household-biz/household-biz-set-price-policy-type"
title: "household_biz.set_price_policy_type"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:05+00:00"
content_sha256: "f33fbc32f879f63395742e95a68639281ed759ebf53a2a72785822fc75579795"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household-biz/household-biz-set-price-policy-type"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Sets the price policy tier for a household business.

# Metadata

| FieldValueDisplaySet Price Policy TypeCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplaySet Price Policy TypeCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptiontypestringyes—Price policy type (VeryLow/Low/Normal/High/VeryHigh)household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| --- |
| typestringyes—Price policy type (VeryLow/Low/Normal/High/VeryHigh)household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |

# Usage

```
await inzoi.cli.execute('household_biz.set_price_policy_type', {  type: '',  household_biz_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
