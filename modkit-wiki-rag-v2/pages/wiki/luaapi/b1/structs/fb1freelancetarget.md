---
document_id: "31dc09131ce3369900cc060fa99b9cd54b75370952d6c7cef943fed2960afb8a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancetarget"
title: "FB1FreelanceTarget"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:56+00:00"
content_sha256: "ffdfffef0d9f6bce97fdfa6db9511e21a81ccfa4480a10b16ab919176028b559"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1freelancetarget"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Runtime reference to a resolved request target for an order, storing the target type and the resolved target ID. Request target reference.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`RecipeId``string`Recipe ID resolved during AssignRequestTarget. Only valid for CraftingCategory/CraftingRecipe target types.`TargetId``string`Target ID derived from FB1FreelanceRequestTarget based on TargetType: SpecificObject=ObjectId(S1), ObjectTags=randomly selected ObjectId, CraftingCategory/CraftingRecipe=FinalObjectId from recipe.`TargetType`[`EB1FreelanceTargetType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelancetargettype)Target type (SpecificObject, Category, Crafting, etc.). |
| --- |
| `RecipeId``string`Recipe ID resolved during AssignRequestTarget. Only valid for CraftingCategory/CraftingRecipe target types.`TargetId``string`Target ID derived from FB1FreelanceRequestTarget based on TargetType: SpecificObject=ObjectId(S1), ObjectTags=randomly selected ObjectId, CraftingCategory/CraftingRecipe=FinalObjectId from recipe.`TargetType`[`EB1FreelanceTargetType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelancetargettype)Target type (SpecificObject, Category, Crafting, etc.). |
| `TargetId``string`Target ID derived from FB1FreelanceRequestTarget based on TargetType: SpecificObject=ObjectId(S1), ObjectTags=randomly selected ObjectId, CraftingCategory/CraftingRecipe=FinalObjectId from recipe.`TargetType`[`EB1FreelanceTargetType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelancetargettype)Target type (SpecificObject, Category, Crafting, etc.). |
| `TargetType`[`EB1FreelanceTargetType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelancetargettype)Target type (SpecificObject, Category, Crafting, etc.). |
