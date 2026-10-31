---
document_id: "045fa024c43740d6720f6b0fd867435650387a6f7d7b8238c8c8e90fdfe9dddb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isleftoverfood"
title: "Condition_IsLeftoverFood"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:36+00:00"
content_sha256: "2bbbe7d08ebb789bbd130971824664e1c8e6cf2b9aaf6da2543c7e6ac2a5c57e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isleftoverfood"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the target food is a partially-eaten ServedFood (leftover). Unlike HasBeenEatenFood (which is true for ANY food whose remaining quantity dropped below its total, including a multi-serving dish that just lost a whole serving), this is true ONLY for ServedFood - the single-serving food Joi actually eats. PreparedFood (a multi-serving dish) only ever loses whole servings via TakeServedFood, so it is always false regardless of how many servings remain, and a fully emptied food (either type) is also false since there is nothing left to be "leftover".

# Parameters

| ParameterDescriptionBaseObjectThe food object entity to checkCompareTypeEqual: target is a partially-eaten ServedFood. NotEqual: it is not. |
| --- |
| BaseObjectThe food object entity to checkCompareTypeEqual: target is a partially-eaten ServedFood. NotEqual: it is not. |
| CompareTypeEqual: target is a partially-eaten ServedFood. NotEqual: it is not. |

# Examples

| DescriptionBaseObjectCommandCompareTypeChecks whether target food is leftover.TargetIsLeftoverFoodEqualChecks whether target food is not leftover.TargetIsLeftoverFoodNotEqual |
| --- |
| Checks whether target food is leftover.TargetIsLeftoverFoodEqualChecks whether target food is not leftover.TargetIsLeftoverFoodNotEqual |
| Checks whether target food is not leftover.TargetIsLeftoverFoodNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
