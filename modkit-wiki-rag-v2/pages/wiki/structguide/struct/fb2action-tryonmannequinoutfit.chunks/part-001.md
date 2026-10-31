---
document_id: "985b3ba81e7048e89ceb402ec341cea921b686854d60950ec7cffc5a73d6f2cb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-tryonmannequinoutfit"
title: "B2Action_TryOnMannequinOutfit"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:48+00:00"
content_sha256: "217d7e08b93a869bb63c796550a2bafa13c8d33e8047dd4d82b48dd30b236b69"
chunk: 1
chunk_count: 12
page_type: "article"
route: "wiki/structguide/struct/fb2action-tryonmannequinoutfit"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Plays the try-on animation for a store mannequin's designated outfit and, on successful completion, applies that outfit to the character as a temporary costume with a scheduled auto-release. * =============== * Note: * OnInit(): Caches MannequinEntityId from the target entity and fails if it has no designated outfit. * OnFinish(): On successful finish, applies the mannequin's outfit as a MannequinTryOn costume, tags the character, and schedules a time task to auto-release the costume after 1 in-game hour.
