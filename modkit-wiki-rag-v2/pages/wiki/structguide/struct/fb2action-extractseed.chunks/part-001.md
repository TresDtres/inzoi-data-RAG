---
document_id: "61ce8fc7ff9429093e2884258bf480eb078c6c5560262a49f2bdde98aef28c96"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-extractseed"
title: "B2Action_ExtractSeed"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:35+00:00"
content_sha256: "dc9500c414540f52b63310380e9e2f6b6dbf3d0d0c904252e0b7732a79dc0118"
chunk: 1
chunk_count: 13
page_type: "article"
route: "wiki/structguide/struct/fb2action-extractseed"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Extracts seeds from a harvested crop's yield object, spawning seed items into the owning character's inventory and destroying/detaching the target object afterward. * =============== * Note: * OnInit(): resolves the crop id and caches the target object id/ownership from the target game object; fails if no crop tag can be resolved. * OnFinish(): validates state, extracts seeds into the owner's inventory, then destroys or detaches the target object.
