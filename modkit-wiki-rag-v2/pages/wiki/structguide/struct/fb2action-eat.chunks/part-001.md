---
document_id: "b80096ed0788d583d43062155ca1ab511f57f456790ef6de5a7bb9b7d40a1bd0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-eat"
title: "B2Action_Eat"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:33+00:00"
content_sha256: "8c8417bb81b8fba2b6aa83d87056c53d0bd2642325f7ae7347ab915d8d541c58"
chunk: 1
chunk_count: 14
page_type: "article"
route: "wiki/structguide/struct/fb2action-eat"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Plays the root and head anim montages for eating a food object through Start/Loop/End sections, * accumulating progress based on the food's remaining time-to-eat and calories, and running the food table's start/tick/finish scripts. * =============== * Param: * S1: - * S2: Head animation id to play while eating * F1: - * F2: - * Note: * OnInit(): Resolves the food object and its table row, computes ProgressTime from remaining calories/time-to-eat, resolves root/head anim ids, and queues their async load. * OnPlay(): Re-resolves the food object and anim ids, resets section/time state, starts the Start-section montage, and runs the food table's start scripts. * OnFinish(): Resets montage delegates, syncs grab-loop animation, and on success runs finish scripts, reports the eaten food to the mission system, and adds calories. * OnCanceled(): Adds accumulated calories and, if the interaction should be canceled, plays the End-section montage. * OnTick(): Finishes early if the food object became invalid; while in the Loop section, accumulates eat time on the food, ends early if the food is emptied, and runs tick scripts.
