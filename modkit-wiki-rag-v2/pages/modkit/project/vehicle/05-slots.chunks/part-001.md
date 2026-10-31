---
document_id: "88dc85d243a015c3574fcf48cc8fbe434d9773eb2bc60b381237ee19a802ed42"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/05-slots"
title: "Slots"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "Vehicle"]
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:41+00:00"
content_sha256: "4c09220169920c5c2e92cf169eb517f5bc47bd206025a4e762775c5a8876f8be"
chunk: 1
chunk_count: 2
page_type: "article"
route: "modkit/project/vehicle/05-slots"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Slots are the invisible points that tell the game where a Zoi stands, sits, or where an effect plays. They are data, so a change takes effect the next time the vehicle appears.

---

### 01. Seats (cars)

The **Seats** section has two groups.

**Seat Anchors** are the spots a Zoi walks up to when boarding. **Seat Positions** are where the body ends up once seated. Each position belongs to an anchor, so moving the anchor moves the sit position with it and the seated pose follows.

Both groups are **fixed size**. Seats come with the vehicle rather than from data you patch, so you can move a seat but not add one. Their names are read-only for the same reason: the game finds a seat by its exact name, and renaming one would quietly unhook it.

Cars, motorcycles and bicycles all carry their seats this way. A boat that models seating as carried chairs has none, so the section is hidden for it and its seating lives in [Objects](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/06-objects) instead.

**Vehicle Posture Anim Id** belongs to each seat, but you edit it in the [Animation](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/04-animation) section's Passenger tab, together with the driving and steering Ids. It is the animation the Zoi plays to board, to get out, and to sit - one Id covers all three because the montage behind it carries Default / Loop / End sections.

> The Id is shared in the shipped data - every car uses `S_DriverSeat` - so use the **Clone** button beside the field to get a copy of your own before changing what it points at.

**When to touch this**

Mostly after a body swap. If your new cabin is taller, lower or further back than the original, the Zoi will sit in the wrong place until you move the anchor.

---

### 02. Interaction and FX points

The **Points** section holds **Interaction & FX Points** and **Pivots**.

Interaction and FX points are one list, split by **Slot Type**:

| Slot TypeWhat it doesExample`Interaction`A spot a Zoi walks to in order to use part of the vehicle.Trunk, bonnet, wash, selfie`Fx`Spawns an effect at that point.Exhaust smoke on scooters and motorbikes |
| --- |
| `Interaction`A spot a Zoi walks to in order to use part of the vehicle.Trunk, bonnet, wash, selfie`Fx`Spawns an effect at that point.Exhaust smoke on scooters and motorbikes |
| `Fx`Spawns an effect at that point.Exhaust smoke on scooters and motorbikes |

These are pure data, so you can **add and remove them freely** using the buttons on each group. Each entry also has a **Pick** button that selects the component in the preview viewport, so you can position it with the gizmo instead of typing numbers. You can also click the part directly in the viewport to select it. The gizmo always works in local space here, so its arrows follow the slot's own rotation.

**The fields you get depend on the type.** Choosing `Interaction` shows the interaction rules; choosing `Fx` shows the effect settings instead.

| Slot TypeFields that apply`Interaction`Enable Only Interaction Tags, Slot Group Id, Body Age, Require Space, Slot Ownership Tag, Vehicle Posture Anim Id`Fx`FX Type and its effect asset, FX Cull Distance |
| --- |
| `Interaction`Enable Only Interaction Tags, Slot Group Id, Body Age, Require Space, Slot Ownership Tag, Vehicle Posture Anim Id`Fx`FX Type and its effect asset, FX Cull Distance |
| `Fx`FX Type and its effect asset, FX Cull Distance |

Editing an existing slot never changes its type on its own, so working on an FX slot will not silently turn it into an interaction point.

---

### 03. Naming

For interaction points and pivots the name is mostly for your benefit. What decides whether an interaction can use a point is **Enable Only Interaction Tags**, not the name. Leave the name blank and one is generated for you.

A name already in use by another component is rejected rather than overwriting it, so you cannot accidentally clobber a seat by reusing its name.

> ⚠️ **FX slots are the exception.** Whatever plays the effect asks for the slot by name, so renaming an FX slot means updating the trigger too. If an effect stops appearing after a rename, this is why.

---

### 04. Pivots

**Pivots** are anchors for vehicle audio and for the interaction widget that appears when a player clicks the vehicle. Transform only, and the list is fixed size.

Move the audio pivot if your engine sits somewhere unusual; move the widget pivot if the click prompt ends up inside the body.

---

### 05. Common issues and fixes

| IssueCauseFixZoi sits floating or sunk into the seatCabin geometry changedMove the seat anchor; the sit position followsNo **Seats** sectionThe vehicle is a boatExpected - see [Objects](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/06-objects)Trunk interaction happens in mid-airBody got longer or shorterMove the interaction pointExhaust smoke stopped appearingFX slot was renamedRestore the name, or update whatever triggers itAn interaction is not offered at a pointPoint has the wrong tagsCheck **Enable Only Interaction Tags**Added a slot and it did nothingSlot type or tags not setNew slots default to `Interaction` with no tags |
| --- |
| Zoi sits floating or sunk into the seatCabin geometry changedMove the seat anchor; the sit position followsNo **Seats** sectionThe vehicle is a boatExpected - see [Objects](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/06-objects)Trunk interaction happens in mid-airBody got longer or shorterMove the interaction pointExhaust smoke stopped appearingFX slot was renamedRestore the name, or update whatever triggers itAn interaction is not offered at a pointPoint has the wrong tagsCheck **Enable Only Interaction Tags**Added a slot and it did nothingSlot type or tags not setNew slots default to `Interaction` with no tags |
| No **Seats** sectionThe vehicle is a boatExpected - see [Objects](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/06-objects)Trunk interaction happens in mid-airBody got longer or shorterMove the interaction pointExhaust smoke stopped appearingFX slot was renamedRestore the name, or update whatever triggers itAn interaction is not offered at a pointPoint has the wrong tagsCheck **Enable Only Interaction Tags**Added a slot and it did nothingSlot type or tags not setNew slots default to `Interaction` with no tags |
| Trunk interaction happens in mid-airBody got longer or shorterMove the interaction pointExhaust smoke stopped appearingFX slot was renamedRestore the name, or update whatever triggers itAn interaction is not offered at a pointPoint has the wrong tagsCheck **Enable Only Interaction Tags**Added a slot and it did nothingSlot type or tags not setNew slots default to `Interaction` with no tags |
| Exhaust smoke stopped appearingFX slot was renamedRestore the name, or update whatever triggers itAn interaction is not offered at a pointPoint has the wrong tagsCheck **Enable Only Interaction Tags**Added a slot and it did nothingSlot type or tags not setNew slots default to `Interaction` with no tags |
| An interaction is not offered at a pointPoint has the wrong tagsCheck **Enable Only Interaction Tags**Added a slot and it did nothingSlot type or tags not setNew slots default to `Interaction` with no tags |
| Added a slot and it did nothingSlot type or tags not setNew slots default to `Interaction` with no tags |

---

### 06. Chapter summary

| ChecklistDoneDid I re-check seat positions after the body swap?✅Do new interaction points have the tags they need?✅Did I leave FX slot names alone, or update their triggers?✅Are the trunk and bonnet points still on the body?✅ |
| --- |
| Did I re-check seat positions after the body swap?✅Do new interaction points have the tags they need?✅Did I leave FX slot names alone, or update their triggers?✅Are the trunk and bonnet points still on the body?✅ |
| Do new interaction points have the tags they need?✅Did I leave FX slot names alone, or update their triggers?✅Are the trunk and bonnet points still on the body?✅ |
| Did I leave FX slot names alone, or update their triggers?✅Are the trunk and bonnet points still on the body?✅ |
| Are the trunk and bonnet points still on the body?✅ |

---

### 07. What the MCP tools cover
