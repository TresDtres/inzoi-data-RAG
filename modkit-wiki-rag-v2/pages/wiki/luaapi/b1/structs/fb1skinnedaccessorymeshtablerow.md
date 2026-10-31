---
document_id: "2a4c94de84b21e49df0c37abdacbcdae48dbbc02850164425ff961c1cd7789d2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1skinnedaccessorymeshtablerow"
title: "FB1SkinnedAccessoryMeshTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:30+00:00"
content_sha256: "8fddc13c3bbc530721638624f4a3bc91c36d1722bd901d730d93731664085e8e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1skinnedaccessorymeshtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining skinned accessory mesh data, including accessory type, an optional deformed mesh, and gender/age-based mesh variants.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1GarmentMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentmeshtablerow) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1GarmentMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentmeshtablerow) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1GarmentMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentmeshtablerow) |
| Category`structs`Extends[`FB1GarmentMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentmeshtablerow) |
| Extends[`FB1GarmentMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentmeshtablerow) |

# Properties (4)

| NameTypeDescription`AccessoryType``string`Identifier for the accessory type represented by this skinned mesh.`DeformedMesh``USkeletalMesh`Skeletal mesh used when deformation is enabled for this accessory.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type. |
| --- |
| `AccessoryType``string`Identifier for the accessory type represented by this skinned mesh.`DeformedMesh``USkeletalMesh`Skeletal mesh used when deformation is enabled for this accessory.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type. |
| `DeformedMesh``USkeletalMesh`Skeletal mesh used when deformation is enabled for this accessory.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type. |
| `MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type. |
| `MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type. |
