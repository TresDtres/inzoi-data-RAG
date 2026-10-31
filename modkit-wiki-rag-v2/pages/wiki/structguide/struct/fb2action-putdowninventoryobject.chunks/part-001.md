---
document_id: "fd117da925f5a7d7c7cf2bcdc284fda9de25aba8a6f9db25586ea4da1ad516aa"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-putdowninventoryobject"
title: "B2Action_PutDownInventoryObject"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:42+00:00"
content_sha256: "85c5a0c6b9982529248763cc16a03c8b9d49ae3e3dda45edf93c30338e8a9e67"
chunk: 1
chunk_count: 8
page_type: "article"
route: "wiki/structguide/struct/fb2action-putdowninventoryobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Action that puts down the character's carried inventory object (e.g. food), either onto the floor or a target slot. * =============== * Note: * OnInit(): Resolves the carried inventory object, sets GrabId to "Food", computes the put-down anim id from target slot height, and requests its async load. * OnPlay(): Resets the anim timer and plays the put-down anim montage. * OnFinish(): Stops the grab loop arm animation and resets the montage delegates. * OnTick(): Accumulates elapsed anim montage playback time.
