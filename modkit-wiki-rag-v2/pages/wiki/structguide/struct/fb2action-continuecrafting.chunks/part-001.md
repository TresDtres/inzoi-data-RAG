---
document_id: "2e0fa955fdf54506cc0fc35b82d8651b833aa9fea43d378c5af534208441b050"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-continuecrafting"
title: "B2Action_ContinueCrafting"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:31+00:00"
content_sha256: "471d0ebebacf8a11cad6ce3fc413a565c3a547c01714370ce495f024954bbc30"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-continuecrafting"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Resumes an in-progress crafting recipe/step on a craft object (found directly or via a named slot), optionally locating a required workbench, and starts the CraftingComponent. * =============== * Param: * S1: continue-crafting method name, converted to EB2ContinueCraftingMethod (CrafingObject or CraftingSlot) * S2: name of the slot holding the craft object, used only when the method is CraftingSlot * F1: - * F2: - * Note: * OnInit(): parses ContinueCraftingMethod/CraftingSlotName from the action params and resolves CraftObjectEntityId via FindCraftObject(). * OnPlay(): validates the crafting component and craft object exist, resolves the recipe/step from the (non-)carriable craft object, optionally finds a required workbench, then starts crafting. * OnTick(): finishes immediately once crafting has been started.
