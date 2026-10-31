---
document_id: "7cb7f0c6dba7850257f42b28b30cdb67aed10941ccbe2dbccd68c56404b7288f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1sitevisitorinfo"
title: "B1SiteVisitorInfo"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:56:48+00:00"
content_sha256: "acf2d9de99dd51270eda98728cb2e8ca77b3acf42021aa877546b4acc248a244"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1sitevisitorinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Per-CalendarEvent visitor crowd settings for a site. * CalendarEventId == None is the default (평상시) entry; a matching active event overrides it.

| PropertyTypeDescriptionMetadataCalendarEventIdFNameCalendarEvent this entry applies to. None = default entry (used when no matching event is active).Category: B1SiteVisitorInfo Foreign: CalendarEvent.IdVisitorDensityEB1VisitorDensityVisitor crowd density level. Converted to a headcount via UB1SiteConfigDataAsset.Category: B1SiteVisitorInfoVisitorStartHHMMint32Time (HHMM format) when visitors begin arriving at this site.Category: B1SiteVisitorInfoVisitorEndHHMMint32Time (HHMM format) when visitors stop arriving at this site.Category: B1SiteVisitorInfo |
| --- |
| CalendarEventIdFNameCalendarEvent this entry applies to. None = default entry (used when no matching event is active).Category: B1SiteVisitorInfo Foreign: CalendarEvent.IdVisitorDensityEB1VisitorDensityVisitor crowd density level. Converted to a headcount via UB1SiteConfigDataAsset.Category: B1SiteVisitorInfoVisitorStartHHMMint32Time (HHMM format) when visitors begin arriving at this site.Category: B1SiteVisitorInfoVisitorEndHHMMint32Time (HHMM format) when visitors stop arriving at this site.Category: B1SiteVisitorInfo |
| VisitorDensityEB1VisitorDensityVisitor crowd density level. Converted to a headcount via UB1SiteConfigDataAsset.Category: B1SiteVisitorInfoVisitorStartHHMMint32Time (HHMM format) when visitors begin arriving at this site.Category: B1SiteVisitorInfoVisitorEndHHMMint32Time (HHMM format) when visitors stop arriving at this site.Category: B1SiteVisitorInfo |
| VisitorStartHHMMint32Time (HHMM format) when visitors begin arriving at this site.Category: B1SiteVisitorInfoVisitorEndHHMMint32Time (HHMM format) when visitors stop arriving at this site.Category: B1SiteVisitorInfo |
| VisitorEndHHMMint32Time (HHMM format) when visitors stop arriving at this site.Category: B1SiteVisitorInfo |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoSite[EB1SiteActionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteactionreason)[EB1SiteActionTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteactiontarget)[EB1SiteActionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteactiontype)[EB1SiteEventTargetRoleOption](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteeventtargetroleoption)[EB1SiteEventTargetType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteeventtargettype)[EB1SiteEventType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteeventtype)[EB1SiteState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1sitestate)[EB1SiteSubType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1sitesubtype)[EB1SiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1sitetype)[Site Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/site)[SiteAction Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/siteaction)[SiteBuildPresetInfo Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/sitebuildpresetinfo)
