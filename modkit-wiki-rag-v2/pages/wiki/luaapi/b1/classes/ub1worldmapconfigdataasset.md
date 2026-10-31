---
document_id: "44343ffb1e8fdcf886badd54a9a77d867eaf6b3fab4e5144195114178160579c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1worldmapconfigdataasset"
title: "UB1WorldMapConfigDataAsset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:38:33+00:00"
content_sha256: "bfbaed96c49e2b617ec35c751f70c7c24b9ccbb98ad77baa9ae8bdc5afae86fc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1worldmapconfigdataasset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data asset that holds configuration for the world map UI. Contains click thresholds, per-level camera settings, family move restriction messages, and site edit limits.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| Category`classes`Extends`UB1DataAssetBase` |
| Extends`UB1DataAssetBase` |

# Properties (6)

| NameTypeDescription`FamilyMoveImpossibleReasons``table<EB1WorldMapFamilyMoveImpossibleReason, string>`Map of text IDs to display per reason why family move is not allowed.`LeftClickThreshold``number`Mouse movement threshold in pixels to distinguish a click from a drag on the map.`SiteDescLimitSize``integer`Maximum character count allowed for a site description in site edit mode.`SiteNameLimitSize``integer`Maximum character count allowed for a site name in site edit mode.`WorldMapCameraSetting``FB1WorldMapCameraSetting[]`Per-level camera configuration entries for the world map.`WorldPerformanceDataLayerSetting``FB1WorldPerformanceDataLayer[]`Per-level data layer configuration entries for the world map using for throttling subsystem. |
| --- |
| `FamilyMoveImpossibleReasons``table<EB1WorldMapFamilyMoveImpossibleReason, string>`Map of text IDs to display per reason why family move is not allowed.`LeftClickThreshold``number`Mouse movement threshold in pixels to distinguish a click from a drag on the map.`SiteDescLimitSize``integer`Maximum character count allowed for a site description in site edit mode.`SiteNameLimitSize``integer`Maximum character count allowed for a site name in site edit mode.`WorldMapCameraSetting``FB1WorldMapCameraSetting[]`Per-level camera configuration entries for the world map.`WorldPerformanceDataLayerSetting``FB1WorldPerformanceDataLayer[]`Per-level data layer configuration entries for the world map using for throttling subsystem. |
| `LeftClickThreshold``number`Mouse movement threshold in pixels to distinguish a click from a drag on the map.`SiteDescLimitSize``integer`Maximum character count allowed for a site description in site edit mode.`SiteNameLimitSize``integer`Maximum character count allowed for a site name in site edit mode.`WorldMapCameraSetting``FB1WorldMapCameraSetting[]`Per-level camera configuration entries for the world map.`WorldPerformanceDataLayerSetting``FB1WorldPerformanceDataLayer[]`Per-level data layer configuration entries for the world map using for throttling subsystem. |
| `SiteDescLimitSize``integer`Maximum character count allowed for a site description in site edit mode.`SiteNameLimitSize``integer`Maximum character count allowed for a site name in site edit mode.`WorldMapCameraSetting``FB1WorldMapCameraSetting[]`Per-level camera configuration entries for the world map.`WorldPerformanceDataLayerSetting``FB1WorldPerformanceDataLayer[]`Per-level data layer configuration entries for the world map using for throttling subsystem. |
| `SiteNameLimitSize``integer`Maximum character count allowed for a site name in site edit mode.`WorldMapCameraSetting``FB1WorldMapCameraSetting[]`Per-level camera configuration entries for the world map.`WorldPerformanceDataLayerSetting``FB1WorldPerformanceDataLayer[]`Per-level data layer configuration entries for the world map using for throttling subsystem. |
| `WorldMapCameraSetting``FB1WorldMapCameraSetting[]`Per-level camera configuration entries for the world map.`WorldPerformanceDataLayerSetting``FB1WorldPerformanceDataLayer[]`Per-level data layer configuration entries for the world map using for throttling subsystem. |
| `WorldPerformanceDataLayerSetting``FB1WorldPerformanceDataLayer[]`Per-level data layer configuration entries for the world map using for throttling subsystem. |
