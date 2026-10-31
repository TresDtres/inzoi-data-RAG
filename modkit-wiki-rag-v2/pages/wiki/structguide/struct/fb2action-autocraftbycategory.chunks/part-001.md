---
document_id: "14fcab7a26f176b429764d26ce6f4f17bf867b37e3d7a3a41141ddc9931e5518"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-autocraftbycategory"
title: "B2Action_AutoCraftByCategory"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:28+00:00"
content_sha256: "26b9685a7b648068800d9d978906ebb3288bf2014afe754e41238197716885cb"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-autocraftbycategory"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Automatically starts crafting a random unlocked recipe from a given Crafting category at the target workbench, then finishes once crafting has begun. * =============== * Param: * S1: CraftingId (e.g., "BakingPastry") * S2: CategoryFilter (e.g., "Cake") - Category name within Crafting.Categories * F1: - * F2: - * Note: * OnInit(): reads CraftingId/CategoryFilter from the action's S1/S2. * OnPlay(): collects recipes for CategoryFilter (or the "All" category as fallback), filters out locked recipes, picks one at random, and starts crafting at the target workbench. * OnTick(): finishes the action once crafting has been started.
