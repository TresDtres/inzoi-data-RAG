---
document_id: "b194ff9532439fac58c747368530a3b8ad17a621779ab5e238fbc3f60f617aed"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/scheduleinfo"
title: "📘 ScheduleInfo Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:02+00:00"
content_sha256: "b7711da9f581e09cce56d8c55883cd9be0441081f73b2b0c272676e2099522b0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/scheduleinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1ScheduleInfoTableRow

Defines visual and localized information for schedule entries used in UI or timeline events.

### Properties

- **Id** (`FName`): Unique identifier for the schedule entry.
- **Icon** (`TSoftObjectPtr<UTexture2D>`): Image icon representing this schedule entry.
- **TitleText** (`FString`): Localized title shown in the UI. *(StringTableKey = "Id")*
- **DescText** (`FString`): Localized description text shown in the UI. *(StringTableKey = "Id")*
- **OverideScheduleImage** (`TSoftObjectPtr<UTexture2D>`): Optional override image shown in the schedule viewer.
- **bIsNeedConvertTitleText** (`bool`): Indicates whether the title text contains format-style placeholders that require conversion.
- **bIsNeedConvertDescText** (`bool`): Indicates whether the body text contains format-style placeholders that require conversion.

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoSchedule[FB1Schedule](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schedule)[FB1ScheduleActorRoleAssignment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1scheduleactorroleassignment)[FB1ScheduleActorRolePresetTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1scheduleactorrolepresettablerow)[FB1ScheduleDetail](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1scheduledetail)[FB1ScheduleInfoTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1scheduleinfotablerow)[FB1ScheduleMissionInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schedulemissioninfo)[FB1ScheduleSlotRoleActionData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1scheduleslotroleactiondata)[FB1ScheduleSlotRoleActionPresetData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1scheduleslotroleactionpresetdata)[FB1ScheduleStudioData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schedulestudiodata)
