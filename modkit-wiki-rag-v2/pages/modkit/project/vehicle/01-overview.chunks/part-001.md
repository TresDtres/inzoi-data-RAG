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
chunk: 1
chunk_count: 5
page_type: "article"
route: "modkit/project/vehicle/01-overview"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

### 01. What is a vehicle mod?

A **vehicle mod** changes one of the game's drivable vehicles - a car, motorcycle, bicycle or boat. You are not building a vehicle from nothing: you start from an existing one and replace the parts you care about.

Almost everything you touch is **data**, not assets. The vehicle keeps the shape the game shipped it with, and your mod ships a patch that says "for this vehicle, use this mesh, this colour, this seat position". That is why a reskin can be a few megabytes instead of a few hundred.

> **Mental model**
>
> *The game owns the vehicle's structure. Your mod owns the values that structure reads.*

---

### 02. Before you start

**What you need**

| ItemNotesA base vehicle to start fromEvery mod begins as an Override or Duplicate of a shipped vehicle.FBX meshesOnly if you are replacing body parts. One FBX per mesh slot you want to change.TexturesBase colour, normal and packed maps for any material you author.A square iconFor the representative colour. This becomes the in-game thumbnail. |
| --- |
| A base vehicle to start fromEvery mod begins as an Override or Duplicate of a shipped vehicle.FBX meshesOnly if you are replacing body parts. One FBX per mesh slot you want to change.TexturesBase colour, normal and packed maps for any material you author.A square iconFor the representative colour. This becomes the in-game thumbnail. |
| FBX meshesOnly if you are replacing body parts. One FBX per mesh slot you want to change.TexturesBase colour, normal and packed maps for any material you author.A square iconFor the representative colour. This becomes the in-game thumbnail. |
| TexturesBase colour, normal and packed maps for any material you author.A square iconFor the representative colour. This becomes the in-game thumbnail. |
| A square iconFor the representative colour. This becomes the in-game thumbnail. |

**What you do not need**

- You do not need the game's vehicle art. ModKit does not ship it, and you never have to edit the original vehicle.
- You do not need to touch bounds or handling for an appearance mod.

---

### 03. Override or Duplicate

When you create the workspace you pick one of two modes, and the choice is hard to reverse later.

| ModeWhat happensPick it when**Override**Your patch replaces the vanilla vehicle's data. Same Id, same showroom entry. Load the mod and that car changes.You are reskinning a vehicle that already exists.**Duplicate**A new vehicle Id is created next to the original. Both appear in game.You are adding a vehicle rather than replacing one. |
| --- |
| **Override**Your patch replaces the vanilla vehicle's data. Same Id, same showroom entry. Load the mod and that car changes.You are reskinning a vehicle that already exists.**Duplicate**A new vehicle Id is created next to the original. Both appear in game.You are adding a vehicle rather than replacing one. |
| **Duplicate**A new vehicle Id is created next to the original. Both appear in game.You are adding a vehicle rather than replacing one. |

Duplicate also gives you room to change shared data safely. Several vehicles share one **vehicle template** - dimensions, crash weight, audio and part animation all live there - so editing it can affect its siblings. The workspace notices this and splits off a private template the first time you change something template-level.

> ⚠️ An **Override** mod still shares its template with other vehicles. If you change audio or part animation on one, isolate it first, or the change lands on its siblings too. See [Bounds & Audio](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/07-bounds-and-audio).

---

### 04. The workspace sections

The sidebar groups the vehicle into sections. Which ones appear depends on the vehicle: a boat has no seats of the kind a car has, so it has no **Seats** section.

![Vehicle workspace layout](https://mod-docs.playinzoi.com/media/Modkit/Vehicle_02.png)

| #AreaWhat it is for1**Section sidebar**Jumps between the parts of the vehicle. Sections that do not apply are hidden.2**Properties panel**The values for the selected section. Rows with a **Pick** button can be selected in the viewport and moved with the gizmo.3**Preview viewport**The vehicle as ModKit can render it, plus placement markers for things it has no art for. |
| --- |
| 1**Section sidebar**Jumps between the parts of the vehicle. Sections that do not apply are hidden.2**Properties panel**The values for the selected section. Rows with a **Pick** button can be selected in the viewport and moved with the gizmo.3**Preview viewport**The vehicle as ModKit can render it, plus placement markers for things it has no art for. |
| 2**Properties panel**The values for the selected section. Rows with a **Pick** button can be selected in the viewport and moved with the gizmo.3**Preview viewport**The vehicle as ModKit can render it, plus placement markers for things it has no art for. |
| 3**Preview viewport**The vehicle as ModKit can render it, plus placement markers for things it has no art for. |
