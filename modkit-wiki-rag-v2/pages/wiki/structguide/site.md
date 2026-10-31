---
document_id: "60a2aa3fb9741dde8b1508deee68a508775c3e5f64cd22304e66c82335171db9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/site"
title: "📘 Site Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:02+00:00"
content_sha256: "7aa604d5c3eb4a8c806f9db8c5443c7931c846d696e78167536de15b78b39fbe"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/site"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1SiteTableRow

Defines a buildable or interactable site in the game world, including default info and trigger settings.

### Properties

- **Id** (`FName`): Unique identifier for the site.
- **DefaultInfo** (`FB1SiteDefaultInfo`): Default data used for display, size, weathering, rendering and etc.
- **SiteHint** (`FName`): Optional hint text or debug tag associated with the site.
- **SiteActionTriggers** (`TArray<FB1SiteActionTrigger>`): List of actions triggered based on time or condition while on site.

## 📚 References

- [FB1SiteDefaultInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1sitedefaultinfo)
- [FB1SiteActionTrigger](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1siteactiontrigger)
- [EB1SiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1sitetype)
- [EB1SiteSubType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1sitesubtype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoSite[EB1SiteActionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteactionreason)[EB1SiteActionTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteactiontarget)[EB1SiteActionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteactiontype)[EB1SiteEventTargetRoleOption](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteeventtargetroleoption)[EB1SiteEventTargetType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteeventtargettype)[EB1SiteEventType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1siteeventtype)[EB1SiteState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1sitestate)[EB1SiteSubType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1sitesubtype)[EB1SiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1sitetype)[SiteAction Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/siteaction)[SiteBuildPresetInfo Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/sitebuildpresetinfo)[SiteDetailInfo Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/sitedetailinfo)
