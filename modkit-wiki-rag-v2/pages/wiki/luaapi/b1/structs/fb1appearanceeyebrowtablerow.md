---
document_id: "9aaf03da7645ef0dd3c9a5404b196a94718387b2f3edc1c40e400c422de849d7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearanceeyebrowtablerow"
title: "FB1AppearanceEyebrowTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:09+00:00"
content_sha256: "6f318a2f5002cd08efd027032dbfd9b00399ff012e3b883897342a8a05b3fdc0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1appearanceeyebrowtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining eyebrow appearance data, including mask texture settings and gender/age-based mesh variants.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1AppearanceFacehairMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearancefacehairmeshtablerow) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1AppearanceFacehairMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearancefacehairmeshtablerow) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1AppearanceFacehairMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearancefacehairmeshtablerow) |
| Category`structs`Extends[`FB1AppearanceFacehairMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearancefacehairmeshtablerow) |
| Extends[`FB1AppearanceFacehairMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearancefacehairmeshtablerow) |

# Properties (4)

| NameTypeDescription`MaskTexture``UTexture`Mask texture used for the eyebrow.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type.`TextureParameterName``string`Material parameter name used for the eyebrow mask texture. |
| --- |
| `MaskTexture``UTexture`Mask texture used for the eyebrow.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type.`TextureParameterName``string`Material parameter name used for the eyebrow mask texture. |
| `MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type.`TextureParameterName``string`Material parameter name used for the eyebrow mask texture. |
| `MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type.`TextureParameterName``string`Material parameter name used for the eyebrow mask texture. |
| `TextureParameterName``string`Material parameter name used for the eyebrow mask texture. |
