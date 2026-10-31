---
document_id: "52ac658fbed2fb7d2d0f5268529efc52e8232a1db74511cea5cb7b0db6d3412b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1bizstatisticsdayentryvmdata"
title: "FB1BizStatisticsDayEntryVMData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:12+00:00"
content_sha256: "3282276324153eafb1c8ac88905ff127c147ac53f214ae3c49b90a38f3bc8d19"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1bizstatisticsdayentryvmdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Statistics list entry VM data (7 days of business-session info).

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`BizHistoryIndex``integer`Index in the BizHistory array (for detail lookup; -1 means no data).`DailyProfitLoss``integer`Daily profit/loss (revenue - expense).`DayNumber``integer`Cumulative operating days (from 1; the most recent operating day = total operating days; 0 if no business data).`NegativeEvaluationTag``string`Customer negative-review tag (enum name of EB1BusinessReviewFactorType).`PositiveEvaluationTag``string`Customer positive-review tag (enum name of EB1BusinessReviewFactorType).`bHasBusinessInfo``boolean`Whether business info exists (false = empty slot). |
| --- |
| `BizHistoryIndex``integer`Index in the BizHistory array (for detail lookup; -1 means no data).`DailyProfitLoss``integer`Daily profit/loss (revenue - expense).`DayNumber``integer`Cumulative operating days (from 1; the most recent operating day = total operating days; 0 if no business data).`NegativeEvaluationTag``string`Customer negative-review tag (enum name of EB1BusinessReviewFactorType).`PositiveEvaluationTag``string`Customer positive-review tag (enum name of EB1BusinessReviewFactorType).`bHasBusinessInfo``boolean`Whether business info exists (false = empty slot). |
| `DailyProfitLoss``integer`Daily profit/loss (revenue - expense).`DayNumber``integer`Cumulative operating days (from 1; the most recent operating day = total operating days; 0 if no business data).`NegativeEvaluationTag``string`Customer negative-review tag (enum name of EB1BusinessReviewFactorType).`PositiveEvaluationTag``string`Customer positive-review tag (enum name of EB1BusinessReviewFactorType).`bHasBusinessInfo``boolean`Whether business info exists (false = empty slot). |
| `DayNumber``integer`Cumulative operating days (from 1; the most recent operating day = total operating days; 0 if no business data).`NegativeEvaluationTag``string`Customer negative-review tag (enum name of EB1BusinessReviewFactorType).`PositiveEvaluationTag``string`Customer positive-review tag (enum name of EB1BusinessReviewFactorType).`bHasBusinessInfo``boolean`Whether business info exists (false = empty slot). |
| `NegativeEvaluationTag``string`Customer negative-review tag (enum name of EB1BusinessReviewFactorType).`PositiveEvaluationTag``string`Customer positive-review tag (enum name of EB1BusinessReviewFactorType).`bHasBusinessInfo``boolean`Whether business info exists (false = empty slot). |
| `PositiveEvaluationTag``string`Customer positive-review tag (enum name of EB1BusinessReviewFactorType).`bHasBusinessInfo``boolean`Whether business info exists (false = empty slot). |
| `bHasBusinessInfo``boolean`Whether business info exists (false = empty slot). |
