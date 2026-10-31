---
document_id: "c7b81965702c4275c3942c85eb24b017f6998e4a29c24169421594179bb3d9b4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-playanim"
title: "B2Action_PlayAnim"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:41+00:00"
content_sha256: "959d20f1f557567f84db57e02d6fb1ada2ddad84ff3c4c4ab38b39f5d823cae8"
chunk: 1
chunk_count: 11
page_type: "article"
route: "wiki/structguide/struct/fb2action-playanim"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Generic base action that resolves and plays an animation montage (Default/Loop/End sections) on either the * self or target entity, optionally looping a configurable number of times. Widely subclassed by other Actions * that just need to play a specific animation with extra logic layered on top (e.g. FB2Action_PlantSeed). * =============== * Param: * S1: Animation id to play, read through the overridable GetAnimationId() hook * S2: - * F1: Loop count for the montage's Loop section (0 is treated as 1, -1 means loop indefinitely) * F2: - * Note: * OnInit(): Resolves AnimationId/LoopCount from the action data, finds the entity to animate (self or target per Action.BaseObject), resolves the montage/section data via SetAnim(), and queues async anim loads (including anims referenced by the montage's notify events). * OnPlay(): Re-resolves the montage/section data via SetAnim() and starts playing it from the Default section. * OnFinish(): Jumps a still-looping montage to its End section and resets its delegates; also teleports the character off unwalkable ground when exiting a vehicle-mount animation. * OnCanceled(): Depending on ShouldPlayEndSectionOnCancel()/ShouldCancelInteraction(), either stops the montage immediately (to escape a self-repeating Loop section) or jumps it to its End section; clears RemainLoopCount.
