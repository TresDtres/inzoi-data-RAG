---
document_id: "2546330d774a794f97e7e24c8ac6ccb0ead31985eec60701bf9ec916aff70c0e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1businessreviewresult"
title: "FB1BusinessReviewResult"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:15+00:00"
content_sha256: "dd8313bb163d33f0075cb83fc6a370522af425ca03ee4509d41fef9312aff40f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1businessreviewresult"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores the result of a business review evaluation, representing either a strength or weakness with its factor type, sentiment, cumulative score, comment text ID, and icon.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`FactorType`[`EB1BusinessReviewFactorType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1businessreviewfactortype)Review factor type for this result (None means not applicable).`Icon``UTexture2D`Icon texture associated with this review result.`ReviewCommentTextId``string`Randomly selected review comment localization key for display.`TotalScore``integer`Cumulative score accumulated for this review factor.`bIsPositive``boolean`Whether this result is positive (true) or negative (false). |
| --- |
| `FactorType`[`EB1BusinessReviewFactorType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1businessreviewfactortype)Review factor type for this result (None means not applicable).`Icon``UTexture2D`Icon texture associated with this review result.`ReviewCommentTextId``string`Randomly selected review comment localization key for display.`TotalScore``integer`Cumulative score accumulated for this review factor.`bIsPositive``boolean`Whether this result is positive (true) or negative (false). |
| `Icon``UTexture2D`Icon texture associated with this review result.`ReviewCommentTextId``string`Randomly selected review comment localization key for display.`TotalScore``integer`Cumulative score accumulated for this review factor.`bIsPositive``boolean`Whether this result is positive (true) or negative (false). |
| `ReviewCommentTextId``string`Randomly selected review comment localization key for display.`TotalScore``integer`Cumulative score accumulated for this review factor.`bIsPositive``boolean`Whether this result is positive (true) or negative (false). |
| `TotalScore``integer`Cumulative score accumulated for this review factor.`bIsPositive``boolean`Whether this result is positive (true) or negative (false). |
| `bIsPositive``boolean`Whether this result is positive (true) or negative (false). |
