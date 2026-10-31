---
document_id: "eef9f8a80bafc63d8136ce2d14a0febd3a8e4ea050fea293f88a3ad006c33179"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearancehairmeshtablerow"
title: "FB1AppearanceHairMeshTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:09+00:00"
content_sha256: "02a063ab9983191cb53468d298cb28d68c7b648c5b1a08a649447a8436560b18"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1appearancehairmeshtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining hair mesh data, including override materials, hat-type meshes, head textures, and gender/age-based variant mappings.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1AppearanceGroupedMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearancegroupedmeshtablerow) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1AppearanceGroupedMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearancegroupedmeshtablerow) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1AppearanceGroupedMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearancegroupedmeshtablerow) |
| Category`structs`Extends[`FB1AppearanceGroupedMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearancegroupedmeshtablerow) |
| Extends[`FB1AppearanceGroupedMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearancegroupedmeshtablerow) |

# Properties (6)

| NameTypeDescription`HatTypeMesh``table<EB1HatType, USkeletalMesh>`Hair mesh variants indexed by hat type.`HeadTextures``table<string, UTexture>`Head textures used with this hair mesh, indexed by name.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type.`OverrideMaterials``UMaterialInterface[]`Material overrides used for this hair mesh.`bEnableHairCutHeight``boolean`Flag indicating whether haircut height is enabled for this mesh. |
| --- |
| `HatTypeMesh``table<EB1HatType, USkeletalMesh>`Hair mesh variants indexed by hat type.`HeadTextures``table<string, UTexture>`Head textures used with this hair mesh, indexed by name.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type.`OverrideMaterials``UMaterialInterface[]`Material overrides used for this hair mesh.`bEnableHairCutHeight``boolean`Flag indicating whether haircut height is enabled for this mesh. |
| `HeadTextures``table<string, UTexture>`Head textures used with this hair mesh, indexed by name.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type.`OverrideMaterials``UMaterialInterface[]`Material overrides used for this hair mesh.`bEnableHairCutHeight``boolean`Flag indicating whether haircut height is enabled for this mesh. |
| `MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type.`OverrideMaterials``UMaterialInterface[]`Material overrides used for this hair mesh.`bEnableHairCutHeight``boolean`Flag indicating whether haircut height is enabled for this mesh. |
| `MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type.`OverrideMaterials``UMaterialInterface[]`Material overrides used for this hair mesh.`bEnableHairCutHeight``boolean`Flag indicating whether haircut height is enabled for this mesh. |
| `OverrideMaterials``UMaterialInterface[]`Material overrides used for this hair mesh.`bEnableHairCutHeight``boolean`Flag indicating whether haircut height is enabled for this mesh. |
| `bEnableHairCutHeight``boolean`Flag indicating whether haircut height is enabled for this mesh. |
