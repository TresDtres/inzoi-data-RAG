---
document_id: "68219ee4bc7033e57c16d5b7fd967e565176ef4d13d0957d340e3cff423b4b12"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1sitepathfindoutlineinfo"
title: "FB1SitePathFindOutlineInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:28+00:00"
content_sha256: "9111b0dd00729a753c3c812b74cfee9fdad172bf966a77a111699ededad469ef"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1sitepathfindoutlineinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores the outline boundary segment for site pathfinding, identifying which side it belongs to and its world-space start and end points. Used during site-boundary sliding to determine collision contour edges around a site's pathfinding area.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`EndPoint``FVector`World-space end point of this outline boundary segment.`Side`[`EB1SitePathFindOutlineSide`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1sitepathfindoutlineside)Which side of the site boundary this outline segment is on.`StartPoint``FVector`World-space start point of this outline boundary segment. |
| --- |
| `EndPoint``FVector`World-space end point of this outline boundary segment.`Side`[`EB1SitePathFindOutlineSide`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1sitepathfindoutlineside)Which side of the site boundary this outline segment is on.`StartPoint``FVector`World-space start point of this outline boundary segment. |
| `Side`[`EB1SitePathFindOutlineSide`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1sitepathfindoutlineside)Which side of the site boundary this outline segment is on.`StartPoint``FVector`World-space start point of this outline boundary segment. |
| `StartPoint``FVector`World-space start point of this outline boundary segment. |
