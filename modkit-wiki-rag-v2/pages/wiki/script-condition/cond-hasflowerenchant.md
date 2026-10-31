---
document_id: "d8b8ca132f1146f265ea9cf810f0d3b414c9175d6d3365f52f10b26fd7f4ac7b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasflowerenchant"
title: "Condition_HasFlowerEnchant"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:05+00:00"
content_sha256: "aa92cd09b8b858afe940f47d27e54b47bd0bd0da2c7913fd76010962e8a68c52"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasflowerenchant"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the flower object has a specific enchant applied. Enchant refers to the Id field in FlowerEnchant.json. If S1 is empty, checks whether any enchant exists.

# Parameters

| ParameterDescriptionBaseObjectThe flower entity to check for enchantment.CompareTypeSupported compare types: Equal, NotEqual.S1The enchant ID to compare. If empty, checks for any enchant existence. |
| --- |
| BaseObjectThe flower entity to check for enchantment.CompareTypeSupported compare types: Equal, NotEqual.S1The enchant ID to compare. If empty, checks for any enchant existence. |
| CompareTypeSupported compare types: Equal, NotEqual.S1The enchant ID to compare. If empty, checks for any enchant existence. |
| S1The enchant ID to compare. If empty, checks for any enchant existence. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if flower has any enchant appliedTargetHasFlowerEnchantEqualCheck if flower has the Fire enchantTargetHasFlowerEnchantEqualCheck if flower does not have the Ice enchantTargetHasFlowerEnchantNotEqual |
| --- |
| Check if flower has any enchant appliedTargetHasFlowerEnchantEqualCheck if flower has the Fire enchantTargetHasFlowerEnchantEqualCheck if flower does not have the Ice enchantTargetHasFlowerEnchantNotEqual |
| Check if flower has the Fire enchantTargetHasFlowerEnchantEqualCheck if flower does not have the Ice enchantTargetHasFlowerEnchantNotEqual |
| Check if flower does not have the Ice enchantTargetHasFlowerEnchantNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
