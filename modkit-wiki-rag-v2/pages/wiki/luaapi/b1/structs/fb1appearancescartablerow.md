---
document_id: "7d71035e28152495087ac3a600a3c7c150b8f0cb36544b838feb1f3b35146193"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearancescartablerow"
title: "FB1AppearanceScarTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:09+00:00"
content_sha256: "544952219b58370f3198fc935f00a18510b524855cd98388e103d75eea785e9e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1appearancescartablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining scar data for character customization, extending skin-feature data with scar color and default material parameters.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1AppearanceSkinFeaturesTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearanceskinfeaturestablerow) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1AppearanceSkinFeaturesTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearanceskinfeaturestablerow) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1AppearanceSkinFeaturesTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearanceskinfeaturestablerow) |
| Category`structs`Extends[`FB1AppearanceSkinFeaturesTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearanceskinfeaturestablerow) |
| Extends[`FB1AppearanceSkinFeaturesTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearanceskinfeaturestablerow) |

# Properties (8)

| NameTypeDescription`BodyAgeType`[`EB1BodyAgeType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1bodyagetype)Body age type for which this scar entry is defined.`ColorTexture``UTexture`Color texture used by the scar material.`DefaultScarMetalRoughness``number`Default metal roughness value for the scar material.`DefaultScarRoughness``number`Default roughness value for the scar material.`GenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender type for which this scar entry is defined.`IsTopmostScar``number`Scalar value used to mark or weight this scar as topmost.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based variants indexed by gender type. |
| --- |
| `BodyAgeType`[`EB1BodyAgeType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1bodyagetype)Body age type for which this scar entry is defined.`ColorTexture``UTexture`Color texture used by the scar material.`DefaultScarMetalRoughness``number`Default metal roughness value for the scar material.`DefaultScarRoughness``number`Default roughness value for the scar material.`GenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender type for which this scar entry is defined.`IsTopmostScar``number`Scalar value used to mark or weight this scar as topmost.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based variants indexed by gender type. |
| `ColorTexture``UTexture`Color texture used by the scar material.`DefaultScarMetalRoughness``number`Default metal roughness value for the scar material.`DefaultScarRoughness``number`Default roughness value for the scar material.`GenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender type for which this scar entry is defined.`IsTopmostScar``number`Scalar value used to mark or weight this scar as topmost.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based variants indexed by gender type. |
| `DefaultScarMetalRoughness``number`Default metal roughness value for the scar material.`DefaultScarRoughness``number`Default roughness value for the scar material.`GenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender type for which this scar entry is defined.`IsTopmostScar``number`Scalar value used to mark or weight this scar as topmost.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based variants indexed by gender type. |
| `DefaultScarRoughness``number`Default roughness value for the scar material.`GenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender type for which this scar entry is defined.`IsTopmostScar``number`Scalar value used to mark or weight this scar as topmost.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based variants indexed by gender type. |
| `GenderType`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender type for which this scar entry is defined.`IsTopmostScar``number`Scalar value used to mark or weight this scar as topmost.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based variants indexed by gender type. |
| `IsTopmostScar``number`Scalar value used to mark or weight this scar as topmost.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based variants indexed by gender type. |
| `MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based variants indexed by gender type. |
| `MatchingGenderId``table<EB1GenderType, string>`Gender-based variants indexed by gender type. |
