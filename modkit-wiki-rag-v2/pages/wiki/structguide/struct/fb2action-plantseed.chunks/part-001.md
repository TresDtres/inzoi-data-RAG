---
document_id: "d16df09c71ae2c19fc65c5044b894104dc0c4646a5d781ee4096efea71c50ccb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-plantseed"
title: "B2Action_PlantSeed"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:40+00:00"
content_sha256: "4ffe60af104e9f084d2a36258b423c03c9990920b876997f17c09e29d0e5dc35"
chunk: 1
chunk_count: 14
page_type: "article"
route: "wiki/structguide/struct/fb2action-plantseed"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Plants the seed currently grabbed in the character's hand onto the target soil, consuming one seed on success. * =============== * Note: * OnInit(): Resolves the grabbed seed's object/crop/category/ownership info and planting mode from the currently grabbed entity. * OnPlay(): Plays the planting animation via PlayAnim, then hides the grabbed seed object in-game. * OnFinish(): Restores the grabbed object's visibility, then plants the crop on the target soil and consumes one seed from the character; sends a toast message if either step fails. * OnCanceled(): Restores the grabbed object's visibility before forwarding to PlayAnim's cancel handling.
