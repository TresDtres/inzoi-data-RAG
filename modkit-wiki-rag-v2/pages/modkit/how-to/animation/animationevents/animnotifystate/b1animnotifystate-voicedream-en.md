---
document_id: "a511ac942e3a781df53ea30e4081c2f4ad5ed8709f5207e4c3d1e570a1a73aaa"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-voicedream-en"
title: "B1AnimNotifyState_VoiceDream"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotifyState"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:28+00:00"
content_sha256: "6067e50c640e3fff9aa8c9d1d91647c03b822f2a6496f376f41bd8161cf59aba"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-voicedream-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotifyState_Voice.h / .cpp` **Base Class:** `UAnimNotifyState`

## Purpose

Plays a voice line during a dream sequence animation. The voice resource is resolved dynamically from the character's `UB1DreamComponent` rather than from a fixed ID, allowing each dream scenario to supply its own voice clip.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence** used in a dream sequence.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_VoiceDream`.
3. Set the duration to match the voice clip length — no resource ID is needed in the notify.

## Editor Properties

No user-configurable properties. The voice resource is determined entirely at runtime from `UB1DreamComponent`.

## Behavior

| CallbackAction`NotifyBegin`Gets `UB1DreamComponent` from the character, calls `dreamComponent->GetVoiceResourceId()` to resolve the voice asset, spawns sound attached to the head socket via `UB1AudioManager::SpawnSoundAttached()``NotifyEnd`Stops the audio component |
| --- |
| `NotifyBegin`Gets `UB1DreamComponent` from the character, calls `dreamComponent->GetVoiceResourceId()` to resolve the voice asset, spawns sound attached to the head socket via `UB1AudioManager::SpawnSoundAttached()``NotifyEnd`Stops the audio component |
| `NotifyEnd`Stops the audio component |

## Related

- `B1AnimNotifyState_VoiceInteraction` — voice during interaction animations (fixed resource ID)
- `B1AnimNotifyState_VoiceTalk` — voice during Talk animations
- `B1AnimNotifyState_VoiceIdle` — voice during idle animations
