---
document_id: "9d1d978e87a2a30a1c025f52718e6ae0d32bdee744752801c6d71f8628562333"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1diversitydataasset"
title: "UB1DiversityDataAsset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:22+00:00"
content_sha256: "9455354cf1aa4235c9957ebdee4449a51fba837bbce535522538f69031f572f0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1diversitydataasset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data asset for the diversity system, defining spawn ratios for race/culture/city combinations and gender identity distribution per city.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| Category`classes`Extends`UB1DataAssetBase` |
| Extends`UB1DataAssetBase` |

# Properties (3)

| NameTypeDescription`DiversityCrowdGroupMap``table<EB1DiversityCity, FB1CrowdGroupDiversitySettings>`Map of cities to their crowd group distribution settings. Crowd characters with a group ID only spawn from spawners with matching tags.`DiversityGenderIdentityMap``table<EB1DiversityCity, FB1GenderDiversitySetting>`Map of cities to their gender identity distribution settings. Applied when the player has edited gender identity in the appearance menu.`DiversityInfoRatioMap``table<FB1DiversityInfo, number>`Map of diversity profiles to their spawn ratio used to distribute Zoi appearances across the population. |
| --- |
| `DiversityCrowdGroupMap``table<EB1DiversityCity, FB1CrowdGroupDiversitySettings>`Map of cities to their crowd group distribution settings. Crowd characters with a group ID only spawn from spawners with matching tags.`DiversityGenderIdentityMap``table<EB1DiversityCity, FB1GenderDiversitySetting>`Map of cities to their gender identity distribution settings. Applied when the player has edited gender identity in the appearance menu.`DiversityInfoRatioMap``table<FB1DiversityInfo, number>`Map of diversity profiles to their spawn ratio used to distribute Zoi appearances across the population. |
| `DiversityGenderIdentityMap``table<EB1DiversityCity, FB1GenderDiversitySetting>`Map of cities to their gender identity distribution settings. Applied when the player has edited gender identity in the appearance menu.`DiversityInfoRatioMap``table<FB1DiversityInfo, number>`Map of diversity profiles to their spawn ratio used to distribute Zoi appearances across the population. |
| `DiversityInfoRatioMap``table<FB1DiversityInfo, number>`Map of diversity profiles to their spawn ratio used to distribute Zoi appearances across the population. |
