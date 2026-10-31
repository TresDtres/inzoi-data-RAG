---
document_id: "2a3cf6335b155a3c811a8ef1f5bd6b02b9ea08daad257f4b64a7852d54ad68a6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1scheduledexamdata"
title: "B1ScheduledExamData"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:56:30+00:00"
content_sha256: "0b3d66ce11ef710e113cc792366ad5ef9a4d6de2da2999af98094c000345371c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1scheduledexamdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Runtime data for exam pre-registration (BL-56242): pre-registers exams so they show on the * calendar and drive the DaysUntilSiteEvent condition (e.g. anticipation a few days before).

| PropertyTypeDescriptionMetadataPreRegistrationTimeTaskIdFB1TimeTaskIdThe TimeTask that performs the exam pre-registration; Invalid when none is scheduled.SiteEventIdsBySectionTMapThe pre-registered exam SiteEventIds keyed by class section index. |
| --- |
| PreRegistrationTimeTaskIdFB1TimeTaskIdThe TimeTask that performs the exam pre-registration; Invalid when none is scheduled.SiteEventIdsBySectionTMapThe pre-registered exam SiteEventIds keyed by class section index. |
| SiteEventIdsBySectionTMapThe pre-registered exam SiteEventIds keyed by class section index. |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoScheduled[FB1ScheduledStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1scheduledstat)
