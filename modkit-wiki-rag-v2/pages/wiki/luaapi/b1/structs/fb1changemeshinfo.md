---
document_id: "dba032acc1c6b3b41b2f0e871a3f75bb717aa965b7914def831efacd40a5c426"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1changemeshinfo"
title: "FB1ChangeMeshInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:19+00:00"
content_sha256: "2fc53a9c70a90ff76a20dba536070c50f2cf1378d05d1e3c5ea1e961e36ea47d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1changemeshinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a seasonal mesh replacement entry, specifying the season type, the replacement static mesh, and associated material overrides.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`ChangeMaterialInfo``FB1ChangeMaterialInfo[]`List of material overrides applied to the replacement mesh.`ChangeMesh``UStaticMesh`Soft reference to the static mesh used as the seasonal replacement.`SeasonType`[`EB1SeasonType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1seasontype)Season type filter for which this mesh replacement applies. |
| --- |
| `ChangeMaterialInfo``FB1ChangeMaterialInfo[]`List of material overrides applied to the replacement mesh.`ChangeMesh``UStaticMesh`Soft reference to the static mesh used as the seasonal replacement.`SeasonType`[`EB1SeasonType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1seasontype)Season type filter for which this mesh replacement applies. |
| `ChangeMesh``UStaticMesh`Soft reference to the static mesh used as the seasonal replacement.`SeasonType`[`EB1SeasonType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1seasontype)Season type filter for which this mesh replacement applies. |
| `SeasonType`[`EB1SeasonType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1seasontype)Season type filter for which this mesh replacement applies. |
