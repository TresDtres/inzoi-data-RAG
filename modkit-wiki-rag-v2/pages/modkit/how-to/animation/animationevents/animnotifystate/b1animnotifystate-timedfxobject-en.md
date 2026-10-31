---
document_id: "f105b3446cde7d74c7649566627933e7e12a61c3a9bf356a1baaf47c3d7554b3"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-timedfxobject-en"
title: "B1AnimNotifyState_TimedFXObject"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotifyState"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:28+00:00"
content_sha256: "38c6bef45781e020303fee0193f5728e86a95854f6a456b089cfedc8f9b9a339"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-timedfxobject-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotifyState_TimedFXObject.h / .cpp` **Base Class:** `UAnimNotifyState`

## Purpose

Plays a looping or timed FX Object (Niagara-based visual effect) for the duration of the notify range, then cleanly stops and destroys it when the range ends or the montage is interrupted. Uses an int64 handle stored on the game object to ensure deterministic cleanup.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_TimedFXObject`.
3. Assign `FXObject` and set the duration in the **Details panel**.

## Editor Properties

| PropertyTypeDefaultDescription`FXObject``TSubclassOf<UB1FXObject>`—The FX Object class containing the Niagara system and parameters |
| --- |
| `FXObject``TSubclassOf<UB1FXObject>`—The FX Object class containing the Niagara system and parameters |

## Behavior

| CallbackAction`NotifyBegin`Gets `UB1FXManager` via `UB1System::GetManager<UB1FXManager>()`, calls `PlayFXWithHandle(MeshComp, FXObject)` to get an `int64` handle, stores it via `ownerGameObject->AddFXHandle(fxKey, handle)` or `animInstance->AddFXHandle()``NotifyEnd`Calls `ownerGameObject->DestroyFX(fxKey)` or `animInstance->DestroyFX(fxKey)` using the stored handle |
| --- |
| `NotifyBegin`Gets `UB1FXManager` via `UB1System::GetManager<UB1FXManager>()`, calls `PlayFXWithHandle(MeshComp, FXObject)` to get an `int64` handle, stores it via `ownerGameObject->AddFXHandle(fxKey, handle)` or `animInstance->AddFXHandle()``NotifyEnd`Calls `ownerGameObject->DestroyFX(fxKey)` or `animInstance->DestroyFX(fxKey)` using the stored handle |
| `NotifyEnd`Calls `ownerGameObject->DestroyFX(fxKey)` or `animInstance->DestroyFX(fxKey)` using the stored handle |

> In editor preview mode (Persona), the Niagara system is spawned directly for immediate visual feedback without going through the manager.

## Handle Key

The `fxKey` is derived from the notify's `GetUniqueID()`, making it safe to have multiple instances of the same notify active simultaneously on different characters.

## Related

- `B1AnimNotify_PlayFXObject` — single-frame one-shot variant
