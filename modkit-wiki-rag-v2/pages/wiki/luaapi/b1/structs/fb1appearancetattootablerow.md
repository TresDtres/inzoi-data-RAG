---
document_id: "69268e4f2d5e04ba5c8e41fdd8134e6f06d154763a546aab1229fd471973706a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearancetattootablerow"
title: "FB1AppearanceTattooTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:09+00:00"
content_sha256: "dc8595c21b4f699eddc78b8067c4728b557ba72dd0b918f0011618df07dedbb6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1appearancetattootablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining tattoo data for character customization, extending skin-feature data with default colors, matching rules, and type flag.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1AppearanceSkinFeaturesTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearanceskinfeaturestablerow) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1AppearanceSkinFeaturesTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearanceskinfeaturestablerow) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1AppearanceSkinFeaturesTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearanceskinfeaturestablerow) |
| Category`structs`Extends[`FB1AppearanceSkinFeaturesTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearanceskinfeaturestablerow) |
| Extends[`FB1AppearanceSkinFeaturesTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearanceskinfeaturestablerow) |

# Properties (9)

| NameTypeDescription`BodyAgeType`[`EB1BodyAgeType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1bodyagetype)Body age type for which this entry is defined.`DefaultTattooColor1``string`Default tattoo color 1 in RGBA hex.`DefaultTattooColor2``string`Default tattoo color 2 in RGBA hex.`DefaultTattooColor3``string`Default tattoo color 3 in RGBA hex.`DefaultTattooColor4``string`Default tattoo color 4 in RGBA hex.`GenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender type for which this entry is defined.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based variants indexed by gender type.`bIsFacePainting``boolean`Flag indicating whether this entry is face painting. |
| --- |
| `BodyAgeType`[`EB1BodyAgeType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1bodyagetype)Body age type for which this entry is defined.`DefaultTattooColor1``string`Default tattoo color 1 in RGBA hex.`DefaultTattooColor2``string`Default tattoo color 2 in RGBA hex.`DefaultTattooColor3``string`Default tattoo color 3 in RGBA hex.`DefaultTattooColor4``string`Default tattoo color 4 in RGBA hex.`GenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender type for which this entry is defined.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based variants indexed by gender type.`bIsFacePainting``boolean`Flag indicating whether this entry is face painting. |
| `DefaultTattooColor1``string`Default tattoo color 1 in RGBA hex.`DefaultTattooColor2``string`Default tattoo color 2 in RGBA hex.`DefaultTattooColor3``string`Default tattoo color 3 in RGBA hex.`DefaultTattooColor4``string`Default tattoo color 4 in RGBA hex.`GenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender type for which this entry is defined.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based variants indexed by gender type.`bIsFacePainting``boolean`Flag indicating whether this entry is face painting. |
| `DefaultTattooColor2``string`Default tattoo color 2 in RGBA hex.`DefaultTattooColor3``string`Default tattoo color 3 in RGBA hex.`DefaultTattooColor4``string`Default tattoo color 4 in RGBA hex.`GenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender type for which this entry is defined.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based variants indexed by gender type.`bIsFacePainting``boolean`Flag indicating whether this entry is face painting. |
| `DefaultTattooColor3``string`Default tattoo color 3 in RGBA hex.`DefaultTattooColor4``string`Default tattoo color 4 in RGBA hex.`GenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender type for which this entry is defined.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based variants indexed by gender type.`bIsFacePainting``boolean`Flag indicating whether this entry is face painting. |
| `DefaultTattooColor4``string`Default tattoo color 4 in RGBA hex.`GenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender type for which this entry is defined.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based variants indexed by gender type.`bIsFacePainting``boolean`Flag indicating whether this entry is face painting. |
| `GenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender type for which this entry is defined.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based variants indexed by gender type.`bIsFacePainting``boolean`Flag indicating whether this entry is face painting. |
| `MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based variants indexed by gender type.`bIsFacePainting``boolean`Flag indicating whether this entry is face painting. |
| `MatchingGenderId``table<EB1GenderType, string>`Gender-based variants indexed by gender type.`bIsFacePainting``boolean`Flag indicating whether this entry is face painting. |
| `bIsFacePainting``boolean`Flag indicating whether this entry is face painting. |
