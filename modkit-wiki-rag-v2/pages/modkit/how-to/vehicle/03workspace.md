---
document_id: "06a0b2759101637637d2b951d1a66d157b319920cc72c1dddcbfb78e6c556c99"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/vehicle/03workspace"
title: "Creating a Workspace"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Vehicle"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:33+00:00"
content_sha256: "42d9b9630a9a71b13ab21efc2a4f187e4ade682b600221de551e71adb8e1a5a2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/vehicle/03workspace"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

📂

# Creating a Workspace

Choose the vehicle you build on, then check which part slots you can edit.

## 1. Mod project and workspace

Vehicle modding starts as **mod project → workspace**. One workspace is one vehicle.

When you create a workspace you choose two things.

| ChoiceMeaning**Base vehicle**Which vehicle to bring in (`SUV01`, `ClassicScooter01`, …)**Mode**`Override` replaces the original vehicle; `Duplicate` adds a new one |
| --- |
| **Base vehicle**Which vehicle to bring in (`SUV01`, `ClassicScooter01`, …)**Mode**`Override` replaces the original vehicle; `Duplicate` adds a new one |
| **Mode**`Override` replaces the original vehicle; `Duplicate` adds a new one |

With `Override`, enabling the mod changes that vehicle in game. With `Duplicate`, the original stays and one more vehicle is added.

Which one to pick

If you only want to change the look, `Override` is simpler. To add a vehicle, pick `Duplicate` — and if it asks whether to duplicate the source assets too, answering `Yes` is the safer choice.

## 2. Read the part list first

Once the workspace is open, **check the part list before anything else.** Every later step uses the names you find here.

The list comes in four groups.

| GroupWhat it holds`slots`Slots a mesh can go into — frame, doors, wheels, handlebars`light_slots`Light slots — head lights, tail lights, indicators`seats`Seat slotsothersTrim you can reposition |
| --- |
| `slots`Slots a mesh can go into — frame, doors, wheels, handlebars`light_slots`Light slots — head lights, tail lights, indicators`seats`Seat slotsothersTrim you can reposition |
| `light_slots`Light slots — head lights, tail lights, indicators`seats`Seat slotsothersTrim you can reposition |
| `seats`Seat slotsothersTrim you can reposition |
| othersTrim you can reposition |

Part names differ per vehicle. `Passenger0Door` exists on a sedan but not on a motorcycle. **A slot that is not in the list cannot be created.**

## 3. Decide whether to split the template

A vehicle's functional numbers (bounds, seats, driving) live in a bundle called the **VehicleTemplate**, and several vehicles share it.

```
Base BP  (shared per type)   └ Template BP  (shared by vehicles of the same family)        └ Final vehicle BP  (the one actually registered)
```

If several vehicles share a template, editing those numbers **changes the other vehicles too.** If you do not want that, duplicate the template so it belongs only to you. Duplicating creates `<vehicle name>_NewTemplate`, and only your vehicle points at it.

When to duplicate

If you plan to change bounds, seat positions or driving, duplicating is the safer route. If you only change the look (meshes, colours, lights), you do not need to — those values belong to the single vehicle, not the template.

## Next

[Changing the look](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/vehicle/04mesh)
