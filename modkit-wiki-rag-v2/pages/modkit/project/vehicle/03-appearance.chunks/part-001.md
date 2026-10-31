---
document_id: "91774c8d4a63ff0e5183acadf068a1702d1ff9eedbee4beeb6da35d7c05003e4"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/03-appearance"
title: "Appearance"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "Vehicle"]
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:41+00:00"
content_sha256: "52db1187177c0ebeefd2ac0a475095657326a2118204bd50c6254367bac85156"
chunk: 1
chunk_count: 2
page_type: "article"
route: "modkit/project/vehicle/03-appearance"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

Meshes, the materials on them, the paint the player picks, and the lamps. This is where most of a reskin happens.

---

### 01. Mesh slots

The **Meshes** section lists every mesh slot the vehicle has. A slot is a fixed hole in the vehicle's structure - you replace what fills it, you do not add new ones.

Slots are grouped by the prefix before the first underscore, so `Door_Driver` and `Door_Passenger0` both sit under **Door**. Use the diagram at the top of the section to jump to a body area. Switching to another group clears the part you had picked and selects the whole vehicle.

**Hierarchy**, pinned at the top of the panel, shows how the slots are attached to each other, so you can tell which part a mirror or a handle hangs off. It stays in place while the list below scrolls. Pick a node to select it in the preview and scroll the list to it; pick the vehicle at the top of the tree to select the whole vehicle and return to the top of the list. Selecting the whole vehicle in the Details panel does the same. A node marked `@SocketName` is attached to a socket rather than directly to its parent.

The list under the tree nests the same way: a child slot sits indented under its parent, in its own colour, labelled `in <parent>`. Selecting a part in the preview highlights it in the tree and scrolls the list to it, switching to its group if another group is shown.

For each slot you can set the mesh asset and its relative transform. Leaving a mesh empty does **not** bring the original back - it writes `None`, which removes that part in game. Use it to delete a part on purpose, not to undo a change.

> **Base meshes look empty here, and that is expected.**
>
> ModKit does not ship the game's vehicle art. Untouched slots therefore show as **None** in the panel and render nothing in the preview, but they still use the original mesh in game. Import your own mesh to see something.

---

### 02. Preparing an FBX

The rules are the same as for [Build objects](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/build/01-build), so that guide is the fuller reference. The short version:

| ItemSettingScale1 unit = 1 cmNaniteEnabledMesh typeStatic meshOriginMatch the slot's original pivot, or expect to correct it with the slot transform |
| --- |
| Scale1 unit = 1 cmNaniteEnabledMesh typeStatic meshOriginMatch the slot's original pivot, or expect to correct it with the slot transform |
| NaniteEnabledMesh typeStatic meshOriginMatch the slot's original pivot, or expect to correct it with the slot transform |
| Mesh typeStatic meshOriginMatch the slot's original pivot, or expect to correct it with the slot transform |
| OriginMatch the slot's original pivot, or expect to correct it with the slot transform |

> ⚠️ Exporters from Blender, Maya and 3ds Max often drop UV2 unless you explicitly include it.

**Importing**

1. Open **Meshes** and find the slot you want to change.
2. Click **Import** on the slot's mesh field and pick your FBX.
    - If the FBX contains more than 200,000 vertices, ModKit shows its mesh statistics and asks whether to continue. The triangle count is an estimate from the FBX polygon data.
3. Check the import settings - Nanite on, materials reassigned by hand rather than auto-generated.
4. The slot now points at your asset and renders in the preview.

You can also import first and select the asset afterwards, which is easier when one FBX feeds several slots.

---

### 03. Fitting the new mesh

A mesh swap changes what is drawn and nothing else. Three things stay where they were and may need a manual pass:

| WhatWhy it mattersWhere to fix it**Bounds**The placement and collision box does not resize itself.[Bounds & Audio](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/07-bounds-and-audio)**The distant mesh**The simplified body is separate from the slots.[General](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/02-general)**Slots and seats**Seats, interaction points and carried objects sit where the original body put them.[Slots](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/05-slots), [Objects](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/06-objects) |
| --- |
| **Bounds**The placement and collision box does not resize itself.[Bounds & Audio](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/07-bounds-and-audio)**The distant mesh**The simplified body is separate from the slots.[General](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/02-general)**Slots and seats**Seats, interaction points and carried objects sit where the original body put them.[Slots](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/05-slots), [Objects](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/06-objects) |
| **The distant mesh**The simplified body is separate from the slots.[General](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/02-general)**Slots and seats**Seats, interaction points and carried objects sit where the original body put them.[Slots](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/05-slots), [Objects](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/06-objects) |
| **Slots and seats**Seats, interaction points and carried objects sit where the original body put them.[Slots](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/05-slots), [Objects](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/06-objects) |

Small visual mismatches are normal and not worth chasing: wheel spin speed against a new wheel radius, a head light sitting slightly off its housing. Note them in your mod description instead.

---

### 04. Materials

The **Materials** section, right under **Meshes**, has buttons to create materials for the vehicle. Two types are available:

| TypeBased onUse it for**CarPaint**The car-paint master materialBody panels. This is the material that receives the player's chosen paint colour.**Prop**The shared prop masterEverything that is not painted: trim, glass housings, interior. |
| --- |
| **CarPaint**The car-paint master materialBody panels. This is the material that receives the player's chosen paint colour.**Prop**The shared prop masterEverything that is not painted: trim, glass housings, interior. |
| **Prop**The shared prop masterEverything that is not painted: trim, glass housings, interior. |

Created materials land in your plugin's `Materials` folder. **Open Folder** below the buttons shows that folder in the Content Browser.

Below the buttons, every mesh slot that has a mesh is listed with the material in each of its material slots. A slot marked **Override** uses its own material instead of the mesh's, so changing the material inside the mesh asset does not show there. Pick another material to override a slot, click the reset arrow to go back to the mesh's material, or click the edit icon to open the material in its editor. When the material belongs to your mod, **Textures** under the slot lets you import or reimport its textures.

Texture conventions - which maps go in which channel, compression settings, sRGB, virtual texture streaming - are shared with Build objects and documented in the [Build guide](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/build/01-build).

> **Assigning a material to a slot is done in the panel**, in **Materials**. The generic "assign material" tooling does not apply to vehicles.

---

### 05. Paint colours

Paint is a list of colours the player chooses between. Each entry is an sRGB hex value plus an optional icon.

- The **first** colour is the **Representative Colour**. It is edited in **General**, doubles as the thumbnail, and cannot be deleted - see [General](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/02-general).
- Everything after it is a **colour variant**, listed in **Paint**, and you can add and remove them freely.

**Which parts actually change colour**

Only materials that expose a **Paint Var Tex** parameter get repainted. That is why chrome trim and glass keep their own look while the body changes. If you author a body material and the paint does nothing, it is almost always because the material is a **Prop** material rather than a **CarPaint** one.

**Checking a colour before you commit**

Each colour row has a **Preview** button that applies it to the paintable materials in the viewport. A **Reset Color Preview** button at the top of the section puts everything back.

---

### 06. Lights

Each light slot exposes three values:
