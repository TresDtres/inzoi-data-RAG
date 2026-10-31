---
document_id: "c7b69118b8ef70486d970006b248eed3d7e8f75f7ea4b7e1858b1af2954421bf"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1cityeditdataasset"
title: "UB1CityEditDataAsset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:10+00:00"
content_sha256: "2da5d73f932539f3a851c8ecaaf11b15ece493ed3c9ea12965e8b82a26959298"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1cityeditdataasset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data asset for the city edit system, providing sign mesh configurations, material lists, animal spawn data, stability spawn data, and system parameters.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| Category`classes`Extends`UB1DataAssetBase` |
| Extends`UB1DataAssetBase` |

# Properties (9)

| NameTypeDescription`CityBalance_Icon``UTexture2D`Soft reference to the icon texture representing the city balance indicator.`MaterialParameterCollection``any`Material Parameter Collection used to control stability visual parameters.`MaxMultiSelectNum``integer`Maximum number of items that can be selected simultaneously in the sign UI.`SignMaterialList``table<integer, UMaterialInterface>`Map from texture count to the material interface used for sign rendering.`SignMeshList``table<string, FB1SignMeshInfo>`Map from sign category name to its list of sign mesh variants.`SliderStepNameIdList``string[]`List of localized step name text IDs for the stability slider control.`SubTabChangeHideDistance``number`Distance at which the sub-tab change hides city edit objects from view.`WorldStabilityProbSpawnInfoList``table<string, FB1CityEditWorldStabilityProbSpawnInfoList>`Map from world name to its stability probability actor spawn info list.`WorldVATSpawnInfoList``table<string, FB1CityEditObjectWorldSpawnInfoList>`world name Map from world name to its VAT object spawn info list for animal spawning. |
| --- |
| `CityBalance_Icon``UTexture2D`Soft reference to the icon texture representing the city balance indicator.`MaterialParameterCollection``any`Material Parameter Collection used to control stability visual parameters.`MaxMultiSelectNum``integer`Maximum number of items that can be selected simultaneously in the sign UI.`SignMaterialList``table<integer, UMaterialInterface>`Map from texture count to the material interface used for sign rendering.`SignMeshList``table<string, FB1SignMeshInfo>`Map from sign category name to its list of sign mesh variants.`SliderStepNameIdList``string[]`List of localized step name text IDs for the stability slider control.`SubTabChangeHideDistance``number`Distance at which the sub-tab change hides city edit objects from view.`WorldStabilityProbSpawnInfoList``table<string, FB1CityEditWorldStabilityProbSpawnInfoList>`Map from world name to its stability probability actor spawn info list.`WorldVATSpawnInfoList``table<string, FB1CityEditObjectWorldSpawnInfoList>`world name Map from world name to its VAT object spawn info list for animal spawning. |
| `MaterialParameterCollection``any`Material Parameter Collection used to control stability visual parameters.`MaxMultiSelectNum``integer`Maximum number of items that can be selected simultaneously in the sign UI.`SignMaterialList``table<integer, UMaterialInterface>`Map from texture count to the material interface used for sign rendering.`SignMeshList``table<string, FB1SignMeshInfo>`Map from sign category name to its list of sign mesh variants.`SliderStepNameIdList``string[]`List of localized step name text IDs for the stability slider control.`SubTabChangeHideDistance``number`Distance at which the sub-tab change hides city edit objects from view.`WorldStabilityProbSpawnInfoList``table<string, FB1CityEditWorldStabilityProbSpawnInfoList>`Map from world name to its stability probability actor spawn info list.`WorldVATSpawnInfoList``table<string, FB1CityEditObjectWorldSpawnInfoList>`world name Map from world name to its VAT object spawn info list for animal spawning. |
| `MaxMultiSelectNum``integer`Maximum number of items that can be selected simultaneously in the sign UI.`SignMaterialList``table<integer, UMaterialInterface>`Map from texture count to the material interface used for sign rendering.`SignMeshList``table<string, FB1SignMeshInfo>`Map from sign category name to its list of sign mesh variants.`SliderStepNameIdList``string[]`List of localized step name text IDs for the stability slider control.`SubTabChangeHideDistance``number`Distance at which the sub-tab change hides city edit objects from view.`WorldStabilityProbSpawnInfoList``table<string, FB1CityEditWorldStabilityProbSpawnInfoList>`Map from world name to its stability probability actor spawn info list.`WorldVATSpawnInfoList``table<string, FB1CityEditObjectWorldSpawnInfoList>`world name Map from world name to its VAT object spawn info list for animal spawning. |
| `SignMaterialList``table<integer, UMaterialInterface>`Map from texture count to the material interface used for sign rendering.`SignMeshList``table<string, FB1SignMeshInfo>`Map from sign category name to its list of sign mesh variants.`SliderStepNameIdList``string[]`List of localized step name text IDs for the stability slider control.`SubTabChangeHideDistance``number`Distance at which the sub-tab change hides city edit objects from view.`WorldStabilityProbSpawnInfoList``table<string, FB1CityEditWorldStabilityProbSpawnInfoList>`Map from world name to its stability probability actor spawn info list.`WorldVATSpawnInfoList``table<string, FB1CityEditObjectWorldSpawnInfoList>`world name Map from world name to its VAT object spawn info list for animal spawning. |
| `SignMeshList``table<string, FB1SignMeshInfo>`Map from sign category name to its list of sign mesh variants.`SliderStepNameIdList``string[]`List of localized step name text IDs for the stability slider control.`SubTabChangeHideDistance``number`Distance at which the sub-tab change hides city edit objects from view.`WorldStabilityProbSpawnInfoList``table<string, FB1CityEditWorldStabilityProbSpawnInfoList>`Map from world name to its stability probability actor spawn info list.`WorldVATSpawnInfoList``table<string, FB1CityEditObjectWorldSpawnInfoList>`world name Map from world name to its VAT object spawn info list for animal spawning. |
| `SliderStepNameIdList``string[]`List of localized step name text IDs for the stability slider control.`SubTabChangeHideDistance``number`Distance at which the sub-tab change hides city edit objects from view.`WorldStabilityProbSpawnInfoList``table<string, FB1CityEditWorldStabilityProbSpawnInfoList>`Map from world name to its stability probability actor spawn info list.`WorldVATSpawnInfoList``table<string, FB1CityEditObjectWorldSpawnInfoList>`world name Map from world name to its VAT object spawn info list for animal spawning. |
| `SubTabChangeHideDistance``number`Distance at which the sub-tab change hides city edit objects from view.`WorldStabilityProbSpawnInfoList``table<string, FB1CityEditWorldStabilityProbSpawnInfoList>`Map from world name to its stability probability actor spawn info list.`WorldVATSpawnInfoList``table<string, FB1CityEditObjectWorldSpawnInfoList>`world name Map from world name to its VAT object spawn info list for animal spawning. |
| `WorldStabilityProbSpawnInfoList``table<string, FB1CityEditWorldStabilityProbSpawnInfoList>`Map from world name to its stability probability actor spawn info list.`WorldVATSpawnInfoList``table<string, FB1CityEditObjectWorldSpawnInfoList>`world name Map from world name to its VAT object spawn info list for animal spawning. |
| `WorldVATSpawnInfoList``table<string, FB1CityEditObjectWorldSpawnInfoList>`world name Map from world name to its VAT object spawn info list for animal spawning. |
