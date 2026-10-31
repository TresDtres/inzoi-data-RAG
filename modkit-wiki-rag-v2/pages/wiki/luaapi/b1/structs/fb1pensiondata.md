---
document_id: "4e052ca1fbf44f7e836821024c96d6e29907fde8fd84a5f3404b0f53f18d149c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1pensiondata"
title: "FB1PensionData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:01+00:00"
content_sha256: "9da2ed85300ce613f300eaf6fb807882efdf487619dab28e8281fdd411b86227"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1pensiondata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Post-retirement pension payout data. Kept even after the Career slot is removed and used for daily pension payouts.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`CareerType`[`EB1CareerType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1careertype)The type of the retired Career.`CompanyDtId``string`DT ID of the retired company (used to identify and reject rehire at the same company).`PensionAmountPerDay``integer`Pension amount to pay each week (daily wage at retirement x PensionRatio). Paid in MainCurrency. |
| --- |
| `CareerType`[`EB1CareerType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1careertype)The type of the retired Career.`CompanyDtId``string`DT ID of the retired company (used to identify and reject rehire at the same company).`PensionAmountPerDay``integer`Pension amount to pay each week (daily wage at retirement x PensionRatio). Paid in MainCurrency. |
| `CompanyDtId``string`DT ID of the retired company (used to identify and reject rehire at the same company).`PensionAmountPerDay``integer`Pension amount to pay each week (daily wage at retirement x PensionRatio). Paid in MainCurrency. |
| `PensionAmountPerDay``integer`Pension amount to pay each week (daily wage at retirement x PensionRatio). Paid in MainCurrency. |
