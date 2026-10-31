---
document_id: "e0cab0652b0ca719c40db2d496798cfc5086b1eb35f071ec53d68c3db0c22b10"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-selectslotownership"
title: "B2Action_SelectSlotOwnership"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:45+00:00"
content_sha256: "4b4a85feac55073eeef5739eb36d0b2d49683a59322f05fad7d0699796d187cd"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-selectslotownership"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Opens the select-Zoi UI so the possessed character can pick which entity should receive ownership of a tagged slot in the current interaction bag, then requests that slot ownership once a selection completes; auto-skips the UI for non-user-initiated interactions. * =============== * Param: * S1: Slot ownership tag identifying the slot, stored in SlotOwnershipTag * S2: - * F1: - * F2: - * Note: * OnInit(): Resolves SlotOwnershipTag from Action.S1. * OnPlay(): Skips the UI and finishes immediately for non-user-initiated interactions; otherwise pauses the game, sends the open-UI packet, and subscribes to the select/cancel completion events. * OnTick(): Finishes immediately if the open-UI packet was never sent (non-user-initiated path). * OnFinish(): Unpauses the game and, if the UI packet was sent, unsubscribes from the events and sends the hide-UI packet. * OnCanceled(): Same cleanup as OnFinish(), skipped when the cancellation itself comes from a restore (bRestore).
