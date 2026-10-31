---
document_id: "81c27c20c1d542ae96dec8ec2b2862c2d7052618ecb6ff9a240c1d985762ca9f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1skinnedaccessorypartstablerow"
title: "FB1SkinnedAccessoryPartsTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:30+00:00"
content_sha256: "663ee1d47378441367408bd1cfeeb9fbd397df4c41a22d8f83ecd4606061addf"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1skinnedaccessorypartstablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining skinned accessory part mesh data, including an optional deformed mesh and gender/age-based mesh variants.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1GarmentPartsTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentpartstablerow) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1GarmentPartsTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentpartstablerow) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1GarmentPartsTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentpartstablerow) |
| Category`structs`Extends[`FB1GarmentPartsTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentpartstablerow) |
| Extends[`FB1GarmentPartsTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentpartstablerow) |

# Properties (3)

| NameTypeDescription`DeformedMesh``USkeletalMesh`Skeletal mesh used when deformation is enabled for this accessory part.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type. |
| --- |
| `DeformedMesh``USkeletalMesh`Skeletal mesh used when deformation is enabled for this accessory part.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type. |
| `MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type. |
| `MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type. |
