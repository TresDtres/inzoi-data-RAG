---
document_id: "9ff49c4baeb34c400ca2f6f5aae64e9c2a3440900ec6474f923d37ac7137bffa"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/sitetimeline"
title: "📘 SiteTimeline Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:03+00:00"
content_sha256: "cdd2636e73722891b76bddc32874ec1686719515c2e2ea6d1f6dba31e9c3af4d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/sitetimeline"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1SiteTimelineTableRow

Defines a timeline of scheduled events or NPC activity within a site.

### Properties

- **Id** (`FName`): Unique identifier for this site timeline entry.
- **SiteNpcEvent** (`TArray<FB1SiteSchedule>`): Timeline of scheduled site-level NPC activities.
- **SiteEnterScriptIdList** (`TArray<FName>`): Scripts executed when entering the site. *(Foreign = "Script_SiteTimeline.Id")*
- **SiteLeaveScriptIdList** (`TArray<FName>`): Scripts executed when leaving the site. *(Foreign = "Script_SiteTimeline.Id")*

## 📚 References

- [FB1SiteSchedule](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1siteschedule)
- [FB1DepartmentKey](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1departmentkey)
- [FB1Condition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1condition)
- [EB1BaseObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1baseobject)
- [EB1CompareType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1comparetype)
- [EB1ConditionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1conditiontype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoSite[EB1SiteActionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteactionreason)[EB1SiteActionTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteactiontarget)[EB1SiteActionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteactiontype)[EB1SiteEventTargetRoleOption](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteeventtargetroleoption)[EB1SiteEventTargetType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteeventtargettype)[EB1SiteEventType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteeventtype)[EB1SiteState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1sitestate)[EB1SiteSubType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1sitesubtype)[EB1SiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1sitetype)[Site Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/site)[SiteAction Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/siteaction)[SiteBuildPresetInfo Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/sitebuildpresetinfo)
