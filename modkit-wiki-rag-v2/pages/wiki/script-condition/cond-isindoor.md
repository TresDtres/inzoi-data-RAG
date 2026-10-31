---
document_id: "6249e5217bded2adc92ac2932ee51c8f68ebd3336e66653a2ffaef0f8334d928"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isindoor"
title: "Condition_IsIndoor"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:33+00:00"
content_sha256: "6725d367b10f7eedf8cadf879c1e65249b1c631b04778a34d4ee804cdd7592f2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isindoor"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the specified entity is currently located inside a room (indoor area) within a building. The test location is determined from the entity's current position or, if Target is used and no entity is found, from the script context's target location.

# Parameters

| ParameterDescriptionBaseObjectThe entity whose location is checked for indoor status (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual). |
| --- |
| BaseObjectThe entity whose location is checked for indoor status (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual). |
| CompareTypeType of comparison operation (Equal or NotEqual). |

# Examples

| DescriptionBaseObjectCommandCompareTypeChecks if Self is currently inside a roomSelfIsIndoorEqualChecks if Target is currently inside a roomTargetIsIndoorEqualChecks if Self is NOT inside a room (outdoors)SelfIsIndoorNotEqual |
| --- |
| Checks if Self is currently inside a roomSelfIsIndoorEqualChecks if Target is currently inside a roomTargetIsIndoorEqualChecks if Self is NOT inside a room (outdoors)SelfIsIndoorNotEqual |
| Checks if Target is currently inside a roomTargetIsIndoorEqualChecks if Self is NOT inside a room (outdoors)SelfIsIndoorNotEqual |
| Checks if Self is NOT inside a room (outdoors)SelfIsIndoorNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
