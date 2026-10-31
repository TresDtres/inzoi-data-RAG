---
document_id: "104e1c83e51856716634f41e919f7b7395a4814c1058a46590379a10f5870e8b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1materialparammappingtablerow"
title: "FB1MaterialParamMappingTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:25+00:00"
content_sha256: "8e4da8fa008b9de24b26a88429229c4d6734e6248359bb921535897561bf3da5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1materialparammappingtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data table row mapping a material parameter to its target mesh, layer, and value configuration.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (6)

| NameTypeDescription`LayerIndex``number`The layer index within the material where the parameter is set.`MeshName``string`The name of the mesh component this parameter applies to.`ParamName``string`The name of the material parameter to modify.`ParamType`[`EB1MaterialParamType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1materialparamtype)The type of material parameter to modify.`ValueString``string`The string representation of the value to assign to the parameter.`bGlobalParameter``boolean`Whether this parameter is a global material parameter override. |
| --- |
| `LayerIndex``number`The layer index within the material where the parameter is set.`MeshName``string`The name of the mesh component this parameter applies to.`ParamName``string`The name of the material parameter to modify.`ParamType`[`EB1MaterialParamType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1materialparamtype)The type of material parameter to modify.`ValueString``string`The string representation of the value to assign to the parameter.`bGlobalParameter``boolean`Whether this parameter is a global material parameter override. |
| `MeshName``string`The name of the mesh component this parameter applies to.`ParamName``string`The name of the material parameter to modify.`ParamType`[`EB1MaterialParamType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1materialparamtype)The type of material parameter to modify.`ValueString``string`The string representation of the value to assign to the parameter.`bGlobalParameter``boolean`Whether this parameter is a global material parameter override. |
| `ParamName``string`The name of the material parameter to modify.`ParamType`[`EB1MaterialParamType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1materialparamtype)The type of material parameter to modify.`ValueString``string`The string representation of the value to assign to the parameter.`bGlobalParameter``boolean`Whether this parameter is a global material parameter override. |
| `ParamType`[`EB1MaterialParamType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1materialparamtype)The type of material parameter to modify.`ValueString``string`The string representation of the value to assign to the parameter.`bGlobalParameter``boolean`Whether this parameter is a global material parameter override. |
| `ValueString``string`The string representation of the value to assign to the parameter.`bGlobalParameter``boolean`Whether this parameter is a global material parameter override. |
| `bGlobalParameter``boolean`Whether this parameter is a global material parameter override. |
