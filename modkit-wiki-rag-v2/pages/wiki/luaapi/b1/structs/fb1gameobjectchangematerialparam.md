---
document_id: "4fe7acc73c5f2049b4d8df65290042e3307bda71d5aff59204fac53fb379f24a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1gameobjectchangematerialparam"
title: "FB1GameObjectChangeMaterialParam"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:00+00:00"
content_sha256: "5a0562122a89090260233cf440ba89434eec6c2940a526dc00c225b37b5ab6c8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1gameobjectchangematerialparam"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- A single material change option providing a replacement material asset and optional part overrides. Used within material change group table rows to represent individual swappable material entries.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (9)

| NameTypeDescription`Icon``UObject`Soft reference to the icon displayed for this material change option in the UI.`ListKey``string`Unique list key identifying this material change parameter within its parent array.`Material``UMaterialInterface`Soft reference to the replacement material interface asset.`MaterialName``string`String table key referencing the localized display name for this material change option.`OverrideParam``boolean`Whether this entry overrides the default material parameters defined in the usage row.`OverrideParts``boolean`Whether this material change overrides specific part definitions on the object.`OverrideTransparency``boolean`Whether this material change overrides the object's transparency settings.`ParamUsageId``string`ID referencing the parameter usage row applied when OverrideParam is true.`Parts``FB1ObjectPartsOverride[]`Array of part overrides applied when OverrideParts is true. |
| --- |
| `Icon``UObject`Soft reference to the icon displayed for this material change option in the UI.`ListKey``string`Unique list key identifying this material change parameter within its parent array.`Material``UMaterialInterface`Soft reference to the replacement material interface asset.`MaterialName``string`String table key referencing the localized display name for this material change option.`OverrideParam``boolean`Whether this entry overrides the default material parameters defined in the usage row.`OverrideParts``boolean`Whether this material change overrides specific part definitions on the object.`OverrideTransparency``boolean`Whether this material change overrides the object's transparency settings.`ParamUsageId``string`ID referencing the parameter usage row applied when OverrideParam is true.`Parts``FB1ObjectPartsOverride[]`Array of part overrides applied when OverrideParts is true. |
| `ListKey``string`Unique list key identifying this material change parameter within its parent array.`Material``UMaterialInterface`Soft reference to the replacement material interface asset.`MaterialName``string`String table key referencing the localized display name for this material change option.`OverrideParam``boolean`Whether this entry overrides the default material parameters defined in the usage row.`OverrideParts``boolean`Whether this material change overrides specific part definitions on the object.`OverrideTransparency``boolean`Whether this material change overrides the object's transparency settings.`ParamUsageId``string`ID referencing the parameter usage row applied when OverrideParam is true.`Parts``FB1ObjectPartsOverride[]`Array of part overrides applied when OverrideParts is true. |
| `Material``UMaterialInterface`Soft reference to the replacement material interface asset.`MaterialName``string`String table key referencing the localized display name for this material change option.`OverrideParam``boolean`Whether this entry overrides the default material parameters defined in the usage row.`OverrideParts``boolean`Whether this material change overrides specific part definitions on the object.`OverrideTransparency``boolean`Whether this material change overrides the object's transparency settings.`ParamUsageId``string`ID referencing the parameter usage row applied when OverrideParam is true.`Parts``FB1ObjectPartsOverride[]`Array of part overrides applied when OverrideParts is true. |
| `MaterialName``string`String table key referencing the localized display name for this material change option.`OverrideParam``boolean`Whether this entry overrides the default material parameters defined in the usage row.`OverrideParts``boolean`Whether this material change overrides specific part definitions on the object.`OverrideTransparency``boolean`Whether this material change overrides the object's transparency settings.`ParamUsageId``string`ID referencing the parameter usage row applied when OverrideParam is true.`Parts``FB1ObjectPartsOverride[]`Array of part overrides applied when OverrideParts is true. |
| `OverrideParam``boolean`Whether this entry overrides the default material parameters defined in the usage row.`OverrideParts``boolean`Whether this material change overrides specific part definitions on the object.`OverrideTransparency``boolean`Whether this material change overrides the object's transparency settings.`ParamUsageId``string`ID referencing the parameter usage row applied when OverrideParam is true.`Parts``FB1ObjectPartsOverride[]`Array of part overrides applied when OverrideParts is true. |
| `OverrideParts``boolean`Whether this material change overrides specific part definitions on the object.`OverrideTransparency``boolean`Whether this material change overrides the object's transparency settings.`ParamUsageId``string`ID referencing the parameter usage row applied when OverrideParam is true.`Parts``FB1ObjectPartsOverride[]`Array of part overrides applied when OverrideParts is true. |
| `OverrideTransparency``boolean`Whether this material change overrides the object's transparency settings.`ParamUsageId``string`ID referencing the parameter usage row applied when OverrideParam is true.`Parts``FB1ObjectPartsOverride[]`Array of part overrides applied when OverrideParts is true. |
| `ParamUsageId``string`ID referencing the parameter usage row applied when OverrideParam is true.`Parts``FB1ObjectPartsOverride[]`Array of part overrides applied when OverrideParts is true. |
| `Parts``FB1ObjectPartsOverride[]`Array of part overrides applied when OverrideParts is true. |
