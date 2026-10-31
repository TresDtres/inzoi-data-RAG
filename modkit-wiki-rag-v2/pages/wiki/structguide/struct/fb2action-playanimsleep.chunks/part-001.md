---
document_id: "20ef51b5cb0530edeb6ca95426d633c3edbdddbc5c7f8af87ede1419c188d587"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-playanimsleep"
title: "B2Action_PlayAnimSleep"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:41+00:00"
content_sha256: "9e98de1cd181da51471618ef246afeb23386886bb14788510b89f4cee4fc2e45"
chunk: 1
chunk_count: 11
page_type: "article"
route: "wiki/structguide/struct/fb2action-playanimsleep"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Plays the sleep animation while applying the Sleep buff to self and, if self is a possessed household entity, marking the household as sleeping. * =============== * Note: * OnPlay(): Marks a possessed household as sleeping and adds the Sleep buff before starting playback. * OnFinish(): Clears the possessed household's sleeping flag and removes the Sleep buff (not canceled). * OnCanceled(): Clears the possessed household's sleeping flag and forcibly removes the Sleep buff.
