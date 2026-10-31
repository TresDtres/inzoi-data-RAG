---
document_id: "c806b53fa574fe39a774849d401f0504808dee698a8a6d5ca8fa1076a4370125"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/vehicle/05drive"
title: "Audio and Part Motion"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Vehicle"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:33+00:00"
content_sha256: "28d70f73e0d74f4751aadce5db3f2d5a879bf6afe1f0632785706c061dc06a59"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/vehicle/05drive"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

🏁

# Audio and Part Motion

Work on the engine sound and how parts open. Driving can only be touched on vehicles that expose it.

## 1. Driving usually cannot be edited

Open `Physics > Driving` and you will normally see this.

```
This vehicle has no editable driving parameters.
```

Values like top speed and acceleration do not live in the `Vehicle` or `VehicleTemplate` tables — they sit on the vehicle's **movement component**, and few vehicles expose it to mods. If you see this line, that vehicle's handling cannot be touched.

For a vehicle that does show values, change top speed, acceleration, braking and steering a little at a time and drive it. Change several at once and you will not know which one caused what.

What you can do instead

Look, colour, lights, seats, audio and part motion are all independent of driving.

## 2. Adding sound

A vehicle has three sound slots. Each takes the path of a MetaSound (MetaSoundSource) asset.

| SlotWhen it playsEngineWhile drivingSpawnWhen the vehicle appearsDespawnWhen the vehicle disappears |
| --- |
| EngineWhile drivingSpawnWhen the vehicle appearsDespawnWhen the vehicle disappears |
| SpawnWhen the vehicle appearsDespawnWhen the vehicle disappears |
| DespawnWhen the vehicle disappears |

Audio attaches to the vehicle asset directly, not to a data table.

If you do not have sounds yet

You can leave them empty, but putting in even a short sound is better — an unconnected slot is easy to lose track of later.

## 3. Part motion

You can define how doors, the trunk, windows and wipers **open**. Closing is generated automatically by playing the opening motion backwards.

You give how far the part moves from its closed position, as a position (cm) and a rotation (degrees).

```
Driver door  →  Yaw -65°    (opens around the hinge)Trunk        →  Pitch 70°Window       →  Z -40cm     (slides down)
```

Whether a part supports this is fixed per part. A part that is not in the list cannot be given a motion.

## Related pages

[Vehicle modding overview](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/vehicle/01overview)[Vehicle assets](https://mod-docs.playinzoi.com/docs/modkit-docs/resources/provided-unreal-assets/vehicle)
