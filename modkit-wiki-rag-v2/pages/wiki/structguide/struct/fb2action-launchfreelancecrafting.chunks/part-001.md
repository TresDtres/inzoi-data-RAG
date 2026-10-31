---
document_id: "0617eda3081637af6ad705858a83f9328b2c218ba70f57cc7c5eeea935d4d538"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-launchfreelancecrafting"
title: "B2Action_LaunchFreelanceCrafting"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:39+00:00"
content_sha256: "c818d00ba22585f046e7b012ee910383f8ea29012ac647e62d2cfb081f0e9bec"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-launchfreelancecrafting"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Auto-starts crafting for the character's currently active freelance order using the order's requested recipe, then records the finished object back onto the order once crafting completes. * =============== * Note: * OnPlay(): Starts crafting for the active order's recipe (publishable recipes are reserved for a later start; others start immediately). * OnFinish(): Stores the crafted entity id on the active freelance order. * OnTick(): Finishes once bIsCraftingUIClosed becomes true.
