---
document_id: "9a71d41879ef47bbb99e27db91aa112e183213d189a8cf3415886bca53b9ebcb"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-gameobjectsound-en"
title: "B1AnimNotifyState_GameObjectSound"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotifyState"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:27+00:00"
content_sha256: "00683b2329b815eabc3b84203d1efc315e5fb1e9dc95ae53162de6796db64cd1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-gameobjectsound-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_GameObjectSound.h / .cpp` **Base Class:** `UAnimNotifyState`

## Purpose

Plays a named sound on a game object for the duration of the notify range, then stops it when the range ends or the montage is interrupted.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_GameObjectSound`.
3. Configure properties in the **Details panel** and drag the right edge to set the sound duration.

## Editor Properties

| PropertyTypeDefaultDescription`GameObjectStateType``EB1GameObjectStateType``Target`Which object to play sound on: `Target`, `Grab`, or `Self``ObjectSoundId``FName`—Sound preset ID from the GameObjectSound data table`SocketType``EB1GameObjectAttachSocketType``Invalid`Socket category to attach audio to`SocketName``FName`—Explicit socket name override |
| --- |
| `GameObjectStateType``EB1GameObjectStateType``Target`Which object to play sound on: `Target`, `Grab`, or `Self``ObjectSoundId``FName`—Sound preset ID from the GameObjectSound data table`SocketType``EB1GameObjectAttachSocketType``Invalid`Socket category to attach audio to`SocketName``FName`—Explicit socket name override |
| `ObjectSoundId``FName`—Sound preset ID from the GameObjectSound data table`SocketType``EB1GameObjectAttachSocketType``Invalid`Socket category to attach audio to`SocketName``FName`—Explicit socket name override |
| `SocketType``EB1GameObjectAttachSocketType``Invalid`Socket category to attach audio to`SocketName``FName`—Explicit socket name override |
| `SocketName``FName`—Explicit socket name override |

## Behavior

| CallbackAction`NotifyBegin`Calls `AddObjectSound()` on the game object's audio component to start the sound`NotifyEnd`Calls `RemoveObjectSound()` to stop it |
| --- |
| `NotifyBegin`Calls `AddObjectSound()` on the game object's audio component to start the sound`NotifyEnd`Calls `RemoveObjectSound()` to stop it |
| `NotifyEnd`Calls `RemoveObjectSound()` to stop it |

## Related

- `B1AnimNotify_GameObjectSound` — single-frame variant (supports OneShot, UniqueOncePlay, Stop commands)
