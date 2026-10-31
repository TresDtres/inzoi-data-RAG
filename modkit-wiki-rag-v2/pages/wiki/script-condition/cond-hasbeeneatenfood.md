---
document_id: "c238b631848d8c58320cd930304d2038deae97194d7ed6b1803c167d302a3742"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbeeneatenfood"
title: "Condition_HasBeenEatenFood"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:02+00:00"
content_sha256: "42f5c0024d632896ea69130f7a3f74e2c527270b365a75fa99ee38f6694c4fdc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasbeeneatenfood"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the target food has been eaten at least once. Compares the original TotalFoodValue against the current RemainFoodValue. Returns true (Equal) if RemainFoodValue < TotalFoodValue (i.e., at least one bite was taken).

# Parameters

| ParameterDescriptionBaseObjectThe food object entity to checkCompareTypeEqual: food has been eaten at least once. NotEqual: food has not been eaten. |
| --- |
| BaseObjectThe food object entity to checkCompareTypeEqual: food has been eaten at least once. NotEqual: food has not been eaten. |
| CompareTypeEqual: food has been eaten at least once. NotEqual: food has not been eaten. |

# Examples

| DescriptionBaseObjectCommandCompareTypeChecks whether target food has been eaten at least once.TargetHasBeenEatenFoodEqualChecks whether target food has not been eaten yet.TargetHasBeenEatenFoodNotEqual |
| --- |
| Checks whether target food has been eaten at least once.TargetHasBeenEatenFoodEqualChecks whether target food has not been eaten yet.TargetHasBeenEatenFoodNotEqual |
| Checks whether target food has not been eaten yet.TargetHasBeenEatenFoodNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
