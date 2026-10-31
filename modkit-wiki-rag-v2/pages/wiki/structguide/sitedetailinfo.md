---
document_id: "b80353cfb7b66500cd616a29e7dc62a460d0daedd505a1efb92f581d06c9f9f6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/sitedetailinfo"
title: "📘 SiteDetailInfo Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:03+00:00"
content_sha256: "019197267d32f057534def2f3958cd6841fcfc883fa6ec90f713e1a636a0eafc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/sitedetailinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1SiteDetailInfoTableRow

Defines detailed configuration for a site, such as resident limits and required objects.

### Properties

- **Id** (`FName`): Unique identifier for this detailed site info.
- **ResidentMaxCount** (`int32`): Maximum number of residents allowed in this site.
- **ResidentMinCount** (`int32`): Minimum number of residents required for this site to be functional.
- **RequiredObjects** (`TArray<FB1SiteRequiredObjectInfo>`): List of objects required to complete or activate the site.

## 📚 References

- [FB1SiteRequiredObjectInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1siterequiredobjectinfo)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoSite[EB1SiteActionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteactionreason)[EB1SiteActionTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteactiontarget)[EB1SiteActionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteactiontype)[EB1SiteEventTargetRoleOption](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteeventtargetroleoption)[EB1SiteEventTargetType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteeventtargettype)[EB1SiteEventType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteeventtype)[EB1SiteState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1sitestate)[EB1SiteSubType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1sitesubtype)[EB1SiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1sitetype)[Site Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/site)[SiteAction Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/siteaction)[SiteBuildPresetInfo Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/sitebuildpresetinfo)
