---
document_id: "e2947ebe63c2640761064bd4087970f485b036b5526380b78e51f8838c0655d0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoutfitgarmenttype"
title: "Condition_HasOutfitGarmentType"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:10+00:00"
content_sha256: "d4c4c982c65c2a5610954d22a66b5dca455b5de11e0d6201ccf72248df2fc877"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasoutfitgarmenttype"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether any currently worn outfit contains a garment of the specified GarmentType.

# Parameters

| ParameterDescriptionBaseObjectThe character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1GarmentType name to check (e.g. Top, Bottom, FullBody, Shoes). |
| --- |
| BaseObjectThe character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1GarmentType name to check (e.g. Top, Bottom, FullBody, Shoes). |
| CompareTypeSupported compare types: Equal, NotEqual.S1GarmentType name to check (e.g. Top, Bottom, FullBody, Shoes). |
| S1GarmentType name to check (e.g. Top, Bottom, FullBody, Shoes). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Checks if self is wearing any Top garment.SelfHasOutfitGarmentTypeEqualTopChecks if self is not wearing any FullBody garment.SelfHasOutfitGarmentTypeNotEqualFullBodyChecks if target is wearing a Bottom garment.TargetHasOutfitGarmentTypeEqualBottomChecks if self has no Shoes garment equipped.SelfHasOutfitGarmentTypeNotEqualShoes |
| --- |
| Checks if self is wearing any Top garment.SelfHasOutfitGarmentTypeEqualTopChecks if self is not wearing any FullBody garment.SelfHasOutfitGarmentTypeNotEqualFullBodyChecks if target is wearing a Bottom garment.TargetHasOutfitGarmentTypeEqualBottomChecks if self has no Shoes garment equipped.SelfHasOutfitGarmentTypeNotEqualShoes |
| Checks if self is not wearing any FullBody garment.SelfHasOutfitGarmentTypeNotEqualFullBodyChecks if target is wearing a Bottom garment.TargetHasOutfitGarmentTypeEqualBottomChecks if self has no Shoes garment equipped.SelfHasOutfitGarmentTypeNotEqualShoes |
| Checks if target is wearing a Bottom garment.TargetHasOutfitGarmentTypeEqualBottomChecks if self has no Shoes garment equipped.SelfHasOutfitGarmentTypeNotEqualShoes |
| Checks if self has no Shoes garment equipped.SelfHasOutfitGarmentTypeNotEqualShoes |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoOutfit[HasMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmannequinoutfit)[HasOutfitAccessoryType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoutfitaccessorytype)[HasOutfitMannequinAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoutfitmannequinatsite)[IsSchoolOutfitSameFromUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isschooloutfitsamefromuniform)[MannequinOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-mannequinoutfitcategory)[OutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-outfitcategory)[OutfitGarmentTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-outfitgarmenttag)
