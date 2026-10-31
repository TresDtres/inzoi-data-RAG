---
document_id: "41bd8e6ca068e8889bb6547f66882f9616fd20a7a8e65274b43aad6cd603a1f4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1siteschedule"
title: "B1SiteSchedule"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:56:46+00:00"
content_sha256: "9a2f4378be332a403f05f8efb1bd48f9deafc1f7e1441d9ba55a0310a481876e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1siteschedule"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Represents a site-level schedule entry linking a timeline, company, and character attributes for NPC spawning.

| PropertyTypeDescriptionMetadataIdFNameUnique ID for this site schedule entry.TimelineNameFNameName of the timeline used for this site schedule.Foreign: Timeline_RelationCrowd_RedCity.IdWorkConditionsTArrayConditions that must be satisfied for a character to work this schedule.CharacterAttributeIdListTArrayList of character attribute IDs eligible to fill this site schedule slot.CompanyIdFNameCompany ID associated with this site schedule.Foreign: Company.IdDepartmentKeyFB1DepartmentKeyDepartment key identifying the organizational unit for this schedule.SiteIdFNameAuto-generated site ID populated during OnPostJsonDataLoad.bIsCustomSiteScheduleboolTrue if this schedule was created through custom site editing rather than data tables. |
| --- |
| IdFNameUnique ID for this site schedule entry.TimelineNameFNameName of the timeline used for this site schedule.Foreign: Timeline_RelationCrowd_RedCity.IdWorkConditionsTArrayConditions that must be satisfied for a character to work this schedule.CharacterAttributeIdListTArrayList of character attribute IDs eligible to fill this site schedule slot.CompanyIdFNameCompany ID associated with this site schedule.Foreign: Company.IdDepartmentKeyFB1DepartmentKeyDepartment key identifying the organizational unit for this schedule.SiteIdFNameAuto-generated site ID populated during OnPostJsonDataLoad.bIsCustomSiteScheduleboolTrue if this schedule was created through custom site editing rather than data tables. |
| TimelineNameFNameName of the timeline used for this site schedule.Foreign: Timeline_RelationCrowd_RedCity.IdWorkConditionsTArrayConditions that must be satisfied for a character to work this schedule.CharacterAttributeIdListTArrayList of character attribute IDs eligible to fill this site schedule slot.CompanyIdFNameCompany ID associated with this site schedule.Foreign: Company.IdDepartmentKeyFB1DepartmentKeyDepartment key identifying the organizational unit for this schedule.SiteIdFNameAuto-generated site ID populated during OnPostJsonDataLoad.bIsCustomSiteScheduleboolTrue if this schedule was created through custom site editing rather than data tables. |
| WorkConditionsTArrayConditions that must be satisfied for a character to work this schedule.CharacterAttributeIdListTArrayList of character attribute IDs eligible to fill this site schedule slot.CompanyIdFNameCompany ID associated with this site schedule.Foreign: Company.IdDepartmentKeyFB1DepartmentKeyDepartment key identifying the organizational unit for this schedule.SiteIdFNameAuto-generated site ID populated during OnPostJsonDataLoad.bIsCustomSiteScheduleboolTrue if this schedule was created through custom site editing rather than data tables. |
| CharacterAttributeIdListTArrayList of character attribute IDs eligible to fill this site schedule slot.CompanyIdFNameCompany ID associated with this site schedule.Foreign: Company.IdDepartmentKeyFB1DepartmentKeyDepartment key identifying the organizational unit for this schedule.SiteIdFNameAuto-generated site ID populated during OnPostJsonDataLoad.bIsCustomSiteScheduleboolTrue if this schedule was created through custom site editing rather than data tables. |
| CompanyIdFNameCompany ID associated with this site schedule.Foreign: Company.IdDepartmentKeyFB1DepartmentKeyDepartment key identifying the organizational unit for this schedule.SiteIdFNameAuto-generated site ID populated during OnPostJsonDataLoad.bIsCustomSiteScheduleboolTrue if this schedule was created through custom site editing rather than data tables. |
| DepartmentKeyFB1DepartmentKeyDepartment key identifying the organizational unit for this schedule.SiteIdFNameAuto-generated site ID populated during OnPostJsonDataLoad.bIsCustomSiteScheduleboolTrue if this schedule was created through custom site editing rather than data tables. |
| SiteIdFNameAuto-generated site ID populated during OnPostJsonDataLoad.bIsCustomSiteScheduleboolTrue if this schedule was created through custom site editing rather than data tables. |
| bIsCustomSiteScheduleboolTrue if this schedule was created through custom site editing rather than data tables. |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoSite[EB1SiteActionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteactionreason)[EB1SiteActionTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteactiontarget)[EB1SiteActionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteactiontype)[EB1SiteEventTargetRoleOption](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteeventtargetroleoption)[EB1SiteEventTargetType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteeventtargettype)[EB1SiteEventType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteeventtype)[EB1SiteState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1sitestate)[EB1SiteSubType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1sitesubtype)[EB1SiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1sitetype)[Site Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/site)[SiteAction Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/siteaction)[SiteBuildPresetInfo Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/sitebuildpresetinfo)
