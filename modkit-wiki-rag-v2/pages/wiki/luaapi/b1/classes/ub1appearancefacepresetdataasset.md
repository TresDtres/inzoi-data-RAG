---
document_id: "cf03ae3b63b108ae84b8df6b93969541fb9101c7bd74fee0c3765a10fde0d530"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1appearancefacepresetdataasset"
title: "UB1AppearanceFacePresetDataAsset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:49+00:00"
content_sha256: "30b37c614e5ad9ed4598bf892110de3a4b017d29b361d8b554516d1fb487b903"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1appearancefacepresetdataasset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data asset storing face preset data including head descriptions, skin slider values, and JSON import/export utilities for the face customization system.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| Category`classes`Extends`UB1DataAssetBase` |
| Extends`UB1DataAssetBase` |

# Properties (7)

| NameTypeDescription`DlcName``string`DLC name used when exporting face preset data to JSON.`ExportIndices``integer[]`Specific indices to export when bSelectIndicesToExport is true.`FacePresetData``FB1FacePresetItem[]`Ordered face preset items used by the customization system.`ImportJsonPath``string`File path used when importing face presets from JSON.`SkinSliderInitValueList``table<string, number>`Initial slider values for each skin scalar parameter ID.`StringTableIdbySkinScalarParameterId``table<string, string>`Maps skin scalar parameter IDs to their string table localization keys.`bSelectIndicesToExport``boolean`If true, only the indices in ExportIndices are exported. |
| --- |
| `DlcName``string`DLC name used when exporting face preset data to JSON.`ExportIndices``integer[]`Specific indices to export when bSelectIndicesToExport is true.`FacePresetData``FB1FacePresetItem[]`Ordered face preset items used by the customization system.`ImportJsonPath``string`File path used when importing face presets from JSON.`SkinSliderInitValueList``table<string, number>`Initial slider values for each skin scalar parameter ID.`StringTableIdbySkinScalarParameterId``table<string, string>`Maps skin scalar parameter IDs to their string table localization keys.`bSelectIndicesToExport``boolean`If true, only the indices in ExportIndices are exported. |
| `ExportIndices``integer[]`Specific indices to export when bSelectIndicesToExport is true.`FacePresetData``FB1FacePresetItem[]`Ordered face preset items used by the customization system.`ImportJsonPath``string`File path used when importing face presets from JSON.`SkinSliderInitValueList``table<string, number>`Initial slider values for each skin scalar parameter ID.`StringTableIdbySkinScalarParameterId``table<string, string>`Maps skin scalar parameter IDs to their string table localization keys.`bSelectIndicesToExport``boolean`If true, only the indices in ExportIndices are exported. |
| `FacePresetData``FB1FacePresetItem[]`Ordered face preset items used by the customization system.`ImportJsonPath``string`File path used when importing face presets from JSON.`SkinSliderInitValueList``table<string, number>`Initial slider values for each skin scalar parameter ID.`StringTableIdbySkinScalarParameterId``table<string, string>`Maps skin scalar parameter IDs to their string table localization keys.`bSelectIndicesToExport``boolean`If true, only the indices in ExportIndices are exported. |
| `ImportJsonPath``string`File path used when importing face presets from JSON.`SkinSliderInitValueList``table<string, number>`Initial slider values for each skin scalar parameter ID.`StringTableIdbySkinScalarParameterId``table<string, string>`Maps skin scalar parameter IDs to their string table localization keys.`bSelectIndicesToExport``boolean`If true, only the indices in ExportIndices are exported. |
| `SkinSliderInitValueList``table<string, number>`Initial slider values for each skin scalar parameter ID.`StringTableIdbySkinScalarParameterId``table<string, string>`Maps skin scalar parameter IDs to their string table localization keys.`bSelectIndicesToExport``boolean`If true, only the indices in ExportIndices are exported. |
| `StringTableIdbySkinScalarParameterId``table<string, string>`Maps skin scalar parameter IDs to their string table localization keys.`bSelectIndicesToExport``boolean`If true, only the indices in ExportIndices are exported. |
| `bSelectIndicesToExport``boolean`If true, only the indices in ExportIndices are exported. |

# Functions (3)

| FunctionParametersReturnsDescription`ExportToJsonDlc``-``-``ExportToJsonMain``-``-``ImportFromJson``-``-` |
| --- |
| `ExportToJsonDlc``-``-``ExportToJsonMain``-``-``ImportFromJson``-``-` |
| `ExportToJsonMain``-``-``ImportFromJson``-``-` |
| `ImportFromJson``-``-` |
