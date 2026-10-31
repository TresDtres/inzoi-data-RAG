---
document_id: "62fb3fb47ac8d9fdb680424052f91bf34dd0c16be2076cc690252781b0b0dff7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household-biz/household-biz-get-customer-diagnostics"
title: "household_biz.get_customer_diagnostics"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:03+00:00"
content_sha256: "16ea672a7447def1a080b4c035bcc3db0e7616d9287378e3def272949c921a85"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household-biz/household-biz-get-customer-diagnostics"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns why a business customer is or is not eligible for restaurant service: visit ticks, entry/payment flags, pending party and waiting queue membership, table assignment, and the gate that emptied the resolved party.

# Metadata

| FieldValueDisplayGet Customer DiagnosticsCategory`household_biz`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayGet Customer DiagnosticsCategory`household_biz`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`household_biz`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptioncustomer_entity_identityIdyes—Customer entity id to diagnosehousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| --- |
| customer_entity_identityIdyes—Customer entity id to diagnosehousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |

# Usage

```
await inzoi.cli.execute('household_biz.get_customer_diagnostics', {  customer_entity_id: 0,  household_biz_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
