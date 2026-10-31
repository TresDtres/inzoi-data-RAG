---
document_id: "abac8aec558727f1fbb4c41fe3eb93a5e8a17ca12de53520e59260fec4f9c3db"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-farmingrangebase"
title: "B2Action_FarmingRangeBase"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:35+00:00"
content_sha256: "ca30f33ee2458532e7e168663357934d8caa06dd60b6065b70d51642140c5a22"
chunk: 1
chunk_count: 12
page_type: "article"
route: "wiki/structguide/struct/fb2action-farmingrangebase"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Shared base for range-based farming actions (cultivate, fertilize, plant seed, pull weed) that gather soil/crop objects around the target and manage the range indicator FX. * Derived classes must override GetType() to return their specific EB1ActionType. Do not use this struct directly; use concrete farming range action types instead. * =============== * Param: * S1: - * S2: - * F1: - * F2: radius used to gather soil objects around the target location * Note: * OnInit(): resolves the target object and collects entity ids to execute the farming action on within range. * OnPlay(): starts the range indicator FX. * OnFinish(): stops the range indicator FX. * OnCanceled(): stops the range indicator FX.
