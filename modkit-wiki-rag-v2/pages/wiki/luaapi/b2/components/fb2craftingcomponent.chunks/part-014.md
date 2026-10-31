---
document_id: "46e58e7ea391b74c186d306486412a70b4fb21f036248525fed38769a87dd923"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2craftingcomponent"
title: "FB2CraftingComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:13+00:00"
content_sha256: "ed2e75f35bcb1497cadf0aeefa7c7b55ab5edf290691f6c619a087f27ec13c73"
chunk: 14
chunk_count: 16
page_type: "article"
route: "wiki/luaapi/b2/components/fb2craftingcomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

/modkit-docs/wiki/luaapi/b1/enums/eb1craftingpolicytype)`-`Starts Random Non Publishable Crafting.`StartRandomPublishableCrafting`InCraftingId: `string`, InWorkbenchEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InPolicy: [`EB1CraftingPolicyType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1craftingpolicytype)`-`Starts Random Publishable Crafting.`StartReservedCrafting`InInteractionQueueId: `integer``-`Starts Reserved Crafting. |
| `Simulate`InRecipeId: `string`, InCount: `integer`, OutResultStr: `string``-`debug cheats`StartCrafting`InContext: [`FB1StartCraftingContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1startcraftingcontext)`-`Starts Crafting.`StartRandomNonPublishableCrafting`InCraftingId: `string`, InWorkbenchEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InPolicy: [`EB1CraftingPolicyType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1craftingpolicytype)`-`Starts Random Non Publishable Crafting.`StartRandomPublishableCrafting`InCraftingId: `string`, InWorkbenchEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InPolicy: [`EB1CraftingPolicyType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1craftingpolicytype)`-`Starts Random Publishable Crafting.`StartReservedCrafting`InInteractionQueueId: `integer``-`Starts Reserved Crafting. |
| `StartCrafting`InContext: [`FB1StartCraftingContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1startcraftingcontext)`-`Starts Crafting.`StartRandomNonPublishableCrafting`InCraftingId: `string`, InWorkbenchEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InPolicy: [`EB1CraftingPolicyType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1craftingpolicytype)`-`Starts Random Non Publishable Crafting.`StartRandomPublishableCrafting`InCraftingId: `string`, InWorkbenchEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InPolicy: [`EB1CraftingPolicyType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1craftingpolicytype)`-`Starts Random Publishable Crafting.`StartReservedCrafting`InInteractionQueueId: `integer``-`Starts Reserved Crafting. |
| `StartRandomNonPublishableCrafting`InCraftingId: `string`, InWorkbenchEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InPolicy: [`EB1CraftingPolicyType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1craftingpolicytype)`-`Starts Random Non Publishable Crafting.`StartRandomPublishableCrafting`InCraftingId: `string`, InWorkbenchEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InPolicy: [`EB1CraftingPolicyType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1craftingpolicytype)`-`Starts Random Publishable Crafting.`StartReservedCrafting`InInteractionQueueId: `integer``-`Starts Reserved Crafting. |
| `StartRandomPublishableCrafting`InCraftingId: `string`, InWorkbenchEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InPolicy: [`EB1CraftingPolicyType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1craftingpolicytype)`-`Starts Random Publishable Crafting.`StartReservedCrafting`InInteractionQueueId: `integer``-`Starts Reserved Crafting. |
| `StartReservedCrafting`InInteractionQueueId: `integer``-`Starts Reserved Crafting. |

# Override points (9)

Implement these in Lua as `FB2CraftingComponent.Override_Name = function(...) end`.
