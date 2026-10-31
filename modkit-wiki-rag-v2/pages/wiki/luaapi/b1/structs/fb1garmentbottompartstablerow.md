---
document_id: "2a3ea2a25298b7aad7d7c6bd542a875dace4ad3eb537b3adb91e9d9fa0271f9a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentbottompartstablerow"
title: "FB1GarmentBottomPartsTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:00+00:00"
content_sha256: "e50ded3b824d947f2ac54cb302da8ac3567535a686e2c85a9de7314708602db9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1garmentbottompartstablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining bottom-part garment mesh data, including an optional deformed mesh and gender/age-based mesh variants.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1GarmentPartsTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentpartstablerow) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1GarmentPartsTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentpartstablerow) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1GarmentPartsTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentpartstablerow) |
| Category`structs`Extends[`FB1GarmentPartsTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentpartstablerow) |
| Extends[`FB1GarmentPartsTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentpartstablerow) |

# Properties (3)

| NameTypeDescription`DeformedMesh``USkeletalMesh`Skeletal mesh used when deformation is enabled for this bottom part.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type. |
| --- |
| `DeformedMesh``USkeletalMesh`Skeletal mesh used when deformation is enabled for this bottom part.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type. |
| `MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type. |
| `MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type. |
