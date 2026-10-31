---
document_id: "2911d448149ab31fae5844448e629d0f4faf5df5d3f517c6651877e3ffceb7c4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ab1gizmoactor"
title: "AB1GizmoActor"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:35+00:00"
content_sha256: "957fad86eb82bd0340d46a1efdb3afacf967bf319486e6d37b8819dc63facf86"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ab1gizmoactor"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- No description available.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`AActor`Require`require('Actors.B1GizmoActor')` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`AActor`Require`require('Actors.B1GizmoActor')` |
| EnvironmentB1 - PresentationCategory`classes`Extends`AActor`Require`require('Actors.B1GizmoActor')` |
| Category`classes`Extends`AActor`Require`require('Actors.B1GizmoActor')` |
| Extends`AActor`Require`require('Actors.B1GizmoActor')` |
| Require`require('Actors.B1GizmoActor')` |

# Properties (9)

| NameTypeDescription`GizmoColorSet`[`FB1GizmoColorSet`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1gizmocolorset)`MovingSpeedMap``table<EB1GizmoTransformType, number>``NonOverScaleRatio``number``OriginLocation``FVector``OutlineScaleLimit``FVector2D``OutlineThickness``number``OverScaleRatio``number``ScaleFactor``number``ScaleLimit``FVector2D` |
| --- |
| `GizmoColorSet`[`FB1GizmoColorSet`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1gizmocolorset)`MovingSpeedMap``table<EB1GizmoTransformType, number>``NonOverScaleRatio``number``OriginLocation``FVector``OutlineScaleLimit``FVector2D``OutlineThickness``number``OverScaleRatio``number``ScaleFactor``number``ScaleLimit``FVector2D` |
| `MovingSpeedMap``table<EB1GizmoTransformType, number>``NonOverScaleRatio``number``OriginLocation``FVector``OutlineScaleLimit``FVector2D``OutlineThickness``number``OverScaleRatio``number``ScaleFactor``number``ScaleLimit``FVector2D` |
| `NonOverScaleRatio``number``OriginLocation``FVector``OutlineScaleLimit``FVector2D``OutlineThickness``number``OverScaleRatio``number``ScaleFactor``number``ScaleLimit``FVector2D` |
| `OriginLocation``FVector``OutlineScaleLimit``FVector2D``OutlineThickness``number``OverScaleRatio``number``ScaleFactor``number``ScaleLimit``FVector2D` |
| `OutlineScaleLimit``FVector2D``OutlineThickness``number``OverScaleRatio``number``ScaleFactor``number``ScaleLimit``FVector2D` |
| `OutlineThickness``number``OverScaleRatio``number``ScaleFactor``number``ScaleLimit``FVector2D` |
| `OverScaleRatio``number``ScaleFactor``number``ScaleLimit``FVector2D` |
| `ScaleFactor``number``ScaleLimit``FVector2D` |
| `ScaleLimit``FVector2D` |

# Functions (3)

| FunctionParametersReturnsDescription`GetAxisDirection`InIsWorld: `boolean``FVector`Returns Axis Direction.`GetDraggingDistance``-``number`Returns Dragging Distance.`SetActiveAxis`InLocAxisFlag: `integer`, InRotAxisFlag: `integer`, InScaleAxisFlag: `integer`, bUseFreeMove: `boolean``-`Sets Active Axis. |
| --- |
| `GetAxisDirection`InIsWorld: `boolean``FVector`Returns Axis Direction.`GetDraggingDistance``-``number`Returns Dragging Distance.`SetActiveAxis`InLocAxisFlag: `integer`, InRotAxisFlag: `integer`, InScaleAxisFlag: `integer`, bUseFreeMove: `boolean``-`Sets Active Axis. |
| `GetDraggingDistance``-``number`Returns Dragging Distance.`SetActiveAxis`InLocAxisFlag: `integer`, InRotAxisFlag: `integer`, InScaleAxisFlag: `integer`, bUseFreeMove: `boolean``-`Sets Active Axis. |
| `SetActiveAxis`InLocAxisFlag: `integer`, InRotAxisFlag: `integer`, InScaleAxisFlag: `integer`, bUseFreeMove: `boolean``-`Sets Active Axis. |

# Override points (5)

Implement these in Lua as `AB1GizmoActor.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_ApplyFreeLocationDrag`InTarget: `InTarget``-`Applies Free Location Drag.`Override_HandleLeftMouseUp``-``-``Override_SetActiveAxisByFilterCategory`InFilterCategory: `InFilterCategory``boolean`Sets Active Axis By Filter Category.`Override_SetActiveRotationAxis`InRotAxisFlag: `InRotAxisFlag``-`Sets Active Rotation Axis.`Override_ShouldUseFreeLocationDrag``-``boolean`Returns whether it should Use Free Location Drag. |
| --- |
| `Override_ApplyFreeLocationDrag`InTarget: `InTarget``-`Applies Free Location Drag.`Override_HandleLeftMouseUp``-``-``Override_SetActiveAxisByFilterCategory`InFilterCategory: `InFilterCategory``boolean`Sets Active Axis By Filter Category.`Override_SetActiveRotationAxis`InRotAxisFlag: `InRotAxisFlag``-`Sets Active Rotation Axis.`Override_ShouldUseFreeLocationDrag``-``boolean`Returns whether it should Use Free Location Drag. |
| `Override_HandleLeftMouseUp``-``-``Override_SetActiveAxisByFilterCategory`InFilterCategory: `InFilterCategory``boolean`Sets Active Axis By Filter Category.`Override_SetActiveRotationAxis`InRotAxisFlag: `InRotAxisFlag``-`Sets Active Rotation Axis.`Override_ShouldUseFreeLocationDrag``-``boolean`Returns whether it should Use Free Location Drag. |
| `Override_SetActiveAxisByFilterCategory`InFilterCategory: `InFilterCategory``boolean`Sets Active Axis By Filter Category.`Override_SetActiveRotationAxis`InRotAxisFlag: `InRotAxisFlag``-`Sets Active Rotation Axis.`Override_ShouldUseFreeLocationDrag``-``boolean`Returns whether it should Use Free Location Drag. |
| `Override_SetActiveRotationAxis`InRotAxisFlag: `InRotAxisFlag``-`Sets Active Rotation Axis.`Override_ShouldUseFreeLocationDrag``-``boolean`Returns whether it should Use Free Location Drag. |
| `Override_ShouldUseFreeLocationDrag``-``boolean`Returns whether it should Use Free Location Drag. |
