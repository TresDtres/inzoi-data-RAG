---
document_id: "4a951a87d0aafc1c1499ff73672e5443d767ecf910a1f33f567cd9d81f8aff47"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1minimapcharmarkwidget"
title: "UB1MinimapCharMarkWidget"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:54+00:00"
content_sha256: "2940326da1933aa3628daf77e40ba3f96e4f230393d4f904abf4d4e6e48000fe"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1minimapcharmarkwidget"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- DisableNativeTick: a class that does not use NativeTick. Without this meta, ClassRequiresNativeTick=true forces every instance to tick. Position/direction/portrait-angle updates are pushed by the parent (B1MinimapBaseWidget), so the mark itself need not tick. With the meta, it ticks only while an anim plays.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends[`UB1MinimapMarkBaseWidget`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1minimapmarkbasewidget) |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends[`UB1MinimapMarkBaseWidget`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1minimapmarkbasewidget) |
| EnvironmentB1 - PresentationCategory`classes`Extends[`UB1MinimapMarkBaseWidget`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1minimapmarkbasewidget) |
| Category`classes`Extends[`UB1MinimapMarkBaseWidget`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1minimapmarkbasewidget) |
| Extends[`UB1MinimapMarkBaseWidget`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1minimapmarkbasewidget) |

# Properties (2)

| NameTypeDescription`BW_DirectionImage``any``BW_PortraitImage``any` |
| --- |
| `BW_DirectionImage``any``BW_PortraitImage``any` |
| `BW_PortraitImage``any` |
