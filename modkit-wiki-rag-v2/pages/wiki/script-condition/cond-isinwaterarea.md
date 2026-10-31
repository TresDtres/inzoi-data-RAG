---
document_id: "b174bd0d470e0653092e59a92c20b31dff77c0fa522e93c1e91ad927e7fa8c2e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isinwaterarea"
title: "Condition_IsInWaterArea"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:35+00:00"
content_sha256: "2fa361761d2b7b4a736e07913b6dcaac2d0043df0e2915a677c6481e4b1c4510"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isinwaterarea"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject character is currently in the water area type specified by S1. "Sea" reads the character's own cached natural water-area state (FB2Character::IsInWaterArea), which is refreshed elsewhere from FB2TerritoryManager::IsInWaterTerritory(GetLocation()). "SwimmingPool" checks whether the character's current location is inside a site swimming pool grid, via FB2SiteManager::IsInWaterSiteGrid().

# Parameters

| ParameterDescriptionBaseObjectThe character whose water-area state is checked (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual).S1Which water area type to check: "Sea" or "SwimmingPool". |
| --- |
| BaseObjectThe character whose water-area state is checked (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual).S1Which water area type to check: "Sea" or "SwimmingPool". |
| CompareTypeType of comparison operation (Equal or NotEqual).S1Which water area type to check: "Sea" or "SwimmingPool". |
| S1Which water area type to check: "Sea" or "SwimmingPool". |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Checks whether Self is currently in the sea (not a pool)SelfIsInWaterAreaEqualSeaChecks whether Self is NOT in the seaSelfIsInWaterAreaNotEqualSeaChecks whether Self is currently inside a site swimming poolSelfIsInWaterAreaEqualSwimmingPool |
| --- |
| Checks whether Self is currently in the sea (not a pool)SelfIsInWaterAreaEqualSeaChecks whether Self is NOT in the seaSelfIsInWaterAreaNotEqualSeaChecks whether Self is currently inside a site swimming poolSelfIsInWaterAreaEqualSwimmingPool |
| Checks whether Self is NOT in the seaSelfIsInWaterAreaNotEqualSeaChecks whether Self is currently inside a site swimming poolSelfIsInWaterAreaEqualSwimmingPool |
| Checks whether Self is currently inside a site swimming poolSelfIsInWaterAreaEqualSwimmingPool |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
