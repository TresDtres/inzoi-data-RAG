---
document_id: "6c9ecca58dbf0ff322e9e27672c29c6d6c5248bc1207942d36879fc1b97fcc59"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1siteeventroleactivityinfo"
title: "FB1SiteEventRoleActivityInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:27+00:00"
content_sha256: "facefca6fe08c27bce17fb39d113edd4d8fce3713d436f1e376d00729e97f22f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1siteeventroleactivityinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines the activity behavior for a specific role during a site event, including recommended and banned activities.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`AutonomyPickRatio``number`The probability (0.0 to 1.0) that this role will autonomously pick an activity.`BannedActivitys``string[]`The list of interaction bag tags that are forbidden for this role during the event.`DressCodeInfo`[`FB1SiteEventDressCodeInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1siteeventdresscodeinfo)The dress code applied to this role during the site event.`RecommendedActivitys``string[]`The list of interaction bag tags recommended for this role during the event. |
| --- |
| `AutonomyPickRatio``number`The probability (0.0 to 1.0) that this role will autonomously pick an activity.`BannedActivitys``string[]`The list of interaction bag tags that are forbidden for this role during the event.`DressCodeInfo`[`FB1SiteEventDressCodeInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1siteeventdresscodeinfo)The dress code applied to this role during the site event.`RecommendedActivitys``string[]`The list of interaction bag tags recommended for this role during the event. |
| `BannedActivitys``string[]`The list of interaction bag tags that are forbidden for this role during the event.`DressCodeInfo`[`FB1SiteEventDressCodeInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1siteeventdresscodeinfo)The dress code applied to this role during the site event.`RecommendedActivitys``string[]`The list of interaction bag tags recommended for this role during the event. |
| `DressCodeInfo`[`FB1SiteEventDressCodeInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1siteeventdresscodeinfo)The dress code applied to this role during the site event.`RecommendedActivitys``string[]`The list of interaction bag tags recommended for this role during the event. |
| `RecommendedActivitys``string[]`The list of interaction bag tags recommended for this role during the event. |
