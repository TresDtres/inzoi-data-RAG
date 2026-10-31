---
document_id: "ae62121c9aa2df58a85506df22a13c3e4bfab82350581dc1616ac81133a5ad0f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-restauranteat"
title: "B2Action_RestaurantEat"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:50:30+00:00"
content_sha256: "89dcd58c8f3cd69f2758005449ebd5cd901dafab3ab9ed77c6b4fa637d62c88a"
chunk: 1
chunk_count: 14
page_type: "article"
route: "wiki/structguide/struct/fb2action-restauranteat"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Extends the normal Eat Action for a restaurant customer. The Action starts only when Target is the * exact ServedFood bound to Self's Served order ticket and Self is occupying the assigned restaurant seat. * A successful Eat finish marks the meal complete for reconciliation and places an empty held food container * on a free compatible slot of the assigned table. If placement is unavailable, the container stays in hand. * A canceled interaction leaves the ticket Served so the customer's recommended activity can retry. * =============== * Param: * S1: - (inherited Eat root animation is resolved from the target Food) * S2: Head animation id inherited from FB2Action_Eat * F1: - * F2: - * Note: * OnPlay(): Revalidates Self, the exact ticket-bound Food, and the occupied assigned seat before starting Eat. * OnFinish(): Marks the matching meal complete, runs inherited Eat cleanup, then places the empty held container. * OnCanceled(): Uses the inherited Eat behavior and intentionally does not cancel the restaurant ticket.
