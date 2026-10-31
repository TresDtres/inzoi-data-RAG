---
document_id: "3bbca01a5a4f68ee50f6701b4e6a53b50c4de39b8aebaf9869aad2c28398708c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isinwaterbyimpactpoint"
title: "Condition_IsInWaterByImpactPoint"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:35+00:00"
content_sha256: "cf1a76b25791345521abf600b97d44a5ab5e8b22cd10b2aa47b54a63b002cea9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isinwaterbyimpactpoint"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Determines whether the impact point (target location) is in any water area, including both site swimming pools and natural water areas outside of sites (e.g., the sea). This condition uses the target location directly and does not depend on the BaseObject. Returns false immediately if the target location is the zero vector.

# Parameters

| ParameterDescriptionCompareTypeType of comparison operation (Equal or NotEqual). |
| --- |
| CompareTypeType of comparison operation (Equal or NotEqual). |

# Examples

| DescriptionBaseObjectCommandCompareTypeChecks whether the clicked impact point is in any water areaSelfIsInWaterByImpactPointEqualChecks whether the impact point is NOT in any water areaSelfIsInWaterByImpactPointNotEqualChecks whether a target location is inside a pool or natural water areaTargetIsInWaterByImpactPointEqual |
| --- |
| Checks whether the clicked impact point is in any water areaSelfIsInWaterByImpactPointEqualChecks whether the impact point is NOT in any water areaSelfIsInWaterByImpactPointNotEqualChecks whether a target location is inside a pool or natural water areaTargetIsInWaterByImpactPointEqual |
| Checks whether the impact point is NOT in any water areaSelfIsInWaterByImpactPointNotEqualChecks whether a target location is inside a pool or natural water areaTargetIsInWaterByImpactPointEqual |
| Checks whether a target location is inside a pool or natural water areaTargetIsInWaterByImpactPointEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
