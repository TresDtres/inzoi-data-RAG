---
document_id: "f158f63de7067967cd18e50b1f68a5f4920f3b165d4d4282e19409c8ff562bb5"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/01-overview"
title: "Vehicle"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "Vehicle"]
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:41+00:00"
content_sha256: "3470804ed59d4e56157fab23d3a78ee5dbd38be7a7b5a888f13937a6b78bbd01"
chunk: 5
chunk_count: 5
page_type: "article"
route: "modkit/project/vehicle/01-overview"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

| ValueWhat it does`MaxForwardVelocity`Top speed going forward.`MaxReverseVelocity`Top speed in reverse.`Acceleration`How quickly it picks up speed forward.`ReverseAcceleration`Same, in reverse.`BrakeDeceleration`How hard the brake slows it.`NaturalDeceleration`Coasting slowdown with no input.`SlideDecelertaion`Slowdown while sliding.`MaxWheelAngle`Total steering lock. 120 means 60 each way.`MaxWheelRotateTime`Seconds to steer from centre to full lock.`MaxWheelReturnRotateTime`Seconds for steering to spring back to centre.`SteeringSensitivity`Steering responsiveness multiplier. |
| --- |
| `MaxForwardVelocity`Top speed going forward.`MaxReverseVelocity`Top speed in reverse.`Acceleration`How quickly it picks up speed forward.`ReverseAcceleration`Same, in reverse.`BrakeDeceleration`How hard the brake slows it.`NaturalDeceleration`Coasting slowdown with no input.`SlideDecelertaion`Slowdown while sliding.`MaxWheelAngle`Total steering lock. 120 means 60 each way.`MaxWheelRotateTime`Seconds to steer from centre to full lock.`MaxWheelReturnRotateTime`Seconds for steering to spring back to centre.`SteeringSensitivity`Steering responsiveness multiplier. |
| `MaxReverseVelocity`Top speed in reverse.`Acceleration`How quickly it picks up speed forward.`ReverseAcceleration`Same, in reverse.`BrakeDeceleration`How hard the brake slows it.`NaturalDeceleration`Coasting slowdown with no input.`SlideDecelertaion`Slowdown while sliding.`MaxWheelAngle`Total steering lock. 120 means 60 each way.`MaxWheelRotateTime`Seconds to steer from centre to full lock.`MaxWheelReturnRotateTime`Seconds for steering to spring back to centre.`SteeringSensitivity`Steering responsiveness multiplier. |
| `Acceleration`How quickly it picks up speed forward.`ReverseAcceleration`Same, in reverse.`BrakeDeceleration`How hard the brake slows it.`NaturalDeceleration`Coasting slowdown with no input.`SlideDecelertaion`Slowdown while sliding.`MaxWheelAngle`Total steering lock. 120 means 60 each way.`MaxWheelRotateTime`Seconds to steer from centre to full lock.`MaxWheelReturnRotateTime`Seconds for steering to spring back to centre.`SteeringSensitivity`Steering responsiveness multiplier. |
| `ReverseAcceleration`Same, in reverse.`BrakeDeceleration`How hard the brake slows it.`NaturalDeceleration`Coasting slowdown with no input.`SlideDecelertaion`Slowdown while sliding.`MaxWheelAngle`Total steering lock. 120 means 60 each way.`MaxWheelRotateTime`Seconds to steer from centre to full lock.`MaxWheelReturnRotateTime`Seconds for steering to spring back to centre.`SteeringSensitivity`Steering responsiveness multiplier. |
| `BrakeDeceleration`How hard the brake slows it.`NaturalDeceleration`Coasting slowdown with no input.`SlideDecelertaion`Slowdown while sliding.`MaxWheelAngle`Total steering lock. 120 means 60 each way.`MaxWheelRotateTime`Seconds to steer from centre to full lock.`MaxWheelReturnRotateTime`Seconds for steering to spring back to centre.`SteeringSensitivity`Steering responsiveness multiplier. |
| `NaturalDeceleration`Coasting slowdown with no input.`SlideDecelertaion`Slowdown while sliding.`MaxWheelAngle`Total steering lock. 120 means 60 each way.`MaxWheelRotateTime`Seconds to steer from centre to full lock.`MaxWheelReturnRotateTime`Seconds for steering to spring back to centre.`SteeringSensitivity`Steering responsiveness multiplier. |
| `SlideDecelertaion`Slowdown while sliding.`MaxWheelAngle`Total steering lock. 120 means 60 each way.`MaxWheelRotateTime`Seconds to steer from centre to full lock.`MaxWheelReturnRotateTime`Seconds for steering to spring back to centre.`SteeringSensitivity`Steering responsiveness multiplier. |
| `MaxWheelAngle`Total steering lock. 120 means 60 each way.`MaxWheelRotateTime`Seconds to steer from centre to full lock.`MaxWheelReturnRotateTime`Seconds for steering to spring back to centre.`SteeringSensitivity`Steering responsiveness multiplier. |
| `MaxWheelRotateTime`Seconds to steer from centre to full lock.`MaxWheelReturnRotateTime`Seconds for steering to spring back to centre.`SteeringSensitivity`Steering responsiveness multiplier. |
| `MaxWheelReturnRotateTime`Seconds for steering to spring back to centre.`SteeringSensitivity`Steering responsiveness multiplier. |
| `SteeringSensitivity`Steering responsiveness multiplier. |

**Motorcycle and bicycle only**

| ValueWhat it does`ReverseSteeringScale`Steering-angle multiplier while reversing. 1.0 matches forward.`MaxLeanAngle`How far the bike leans into a corner.`LeanSpeed`How quickly it leans over. |
| --- |
| `ReverseSteeringScale`Steering-angle multiplier while reversing. 1.0 matches forward.`MaxLeanAngle`How far the bike leans into a corner.`LeanSpeed`How quickly it leans over. |
| `MaxLeanAngle`How far the bike leans into a corner.`LeanSpeed`How quickly it leans over. |
| `LeanSpeed`How quickly it leans over. |

**Boat only**

| ValueWhat it does`MaxBankingAngle`How far the hull rolls into a turn.`MaxPitchingAngle`How far the bow rises and falls.`BankingSpeed`How quickly the hull rolls. |
| --- |
| `MaxBankingAngle`How far the hull rolls into a turn.`MaxPitchingAngle`How far the bow rises and falls.`BankingSpeed`How quickly the hull rolls. |
| `MaxPitchingAngle`How far the bow rises and falls.`BankingSpeed`How quickly the hull rolls. |
| `BankingSpeed`How quickly the hull rolls. |

There is no table of default values here, because there is no such thing as a useful default: every vehicle in the game ships its own tuning and they differ widely. A Casper steers at `MaxWheelAngle` 120 while a scooter uses 90, and that scooter tops out at 850 where the car reaches 1500. Read what your vehicle currently has in the panel and adjust from there, rather than from a number you saw in a guide.

> ⚠️ Two limits to keep in mind while tuning.
>
> - **Cars and motorcycles** ignore these values when the player turns **Advanced Driving Mode** on: the game switches to a physics path with one shared tuning per vehicle type. Bicycles and boats always use your values.
> - The traffic that fills the city runs on a separate movement system and is never affected.

A few settings exist in the vehicle data but are never read by the game, so the **Driving** section hides them: the handbrake pair, the steering-deceleration pair, and the slide-angle offset. If you see them mentioned elsewhere, they have no effect in the current build.

---

### 08. Chapter summary

| ChecklistDoneDo I know whether I want Override or Duplicate?✅Do I have an FBX per slot I intend to replace?✅Do I have a square icon for the representative colour?✅Am I aware that Bounds and the distant mesh are manual steps?✅ |
| --- |
| Do I know whether I want Override or Duplicate?✅Do I have an FBX per slot I intend to replace?✅Do I have a square icon for the representative colour?✅Am I aware that Bounds and the distant mesh are manual steps?✅ |
| Do I have an FBX per slot I intend to replace?✅Do I have a square icon for the representative colour?✅Am I aware that Bounds and the distant mesh are manual steps?✅ |
| Do I have a square icon for the representative colour?✅Am I aware that Bounds and the distant mesh are manual steps?✅ |
| Am I aware that Bounds and the distant mesh are manual steps?✅ |

---

### 09. Where to go next

1. **[General](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/02-general)** - price, purchase conditions, thumbnail, distant mesh.
2. **[Appearance](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/03-appearance)** - meshes, materials, paint and lights.
3. **[Animation](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/04-animation)** - door, trunk and wiper motion.
4. **[Slots](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/05-slots)** - seats, sit positions, interaction and FX points.
5. **[Objects](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/06-objects)** - carried objects, boat seating, disembark points.
6. **[Bounds & Audio](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/07-bounds-and-audio)** - the collision box, engine sound, packaging.

If you would rather drive the workspace from a script or an AI assistant, every section here also has an MCP tool; start from `modkit_list_vehicle_components`.

---

### 10. Data reference

The workspace writes into these tables for you. You do not need to edit them by hand, but the field descriptions are the quickest way to find out what a value actually means.

- [Vehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/vehicle) - the vehicle itself: name, price, colours, purchase settings.
- [VehicleTemplate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/vehicletemplate) - the shared template: dimensions, seat count, part animation.
- [ObjectBP](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectbp) - the component data: meshes, transforms, lights, slots.
