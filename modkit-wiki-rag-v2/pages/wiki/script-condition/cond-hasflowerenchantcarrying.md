---
document_id: "3d312424c9c1316e9f019b8222f25ed8af527a0142c2327cb5c56ca6ab84c071"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasflowerenchantcarrying"
title: "Condition_HasFlowerEnchantCarrying"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:05+00:00"
content_sha256: "3e2e3c8b12ff89a2fa9e1f2f102830d10400447e5be260c838e3e133cc4c5c2a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasflowerenchantcarrying"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the flower object currently being carried by the BaseObject character has a specific enchant applied. Enchant refers to the Id field in FlowerEnchant.json. If S1 is empty, checks whether any enchant exists.

# Parameters

| ParameterDescriptionBaseObjectThe character entity carrying the flower.CompareTypeSupported compare types: Equal, NotEqual.S1The enchant ID to compare. If empty, checks for any enchant existence. |
| --- |
| BaseObjectThe character entity carrying the flower.CompareTypeSupported compare types: Equal, NotEqual.S1The enchant ID to compare. If empty, checks for any enchant existence. |
| CompareTypeSupported compare types: Equal, NotEqual.S1The enchant ID to compare. If empty, checks for any enchant existence. |
| S1The enchant ID to compare. If empty, checks for any enchant existence. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if the flower being carried has any enchantSelfHasFlowerEnchantCarryingEqualCheck if the flower being carried has the Love enchantSelfHasFlowerEnchantCarryingEqualCheck if the flower being carried does not have Curse enchantSelfHasFlowerEnchantCarryingNotEqual |
| --- |
| Check if the flower being carried has any enchantSelfHasFlowerEnchantCarryingEqualCheck if the flower being carried has the Love enchantSelfHasFlowerEnchantCarryingEqualCheck if the flower being carried does not have Curse enchantSelfHasFlowerEnchantCarryingNotEqual |
| Check if the flower being carried has the Love enchantSelfHasFlowerEnchantCarryingEqualCheck if the flower being carried does not have Curse enchantSelfHasFlowerEnchantCarryingNotEqual |
| Check if the flower being carried does not have Curse enchantSelfHasFlowerEnchantCarryingNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
