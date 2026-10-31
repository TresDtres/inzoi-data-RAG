---
document_id: "4cab2466b483e028953c31d523b92155b09461c3d772e09e60be6d753220ab69"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotify/b1animnotify-playfxobject-en"
title: "B1AnimNotify_PlayFXObject"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotify"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:25+00:00"
content_sha256: "59ea7a3c35b3d58e0729a091c0047a85d4d482db6e0422ffe000276b6eb0fe4d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotify/b1animnotify-playfxobject-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_PlayFXObject.h / .cpp` **Base Class:** `UAnimNotify`

## Purpose

Plays a one-shot FX Object (Niagara-based visual effect) at the notify frame.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify** → `B1AnimNotify_PlayFXObject`.
3. Assign `FXObject` in the **Details panel**.

## Editor Properties

| PropertyTypeDefaultDescription`FXObject``TSubclassOf<UB1FXObject>`—The FX Object class containing the Niagara system and parameters to spawn`IsPlayerOnlyEffect``bool`falseIf true, the effect is only spawned for the locally controlled player |
| --- |
| `FXObject``TSubclassOf<UB1FXObject>`—The FX Object class containing the Niagara system and parameters to spawn`IsPlayerOnlyEffect``bool`falseIf true, the effect is only spawned for the locally controlled player |
| `IsPlayerOnlyEffect``bool`falseIf true, the effect is only spawned for the locally controlled player |

## Behavior

Calls `UB1FXManager::PlayFX(MeshComp, FXObject)`. In the editor preview (e.g., Persona), the Niagara system is spawned directly for immediate visual feedback without going through the manager.

## Related

- `B1AnimNotifyState_TimedFXObject` — state variant that sustains a looping FX for a duration
- `B1AnimNotify_PlayObjectSlotFX` — plays FX from a game object's slot configuration
