---
document_id: "29c2b8c7f96c1b69dac58d685be7edd3ce362482211158aa05fa50a1d06b119b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-editstoremannequin"
title: "B2Action_EditStoreMannequin"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:34+00:00"
content_sha256: "dc2f468e11a32a874b2554111a26d5e6e375412baf4ac8c464cd9c1d18bf1fc5"
chunk: 1
chunk_count: 12
page_type: "article"
route: "wiki/structguide/struct/fb2action-editstoremannequin"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Plays the store mannequin outfit-editing animation and, on finish, stores the pending outfit edit charge on the mannequin and requests the mannequin outfit-change UI. * =============== * Note: * OnInit(): Forwards to PlayAnim's OnInit, resolves MannequinEntityId from the target, and finishes early if the mannequin object is invalid. * OnFinish(): Stores the pending outfit edit charge on the mannequin and sends the change-outfit packet, then forwards to PlayAnim's OnFinish.
