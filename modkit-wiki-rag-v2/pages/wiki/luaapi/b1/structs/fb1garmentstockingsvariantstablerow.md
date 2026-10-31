---
document_id: "de609a09fa357ce4d6f4d995283d70bfafb832e5732d8805119c9aae8819860a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentstockingsvariantstablerow"
title: "FB1GarmentStockingsVariantsTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:03+00:00"
content_sha256: "55198eb4217ebfdc851584843e5317ae692aa631bb0f9b01c5ef01e1735ec1dd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1garmentstockingsvariantstablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining stockings variant data, including mask textures, default material parameters, and gender/age-based variant mappings.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1AppearanceTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearancetablerow) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1AppearanceTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearancetablerow) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1AppearanceTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearancetablerow) |
| Category`structs`Extends[`FB1AppearanceTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearancetablerow) |
| Extends[`FB1AppearanceTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearancetablerow) |

# Properties (7)

| NameTypeDescription`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based variant mappings indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based variant mappings indexed by gender type.`StockingColor``string`Default stockings color stored as a hex RGB string.`StockingCoreBrightness``number`Default core brightness value for the stockings material.`StockingFresnel``number`Default fresnel intensity for the stockings material.`StockingRoughness``number`Default roughness value for the stockings material.`StockingTexture``UTexture`Mask texture used to define stocking coverage areas. |
| --- |
| `MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based variant mappings indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based variant mappings indexed by gender type.`StockingColor``string`Default stockings color stored as a hex RGB string.`StockingCoreBrightness``number`Default core brightness value for the stockings material.`StockingFresnel``number`Default fresnel intensity for the stockings material.`StockingRoughness``number`Default roughness value for the stockings material.`StockingTexture``UTexture`Mask texture used to define stocking coverage areas. |
| `MatchingGenderId``table<EB1GenderType, string>`Gender-based variant mappings indexed by gender type.`StockingColor``string`Default stockings color stored as a hex RGB string.`StockingCoreBrightness``number`Default core brightness value for the stockings material.`StockingFresnel``number`Default fresnel intensity for the stockings material.`StockingRoughness``number`Default roughness value for the stockings material.`StockingTexture``UTexture`Mask texture used to define stocking coverage areas. |
| `StockingColor``string`Default stockings color stored as a hex RGB string.`StockingCoreBrightness``number`Default core brightness value for the stockings material.`StockingFresnel``number`Default fresnel intensity for the stockings material.`StockingRoughness``number`Default roughness value for the stockings material.`StockingTexture``UTexture`Mask texture used to define stocking coverage areas. |
| `StockingCoreBrightness``number`Default core brightness value for the stockings material.`StockingFresnel``number`Default fresnel intensity for the stockings material.`StockingRoughness``number`Default roughness value for the stockings material.`StockingTexture``UTexture`Mask texture used to define stocking coverage areas. |
| `StockingFresnel``number`Default fresnel intensity for the stockings material.`StockingRoughness``number`Default roughness value for the stockings material.`StockingTexture``UTexture`Mask texture used to define stocking coverage areas. |
| `StockingRoughness``number`Default roughness value for the stockings material.`StockingTexture``UTexture`Mask texture used to define stocking coverage areas. |
| `StockingTexture``UTexture`Mask texture used to define stocking coverage areas. |
