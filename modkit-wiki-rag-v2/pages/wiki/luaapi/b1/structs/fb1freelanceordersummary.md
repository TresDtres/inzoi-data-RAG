---
document_id: "2fbd68b62255d2b932fd6f3d44c68d3bb6d61fa7fc9336571cfd045d754ed0ee"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelanceordersummary"
title: "FB1FreelanceOrderSummary"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:55+00:00"
content_sha256: "d87470445d4e29b0d4c5c780a97d086f2f6c395f4ff824433b4a407c92e74c9e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1freelanceordersummary"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Lightweight summary data for displaying available freelance orders in UI before acceptance. Template data (title, description) is looked up via TemplateId; time display is calculated from StartedTimeTicks/ExpireTimeTicks; text formatting is resolved via B1FreelanceUIHelper.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (8)

| NameTypeDescription`BaseReward``integer`Base currency reward for completing this order.`ClientInfo`[`FB1FreelanceClient`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelanceclient)Runtime Data (determined at creation time) Runtime client information resolved at order generation time.`Difficulty`[`EB1FreelanceOrderDifficulty`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelanceorderdifficulty)Order difficulty level.`GeneratedTicks``integer`Game ticks when this summary was generated (for date-change expiration).`RecipientInfo`[`FB1FreelanceClient`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelanceclient)Runtime recipient information resolved at order generation time.`RequestTarget`[`FB1FreelanceTarget`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancetarget)Runtime request target information resolved at order generation time.`SummaryId``integer`Unique ID for this summary instance.`TemplateId``string`Order template ID referencing the FreelanceOrderTemplate data table row. |
| --- |
| `BaseReward``integer`Base currency reward for completing this order.`ClientInfo`[`FB1FreelanceClient`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelanceclient)Runtime Data (determined at creation time) Runtime client information resolved at order generation time.`Difficulty`[`EB1FreelanceOrderDifficulty`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelanceorderdifficulty)Order difficulty level.`GeneratedTicks``integer`Game ticks when this summary was generated (for date-change expiration).`RecipientInfo`[`FB1FreelanceClient`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelanceclient)Runtime recipient information resolved at order generation time.`RequestTarget`[`FB1FreelanceTarget`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancetarget)Runtime request target information resolved at order generation time.`SummaryId``integer`Unique ID for this summary instance.`TemplateId``string`Order template ID referencing the FreelanceOrderTemplate data table row. |
| `ClientInfo`[`FB1FreelanceClient`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelanceclient)Runtime Data (determined at creation time) Runtime client information resolved at order generation time.`Difficulty`[`EB1FreelanceOrderDifficulty`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelanceorderdifficulty)Order difficulty level.`GeneratedTicks``integer`Game ticks when this summary was generated (for date-change expiration).`RecipientInfo`[`FB1FreelanceClient`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelanceclient)Runtime recipient information resolved at order generation time.`RequestTarget`[`FB1FreelanceTarget`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancetarget)Runtime request target information resolved at order generation time.`SummaryId``integer`Unique ID for this summary instance.`TemplateId``string`Order template ID referencing the FreelanceOrderTemplate data table row. |
| `Difficulty`[`EB1FreelanceOrderDifficulty`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelanceorderdifficulty)Order difficulty level.`GeneratedTicks``integer`Game ticks when this summary was generated (for date-change expiration).`RecipientInfo`[`FB1FreelanceClient`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelanceclient)Runtime recipient information resolved at order generation time.`RequestTarget`[`FB1FreelanceTarget`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancetarget)Runtime request target information resolved at order generation time.`SummaryId``integer`Unique ID for this summary instance.`TemplateId``string`Order template ID referencing the FreelanceOrderTemplate data table row. |
| `GeneratedTicks``integer`Game ticks when this summary was generated (for date-change expiration).`RecipientInfo`[`FB1FreelanceClient`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelanceclient)Runtime recipient information resolved at order generation time.`RequestTarget`[`FB1FreelanceTarget`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancetarget)Runtime request target information resolved at order generation time.`SummaryId``integer`Unique ID for this summary instance.`TemplateId``string`Order template ID referencing the FreelanceOrderTemplate data table row. |
| `RecipientInfo`[`FB1FreelanceClient`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelanceclient)Runtime recipient information resolved at order generation time.`RequestTarget`[`FB1FreelanceTarget`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancetarget)Runtime request target information resolved at order generation time.`SummaryId``integer`Unique ID for this summary instance.`TemplateId``string`Order template ID referencing the FreelanceOrderTemplate data table row. |
| `RequestTarget`[`FB1FreelanceTarget`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancetarget)Runtime request target information resolved at order generation time.`SummaryId``integer`Unique ID for this summary instance.`TemplateId``string`Order template ID referencing the FreelanceOrderTemplate data table row. |
| `SummaryId``integer`Unique ID for this summary instance.`TemplateId``string`Order template ID referencing the FreelanceOrderTemplate data table row. |
| `TemplateId``string`Order template ID referencing the FreelanceOrderTemplate data table row. |
