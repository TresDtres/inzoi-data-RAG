---
document_id: "9cbae7f41bd38015f0bcd56d9ba77ba823fb4083570550001493f0de64956378"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-voiceinteraction-en"
title: "B1AnimNotifyState_VoiceInteraction"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotifyState"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:29+00:00"
content_sha256: "b80f73115c35c59ad7494e0c008266e796d40941577cd3eb23dbf36d5393e149"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-voiceinteraction-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotifyState_Voice.h / .cpp` **Base Class:** `UAnimNotifyState`

## Purpose

Plays a voice line (resolved from a named voice resource) during an interaction animation. Supports async audio asset loading with a configurable delay. The voice clip is stopped cleanly when the notify range ends or the montage is interrupted.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_VoiceInteraction`.
3. Set `VoiceResourceId` in the **Details panel** and drag the bar to cover the voice clip duration.

## Editor Properties

| PropertyTypeDefaultDescription`VoiceResourceId``FName`—ID of the voice resource defined in the character's voice data asset |
| --- |
| `VoiceResourceId``FName`—ID of the voice resource defined in the character's voice data asset |

## Behavior

| CallbackAction`NotifyBegin`Calls `AB1Character::GetVoiceResource(VoiceResourceId)` to resolve the audio asset. Creates a `FB1NotifyStateVoiceKey` (contains mesh, animation, timing, montage instance info). Spawns the sound attached to the head socket via `UB1AudioManager::SpawnSoundAttached()`. Supports async loading with configurable delay (console variable).`NotifyEnd`Stops the audio component and removes the entry from the internal map |
| --- |
| `NotifyBegin`Calls `AB1Character::GetVoiceResource(VoiceResourceId)` to resolve the audio asset. Creates a `FB1NotifyStateVoiceKey` (contains mesh, animation, timing, montage instance info). Spawns the sound attached to the head socket via `UB1AudioManager::SpawnSoundAttached()`. Supports async loading with configurable delay (console variable).`NotifyEnd`Stops the audio component and removes the entry from the internal map |
| `NotifyEnd`Stops the audio component and removes the entry from the internal map |

## Async Loading

If the voice audio asset is not yet loaded when `NotifyBegin` fires, the sound spawn is deferred by a configurable number of frames (controlled via a console variable). This prevents hitches in streaming scenarios.

## Related

- `B1AnimNotifyState_VoiceTalk` — voice during Talk animations (coop voice source)
- `B1AnimNotifyState_VoiceIdle` — voice during idle animations
- `B1AnimNotifyState_VoiceDream` — voice during dream sequence animations
