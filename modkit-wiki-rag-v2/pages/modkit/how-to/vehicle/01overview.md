---
document_id: "3169b627eef66ea7a0ccd5e1dc3f2eeb5f3e24cf0881d5ce41f22b2f0a0fe326"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/vehicle/01overview"
title: "Vehicle Modding Overview"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Vehicle"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:33+00:00"
content_sha256: "27cbd3b4f2a0236c69feecc3b86048e99ec9e95c41da9ecab4dcce2e8ef3ebd5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/vehicle/01overview"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

🚗

# Vehicle Modding Overview

Take a vehicle that already exists in the game and change its look, colours, handling and sound.

## What you can do

Vehicle modding in the ModKit works by **picking an existing vehicle and editing it**. You do not build a vehicle from scratch — you pull one of the game's vehicles into a workspace and layer your changes on top of it.

| What you changeWhat it affectsMesh swapThe shape of parts — body, doors, wheels, handlebarsExtra coloursPaint options (an sRGB value such as `FF8800`)LightsColour, brightness and reach of head and tail lightsSeat positionsWhere a Zoi sits, and the pose that goes with itBoundsThe outer box used for collision and parkingDrivingTop speed, acceleration, braking, steering (unlocked vehicles only)AudioEngine sound, spawn and despawn sounds (MetaSounds)Part motionHow doors, trunk, windows and wipers open |
| --- |
| Mesh swapThe shape of parts — body, doors, wheels, handlebarsExtra coloursPaint options (an sRGB value such as `FF8800`)LightsColour, brightness and reach of head and tail lightsSeat positionsWhere a Zoi sits, and the pose that goes with itBoundsThe outer box used for collision and parkingDrivingTop speed, acceleration, braking, steering (unlocked vehicles only)AudioEngine sound, spawn and despawn sounds (MetaSounds)Part motionHow doors, trunk, windows and wipers open |
| Extra coloursPaint options (an sRGB value such as `FF8800`)LightsColour, brightness and reach of head and tail lightsSeat positionsWhere a Zoi sits, and the pose that goes with itBoundsThe outer box used for collision and parkingDrivingTop speed, acceleration, braking, steering (unlocked vehicles only)AudioEngine sound, spawn and despawn sounds (MetaSounds)Part motionHow doors, trunk, windows and wipers open |
| LightsColour, brightness and reach of head and tail lightsSeat positionsWhere a Zoi sits, and the pose that goes with itBoundsThe outer box used for collision and parkingDrivingTop speed, acceleration, braking, steering (unlocked vehicles only)AudioEngine sound, spawn and despawn sounds (MetaSounds)Part motionHow doors, trunk, windows and wipers open |
| Seat positionsWhere a Zoi sits, and the pose that goes with itBoundsThe outer box used for collision and parkingDrivingTop speed, acceleration, braking, steering (unlocked vehicles only)AudioEngine sound, spawn and despawn sounds (MetaSounds)Part motionHow doors, trunk, windows and wipers open |
| BoundsThe outer box used for collision and parkingDrivingTop speed, acceleration, braking, steering (unlocked vehicles only)AudioEngine sound, spawn and despawn sounds (MetaSounds)Part motionHow doors, trunk, windows and wipers open |
| DrivingTop speed, acceleration, braking, steering (unlocked vehicles only)AudioEngine sound, spawn and despawn sounds (MetaSounds)Part motionHow doors, trunk, windows and wipers open |
| AudioEngine sound, spawn and despawn sounds (MetaSounds)Part motionHow doors, trunk, windows and wipers open |
| Part motionHow doors, trunk, windows and wipers open |

How many vehicles are in the game

The data holds 63 vehicles, but **only 27 can be bought in game** — 12 cars, 14 motorcycles and 1 bicycle.

The other 36 have no purchase level, so they have not shipped. **None of the 8 ships appear at all.** You can filter the list by the `Release` column on the [Vehicle assets page](https://mod-docs.playinzoi.com/docs/modkit-docs/resources/provided-unreal-assets/vehicle).

## What you cannot do

Vehicles have more moving parts than objects or clothing. The following belong to the game's own structure and cannot be changed from a mod.

- **Changing the vehicle type** — you cannot turn a car into a motorcycle. Each type has its own Base Blueprint, and movement and enter/exit logic hang off it.
- **Adding a part that isn't there** — you cannot add doors to a motorcycle that never had them. Part slots are fixed per vehicle.
- **New interactions** — creating a brand-new interaction such as washing or repairing is outside vehicle modding.

## The order of work

```
1. Create a vehicle workspace     pick which vehicle to build on2. Check the part list            see which slots you can edit3. Import FBX → swap meshes       change the look4. Colours · lights · seats5. Re-fit the bounds              always redo this after a mesh swap6. Driving · audio · part motion7. Check it in game
```

From step 3 on, the order is up to you — but **do step 2 first**. Without the part names you cannot start anything else.

## What to prepare

**Mesh** — recognisable at a minimum. A car needs frame, handlebar/steering wheel, doors, windows, trunk and wheels; a motorcycle or bicycle needs body, handlebars and wheels.

**Axes** — relative to the vehicle, **+Y faces forward** and **+X faces the left-hand door**. If this is off, wheel rotation, seating and IK all break.

**Pivots** — every part needs its pivot in the right place: a door at the real hinge, a handlebar at its centre axis.

**Materials** — fewer is better. A usual split:

```
exterior · interior · glass · number plate · headlight
```

**Glass** — make it single-sided so it does not disappear when seen from inside. LOD meshes use an opaque material.

## Related pages

[Vehicle assets](https://mod-docs.playinzoi.com/docs/modkit-docs/resources/provided-unreal-assets/vehicle)[Getting Started](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/getting-started/)
