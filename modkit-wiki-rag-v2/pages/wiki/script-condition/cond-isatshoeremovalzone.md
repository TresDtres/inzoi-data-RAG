---
document_id: "079bbe025d0557db48054c0a802d2a622a52b97a9cc7c03dae0629e661c46ee6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isatshoeremovalzone"
title: "Condition_IsAtShoeRemovalZone"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:20+00:00"
content_sha256: "7575a865a7218fadf819efc3e2d40766632a7179e6518812e84b6457ff87a9cf"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isatshoeremovalzone"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject is currently located in a shoe-removal zone. A shoe-removal zone is defined as an indoor area within a site that has the TakeOffShoes flag enabled. This references the logic used in B2SubActionHelper::NeedToTakeOffShoes.

# Parameters

| ParameterDescriptionBaseObjectThe entity whose location is checked for shoe-removal zone (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual). |
| --- |
| BaseObjectThe entity whose location is checked for shoe-removal zone (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual). |
| CompareTypeType of comparison operation (Equal or NotEqual). |

# Examples

| DescriptionBaseObjectCommandCompareTypeChecks if Self is in a shoe-removal zoneSelfIsAtShoeRemovalZoneEqualChecks if Target is in a shoe-removal zoneTargetIsAtShoeRemovalZoneEqualChecks if Self is NOT in a shoe-removal zoneSelfIsAtShoeRemovalZoneNotEqual |
| --- |
| Checks if Self is in a shoe-removal zoneSelfIsAtShoeRemovalZoneEqualChecks if Target is in a shoe-removal zoneTargetIsAtShoeRemovalZoneEqualChecks if Self is NOT in a shoe-removal zoneSelfIsAtShoeRemovalZoneNotEqual |
| Checks if Target is in a shoe-removal zoneTargetIsAtShoeRemovalZoneEqualChecks if Self is NOT in a shoe-removal zoneSelfIsAtShoeRemovalZoneNotEqual |
| Checks if Self is NOT in a shoe-removal zoneSelfIsAtShoeRemovalZoneNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
