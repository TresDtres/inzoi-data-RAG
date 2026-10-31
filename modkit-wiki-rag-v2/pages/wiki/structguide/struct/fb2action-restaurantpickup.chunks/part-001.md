---
document_id: "d241623b34cb02634cd47eba0de2a4c4b9a74ae92d0dbdbdcbcab383f95e4d6e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-restaurantpickup"
title: "B2Action_RestaurantPickUp"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:45+00:00"
content_sha256: "67c22d08d8d6482d9cfaeff6a6c5ad6f9caf8a76da232609aae345ea5901c72b"
chunk: 1
chunk_count: 9
page_type: "article"
route: "wiki/structguide/struct/fb2action-restaurantpickup"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Uses the existing PickUp lifecycle for restaurant trays without adding restaurant policy to the common PickUp action. * A placed WaiterTray01 must be claimed as the oldest Ready restaurant batch before it can be picked up. * During cooking, BindRestaurantCookingTray identifies the WaiterTray01 that the PickUp notify will create and bind. * =============== * Param: * S1/S2: Same as PickUp * F1/F2: -
