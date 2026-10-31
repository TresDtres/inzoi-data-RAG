---
document_id: "70f8fb4af4ddc64df17959b0ff0a964ce05d2c98d0174e52c4e88c2cf57452c0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isinterritory"
title: "Condition_IsInTerritory"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:34+00:00"
content_sha256: "78b83e117b435b188088f37ad62fae26152733485c892dcf66bc5a056482be27"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isinterritory"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject character is located inside a Common Territory with the specified tag. If S1 is empty (None), the condition matches any Common Territory regardless of tag.

# Parameters

| ParameterDescriptionBaseObjectThe character whose location is checked against Common Territories.CompareTypeType of comparison operation (Equal or NotEqual).S1Territory tag to filter by. If empty (None), any Common Territory matches. |
| --- |
| BaseObjectThe character whose location is checked against Common Territories.CompareTypeType of comparison operation (Equal or NotEqual).S1Territory tag to filter by. If empty (None), any Common Territory matches. |
| CompareTypeType of comparison operation (Equal or NotEqual).S1Territory tag to filter by. If empty (None), any Common Territory matches. |
| S1Territory tag to filter by. If empty (None), any Common Territory matches. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self is inside any Common TerritorySelfIsInTerritoryEqualCheck if Self is inside a territory tagged "Beach"SelfIsInTerritoryEqualBeachCheck if Target is NOT in a territory tagged "Downtown"TargetIsInTerritoryNotEqualDowntownCheck if Self is outside all Common TerritoriesSelfIsInTerritoryNotEqual |
| --- |
| Check if Self is inside any Common TerritorySelfIsInTerritoryEqualCheck if Self is inside a territory tagged "Beach"SelfIsInTerritoryEqualBeachCheck if Target is NOT in a territory tagged "Downtown"TargetIsInTerritoryNotEqualDowntownCheck if Self is outside all Common TerritoriesSelfIsInTerritoryNotEqual |
| Check if Self is inside a territory tagged "Beach"SelfIsInTerritoryEqualBeachCheck if Target is NOT in a territory tagged "Downtown"TargetIsInTerritoryNotEqualDowntownCheck if Self is outside all Common TerritoriesSelfIsInTerritoryNotEqual |
| Check if Target is NOT in a territory tagged "Downtown"TargetIsInTerritoryNotEqualDowntownCheck if Self is outside all Common TerritoriesSelfIsInTerritoryNotEqual |
| Check if Self is outside all Common TerritoriesSelfIsInTerritoryNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
