---
document_id: "90de33350349f064d6cc86f4215354e2957d0c07c758aa46e1dfe0399d802bf7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/siteevent"
title: "📘 SiteEvent Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:03+00:00"
content_sha256: "ebe2637a465b0ce8eb391a570bdefb4f8d7f4b3a84cc13a49bcea42e67463100"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/siteevent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1SiteEventTableRow

Defines an event that takes place at a site, including type, duration, and participation roles.

### Properties

- **Id** (`FName`): Unique identifier for the site event.
- **EventType** (`EB1SiteEventType`): Defines the type of social event. Options include: Normal (a standard social event) and Meeting (a planned meetup).
- **EventCategory** (`FName`): Defines the event category.
- **DisplayInfo** (`FB1SiteEventDisplayInfo`): UI information for displaying event name, description, and icon.
- **ConditionInfo** (`FB1SiteEventConditionInfo`): Conditions required to trigger the event.
- **DurationHour** (`int32`): Length of the event in hours.
- **ScheduleInfoId** (`FName`): ID of the schedule display used for this event. *(Foreign = "ScheduleInfo.Id")*
- **RoleInfos** (`TArray<FB1SiteEventRoleInfo>`): List of roles assigned to characters participating in the event.

## 📚 References

- [FB1SiteEventDisplayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1siteeventdisplayinfo)
- [FB1SiteEventConditionInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1siteeventconditioninfo)
- [FB1SiteEventRoleInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1siteeventroleinfo)
- [FB1SiteEventRoleActivityInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1siteeventroleactivityinfo)
- [FB1SiteEventDressCodeInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1siteeventdresscodeinfo)
- [FB1SiteEventScriptInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1siteeventscriptinfo)
- [EB1SiteEventType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteeventtype)
- [EB1OutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1outfitcategory)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoSite[EB1SiteActionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteactionreason)[EB1SiteActionTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteactiontarget)[EB1SiteActionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteactiontype)[EB1SiteEventTargetRoleOption](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteeventtargetroleoption)[EB1SiteEventTargetType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteeventtargettype)[EB1SiteEventType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteeventtype)[EB1SiteState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1sitestate)[EB1SiteSubType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1sitesubtype)[EB1SiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1sitetype)[Site Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/site)[SiteAction Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/siteaction)[SiteBuildPresetInfo Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/sitebuildpresetinfo)
