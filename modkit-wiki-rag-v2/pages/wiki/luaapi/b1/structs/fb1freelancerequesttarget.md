---
document_id: "2ba4c837554a9716dee9eb56270ec97dbf6bf11e7d2e9ee754b2334fe89903ed"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancerequesttarget"
title: "FB1FreelanceRequestTarget"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:56+00:00"
content_sha256: "e8e1f27a8766319d4da95c248b1ee63c6bd3913db06c4ff466c1bc8603038f9c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1freelancerequesttarget"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Specifies the type and identifying parameters of a freelance request target, such as a specific object, object tag, crafting category, or recipe. Freelance request target information.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`S1``string`Generic parameter 1 based on TargetType: SpecificObject=ObjectId, ObjectTags=Object Tag, CraftingCategory=Crafting ID, CraftingRecipe=Crafting ID.`S2``string`Generic parameter 2 based on TargetType: SpecificObject/ObjectTags=not used, CraftingCategory=CraftingCategory ID, CraftingRecipe=Recipe ID.`TargetType`[`EB1FreelanceTargetType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelancetargettype)Target type (SpecificObject, Category, Crafting, etc.). |
| --- |
| `S1``string`Generic parameter 1 based on TargetType: SpecificObject=ObjectId, ObjectTags=Object Tag, CraftingCategory=Crafting ID, CraftingRecipe=Crafting ID.`S2``string`Generic parameter 2 based on TargetType: SpecificObject/ObjectTags=not used, CraftingCategory=CraftingCategory ID, CraftingRecipe=Recipe ID.`TargetType`[`EB1FreelanceTargetType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelancetargettype)Target type (SpecificObject, Category, Crafting, etc.). |
| `S2``string`Generic parameter 2 based on TargetType: SpecificObject/ObjectTags=not used, CraftingCategory=CraftingCategory ID, CraftingRecipe=Recipe ID.`TargetType`[`EB1FreelanceTargetType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelancetargettype)Target type (SpecificObject, Category, Crafting, etc.). |
| `TargetType`[`EB1FreelanceTargetType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelancetargettype)Target type (SpecificObject, Category, Crafting, etc.). |
