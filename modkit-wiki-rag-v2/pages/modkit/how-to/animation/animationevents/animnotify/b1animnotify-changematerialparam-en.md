---
document_id: "a8ef54fef14291d985f065d16c5622e7407cd35305ad2f8ffddaf0b7e6763d9d"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotify/b1animnotify-changematerialparam-en"
title: "B1AnimNotify_ChangeMaterialParam"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotify"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:23+00:00"
content_sha256: "b8cfc60a425cfda2d826dc6f7fe23a3a7feaf5b4b8605da0987d0462c9abb941"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotify/b1animnotify-changematerialparam-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_ChangeMaterialParam.h / .cpp` **Base Class:** `UAnimNotify`

## Purpose

Changes a material parameter (scalar, color, or texture) on a target object's mesh at the notify frame.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify** → `B1AnimNotify_ChangeMaterialParam`.
3. Configure the properties below in the **Details panel**.

## Editor Properties

| PropertyTypeDefaultDescription`Target``EB1BaseObject``Target`Which object's material to modify: `Self` or `Target` (interaction target)`MaterialSlotName``FName`—Slot name of the material to modify on the mesh`ParameterName``FName`—Name of the material parameter to change`ParameterType``EB1MaterialParamType``Scalar`One of `Scalar`, `Color`, or `Texture``ScalarValue``float`0.0Value to set when `ParameterType == Scalar``ColorValue``FLinearColor`—Value to set when `ParameterType == Color``TextureValue``TSoftObjectPtr<UTexture>`—Value to set when `ParameterType == Texture` |
| --- |
| `Target``EB1BaseObject``Target`Which object's material to modify: `Self` or `Target` (interaction target)`MaterialSlotName``FName`—Slot name of the material to modify on the mesh`ParameterName``FName`—Name of the material parameter to change`ParameterType``EB1MaterialParamType``Scalar`One of `Scalar`, `Color`, or `Texture``ScalarValue``float`0.0Value to set when `ParameterType == Scalar``ColorValue``FLinearColor`—Value to set when `ParameterType == Color``TextureValue``TSoftObjectPtr<UTexture>`—Value to set when `ParameterType == Texture` |
| `MaterialSlotName``FName`—Slot name of the material to modify on the mesh`ParameterName``FName`—Name of the material parameter to change`ParameterType``EB1MaterialParamType``Scalar`One of `Scalar`, `Color`, or `Texture``ScalarValue``float`0.0Value to set when `ParameterType == Scalar``ColorValue``FLinearColor`—Value to set when `ParameterType == Color``TextureValue``TSoftObjectPtr<UTexture>`—Value to set when `ParameterType == Texture` |
| `ParameterName``FName`—Name of the material parameter to change`ParameterType``EB1MaterialParamType``Scalar`One of `Scalar`, `Color`, or `Texture``ScalarValue``float`0.0Value to set when `ParameterType == Scalar``ColorValue``FLinearColor`—Value to set when `ParameterType == Color``TextureValue``TSoftObjectPtr<UTexture>`—Value to set when `ParameterType == Texture` |
| `ParameterType``EB1MaterialParamType``Scalar`One of `Scalar`, `Color`, or `Texture``ScalarValue``float`0.0Value to set when `ParameterType == Scalar``ColorValue``FLinearColor`—Value to set when `ParameterType == Color``TextureValue``TSoftObjectPtr<UTexture>`—Value to set when `ParameterType == Texture` |
| `ScalarValue``float`0.0Value to set when `ParameterType == Scalar``ColorValue``FLinearColor`—Value to set when `ParameterType == Color``TextureValue``TSoftObjectPtr<UTexture>`—Value to set when `ParameterType == Texture` |
| `ColorValue``FLinearColor`—Value to set when `ParameterType == Color``TextureValue``TSoftObjectPtr<UTexture>`—Value to set when `ParameterType == Texture` |
| `TextureValue``TSoftObjectPtr<UTexture>`—Value to set when `ParameterType == Texture` |

> `ScalarValue`, `ColorValue`, and `TextureValue` use `EditCondition` — only the field matching `ParameterType` is editable in the Details panel.

## Behavior

At the notify frame, finds the Dynamic Material Instance on the specified slot of the target object's mesh, then calls:

- `SetScalarParameterValue` when `ParameterType == Scalar`
- `SetVectorParameterValue` when `ParameterType == Color`
- `SetTextureParameterValue` when `ParameterType == Texture`
