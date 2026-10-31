---
document_id: "65adb2577c2f1b39d3ac75de189ae849c7a177a7b00154549fb7f7bd52ad1e86"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1objectpartsoverride"
title: "FB1ObjectPartsOverride"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:36+00:00"
content_sha256: "6d9e0f1e73fe009721c50fb1267b2d6a939b796dcbb064d6eca96431f2c01905"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1objectpartsoverride"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Describes an override for a specific object part within a material change entry. Used when a material change also requires altering the part's mesh-slot assignments.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`Description``FB1ObjectPartsDescription[]`Array of mesh-slot descriptions that replace the original part's surface assignments.`ListKey``string`Unique list key identifying this parts override entry within its parent array.`ParamUsageId``string`ID referencing the parameter usage row for this overridden part.`PartsCategory``string`Category of the part being overridden.`PartsName``string`Name of the part being overridden. |
| --- |
| `Description``FB1ObjectPartsDescription[]`Array of mesh-slot descriptions that replace the original part's surface assignments.`ListKey``string`Unique list key identifying this parts override entry within its parent array.`ParamUsageId``string`ID referencing the parameter usage row for this overridden part.`PartsCategory``string`Category of the part being overridden.`PartsName``string`Name of the part being overridden. |
| `ListKey``string`Unique list key identifying this parts override entry within its parent array.`ParamUsageId``string`ID referencing the parameter usage row for this overridden part.`PartsCategory``string`Category of the part being overridden.`PartsName``string`Name of the part being overridden. |
| `ParamUsageId``string`ID referencing the parameter usage row for this overridden part.`PartsCategory``string`Category of the part being overridden.`PartsName``string`Name of the part being overridden. |
| `PartsCategory``string`Category of the part being overridden.`PartsName``string`Name of the part being overridden. |
| `PartsName``string`Name of the part being overridden. |
