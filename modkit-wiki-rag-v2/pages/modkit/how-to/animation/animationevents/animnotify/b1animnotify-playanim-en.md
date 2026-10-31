---
document_id: "877e7840c7ce753268ff1d9f2e0b6bc01670450809af3bd61d32e46db30961de"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotify/b1animnotify-playanim-en"
title: "B1AnimNotify_PlayAnim"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotify"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:25+00:00"
content_sha256: "e27c1454649b53f330ba2a628168faf416fd1da16aa02c64edd108eb27c29c27"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotify/b1animnotify-playanim-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_PlayAnim.h / .cpp` **Base Class:** `UAnimNotify`

## Purpose

Triggers a secondary animation on the interaction target game object or on the character itself at the notify frame. Supports conditional animation selection based on body fatness and garment state.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify** → `B1AnimNotify_PlayAnim`.
3. Configure the properties below in the **Details panel**.

## Editor Properties

| PropertyTypeDefaultDescription`GameObjectAnimId``FName`—Animation ID from the `DT_AnimGameObject` data table to play on the target game object`TargetGameObjectType``EB1TargetObjectType``InteractionTargetObject`Which game object to target`AnimStartSection``EB1LoopAnimSection``Default`Which section of the montage to begin playing from`CharacterAnimId``FName`—Animation ID from the `DT_AnimCharacter` data table to play on the character`bForcePlayAnim``bool`falseIf true, overrides the current animation even if conditions are not met`Conditions``TArray<FB1PlayAnimCondition>`*(empty)*Optional list of conditions that must be satisfied for the animation to play |
| --- |
| `GameObjectAnimId``FName`—Animation ID from the `DT_AnimGameObject` data table to play on the target game object`TargetGameObjectType``EB1TargetObjectType``InteractionTargetObject`Which game object to target`AnimStartSection``EB1LoopAnimSection``Default`Which section of the montage to begin playing from`CharacterAnimId``FName`—Animation ID from the `DT_AnimCharacter` data table to play on the character`bForcePlayAnim``bool`falseIf true, overrides the current animation even if conditions are not met`Conditions``TArray<FB1PlayAnimCondition>`*(empty)*Optional list of conditions that must be satisfied for the animation to play |
| `TargetGameObjectType``EB1TargetObjectType``InteractionTargetObject`Which game object to target`AnimStartSection``EB1LoopAnimSection``Default`Which section of the montage to begin playing from`CharacterAnimId``FName`—Animation ID from the `DT_AnimCharacter` data table to play on the character`bForcePlayAnim``bool`falseIf true, overrides the current animation even if conditions are not met`Conditions``TArray<FB1PlayAnimCondition>`*(empty)*Optional list of conditions that must be satisfied for the animation to play |
| `AnimStartSection``EB1LoopAnimSection``Default`Which section of the montage to begin playing from`CharacterAnimId``FName`—Animation ID from the `DT_AnimCharacter` data table to play on the character`bForcePlayAnim``bool`falseIf true, overrides the current animation even if conditions are not met`Conditions``TArray<FB1PlayAnimCondition>`*(empty)*Optional list of conditions that must be satisfied for the animation to play |
| `CharacterAnimId``FName`—Animation ID from the `DT_AnimCharacter` data table to play on the character`bForcePlayAnim``bool`falseIf true, overrides the current animation even if conditions are not met`Conditions``TArray<FB1PlayAnimCondition>`*(empty)*Optional list of conditions that must be satisfied for the animation to play |
| `bForcePlayAnim``bool`falseIf true, overrides the current animation even if conditions are not met`Conditions``TArray<FB1PlayAnimCondition>`*(empty)*Optional list of conditions that must be satisfied for the animation to play |
| `Conditions``TArray<FB1PlayAnimCondition>`*(empty)*Optional list of conditions that must be satisfied for the animation to play |

## Behavior

1. Resolves the target game object via `UB1InteractionComponent`.
2. Fills montage parameters using `B1AnimHelper::FillPlayAnimMontageParam()`, applying condition checks (body fatness, garment state).
3. Calls `B1AnimHelper::PlayAnimMontage()` to start the montage on the target.

## Related

- `B1AnimNotifyState_PlayAnim` — state variant that plays the animation for a duration then stops it
