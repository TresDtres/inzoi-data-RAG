---
document_id: "016dcf36c214df7b64406b6ef64ecb0168132f9ce71c014d3bfe1e63ec36816e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-costume"
title: "Condition_Costume"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:55+00:00"
content_sha256: "95c45341d5e5032f88220e48aba8e80067335cd6c6d0aeeebb0708362dfc32c9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-costume"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the character has a specified costume equipped. If S2 is "All", checks all outfit slots; otherwise checks only the last (most recently applied) outfit slot.

# Parameters

| ParameterDescriptionBaseObjectThe character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1Costume ID to check for (e.g. "CostumeA").S2Scope of check: "All" to check all outfit slots, omit or leave empty for last slot. |
| --- |
| BaseObjectThe character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1Costume ID to check for (e.g. "CostumeA").S2Scope of check: "All" to check all outfit slots, omit or leave empty for last slot. |
| CompareTypeSupported compare types: Equal, NotEqual.S1Costume ID to check for (e.g. "CostumeA").S2Scope of check: "All" to check all outfit slots, omit or leave empty for last slot. |
| S1Costume ID to check for (e.g. "CostumeA").S2Scope of check: "All" to check all outfit slots, omit or leave empty for last slot. |
| S2Scope of check: "All" to check all outfit slots, omit or leave empty for last slot. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Checks if self has CostumeA in any slot.SelfCostumeEqualCostumeAAllChecks if self does not have CostumeA in the last slot.SelfCostumeNotEqualCostumeAChecks if target has CostumeB in any slot.TargetCostumeEqualCostumeBAllChecks if target does not have CostumeB in any slot.TargetCostumeNotEqualCostumeBAll |
| --- |
| Checks if self has CostumeA in any slot.SelfCostumeEqualCostumeAAllChecks if self does not have CostumeA in the last slot.SelfCostumeNotEqualCostumeAChecks if target has CostumeB in any slot.TargetCostumeEqualCostumeBAllChecks if target does not have CostumeB in any slot.TargetCostumeNotEqualCostumeBAll |
| Checks if self does not have CostumeA in the last slot.SelfCostumeNotEqualCostumeAChecks if target has CostumeB in any slot.TargetCostumeEqualCostumeBAllChecks if target does not have CostumeB in any slot.TargetCostumeNotEqualCostumeBAll |
| Checks if target has CostumeB in any slot.TargetCostumeEqualCostumeBAllChecks if target does not have CostumeB in any slot.TargetCostumeNotEqualCostumeBAll |
| Checks if target does not have CostumeB in any slot.TargetCostumeNotEqualCostumeBAll |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
