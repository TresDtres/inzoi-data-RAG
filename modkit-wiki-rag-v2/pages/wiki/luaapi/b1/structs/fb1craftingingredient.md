---
document_id: "0cba769895d00a4cb43dfc49d9e97a5d1dff8dfc96eacf3fe84210fe7f15e250"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1craftingingredient"
title: "FB1CraftingIngredient"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:34+00:00"
content_sha256: "044eec4cf56f1fc48ea4181e934c30ca7541a7dde8b94a97d7e88406ce7edba7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1craftingingredient"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a single ingredient required for a recipe, including the object, count, and search method.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`Count``integer`Number of this ingredient required.`ObjectId``string`Object ID of the required ingredient.`SearchType`[`EB1CraftingIngredientSearchType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1craftingingredientsearchtype)Method used to search for this ingredient (Inventory, TargetFilter, or SkillCheck).`TargetFilterInteractionId``string`Target filter ID used when the search type is TargetFilter. |
| --- |
| `Count``integer`Number of this ingredient required.`ObjectId``string`Object ID of the required ingredient.`SearchType`[`EB1CraftingIngredientSearchType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1craftingingredientsearchtype)Method used to search for this ingredient (Inventory, TargetFilter, or SkillCheck).`TargetFilterInteractionId``string`Target filter ID used when the search type is TargetFilter. |
| `ObjectId``string`Object ID of the required ingredient.`SearchType`[`EB1CraftingIngredientSearchType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1craftingingredientsearchtype)Method used to search for this ingredient (Inventory, TargetFilter, or SkillCheck).`TargetFilterInteractionId``string`Target filter ID used when the search type is TargetFilter. |
| `SearchType`[`EB1CraftingIngredientSearchType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1craftingingredientsearchtype)Method used to search for this ingredient (Inventory, TargetFilter, or SkillCheck).`TargetFilterInteractionId``string`Target filter ID used when the search type is TargetFilter. |
| `TargetFilterInteractionId``string`Target filter ID used when the search type is TargetFilter. |
