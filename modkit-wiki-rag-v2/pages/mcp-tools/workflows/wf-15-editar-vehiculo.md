---
source: mcp-tools
categoria: workflow
nivel: intermedio
tools: [modkit_list_projects, modkit_list_workspaces, modkit_add_workspace, modkit_list_vehicle_components, modkit_import_mesh, modkit_set_vehicle_mesh, modkit_set_vehicle_transform, modkit_set_vehicle_light, modkit_set_vehicle_color, modkit_set_vehicle_seat_transform, modkit_set_vehicle_component_transform, modkit_set_vehicle_owned_object, modkit_set_vehicle_dimensions, modkit_set_vehicle_movement, modkit_set_vehicle_audio, modkit_set_vehicle_animation, modkit_create_vehicle_template, modkit_validate_workspace, modkit_save]
wiki_refs: [pages/modkit/project/vehicle/01-overview.chunks/part-005.md, pages/modkit/project/vehicle/02-general.md, pages/modkit/project/vehicle/03-appearance.chunks/part-002.md, pages/modkit/project/vehicle/04-animation.chunks/part-003.md, pages/modkit/project/vehicle/05-slots.chunks/part-002.md, pages/modkit/project/vehicle/06-objects.chunks/part-002.md, pages/modkit/project/vehicle/07-bounds-and-audio.chunks/part-002.md]
dump_version: inzoi-modkit 2025-03-26 (129 tools, captured 2026-10-31)
generado: 2026-10-31
---

# WF-15: Editar un vehiculo en el ModKit (reskin completo)

**Objetivo:** cambiar mallas, luces, colores, asientos y parametros de conduccion de un vehiculo desde un workspace VEHICLE.
**EN:** change meshes, lights, colors, seats and driving parameters of a vehicle from a VEHICLE workspace (full reskin).
**Nivel:** intermedio
**Ruta:** modkit-offline

**Pasos:**

1. `modkit_list_projects` / `modkit_list_workspaces` (inzoi-modkit) — proyecto con workspace VEHICLE. Si no existe workspace: `modkit_add_workspace` con el libro de vehiculo correspondiente.
2. `modkit_list_vehicle_components` (inzoi-modkit) — LLAMAR PRIMERO (regla del volcado): cada otra herramienta de vehiculo necesita un component de esta respuesta. Resultado esperado: slots de mesh, luces, asientos, puntos de interaccion y pivotes.
3. (Si el reskin trae malla nueva) `modkit_import_mesh` SIN item/component — importa el FBX y devuelve la ruta de asset /Game/... para el paso siguiente.
4. `modkit_set_vehicle_mesh` — reemplaza la malla del slot (se aplica en runtime sobre el ObjectBP sin tocar el Blueprint del vehiculo; mesh vacio limpia el slot).
5. `modkit_set_vehicle_transform` — recoloca el slot si la malla nueva tiene otro tamano/origen (los valores omitidos son 0, la escala 1).
6. `modkit_set_vehicle_light` — color, intensidad y radio de atenuacion del slot de luz (los campos omitidos conservan su valor).
7. `modkit_set_vehicle_color` — anade o actualiza la variante de pintura (hex sRGB como FF8800). Aviso del volcado: NO editar Vehicle.Color via modkit_set_data (struct array; solo esta herramienta).
8. `modkit_set_vehicle_seat_transform` — mueve el ancla de asiento; mueve tambien la posicion de sentado hija y el IK de pelvis emparejado (IK_Seat_<tag>_Pelvis) para que la postura siga alineada.
9. `modkit_set_vehicle_component_transform` — puntos de interaccion, pivotes, posiciones de asiento, objetos transportados y puntos de descarga.
10. `modkit_set_vehicle_owned_object` — cambia el Object que genera una entrada. `owned_objects` se puede limpiar omitiendo o vaciando `object_id`; `seat_objects` solo acepta una silla etiquetada para ese asiento (Driver/Passenger) y no se puede limpiar.
11. `modkit_set_vehicle_dimensions` — caja englobante y offset (cm). Aviso del volcado: NO se recalcula sola al cambiar malla; fijarlo manualmente si cambia el tamano.
12. `modkit_set_vehicle_movement` — velocidad maxima, aceleracion, frenado, direccion (struct MovementSetting en la fila ObjectBP; no esta en las tablas Vehicle/VehicleTemplate).
13. `modkit_set_vehicle_audio` — MetaSounds de motor/spawn/despawn (viven en el DataAsset DA_Vehicle indexado por VehicleTemplateId: vehiculos que comparten plantilla comparten audio).
14. `modkit_set_vehicle_animation` — animacion parametrica de piezas (puertas, maletero...). Regla del volcado: solo piezas con estado PlayStaticMeshAnim en el PartList de la plantilla.
15. Si el reskin necesita valores funcionales aislados o audio propio: `modkit_create_vehicle_template` — duplica la VehicleTemplate a <Id>_NewTemplate y reasigna Vehicle.VehicleTemplateId.
16. `modkit_validate_workspace` (inzoi-modkit) — verificacion formal antes de guardar.
17. `modkit_save` (inzoi-modkit).

**Advertencias:**
- Retornos unspecified en el volcado para todo el grupo de vehiculo; los resultados citados provienen de las descripciones y de las paginas del proyecto Vehicle de la wiki.
- Los links de la wiki del proyecto Vehicle documentan cada herramienta por nombre (ver Wiki).

**Herramientas:** modkit_list_projects, modkit_list_workspaces, modkit_add_workspace, modkit_list_vehicle_components, modkit_import_mesh, modkit_set_vehicle_mesh, modkit_set_vehicle_transform, modkit_set_vehicle_light, modkit_set_vehicle_color, modkit_set_vehicle_seat_transform, modkit_set_vehicle_component_transform, modkit_set_vehicle_owned_object, modkit_set_vehicle_dimensions, modkit_set_vehicle_movement, modkit_set_vehicle_audio, modkit_set_vehicle_animation, modkit_create_vehicle_template, modkit_validate_workspace, modkit_save (inzoi-modkit)

**Categorias CLI tocadas:** ninguna

**Wiki:** paginas del proyecto Vehicle citadas en el frontmatter (todas verificadas: mencionan las herramientas por nombre)
## English version (EN)

**Goal:** change a vehicle's meshes, lights, colors, seats and driving parameters from a VEHICLE workspace (full reskin).

**Level:** intermediate. **Route:** modkit-offline.

**Steps:**

1. `modkit_list_projects` / `modkit_list_workspaces` (inzoi-modkit) — the project with a VEHICLE workspace. If no workspace exists: `modkit_add_workspace` with the matching vehicle book.
2. `modkit_list_vehicle_components` (inzoi-modkit) — CALL FIRST (dump rule): every other vehicle tool needs a component from this response. Expected: mesh slots, lights, seats, interaction points and pivots.
3. (If the reskin brings a new mesh) `modkit_import_mesh` WITHOUT item/component — imports the FBX and returns the /Game/... asset path for the next step.
4. `modkit_set_vehicle_mesh` — replaces the slot's mesh (applied at runtime onto the ObjectBP without touching the vehicle's Blueprint; an empty mesh clears the slot).
5. `modkit_set_vehicle_transform` — repositions the slot if the new mesh has a different size/origin (omitted values are 0, scale 1).
6. `modkit_set_vehicle_light` — color, intensity and attenuation radius of the light slot (omitted fields keep their value).
7. `modkit_set_vehicle_color` — adds or updates the paint variant (sRGB hex like FF8800). Dump warning: do NOT edit Vehicle.Color via modkit_set_data (struct array; only this tool).
8. `modkit_set_vehicle_seat_transform` — moves the seat anchor; also moves the child sitting position and the paired pelvis IK (IK_Seat_<tag>_Pelvis) so the posture stays aligned.
9. `modkit_set_vehicle_component_transform` — interaction points, pivots, seat positions, carried objects and drop-off points.
10. `modkit_set_vehicle_owned_object` — changes the Object spawned by a slot. `owned_objects` can be cleared by omitting or emptying `object_id`; `seat_objects` only accepts a chair tagged for that seat (Driver/Passenger) and cannot be cleared.
11. `modkit_set_vehicle_dimensions` — bounding box and offset (cm). Dump warning: it is NOT recalculated when the mesh changes; set it manually if the size changes.
12. `modkit_set_vehicle_movement` — top speed, acceleration, braking, steering (MovementSetting struct in the ObjectBP row; not in the Vehicle/VehicleTemplate tables).
13. `modkit_set_vehicle_audio` — engine/spawn/despawn MetaSounds (they live in the DA_Vehicle DataAsset indexed by VehicleTemplateId: vehicles sharing a template share audio).
14. `modkit_set_vehicle_animation` — parametric animation of pieces (doors, trunk...). Dump rule: only pieces with the PlayStaticMeshAnim state in the template's PartList.
15. If the reskin needs isolated functional values or its own audio: `modkit_create_vehicle_template` — duplicates the VehicleTemplate to <Id>_NewTemplate and reassigns Vehicle.VehicleTemplateId.
16. `modkit_validate_workspace` (inzoi-modkit) — formal verification before saving.
17. `modkit_save` (inzoi-modkit).

**Warnings:**
- Unspecified returns in the dump for the whole vehicle group; the cited results come from the descriptions and the wiki's Vehicle project pages.
- The wiki's Vehicle project links document each tool by name (see Wiki).
