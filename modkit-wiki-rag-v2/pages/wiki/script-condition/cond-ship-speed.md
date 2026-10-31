---
document_id: "fc1000dc8dd6e2fc6d4a8d9f028e9727c67aac98f1fba1c29bac3072d2050cef"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ship-speed"
title: "Condition_Ship_Speed"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:59+00:00"
content_sha256: "3067ad59ba357f2b7f3023d6fcfac524720a248952c374a4eee1d1865ad48521"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-ship-speed"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the ship's speed. If the character is currently boarded on a ship, the speed of the boarded ship is checked first; otherwise the target ship is used.

# Parameters

| ParameterDescriptionBaseObjectThe selected ship object (Self or Target).CompareTypeComparison operation type (Equal, NotEqual, Less, Greater, etc.).F1Speed threshold value for comparison. |
| --- |
| BaseObjectThe selected ship object (Self or Target).CompareTypeComparison operation type (Equal, NotEqual, Less, Greater, etc.).F1Speed threshold value for comparison. |
| CompareTypeComparison operation type (Equal, NotEqual, Less, Greater, etc.).F1Speed threshold value for comparison. |
| F1Speed threshold value for comparison. |

# Examples

| DescriptionBaseObjectCommandCompareTypeF1Compares whether the ship's speed is less than or equal to 10.TargetShip_SpeedLessOrEqual10Checks whether the boarded ship's speed is greater than 20.SelfShip_SpeedGreater20 |
| --- |
| Compares whether the ship's speed is less than or equal to 10.TargetShip_SpeedLessOrEqual10Checks whether the boarded ship's speed is greater than 20.SelfShip_SpeedGreater20 |
| Checks whether the boarded ship's speed is greater than 20.SelfShip_SpeedGreater20 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
