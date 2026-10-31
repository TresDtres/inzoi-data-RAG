---
document_id: "12f1b62f3545b98c8bf50e99eae8886fc61f5cb421c9d72a48c714a51fb6414d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-crowdgroup"
title: "Condition_CrowdGroup"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:56+00:00"
content_sha256: "b937f6dc892ff2bde7ce6607552399b822837901e7b1dd2bc8150f1f989d336e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-crowdgroup"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether a crowd character belongs to the crowd group specified by S1. The character must be of the Crowd group type; if not, the condition returns false. The crowd group ID is retrieved from the character's TraitComponent.

# Parameters

| ParameterDescriptionBaseObjectThe crowd character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1The crowd group ID to match against. |
| --- |
| BaseObjectThe crowd character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1The crowd group ID to match against. |
| CompareTypeSupported compare types: Equal, NotEqual.S1The crowd group ID to match against. |
| S1The crowd group ID to match against. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self belongs to CrowdGroup_01SelfCrowdGroupEqualCrowdGroup_01Check if Self does not belong to CrowdGroup_01SelfCrowdGroupNotEqualCrowdGroup_01Check if Target belongs to CrowdGroup_02TargetCrowdGroupEqualCrowdGroup_02 |
| --- |
| Check if Self belongs to CrowdGroup_01SelfCrowdGroupEqualCrowdGroup_01Check if Self does not belong to CrowdGroup_01SelfCrowdGroupNotEqualCrowdGroup_01Check if Target belongs to CrowdGroup_02TargetCrowdGroupEqualCrowdGroup_02 |
| Check if Self does not belong to CrowdGroup_01SelfCrowdGroupNotEqualCrowdGroup_01Check if Target belongs to CrowdGroup_02TargetCrowdGroupEqualCrowdGroup_02 |
| Check if Target belongs to CrowdGroup_02TargetCrowdGroupEqualCrowdGroup_02 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
