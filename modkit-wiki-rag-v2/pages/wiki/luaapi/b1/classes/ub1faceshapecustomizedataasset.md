---
document_id: "f1bc02663b2308c50ffc72f979b1b60271fbec80996a73a660553ecfa8b00462"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1faceshapecustomizedataasset"
title: "UB1FaceShapeCustomizeDataAsset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:25+00:00"
content_sha256: "b1f7d57cddf724f3c316426b1b3cf32c429841aabafb25f7fa5d3c8536d4dd3b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1faceshapecustomizedataasset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data asset storing face shape customization data for both female and male characters, keyed by body age type.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| Category`classes`Extends`UB1DataAssetBase` |
| Extends`UB1DataAssetBase` |

# Properties (5)

| NameTypeDescription`FemaleFaceData``table<EB1BodyAgeType, FB1FaceShapeCustomizeData>`Face shape customization data for female characters, keyed by body age type.`FemaleShapeValueOffsets``table<EB1GrowthStep, FB1ShapeValueOffsets>``GizmoRotationFactorByAxis``table<EB1GizmoAxisType, number>`Sensitivity multiplier applied to face gizmo rotation drag, keyed by gizmo axis. X is driven by vertical mouse motion, Y by horizontal, Z by circular motion. Missing keys fall back to B1FaceShapeCustomize::DefaultGizmoRotationFactor. 1.0 keeps the legacy gain of one dragged degree -> 0.01 normalized shape value.`MaleFaceData``table<EB1BodyAgeType, FB1FaceShapeCustomizeData>`Face shape customization data for male characters, keyed by body age type.`MaleShapeValueOffsets``table<EB1GrowthStep, FB1ShapeValueOffsets>` |
| --- |
| `FemaleFaceData``table<EB1BodyAgeType, FB1FaceShapeCustomizeData>`Face shape customization data for female characters, keyed by body age type.`FemaleShapeValueOffsets``table<EB1GrowthStep, FB1ShapeValueOffsets>``GizmoRotationFactorByAxis``table<EB1GizmoAxisType, number>`Sensitivity multiplier applied to face gizmo rotation drag, keyed by gizmo axis. X is driven by vertical mouse motion, Y by horizontal, Z by circular motion. Missing keys fall back to B1FaceShapeCustomize::DefaultGizmoRotationFactor. 1.0 keeps the legacy gain of one dragged degree -> 0.01 normalized shape value.`MaleFaceData``table<EB1BodyAgeType, FB1FaceShapeCustomizeData>`Face shape customization data for male characters, keyed by body age type.`MaleShapeValueOffsets``table<EB1GrowthStep, FB1ShapeValueOffsets>` |
| `FemaleShapeValueOffsets``table<EB1GrowthStep, FB1ShapeValueOffsets>``GizmoRotationFactorByAxis``table<EB1GizmoAxisType, number>`Sensitivity multiplier applied to face gizmo rotation drag, keyed by gizmo axis. X is driven by vertical mouse motion, Y by horizontal, Z by circular motion. Missing keys fall back to B1FaceShapeCustomize::DefaultGizmoRotationFactor. 1.0 keeps the legacy gain of one dragged degree -> 0.01 normalized shape value.`MaleFaceData``table<EB1BodyAgeType, FB1FaceShapeCustomizeData>`Face shape customization data for male characters, keyed by body age type.`MaleShapeValueOffsets``table<EB1GrowthStep, FB1ShapeValueOffsets>` |
| `GizmoRotationFactorByAxis``table<EB1GizmoAxisType, number>`Sensitivity multiplier applied to face gizmo rotation drag, keyed by gizmo axis. X is driven by vertical mouse motion, Y by horizontal, Z by circular motion. Missing keys fall back to B1FaceShapeCustomize::DefaultGizmoRotationFactor. 1.0 keeps the legacy gain of one dragged degree -> 0.01 normalized shape value.`MaleFaceData``table<EB1BodyAgeType, FB1FaceShapeCustomizeData>`Face shape customization data for male characters, keyed by body age type.`MaleShapeValueOffsets``table<EB1GrowthStep, FB1ShapeValueOffsets>` |
| `MaleFaceData``table<EB1BodyAgeType, FB1FaceShapeCustomizeData>`Face shape customization data for male characters, keyed by body age type.`MaleShapeValueOffsets``table<EB1GrowthStep, FB1ShapeValueOffsets>` |
| `MaleShapeValueOffsets``table<EB1GrowthStep, FB1ShapeValueOffsets>` |
