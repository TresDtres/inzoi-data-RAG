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
chunk: 4
chunk_count: 5
page_type: "article"
route: "modkit/project/vehicle/01-overview"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

ts](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/05-slots)(none)**Tools**Workspace utilities.- |
| Physics**Driving**Top speed, acceleration, braking, steering.[Driving parameters](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/01-overview#07-driving-parameters)Audio**Audio**Engine, spawn and despawn sounds.[Bounds & Audio](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/07-bounds-and-audio)(none)**Components**Every component on the vehicle, as a tree. Pick one to inspect it, or several to edit the properties they share. Picking a component in the viewport selects it here too.[Slots](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/05-slots)(none)**Tools**Workspace utilities.- |
| Audio**Audio**Engine, spawn and despawn sounds.[Bounds & Audio](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/07-bounds-and-audio)(none)**Components**Every component on the vehicle, as a tree. Pick one to inspect it, or several to edit the properties they share. Picking a component in the viewport selects it here too.[Slots](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/05-slots)(none)**Tools**Workspace utilities.- |
| (none)**Components**Every component on the vehicle, as a tree. Pick one to inspect it, or several to edit the properties they share. Picking a component in the viewport selects it here too.[Slots](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/05-slots)(none)**Tools**Workspace utilities.- |
| (none)**Tools**Workspace utilities.- |

**Saving.** Edits made in the workspace stay unsaved until you press **Save**, next to the back arrow at the top right. That covers meshes, lights, seats, points and other parts, and also Audio and Animation, table values and existing assets the workspace changes, such as a texture set on a material. Until then the title row shows *Unsaved changes*; the undo arrow beside **Save** reverts all of them. Assets the workspace creates, such as a new material, are kept even when you revert. Leaving the workspace, closing ModKit Home or the editor, and packaging all ask you to save first. If ModKit closes unexpectedly, reopening the workspace offers to restore them. If the saved data is changed elsewhere (for example in the Data Editor) while you are editing, **Save** asks before replacing that change.

**Panel size.** Drag **Scale** at the top right to make the workspace panel larger or smaller. Every workspace uses the same size, and ModKit keeps it the next time you start.

---

### 05. Workflow at a glance

A typical reskin, in the order that avoids rework.

1. **Create the workspace.** Pick the base vehicle, then Override (reskin) or Duplicate (new vehicle).
2. **Survey what you have.** Open **Meshes** and note the slot names you intend to replace. Slots are grouped by body area.
3. **Import your meshes.** Use the **Import** button on a slot's mesh field, or import first and pick the asset afterwards.
4. **Fit the meshes.** Adjust each slot's transform if your mesh has a different origin or size from the original.
5. **Update Bounds.** A mesh swap does not resize the vehicle. Do this whenever your body is noticeably bigger or smaller.
6. **Replace the distant mesh.** Set the simplified mesh in **General**, or your vehicle reverts to the original silhouette at a distance.
7. **Paint and lights.** Set the representative colour and its icon, then add colour variants and tune the lamps.
8. **Move what shifted.** If the body changed shape, check seats, interaction points and carried objects.
9. **Animation, if you want it.** Author door/trunk/wiper motion.
10. **Set the data.** Price, purchase conditions, display name.
11. **Save, package, test in game.**

Steps 5, 6 and 8 are the ones most often skipped, and they are the usual cause of "it looked right in ModKit but wrong in game".

---

### 06. What you cannot change

Worth knowing before you plan a mod.

| LimitationWhyWorkaround**Number of seats**A vehicle carries seven at most - a driver plus six passengers - and on a car the seats come with the vehicle rather than from data.None on cars. Boats are a partial exception, see [Objects](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/06-objects).**Adding or removing mesh slots**Slots are part of the vehicle's structure.Replace what a slot shows, or hide it by leaving it empty.**Handling with Advanced Driving Mode on**Cars and motorcycles switch to a physics path tuned once per vehicle type.Your values apply with the option off. Bicycles and boats are never affected.**Adding lights**Light slots come with the vehicle.Tune the existing ones. |
| --- |
| **Number of seats**A vehicle carries seven at most - a driver plus six passengers - and on a car the seats come with the vehicle rather than from data.None on cars. Boats are a partial exception, see [Objects](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/06-objects).**Adding or removing mesh slots**Slots are part of the vehicle's structure.Replace what a slot shows, or hide it by leaving it empty.**Handling with Advanced Driving Mode on**Cars and motorcycles switch to a physics path tuned once per vehicle type.Your values apply with the option off. Bicycles and boats are never affected.**Adding lights**Light slots come with the vehicle.Tune the existing ones. |
| **Adding or removing mesh slots**Slots are part of the vehicle's structure.Replace what a slot shows, or hide it by leaving it empty.**Handling with Advanced Driving Mode on**Cars and motorcycles switch to a physics path tuned once per vehicle type.Your values apply with the option off. Bicycles and boats are never affected.**Adding lights**Light slots come with the vehicle.Tune the existing ones. |
| **Handling with Advanced Driving Mode on**Cars and motorcycles switch to a physics path tuned once per vehicle type.Your values apply with the option off. Bicycles and boats are never affected.**Adding lights**Light slots come with the vehicle.Tune the existing ones. |
| **Adding lights**Light slots come with the vehicle.Tune the existing ones. |

---

### 07. Driving parameters

A common question: where do I change how fast the vehicle goes?

Open the **Driving** section, under *Physics* in the sidebar. Speed, acceleration, braking and steering live there. They are not stored in any data table - they sit on the vehicle's movement component - but the workspace reads and writes them for you, and the values are applied when the vehicle spawns.

Which settings you see depends on the vehicle type, because a boat and a motorcycle do not move the same way. The panel works this out for you and shows only the ones that apply. Speeds and accelerations are in centimetres per second, so 1500 is roughly 54 km/h; angles are degrees and times are seconds.

**Shared by every vehicle type**
