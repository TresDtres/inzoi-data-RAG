---
document_id: "249d4e205ff58afb33736a1079ffdce1e1a9533973e948b5c762890b7cb8582f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/recipegroup"
title: "📘 RecipeGroup Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:00+00:00"
content_sha256: "cf1e554963a65e64eb4712a97a2c18ffb7d721fddd5e802ee1fc85f7290064dd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/recipegroup"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1RecipeGroupTableRow

Defines a group of crafting recipes with shared cost, skill level, and display info.

### Properties

- **Id** (`FName`): Unique identifier for the group.
- **TitleTextId / DescTextId** (`FString`): Localized name and description. *(StringTableKey = "Id")*
- **CraftingCost** (`int32`): Shared cost for the group (if used).
- **SkillLevel** (`int32`): Minimum level required to access recipes in this group.
- **ConditionId** (`FName`): Condition needed to unlock this group. *(Foreign = "ObjectCondition.Id")*
- **Thumbnail** (`TSoftObjectPtr<UObject>`): Icon representing the group in UI.
- **RecipeIds** (`TArray<FName>`): List of recipes included in this group. *(Foreign = "Recipe.Id")*

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoRecipe[Recipe Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/recipe)[RecipeNamingPool Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/recipenamingpool)[FB1RecipeGroupTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1recipegrouptablerow)[FB1RecipeNamingPoolTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1recipenamingpooltablerow)[FB1RecipeTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1recipetablerow)[FB1RecipeTitleDescriptionData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1recipetitledescriptiondata)
