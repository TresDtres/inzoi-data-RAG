---
document_id: "918923516788466741fa29f99533eaaaec7f4dd05511308a54f44fe5014a4a01"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1recipetablerow"
title: "FB1RecipeTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:12+00:00"
content_sha256: "9b05b415461aabc7b94cceb9ecc951a61cbaeefbd1cee9ade35b413945eb3709"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1recipetablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining a single recipe, including its crafting definition, quality, cost, ingredients, and steps.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (11)

| NameTypeDescription`CraftingCost``integer`Currency cost required to execute this recipe.`CraftingId``string`Crafting definition ID that this recipe belongs to.`CraftingSteps``FB1CraftingStep[]`Ordered list of crafting steps for this recipe.`FinalObjectId``string`Object ID of the final crafted product.`FinalObjectType`[`EB1CraftingFinalObjectType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1craftingfinalobjecttype)Type classification of the final crafted object.`FinishScriptIds``string[]`Script IDs executed when this recipe is completed.`Ingredients``FB1CraftingIngredient[]`List of ingredient requirements for this recipe.`ProgressTimeModifierId``string`Modifier ID applied to the total progress time calculation.`QualityId``string`Quality ID determining the output quality of this recipe.`SkillLevel``integer`Minimum skill level required to use this recipe.`TotalProgressTime``number`Total time in seconds required to complete all crafting steps. |
| --- |
| `CraftingCost``integer`Currency cost required to execute this recipe.`CraftingId``string`Crafting definition ID that this recipe belongs to.`CraftingSteps``FB1CraftingStep[]`Ordered list of crafting steps for this recipe.`FinalObjectId``string`Object ID of the final crafted product.`FinalObjectType`[`EB1CraftingFinalObjectType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1craftingfinalobjecttype)Type classification of the final crafted object.`FinishScriptIds``string[]`Script IDs executed when this recipe is completed.`Ingredients``FB1CraftingIngredient[]`List of ingredient requirements for this recipe.`ProgressTimeModifierId``string`Modifier ID applied to the total progress time calculation.`QualityId``string`Quality ID determining the output quality of this recipe.`SkillLevel``integer`Minimum skill level required to use this recipe.`TotalProgressTime``number`Total time in seconds required to complete all crafting steps. |
| `CraftingId``string`Crafting definition ID that this recipe belongs to.`CraftingSteps``FB1CraftingStep[]`Ordered list of crafting steps for this recipe.`FinalObjectId``string`Object ID of the final crafted product.`FinalObjectType`[`EB1CraftingFinalObjectType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1craftingfinalobjecttype)Type classification of the final crafted object.`FinishScriptIds``string[]`Script IDs executed when this recipe is completed.`Ingredients``FB1CraftingIngredient[]`List of ingredient requirements for this recipe.`ProgressTimeModifierId``string`Modifier ID applied to the total progress time calculation.`QualityId``string`Quality ID determining the output quality of this recipe.`SkillLevel``integer`Minimum skill level required to use this recipe.`TotalProgressTime``number`Total time in seconds required to complete all crafting steps. |
| `CraftingSteps``FB1CraftingStep[]`Ordered list of crafting steps for this recipe.`FinalObjectId``string`Object ID of the final crafted product.`FinalObjectType`[`EB1CraftingFinalObjectType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1craftingfinalobjecttype)Type classification of the final crafted object.`FinishScriptIds``string[]`Script IDs executed when this recipe is completed.`Ingredients``FB1CraftingIngredient[]`List of ingredient requirements for this recipe.`ProgressTimeModifierId``string`Modifier ID applied to the total progress time calculation.`QualityId``string`Quality ID determining the output quality of this recipe.`SkillLevel``integer`Minimum skill level required to use this recipe.`TotalProgressTime``number`Total time in seconds required to complete all crafting steps. |
| `FinalObjectId``string`Object ID of the final crafted product.`FinalObjectType`[`EB1CraftingFinalObjectType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1craftingfinalobjecttype)Type classification of the final crafted object.`FinishScriptIds``string[]`Script IDs executed when this recipe is completed.`Ingredients``FB1CraftingIngredient[]`List of ingredient requirements for this recipe.`ProgressTimeModifierId``string`Modifier ID applied to the total progress time calculation.`QualityId``string`Quality ID determining the output quality of this recipe.`SkillLevel``integer`Minimum skill level required to use this recipe.`TotalProgressTime``number`Total time in seconds required to complete all crafting steps. |
| `FinalObjectType`[`EB1CraftingFinalObjectType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1craftingfinalobjecttype)Type classification of the final crafted object.`FinishScriptIds``string[]`Script IDs executed when this recipe is completed.`Ingredients``FB1CraftingIngredient[]`List of ingredient requirements for this recipe.`ProgressTimeModifierId``string`Modifier ID applied to the total progress time calculation.`QualityId``string`Quality ID determining the output quality of this recipe.`SkillLevel``integer`Minimum skill level required to use this recipe.`TotalProgressTime``number`Total time in seconds required to complete all crafting steps. |
| `FinishScriptIds``string[]`Script IDs executed when this recipe is completed.`Ingredients``FB1CraftingIngredient[]`List of ingredient requirements for this recipe.`ProgressTimeModifierId``string`Modifier ID applied to the total progress time calculation.`QualityId``string`Quality ID determining the output quality of this recipe.`SkillLevel``integer`Minimum skill level required to use this recipe.`TotalProgressTime``number`Total time in seconds required to complete all crafting steps. |
| `Ingredients``FB1CraftingIngredient[]`List of ingredient requirements for this recipe.`ProgressTimeModifierId``string`Modifier ID applied to the total progress time calculation.`QualityId``string`Quality ID determining the output quality of this recipe.`SkillLevel``integer`Minimum skill level required to use this recipe.`TotalProgressTime``number`Total time in seconds required to complete all crafting steps. |
| `ProgressTimeModifierId``string`Modifier ID applied to the total progress time calculation.`QualityId``string`Quality ID determining the output quality of this recipe.`SkillLevel``integer`Minimum skill level required to use this recipe.`TotalProgressTime``number`Total time in seconds required to complete all crafting steps. |
| `QualityId``string`Quality ID determining the output quality of this recipe.`SkillLevel``integer`Minimum skill level required to use this recipe.`TotalProgressTime``number`Total time in seconds required to complete all crafting steps. |
| `SkillLevel``integer`Minimum skill level required to use this recipe.`TotalProgressTime``number`Total time in seconds required to complete all crafting steps. |
| `TotalProgressTime``number`Total time in seconds required to complete all crafting steps. |
