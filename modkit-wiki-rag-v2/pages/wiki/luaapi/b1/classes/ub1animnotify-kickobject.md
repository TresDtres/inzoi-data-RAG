---
document_id: "f9125ffbc851ac7b0a4082749055726ee925b20a8a836a26b0f4d6cbb7df710c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1animnotify-kickobject"
title: "UB1AnimNotify_KickObject"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:47+00:00"
content_sha256: "789b72ee23d4ad1e64422964d59921b9a2f865638d7b57a488434515b9cc4355"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1animnotify-kickobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Kicks Kickable objects within a forward capsule range in front of the character at the AnimNotify frame. Detection capsule placement: base point = bottom of the character CapsuleComponent (foot position); forward = the mesh Y axis projected onto the XY plane; center = base + forward * ForwardOffset + Up * UpOffset; the capsule axis (Z) is laid down toward the forward direction.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UAnimNotify` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UAnimNotify` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UAnimNotify` |
| Category`classes`Extends`UAnimNotify` |
| Extends`UAnimNotify` |

# Properties (7)

| NameTypeDescription`AngularSpeed``number`Rotation speed (degrees/s) about the Z axis. Applied as an angular-velocity delta ignoring mass.`CapsuleHalfHeight``number`Half-height of the target-detection capsule. Clamped to Radius even if set below CapsuleRadius.`CapsuleRadius``number`Radius of the target-detection capsule. If HalfHeight is below this value, it is clamped to Radius.`ForwardOffset``number`Capsule-center offset (cm) from the foot base point along the mesh Y axis (forward, normalized after removing Z).`LaunchSpeed``number`Horizontal speed (cm/s) of the kick impulse. Multiplied into the object->kick direction vector (Z removed).`UpOffset``number`Capsule-center offset (cm) upward from the foot base point.`UpwardSpeed``number`Upward speed (cm/s) of the kick impulse. A negative value makes a downward impulse. |
| --- |
| `AngularSpeed``number`Rotation speed (degrees/s) about the Z axis. Applied as an angular-velocity delta ignoring mass.`CapsuleHalfHeight``number`Half-height of the target-detection capsule. Clamped to Radius even if set below CapsuleRadius.`CapsuleRadius``number`Radius of the target-detection capsule. If HalfHeight is below this value, it is clamped to Radius.`ForwardOffset``number`Capsule-center offset (cm) from the foot base point along the mesh Y axis (forward, normalized after removing Z).`LaunchSpeed``number`Horizontal speed (cm/s) of the kick impulse. Multiplied into the object->kick direction vector (Z removed).`UpOffset``number`Capsule-center offset (cm) upward from the foot base point.`UpwardSpeed``number`Upward speed (cm/s) of the kick impulse. A negative value makes a downward impulse. |
| `CapsuleHalfHeight``number`Half-height of the target-detection capsule. Clamped to Radius even if set below CapsuleRadius.`CapsuleRadius``number`Radius of the target-detection capsule. If HalfHeight is below this value, it is clamped to Radius.`ForwardOffset``number`Capsule-center offset (cm) from the foot base point along the mesh Y axis (forward, normalized after removing Z).`LaunchSpeed``number`Horizontal speed (cm/s) of the kick impulse. Multiplied into the object->kick direction vector (Z removed).`UpOffset``number`Capsule-center offset (cm) upward from the foot base point.`UpwardSpeed``number`Upward speed (cm/s) of the kick impulse. A negative value makes a downward impulse. |
| `CapsuleRadius``number`Radius of the target-detection capsule. If HalfHeight is below this value, it is clamped to Radius.`ForwardOffset``number`Capsule-center offset (cm) from the foot base point along the mesh Y axis (forward, normalized after removing Z).`LaunchSpeed``number`Horizontal speed (cm/s) of the kick impulse. Multiplied into the object->kick direction vector (Z removed).`UpOffset``number`Capsule-center offset (cm) upward from the foot base point.`UpwardSpeed``number`Upward speed (cm/s) of the kick impulse. A negative value makes a downward impulse. |
| `ForwardOffset``number`Capsule-center offset (cm) from the foot base point along the mesh Y axis (forward, normalized after removing Z).`LaunchSpeed``number`Horizontal speed (cm/s) of the kick impulse. Multiplied into the object->kick direction vector (Z removed).`UpOffset``number`Capsule-center offset (cm) upward from the foot base point.`UpwardSpeed``number`Upward speed (cm/s) of the kick impulse. A negative value makes a downward impulse. |
| `LaunchSpeed``number`Horizontal speed (cm/s) of the kick impulse. Multiplied into the object->kick direction vector (Z removed).`UpOffset``number`Capsule-center offset (cm) upward from the foot base point.`UpwardSpeed``number`Upward speed (cm/s) of the kick impulse. A negative value makes a downward impulse. |
| `UpOffset``number`Capsule-center offset (cm) upward from the foot base point.`UpwardSpeed``number`Upward speed (cm/s) of the kick impulse. A negative value makes a downward impulse. |
| `UpwardSpeed``number`Upward speed (cm/s) of the kick impulse. A negative value makes a downward impulse. |
