---
document_id: "7e38ed36eb082bf9b1110266148000d5c5d3b4cae210b2f0ccf80d574f2ae5ce"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotify/b1animnotify-loopend-en"
title: "B1AnimNotify_LoopEnd"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotify"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:25+00:00"
content_sha256: "198fbc24ffd15ca476fc55cac0baacd2b12781f4fa0e9aa0366339d3694a874a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotify/b1animnotify-loopend-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_LoopEnd.h / .cpp` **Base Class:** `UAnimNotify`

## Purpose

Marker notify that flags the end of a loop section within a montage. Paired with `B1AnimNotify_LoopStart`, the Action/Interaction system uses both markers to determine the loop boundary when deciding to continue or exit a looped animation.

No runtime logic is executed by this notify itself — it is purely a data marker consumed by the Action/SubAction system.

## Related

- `B1AnimNotify_LoopStart` — marks the beginning of the loop range
