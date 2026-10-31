---
document_id: "d4abbb3c78fe346641f2c190070b3e75113eba2d9113fa4fc52f18350275d391"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/crafting"
title: "📘 Crafting Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:26+00:00"
content_sha256: "fe1aac8badc40600c1ecf923bc0c0bf28db7b1a5e31850bc138104e0320dad77"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/crafting"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1CraftingTableRow

Defines a crafting recipe or system entry, including categories, requirements, and UI display settings.

### Properties

- **Id** (`FName`): Unique identifier for the crafting entry.
- **TitleTextId** (`FString`): Localization key for the recipe name. *(StringTableKey = "Id")*
- **DescTextId** (`FString`): Localization key for the recipe description. *(StringTableKey = "Id")*
- **SkillId** (`FName`): Required skill to unlock this recipe. *(Foreign = "Skill.Id")*
- **RecipeListEntryColorId** (`FName`): Color used for displaying this recipe in the list. *(Foreign = "ColorMapping.Id")*
- **bHasCost** (`bool`): If true, crafting requires resource cost.
- **Categories** (`TArray<FB1CraftingCategory>`): Crafting category or group to which this recipe belongs.
- **CraftingFinishTextId** (`FString`): Text shown upon successful crafting. *(StringTableKey)*
- **bNeedWorkbench** (`bool`): If true, crafting must occur at a workbench.
- **MoveToWorkbenchInteractionBagId** (`FName`): Interaction used to move to a workbench. *(Foreign = "InteractionBag.Id")*
- **FindWorkbenchInteractionId** (`FName`): Interaction used to search for a workbench. *(Foreign = "Interaction.Id")*
- **PublishingId** (`FName`): ID used to group or track user-created items.
- **PublishingNamingTextId** (`FString`): Text label used when naming a published item. *(StringTableKey)*
- **PublishingExportTextId** (`FString`): Text label used when exporting the item. *(StringTableKey)*

## 📚 References

- [FB1CraftingCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1craftingcategory)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoCrafting[EB1CraftingFinalObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1craftingfinalobjecttype)[EB1CraftingIngredientSearchType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1craftingingredientsearchtype)[FB1CraftingCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1craftingcategory)[FB1CraftingConfigTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1craftingconfigtablerow)[FB1CraftingIngredient](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1craftingingredient)[FB1CraftingObjectData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1craftingobjectdata)[FB1CraftingObjectSpawnData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1craftingobjectspawndata)[FB1CraftingPolicy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1craftingpolicy)[FB1CraftingRecipeVM](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1craftingrecipevm)[FB1CraftingRecipeVMs](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1craftingrecipevms)[FB1CraftingStep](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1craftingstep)[FB1CraftingTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1craftingtablerow)
