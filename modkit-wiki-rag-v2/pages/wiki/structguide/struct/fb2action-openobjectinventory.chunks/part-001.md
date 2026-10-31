---
document_id: "e6c47ca4c87589d86a1d36823408034af90571af1e4c8ab0cbe80f9c12ae7abc"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-openobjectinventory"
title: "B2Action_OpenObjectInventory"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:40+00:00"
content_sha256: "d606b3834dd1a3fad561c90ed90ef0ea5450ffaa488a08d9eee82a50c07e8aed"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-openobjectinventory"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Opens the target game object's inventory UI for the possessing self entity, pre-selecting a specific InteractionBag. * =============== * Param: * S1: ExectueInteractionBagId, the InteractionBag to execute when the object inventory is opened * S2: - * F1: - * F2: - * Note: * OnInit(): Reads the InteractionBag id to execute from Action.S1. * OnPlay(): If self isn't the possessed entity, finishes immediately; otherwise resolves the target object's inventory and opens it for self.
