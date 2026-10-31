---
document_id: "85431b6a60b11b7eded51ec761227a5d393d2fac61b04c31b28ef00e578c46a5"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-voicetalk-en"
title: "B1AnimNotifyState_VoiceTalk"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotifyState"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:29+00:00"
content_sha256: "c00961ec7b3c738b88b51dc6bbad1e770c6aeba63933f4a29c586dc6cc8493a3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-voicetalk-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotifyState_Voice.h / .cpp` **Base Class:** `UAnimNotifyState`

## Purpose

Plays a co-op voice line during a Talk animation. The voice resource is resolved dynamically from the character's coop voice configuration rather than from a fixed ID.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_VoiceTalk`.
3. Set `VoiceSourceType` in the **Details panel**.

## Editor Properties

| PropertyTypeDefaultDescription`VoiceSourceType``EB1TalkVoiceSourceType`—Determines which coop voice resource slot to use for this Talk voice line |
| --- |
| `VoiceSourceType``EB1TalkVoiceSourceType`—Determines which coop voice resource slot to use for this Talk voice line |

## Behavior

| CallbackAction`NotifyBegin`Calls `AB1Character::GetCoopVoiceResourceId()` to resolve the voice resource ID, then spawns the sound attached to the character via `UB1AudioManager::SpawnSoundAttached()``NotifyEnd`Stops the audio component |
| --- |
| `NotifyBegin`Calls `AB1Character::GetCoopVoiceResourceId()` to resolve the voice resource ID, then spawns the sound attached to the character via `UB1AudioManager::SpawnSoundAttached()``NotifyEnd`Stops the audio component |
| `NotifyEnd`Stops the audio component |

## Related

- `B1AnimNotifyState_VoiceInteraction` — voice during interaction animations (fixed resource ID)
- `B1AnimNotifyState_VoiceIdle` — voice during idle animations
- `B1AnimNotifyState_VoiceDream` — voice during dream sequence animations
