---
document_id: "cda1940669c23b990f39b1ef043e4eb5c6d559a226d1bac42d3e77bca6277a58"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-playswimeffect-en"
title: "B1AnimNotifyState_PlaySwimEffect"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotifyState"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:28+00:00"
content_sha256: "fe364a8bb4d2489428c8c7995181b1c29ec41922b72caa2443b71ae1ce565868"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-playswimeffect-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotifyState_PlaySwimEffect.h / .cpp` **Base Class:** `UAnimNotifyState_TimedNiagaraEffect` *(Niagara plugin)*

## Purpose

Plays a Niagara swim effect (water splash / ripple) while the character is swimming. Automatically stops if the character exits the water mid-animation. Selects different effect templates for ocean vs. fresh water.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_PlaySwimEffect`.
3. Assign `Template` (fresh water) and `TemplateOcean`, set the socket and duration.

## Editor Properties

| PropertyTypeDefaultDescription`Template``UNiagaraSystem*`—Niagara effect for fresh water (inherited from base class)`TemplateOcean``UNiagaraSystem*`—Niagara effect for ocean water`SocketName``FName`—Socket to attach the effect to (inherited)`LocationOffset``FVector`(0,0,0)Position offset (inherited)`RotationOffset``FRotator`(0,0,0)Rotation offset (inherited)`bDestroyAtEnd``bool`—Destroy the Niagara component when the notify ends (inherited) |
| --- |
| `Template``UNiagaraSystem*`—Niagara effect for fresh water (inherited from base class)`TemplateOcean``UNiagaraSystem*`—Niagara effect for ocean water`SocketName``FName`—Socket to attach the effect to (inherited)`LocationOffset``FVector`(0,0,0)Position offset (inherited)`RotationOffset``FRotator`(0,0,0)Rotation offset (inherited)`bDestroyAtEnd``bool`—Destroy the Niagara component when the notify ends (inherited) |
| `TemplateOcean``UNiagaraSystem*`—Niagara effect for ocean water`SocketName``FName`—Socket to attach the effect to (inherited)`LocationOffset``FVector`(0,0,0)Position offset (inherited)`RotationOffset``FRotator`(0,0,0)Rotation offset (inherited)`bDestroyAtEnd``bool`—Destroy the Niagara component when the notify ends (inherited) |
| `SocketName``FName`—Socket to attach the effect to (inherited)`LocationOffset``FVector`(0,0,0)Position offset (inherited)`RotationOffset``FRotator`(0,0,0)Rotation offset (inherited)`bDestroyAtEnd``bool`—Destroy the Niagara component when the notify ends (inherited) |
| `LocationOffset``FVector`(0,0,0)Position offset (inherited)`RotationOffset``FRotator`(0,0,0)Rotation offset (inherited)`bDestroyAtEnd``bool`—Destroy the Niagara component when the notify ends (inherited) |
| `RotationOffset``FRotator`(0,0,0)Rotation offset (inherited)`bDestroyAtEnd``bool`—Destroy the Niagara component when the notify ends (inherited) |
| `bDestroyAtEnd``bool`—Destroy the Niagara component when the notify ends (inherited) |

## Behavior

| CallbackAction`SpawnEffect (Begin)`Checks `UB1TerritoryManager::IsInWaterTerritory()` to select between `Template` and `TemplateOcean`, then spawns and attaches the Niagara system`NotifyTick`Checks `character->GetPostureType() == EB1PostureType::Swim`; stops the effect early if the character is no longer swimming`NotifyEnd`Stops and destroys the Niagara component |
| --- |
| `SpawnEffect (Begin)`Checks `UB1TerritoryManager::IsInWaterTerritory()` to select between `Template` and `TemplateOcean`, then spawns and attaches the Niagara system`NotifyTick`Checks `character->GetPostureType() == EB1PostureType::Swim`; stops the effect early if the character is no longer swimming`NotifyEnd`Stops and destroys the Niagara component |
| `NotifyTick`Checks `character->GetPostureType() == EB1PostureType::Swim`; stops the effect early if the character is no longer swimming`NotifyEnd`Stops and destroys the Niagara component |
| `NotifyEnd`Stops and destroys the Niagara component |
