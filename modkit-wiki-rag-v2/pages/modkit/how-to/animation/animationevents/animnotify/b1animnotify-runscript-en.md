---
document_id: "5101be1aa13a45071dfac66fe1f8c6ba8451a6c784bee5fcd545a5334abbf619"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotify/b1animnotify-runscript-en"
title: "B1AnimNotify_RunScript"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotify"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:26+00:00"
content_sha256: "485f1dad4d8a5fd759968237df02804e862b76a10023ba3462a0803e61ea10a7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotify/b1animnotify-runscript-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_RunScript.h / .cpp` **Base Class:** `UAnimNotify`

> **Note:** Implementation is currently commented out (work in progress).

## Purpose

Executes a B2 simulation-side Lua script at the notify frame. Intended to allow animation events to trigger simulation logic (e.g., stat changes, buff application) at a precise animation moment.

## Related

- `B1AnimNotifyState_RunScript` — state variant that fires script at begin and end of a range
- See `Tech:script` for the Script system architecture
