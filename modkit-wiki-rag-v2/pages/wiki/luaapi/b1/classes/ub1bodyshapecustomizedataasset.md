---
document_id: "058e0dc747de9f80f5bdbf5abc02062ca6535f7e2e6ada6f93c77b1118361591"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1bodyshapecustomizedataasset"
title: "UB1BodyShapeCustomizeDataAsset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:52+00:00"
content_sha256: "5458b0fade6b5579ca1bca6ebabc21ca765a831cbc5721d5a07166b0503deed0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1bodyshapecustomizedataasset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data asset storing body shape customization data for both female and male characters, keyed by body age type, with a body mass calibration value.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| Category`classes`Extends`UB1DataAssetBase` |
| Extends`UB1DataAssetBase` |

# Properties (5)

| NameTypeDescription`FemaleBodyData``table<EB1BodyAgeType, FB1BodyShapeCustomizeData>`Body shape customization data for female characters, keyed by body age type.`FemaleShapeValueOffsets``table<EB1GrowthStep, FB1ShapeValueOffsets>``MaleBodyData``table<EB1BodyAgeType, FB1BodyShapeCustomizeData>`Body shape customization data for male characters, keyed by body age type.`MaleShapeValueOffsets``table<EB1GrowthStep, FB1ShapeValueOffsets>``ShapeValueDeltaFromZeroForBodyMassCalibration``number`Shape value delta from zero used to calibrate body mass values in build canvas files. |
| --- |
| `FemaleBodyData``table<EB1BodyAgeType, FB1BodyShapeCustomizeData>`Body shape customization data for female characters, keyed by body age type.`FemaleShapeValueOffsets``table<EB1GrowthStep, FB1ShapeValueOffsets>``MaleBodyData``table<EB1BodyAgeType, FB1BodyShapeCustomizeData>`Body shape customization data for male characters, keyed by body age type.`MaleShapeValueOffsets``table<EB1GrowthStep, FB1ShapeValueOffsets>``ShapeValueDeltaFromZeroForBodyMassCalibration``number`Shape value delta from zero used to calibrate body mass values in build canvas files. |
| `FemaleShapeValueOffsets``table<EB1GrowthStep, FB1ShapeValueOffsets>``MaleBodyData``table<EB1BodyAgeType, FB1BodyShapeCustomizeData>`Body shape customization data for male characters, keyed by body age type.`MaleShapeValueOffsets``table<EB1GrowthStep, FB1ShapeValueOffsets>``ShapeValueDeltaFromZeroForBodyMassCalibration``number`Shape value delta from zero used to calibrate body mass values in build canvas files. |
| `MaleBodyData``table<EB1BodyAgeType, FB1BodyShapeCustomizeData>`Body shape customization data for male characters, keyed by body age type.`MaleShapeValueOffsets``table<EB1GrowthStep, FB1ShapeValueOffsets>``ShapeValueDeltaFromZeroForBodyMassCalibration``number`Shape value delta from zero used to calibrate body mass values in build canvas files. |
| `MaleShapeValueOffsets``table<EB1GrowthStep, FB1ShapeValueOffsets>``ShapeValueDeltaFromZeroForBodyMassCalibration``number`Shape value delta from zero used to calibrate body mass values in build canvas files. |
| `ShapeValueDeltaFromZeroForBodyMassCalibration``number`Shape value delta from zero used to calibrate body mass values in build canvas files. |
