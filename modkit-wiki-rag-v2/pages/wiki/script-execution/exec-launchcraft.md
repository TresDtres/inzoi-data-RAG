---
document_id: "179e02dfc431317ea70dce53a0941a59ab61235b30259f9944675befc8986ae3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-launchcraft"
title: "Execute_LaunchCraft"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:31+00:00"
content_sha256: "533786e92a9aa0e490ad81b91056fc292a40d3d16ce8c56d544bdd80bc8a672b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-launchcraft"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Opens the crafting UI for the BaseObject character by gathering recipe data for the specified CraftingId and sending it to B1 via a packet. The crafting policy controls how recipes are filtered. If the CraftingId has a PublishingId set, the UI can only be launched if the character is a possessed entity.

# Parameters

| ParameterDescriptionBaseObjectThe character launching the crafting UI (Self or Target)S1Crafting ID from the crafting data table that defines which recipes to displayS2Crafting policy type (e.g., CheckAll, CheckIngredient); defaults to CheckAll if omitted |
| --- |
| BaseObjectThe character launching the crafting UI (Self or Target)S1Crafting ID from the crafting data table that defines which recipes to displayS2Crafting policy type (e.g., CheckAll, CheckIngredient); defaults to CheckAll if omitted |
| S1Crafting ID from the crafting data table that defines which recipes to displayS2Crafting policy type (e.g., CheckAll, CheckIngredient); defaults to CheckAll if omitted |
| S2Crafting policy type (e.g., CheckAll, CheckIngredient); defaults to CheckAll if omitted |

# Examples

| DescriptionBaseObjectCommandS1S2Open cooking UI for self at the stoveSelfLaunchCraftCooking_StoveCheckAllOpen carpentry UI for self with ingredient-only checkSelfLaunchCraftCarpentry_WorkbenchCheckIngredientOpen alchemy crafting UI for targetTargetLaunchCraftAlchemy_TableCheckAll |
| --- |
| Open cooking UI for self at the stoveSelfLaunchCraftCooking_StoveCheckAllOpen carpentry UI for self with ingredient-only checkSelfLaunchCraftCarpentry_WorkbenchCheckIngredientOpen alchemy crafting UI for targetTargetLaunchCraftAlchemy_TableCheckAll |
| Open carpentry UI for self with ingredient-only checkSelfLaunchCraftCarpentry_WorkbenchCheckIngredientOpen alchemy crafting UI for targetTargetLaunchCraftAlchemy_TableCheckAll |
| Open alchemy crafting UI for targetTargetLaunchCraftAlchemy_TableCheckAll |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoOther[AddAscendingMinutes](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addascendingminutes)[AddHope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhope)[AddInnerThoughtIcon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addinnerthoughticon)[AddRepeatingSocialEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrepeatingsocialevent)[AddTimeAlert](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtimealert)[AddTrait](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtrait)[ApplyFailSalonHair](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyfailsalonhair)[ApplyFlowerEnchant](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerenchant)[ApplyFlowerOuter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyflowerouter)[ApplyMaterialParameter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applymaterialparameter)[ApplyPendingClothingRackPurchase](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applypendingclothingrackpurchase)[ApplyRandomEventChoiceCardAnswer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyrandomeventchoicecardanswer)
