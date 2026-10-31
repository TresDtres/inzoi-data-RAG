---
document_id: "3ae364e36810ee6fd2ca61af9fdd6041b22899c6c37451e210101b4b28d9e408"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-progresscrafting"
title: "B2Action_ProgressCrafting"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:42+00:00"
content_sha256: "5aaf79b5ba9b2d60b2a7f414975cdd7ca82cda2bf7b9ef6d3d4b34cd444846d9"
chunk: 1
chunk_count: 13
page_type: "article"
route: "wiki/structguide/struct/fb2action-progresscrafting"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Drives ongoing crafting progress on the self entity's current crafting object, syncing progress/time to clients and to any active freelance creation order, finishing once the object's progress stat reaches 100%. * =============== * Note: * OnInit(): Sets an infinite loop count, resolves the crafting object/component from self's CraftingComponent, validates workbench requirement, and caches initial progress/total time. * OnPlay(): Refreshes InitialProgress/PrevTotalProgressTime on resume, and sends the freelance creation crafting start info if applicable. * OnTick(): Finishes on 100% progress, resyncs progress/time to clients (and freelance order state) when total crafting time changes, and runs debug output. * OnFinish(): Sends inventory update on success and, if a freelance start was sent, sends the freelance crafting stop info.
