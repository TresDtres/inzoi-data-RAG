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
chunk: 2
chunk_count: 2
page_type: "article"
route: "modkit/project/vehicle/03-appearance"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

| ValueWhat it does**Light Colour**The colour of the lamp.**Intensity**How bright it is.**Attenuation Radius**How far the light reaches. |
| --- |
| **Light Colour**The colour of the lamp.**Intensity**How bright it is.**Attenuation Radius**How far the light reaches. |
| **Intensity**How bright it is.**Attenuation Radius**How far the light reaches. |
| **Attenuation Radius**How far the light reaches. |

The slots come with the vehicle, so this is tuning rather than authoring - you cannot add a new lamp. If your new body puts the head lights somewhere else, move the light slot's transform to match.

---

### 07. Common issues and fixes

| IssueCauseFixSlot shows **None** and renders nothingOriginal vehicle art is not shipped with ModKitExpected. Import your own mesh to see itPaint colour does nothing on the bodyBody material is a Prop material, or lacks **Paint Var Tex**Author the body with a **CarPaint** materialNew mesh is the wrong size or floatsExport scale, or a different pivotRe-export at 1 unit = 1 cm, or correct the slot transformMesh looks right, vehicle blocks placement oddlyBounds still describe the old bodyUpdate **Bounds**Colour preview left the viewport wrongA preview colour is still appliedClick **Reset Color Preview**Material assigned but nothing changedAssigned outside the panelSet the material override on the slot in **Meshes** |
| --- |
| Slot shows **None** and renders nothingOriginal vehicle art is not shipped with ModKitExpected. Import your own mesh to see itPaint colour does nothing on the bodyBody material is a Prop material, or lacks **Paint Var Tex**Author the body with a **CarPaint** materialNew mesh is the wrong size or floatsExport scale, or a different pivotRe-export at 1 unit = 1 cm, or correct the slot transformMesh looks right, vehicle blocks placement oddlyBounds still describe the old bodyUpdate **Bounds**Colour preview left the viewport wrongA preview colour is still appliedClick **Reset Color Preview**Material assigned but nothing changedAssigned outside the panelSet the material override on the slot in **Meshes** |
| Paint colour does nothing on the bodyBody material is a Prop material, or lacks **Paint Var Tex**Author the body with a **CarPaint** materialNew mesh is the wrong size or floatsExport scale, or a different pivotRe-export at 1 unit = 1 cm, or correct the slot transformMesh looks right, vehicle blocks placement oddlyBounds still describe the old bodyUpdate **Bounds**Colour preview left the viewport wrongA preview colour is still appliedClick **Reset Color Preview**Material assigned but nothing changedAssigned outside the panelSet the material override on the slot in **Meshes** |
| New mesh is the wrong size or floatsExport scale, or a different pivotRe-export at 1 unit = 1 cm, or correct the slot transformMesh looks right, vehicle blocks placement oddlyBounds still describe the old bodyUpdate **Bounds**Colour preview left the viewport wrongA preview colour is still appliedClick **Reset Color Preview**Material assigned but nothing changedAssigned outside the panelSet the material override on the slot in **Meshes** |
| Mesh looks right, vehicle blocks placement oddlyBounds still describe the old bodyUpdate **Bounds**Colour preview left the viewport wrongA preview colour is still appliedClick **Reset Color Preview**Material assigned but nothing changedAssigned outside the panelSet the material override on the slot in **Meshes** |
| Colour preview left the viewport wrongA preview colour is still appliedClick **Reset Color Preview**Material assigned but nothing changedAssigned outside the panelSet the material override on the slot in **Meshes** |
| Material assigned but nothing changedAssigned outside the panelSet the material override on the slot in **Meshes** |

---

### 08. Chapter summary

| ChecklistDoneExported at 1 unit = 1 cm with Nanite on?✅Body panels using a **CarPaint** material?✅Slot transforms corrected after the swap?✅Light positions still on the housings?✅Bounds and the distant mesh updated?✅ |
| --- |
| Exported at 1 unit = 1 cm with Nanite on?✅Body panels using a **CarPaint** material?✅Slot transforms corrected after the swap?✅Light positions still on the housings?✅Bounds and the distant mesh updated?✅ |
| Body panels using a **CarPaint** material?✅Slot transforms corrected after the swap?✅Light positions still on the housings?✅Bounds and the distant mesh updated?✅ |
| Slot transforms corrected after the swap?✅Light positions still on the housings?✅Bounds and the distant mesh updated?✅ |
| Light positions still on the housings?✅Bounds and the distant mesh updated?✅ |
| Bounds and the distant mesh updated?✅ |

---

### 09. What the MCP tools cover

| ToolUse`modkit_list_vehicle_components`Call first. Returns every slot, light and colour name you need below.`modkit_import_mesh`Import an FBX into the plugin and get its asset path.`modkit_set_vehicle_mesh`Replace a slot's mesh; empty clears the slot (the part disappears in game).`modkit_set_vehicle_transform`Move, rotate or scale a mesh slot.`modkit_set_vehicle_light`Colour, intensity, attenuation radius.`modkit_set_vehicle_color`Add or update a paint variant.`modkit_create_material` / `modkit_set_material_texture`Author CarPaint and Prop materials. |
| --- |
| `modkit_list_vehicle_components`Call first. Returns every slot, light and colour name you need below.`modkit_import_mesh`Import an FBX into the plugin and get its asset path.`modkit_set_vehicle_mesh`Replace a slot's mesh; empty clears the slot (the part disappears in game).`modkit_set_vehicle_transform`Move, rotate or scale a mesh slot.`modkit_set_vehicle_light`Colour, intensity, attenuation radius.`modkit_set_vehicle_color`Add or update a paint variant.`modkit_create_material` / `modkit_set_material_texture`Author CarPaint and Prop materials. |
| `modkit_import_mesh`Import an FBX into the plugin and get its asset path.`modkit_set_vehicle_mesh`Replace a slot's mesh; empty clears the slot (the part disappears in game).`modkit_set_vehicle_transform`Move, rotate or scale a mesh slot.`modkit_set_vehicle_light`Colour, intensity, attenuation radius.`modkit_set_vehicle_color`Add or update a paint variant.`modkit_create_material` / `modkit_set_material_texture`Author CarPaint and Prop materials. |
| `modkit_set_vehicle_mesh`Replace a slot's mesh; empty clears the slot (the part disappears in game).`modkit_set_vehicle_transform`Move, rotate or scale a mesh slot.`modkit_set_vehicle_light`Colour, intensity, attenuation radius.`modkit_set_vehicle_color`Add or update a paint variant.`modkit_create_material` / `modkit_set_material_texture`Author CarPaint and Prop materials. |
| `modkit_set_vehicle_transform`Move, rotate or scale a mesh slot.`modkit_set_vehicle_light`Colour, intensity, attenuation radius.`modkit_set_vehicle_color`Add or update a paint variant.`modkit_create_material` / `modkit_set_material_texture`Author CarPaint and Prop materials. |
| `modkit_set_vehicle_light`Colour, intensity, attenuation radius.`modkit_set_vehicle_color`Add or update a paint variant.`modkit_create_material` / `modkit_set_material_texture`Author CarPaint and Prop materials. |
| `modkit_set_vehicle_color`Add or update a paint variant.`modkit_create_material` / `modkit_set_material_texture`Author CarPaint and Prop materials. |
| `modkit_create_material` / `modkit_set_material_texture`Author CarPaint and Prop materials. |

Assigning a material to a slot is editor-only.

---

### 10. Data reference

- [Vehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/vehicle) - where the colour list lives.
- [FB1VehicleColorData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1vehiclecolordata) - one paint entry: colour id, UI hex, in-game blend.
- [ObjectBP](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectbp) - the component data behind mesh slots and lights.
- [ColorMapping](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/colormapping) - the colour ids a paint entry refers to.
