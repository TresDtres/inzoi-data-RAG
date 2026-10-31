---
document_id: "a3adc6b453d530088a47680a7e71abe3a230ee201257ad0631e18463116956ff"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-outfitcategory"
title: "Condition_OutfitCategory"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:55+00:00"
content_sha256: "3033194b7529f4f11eae3140237eeab143e1e8639e6453a47af7bb5e13ca13a3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-outfitcategory"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the character has an outfit of the specified category equipped. If S2 is "All", checks all outfit slots; otherwise checks only the last (most recently applied) outfit slot.

# Parameters

| ParameterDescriptionBaseObjectThe character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1Outfit category name to check (e.g. "Casual", "Formal", "Sport").S2Scope of check: "All" to check all outfit slots, omit or leave empty for last slot only. |
| --- |
| BaseObjectThe character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1Outfit category name to check (e.g. "Casual", "Formal", "Sport").S2Scope of check: "All" to check all outfit slots, omit or leave empty for last slot only. |
| CompareTypeSupported compare types: Equal, NotEqual.S1Outfit category name to check (e.g. "Casual", "Formal", "Sport").S2Scope of check: "All" to check all outfit slots, omit or leave empty for last slot only. |
| S1Outfit category name to check (e.g. "Casual", "Formal", "Sport").S2Scope of check: "All" to check all outfit slots, omit or leave empty for last slot only. |
| S2Scope of check: "All" to check all outfit slots, omit or leave empty for last slot only. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Checks if self has a Casual outfit in any slot.SelfOutfitCategoryEqualCasualAllChecks if self does not have a Formal outfit in the last slot.SelfOutfitCategoryNotEqualFormalChecks if target has a Sport outfit in any slot.TargetOutfitCategoryEqualSportAllChecks if target does not have a Sport outfit in any slot.TargetOutfitCategoryNotEqualSportAll |
| --- |
| Checks if self has a Casual outfit in any slot.SelfOutfitCategoryEqualCasualAllChecks if self does not have a Formal outfit in the last slot.SelfOutfitCategoryNotEqualFormalChecks if target has a Sport outfit in any slot.TargetOutfitCategoryEqualSportAllChecks if target does not have a Sport outfit in any slot.TargetOutfitCategoryNotEqualSportAll |
| Checks if self does not have a Formal outfit in the last slot.SelfOutfitCategoryNotEqualFormalChecks if target has a Sport outfit in any slot.TargetOutfitCategoryEqualSportAllChecks if target does not have a Sport outfit in any slot.TargetOutfitCategoryNotEqualSportAll |
| Checks if target has a Sport outfit in any slot.TargetOutfitCategoryEqualSportAllChecks if target does not have a Sport outfit in any slot.TargetOutfitCategoryNotEqualSportAll |
| Checks if target does not have a Sport outfit in any slot.TargetOutfitCategoryNotEqualSportAll |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoOutfit[HasMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmannequinoutfit)[HasOutfitAccessoryType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoutfitaccessorytype)[HasOutfitGarmentType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoutfitgarmenttype)[HasOutfitMannequinAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoutfitmannequinatsite)[IsSchoolOutfitSameFromUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isschooloutfitsamefromuniform)[MannequinOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-mannequinoutfitcategory)[OutfitGarmentTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-outfitgarmenttag)
