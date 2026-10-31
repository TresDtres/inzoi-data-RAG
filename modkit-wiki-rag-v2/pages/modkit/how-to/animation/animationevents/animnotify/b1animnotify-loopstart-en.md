---
document_id: "d9a0c39cc1ac6bcaf42314923a4e44921fdcaf36361bd58e67a92bb5791a52ee"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotify/b1animnotify-loopstart-en"
title: "B1AnimNotify_LoopStart"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotify"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:25+00:00"
content_sha256: "f6d4f2bfcc240cd79a329c97d01b5a72b45f2651dbd1a2c865dae734cf01e37a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotify/b1animnotify-loopstart-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_LoopStart.h / .cpp` **Base Class:** `UAnimNotify`

## Purpose

Marker notify that flags the start of a loop section within a montage. The Action/Interaction system reads this marker to determine when to begin looping behavior (e.g., staying in a looped interaction animation until conditions change).

No runtime logic is executed by this notify itself — it is purely a data marker consumed by the Action/SubAction system.

## How to Use

Place `B1AnimNotify_LoopStart` at the frame where the loop should begin, and `B1AnimNotify_LoopEnd` at the frame where it should end. The Action system polls these markers to decide whether to continue or exit the loop.

## Related

- `B1AnimNotify_LoopEnd` — marks the end of the loop range
