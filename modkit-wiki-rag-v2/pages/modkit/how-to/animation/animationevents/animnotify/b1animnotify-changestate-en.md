---
document_id: "62896273d750686b709e25ff6132b7d8c6501640f61694a9d4a78071736f3129"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotify/b1animnotify-changestate-en"
title: "B1AnimNotify_ChangeState"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotify"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:23+00:00"
content_sha256: "cc36aed282fece602cd49454c334b90b308d0b3f85d6cfb0a29ed62c816e55a6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotify/b1animnotify-changestate-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_ChangeState.h / .cpp` **Base Class:** `UAnimNotify`

> **Note:** Implementation is currently commented out (work in progress).

## Purpose

Triggers a state-group transition on a target object at the notify frame.

## Editor Properties

| PropertyTypeDefaultDescription`Target``EB1BaseObject`—Target object to change state on`ChangedStateGroupName``FName`—Identifier of the state group`ChangeStateName``FName`—New state name within the group |
| --- |
| `Target``EB1BaseObject`—Target object to change state on`ChangedStateGroupName``FName`—Identifier of the state group`ChangeStateName``FName`—New state name within the group |
| `ChangedStateGroupName``FName`—Identifier of the state group`ChangeStateName``FName`—New state name within the group |
| `ChangeStateName``FName`—New state name within the group |
