---
document_id: "68aa3ada803c245b96802e611624eb51a0fca669f6b2e8061c3e9c35f37f20d1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentglovesmeshtablerow"
title: "FB1GarmentGlovesMeshTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:01+00:00"
content_sha256: "354fc531e0162232af89614cc297c3d8b589e25bc8037c494c11c53ec5fd36d2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1garmentglovesmeshtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining gloves garment mesh data, including hand-hide parameters, sleeve opacity mask settings, an optional deformed mesh, and gender/age-based variants.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1GarmentMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentmeshtablerow) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1GarmentMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentmeshtablerow) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1GarmentMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentmeshtablerow) |
| Category`structs`Extends[`FB1GarmentMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentmeshtablerow) |
| Extends[`FB1GarmentMeshTableRow`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1garmentmeshtablerow) |

# Properties (10)

| NameTypeDescription`DeformedMesh``USkeletalMesh`Skeletal mesh used when deformation is enabled for gloves.`HandHideRamp``number`Value controlling hand-area fade in the body material.`HandHideScale``number`Scale applied to the hand-hide ramp effect.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type.`SafeZone_Height``number`Height excluded by the sleeve opacity mask.`SafeZone_Width``number`Width excluded by the sleeve opacity mask.`SleeveMask_Pitch``number`Pitch adjustment for the sleeve opacity mask.`SleeveMask_PivotZ``number`Pivot height (Z-axis) for the sleeve opacity mask.`SleeveMask_Roll``number`Roll scale controlling the sleeve mask's length. |
| --- |
| `DeformedMesh``USkeletalMesh`Skeletal mesh used when deformation is enabled for gloves.`HandHideRamp``number`Value controlling hand-area fade in the body material.`HandHideScale``number`Scale applied to the hand-hide ramp effect.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type.`SafeZone_Height``number`Height excluded by the sleeve opacity mask.`SafeZone_Width``number`Width excluded by the sleeve opacity mask.`SleeveMask_Pitch``number`Pitch adjustment for the sleeve opacity mask.`SleeveMask_PivotZ``number`Pivot height (Z-axis) for the sleeve opacity mask.`SleeveMask_Roll``number`Roll scale controlling the sleeve mask's length. |
| `HandHideRamp``number`Value controlling hand-area fade in the body material.`HandHideScale``number`Scale applied to the hand-hide ramp effect.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type.`SafeZone_Height``number`Height excluded by the sleeve opacity mask.`SafeZone_Width``number`Width excluded by the sleeve opacity mask.`SleeveMask_Pitch``number`Pitch adjustment for the sleeve opacity mask.`SleeveMask_PivotZ``number`Pivot height (Z-axis) for the sleeve opacity mask.`SleeveMask_Roll``number`Roll scale controlling the sleeve mask's length. |
| `HandHideScale``number`Scale applied to the hand-hide ramp effect.`MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type.`SafeZone_Height``number`Height excluded by the sleeve opacity mask.`SafeZone_Width``number`Width excluded by the sleeve opacity mask.`SleeveMask_Pitch``number`Pitch adjustment for the sleeve opacity mask.`SleeveMask_PivotZ``number`Pivot height (Z-axis) for the sleeve opacity mask.`SleeveMask_Roll``number`Roll scale controlling the sleeve mask's length. |
| `MatchingBodyAgeId``table<EB1BodyAgeType, string>`Body-age–based mesh variants indexed by body age type.`MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type.`SafeZone_Height``number`Height excluded by the sleeve opacity mask.`SafeZone_Width``number`Width excluded by the sleeve opacity mask.`SleeveMask_Pitch``number`Pitch adjustment for the sleeve opacity mask.`SleeveMask_PivotZ``number`Pivot height (Z-axis) for the sleeve opacity mask.`SleeveMask_Roll``number`Roll scale controlling the sleeve mask's length. |
| `MatchingGenderId``table<EB1GenderType, string>`Gender-based mesh variants indexed by gender type.`SafeZone_Height``number`Height excluded by the sleeve opacity mask.`SafeZone_Width``number`Width excluded by the sleeve opacity mask.`SleeveMask_Pitch``number`Pitch adjustment for the sleeve opacity mask.`SleeveMask_PivotZ``number`Pivot height (Z-axis) for the sleeve opacity mask.`SleeveMask_Roll``number`Roll scale controlling the sleeve mask's length. |
| `SafeZone_Height``number`Height excluded by the sleeve opacity mask.`SafeZone_Width``number`Width excluded by the sleeve opacity mask.`SleeveMask_Pitch``number`Pitch adjustment for the sleeve opacity mask.`SleeveMask_PivotZ``number`Pivot height (Z-axis) for the sleeve opacity mask.`SleeveMask_Roll``number`Roll scale controlling the sleeve mask's length. |
| `SafeZone_Width``number`Width excluded by the sleeve opacity mask.`SleeveMask_Pitch``number`Pitch adjustment for the sleeve opacity mask.`SleeveMask_PivotZ``number`Pivot height (Z-axis) for the sleeve opacity mask.`SleeveMask_Roll``number`Roll scale controlling the sleeve mask's length. |
| `SleeveMask_Pitch``number`Pitch adjustment for the sleeve opacity mask.`SleeveMask_PivotZ``number`Pivot height (Z-axis) for the sleeve opacity mask.`SleeveMask_Roll``number`Roll scale controlling the sleeve mask's length. |
| `SleeveMask_PivotZ``number`Pivot height (Z-axis) for the sleeve opacity mask.`SleeveMask_Roll``number`Roll scale controlling the sleeve mask's length. |
| `SleeveMask_Roll``number`Roll scale controlling the sleeve mask's length. |
