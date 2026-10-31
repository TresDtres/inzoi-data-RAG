---
document_id: "e5d4c1e3def6ca7fa3fc69fda74d1a231f1f58157cb01edd1fc77fedbc8c78ea"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ismetreciperequirements"
title: "Condition_IsMetRecipeRequirements"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:37+00:00"
content_sha256: "5e64808ca8d927d569091876db30ff528a74deb1ce66efb6b4d24f7e65390038"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-ismetreciperequirements"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the starting conditions for the first step of the specified recipe are satisfied. Self is used as the crafter entity and Target is used as the workbench entity. The crafting policy determines how strictly the requirements are evaluated (e.g., CheckAll requires all conditions to be met; CheckIngredient only checks ingredient availability).

# Parameters

| ParameterDescriptionBaseObjectNot directly used; Self is the crafter, Target is the workbenchCompareTypeEqual: all first-step requirements are met; NotEqual: requirements are not metS1Recipe ID from the crafting data table (row key)S2Crafting policy type (e.g., CheckAll, CheckIngredient); defaults to CheckAll if omitted |
| --- |
| BaseObjectNot directly used; Self is the crafter, Target is the workbenchCompareTypeEqual: all first-step requirements are met; NotEqual: requirements are not metS1Recipe ID from the crafting data table (row key)S2Crafting policy type (e.g., CheckAll, CheckIngredient); defaults to CheckAll if omitted |
| CompareTypeEqual: all first-step requirements are met; NotEqual: requirements are not metS1Recipe ID from the crafting data table (row key)S2Crafting policy type (e.g., CheckAll, CheckIngredient); defaults to CheckAll if omitted |
| S1Recipe ID from the crafting data table (row key)S2Crafting policy type (e.g., CheckAll, CheckIngredient); defaults to CheckAll if omitted |
| S2Crafting policy type (e.g., CheckAll, CheckIngredient); defaults to CheckAll if omitted |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Does self meet all requirements to start making BreadRecipe?SelfIsMetRecipeRequirementsEqualBreadRecipeCheckAllDoes self meet requirements for PotionRecipe (ingredient only)?SelfIsMetRecipeRequirementsEqualPotionRecipeCheckIngredientHas self NOT met the requirements for SwordRecipe?SelfIsMetRecipeRequirementsNotEqualSwordRecipeCheckAll |
| --- |
| Does self meet all requirements to start making BreadRecipe?SelfIsMetRecipeRequirementsEqualBreadRecipeCheckAllDoes self meet requirements for PotionRecipe (ingredient only)?SelfIsMetRecipeRequirementsEqualPotionRecipeCheckIngredientHas self NOT met the requirements for SwordRecipe?SelfIsMetRecipeRequirementsNotEqualSwordRecipeCheckAll |
| Does self meet requirements for PotionRecipe (ingredient only)?SelfIsMetRecipeRequirementsEqualPotionRecipeCheckIngredientHas self NOT met the requirements for SwordRecipe?SelfIsMetRecipeRequirementsNotEqualSwordRecipeCheckAll |
| Has self NOT met the requirements for SwordRecipe?SelfIsMetRecipeRequirementsNotEqualSwordRecipeCheckAll |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
