---
document_id: "f5af49c3377b75ac4b03ab5ed24c2f3ed72360522b58b4475487abd96e54c476"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/timeline"
title: "📘 Timeline Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:56+00:00"
content_sha256: "154ddc37b6f0a6a80c3ae0f09729826fc6f85cdc90c626e59d7f5ba8cb4e9520"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/timeline"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1TimelineTableRow

Defines scheduled tasks and daily routines for entities, used for simulation and planning.

### Properties

- **Id** (`FName`): Unique identifier for the timeline.
- **IsAutoBuildSchedule** (`bool`): If true, the schedule is auto-generated.
- **Priority** (`int32`): Schedule priority used when multiple overlap.
- **AvaliableDayOfWeeks** (`TArray<EB1DayOfWeek>`): Days this timeline is allowed to run.
- **CompanyId** (`FName`): Company associated with this timeline. *(Foreign = "Company.Id")*
- **CityId** (`FName`): City or level this timeline is assigned to. *(ModTip = "LevelName")*
- **Conditions** (`TArray<FB1Condition>`): Logic rules that control availability.
- **Schedules** (`TArray<FB1ScheduleDetail>`): List of daily schedules this timeline consists of.
- **AvaliableDayOfWeeksBitFlags** (`uint8`): Internal bitmask version of the allowed days.

## 📚 References

- [FB1ScheduleDetail](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1scheduledetail)
- [FB1Order](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1order)
- [EB1OrderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1ordertype)
- [FB1RandomOrderInteraction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1randomorderinteraction)
- [EB1DayOfWeek](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1dayofweek)
- [FB1Condition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1condition)
- [EB1BaseObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1baseobject)
- [EB1CompareType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1comparetype)
- [EB1ConditionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1conditiontype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoTimeline[FB1Timeline](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1timeline)[FB1TimelineRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1timelinerange)[FB1TimelineTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1timelinetablerow)[FB1TimelineVM](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1timelinevm)
