---
document_id: "23e9034c8856019d796cb7f462e85073ab28c27585a8995dc13edb7d5acf4345"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/07-bounds-and-audio"
title: "Bounds and Audio"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "Vehicle"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:41+00:00"
content_sha256: "717382d7887f7314a8a5e715446d031de51a91c31e15e8636fd4fcc5459712f9"
chunk: 1
chunk_count: 2
page_type: "article"
route: "modkit/project/vehicle/07-bounds-and-audio"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Two small sections that are easy to forget, plus how to get the mod into the game and check it.

---

### 01. Bounds

**Bounds** is the box the game uses to decide where the vehicle fits: a **size** and a **box origin offset**, both in centimetres.

It does **not** resize itself when you swap meshes. A mesh swap changes what is drawn; the box stays as the original vehicle described it. So a reskin that makes the body noticeably longer, wider or taller needs a manual pass here, or the vehicle will park with a gap around it, clip into things, or refuse to fit somewhere it visually should.

**Setting it**

1. Open **Bounds**.
2. Click **Show Bounds Box** to draw the current box in the preview.
3. Adjust size until the box wraps your body.
4. Use the origin offset to re-centre it if your mesh pivot is not in the middle of the vehicle.

Leaving it alone is fine when your reskin is roughly the original silhouette - a different-looking sedan of the same size does not need new bounds.

---

### 02. Audio

The **Audio** section sets three sounds:

| SoundWhen it plays**Main**The engine, while driving.**Spawn**When the vehicle appears.**Despawn**When it is put away. |
| --- |
| **Main**The engine, while driving.**Spawn**When the vehicle appears.**Despawn**When it is put away. |
| **Spawn**When the vehicle appears.**Despawn**When it is put away. |
| **Despawn**When it is put away. |

Each is a MetaSound asset.

> ⚠️ **Audio is shared by the vehicle template, not by the vehicle.** Vehicles that share a template share their audio, so changing the engine sound on one can change it for its siblings.

**Duplicate mods handle this for you.** A new vehicle starts out sharing its source's template, and the first time you change a sound it automatically gets its own. Your engine note never leaks back onto the vehicle you copied.

For an **Override** mod that wants its own audio, split the template off deliberately before you start.

> **Splitting the template also registers it for purchase.** The game looks up a vehicle's purchase rules by template, so a dedicated template needs its own entry or the vehicle cannot be bought - the shop button greys out with an unrelated message. The workspace creates that entry for you, copying the original's age requirement and sounds.

**A sound showing as `None` is not always empty.** If the asset is not one ModKit ships, the field displays `None` while the original path is still there underneath. Setting a different sound replaces it; leaving it alone keeps what was there. You will not lose a sound by opening the section and closing it again.

---

### 03. Saving, packaging and testing

Editing the workspace changes data in the project. Two more steps get it into the game.

1. **Save** the project.
2. **Package** it. This builds the mod and writes it out where the game can load it.
3. Launch the game and check the vehicle.

**What to check in game, in order**

| CheckWhy this oneIt appears in the Dream Car app with a thumbnailCatches a missing representative-colour iconIt looks right parked up closeThe mesh slotsIt still looks right as traffic drives pastCatches an unreplaced distant meshA Zoi can board and sits correctlySeats after a body swapThe trunk and other interactions are reachableInteraction points after a body swapDoors and wipers moveAnimation, and **Mesh Name** in particularIt parks without odd gaps or clippingBounds |
| --- |
| It appears in the Dream Car app with a thumbnailCatches a missing representative-colour iconIt looks right parked up closeThe mesh slotsIt still looks right as traffic drives pastCatches an unreplaced distant meshA Zoi can board and sits correctlySeats after a body swapThe trunk and other interactions are reachableInteraction points after a body swapDoors and wipers moveAnimation, and **Mesh Name** in particularIt parks without odd gaps or clippingBounds |
| It looks right parked up closeThe mesh slotsIt still looks right as traffic drives pastCatches an unreplaced distant meshA Zoi can board and sits correctlySeats after a body swapThe trunk and other interactions are reachableInteraction points after a body swapDoors and wipers moveAnimation, and **Mesh Name** in particularIt parks without odd gaps or clippingBounds |
| It still looks right as traffic drives pastCatches an unreplaced distant meshA Zoi can board and sits correctlySeats after a body swapThe trunk and other interactions are reachableInteraction points after a body swapDoors and wipers moveAnimation, and **Mesh Name** in particularIt parks without odd gaps or clippingBounds |
| A Zoi can board and sits correctlySeats after a body swapThe trunk and other interactions are reachableInteraction points after a body swapDoors and wipers moveAnimation, and **Mesh Name** in particularIt parks without odd gaps or clippingBounds |
| The trunk and other interactions are reachableInteraction points after a body swapDoors and wipers moveAnimation, and **Mesh Name** in particularIt parks without odd gaps or clippingBounds |
| Doors and wipers moveAnimation, and **Mesh Name** in particularIt parks without odd gaps or clippingBounds |
| It parks without odd gaps or clippingBounds |

If something is wrong, the section pages each have a *Common issues and fixes* table for that area.

---

### 04. Common issues and fixes

| IssueCauseFixVehicle parks with a large gap around itBounds still describe the original bodySet size in **Bounds**Vehicle clips into walls or other objectsBounds smaller than the new bodySameBounds box is off to one sideMesh pivot is not centredUse the box origin offsetEngine sound changed on a different vehicleTemplate shared with that vehicleSplit off a private templateSound shows `None` after opening the sectionAsset not shipped with ModKitDisplay only - the original is intactChanges are not in the gameNot packaged since the last editSave, then package again |
| --- |
| Vehicle parks with a large gap around itBounds still describe the original bodySet size in **Bounds**Vehicle clips into walls or other objectsBounds smaller than the new bodySameBounds box is off to one sideMesh pivot is not centredUse the box origin offsetEngine sound changed on a different vehicleTemplate shared with that vehicleSplit off a private templateSound shows `None` after opening the sectionAsset not shipped with ModKitDisplay only - the original is intactChanges are not in the gameNot packaged since the last editSave, then package again |
| Vehicle clips into walls or other objectsBounds smaller than the new bodySameBounds box is off to one sideMesh pivot is not centredUse the box origin offsetEngine sound changed on a different vehicleTemplate shared with that vehicleSplit off a private templateSound shows `None` after opening the sectionAsset not shipped with ModKitDisplay only - the original is intactChanges are not in the gameNot packaged since the last editSave, then package again |
| Bounds box is off to one sideMesh pivot is not centredUse the box origin offsetEngine sound changed on a different vehicleTemplate shared with that vehicleSplit off a private templateSound shows `None` after opening the sectionAsset not shipped with ModKitDisplay only - the original is intactChanges are not in the gameNot packaged since the last editSave, then package again |
| Engine sound changed on a different vehicleTemplate shared with that vehicleSplit off a private templateSound shows `None` after opening the sectionAsset not shipped with ModKitDisplay only - the original is intactChanges are not in the gameNot packaged since the last editSave, then package again |
| Sound shows `None` after opening the sectionAsset not shipped with ModKitDisplay only - the original is intactChanges are not in the gameNot packaged since the last editSave, then package again |
| Changes are not in the gameNot packaged since the last editSave, then package again |

---

### 05. Chapter summary

| ChecklistDoneDoes the bounds box wrap the new body?✅If I changed audio, is the template private to this vehicle?✅Did I package after the last edit?✅Did I check the vehicle in traffic, not just parked?✅ |
| --- |
| Does the bounds box wrap the new body?✅If I changed audio, is the template private to this vehicle?✅Did I package after the last edit?✅Did I check the vehicle in traffic, not just parked?✅ |
| If I changed audio, is the template private to this vehicle?✅Did I package after the last edit?✅Did I check the vehicle in traffic, not just parked?✅ |
| Did I package after the last edit?✅Did I check the vehicle in traffic, not just parked?✅ |
| Did I check the vehicle in traffic, not just parked?✅ |

---

### 06. What the MCP tools cover
