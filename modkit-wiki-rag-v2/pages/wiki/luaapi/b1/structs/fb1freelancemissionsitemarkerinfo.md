---
document_id: "27ecbc03f1112b96d52450a868e7dd5b234ebe74f8a5bc0ff683a1fc1cd49a5b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancemissionsitemarkerinfo"
title: "FB1FreelanceMissionSiteMarkerInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:55+00:00"
content_sha256: "03e20192ada701cd01721bbdbe226f787bf09d3dcea61d1adef7bcbd9e3ccc9d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1freelancemissionsitemarkerinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Freelance mission site marker info. Sent via B2→B1 packet to switch world-map/minimap site markers to mission mode.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`QuestCategoryId``string`Quest category ID — used by B1 for icon/color lookup.`SiteEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Site EntityId where the mission marker should be displayed.`bShow``boolean`true: show mission marker, false: restore original marker. |
| --- |
| `QuestCategoryId``string`Quest category ID — used by B1 for icon/color lookup.`SiteEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Site EntityId where the mission marker should be displayed.`bShow``boolean`true: show mission marker, false: restore original marker. |
| `SiteEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Site EntityId where the mission marker should be displayed.`bShow``boolean`true: show mission marker, false: restore original marker. |
| `bShow``boolean`true: show mission marker, false: restore original marker. |
