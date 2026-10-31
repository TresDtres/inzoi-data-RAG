---
document_id: "d1d9bfadd31842d56c722b7346773b58df161a84577f2727ed842a34395a98dd"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-launchcraft"
title: "B2Action_LaunchCraft"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:39+00:00"
content_sha256: "8292dee1a2dc3ae95959065af410db30da8d8c5a2a03a554b8b900490bbb9a9f"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-launchcraft"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Launches crafting for a given crafting category: opens the standard recipe UI for the possessing user, opens a filtered menu-order recipe UI for shop/coop customers, or immediately auto-starts a random craft for NPCs. * =============== * Param: * S1: crafting category id (CraftingId) * S2: crafting policy name, resolved to EB1CraftingPolicyType (defaults to CheckAll) * F1: - * F2: - * Note: * OnInit(): Reads CraftingId from Action.S1 and CraftingPolicy from Action.S2. * OnPlay(): For the MenuOrder crafting keyword, opens a filtered recipe UI for shop/coop customers; otherwise opens the recipe UI for the possessing user, or auto-starts a random craft for the NPC. * OnTick(): Finishes once bIsCraftingUIClosed becomes true.
