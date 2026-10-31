---
document_id: "cbb40b21b9476a06acea7460e01979f7db15fe8381a891c1fd7fcecb36aa3a3e"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/04-animation"
title: "Animation"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "Vehicle"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:40+00:00"
content_sha256: "822110443505fc9209c4a59069c074faf14ccf7064df0e0ab0e2d09a137592e2"
chunk: 1
chunk_count: 3
page_type: "article"
route: "modkit/project/vehicle/04-animation"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

The **Animation** section holds two separate things, split into tabs:

| TabWhat it covers**Parts**Doors, trunks, wipers and windows. Motion authored as **curves**.**Passenger**What the Zoi in a seat does - the seated posture, plus driving, reversing and steering. Set by **animation Id**, not by curve. |
| --- |
| **Parts**Doors, trunks, wipers and windows. Motion authored as **curves**.**Passenger**What the Zoi in a seat does - the seated posture, plus driving, reversing and steering. Set by **animation Id**, not by curve. |
| **Passenger**What the Zoi in a seat does - the seated posture, plus driving, reversing and steering. Set by **animation Id**, not by curve. |

The two are unrelated systems that happen to share a section, so the rest of this page treats them separately.

> The section is hidden only when the vehicle has neither parts nor seats. A bicycle has no animatable parts but does have seats, so it opens on the **Passenger** tab.

---

### 01. How a part animation is put together

Each entry in the section is **one part in one state** - for example `DriverDoor` / `Open`. Behind it is a curve that describes where the part travels over time.

Three things matter before you touch anything:

| ConceptWhat it means for you**Delta from the closed pose**Motion is described as an offset from where the part sits when closed, not as absolute positions.**Open drives Close**Open and Close share one animation. Author **Open**; the part closes back along the exact reverse automatically.**Curves are the source of truth**Once a curve exists, it is what plays. The values you seeded it with no longer matter. |
| --- |
| **Delta from the closed pose**Motion is described as an offset from where the part sits when closed, not as absolute positions.**Open drives Close**Open and Close share one animation. Author **Open**; the part closes back along the exact reverse automatically.**Curves are the source of truth**Once a curve exists, it is what plays. The values you seeded it with no longer matter. |
| **Open drives Close**Open and Close share one animation. Author **Open**; the part closes back along the exact reverse automatically.**Curves are the source of truth**Once a curve exists, it is what plays. The values you seeded it with no longer matter. |
| **Curves are the source of truth**Once a curve exists, it is what plays. The values you seeded it with no longer matter. |

That second point is the one that saves the most time: you never author a Close state.

---

### 02. Authoring a motion

**Step 1 - seed it**

The first time you author a state, you give it a starting shape:

| FieldUnitNotes**Delta Location**cmWhere the part ends up relative to closed.**Delta Rotation**degreesHow far it swings.**Duration**secondsHow long the motion takes.**Smooth**on/offOn for eased motion, off for a constant-speed linear move. |
| --- |
| **Delta Location**cmWhere the part ends up relative to closed.**Delta Rotation**degreesHow far it swings.**Duration**secondsHow long the motion takes.**Smooth**on/offOn for eased motion, off for a constant-speed linear move. |
| **Delta Rotation**degreesHow far it swings.**Duration**secondsHow long the motion takes.**Smooth**on/offOn for eased motion, off for a constant-speed linear move. |
| **Duration**secondsHow long the motion takes.**Smooth**on/offOn for eased motion, off for a constant-speed linear move. |
| **Smooth**on/offOn for eased motion, off for a constant-speed linear move. |

A conventional door is mostly rotation; a sliding door or a lifting trunk is mostly location. A scissor door is both.

**Step 2 - shape it**

Once the curve exists, the seed fields disappear and an inline curve editor takes their place inside the slot's group. Drag keys there to shape the motion - add a slow start, a small bounce at the end, whatever the part needs.

The seed fields go away on purpose. Regenerating the curve from a delta would throw away the keys you just tuned.

**Step 3 - watch it**

Use the **Preview** button on the slot to play the motion in the editor. The preview reads the same curve the game does, so what you see is what the player gets.

---

### 03. Mesh Name

**Mesh Name** tells the animation which mesh to move. Most vehicles fill this in already, but some ship it empty - Casper's wipers are the usual example.

If a part refuses to move, check this field first. An animation with no mesh named has nothing to drive, and it fails quietly.

---

### 04. Working on the curve outside ModKit

The curve is a normal asset, so you can open it in the Unreal curve editor if you want more room to work.

Reopen the workspace afterwards. The panel reads the curve when it opens, so an edit made elsewhere while the workspace is open will not show up until you do.

---

### 05. Animation and the shared template

Part animation lives on the **vehicle template**, which several vehicles can share. To keep your change off the other vehicles, the workspace splits off a private template the first time you author a motion. You do not have to do anything - it happens on the first edit.

The practical consequence is that an animation edit makes your vehicle stop sharing template-level data with its siblings from that point on.

---

### 06. The Passenger tab

The other tab has nothing to do with curves. It sets **which animation the Zoi in a seat plays**, by pointing a field at an `AnimCharacter` row Id. Every seat gets a group of its own.

| FieldWhen it plays**Vehicle Posture Anim Id**Boarding, exiting and the seated idle. One Id covers all three, because the montage behind it carries Default / Loop / End sections.**Driving Anim Id**Moving forward.**Reverse Driving Anim Id**Reversing. Empty means the seated posture is kept.**Driver Left / Right Steering Anim Id**Turning. Empty means the seated posture is kept. |
| --- |
| **Vehicle Posture Anim Id**Boarding, exiting and the seated idle. One Id covers all three, because the montage behind it carries Default / Loop / End sections.**Driving Anim Id**Moving forward.**Reverse Driving Anim Id**Reversing. Empty means the seated posture is kept.**Driver Left / Right Steering Anim Id**Turning. Empty means the seated posture is kept. |
| **Driving Anim Id**Moving forward.**Reverse Driving Anim Id**Reversing. Empty means the seated posture is kept.**Driver Left / Right Steering Anim Id**Turning. Empty means the seated posture is kept. |
| **Reverse Driving Anim Id**Reversing. Empty means the seated posture is kept.**Driver Left / Right Steering Anim Id**Turning. Empty means the seated posture is kept. |
| **Driver Left / Right Steering Anim Id**Turning. Empty means the seated posture is kept. |

**Every seat has a posture Id. The moving Ids are read from the driver seat only**, and which of them exist differs by type:

| VehicleDrivingReverseSteeringBicycle, motorcycleyesyesyesBoatyes-yesCar--yes |
| --- |
| Bicycle, motorcycleyesyesyesBoatyes-yesCar--yes |
| Boatyes-yesCar--yes |
| Car--yes |

A car has no driving animation at all. That is not a gap in ModKit - the game does not define one.

---

### 07. Reusing an Id versus making your own

Each field is a dropdown of existing Ids plus two buttons.

| You wantDo thisA different animation that already existsPick it from the dropdown. Nothing else to do.Your own animation**Clone**, then swap the montage in the row that opens.To see what an Id actually contains**Edit**. |
| --- |
| A different animation that already existsPick it from the dropdown. Nothing else to do.Your own animation**Clone**, then swap the montage in the row that opens.To see what an Id actually contains**Edit**. |
| Your own animation**Clone**, then swap the montage in the row that opens.To see what an Id actually contains**Edit**. |
| To see what an Id actually contains**Edit**. |

**Clone is the important one.** The shipped data points several vehicles at one Id - the child bicycle's driver seat uses `Scooter_DriverSeat`, the same row the scooter uses - so editing that row in place changes every vehicle that shares it. Clone copies the row to an Id only your workspace uses and repoints the field at the copy.

To supply an animation of your own you still need a montage: matching skeleton, `Root` or `Head` playing component, and one entry per gender / growth-step combination. Clone gives you the row to hang it on, not the animation itself.

> The Ids are spread across several `AnimCharacter` files. Bikes, scooters and boats live in `AnimCharacter_Vehicle`; car seat postures live in `AnimCharacter_Posture` as `S_DriverSeat` and friends. The dropdown lists all of them, and **Edit** opens whichever file actually holds the row.

---

### 08. A field is empty but the vehicle animates anyway

Expected for now, and only for the four moving Ids. The shipped `ObjectBP` data was exported before they could travel in a mod patch, so they read blank even though the vehicle plays the animation in game. Vehicle Posture Anim Id is unaffected - it has always been exported.
