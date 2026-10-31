---
document_id: "7d3521c0a081b6713a1ca5a34968e18b877002906e7923fe43f358e92b83209e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1objectcustomizesavedata"
title: "FB1ObjectCustomizeSaveData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:35+00:00"
content_sha256: "f1bd23de6c50ffe4dd183c9b3f7407991f169411f2857d1218da38c705c20c06"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1objectcustomizesavedata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Serializable runtime save data for a single object customization slot, storing typed value maps. Persists integer, float, color, and string customization parameters keyed by parameter name.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`ColorMap``table<string, FLinearColor>`Map of linear color customization parameter values keyed by parameter name.`FloatMap``table<string, number>`Map of float customization parameter values keyed by parameter name.`Index``integer`Index of this customization slot within the object's customization data array.`Int32Map``table<string, integer>`Map of integer customization parameter values keyed by parameter name.`Int64Map``table<string, integer>`Map of 64-bit integer customization parameter values keyed by parameter name.`StringMap``table<string, string>`Map of string customization parameter values keyed by parameter name. |
| --- |
| `ColorMap``table<string, FLinearColor>`Map of linear color customization parameter values keyed by parameter name.`FloatMap``table<string, number>`Map of float customization parameter values keyed by parameter name.`Index``integer`Index of this customization slot within the object's customization data array.`Int32Map``table<string, integer>`Map of integer customization parameter values keyed by parameter name.`Int64Map``table<string, integer>`Map of 64-bit integer customization parameter values keyed by parameter name.`StringMap``table<string, string>`Map of string customization parameter values keyed by parameter name. |
| `FloatMap``table<string, number>`Map of float customization parameter values keyed by parameter name.`Index``integer`Index of this customization slot within the object's customization data array.`Int32Map``table<string, integer>`Map of integer customization parameter values keyed by parameter name.`Int64Map``table<string, integer>`Map of 64-bit integer customization parameter values keyed by parameter name.`StringMap``table<string, string>`Map of string customization parameter values keyed by parameter name. |
| `Index``integer`Index of this customization slot within the object's customization data array.`Int32Map``table<string, integer>`Map of integer customization parameter values keyed by parameter name.`Int64Map``table<string, integer>`Map of 64-bit integer customization parameter values keyed by parameter name.`StringMap``table<string, string>`Map of string customization parameter values keyed by parameter name. |
| `Int32Map``table<string, integer>`Map of integer customization parameter values keyed by parameter name.`Int64Map``table<string, integer>`Map of 64-bit integer customization parameter values keyed by parameter name.`StringMap``table<string, string>`Map of string customization parameter values keyed by parameter name. |
| `Int64Map``table<string, integer>`Map of 64-bit integer customization parameter values keyed by parameter name.`StringMap``table<string, string>`Map of string customization parameter values keyed by parameter name. |
| `StringMap``table<string, string>`Map of string customization parameter values keyed by parameter name. |
