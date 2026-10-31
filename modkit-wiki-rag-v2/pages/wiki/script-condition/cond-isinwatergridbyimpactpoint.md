---
document_id: "5edf049bf648438d0068881f62c7276056dffe314dca56f1d0bd92cf5d513a76"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isinwatergridbyimpactpoint"
title: "Condition_IsInWaterGridByImpactPoint"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:35+00:00"
content_sha256: "0c8220f5ad8789dbfa250e6bc7e0ebda8055a10589f00cbe930a697b3fa97dfb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isinwatergridbyimpactpoint"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the impact point (target location) is within a swimming pool located inside a site. Water areas located outside of sites (e.g., the sea) are excluded. This condition uses the target location directly and does not depend on the BaseObject. Returns false immediately if the target location is the zero vector.

# Parameters

| ParameterDescriptionCompareTypeType of comparison operation (Equal or NotEqual). |
| --- |
| CompareTypeType of comparison operation (Equal or NotEqual). |

# Examples

| DescriptionBaseObjectCommandCompareTypeChecks whether the clicked impact point is inside a site swimming poolSelfIsInWaterGridByImpactPointEqualChecks whether the impact point is NOT inside a site swimming poolSelfIsInWaterGridByImpactPointNotEqualChecks whether a target location lies within a pool grid in a siteTargetIsInWaterGridByImpactPointEqual |
| --- |
| Checks whether the clicked impact point is inside a site swimming poolSelfIsInWaterGridByImpactPointEqualChecks whether the impact point is NOT inside a site swimming poolSelfIsInWaterGridByImpactPointNotEqualChecks whether a target location lies within a pool grid in a siteTargetIsInWaterGridByImpactPointEqual |
| Checks whether the impact point is NOT inside a site swimming poolSelfIsInWaterGridByImpactPointNotEqualChecks whether a target location lies within a pool grid in a siteTargetIsInWaterGridByImpactPointEqual |
| Checks whether a target location lies within a pool grid in a siteTargetIsInWaterGridByImpactPointEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
