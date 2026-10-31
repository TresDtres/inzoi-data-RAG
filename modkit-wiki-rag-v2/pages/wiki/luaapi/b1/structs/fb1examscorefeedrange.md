---
document_id: "78765516a4249d9a5f2f89e6ad7eedd50c7738938e21b4dd80945e90423b5ff1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1examscorefeedrange"
title: "FB1ExamScoreFeedRange"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:47+00:00"
content_sha256: "350e895f804bb15d2a5b542b337be025619faef5ccde8872021d9bbc2b495b38"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1examscorefeedrange"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Exam-day daily wall-post - per-score-range mapping. Sends a different ActivityFeed depending on the ExamScore (0-40). Kept in the UB1SchoolDataAsset::ExamDayFeedRanges array; the school sorts by descending score and uses the first match.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`BuffId``string`Buff additionally granted to the student on match. None skips buff granting.`FeedId``string`The ActivityFeed sent when the student's ExamScore falls in this range.`MinScore``integer`Matching threshold (inclusive). FeedId is used if the student's ExamScore is at or above this value. |
| --- |
| `BuffId``string`Buff additionally granted to the student on match. None skips buff granting.`FeedId``string`The ActivityFeed sent when the student's ExamScore falls in this range.`MinScore``integer`Matching threshold (inclusive). FeedId is used if the student's ExamScore is at or above this value. |
| `FeedId``string`The ActivityFeed sent when the student's ExamScore falls in this range.`MinScore``integer`Matching threshold (inclusive). FeedId is used if the student's ExamScore is at or above this value. |
| `MinScore``integer`Matching threshold (inclusive). FeedId is used if the student's ExamScore is at or above this value. |
