---
document_id: "ac8b9b7bd6715aa2a64891849a1b442085b98570d574970b54e47af7bf43464b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household-biz/household-biz-set-customer-activities"
title: "household_biz.set_customer_activities"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:05+00:00"
content_sha256: "882d826876fa3a092504f866c0781af996ce0ce46cd7cb0eb584db41cfc4649b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household-biz/household-biz-set-customer-activities"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Sets the recommended customer activity id list for a household business (mirrors set_employee_activities on the customer side).

# Metadata

| FieldValueDisplaySet Customer ActivitiesCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplaySet Customer ActivitiesCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionactivity_idsstringyes—Comma-separated activity idshousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| --- |
| activity_idsstringyes—Comma-separated activity idshousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |

# Usage

```
await inzoi.cli.execute('household_biz.set_customer_activities', {  activity_ids: '',  household_biz_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
