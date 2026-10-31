---
document_id: "8681f258b2db42f01f317dc500cb2473a5b52b72afcda352b166f8e8440b690a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1examscorefeedrange"
title: "B1ExamScoreFeedRange"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:54:34+00:00"
content_sha256: "d7745c187f7ae76e2fe8d74621cac59598d74c38fc2099434dc14c233f413b21"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1examscorefeedrange"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

Exam-day daily wall post - a score-range mapping. Sends a different ActivityFeed depending on the ExamScore (0~40). * Stored in the UB1SchoolDataAsset::ExamDayFeedRanges array. The school sorts entries by score in descending order and uses the first match.

| PropertyTypeDescriptionMetadataMinScoreint32The matching threshold (inclusive). If the student's ExamScore is at or above this value, FeedId is used.Category: B1ExamScoreFeedRange ClampMin: 0FeedIdFNameThe ActivityFeed sent when the student's ExamScore falls in this range.Category: B1ExamScoreFeedRange Foreign: ActivityFeed.IdBuffIdFNameAn additional buff granted to the student on a match. Buff grant is skipped if None.Category: B1ExamScoreFeedRange Foreign: Buff.Id |
| --- |
| MinScoreint32The matching threshold (inclusive). If the student's ExamScore is at or above this value, FeedId is used.Category: B1ExamScoreFeedRange ClampMin: 0FeedIdFNameThe ActivityFeed sent when the student's ExamScore falls in this range.Category: B1ExamScoreFeedRange Foreign: ActivityFeed.IdBuffIdFNameAn additional buff granted to the student on a match. Buff grant is skipped if None.Category: B1ExamScoreFeedRange Foreign: Buff.Id |
| FeedIdFNameThe ActivityFeed sent when the student's ExamScore falls in this range.Category: B1ExamScoreFeedRange Foreign: ActivityFeed.IdBuffIdFNameAn additional buff granted to the student on a match. Buff grant is skipped if None.Category: B1ExamScoreFeedRange Foreign: Buff.Id |
| BuffIdFNameAn additional buff granted to the student on a match. Buff grant is skipped if None.Category: B1ExamScoreFeedRange Foreign: Buff.Id |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)
