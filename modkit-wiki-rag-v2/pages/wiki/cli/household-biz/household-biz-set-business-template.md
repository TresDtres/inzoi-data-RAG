---
document_id: "fdd539185416a578806e467bdd9ed8125ea4f84b251919af33282ec30dc8d846"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household-biz/household-biz-set-business-template"
title: "household_biz.set_business_template"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:05+00:00"
content_sha256: "02c1b4d25fe070f1b91dbc45ad10a7861918112e71d4c9774bb2b8ab7914a298"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household-biz/household-biz-set-business-template"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Applies a business template (recipes, recommended activities/objects, employee templates) to a household business. Empty template_id clears to custom.

# Metadata

| FieldValueDisplaySet Business TemplateCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplaySet Business TemplateCategory`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`household_biz`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptiontemplate_idnameyes—HouseholdBizTemplate row idhousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| --- |
| template_idnameyes—HouseholdBizTemplate row idhousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |

# Usage

```
await inzoi.cli.execute('household_biz.set_business_template', {  template_id: '',  household_biz_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
