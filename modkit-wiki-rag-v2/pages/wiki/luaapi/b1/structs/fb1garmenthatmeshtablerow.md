---
document_id: "281b9bbbd102f48757c381e0641caaf7c00d0255b7f011a78954a226943083c4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmenthatmeshtablerow"
title: "FB1GarmentHatMeshTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:01+00:00"
content_sha256: "44da73978cf25c092ab025e8e87c7206825a87205900361cdc3e9bb5238ad8f8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1garmenthatmeshtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining hat garment mesh data, including hat type and gender/age-based mesh variants used in customization.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1GarmentMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentmeshtablerow) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1GarmentMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentmeshtablerow) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1GarmentMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentmeshtablerow) |
| Category`structs`Extends[`FB1GarmentMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentmeshtablerow) |
| Extends[`FB1GarmentMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentmeshtablerow) |

# Properties (3)

| NameTypeDescription`HatType`[`EB1HatType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1hattype)Hat type represented by this mesh.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type. |
| --- |
| `HatType`[`EB1HatType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1hattype)Hat type represented by this mesh.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type. |
| `MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type. |
| `MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type. |
