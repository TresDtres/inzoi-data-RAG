---
document_id: "e9c8f99553fdcd5083783c800231197e94cf104cbc0d903ca808ce9d5a3069bf"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isinterritorybyimpactpoint"
title: "Condition_IsInTerritoryByImpactPoint"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:34+00:00"
content_sha256: "50c2e66fe27da85061a53250799553dd6918015eedff2163e2dec38522760efd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isinterritorybyimpactpoint"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the location pointed to by the mouse cursor lies within a Common Territory that has the specified TerritoryTag. The impact point is determined by the mouse pointer position.

# Parameters

| ParameterDescriptionBaseObjectFixed to Target. The condition is evaluated against the mouse impact point.CompareTypeEqual (point is inside the territory), NotEqual (point is outside).S1The TerritoryTag of the Common Territory to check against. |
| --- |
| BaseObjectFixed to Target. The condition is evaluated against the mouse impact point.CompareTypeEqual (point is inside the territory), NotEqual (point is outside).S1The TerritoryTag of the Common Territory to check against. |
| CompareTypeEqual (point is inside the territory), NotEqual (point is outside).S1The TerritoryTag of the Common Territory to check against. |
| S1The TerritoryTag of the Common Territory to check against. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if the mouse cursor is inside a Common Territory tagged test1TargetIsInTerritoryByImpactPointEqualtest1Check if the mouse cursor is NOT inside a Common Territory tagged test1TargetIsInTerritoryByImpactPointNotEqualtest1Check if the mouse cursor is inside a Common Territory tagged ShopAreaTargetIsInTerritoryByImpactPointEqualShopAreaCheck if the mouse cursor is NOT inside a Common Territory tagged ShopAreaTargetIsInTerritoryByImpactPointNotEqualShopArea |
| --- |
| Check if the mouse cursor is inside a Common Territory tagged test1TargetIsInTerritoryByImpactPointEqualtest1Check if the mouse cursor is NOT inside a Common Territory tagged test1TargetIsInTerritoryByImpactPointNotEqualtest1Check if the mouse cursor is inside a Common Territory tagged ShopAreaTargetIsInTerritoryByImpactPointEqualShopAreaCheck if the mouse cursor is NOT inside a Common Territory tagged ShopAreaTargetIsInTerritoryByImpactPointNotEqualShopArea |
| Check if the mouse cursor is NOT inside a Common Territory tagged test1TargetIsInTerritoryByImpactPointNotEqualtest1Check if the mouse cursor is inside a Common Territory tagged ShopAreaTargetIsInTerritoryByImpactPointEqualShopAreaCheck if the mouse cursor is NOT inside a Common Territory tagged ShopAreaTargetIsInTerritoryByImpactPointNotEqualShopArea |
| Check if the mouse cursor is inside a Common Territory tagged ShopAreaTargetIsInTerritoryByImpactPointEqualShopAreaCheck if the mouse cursor is NOT inside a Common Territory tagged ShopAreaTargetIsInTerritoryByImpactPointNotEqualShopArea |
| Check if the mouse cursor is NOT inside a Common Territory tagged ShopAreaTargetIsInTerritoryByImpactPointNotEqualShopArea |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
