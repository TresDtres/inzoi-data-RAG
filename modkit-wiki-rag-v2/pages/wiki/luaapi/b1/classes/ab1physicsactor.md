---
document_id: "226e78de400f771781e4ffdd270f18b507dbe18b69f584b9674477f44f20cc42"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ab1physicsactor"
title: "AB1PhysicsActor"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:38+00:00"
content_sha256: "b0caf1365ec10681911d356d3a87a3de5056eb9ca4a0786dc0ca8f736cc9f29d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ab1physicsactor"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- An actor that flows 'idle -> active on collision -> restore after a while'. The Pawn capsule only detects via overlap to wake the physics simulation. When an actual blocking collision with the body/vehicle then occurs, OnHit applies an impulse and starts the restore timer. The restore timer is paused during the destruction effect (UB1DestructionComponent) and restarted when it ends.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`AActor` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`AActor` |
| EnvironmentB1 - PresentationCategory`classes`Extends`AActor` |
| Category`classes`Extends`AActor` |
| Extends`AActor` |

# Properties (2)

| NameTypeDescription`ResetDelayTime``number`Restore wait time (default 10 seconds).`StaticMesh``any`Mesh subject to physics simulation. |
| --- |
| `ResetDelayTime``number`Restore wait time (default 10 seconds).`StaticMesh``any`Mesh subject to physics simulation. |
| `StaticMesh``any`Mesh subject to physics simulation. |

# Functions (3)

| FunctionParametersReturnsDescription`OnBeginOverlap`OverlappedComponent: `UPrimitiveComponent`, OtherActor: `AActor`, OtherComponent: `UPrimitiveComponent`, OtherBodyIndex: `integer`, bFromSweep: `boolean`, SweepResult: `FHitResult``-`Overlap event handler.`OnHit`HitComponent: `UPrimitiveComponent`, OtherActor: `AActor`, OtherComponent: `UPrimitiveComponent`, NormalImpulse: `FVector`, Hit: `FHitResult``-`Hit event handler.`ResetToInitialTransform``-``-`Restores to the initial location. |
| --- |
| `OnBeginOverlap`OverlappedComponent: `UPrimitiveComponent`, OtherActor: `AActor`, OtherComponent: `UPrimitiveComponent`, OtherBodyIndex: `integer`, bFromSweep: `boolean`, SweepResult: `FHitResult``-`Overlap event handler.`OnHit`HitComponent: `UPrimitiveComponent`, OtherActor: `AActor`, OtherComponent: `UPrimitiveComponent`, NormalImpulse: `FVector`, Hit: `FHitResult``-`Hit event handler.`ResetToInitialTransform``-``-`Restores to the initial location. |
| `OnHit`HitComponent: `UPrimitiveComponent`, OtherActor: `AActor`, OtherComponent: `UPrimitiveComponent`, NormalImpulse: `FVector`, Hit: `FHitResult``-`Hit event handler.`ResetToInitialTransform``-``-`Restores to the initial location. |
| `ResetToInitialTransform``-``-`Restores to the initial location. |
