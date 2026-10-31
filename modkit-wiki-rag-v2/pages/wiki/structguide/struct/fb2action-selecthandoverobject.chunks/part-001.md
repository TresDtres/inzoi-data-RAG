---
document_id: "aeaa87b54811c3df5fb1cb6bd9a28b9dd7e89f96b8f96dbbac5c5b2f4c816329"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-selecthandoverobject"
title: "B2Action_SelectHandOverObject"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:45+00:00"
content_sha256: "d32ee150376123511641af7891d0883205aa1fc70a6a121437b56ab158dfff2f"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-selecthandoverobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Resolves which hand-over method (gift/give/sell/tiny shop delivery/market stall placement) applies to the target entity and requests it on the self character's inventory, then instantly finishes. * =============== * Param: * S1: Hand-over method (EB1InventoryHandOverType), resolved into HandOverType * S2: - * F1: - * F2: - * Note: * OnInit(): Resolves HandOverType from Action.S1. * OnPlay(): Validates possession and that self has no carried entity, then requests the hand-over (or market stall placement) on self's inventory before finishing.
