---
document_id: "ea9bfebdf4dffe8c23ff589d4e6784642b37710f84f164a72960cf38c1989672"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-runscript-en"
title: "B1AnimNotifyState_RunScript"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotifyState"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:28+00:00"
content_sha256: "b66c115daa6426b6c2101bc2827eb8ea4afff78b959dfb24801a4c12384a346b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-runscript-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_RunScript.h / .cpp` **Base Class:** `UAnimNotifyState`

> **Note:** Implementation is currently commented out (work in progress).

## Purpose

Executes a B2 simulation-side Lua script at the begin and/or end of the notify range. Intended to allow animation events to trigger simulation logic (e.g., stat changes, buff application) at precise animation moments with begin/end semantics.

## Related

- `B1AnimNotify_RunScript` — single-frame variant that fires at one frame
- See `Tech:script` for the Script system architecture
