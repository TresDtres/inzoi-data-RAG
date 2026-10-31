---
document_id: "2f24b8fdf5448cf2f5ecc383bc9d98c8500a1325f83a31f042f106dac635d9d1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1objectcustomizeshapeparts"
title: "FB1ObjectCustomizeShapeParts"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:35+00:00"
content_sha256: "c2b61d49d9d163226f9437a53ef7ea688076668c5dcbfa1cdfcefa9454d9de99"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1objectcustomizeshapeparts"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- A single shape part entry for a customizable shape object, linking a parts ID to its mesh and icon. Used within shape template table rows to define swappable geometric parts.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`Asset``UStaticMesh`Soft reference to the static mesh asset for this shape part.`Icon``UObject`Soft reference to the icon displayed for this shape part in the customization UI.`PartsId``string`ID referencing the garment mesh JSON file defining this shape part. |
| --- |
| `Asset``UStaticMesh`Soft reference to the static mesh asset for this shape part.`Icon``UObject`Soft reference to the icon displayed for this shape part in the customization UI.`PartsId``string`ID referencing the garment mesh JSON file defining this shape part. |
| `Icon``UObject`Soft reference to the icon displayed for this shape part in the customization UI.`PartsId``string`ID referencing the garment mesh JSON file defining this shape part. |
| `PartsId``string`ID referencing the garment mesh JSON file defining this shape part. |
