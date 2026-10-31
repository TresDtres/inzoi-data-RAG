---
document_id: "6a36232074c5d41191ba0eda1daa3cfa904c31c6aa5677245003ec2668264889"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-costumetag"
title: "Condition_CostumeTag"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:55+00:00"
content_sha256: "f3216c4dfb8f286ed4f48b7b1b03dfad2dbfe76c6ef688a7bb7c544ab47d58c8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-costumetag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the character is wearing a costume that has the specified tag in its CostumeTags. If S2 is "All", checks all outfit slots; otherwise checks only the last (most recently applied) outfit slot.

# Parameters

| ParameterDescriptionBaseObjectThe character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1Costume tag to look for in Costume.CostumeTags (e.g. "MannequinTryOn", "Swimwear").S2Scope of check: "All" to check all outfit slots, omit or leave empty for last slot. |
| --- |
| BaseObjectThe character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1Costume tag to look for in Costume.CostumeTags (e.g. "MannequinTryOn", "Swimwear").S2Scope of check: "All" to check all outfit slots, omit or leave empty for last slot. |
| CompareTypeSupported compare types: Equal, NotEqual.S1Costume tag to look for in Costume.CostumeTags (e.g. "MannequinTryOn", "Swimwear").S2Scope of check: "All" to check all outfit slots, omit or leave empty for last slot. |
| S1Costume tag to look for in Costume.CostumeTags (e.g. "MannequinTryOn", "Swimwear").S2Scope of check: "All" to check all outfit slots, omit or leave empty for last slot. |
| S2Scope of check: "All" to check all outfit slots, omit or leave empty for last slot. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Checks if self is currently wearing a mannequin try-on costume.SelfCostumeTagEqualMannequinTryOnChecks if self has any swimwear-tagged costume in any slot.SelfCostumeTagEqualSwimwearAllChecks if self is not currently wearing a mannequin try-on costume.SelfCostumeTagNotEqualMannequinTryOnChecks if target has no event costume in any slot.TargetCostumeTagNotEqualEventCostumeAll |
| --- |
| Checks if self is currently wearing a mannequin try-on costume.SelfCostumeTagEqualMannequinTryOnChecks if self has any swimwear-tagged costume in any slot.SelfCostumeTagEqualSwimwearAllChecks if self is not currently wearing a mannequin try-on costume.SelfCostumeTagNotEqualMannequinTryOnChecks if target has no event costume in any slot.TargetCostumeTagNotEqualEventCostumeAll |
| Checks if self has any swimwear-tagged costume in any slot.SelfCostumeTagEqualSwimwearAllChecks if self is not currently wearing a mannequin try-on costume.SelfCostumeTagNotEqualMannequinTryOnChecks if target has no event costume in any slot.TargetCostumeTagNotEqualEventCostumeAll |
| Checks if self is not currently wearing a mannequin try-on costume.SelfCostumeTagNotEqualMannequinTryOnChecks if target has no event costume in any slot.TargetCostumeTagNotEqualEventCostumeAll |
| Checks if target has no event costume in any slot.TargetCostumeTagNotEqualEventCostumeAll |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
