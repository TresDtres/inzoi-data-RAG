---
document_id: "7231ccb40ed5a33d61984c3b5ff3e8a7827a994ed1c3fb5061924f6e58848f3b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/components/ub1destructioncomponent"
title: "UB1DestructionComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:38:36+00:00"
content_sha256: "4dc1b06926f97c7673027373ba825ead52db43f65c2577e7ecbc0490b2d2235f"
chunk: 3
chunk_count: 3
page_type: "article"
route: "wiki/luaapi/b1/components/ub1destructioncomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

on the component found here.`VelocityMultiplier``number`Force (impulse) multiplier applied to the destruction effect. Collision speed * this value controls how strongly fragments scatter.`bDestroyOnVehicleHit``boolean`Whether a vehicle (VehiclePawn) collision triggers destruction. true: destroyed after checking the speed condition on vehicle collision; false: a vehicle collision alone does not destroy it. |
| `TargetComponentName``string`Name of the owner actor's component to use as the destruction target. Usually a StaticMesh; the destruction effect/collision is processed based on the component found here.`VelocityMultiplier``number`Force (impulse) multiplier applied to the destruction effect. Collision speed * this value controls how strongly fragments scatter.`bDestroyOnVehicleHit``boolean`Whether a vehicle (VehiclePawn) collision triggers destruction. true: destroyed after checking the speed condition on vehicle collision; false: a vehicle collision alone does not destroy it. |
| `VelocityMultiplier``number`Force (impulse) multiplier applied to the destruction effect. Collision speed * this value controls how strongly fragments scatter.`bDestroyOnVehicleHit``boolean`Whether a vehicle (VehiclePawn) collision triggers destruction. true: destroyed after checking the speed condition on vehicle collision; false: a vehicle collision alone does not destroy it. |
| `bDestroyOnVehicleHit``boolean`Whether a vehicle (VehiclePawn) collision triggers destruction. true: destroyed after checking the speed condition on vehicle collision; false: a vehicle collision alone does not destroy it. |

# Functions (3)

| FunctionParametersReturnsDescription`OnResetSphereBeginOverlap`OverlappedComponent: `UPrimitiveComponent`, OtherActor: `AActor`, OtherComp: `UPrimitiveComponent`, OtherBodyIndex: `integer`, bFromSweep: `boolean`, SweepResult: `FHitResult``-`Handles the reset sphere's BeginOverlap.`OnResetSphereEndOverlap`OverlappedComponent: `UPrimitiveComponent`, OtherActor: `AActor`, OtherComp: `UPrimitiveComponent`, OtherBodyIndex: `integer``-`Handles the reset sphere's EndOverlap.`OnTargetBeginOverlap`OverlappedComponent: `UPrimitiveComponent`, OtherActor: `AActor`, OtherComp: `UPrimitiveComponent`, OtherBodyIndex: `integer`, bFromSweep: `boolean`, SweepResult: `FHitResult``-`Collision handling and destruction logic. |
| --- |
| `OnResetSphereBeginOverlap`OverlappedComponent: `UPrimitiveComponent`, OtherActor: `AActor`, OtherComp: `UPrimitiveComponent`, OtherBodyIndex: `integer`, bFromSweep: `boolean`, SweepResult: `FHitResult``-`Handles the reset sphere's BeginOverlap.`OnResetSphereEndOverlap`OverlappedComponent: `UPrimitiveComponent`, OtherActor: `AActor`, OtherComp: `UPrimitiveComponent`, OtherBodyIndex: `integer``-`Handles the reset sphere's EndOverlap.`OnTargetBeginOverlap`OverlappedComponent: `UPrimitiveComponent`, OtherActor: `AActor`, OtherComp: `UPrimitiveComponent`, OtherBodyIndex: `integer`, bFromSweep: `boolean`, SweepResult: `FHitResult``-`Collision handling and destruction logic. |
| `OnResetSphereEndOverlap`OverlappedComponent: `UPrimitiveComponent`, OtherActor: `AActor`, OtherComp: `UPrimitiveComponent`, OtherBodyIndex: `integer``-`Handles the reset sphere's EndOverlap.`OnTargetBeginOverlap`OverlappedComponent: `UPrimitiveComponent`, OtherActor: `AActor`, OtherComp: `UPrimitiveComponent`, OtherBodyIndex: `integer`, bFromSweep: `boolean`, SweepResult: `FHitResult``-`Collision handling and destruction logic. |
| `OnTargetBeginOverlap`OverlappedComponent: `UPrimitiveComponent`, OtherActor: `AActor`, OtherComp: `UPrimitiveComponent`, OtherBodyIndex: `integer`, bFromSweep: `boolean`, SweepResult: `FHitResult``-`Collision handling and destruction logic. |
