---
document_id: "f19ac262d4597be30736f1c2c45c45341b92e6cfc668c6829b15d15c9dbebf90"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-throwcarriableobject"
title: "B2Action_ThrowCarriableObject"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:48+00:00"
content_sha256: "6c89a00b757b377197dba6cb476623218e9697e0bfb6820525ccb0490feefaea"
chunk: 1
chunk_count: 12
page_type: "article"
route: "wiki/structguide/struct/fb2action-throwcarriableobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Determines which hand is holding the throw target, resolves SelectedHand accordingly, and plays the matching throw montage. (Releasing the object from the hand is the responsibility of the B1AnimNotify_ThrowCarriable notify embedded in the montage.) * =============== * Note: * OnInit(): Resolves SelectedHand by comparing the target entity against the currently grabbed entity in each hand; fails if the target isn't grabbed. * OnPlay(): pays the active-action energy cost, after the base call and only when a montage actually resolved. Init runs while the interaction is still being set up, and the base OnPlay cancels out when SetAnim fails, so charging in either spot would bill throws that never happen.
