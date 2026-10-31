---
document_id: "a68cb03baa5b6d7abd5c254918b8469d09624ef65c572cdf3434c4fdb57e56c6"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/vehicle/02screens"
title: "Exploring the Screens"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Vehicle"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:33+00:00"
content_sha256: "9c8df6a279fbef915ce979f7f760e5bc920b6219eaf8384764dda96f804ec303"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/vehicle/02screens"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

🖥️

# Exploring the Screens

Using a workspace built from the `Bicycle01` bicycle, we go down the left-hand menu from top to bottom.

When you open a workspace, the top of the panel tells you what it was built from.

```
Bicycle01Modding Id: Bicycle01_2bee57Duplicated from: VEHICLE/Bicycle01
```

`Modding Id` is the name of this workspace, and `Duplicated from` is the game vehicle it came from. The left-hand menu has four groups.

| GroupWhat's inside**General**Representative colour, icon, price**Appearance**Meshes · Paint · Lights · Objects**Slots**Seats · Points**Physics**Bounds · Driving**Audio**Audio |
| --- |
| **General**Representative colour, icon, price**Appearance**Meshes · Paint · Lights · Objects**Slots**Seats · Points**Physics**Bounds · Driving**Audio**Audio |
| **Appearance**Meshes · Paint · Lights · Objects**Slots**Seats · Points**Physics**Bounds · Driving**Audio**Audio |
| **Slots**Seats · Points**Physics**Bounds · Driving**Audio**Audio |
| **Physics**Bounds · Driving**Audio**Audio |
| **Audio**Audio |

---

## General — colour and price

![General](https://mod-docs.playinzoi.com/media/Modkit/Vehicle/Vehicle_01.jpg)

This is where you decide how the vehicle appears in the game's list.

- **Static Mesh Asset** — the merged mesh (LOD) used at a distance. It may be empty.
- **Representative Color** — a single colour. `Color Id` is its name, `Color` the value.
- **Colored Icon** — the **vehicle thumbnail** for that colour. This is what the Dream Car app shows.
- **Purchasable Level · Required Skill Level · Price** — when it can be bought, and for how much.

`Restore from Included Assets` reverts your changes back to the original asset.

Bicycle01 costs 600

`Price` is 600 and `Purchasable Level` is `All`, so it can be bought from the start.

---

## Meshes — swapping parts

![Meshes](https://mod-docs.playinzoi.com/media/Modkit/Vehicle/Vehicle_02.jpg)

Part names are drawn over the vehicle. Press `Pick` in the list below to choose a mesh. The bicycle has eight slots.

| SlotWhat it is`Body` · `Body_Tr`Frame (`_Tr` is the transparent part)`HandleMesh`Handlebars`Wheel_Front` · `Wheel_Rear`Front and rear wheels`Crank_Fr`Crank`Pedal_FL` · `Pedal_FR`Left and right pedals |
| --- |
| `Body` · `Body_Tr`Frame (`_Tr` is the transparent part)`HandleMesh`Handlebars`Wheel_Front` · `Wheel_Rear`Front and rear wheels`Crank_Fr`Crank`Pedal_FL` · `Pedal_FR`Left and right pedals |
| `HandleMesh`Handlebars`Wheel_Front` · `Wheel_Rear`Front and rear wheels`Crank_Fr`Crank`Pedal_FL` · `Pedal_FR`Left and right pedals |
| `Wheel_Front` · `Wheel_Rear`Front and rear wheels`Crank_Fr`Crank`Pedal_FL` · `Pedal_FR`Left and right pedals |
| `Crank_Fr`Crank`Pedal_FL` · `Pedal_FR`Left and right pedals |
| `Pedal_FL` · `Pedal_FR`Left and right pedals |

The tabs above (`All (8)` · `Body (2)` · `Handle (1)` …) filter the list by kind. `Preview In-Game Suspension Rest` previews the vehicle with the suspension settled as it is in game.

Slot counts differ per vehicle

A bicycle has eight; a car adds doors, windows, trunk and side mirrors. **A slot that is not in the list cannot be created.**

---

## Paint — paint options

![Paint](https://mod-docs.playinzoi.com/media/Modkit/Vehicle/Vehicle_03.jpg)

`Add Variant` adds a colour. Bicycle01 ships with eight.

```
Mint · White · Dark Grey · Carbon BlackBlue · Green · Champagne · Orange
```

**Materials** below lists the materials the colour is applied to. `MI CarPaint` takes paint; `MI Prop` is trim that ignores it. The bicycle uses four materials such as `MI_VH_Bicycle01_01_Pawn`, plus one for glass.

`Reset Color Preview` returns the preview to the original colour.

---

## Lights — lighting

![Lights](https://mod-docs.playinzoi.com/media/Modkit/Vehicle/Vehicle_04.jpg)

The bicycle has one light, a `SpotLight`, with three values.

| ValueBicycle01Meaning`Light Color`whiteColour of the light`Intensity`0.15Brightness`Attenuation Radius`1000.0How far the light reaches (cm) |
| --- |
| `Light Color`whiteColour of the light`Intensity`0.15Brightness`Attenuation Radius`1000.0How far the light reaches (cm) |
| `Intensity`0.15Brightness`Attenuation Radius`1000.0How far the light reaches (cm) |
| `Attenuation Radius`1000.0How far the light reaches (cm) |

Cars have more slots — head lights, tail lights and indicators are separate.

---

## Objects — objects the vehicle carries

![Objects](https://mod-docs.playinzoi.com/media/Modkit/Vehicle/Vehicle_05.jpg)

This attaches **game objects** that appear together with the vehicle. It points at entries in the object table rather than at meshes.

- **Seat Object** — an object bound to a seat, like the chairs on a boat. You can move it, but you cannot rename or delete it.
- Everything else can be added, removed and renamed freely.

`Show Placement Markers` turns on markers showing where things sit. The bicycle carries no objects, so the list is empty.

---

## Seats — seating

![Seats](https://mod-docs.playinzoi.com/media/Modkit/Vehicle/Vehicle_06.jpg)

Seats come in two layers, and the names are easy to mix up.

| LayerWhat it does**Seat Anchors** (`InteractionSlot_…`)The **approach point** a Zoi walks to before sitting**Seat Positions** (`SeatPosition_…`)Where the Zoi **actually sits**, in pose |
| --- |
| **Seat Anchors** (`InteractionSlot_…`)The **approach point** a Zoi walks to before sitting**Seat Positions** (`SeatPosition_…`)Where the Zoi **actually sits**, in pose |
| **Seat Positions** (`SeatPosition_…`)Where the Zoi **actually sits**, in pose |

The bicycle has two: driver and passenger.

```
InteractionSlot_Driver      (0, -75, 0)SeatPosition_Driver         (0,  75, 0)   rotation -90°InteractionSlot_Passenger0  (-50, 30, 0)SeatPosition_Passenger0     (30,   0, 0)
```

**Moving an anchor moves the seat position that belongs to it.** If you lowered the body, lower the seats too, or the Zoi will sit in mid-air.

---

## Points — interaction points

![Points](https://mod-docs.playinzoi.com/media/Modkit/Vehicle/Vehicle_07.jpg)

Where a Zoi stands to do something to the vehicle. The bicycle has five.

| PointWhen it's used`InteractionSlot_Pose`Posing beside the vehicle`InteractionSlot_CleanVehicle0` · `1`Washing it (left and right)`InteractionSlot_Bonnet`Working on the front`InteractionSlot_Selfie`Taking a selfie |
| --- |
| `InteractionSlot_Pose`Posing beside the vehicle`InteractionSlot_CleanVehicle0` · `1`Washing it (left and right)`InteractionSlot_Bonnet`Working on the front`InteractionSlot_Selfie`Taking a selfie |
| `InteractionSlot_CleanVehicle0` · `1`Washing it (left and right)`InteractionSlot_Bonnet`Working on the front`InteractionSlot_Selfie`Taking a selfie |
| `InteractionSlot_Bonnet`Working on the front`InteractionSlot_Selfie`Taking a selfie |
| `InteractionSlot_Selfie`Taking a selfie |

If you changed the body size much, move these points too — otherwise the Zoi ends up washing the vehicle from a distance.

---

## Bounds — the outer box

![Bounds](https://mod-docs.playinzoi.com/media/Modkit/Vehicle/Vehicle_08.jpg)

The box used for collision and parking spaces. Bicycle01 looks like this.

```
Dimensions        136.97 × 44.92 × 202.97  (cm)Box Origin Offset -14.09 ×  0.00 ×  -3.61
```

`Show Bounds Box` draws the box so you can see it.

Always re-fit this after a mesh swap

This value is **not recalculated when you change the mesh.** If the body grew but the box did not, the vehicle will not fit a parking space; if the box is too big, it will not get through narrow gaps.

---

## Driving — handling

![Driving](https://mod-docs.playinzoi.com/media/Modkit/Vehicle/Vehicle_09.jpg)

For most vehicles this screen is empty.

```
This vehicle has no editable driving parameters.
```

Values like top speed and acceleration live on the vehicle's movement component, and few vehicles expose them to mods. If you see this line, **that vehicle's handling cannot be edited.** Look, colour, lights and audio still can.

## Audio — sound

![Audio](https://mod-docs.playinzoi.com/media/Modkit/Vehicle/Vehicle_10.jpg)

There are three sound slots.

| SlotWhen it plays`Main Sound`While driving (engine)`Spawn Sound`When the vehicle appears`Despawn Sound`When the vehicle disappears |
| --- |
| `Main Sound`While driving (engine)`Spawn Sound`When the vehicle appears`Despawn Sound`When the vehicle disappears |
| `Spawn Sound`When the vehicle appears`Despawn Sound`When the vehicle disappears |
| `Despawn Sound`When the vehicle disappears |

You pick a MetaSound asset. Bicycle01 uses `Vehicle_Driveable_Bicycle` as its engine sound and leaves spawn and despawn empty.

## Related pages

[Vehicle modding overview](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/vehicle/01overview)[Vehicle assets](https://mod-docs.playinzoi.com/docs/modkit-docs/resources/provided-unreal-assets/vehicle)
