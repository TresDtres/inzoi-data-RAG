---
document_id: "d06467cb0e42c40a05e19ed9133da205ffcf9b55d18c64047cd9c150b8d1de4f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1craftingpolicy"
title: "FB1CraftingPolicy"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:35+00:00"
content_sha256: "2a2eded85a2ccdb140d341c4e01f9ddd05ccbd2ea83537c61ba2d369eae90d17"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1craftingpolicy"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines behavior flags and fallback policy for a crafting policy type, controlling currency checks, skill checks, and quality calculation.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (7)

| NameTypeDescription`CraftingPurpose`[`EB1ObjectCreatePurpose`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1objectcreatepurpose)Crafting purpose used to set the CreatePurpose on the resulting crafting object.`FallbackPolicy`[`EB1CraftingPolicyType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1craftingpolicytype)Fallback policy used if no recipes are found with this policy. Not applied recursively; ignored if Invalid.`FixedQualityIfAny`[`EB1Quality`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1quality)Fixed quality applied when bCalculateQuality is false. Uses project default quality if set to None.`bCalculateQuality``boolean``bCheckCurrency``boolean`Whether to check if the player has enough currency before starting crafting. If false, crafting can start even without sufficient funds.`bCheckSkill``boolean`Whether to check if the character's skill level meets the recipe requirement before starting crafting.`bRemoveMoney``boolean`Whether to actually deduct currency at the first crafting step. Independent from bCheckCurrency. |
| --- |
| `CraftingPurpose`[`EB1ObjectCreatePurpose`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1objectcreatepurpose)Crafting purpose used to set the CreatePurpose on the resulting crafting object.`FallbackPolicy`[`EB1CraftingPolicyType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1craftingpolicytype)Fallback policy used if no recipes are found with this policy. Not applied recursively; ignored if Invalid.`FixedQualityIfAny`[`EB1Quality`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1quality)Fixed quality applied when bCalculateQuality is false. Uses project default quality if set to None.`bCalculateQuality``boolean``bCheckCurrency``boolean`Whether to check if the player has enough currency before starting crafting. If false, crafting can start even without sufficient funds.`bCheckSkill``boolean`Whether to check if the character's skill level meets the recipe requirement before starting crafting.`bRemoveMoney``boolean`Whether to actually deduct currency at the first crafting step. Independent from bCheckCurrency. |
| `FallbackPolicy`[`EB1CraftingPolicyType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1craftingpolicytype)Fallback policy used if no recipes are found with this policy. Not applied recursively; ignored if Invalid.`FixedQualityIfAny`[`EB1Quality`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1quality)Fixed quality applied when bCalculateQuality is false. Uses project default quality if set to None.`bCalculateQuality``boolean``bCheckCurrency``boolean`Whether to check if the player has enough currency before starting crafting. If false, crafting can start even without sufficient funds.`bCheckSkill``boolean`Whether to check if the character's skill level meets the recipe requirement before starting crafting.`bRemoveMoney``boolean`Whether to actually deduct currency at the first crafting step. Independent from bCheckCurrency. |
| `FixedQualityIfAny`[`EB1Quality`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1quality)Fixed quality applied when bCalculateQuality is false. Uses project default quality if set to None.`bCalculateQuality``boolean``bCheckCurrency``boolean`Whether to check if the player has enough currency before starting crafting. If false, crafting can start even without sufficient funds.`bCheckSkill``boolean`Whether to check if the character's skill level meets the recipe requirement before starting crafting.`bRemoveMoney``boolean`Whether to actually deduct currency at the first crafting step. Independent from bCheckCurrency. |
| `bCalculateQuality``boolean``bCheckCurrency``boolean`Whether to check if the player has enough currency before starting crafting. If false, crafting can start even without sufficient funds.`bCheckSkill``boolean`Whether to check if the character's skill level meets the recipe requirement before starting crafting.`bRemoveMoney``boolean`Whether to actually deduct currency at the first crafting step. Independent from bCheckCurrency. |
| `bCheckCurrency``boolean`Whether to check if the player has enough currency before starting crafting. If false, crafting can start even without sufficient funds.`bCheckSkill``boolean`Whether to check if the character's skill level meets the recipe requirement before starting crafting.`bRemoveMoney``boolean`Whether to actually deduct currency at the first crafting step. Independent from bCheckCurrency. |
| `bCheckSkill``boolean`Whether to check if the character's skill level meets the recipe requirement before starting crafting.`bRemoveMoney``boolean`Whether to actually deduct currency at the first crafting step. Independent from bCheckCurrency. |
| `bRemoveMoney``boolean`Whether to actually deduct currency at the first crafting step. Independent from bCheckCurrency. |
