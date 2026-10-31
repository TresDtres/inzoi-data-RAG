---
document_id: "9c2fde1cffdf79518a458a4cc95c7dd87b6638c3f475a55c083e57833a81b6a2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1focusregionentry"
title: "FB1FocusRegionEntry"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:53+00:00"
content_sha256: "5b65cb1018bc8c9dfea065b524269b1aabc3ff38eec4108b4a34761f5cc4c466"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1focusregionentry"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Per-WBP Focus Region registration entry. Widgets inside the WidgetTree may be regenerated on BP compile, so they are stored by name rather than by direct pointer.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (7)

| NameTypeDescription`Level``integer`Region priority. Among regions visible at the same time, only the highest Level is adopted as active.`RegionNickName``string`Unique NickName of this region. Used to identify the return target; must be unique among simultaneously active regions. None excludes it from nick-based return/identification. (Level cannot distinguish return targets, so nick is used.)`RegionWidgetName``string`Name of the focus region root widget. Its focusable children are grouped into one region.`ReturnNickName``string`(Optional) NickName of the region to return to when this region closes. If set, takes precedence over runtime capture. If empty, the previous region's nick is runtime-captured on override entry and used for return. (Key value preventing mis-return caused by wandering among same-Level siblings.)`VisualWidgetName``string`Name of the visual proxy widget for outline / distance calculation. If empty, RegionWidgetName itself is used.`bNestedChild``boolean``bPreviewOnly``boolean` |
| --- |
| `Level``integer`Region priority. Among regions visible at the same time, only the highest Level is adopted as active.`RegionNickName``string`Unique NickName of this region. Used to identify the return target; must be unique among simultaneously active regions. None excludes it from nick-based return/identification. (Level cannot distinguish return targets, so nick is used.)`RegionWidgetName``string`Name of the focus region root widget. Its focusable children are grouped into one region.`ReturnNickName``string`(Optional) NickName of the region to return to when this region closes. If set, takes precedence over runtime capture. If empty, the previous region's nick is runtime-captured on override entry and used for return. (Key value preventing mis-return caused by wandering among same-Level siblings.)`VisualWidgetName``string`Name of the visual proxy widget for outline / distance calculation. If empty, RegionWidgetName itself is used.`bNestedChild``boolean``bPreviewOnly``boolean` |
| `RegionNickName``string`Unique NickName of this region. Used to identify the return target; must be unique among simultaneously active regions. None excludes it from nick-based return/identification. (Level cannot distinguish return targets, so nick is used.)`RegionWidgetName``string`Name of the focus region root widget. Its focusable children are grouped into one region.`ReturnNickName``string`(Optional) NickName of the region to return to when this region closes. If set, takes precedence over runtime capture. If empty, the previous region's nick is runtime-captured on override entry and used for return. (Key value preventing mis-return caused by wandering among same-Level siblings.)`VisualWidgetName``string`Name of the visual proxy widget for outline / distance calculation. If empty, RegionWidgetName itself is used.`bNestedChild``boolean``bPreviewOnly``boolean` |
| `RegionWidgetName``string`Name of the focus region root widget. Its focusable children are grouped into one region.`ReturnNickName``string`(Optional) NickName of the region to return to when this region closes. If set, takes precedence over runtime capture. If empty, the previous region's nick is runtime-captured on override entry and used for return. (Key value preventing mis-return caused by wandering among same-Level siblings.)`VisualWidgetName``string`Name of the visual proxy widget for outline / distance calculation. If empty, RegionWidgetName itself is used.`bNestedChild``boolean``bPreviewOnly``boolean` |
| `ReturnNickName``string`(Optional) NickName of the region to return to when this region closes. If set, takes precedence over runtime capture. If empty, the previous region's nick is runtime-captured on override entry and used for return. (Key value preventing mis-return caused by wandering among same-Level siblings.)`VisualWidgetName``string`Name of the visual proxy widget for outline / distance calculation. If empty, RegionWidgetName itself is used.`bNestedChild``boolean``bPreviewOnly``boolean` |
| `VisualWidgetName``string`Name of the visual proxy widget for outline / distance calculation. If empty, RegionWidgetName itself is used.`bNestedChild``boolean``bPreviewOnly``boolean` |
| `bNestedChild``boolean``bPreviewOnly``boolean` |
| `bPreviewOnly``boolean` |
