---
document_id: "80ea807ffcb2d0fe547b80b66d0b3bdf60bf3ec0f351eddc88e02446d7f1db5a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1craftingobjectdata"
title: "FB1CraftingObjectData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:34+00:00"
content_sha256: "c7796910862bcdb958f9adb8c83615c1d4464798f785d5d4c953dd16db20648d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1craftingobjectdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores runtime data for a crafting object currently being crafted, including which recipe and step are active.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`CraftingId``string`Crafting definition ID for the current crafting session.`CraftingStep``integer`Current step index in the crafting process.`CustomDescription``string`Player-assigned custom description for the crafted item.`CustomName``string`Player-assigned custom name for the crafted item.`FreelanceOrderInstanceId`[`FB1FreelanceOrderInstanceId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelanceorderinstanceid)The linked order instance ID when the crafted object is a freelance-mission creation.`RecipeId``string`Recipe ID being used in the current crafting session. |
| --- |
| `CraftingId``string`Crafting definition ID for the current crafting session.`CraftingStep``integer`Current step index in the crafting process.`CustomDescription``string`Player-assigned custom description for the crafted item.`CustomName``string`Player-assigned custom name for the crafted item.`FreelanceOrderInstanceId`[`FB1FreelanceOrderInstanceId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelanceorderinstanceid)The linked order instance ID when the crafted object is a freelance-mission creation.`RecipeId``string`Recipe ID being used in the current crafting session. |
| `CraftingStep``integer`Current step index in the crafting process.`CustomDescription``string`Player-assigned custom description for the crafted item.`CustomName``string`Player-assigned custom name for the crafted item.`FreelanceOrderInstanceId`[`FB1FreelanceOrderInstanceId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelanceorderinstanceid)The linked order instance ID when the crafted object is a freelance-mission creation.`RecipeId``string`Recipe ID being used in the current crafting session. |
| `CustomDescription``string`Player-assigned custom description for the crafted item.`CustomName``string`Player-assigned custom name for the crafted item.`FreelanceOrderInstanceId`[`FB1FreelanceOrderInstanceId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelanceorderinstanceid)The linked order instance ID when the crafted object is a freelance-mission creation.`RecipeId``string`Recipe ID being used in the current crafting session. |
| `CustomName``string`Player-assigned custom name for the crafted item.`FreelanceOrderInstanceId`[`FB1FreelanceOrderInstanceId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelanceorderinstanceid)The linked order instance ID when the crafted object is a freelance-mission creation.`RecipeId``string`Recipe ID being used in the current crafting session. |
| `FreelanceOrderInstanceId`[`FB1FreelanceOrderInstanceId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelanceorderinstanceid)The linked order instance ID when the crafted object is a freelance-mission creation.`RecipeId``string`Recipe ID being used in the current crafting session. |
| `RecipeId``string`Recipe ID being used in the current crafting session. |
