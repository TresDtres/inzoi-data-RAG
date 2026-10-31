---
document_id: "c615ffc470d74f6b823eb34e231e353d272bbd85a39310aece25450e573c6170"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmenttopmeshtablerow"
title: "FB1GarmentTopMeshTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:03+00:00"
content_sha256: "08e3ec55f26c38f4e8c177738d1c2595c13fc7b243bf4c0b8b3a2165c72ce919"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1garmenttopmeshtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining top garment mesh data, including deformation settings, optional deformed mesh overrides, and gender/age-based mesh variants.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1GarmentUpperMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentuppermeshtablerow) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1GarmentUpperMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentuppermeshtablerow) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1GarmentUpperMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentuppermeshtablerow) |
| Category`structs`Extends[`FB1GarmentUpperMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentuppermeshtablerow) |
| Extends[`FB1GarmentUpperMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentuppermeshtablerow) |

# Properties (7)

| NameTypeDescription`DeformedMesh``USkeletalMesh`Skeletal mesh used when top deformation is enabled.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type.`bDeformingBottom``boolean`Flag indicating whether this top deforms the bottom garment mesh.`bDeformingGloves``boolean`Flag indicating whether this top deforms the gloves mesh.`bDeformingHead``boolean`Flag indicating whether this top deforms the head mesh.`bDeformingNecklace``boolean`Flag indicating whether this top deforms the necklace mesh. |
| --- |
| `DeformedMesh``USkeletalMesh`Skeletal mesh used when top deformation is enabled.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type.`bDeformingBottom``boolean`Flag indicating whether this top deforms the bottom garment mesh.`bDeformingGloves``boolean`Flag indicating whether this top deforms the gloves mesh.`bDeformingHead``boolean`Flag indicating whether this top deforms the head mesh.`bDeformingNecklace``boolean`Flag indicating whether this top deforms the necklace mesh. |
| `MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type.`bDeformingBottom``boolean`Flag indicating whether this top deforms the bottom garment mesh.`bDeformingGloves``boolean`Flag indicating whether this top deforms the gloves mesh.`bDeformingHead``boolean`Flag indicating whether this top deforms the head mesh.`bDeformingNecklace``boolean`Flag indicating whether this top deforms the necklace mesh. |
| `MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type.`bDeformingBottom``boolean`Flag indicating whether this top deforms the bottom garment mesh.`bDeformingGloves``boolean`Flag indicating whether this top deforms the gloves mesh.`bDeformingHead``boolean`Flag indicating whether this top deforms the head mesh.`bDeformingNecklace``boolean`Flag indicating whether this top deforms the necklace mesh. |
| `bDeformingBottom``boolean`Flag indicating whether this top deforms the bottom garment mesh.`bDeformingGloves``boolean`Flag indicating whether this top deforms the gloves mesh.`bDeformingHead``boolean`Flag indicating whether this top deforms the head mesh.`bDeformingNecklace``boolean`Flag indicating whether this top deforms the necklace mesh. |
| `bDeformingGloves``boolean`Flag indicating whether this top deforms the gloves mesh.`bDeformingHead``boolean`Flag indicating whether this top deforms the head mesh.`bDeformingNecklace``boolean`Flag indicating whether this top deforms the necklace mesh. |
| `bDeformingHead``boolean`Flag indicating whether this top deforms the head mesh.`bDeformingNecklace``boolean`Flag indicating whether this top deforms the necklace mesh. |
| `bDeformingNecklace``boolean`Flag indicating whether this top deforms the necklace mesh. |
