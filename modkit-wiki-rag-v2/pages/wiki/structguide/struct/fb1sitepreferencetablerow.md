---
document_id: "672fab849dc6136bdd34d430cf9b1919a5d6203a14e0ba0a26b12bb1fb607ac2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1sitepreferencetablerow"
title: "B1SitePreferenceTableRow"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:56:46+00:00"
content_sha256: "541e015e73e1286f346e49845efe6c16593c93358de3d7bcb1dac2083f6c7fc0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1sitepreferencetablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

Per-site leisure preference: matching nature/characteristic traits + age bands. Row Id = Site.Id (synthetic for a no-schedule row).

| PropertyTypeDescriptionMetadataAllowedGrowthStepsint32Growth steps allowed to bias toward this site for autonomous leisure (exclude Infant/Toddler).Category: B1SitePreferenceTableRowNatureTraitIdsTArrayNature(temperament) trait row Ids this site matches. A zoi has exactly one nature trait.Category: B1SitePreferenceTableRow Foreign: Trait.IdCharacteristicTraitIdsTArrayCharacteristic trait row Ids this site matches. Matches if the zoi has any one of them.Category: B1SitePreferenceTableRow Foreign: Trait.IdTPOPlanIdsTArrayTPO Plan IDs that can be selected while a schedule is running at this site.Category: B1SitePreferenceTableRow Foreign: TPOPlan.IdbNoScheduleboolIf true, matching this row means "make no schedule": no leisure schedule is created for the day.Category: B1SitePreferenceTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| --- |
| AllowedGrowthStepsint32Growth steps allowed to bias toward this site for autonomous leisure (exclude Infant/Toddler).Category: B1SitePreferenceTableRowNatureTraitIdsTArrayNature(temperament) trait row Ids this site matches. A zoi has exactly one nature trait.Category: B1SitePreferenceTableRow Foreign: Trait.IdCharacteristicTraitIdsTArrayCharacteristic trait row Ids this site matches. Matches if the zoi has any one of them.Category: B1SitePreferenceTableRow Foreign: Trait.IdTPOPlanIdsTArrayTPO Plan IDs that can be selected while a schedule is running at this site.Category: B1SitePreferenceTableRow Foreign: TPOPlan.IdbNoScheduleboolIf true, matching this row means "make no schedule": no leisure schedule is created for the day.Category: B1SitePreferenceTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| NatureTraitIdsTArrayNature(temperament) trait row Ids this site matches. A zoi has exactly one nature trait.Category: B1SitePreferenceTableRow Foreign: Trait.IdCharacteristicTraitIdsTArrayCharacteristic trait row Ids this site matches. Matches if the zoi has any one of them.Category: B1SitePreferenceTableRow Foreign: Trait.IdTPOPlanIdsTArrayTPO Plan IDs that can be selected while a schedule is running at this site.Category: B1SitePreferenceTableRow Foreign: TPOPlan.IdbNoScheduleboolIf true, matching this row means "make no schedule": no leisure schedule is created for the day.Category: B1SitePreferenceTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CharacteristicTraitIdsTArrayCharacteristic trait row Ids this site matches. Matches if the zoi has any one of them.Category: B1SitePreferenceTableRow Foreign: Trait.IdTPOPlanIdsTArrayTPO Plan IDs that can be selected while a schedule is running at this site.Category: B1SitePreferenceTableRow Foreign: TPOPlan.IdbNoScheduleboolIf true, matching this row means "make no schedule": no leisure schedule is created for the day.Category: B1SitePreferenceTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| TPOPlanIdsTArrayTPO Plan IDs that can be selected while a schedule is running at this site.Category: B1SitePreferenceTableRow Foreign: TPOPlan.IdbNoScheduleboolIf true, matching this row means "make no schedule": no leisure schedule is created for the day.Category: B1SitePreferenceTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| bNoScheduleboolIf true, matching this row means "make no schedule": no leisure schedule is created for the day.Category: B1SitePreferenceTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CommentFStringDev CommentCategory: B1TableRowBase |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoSite[EB1SiteActionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteactionreason)[EB1SiteActionTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteactiontarget)[EB1SiteActionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteactiontype)[EB1SiteEventTargetRoleOption](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteeventtargetroleoption)[EB1SiteEventTargetType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteeventtargettype)[EB1SiteEventType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteeventtype)[EB1SiteState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1sitestate)[EB1SiteSubType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1sitesubtype)[EB1SiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1sitetype)[Site Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/site)[SiteAction Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/siteaction)[SiteBuildPresetInfo Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/sitebuildpresetinfo)
