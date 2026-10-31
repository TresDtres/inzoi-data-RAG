---
document_id: "ec191ed1a3b29b7b4670580f86aca357666aaeb7ebab9b6b9a97fbedeb2a2ee9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/socialeventtemplate"
title: "📘 SocialEventTemplate Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:05+00:00"
content_sha256: "b9c684e0cd02e40dd6a3b66797c053356162411365d347988e38a039bbd9f3d1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/socialeventtemplate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# 📘 FB1SocialEventTemplateTableRow

Extends the base site event to provide configuration for social event templates. Includes preset object categories, guides, actionable interactions, and recommended site settings.

### Properties

- **Id** (`FName`): Unique identifier for the site event.
- **EventType** (`EB1SiteEventType`): Type of site event (e.g., social event, fire).
- **EventCategory** (`FName`): Defines the event category.
- **DisplayInfo** (`FB1SiteEventDisplayInfo`): UI information for displaying event name, description, and icon.
- **ConditionInfo** (`FB1SiteEventConditionInfo`): Conditions required to trigger the event.
- **DurationHour** (`int32`): Length of the event in hours.
- **ScheduleInfoId** (`FName`): ID of the schedule display used for this event. *(Foreign = "ScheduleInfo.Id")*
- **RoleInfos** (`TArray<FB1SiteEventRoleInfo>`): List of roles assigned to characters participating in the event.
- **bHideUI** (`bool`): A flag indicating whether the UI should be hidden when creating a social event in the schedule editor.
- **SocialEventType** (`SocialEventType`): Defines the type of social event. Options include: Normal (a standard social event) and Meeting (a planned meetup).
- **PresetObjectCategory** (`FName`): Object category used to preset or filter objects in this event (references `ObjectCategory.Category`).
- **GuideMainTextId** (`FString`): Localized guide text displayed as the main instruction for the event.
- **GuideSubTextId** (`FString`): Localized guide text displayed as a subtitle or helper text.
- **ActionInfos** (`TArray<FB1SocialEventActionInfo>`): List of defined actions that can occur during the social event.
- **RecommendSiteInfos** (`TArray<FB1SocialEventRecommendSiteInfo>`): Mapping of recommended sites per map for this event.

## 📚 References

- [FB1SocialEventActionInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1socialeventactioninfo)
- [FB1SocialEventActionCondition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1socialeventactioncondition)
- [FB1SocialEventInteractionTargetInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1socialeventinteractiontargetinfo)
- [FB1SocialEventRecommendSiteInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1socialeventrecommendsiteinfo)
- [EB1SocialEventActionTargetType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1socialeventactiontargettype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoSocial[EB1SocialEventActionFinishOption](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1socialeventactionfinishoption)[EB1SocialEventActionTargetType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1socialeventactiontargettype)[FB1SocialContext](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1socialcontext)[FB1SocialEventActionCondition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1socialeventactioncondition)[FB1SocialEventActionInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1socialeventactioninfo)[FB1SocialEventActionStateData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1socialeventactionstatedata)[FB1SocialEventInteractionTargetInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1socialeventinteractiontargetinfo)[FB1SocialEventMeetingKey](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1socialeventmeetingkey)[FB1SocialEventRecommendSiteInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1socialeventrecommendsiteinfo)[FB1SocialEventStateData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1socialeventstatedata)[FB1SocialEventTemplateTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1socialeventtemplatetablerow)[FB1SocialEventUIVisibleInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1socialeventuivisibleinfo)
