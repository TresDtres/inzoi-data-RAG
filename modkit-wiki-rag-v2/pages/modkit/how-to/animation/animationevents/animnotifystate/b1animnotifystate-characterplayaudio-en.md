---
document_id: "5bc9f215517ad9c67e74003e873797ad964d0d04cb43ccfe027e86b1556e2263"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-characterplayaudio-en"
title: "B1AnimNotifyState_CharacterPlayAudio"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotifyState"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:27+00:00"
content_sha256: "9716ef45d819a4102e9a36ef95f5e6fc1cdaf41de893b77ff2e1f1c3e459a4c3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-characterplayaudio-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotifyState_CharacterPlayAudio.h / .cpp` **Base Class:** `UAnimNotifyState`

## Purpose

Plays a specific audio clip (identified by `SoundNotifyId`) from a GameObjectSound preset for the duration of the notify range, then stops it cleanly on end.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_CharacterPlayAudio`.
3. Set `GameObjectSoundId` and `SoundNotifyId` in the **Details panel**.

## Editor Properties

| PropertyTypeDefaultDescription`GameObjectSoundId``FName`—ID used to look up the `FB1GameObjectSoundTableRow` data record`SoundNotifyId``FName`—Identifies which specific `UMetaSoundSource` within the sound preset to play`SocketType``EB1GameObjectAttachSocketType``Invalid`Socket category to attach the audio component to |
| --- |
| `GameObjectSoundId``FName`—ID used to look up the `FB1GameObjectSoundTableRow` data record`SoundNotifyId``FName`—Identifies which specific `UMetaSoundSource` within the sound preset to play`SocketType``EB1GameObjectAttachSocketType``Invalid`Socket category to attach the audio component to |
| `SoundNotifyId``FName`—Identifies which specific `UMetaSoundSource` within the sound preset to play`SocketType``EB1GameObjectAttachSocketType``Invalid`Socket category to attach the audio component to |
| `SocketType``EB1GameObjectAttachSocketType``Invalid`Socket category to attach the audio component to |

## Behavior

| CallbackAction`NotifyBegin`Looks up `FB1GameObjectSoundTableRow` by `GameObjectSoundId`, finds the `UMetaSoundSource` matching `SoundNotifyId`, spawns it attached to the resolved socket via `UB1AudioManager::SpawnSoundAttached()``NotifyEnd`Stops the audio via `UB1AudioManager::StopSound2D()` |
| --- |
| `NotifyBegin`Looks up `FB1GameObjectSoundTableRow` by `GameObjectSoundId`, finds the `UMetaSoundSource` matching `SoundNotifyId`, spawns it attached to the resolved socket via `UB1AudioManager::SpawnSoundAttached()``NotifyEnd`Stops the audio via `UB1AudioManager::StopSound2D()` |
| `NotifyEnd`Stops the audio via `UB1AudioManager::StopSound2D()` |
