---
document_id: "db40c1bc7302122a303735632feb56baacadfd64a3542bcacb1269697f9115b1"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-voiceidle-en"
title: "B1AnimNotifyState_VoiceIdle"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotifyState"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:28+00:00"
content_sha256: "1c072f08eb86b745c4f05ce888b228ef183cebdfbe671ed8178573753b7b25d2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-voiceidle-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotifyState_Voice.h / .cpp` **Base Class:** `UAnimNotifyState`

## Purpose

Plays a voice line during an idle animation. Similar to `VoiceInteraction` but used in non-interaction contexts (ambient idle vocalizations, etc.).

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_VoiceIdle`.
3. Set `VoiceResourceId` in the **Details panel**.

## Editor Properties

| PropertyTypeDefaultDescription`VoiceResourceId``FName`—ID of the idle voice resource in the character's voice data |
| --- |
| `VoiceResourceId``FName`—ID of the idle voice resource in the character's voice data |

## Behavior

| CallbackAction`NotifyBegin`Resolves voice resource via `AB1Character::GetVoiceResource(VoiceResourceId)`, spawns sound attached to the character via `UB1AudioManager::SpawnSoundAttached()``NotifyEnd`Stops the audio component |
| --- |
| `NotifyBegin`Resolves voice resource via `AB1Character::GetVoiceResource(VoiceResourceId)`, spawns sound attached to the character via `UB1AudioManager::SpawnSoundAttached()``NotifyEnd`Stops the audio component |
| `NotifyEnd`Stops the audio component |

## Related

- `B1AnimNotifyState_VoiceInteraction` — voice during interaction animations
- `B1AnimNotifyState_VoiceTalk` — voice during Talk animations
- `B1AnimNotifyState_VoiceDream` — voice during dream sequence animations
