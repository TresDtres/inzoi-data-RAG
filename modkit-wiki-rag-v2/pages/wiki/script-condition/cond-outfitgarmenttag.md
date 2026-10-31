---
document_id: "df07c76f4f7cae45e1124aab4c65590bb9b164d1f9f1d0f4df534d1882a6550e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-outfitgarmenttag"
title: "Condition_OutfitGarmentTag"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:55+00:00"
content_sha256: "957453bc1f77c0dcb3c88e6b9aceabe4b4e8818ed36e652023ad8ab8942a5180"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-outfitgarmenttag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject has the specified outfit garment tag. The BaseObject can be a character or a store mannequin with a designated outfit.

# Parameters

| ParameterDescriptionBaseObjectSelf or Target.CompareTypeEqual: S1 tag exists. NotEqual: S1 tag does not exist.S1Garment tag name to search for in the BaseObject's final outfit garments. |
| --- |
| BaseObjectSelf or Target.CompareTypeEqual: S1 tag exists. NotEqual: S1 tag does not exist.S1Garment tag name to search for in the BaseObject's final outfit garments. |
| CompareTypeEqual: S1 tag exists. NotEqual: S1 tag does not exist.S1Garment tag name to search for in the BaseObject's final outfit garments. |
| S1Garment tag name to search for in the BaseObject's final outfit garments. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Checks if self is wearing any garment tagged as Swimwear.SelfOutfitGarmentTagEqualSwimwearChecks if self is not wearing any garment tagged as Swimwear.SelfOutfitGarmentTagNotEqualSwimwearChecks if target is wearing any garment tagged as Formal.TargetOutfitGarmentTagEqualFormalChecks if target is not wearing any garment tagged as Formal.TargetOutfitGarmentTagNotEqualFormal |
| --- |
| Checks if self is wearing any garment tagged as Swimwear.SelfOutfitGarmentTagEqualSwimwearChecks if self is not wearing any garment tagged as Swimwear.SelfOutfitGarmentTagNotEqualSwimwearChecks if target is wearing any garment tagged as Formal.TargetOutfitGarmentTagEqualFormalChecks if target is not wearing any garment tagged as Formal.TargetOutfitGarmentTagNotEqualFormal |
| Checks if self is not wearing any garment tagged as Swimwear.SelfOutfitGarmentTagNotEqualSwimwearChecks if target is wearing any garment tagged as Formal.TargetOutfitGarmentTagEqualFormalChecks if target is not wearing any garment tagged as Formal.TargetOutfitGarmentTagNotEqualFormal |
| Checks if target is wearing any garment tagged as Formal.TargetOutfitGarmentTagEqualFormalChecks if target is not wearing any garment tagged as Formal.TargetOutfitGarmentTagNotEqualFormal |
| Checks if target is not wearing any garment tagged as Formal.TargetOutfitGarmentTagNotEqualFormal |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoOutfit[HasMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmannequinoutfit)[HasOutfitAccessoryType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoutfitaccessorytype)[HasOutfitGarmentType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoutfitgarmenttype)[HasOutfitMannequinAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoutfitmannequinatsite)[IsSchoolOutfitSameFromUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isschooloutfitsamefromuniform)[MannequinOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-mannequinoutfitcategory)[OutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-outfitcategory)
