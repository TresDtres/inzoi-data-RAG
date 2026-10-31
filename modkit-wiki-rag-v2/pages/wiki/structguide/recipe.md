---
document_id: "11ecba47782c0f649f9588f171f290ec1596f57690f222166a64c0234959dd0e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/recipe"
title: "📘 Recipe Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:00+00:00"
content_sha256: "a89a46f5290d05a491df811bded60dce43412d4abeb28afbefeb5efb4b4599ca"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/recipe"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1RecipeTableRow

Defines a crafting recipe, including ingredients, steps, product, and optional scripts.

### Properties

- **Id** (`FName`): Unique identifier for the recipe.
- **CraftingId** (`FName`): ID of the crafting interface or system used. *(Foreign = "Crafting.Id")*
- **SkillLevel** (`int32`): Minimum skill level required to use this recipe.
- **QualityId** (`FName`): Quality setting used when crafting this recipe. *(Foreign = "Quality.Id")*
- **CraftingCost** (`int32`): Cost or time required to start crafting.
- **FinalObjectType** (`EB1CraftingFinalObjectType`): Type of result this recipe produces (e.g., food, tool).
- **FinalObjectId** (`FName`): ID of the crafted object. *(Foreign = "Object.Id")*
- **FinishScriptIds** (`TArray<FName>`): Scripts run when crafting is completed. *(Foreign = "Script_Recipe.Id")*
- **Ingredients** (`TArray<FB1CraftingIngredient>`): Required items for crafting.
- **CraftingSteps** (`TArray<FB1CraftingStep>`): Optional multi-step logic or progression.
- **TotalProgressTime** (`float`): Time (in seconds) to complete crafting.
- **ProgressTimeModifierId** (`FName`): Modifier affecting crafting speed. *(Foreign = "Modifier_Crafting.Id")*

## 📚 References

- [FB1CraftingIngredient](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1craftingingredient)
- [FB1CraftingStep](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1craftingstep)
- [FB1CraftingObjectSpawnData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1craftingobjectspawndata)
- [EB1CraftingFinalObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1craftingfinalobjecttype)
- [EB1CraftObjectSpawnPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1craftobjectspawnpoint)
- [EB1CraftingIngredientSearchType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1craftingingredientsearchtype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoRecipe[RecipeGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/recipegroup)[RecipeNamingPool Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/recipenamingpool)[FB1RecipeGroupTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1recipegrouptablerow)[FB1RecipeNamingPoolTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1recipenamingpooltablerow)[FB1RecipeTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1recipetablerow)[FB1RecipeTitleDescriptionData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1recipetitledescriptiondata)
