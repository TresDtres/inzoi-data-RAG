---
document_id: "b26d5a21a1dba03435788666d37689c309bcff25312a449df3b991461b9b95cb"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotify/b1animnotify-footsteps-en"
title: "B1AnimNotify_FootSteps"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotify"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:24+00:00"
content_sha256: "1f577d0832995da8491b3978a6a99fda2a75daced7858cb3ec56b80bcbee769c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotify/b1animnotify-footsteps-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_FootSteps.h / .cpp` **Base Class:** `UAnimNotify`

## Purpose

Plays footstep audio at the notify frame by detecting the physical material of the floor beneath the foot socket and matching it with the character's current shoe outsole type.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify** → `B1AnimNotify_FootSteps`.
3. Set `PrintSocketName` to the foot socket (e.g., `foot_l` or `foot_r`) in the **Details panel**.

## Editor Properties

| PropertyTypeDefaultDescription`PrintSocketName``FName`—Socket on the foot bone used as the trace origin`OptionalSoundId``FName`*(empty)*Override sound ID; if empty, the sound is auto-selected from the material/outsole lookup table`TraceChannel``ECollisionChannel``ECC_GameTraceChannel10`Collision channel for the ground line trace`TraceStartZOffset``float`100.0Z offset above the socket where the trace begins`TraceEndZOffset``float`-150.0Z offset below the socket where the trace ends`VolumeMultiplier``float`1.0Volume scale applied to the spawned audio`PitchMultiplier``float`1.0Pitch scale applied to the spawned audio`bFollow``bool`falseIf true, the audio component moves with the character |
| --- |
| `PrintSocketName``FName`—Socket on the foot bone used as the trace origin`OptionalSoundId``FName`*(empty)*Override sound ID; if empty, the sound is auto-selected from the material/outsole lookup table`TraceChannel``ECollisionChannel``ECC_GameTraceChannel10`Collision channel for the ground line trace`TraceStartZOffset``float`100.0Z offset above the socket where the trace begins`TraceEndZOffset``float`-150.0Z offset below the socket where the trace ends`VolumeMultiplier``float`1.0Volume scale applied to the spawned audio`PitchMultiplier``float`1.0Pitch scale applied to the spawned audio`bFollow``bool`falseIf true, the audio component moves with the character |
| `OptionalSoundId``FName`*(empty)*Override sound ID; if empty, the sound is auto-selected from the material/outsole lookup table`TraceChannel``ECollisionChannel``ECC_GameTraceChannel10`Collision channel for the ground line trace`TraceStartZOffset``float`100.0Z offset above the socket where the trace begins`TraceEndZOffset``float`-150.0Z offset below the socket where the trace ends`VolumeMultiplier``float`1.0Volume scale applied to the spawned audio`PitchMultiplier``float`1.0Pitch scale applied to the spawned audio`bFollow``bool`falseIf true, the audio component moves with the character |
| `TraceChannel``ECollisionChannel``ECC_GameTraceChannel10`Collision channel for the ground line trace`TraceStartZOffset``float`100.0Z offset above the socket where the trace begins`TraceEndZOffset``float`-150.0Z offset below the socket where the trace ends`VolumeMultiplier``float`1.0Volume scale applied to the spawned audio`PitchMultiplier``float`1.0Pitch scale applied to the spawned audio`bFollow``bool`falseIf true, the audio component moves with the character |
| `TraceStartZOffset``float`100.0Z offset above the socket where the trace begins`TraceEndZOffset``float`-150.0Z offset below the socket where the trace ends`VolumeMultiplier``float`1.0Volume scale applied to the spawned audio`PitchMultiplier``float`1.0Pitch scale applied to the spawned audio`bFollow``bool`falseIf true, the audio component moves with the character |
| `TraceEndZOffset``float`-150.0Z offset below the socket where the trace ends`VolumeMultiplier``float`1.0Volume scale applied to the spawned audio`PitchMultiplier``float`1.0Pitch scale applied to the spawned audio`bFollow``bool`falseIf true, the audio component moves with the character |
| `VolumeMultiplier``float`1.0Volume scale applied to the spawned audio`PitchMultiplier``float`1.0Pitch scale applied to the spawned audio`bFollow``bool`falseIf true, the audio component moves with the character |
| `PitchMultiplier``float`1.0Pitch scale applied to the spawned audio`bFollow``bool`falseIf true, the audio component moves with the character |
| `bFollow``bool`falseIf true, the audio component moves with the character |

## Behavior

1. Performs a line trace downward from the foot socket position.
2. Reads the `UPhysicalMaterial` from the hit surface.
3. Determines the shoe outsole type from `UB1AppearanceComponent` on the character.
4. Looks up the matching `FB1FootStepsAudioTableRow` using material + outsole combination.
5. Loads and spawns the audio via `UB1AudioManager` (2D or attached depending on `bFollow`).
6. Sets the `MoveVelocity` parameter on the audio component to match character speed.
