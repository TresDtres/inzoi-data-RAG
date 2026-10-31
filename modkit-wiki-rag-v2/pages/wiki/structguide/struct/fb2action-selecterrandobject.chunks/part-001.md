---
document_id: "6e69490758cfa6c595c158bb9d8f4c0d8f84ac8c64265f6ebf04a74540cc34bd"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-selecterrandobject"
title: "B2Action_SelectErrandObject"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:45+00:00"
content_sha256: "a6acf242073fb073f74cd06c3123c2a23d7651568f0ca8142d12f1d28845a939"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-selecterrandobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Opens the errand object picker so the player can ask the target character to fetch something. * Collects the carriable objects the target could pick up right now in its own site, sends them to BlueClient and * finishes immediately, so the conversation ends the moment the popup appears and the player is never locked into a wait. * The action does not queue anything on the target and does not pause the game: BlueClient owns the pause while the * popup lives, and B2PacketReceiver_UI::C_SelectErrandObject starts the errand Coop once the player confirms. * Because nothing is kept alive here, a save taken while the popup is open has no action state to restore. * Only the possessed character may hand out an errand, and only through a user-triggered play reason - autonomy and * SmartZoi are rejected so the picker can never open without a player asking for it. * The pick-up bag and the Coop id are not consumed here; they are forwarded to the popup and come back with the choice, * so both stay data-driven instead of hardcoded in the receiver. * =============== * Param: * S1: Pick-up InteractionBag used to gate the candidates, also reused when the choice is re-validated (PickUp) * S2: Coop played from the moment the player confirms until the object reaches the requester (Coop_Errand_HandOver). * It must be driven with CoopType HandOver, because the chosen object is carried into the scheduler as its * hand-over object and the fetch task resolves it back through the CoopHandOverObject target filter * F1: Search range around the runner in unreal units. 0 covers the whole site * F2: - * Note: * OnInit(): Reads the pick-up bag from Action.S1, the errand Coop from Action.S2 and the search range from Action.F1. * OnPlay(): Rejects anything but a user-triggered request from the possessed character, collects the candidates through * B2ErrandHelper, finishes without opening anything when there is nothing to fetch, then sends * S_OpenErrandObjectPicker and finishes right away.
