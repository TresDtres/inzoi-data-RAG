---
document_id: "78c83437d9d0f2e67818f1cca5e65872e12b670fcba2e4bab7cc3e1bf201278b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1companycustommobilemessageinfo"
title: "FB1CompanyCustomMobileMessageInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:32+00:00"
content_sha256: "b5731ecdf2282d102bf61bb1ed3b1b9be111d400e4b31551d70d7955fdc33764"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1companycustommobilemessageinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores all custom mobile message IDs for company-related events such as promotions, rank changes, and joining or leaving.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`JobPromotionId``string`Custom mobile message ID sent when a Zoi is promoted to a new job.`JobRankDownId``string`Custom mobile message ID sent when a Zoi's rank decreases.`JobRankUpId``string`Custom mobile message ID sent when a Zoi's rank increases.`JoinCompanyId``string`Custom mobile message ID sent when a Zoi joins the company.`LeaveCompanyIds``FB1LeaveCompanyCustomMobileMessageInfo[]`List of custom mobile message entries for each leave company reason. |
| --- |
| `JobPromotionId``string`Custom mobile message ID sent when a Zoi is promoted to a new job.`JobRankDownId``string`Custom mobile message ID sent when a Zoi's rank decreases.`JobRankUpId``string`Custom mobile message ID sent when a Zoi's rank increases.`JoinCompanyId``string`Custom mobile message ID sent when a Zoi joins the company.`LeaveCompanyIds``FB1LeaveCompanyCustomMobileMessageInfo[]`List of custom mobile message entries for each leave company reason. |
| `JobRankDownId``string`Custom mobile message ID sent when a Zoi's rank decreases.`JobRankUpId``string`Custom mobile message ID sent when a Zoi's rank increases.`JoinCompanyId``string`Custom mobile message ID sent when a Zoi joins the company.`LeaveCompanyIds``FB1LeaveCompanyCustomMobileMessageInfo[]`List of custom mobile message entries for each leave company reason. |
| `JobRankUpId``string`Custom mobile message ID sent when a Zoi's rank increases.`JoinCompanyId``string`Custom mobile message ID sent when a Zoi joins the company.`LeaveCompanyIds``FB1LeaveCompanyCustomMobileMessageInfo[]`List of custom mobile message entries for each leave company reason. |
| `JoinCompanyId``string`Custom mobile message ID sent when a Zoi joins the company.`LeaveCompanyIds``FB1LeaveCompanyCustomMobileMessageInfo[]`List of custom mobile message entries for each leave company reason. |
| `LeaveCompanyIds``FB1LeaveCompanyCustomMobileMessageInfo[]`List of custom mobile message entries for each leave company reason. |
