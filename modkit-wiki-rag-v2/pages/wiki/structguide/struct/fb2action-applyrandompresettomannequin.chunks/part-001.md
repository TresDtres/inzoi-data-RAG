---
document_id: "7c26c1c44f6bec6a81eea6539b1843a9c2d5344778e4b3e316e8fb23794cc0aa"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-applyrandompresettomannequin"
title: "B2Action_ApplyRandomPresetToMannequin"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:28+00:00"
content_sha256: "3cc0e462ee10a7d048087704ee920eb9979d33fc5fea020c3e5a87c0e99f5910"
chunk: 1
chunk_count: 13
page_type: "article"
route: "wiki/structguide/struct/fb2action-applyrandompresettomannequin"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Plays a preset-selection animation, then resolves and applies a random outfit preset to a store mannequin target once the animation finishes. * =============== * Note: * OnInit(): resolves the target mannequin, rolls a random outfit preset for its gender/growth step/category, builds the resulting appearance setting, and requests a B1 preload of the preset. * OnFinish(): applies the previously resolved appearance setting and preset id to the mannequin object and syncs its outfit category to B1.
