---
document_id: "d5dba741038664f30ea362276daa5d72a061fe5f1c4a6536a6d23c1483c3a87b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmenttoppartstablerow"
title: "FB1GarmentTopPartsTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:03+00:00"
content_sha256: "fbe2ddc07df61fbd4af842ec75fe09cce40438cf6dd56ca676fb84b5dc20c210"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1garmenttoppartstablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining top-part garment mesh data, including deformation flags, an optional deformed mesh, and gender/age-based mesh variants.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1GarmentPartsTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentpartstablerow) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1GarmentPartsTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentpartstablerow) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1GarmentPartsTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentpartstablerow) |
| Category`structs`Extends[`FB1GarmentPartsTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentpartstablerow) |
| Extends[`FB1GarmentPartsTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentpartstablerow) |

# Properties (5)

| NameTypeDescription`DeformedMesh``USkeletalMesh`Skeletal mesh used when deformation is enabled for this top part.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type.`bDeformingBottom``boolean`Flag indicating whether this top part deforms the bottom mesh.`bDeformingGloves``boolean`Flag indicating whether this top part deforms the gloves mesh. |
| --- |
| `DeformedMesh``USkeletalMesh`Skeletal mesh used when deformation is enabled for this top part.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type.`bDeformingBottom``boolean`Flag indicating whether this top part deforms the bottom mesh.`bDeformingGloves``boolean`Flag indicating whether this top part deforms the gloves mesh. |
| `MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type.`bDeformingBottom``boolean`Flag indicating whether this top part deforms the bottom mesh.`bDeformingGloves``boolean`Flag indicating whether this top part deforms the gloves mesh. |
| `MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type.`bDeformingBottom``boolean`Flag indicating whether this top part deforms the bottom mesh.`bDeformingGloves``boolean`Flag indicating whether this top part deforms the gloves mesh. |
| `bDeformingBottom``boolean`Flag indicating whether this top part deforms the bottom mesh.`bDeformingGloves``boolean`Flag indicating whether this top part deforms the gloves mesh. |
| `bDeformingGloves``boolean`Flag indicating whether this top part deforms the gloves mesh. |
