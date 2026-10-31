---
document_id: "801373d402ab6d54f5f58af87204b69bf9802e1c2e954d70f9452b60e72b85a2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1attachedaccessorymeshtablerow"
title: "FB1AttachedAccessoryMeshTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:10+00:00"
content_sha256: "6ef670972c9dd120c0b1fce8a58189302ff7ef841e0e8d6e260db1f77eaad515"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1attachedaccessorymeshtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining attached accessory mesh data for character customization, including accessory type, rotation offset, material overrides, socket meshes, and matching rules.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1AppearanceTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearancetablerow) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1AppearanceTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearancetablerow) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1AppearanceTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearancetablerow) |
| Category`structs`Extends[`FB1AppearanceTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearancetablerow) |
| Extends[`FB1AppearanceTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearancetablerow) |

# Properties (6)

| NameTypeDescription`AccessoryType``string`Accessory type identifier for this mesh.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based variants indexed by gender type.`OverrideMaterial``UMaterialInterface[]`Materials overriding the default accessory mesh materials.`RotationOffset``FRotator`Rotation offset for accessory placement.`SocketByMesh``table<string, UStaticMesh>`Static meshes for each socket or bone name. |
| --- |
| `AccessoryType``string`Accessory type identifier for this mesh.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based variants indexed by gender type.`OverrideMaterial``UMaterialInterface[]`Materials overriding the default accessory mesh materials.`RotationOffset``FRotator`Rotation offset for accessory placement.`SocketByMesh``table<string, UStaticMesh>`Static meshes for each socket or bone name. |
| `MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based variants indexed by gender type.`OverrideMaterial``UMaterialInterface[]`Materials overriding the default accessory mesh materials.`RotationOffset``FRotator`Rotation offset for accessory placement.`SocketByMesh``table<string, UStaticMesh>`Static meshes for each socket or bone name. |
| `MatchingGenderId``table<EB1GenderType, string>`Gender-based variants indexed by gender type.`OverrideMaterial``UMaterialInterface[]`Materials overriding the default accessory mesh materials.`RotationOffset``FRotator`Rotation offset for accessory placement.`SocketByMesh``table<string, UStaticMesh>`Static meshes for each socket or bone name. |
| `OverrideMaterial``UMaterialInterface[]`Materials overriding the default accessory mesh materials.`RotationOffset``FRotator`Rotation offset for accessory placement.`SocketByMesh``table<string, UStaticMesh>`Static meshes for each socket or bone name. |
| `RotationOffset``FRotator`Rotation offset for accessory placement.`SocketByMesh``table<string, UStaticMesh>`Static meshes for each socket or bone name. |
| `SocketByMesh``table<string, UStaticMesh>`Static meshes for each socket or bone name. |
