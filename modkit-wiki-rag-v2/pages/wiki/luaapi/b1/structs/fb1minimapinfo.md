---
document_id: "595f37c19fb990445031c333cff99d1a97c84c2b7fbc63f2607a0fbca8cb0a31"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1minimapinfo"
title: "FB1MinimapInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:27+00:00"
content_sha256: "2e359c87569fc2cf5ab0c1bf5b0e6c0bb73a1f6c0b69a03230bfd16e3e72bb2a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1minimapinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Contains minimap configuration data for a specific map. Stored in UB1UIMinimapDataAsset and looked up by map name via B1MinimapComponent.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`CaptureRotationOffset``number`Rotation offset applied to align the minimap with the world (degrees). Rotation offset in degrees applied to align the minimap image with the world orientation.`CaptureWidth``number`Width of the area captured for the minimap (world units). Width of the world area captured for the minimap in world units.`CaptureWorldPosition``FVector2D`Center position of the captured area in world space. Center 2D position of the captured world area in world space.`DefaultZoom``number`Default zoom level when the minimap is first displayed. Default zoom level used when the minimap is first opened.`MinimapTexture``any`Texture image used as the minimap background. Texture displayed as the background of the minimap.`ZoomRange``FVector2D`Allowed zoom range (X = min, Y = max). Minimum (X) and maximum (Y) allowed zoom levels for the minimap. |
| --- |
| `CaptureRotationOffset``number`Rotation offset applied to align the minimap with the world (degrees). Rotation offset in degrees applied to align the minimap image with the world orientation.`CaptureWidth``number`Width of the area captured for the minimap (world units). Width of the world area captured for the minimap in world units.`CaptureWorldPosition``FVector2D`Center position of the captured area in world space. Center 2D position of the captured world area in world space.`DefaultZoom``number`Default zoom level when the minimap is first displayed. Default zoom level used when the minimap is first opened.`MinimapTexture``any`Texture image used as the minimap background. Texture displayed as the background of the minimap.`ZoomRange``FVector2D`Allowed zoom range (X = min, Y = max). Minimum (X) and maximum (Y) allowed zoom levels for the minimap. |
| `CaptureWidth``number`Width of the area captured for the minimap (world units). Width of the world area captured for the minimap in world units.`CaptureWorldPosition``FVector2D`Center position of the captured area in world space. Center 2D position of the captured world area in world space.`DefaultZoom``number`Default zoom level when the minimap is first displayed. Default zoom level used when the minimap is first opened.`MinimapTexture``any`Texture image used as the minimap background. Texture displayed as the background of the minimap.`ZoomRange``FVector2D`Allowed zoom range (X = min, Y = max). Minimum (X) and maximum (Y) allowed zoom levels for the minimap. |
| `CaptureWorldPosition``FVector2D`Center position of the captured area in world space. Center 2D position of the captured world area in world space.`DefaultZoom``number`Default zoom level when the minimap is first displayed. Default zoom level used when the minimap is first opened.`MinimapTexture``any`Texture image used as the minimap background. Texture displayed as the background of the minimap.`ZoomRange``FVector2D`Allowed zoom range (X = min, Y = max). Minimum (X) and maximum (Y) allowed zoom levels for the minimap. |
| `DefaultZoom``number`Default zoom level when the minimap is first displayed. Default zoom level used when the minimap is first opened.`MinimapTexture``any`Texture image used as the minimap background. Texture displayed as the background of the minimap.`ZoomRange``FVector2D`Allowed zoom range (X = min, Y = max). Minimum (X) and maximum (Y) allowed zoom levels for the minimap. |
| `MinimapTexture``any`Texture image used as the minimap background. Texture displayed as the background of the minimap.`ZoomRange``FVector2D`Allowed zoom range (X = min, Y = max). Minimum (X) and maximum (Y) allowed zoom levels for the minimap. |
| `ZoomRange``FVector2D`Allowed zoom range (X = min, Y = max). Minimum (X) and maximum (Y) allowed zoom levels for the minimap. |
