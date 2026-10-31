---
document_id: "5826f71c3bcc13ab7dfe29f6903d28e7440eba6d99d2124e999c59156d976424"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1bizdayinfo"
title: "FB1BizDayInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:10+00:00"
content_sha256: "b1ad7a3d77e379370a5d00e7d615be1cdc415c8a7dae2432f14ae8c2a5defff6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1bizdayinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores all real-time operational data accumulated during an active business day, including customer visit records, the ledger book, per-factor review scores, and business activity records.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (8)

| NameTypeDescription`BusinessRecords``FB1HouseholdBizRecordEntry[]`Temporary buffer of business activity records generated during the current business day.`CurrentCustomerBaseVisitCount``integer`Current base visit count for customers accumulated during this business day.`DailyReviewScores``table<EB1BusinessReviewFactorType, integer>`Accumulated satisfaction scores per review factor type across all customers today.`LedgerBook`[`FB1BizLedgerBook`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1bizledgerbook)Ledger book recording all financial transactions for this business day.`NegativeReviewCounts``table<EB1BusinessReviewFactorType, integer>`Count of negative review events per review factor type accumulated today.`PositiveReviewCounts``table<EB1BusinessReviewFactorType, integer>`Count of positive review events per review factor type accumulated today.`StartedDay`[`EB1DayOfWeek`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1dayofweek)Day of the week on which this business session started.`VisitCustomerInfoList``table<FB1EntityId, FB1CustomerBizInfo>`Map of customer entity IDs to their individual business info for this day. |
| --- |
| `BusinessRecords``FB1HouseholdBizRecordEntry[]`Temporary buffer of business activity records generated during the current business day.`CurrentCustomerBaseVisitCount``integer`Current base visit count for customers accumulated during this business day.`DailyReviewScores``table<EB1BusinessReviewFactorType, integer>`Accumulated satisfaction scores per review factor type across all customers today.`LedgerBook`[`FB1BizLedgerBook`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1bizledgerbook)Ledger book recording all financial transactions for this business day.`NegativeReviewCounts``table<EB1BusinessReviewFactorType, integer>`Count of negative review events per review factor type accumulated today.`PositiveReviewCounts``table<EB1BusinessReviewFactorType, integer>`Count of positive review events per review factor type accumulated today.`StartedDay`[`EB1DayOfWeek`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1dayofweek)Day of the week on which this business session started.`VisitCustomerInfoList``table<FB1EntityId, FB1CustomerBizInfo>`Map of customer entity IDs to their individual business info for this day. |
| `CurrentCustomerBaseVisitCount``integer`Current base visit count for customers accumulated during this business day.`DailyReviewScores``table<EB1BusinessReviewFactorType, integer>`Accumulated satisfaction scores per review factor type across all customers today.`LedgerBook`[`FB1BizLedgerBook`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1bizledgerbook)Ledger book recording all financial transactions for this business day.`NegativeReviewCounts``table<EB1BusinessReviewFactorType, integer>`Count of negative review events per review factor type accumulated today.`PositiveReviewCounts``table<EB1BusinessReviewFactorType, integer>`Count of positive review events per review factor type accumulated today.`StartedDay`[`EB1DayOfWeek`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1dayofweek)Day of the week on which this business session started.`VisitCustomerInfoList``table<FB1EntityId, FB1CustomerBizInfo>`Map of customer entity IDs to their individual business info for this day. |
| `DailyReviewScores``table<EB1BusinessReviewFactorType, integer>`Accumulated satisfaction scores per review factor type across all customers today.`LedgerBook`[`FB1BizLedgerBook`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1bizledgerbook)Ledger book recording all financial transactions for this business day.`NegativeReviewCounts``table<EB1BusinessReviewFactorType, integer>`Count of negative review events per review factor type accumulated today.`PositiveReviewCounts``table<EB1BusinessReviewFactorType, integer>`Count of positive review events per review factor type accumulated today.`StartedDay`[`EB1DayOfWeek`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1dayofweek)Day of the week on which this business session started.`VisitCustomerInfoList``table<FB1EntityId, FB1CustomerBizInfo>`Map of customer entity IDs to their individual business info for this day. |
| `LedgerBook`[`FB1BizLedgerBook`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1bizledgerbook)Ledger book recording all financial transactions for this business day.`NegativeReviewCounts``table<EB1BusinessReviewFactorType, integer>`Count of negative review events per review factor type accumulated today.`PositiveReviewCounts``table<EB1BusinessReviewFactorType, integer>`Count of positive review events per review factor type accumulated today.`StartedDay`[`EB1DayOfWeek`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1dayofweek)Day of the week on which this business session started.`VisitCustomerInfoList``table<FB1EntityId, FB1CustomerBizInfo>`Map of customer entity IDs to their individual business info for this day. |
| `NegativeReviewCounts``table<EB1BusinessReviewFactorType, integer>`Count of negative review events per review factor type accumulated today.`PositiveReviewCounts``table<EB1BusinessReviewFactorType, integer>`Count of positive review events per review factor type accumulated today.`StartedDay`[`EB1DayOfWeek`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1dayofweek)Day of the week on which this business session started.`VisitCustomerInfoList``table<FB1EntityId, FB1CustomerBizInfo>`Map of customer entity IDs to their individual business info for this day. |
| `PositiveReviewCounts``table<EB1BusinessReviewFactorType, integer>`Count of positive review events per review factor type accumulated today.`StartedDay`[`EB1DayOfWeek`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1dayofweek)Day of the week on which this business session started.`VisitCustomerInfoList``table<FB1EntityId, FB1CustomerBizInfo>`Map of customer entity IDs to their individual business info for this day. |
| `StartedDay`[`EB1DayOfWeek`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1dayofweek)Day of the week on which this business session started.`VisitCustomerInfoList``table<FB1EntityId, FB1CustomerBizInfo>`Map of customer entity IDs to their individual business info for this day. |
| `VisitCustomerInfoList``table<FB1EntityId, FB1CustomerBizInfo>`Map of customer entity IDs to their individual business info for this day. |
