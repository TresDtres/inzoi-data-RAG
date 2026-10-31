---
document_id: "e0afe41d8428c0b9f34bace8ea475c4db770369eab40908b54ce96c287d62522"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoutfitaccessorytype"
title: "Condition_HasOutfitAccessoryType"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:10+00:00"
content_sha256: "14568398eb15a84f628f2632517077b70e7969ec39fd954680a4e41638802f6b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasoutfitaccessorytype"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether any currently worn accessory in the character's outfit is of the specified AccessoryType.

# Parameters

| ParameterDescriptionBaseObjectThe character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1AccessoryType name to check (e.g. Earring, Necklace, Ring, Bracelet). |
| --- |
| BaseObjectThe character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1AccessoryType name to check (e.g. Earring, Necklace, Ring, Bracelet). |
| CompareTypeSupported compare types: Equal, NotEqual.S1AccessoryType name to check (e.g. Earring, Necklace, Ring, Bracelet). |
| S1AccessoryType name to check (e.g. Earring, Necklace, Ring, Bracelet). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Checks if self is wearing any Earring accessory.SelfHasOutfitAccessoryTypeEqualEarringChecks if self has no Necklace equipped.SelfHasOutfitAccessoryTypeNotEqualNecklaceChecks if target is wearing a Ring accessory.TargetHasOutfitAccessoryTypeEqualRingChecks if self has no Bracelet equipped.SelfHasOutfitAccessoryTypeNotEqualBracelet |
| --- |
| Checks if self is wearing any Earring accessory.SelfHasOutfitAccessoryTypeEqualEarringChecks if self has no Necklace equipped.SelfHasOutfitAccessoryTypeNotEqualNecklaceChecks if target is wearing a Ring accessory.TargetHasOutfitAccessoryTypeEqualRingChecks if self has no Bracelet equipped.SelfHasOutfitAccessoryTypeNotEqualBracelet |
| Checks if self has no Necklace equipped.SelfHasOutfitAccessoryTypeNotEqualNecklaceChecks if target is wearing a Ring accessory.TargetHasOutfitAccessoryTypeEqualRingChecks if self has no Bracelet equipped.SelfHasOutfitAccessoryTypeNotEqualBracelet |
| Checks if target is wearing a Ring accessory.TargetHasOutfitAccessoryTypeEqualRingChecks if self has no Bracelet equipped.SelfHasOutfitAccessoryTypeNotEqualBracelet |
| Checks if self has no Bracelet equipped.SelfHasOutfitAccessoryTypeNotEqualBracelet |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoOutfit[HasMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasmannequinoutfit)[HasOutfitGarmentType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoutfitgarmenttype)[HasOutfitMannequinAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoutfitmannequinatsite)[IsSchoolOutfitSameFromUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isschooloutfitsamefromuniform)[MannequinOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-mannequinoutfitcategory)[OutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-outfitcategory)[OutfitGarmentTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-outfitgarmenttag)
