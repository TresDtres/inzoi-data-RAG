---
document_id: "6e5cdb16a7cf286be98a2e0b291e256fe28ad3f8fad98025c83b4b5879c960a7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1costumeinfo"
title: "FB1CostumeInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:34+00:00"
content_sha256: "a51ed8ea4d21181f5998b142077c9c7a06ec7f02df0d80126f5eed651f009ed0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1costumeinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a costume configuration, including gender and age type, and selected outfit and accessory items.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`Accessories``table<string, string>`Selected accessories indexed by accessory type.`BodyAgeType`[`EB1BodyAgeType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1bodyagetype)Body age type for this costume.`GenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender type for this costume.`Outfit``table<string, string>`Selected garments indexed by garment type.`PrintedAccessoryNames``string[]`Printed accessory names. Empty = leave existing untouched. NAME_None entry = explicit clear. |
| --- |
| `Accessories``table<string, string>`Selected accessories indexed by accessory type.`BodyAgeType`[`EB1BodyAgeType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1bodyagetype)Body age type for this costume.`GenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender type for this costume.`Outfit``table<string, string>`Selected garments indexed by garment type.`PrintedAccessoryNames``string[]`Printed accessory names. Empty = leave existing untouched. NAME_None entry = explicit clear. |
| `BodyAgeType`[`EB1BodyAgeType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1bodyagetype)Body age type for this costume.`GenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender type for this costume.`Outfit``table<string, string>`Selected garments indexed by garment type.`PrintedAccessoryNames``string[]`Printed accessory names. Empty = leave existing untouched. NAME_None entry = explicit clear. |
| `GenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender type for this costume.`Outfit``table<string, string>`Selected garments indexed by garment type.`PrintedAccessoryNames``string[]`Printed accessory names. Empty = leave existing untouched. NAME_None entry = explicit clear. |
| `Outfit``table<string, string>`Selected garments indexed by garment type.`PrintedAccessoryNames``string[]`Printed accessory names. Empty = leave existing untouched. NAME_None entry = explicit clear. |
| `PrintedAccessoryNames``string[]`Printed accessory names. Empty = leave existing untouched. NAME_None entry = explicit clear. |
