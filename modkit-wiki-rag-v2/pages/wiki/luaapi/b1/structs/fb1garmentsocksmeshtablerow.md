---
document_id: "481657b06ec84a43b17fa94c8333e25f4564aaa07a23ff3346bcb12dc25a3116"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentsocksmeshtablerow"
title: "FB1GarmentSocksMeshTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:02+00:00"
content_sha256: "e2f8cb065c396c646dfb25a3271d3093e4591430a47bec3306b77fe69357fe2b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1garmentsocksmeshtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining socks mesh data, including foot type, optional foot-type meshes, and gender/age-based mesh variants.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1GarmentMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentmeshtablerow) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1GarmentMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentmeshtablerow) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1GarmentMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentmeshtablerow) |
| Category`structs`Extends[`FB1GarmentMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentmeshtablerow) |
| Extends[`FB1GarmentMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentmeshtablerow) |

# Properties (4)

| NameTypeDescription`FootType`[`EB1FootType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1foottype)Foot type for these socks. (e.g., default, flat, heel)`FootTypeMesh``table<EB1FootType, USkeletalMesh>`Skeletal mesh overrides indexed by foot type.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type. |
| --- |
| `FootType`[`EB1FootType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1foottype)Foot type for these socks. (e.g., default, flat, heel)`FootTypeMesh``table<EB1FootType, USkeletalMesh>`Skeletal mesh overrides indexed by foot type.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type. |
| `FootTypeMesh``table<EB1FootType, USkeletalMesh>`Skeletal mesh overrides indexed by foot type.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type. |
| `MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type. |
| `MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type. |
