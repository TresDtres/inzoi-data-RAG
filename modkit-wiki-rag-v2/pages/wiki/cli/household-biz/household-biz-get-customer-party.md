---
document_id: "85477a5aae893dcff80c01f5b856a5e6568d1fb87c5a4a76b9735474b675cc9c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household-biz/household-biz-get-customer-party"
title: "household_biz.get_customer_party"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:03+00:00"
content_sha256: "846779c9834bfc47971744fb3263ffe554cfa5a3480bdbb4ed12eeb473bd3ae6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household-biz/household-biz-get-customer-party"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns the business customer party resolved from any customer member. Returns an empty party while any customer-eligible ZoiGroup member has not arrived; a customer without a ZoiGroup is a party of one (BL-58468).

# Metadata

| FieldValueDisplayGet Customer PartyCategory`household_biz`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayGet Customer PartyCategory`household_biz`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`household_biz`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptioncustomer_entity_identityIdyes—Any customer member of the business customer partyhousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| --- |
| customer_entity_identityIdyes—Any customer member of the business customer partyhousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |

# Usage

```
await inzoi.cli.execute('household_biz.get_customer_party', {  customer_entity_id: 0,  household_biz_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
