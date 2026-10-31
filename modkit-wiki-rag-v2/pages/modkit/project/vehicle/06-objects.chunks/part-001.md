---
document_id: "946125f426b38b7bb8bf55ded740778b1ef928643375ca047c620f4d0451d454"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/06-objects"
title: "Objects"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "Vehicle"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:41+00:00"
content_sha256: "702418b6674a2306cb99ded1f63945055a02085be68d5e6c5387098cbc550ac6"
chunk: 1
chunk_count: 2
page_type: "article"
route: "modkit/project/vehicle/06-objects"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

The **Objects** section covers things the vehicle spawns and carries - boat chairs, deck lighting, a storage box - and, for boats, the points a Zoi steps off onto.

These are not mesh slots. Each entry says "spawn this object and attach it here", so unlike meshes you can add and remove them.

---

### 01. Cars and boats seat people differently

This is the single most important thing to understand before editing a boat, and it explains why the **Seats** section disappears for them.

![Car and boat seating systems compared](https://mod-docs.playinzoi.com/media/Modkit/Vehicle_01.png)

A **car** seat is part of the vehicle itself. It arrives with the vehicle, and where a Zoi sits is built in.

A **boat** seat is a **separate object** the boat carries. The chair has its own definition, its own mesh and its own sit spot; the boat only records which ride slot that chair serves.

The practical consequences:

| CarBoatAdd a seatNot possible herePossible, within limitsSeat lives inSeats sectionObjects section, **Seat Objects**Sit positionBuilt into the vehicleComes from the chair objectDisembark pointNot usedObjects section, **Disembark Points** |
| --- |
| Add a seatNot possible herePossible, within limitsSeat lives inSeats sectionObjects section, **Seat Objects**Sit positionBuilt into the vehicleComes from the chair objectDisembark pointNot usedObjects section, **Disembark Points** |
| Seat lives inSeats sectionObjects section, **Seat Objects**Sit positionBuilt into the vehicleComes from the chair objectDisembark pointNot usedObjects section, **Disembark Points** |
| Sit positionBuilt into the vehicleComes from the chair objectDisembark pointNot usedObjects section, **Disembark Points** |
| Disembark pointNot usedObjects section, **Disembark Points** |

---

### 02. Seat Objects

Entries whose **Vehicle Seat** is set. They are the boat's chairs.

The group is **fixed size**, and both `Component Name` and `Vehicle Seat` are read-only, because the game matches a chair to its seat by exactly those two values.

Seat objects are hidden on vehicles that have real seats - a car never treats a carried object as a seat, so the entry would be inert data.

**Adding a seat to a boat** takes two changes, and doing only one fails:

1. A chair object bound to a free ride slot.
2. Room in the vehicle template's seat count.

Without the count, the slot does not exist and nobody can board. Without the chair, there is nothing to sit on. The ceiling is seven - a driver plus six passengers.

| BoatSeats usedSpareSail boat70Speed boat25 |
| --- |
| Sail boat70Speed boat25 |
| Speed boat25 |

The seat count itself is not editable in this workspace. It lives in the vehicle template, as [MaxSeatNum](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1vehicleassetdescription).

---

### 03. Owned Objects

Everything whose **Vehicle Seat** is not set: lighting, storage boxes, decoration. Add, remove and rename these freely.

`Vehicle Seat` is hidden here on purpose, so a plain object can never be mistaken for a seat. Nothing in the game looks a plain carried object up by name, so call it whatever helps you - or leave `Component Name` blank and one is generated. A name already used by another component is rejected rather than overwriting it.

**Object ID** must name a row in the [Object](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/object) table. If it does not, the game skips that object without complaining and you are left wondering why nothing appeared. Because that failure is silent, turning on **Show Placement Markers** also checks every id and tells you which ones would fail.

The check confirms the row exists. It cannot promise the object will spawn - an object can still bail for reasons of its own - but a bad id is by far the most common cause.

**Positions are relative to the vehicle root**, not to whatever the object sits near. The panel, the preview and the game all use that same frame, so a value you set here is the value the game uses.

---

### 04. What the preview can and cannot show

ModKit does not ship the game's object art, so it cannot always show you the real thing. Where it can, it builds the object out of its meshes and attaches it; where it cannot, it drops a position marker instead.

| What you are placingWhat the preview showsAn object from your own modThe real thingAn ordinary game object, such as a chairThe real thingThe boat's own built-in chairsA marker |
| --- |
| An object from your own modThe real thingAn ordinary game object, such as a chairThe real thingThe boat's own built-in chairsA marker |
| An ordinary game object, such as a chairThe real thingThe boat's own built-in chairsA marker |
| The boat's own built-in chairsA marker |

When a slot falls back to a marker, the toast tells you why, so you can tell "the id is wrong" apart from "ModKit does not have that art".

Every entry has a **Pick** button that selects the component in the preview viewport, so you can place it with the gizmo rather than typing coordinates.

---

### 05. Disembark Points

Where a Zoi is placed after stepping off. Boats only - nothing else reads them - so the group is hidden on other vehicle types.

Only the location matters. Names are ignored, so call them whatever helps you, or leave the field blank for a generated one. Add and remove freely.

Put them somewhere a Zoi can plausibly stand: on the deck near an edge, not inside the hull and not out over the water.

---

### 06. Common issues and fixes

| IssueCauseFixObject never appears in game**Object ID** does not existTurn on **Show Placement Markers** to have every id checkedObject appears in the wrong placePosition measured from a part rather than the vehicle rootValues here are root-relativeObject shows as a marker in the previewModKit has no art for itExpected for built-in boat chairs; it still spawns in gameAdded a chair but nobody can sitSeat count has no roomSeat count lives in the vehicle templateNo **Seat Objects** or **Disembark Points** groupThe vehicle is not a boatExpected - both are boat-onlyRenamed an entry and it was ignoredName already used by another componentPick a different name, or leave it blank |
| --- |
| Object never appears in game**Object ID** does not existTurn on **Show Placement Markers** to have every id checkedObject appears in the wrong placePosition measured from a part rather than the vehicle rootValues here are root-relativeObject shows as a marker in the previewModKit has no art for itExpected for built-in boat chairs; it still spawns in gameAdded a chair but nobody can sitSeat count has no roomSeat count lives in the vehicle templateNo **Seat Objects** or **Disembark Points** groupThe vehicle is not a boatExpected - both are boat-onlyRenamed an entry and it was ignoredName already used by another componentPick a different name, or leave it blank |
| Object appears in the wrong placePosition measured from a part rather than the vehicle rootValues here are root-relativeObject shows as a marker in the previewModKit has no art for itExpected for built-in boat chairs; it still spawns in gameAdded a chair but nobody can sitSeat count has no roomSeat count lives in the vehicle templateNo **Seat Objects** or **Disembark Points** groupThe vehicle is not a boatExpected - both are boat-onlyRenamed an entry and it was ignoredName already used by another componentPick a different name, or leave it blank |
| Object shows as a marker in the previewModKit has no art for itExpected for built-in boat chairs; it still spawns in gameAdded a chair but nobody can sitSeat count has no roomSeat count lives in the vehicle templateNo **Seat Objects** or **Disembark Points** groupThe vehicle is not a boatExpected - both are boat-onlyRenamed an entry and it was ignoredName already used by another componentPick a different name, or leave it blank |
| Added a chair but nobody can sitSeat count has no roomSeat count lives in the vehicle templateNo **Seat Objects** or **Disembark Points** groupThe vehicle is not a boatExpected - both are boat-onlyRenamed an entry and it was ignoredName already used by another componentPick a different name, or leave it blank |
| No **Seat Objects** or **Disembark Points** groupThe vehicle is not a boatExpected - both are boat-onlyRenamed an entry and it was ignoredName already used by another componentPick a different name, or leave it blank |
| Renamed an entry and it was ignoredName already used by another componentPick a different name, or leave it blank |

---

### 07. Chapter summary
