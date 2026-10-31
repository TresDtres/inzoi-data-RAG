---
document_id: "754d96023df3f4c96021e54fd5fa13568a1d2b84cd78efd9c8474026f3323ca0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentfullmeshtablerow"
title: "FB1GarmentFullMeshTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:01+00:00"
content_sha256: "f8574b81ec67e1648c129bf02526786e4c51aec1184e9bb00f5b304481fa5c5d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1garmentfullmeshtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining full-body garment mesh data, including deformation settings for related meshes, an optional deformed mesh, and gender/age-based mesh variants.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1GarmentUpperMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentuppermeshtablerow) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1GarmentUpperMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentuppermeshtablerow) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1GarmentUpperMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentuppermeshtablerow) |
| Category`structs`Extends[`FB1GarmentUpperMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentuppermeshtablerow) |
| Extends[`FB1GarmentUpperMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentuppermeshtablerow) |

# Properties (6)

| NameTypeDescription`DeformedMesh``USkeletalMesh`Skeletal mesh used when deformation is enabled.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type.`bDeformingGloves``boolean`Flag indicating whether this garment deforms the gloves mesh.`bDeformingHead``boolean`Flag indicating whether this garment deforms the head mesh.`bDeformingNecklace``boolean`Flag indicating whether this garment deforms the necklace mesh. |
| --- |
| `DeformedMesh``USkeletalMesh`Skeletal mesh used when deformation is enabled.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type.`bDeformingGloves``boolean`Flag indicating whether this garment deforms the gloves mesh.`bDeformingHead``boolean`Flag indicating whether this garment deforms the head mesh.`bDeformingNecklace``boolean`Flag indicating whether this garment deforms the necklace mesh. |
| `MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type.`bDeformingGloves``boolean`Flag indicating whether this garment deforms the gloves mesh.`bDeformingHead``boolean`Flag indicating whether this garment deforms the head mesh.`bDeformingNecklace``boolean`Flag indicating whether this garment deforms the necklace mesh. |
| `MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type.`bDeformingGloves``boolean`Flag indicating whether this garment deforms the gloves mesh.`bDeformingHead``boolean`Flag indicating whether this garment deforms the head mesh.`bDeformingNecklace``boolean`Flag indicating whether this garment deforms the necklace mesh. |
| `bDeformingGloves``boolean`Flag indicating whether this garment deforms the gloves mesh.`bDeformingHead``boolean`Flag indicating whether this garment deforms the head mesh.`bDeformingNecklace``boolean`Flag indicating whether this garment deforms the necklace mesh. |
| `bDeformingHead``boolean`Flag indicating whether this garment deforms the head mesh.`bDeformingNecklace``boolean`Flag indicating whether this garment deforms the necklace mesh. |
| `bDeformingNecklace``boolean`Flag indicating whether this garment deforms the necklace mesh. |
