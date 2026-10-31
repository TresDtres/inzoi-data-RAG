---
document_id: "a1df320ace976b10e40892f13f02ec51264e340686fa24f96b4ec2455730106b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isinwaterareabyimpactpoint"
title: "Condition_IsInWaterAreaByImpactPoint"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:35+00:00"
content_sha256: "f040b9659c5ac300abfc0df83912b958ba359890d58779a28db89cb8b08d3947"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isinwaterareabyimpactpoint"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the impact point (target location) is within a swimmable natural water area (e.g., the sea). Swimming pools located within sites are explicitly excluded. This condition uses the target location directly and does not depend on the BaseObject. Returns false immediately if the target location is the zero vector.

# Parameters

| ParameterDescriptionCompareTypeType of comparison operation (Equal or NotEqual). |
| --- |
| CompareTypeType of comparison operation (Equal or NotEqual). |

# Examples

| DescriptionBaseObjectCommandCompareTypeChecks whether the clicked impact point is in a swimmable water areaSelfIsInWaterAreaByImpactPointEqualChecks whether the impact point is NOT in a natural water areaSelfIsInWaterAreaByImpactPointNotEqualChecks whether a target location is within the sea territoryTargetIsInWaterAreaByImpactPointEqual |
| --- |
| Checks whether the clicked impact point is in a swimmable water areaSelfIsInWaterAreaByImpactPointEqualChecks whether the impact point is NOT in a natural water areaSelfIsInWaterAreaByImpactPointNotEqualChecks whether a target location is within the sea territoryTargetIsInWaterAreaByImpactPointEqual |
| Checks whether the impact point is NOT in a natural water areaSelfIsInWaterAreaByImpactPointNotEqualChecks whether a target location is within the sea territoryTargetIsInWaterAreaByImpactPointEqual |
| Checks whether a target location is within the sea territoryTargetIsInWaterAreaByImpactPointEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
