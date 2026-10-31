---
document_id: "d905d53e8c22fb8df566c3f119e1aa1eaef22c6f2aa9bbb4255a86db332268a9"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-playanim-en"
title: "B1AnimNotifyState_PlayAnim"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotifyState"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:27+00:00"
content_sha256: "666627b746e1fd78cd250a0b6b677719e8da55d6b25fc4760fe3336c49fcdf68"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-playanim-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_PlayAnim.h / .cpp` **Base Class:** `UAnimNotifyState`

## Purpose

Plays a secondary animation on the interaction target game object or character for the duration of the notify range, then stops it when the range ends.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_PlayAnim`.
3. Configure properties in the **Details panel**.

## Editor Properties

| PropertyTypeDefaultDescription`GameObjectAnimId``FName`—Animation ID from `DT_AnimGameObject` to play on the target game object`TargetGameObjectType``EB1TargetObjectType``InteractionTargetObject`Which game object to target`AnimStartSection``EB1LoopAnimSection``Default`Section of the montage to begin from`CharacterAnimId``FName`—Animation ID from `DT_AnimCharacter` to play on the character`bForcePlayAnim``bool`falseIf true, overrides current animation regardless of conditions`Conditions``TArray<FB1PlayAnimCondition>`*(empty)*Optional conditions that must be met |
| --- |
| `GameObjectAnimId``FName`—Animation ID from `DT_AnimGameObject` to play on the target game object`TargetGameObjectType``EB1TargetObjectType``InteractionTargetObject`Which game object to target`AnimStartSection``EB1LoopAnimSection``Default`Section of the montage to begin from`CharacterAnimId``FName`—Animation ID from `DT_AnimCharacter` to play on the character`bForcePlayAnim``bool`falseIf true, overrides current animation regardless of conditions`Conditions``TArray<FB1PlayAnimCondition>`*(empty)*Optional conditions that must be met |
| `TargetGameObjectType``EB1TargetObjectType``InteractionTargetObject`Which game object to target`AnimStartSection``EB1LoopAnimSection``Default`Section of the montage to begin from`CharacterAnimId``FName`—Animation ID from `DT_AnimCharacter` to play on the character`bForcePlayAnim``bool`falseIf true, overrides current animation regardless of conditions`Conditions``TArray<FB1PlayAnimCondition>`*(empty)*Optional conditions that must be met |
| `AnimStartSection``EB1LoopAnimSection``Default`Section of the montage to begin from`CharacterAnimId``FName`—Animation ID from `DT_AnimCharacter` to play on the character`bForcePlayAnim``bool`falseIf true, overrides current animation regardless of conditions`Conditions``TArray<FB1PlayAnimCondition>`*(empty)*Optional conditions that must be met |
| `CharacterAnimId``FName`—Animation ID from `DT_AnimCharacter` to play on the character`bForcePlayAnim``bool`falseIf true, overrides current animation regardless of conditions`Conditions``TArray<FB1PlayAnimCondition>`*(empty)*Optional conditions that must be met |
| `bForcePlayAnim``bool`falseIf true, overrides current animation regardless of conditions`Conditions``TArray<FB1PlayAnimCondition>`*(empty)*Optional conditions that must be met |
| `Conditions``TArray<FB1PlayAnimCondition>`*(empty)*Optional conditions that must be met |

## Behavior

| CallbackAction`NotifyBegin`Resolves the target, calls `B1AnimHelper::PlayAnimMontage()` to start the montage`NotifyEnd`Stops the montage on the target |
| --- |
| `NotifyBegin`Resolves the target, calls `B1AnimHelper::PlayAnimMontage()` to start the montage`NotifyEnd`Stops the montage on the target |
| `NotifyEnd`Stops the montage on the target |

## Related

- `B1AnimNotify_PlayAnim` — single-frame trigger variant (does not stop on end)
