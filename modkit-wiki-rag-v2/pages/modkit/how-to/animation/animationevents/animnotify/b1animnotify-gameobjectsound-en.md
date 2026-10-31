---
document_id: "aacaa89a6a82e87cbb7e938eea7644ee7a22e91a2818407cb61571401fc87ad3"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotify/b1animnotify-gameobjectsound-en"
title: "B1AnimNotify_GameObjectSound"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotify"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:24+00:00"
content_sha256: "8ce55f9080ff65a3e891b668ba89e7dd8e6aaed17d11f262fe1b06f7cc5e5575"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotify/b1animnotify-gameobjectsound-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_GameObjectSound.h / .cpp` **Base Class:** `UAnimNotify`

## Purpose

Plays, loops, or stops a named sound on a game object (interaction target, grab target, or self) at the notify frame.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify** → `B1AnimNotify_GameObjectSound`.
3. Configure the properties below in the **Details panel**.

## Editor Properties

| PropertyTypeDefaultDescription`GameObjectStateType``EB1GameObjectStateType``Target`Which object to play sound on: `Target`, `Grab`, or `Self``ObjectSoundId``FName`—Sound preset ID from the GameObjectSound data table`CommandType``EB1GameObjectSoundCommandType``OneShot``OneShot`, `UniqueOncePlay`, or `Stop``SocketType``EB1GameObjectAttachSocketType``Invalid`Socket category to attach audio to`SocketName``FName`—Explicit socket name override |
| --- |
| `GameObjectStateType``EB1GameObjectStateType``Target`Which object to play sound on: `Target`, `Grab`, or `Self``ObjectSoundId``FName`—Sound preset ID from the GameObjectSound data table`CommandType``EB1GameObjectSoundCommandType``OneShot``OneShot`, `UniqueOncePlay`, or `Stop``SocketType``EB1GameObjectAttachSocketType``Invalid`Socket category to attach audio to`SocketName``FName`—Explicit socket name override |
| `ObjectSoundId``FName`—Sound preset ID from the GameObjectSound data table`CommandType``EB1GameObjectSoundCommandType``OneShot``OneShot`, `UniqueOncePlay`, or `Stop``SocketType``EB1GameObjectAttachSocketType``Invalid`Socket category to attach audio to`SocketName``FName`—Explicit socket name override |
| `CommandType``EB1GameObjectSoundCommandType``OneShot``OneShot`, `UniqueOncePlay`, or `Stop``SocketType``EB1GameObjectAttachSocketType``Invalid`Socket category to attach audio to`SocketName``FName`—Explicit socket name override |
| `SocketType``EB1GameObjectAttachSocketType``Invalid`Socket category to attach audio to`SocketName``FName`—Explicit socket name override |
| `SocketName``FName`—Explicit socket name override |

## Behavior

Resolves the target game object based on `GameObjectStateType`, then executes the sound command:

- **`OneShot`** — spawns a one-shot sound attached to the game object.
- **`UniqueOncePlay`** — plays only if the sound is not already playing on the object (`HasObjectSound` check).
- **`Stop`** — stops the currently playing sound matching `ObjectSoundId` on the object.

Sound lifecycle is managed via `AddObjectSound()` / `RemoveObjectSound()` / `HasObjectSound()` on the game object's audio component.

## Related

- `B1AnimNotifyState_GameObjectSound` — state variant that plays for a duration
