---
document_id: "76d4b82420e6a9f4cef1cae691089991374a18beab65240e63bfb020258a30aa"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotify/b1animnotify-portrait-en"
title: "B1AnimNotify_Portrait"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotify"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:25+00:00"
content_sha256: "494190989f9398e08603db488e42dfef8705d13689e0df5b6c653af501873d1b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotify/b1animnotify-portrait-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_Portrait.h / .cpp` **Base Class:** `UAnimNotify`

## Purpose

Marker notify that flags the exact frame to capture for a character's portrait (profile picture). The portrait capture system reads this notify to determine which frame to render when generating character thumbnails.

No runtime side effects — purely a data marker.
