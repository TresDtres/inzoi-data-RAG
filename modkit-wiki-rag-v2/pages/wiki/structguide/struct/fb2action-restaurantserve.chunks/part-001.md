---
document_id: "112ab85ad1b1d4f87f6003b3aac7b5c5d54a47bed28cb1572ae3443888e63f4c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-restaurantserve"
title: "B2Action_RestaurantServe"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:44+00:00"
content_sha256: "7535c024809e504c32a7c9f7831ef08334a30150b8f7e1e7b9edab0b356eb9f7"
chunk: 1
chunk_count: 13
page_type: "article"
route: "wiki/structguide/struct/fb2action-restaurantserve"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Plays the restaurant serving animation and atomically commits the worker's claimed Ready dish batch when the * main montage finishes successfully. The serving transaction places every ordered dish, consumes the canonical * tray, and removes the committed batch. Transaction failure finishes the Action with FailedPutDown so the * InteractionBag can continue through its configured fallback branch. * =============== * Param: * S1: Serving animation id inherited from FB2Action_PlayAnim * S2: - * F1: Loop count inherited from FB2Action_PlayAnim; restaurant serving data should use a single play * F2: - * Note: * OnMontageBlendingOutStarted(): Commits only after the matching main montage completes without interruption, cancellation, or pause. * OnCanceled(): Records cancellation before delegating to PlayAnim so a late blend-out callback cannot commit serving. * TryCompleteRestaurantServe(): Executes the serving transaction at most once and caches its failure result.
