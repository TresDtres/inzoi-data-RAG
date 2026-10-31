---
document_id: "3318164abaaef4c00afe974143f506129a019d2121dc9918d39b512a2e92efa3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household-biz/household-biz-set-purchase-payment-method"
title: "household_biz.set_purchase_payment_method"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:05+00:00"
content_sha256: "d113a53f3df1faa1b9b08f05c7da54e7d44fa58e43a0550cf15f0c396d191730"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household-biz/household-biz-set-purchase-payment-method"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Sets the customer purchase payment method for a household business.

# Metadata

| FieldValueDisplaySet Purchase Payment MethodCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplaySet Purchase Payment MethodCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionmethodstringyes—Payment method (Employee/Kiosk)household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| --- |
| methodstringyes—Payment method (Employee/Kiosk)household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |

# Usage

```
await inzoi.cli.execute('household_biz.set_purchase_payment_method', {  method: '',  household_biz_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
