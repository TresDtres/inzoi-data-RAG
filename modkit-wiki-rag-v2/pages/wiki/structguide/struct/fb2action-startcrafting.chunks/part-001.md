---
document_id: "a77ec5a3009d4c619702a2011d1dcf56aea0f290dab5b392c9c1bb02a3f01195"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-startcrafting"
title: "B2Action_StartCrafting"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:47+00:00"
content_sha256: "658fa47384c1b3dacf765ab5cd835d405996f51e2bd0a5e4d50d47b632239fe4"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-startcrafting"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Action that begins crafting a recipe on the character's crafting component, either starting immediately or reserving the start context when resources aren't ready yet. * =============== * Param: * S1: RecipeId (FB1RecipeTableRow id to craft) * S2: CraftingPolicy (EB1CraftingPolicyType name, defaults to CheckAll if unset/invalid) * F1: - * F2: - * Note: * OnInit(): Parse RecipeId (S1) and CraftingPolicy (S2) from the action info. * OnPlay(): Look up the recipe and crafting component, then reserve or immediately start the crafting context depending on resource availability.
