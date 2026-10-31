---
document_id: "019afeda42200f093293c9f31314d7cb2a32a07bbb8bb6261777e2a95d0145eb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1objectpartsdefinition"
title: "FB1ObjectPartsDefinition"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:36+00:00"
content_sha256: "d69b21d096fd47a94244f24bd24e127647bc0602580ebc870ce27ce348457972"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1objectpartsdefinition"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a named customizable part of a game object, specifying its category, mesh descriptions, and usage rules. Used within customizable material parts table rows to describe individual object sub-surfaces.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`CustomUsageId``string`ID referencing the custom usage row defining advanced customization options for this part.`Description``FB1ObjectPartsDescription[]`Array of mesh-slot descriptions that make up this part's surface areas.`ListKey``string`Unique list key identifying this part definition within its parent array.`ParamUsageId``string`ID referencing the parameter usage row defining which attributes can be customized on this part.`PartsCategory``string`Category grouping this part belongs to in the customization UI.`PartsName``string`String table key referencing the localized display name for this part. |
| --- |
| `CustomUsageId``string`ID referencing the custom usage row defining advanced customization options for this part.`Description``FB1ObjectPartsDescription[]`Array of mesh-slot descriptions that make up this part's surface areas.`ListKey``string`Unique list key identifying this part definition within its parent array.`ParamUsageId``string`ID referencing the parameter usage row defining which attributes can be customized on this part.`PartsCategory``string`Category grouping this part belongs to in the customization UI.`PartsName``string`String table key referencing the localized display name for this part. |
| `Description``FB1ObjectPartsDescription[]`Array of mesh-slot descriptions that make up this part's surface areas.`ListKey``string`Unique list key identifying this part definition within its parent array.`ParamUsageId``string`ID referencing the parameter usage row defining which attributes can be customized on this part.`PartsCategory``string`Category grouping this part belongs to in the customization UI.`PartsName``string`String table key referencing the localized display name for this part. |
| `ListKey``string`Unique list key identifying this part definition within its parent array.`ParamUsageId``string`ID referencing the parameter usage row defining which attributes can be customized on this part.`PartsCategory``string`Category grouping this part belongs to in the customization UI.`PartsName``string`String table key referencing the localized display name for this part. |
| `ParamUsageId``string`ID referencing the parameter usage row defining which attributes can be customized on this part.`PartsCategory``string`Category grouping this part belongs to in the customization UI.`PartsName``string`String table key referencing the localized display name for this part. |
| `PartsCategory``string`Category grouping this part belongs to in the customization UI.`PartsName``string`String table key referencing the localized display name for this part. |
| `PartsName``string`String table key referencing the localized display name for this part. |
