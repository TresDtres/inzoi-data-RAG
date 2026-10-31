---
document_id: "5d0925bd6a796e0ffb0dd10a8bf45d6678649efae595fa2efe303b780c1fce18"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1timelinevm"
title: "B1TimelineVM"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:07+00:00"
content_sha256: "f956c337198963820f3c3071406bb0fb6bc826d8aaf045e9795953cb7bf40957"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1timelinevm"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- B1-only read-only timeline ViewModel that value-copies FB1Timeline's TSharedPtr data. * Used for packet transfer (B2->B1) and GameThread UI display, avoiding cross-thread TSharedPtr sharing.

| PropertyTypeDescriptionMetadataNameFNameName identifier for this timeline.Priorityint32Priority value used to resolve conflicts when multiple timelines apply.SchedulesTArrayValue-copied list of schedules belonging to this timeline.CompanyIdFNameCompany ID this timeline is associated with.AvaliableDayOfWeeksBitFlagsuint8Bit flags representing which days of the week this timeline is active.OverrideTimelinePriorityEB1OverrideTimelinePriorityTypePriority type for override timelines (e.g., social events, fire events). |
| --- |
| NameFNameName identifier for this timeline.Priorityint32Priority value used to resolve conflicts when multiple timelines apply.SchedulesTArrayValue-copied list of schedules belonging to this timeline.CompanyIdFNameCompany ID this timeline is associated with.AvaliableDayOfWeeksBitFlagsuint8Bit flags representing which days of the week this timeline is active.OverrideTimelinePriorityEB1OverrideTimelinePriorityTypePriority type for override timelines (e.g., social events, fire events). |
| Priorityint32Priority value used to resolve conflicts when multiple timelines apply.SchedulesTArrayValue-copied list of schedules belonging to this timeline.CompanyIdFNameCompany ID this timeline is associated with.AvaliableDayOfWeeksBitFlagsuint8Bit flags representing which days of the week this timeline is active.OverrideTimelinePriorityEB1OverrideTimelinePriorityTypePriority type for override timelines (e.g., social events, fire events). |
| SchedulesTArrayValue-copied list of schedules belonging to this timeline.CompanyIdFNameCompany ID this timeline is associated with.AvaliableDayOfWeeksBitFlagsuint8Bit flags representing which days of the week this timeline is active.OverrideTimelinePriorityEB1OverrideTimelinePriorityTypePriority type for override timelines (e.g., social events, fire events). |
| CompanyIdFNameCompany ID this timeline is associated with.AvaliableDayOfWeeksBitFlagsuint8Bit flags representing which days of the week this timeline is active.OverrideTimelinePriorityEB1OverrideTimelinePriorityTypePriority type for override timelines (e.g., social events, fire events). |
| AvaliableDayOfWeeksBitFlagsuint8Bit flags representing which days of the week this timeline is active.OverrideTimelinePriorityEB1OverrideTimelinePriorityTypePriority type for override timelines (e.g., social events, fire events). |
| OverrideTimelinePriorityEB1OverrideTimelinePriorityTypePriority type for override timelines (e.g., social events, fire events). |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoTimeline[Timeline Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/timeline)[FB1Timeline](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1timeline)[FB1TimelineRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1timelinerange)[FB1TimelineTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1timelinetablerow)
