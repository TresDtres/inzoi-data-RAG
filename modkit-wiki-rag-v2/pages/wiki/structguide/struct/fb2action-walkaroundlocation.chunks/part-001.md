---
document_id: "7438ae8f75af33beaa325454cb25a3581ccfd36b39f06c690010593aeb8b65b6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-walkaroundlocation"
title: "B2Action_WalkAroundLocation"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:50+00:00"
content_sha256: "9c45e62413cf89eb123a3721ad811d90ef838bec141c95eb8b85705930e6dd55"
chunk: 1
chunk_count: 15
page_type: "article"
route: "wiki/structguide/struct/fb2action-walkaroundlocation"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Makes the walker wander to a random point within a min/max radius of an origin location, retrying path search a limited number of times if a candidate point is unreachable. * =============== * Param: * S1: Optional vector string overriding the wander origin (InitDestination); defaults to the walker's location * S2: - * F1: Min radius when F2 is also non-zero, otherwise max radius * F2: Max radius (only applied together with F1) * Note: * OnInit(): Reads FindPathRetryCount from UB1InteractionDataAsset, applies F1/F2 as the min/max radius range, and sets InitDestination/From to the walker's location (optionally overridden by S1).
