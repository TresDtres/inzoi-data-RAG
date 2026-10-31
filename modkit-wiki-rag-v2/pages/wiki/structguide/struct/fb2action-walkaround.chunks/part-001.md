---
document_id: "09d5e20fd2c2aa3ebafd8568917d5ef375431beea40b623e55178d00bf19da0f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-walkaround"
title: "B2Action_WalkAround"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:49+00:00"
content_sha256: "f38e5ae2f3a258f799d066c5a96101f076947ff8438a117fbc7cd3dc2dc573bc"
chunk: 1
chunk_count: 13
page_type: "article"
route: "wiki/structguide/struct/fb2action-walkaround"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Makes the walker wander to a random point within a radius of a site (the walker's current site or a specified one), used for idle roaming. * =============== * Param: * S1: Site id to wander in ("{CurrentSite}" for the walker's current site), also parsed as a vector string to override the wander origin location * S2: - * F1: Max wander radius (also zeroes OffsetDistance when set) * F2: Max wander radius override (takes precedence over F1) * Note: * OnInit(): Resolves the target site, picks a random point within the radius around the wander origin, and snaps it to the nearest valid site grid location, storing the result in NonTargetLocation.
