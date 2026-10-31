---
document_id: "84dd082bb028119bf072802a06e59aef0ac184c554d9f8a2ee4f6902c27e06a0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schoolevaluationdata"
title: "B1SchoolEvaluationData"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:56:33+00:00"
content_sha256: "5a0c81c35368cb23be3809526d07b4c533883558a77f8630846b3ff9eb6c1fd9"
chunk: 1
chunk_count: 4
page_type: "article"
route: "wiki/structguide/struct/fb1schoolevaluationdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

A single student's overall evaluation state. * Stored as a value in FB2School::StudentEvaluationMap. ** Data sections: * 1) Weekly accumulation - DailyRecords[5]. Reset every Monday in OnWeekReset. * The exam-preparation accumulator (ExamPreparation) has been split out into FB2CareerComponent and is managed as per-student ability data (2026-05). * 2) Weekly result history - WeeklyHistory[]. Only keeps up to DA->MaxWeeklyHistoryCount weeks; the oldest entries are removed first when exceeded. * 3) Persistent state - bHadCounseling, bHadExamThisCareer. Never reset.
