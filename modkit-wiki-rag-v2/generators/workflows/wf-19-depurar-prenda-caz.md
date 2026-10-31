---
source: mcp-tools
categoria: workflow
nivel: intermedio
tools: [modkit_list_tables, modkit_list_table_rows, modkit_get_row, modkit_get_row_batch, modkit_set_data, modkit_set_data_batch, modkit_inspect_workspace, modkit_validate_workspace, modkit_list_meshes, modkit_assign_material, modkit_list_material_types]
wiki_refs: [pages/modkit/project/caz/guide/03-masking-system.md, pages/modkit/project/caz/guide/02-deformed-mesh.md]
dump_version: inzoi-modkit 2025-03-26 (129 tools, captured 2026-10-31) | filas GarmentTop/GarmentTopMesh leidas en vivo 2026-10-09 (build W.MODKIT_EGS 20260914.15275)
generado: 2026-10-31
---

# WF-19: Diagnostico: "mi prenda CAZ no aparece, no se combina o el cuerpo asoma"

**Objetivo:** depurar una prenda custom (Top, Bottom, Jacket...) creada con Duplicate en un workspace CAZ cuyos sintomas tipicos son: no aparece en el CAS, aparece sin malla, el juego dice que la combinacion no es posible con otras prendas (p.ej. un top que solo se deja llevar con falda y no con pantalones), o el cuerpo asoma a traves de la prenda. Recorre los invariantes de datos de la mas barata a la mas cara, todos verificados contra filas vanilla en vivo.
**Sintomas EN:** custom top or garment created in the ModKit only wearable with skirts, trousers blocked with "combination not possible"; garment missing in CAS or shown without mesh; body clipping through the outfit; garment not layering with other clothes. Fixes: DrawingRegions / CoveringRegions / BodyRegions masking, PantsWaist, LayerPriority, Variants and GroupId id linking, OverrideMaterial empty by design.
**Nivel:** intermedio
**Ruta:** editor

**El modelo de datos (por que falla):** cada prenda CAZ son DOS filas que van juntas: la fila de la tabla de item (p.ej. `GarmentTop`: nombre, genero, edad, variantes, outfit tags) y la fila de la tabla de malla (p.ej. `GarmentTopMesh`: malla, material, prioridad de capa, regiones). El juego las une por Id: `GarmentTop.Variants` apunta a filas de `GarmentTopMesh`. La combinacion entre prendas no es un campo "compatible con": se resuelve con el sistema de mascaras: `LayerPriority` (orden de apilado; vanilla: top 80, bottom 50), `DrawingRegions` (donde se dibuja la prenda), `CoveringRegions` (que tapa de las capas inferiores) y `BodyRegions` (que malla del cuerpo oculta). Si tu fila no declara regiones validas, el juego no sabe donde vive la prenda y bloquea la combinacion con prendas que si las declaran (los pantalones vanilla declaran `PantsWaist` en DrawingRegions, verificado en vivo). Un top largo que cubre la cintura del pantalon debe declarar `PantsWaist` en CoveringRegions.

**Pasos:**

1. `modkit_get_row` (inzoi-modkit) — lee la fila vanilla del item base que duplicaste, en AMBAS tablas (p.ej. table=`GarmentTop` id=`W_Top_TS_SS007_001` y table=`GarmentTopMesh` id=`W_Top_TS_SS007_001`). Es tu plantilla de referencia: todo campo tuyo que diverja sin razon es sospechoso. Usa `fields` para pedir solo lo que miras.
2. Invariante de Ids (causa n1 de "aparece sin malla"): `GarmentTop.Id` = `GarmentTop.Variants[0]` = `GarmentTopMesh.Id` = `GarmentTopMesh.GroupId`, los cuatro exactamente iguales. Un Duplicate mal editado deja las dos tablas con Ids distintos (p.ej. `..._TS5007_...` en una y `..._TS_SS007_...` en la otra) y el juego no resuelve la malla. Corregir elegiendo UN id y escribiendolo en los cuatro sitios.
3. Invariante de regiones (causa tipica de "no se puede combinar" y "cuerpo asoma"): en la fila de malla, `DrawingRegions`, `CoveringRegions` y `BodyRegions` no pueden contener `"None"` colado ni quedar vacios sin proposito. Sintoma observado: `DrawingRegions: [None, None, None]`. Arreglo: copiar los valores del vanilla base y solo despues afinar a la geometria real (si tu malla cubre mas, anyade regiones de una en una). La malla debe tener el UV2 (canal de mascara) con los shells en las regiones correctas; sin UV2 el masking no funciona aunque los campos esten bien.
4. `modkit_get_row_batch` (inzoi-modkit) — compara tu fila contra el vanilla en una sola llamada (queries con pares table/id). Verifica tambien los campos que la wiki NO documenta y que existen en vivo (2026-10-09): en la fila de item `Comment`, `IsLockedItem`, `PartsId`, `Tags`, `BlockGloveMask`; en la fila de malla `Comment`, `IsLockedItem`, `HairCutHeight`, `bDeformingGloves`. Ojo con los nombres exactos: el schema vivo usa `PartsId` y `AITextureChannels` (no `PartId` ni `AllTextureChannels`); copia los literales de un get_row, nunca de memoria.
5. Enumes validos (verificados en vivo): `BodyAgeType` es `Invalid/Default/Adult/Youth/Baby` (`Child` NO existe); `EB1OutfitCategory` admite `Everyday, Formal, School, Sleep, Party, Sports, Swimwear, Summer, Winter`. Si tu fila lleva un valor fuera de enum, el juego lo ignora o lo trata raro.
6. Material: en CAZ `OverrideMaterial` se deja VACIO a proposito — el juego usa los slots de la propia malla y el campo se re-vacia en cada cambio de mesh (doc oficial del workspace, verificado). No lo rellenas para asignar el material. Asignacion correcta: `modkit_list_meshes` para ver los slots del componente `Mesh` y `modkit_assign_material` al slot. La malla debe vivir dentro del content del plugin: una malla apuntando a contenido shipped del juego es rechazada.
7. Escrituras acompanantes: `Thumbnail`, `GenderType` y `BodyAgeType` existen en AMBAS tablas y deben llevar el mismo valor en las dos. Cambiar una tabla sin la otra deja el item inconsistente. Para tocar varias cosas a la vez usa `modkit_set_data_batch` (p.ej. mesh + `Variants` + re-vaciar `OverrideMaterial` en una sola llamada).
8. `modkit_validate_workspace` (inzoi-modkit) — validacion formal; OJO: NO detecta regiones en None ni materiales sin asignar. Si pasa y la prenda sigue rota, el fallo es de datos finos: volver al paso 1 y diff campo a campo contra el vanilla.
9. `modkit_save` (inzoi-modkit) — guardar despues de cada correctiva. Probar en el juego: equipar la prenda y combinarla con varias piezas (pantalones, faldas, chaquetas) en el CAS.

**Checklist de invariantes (resumen para revisar de un vistazo):**
- Ids: item.Id = item.Variants[0] = mesh.Id = mesh.GroupId (las cuatro iguales).
- Regiones: sin "None" en DrawingRegions / CoveringRegions / BodyRegions; valores del enum EB1GarmentCoveringRegion / EB1BodyRegion.
- LayerPriority igual al vanilla de su tipo (top 80, bottom 50) salvo decision consciente de apilar distinto.
- UV2 de la malla con shells en regiones correctas (canal de mascara, ver guia oficial del masking system).
- OverrideMaterial vacio en CAZ; material asignado por slot en la malla.
- Thumbnail / GenderType / BodyAgeType identicos en las dos tablas.
- Nombres de campo literales del schema vivo (PartsId, AITextureChannels), no abreviados.
- Enumes: BodyAgeType sin "Child"; OutfitCategoryTags dentro de los 9 valores validos.

**Advertencias:**
- Flujo de lectura salvo las escrituras correctivas citadas (set_data / assign_material), siempre con get_row antes y despues.
- Los valores citados valen para la build W.MODKIT_EGS 20260914.15275 leida el 2026-10-09; tras un parche, re-verificar contra filas vanilla frescas antes de escribir.
- Si el asistente MCP no ve tu fila parcheada con get_row, el plugin no esta abierto por MCP: la capa de parches solo se fusiona con el plugin activo.

**Herramientas:** modkit_list_tables, modkit_list_table_rows, modkit_get_row, modkit_get_row_batch, modkit_set_data, modkit_set_data_batch, modkit_inspect_workspace, modkit_validate_workspace, modkit_list_meshes, modkit_assign_material, modkit_list_material_types (inzoi-modkit)

**Categorias CLI tocadas:** apariencia-y-personalizacion

**Wiki:** pages/modkit/project/caz/guide/03-masking-system.md, pages/modkit/project/caz/guide/02-deformed-mesh.md
## English version (EN)

**Goal:** debug a custom CAZ garment (Top, Bottom, Jacket...) created with Duplicate whose typical symptoms are: it does not appear in CAS, it appears without a mesh, the game says the combination with other garments is not possible (e.g. a top that only goes with skirts and not trousers), or the body pokes through the garment. Walks the data invariants from cheapest to most expensive, all verified against live vanilla rows.

**The data model (why it fails):** every CAZ garment is TWO rows that go together: the item-table row (e.g. `GarmentTop`: name, gender, age, variants, outfit tags) and the mesh-table row (e.g. `GarmentTopMesh`: mesh, material, layer priority, regions). The game joins them by Id: `GarmentTop.Variants` points at `GarmentTopMesh` rows. Combination between garments is not a "compatible with" field: it is resolved with the masking system: `LayerPriority` (stacking order; vanilla: top 80, bottom 50), `DrawingRegions` (where the garment is drawn), `CoveringRegions` (what it hides from lower layers) and `BodyRegions` (which body mesh it hides). If your row does not declare valid regions, the game does not know where the garment lives and blocks the combination with garments that do declare them (vanilla trousers declare `PantsWaist` in DrawingRegions, verified live). A long top covering the pants waist must declare `PantsWaist` in CoveringRegions.

**Steps:**

1. `modkit_get_row` (inzoi-modkit) — read the vanilla row of the base item you duplicated, in BOTH tables (e.g. table=`GarmentTop` id=`W_Top_TS_SS007_001` and table=`GarmentTopMesh` id=`W_Top_TS_SS007_001`). It is your reference template: any of your fields that diverges without reason is suspect. Use `fields` to request only what you are checking.
2. Id invariant (the #1 cause of "appears without mesh"): `GarmentTop.Id` = `GarmentTop.Variants[0]` = `GarmentTopMesh.Id` = `GarmentTopMesh.GroupId`, all four exactly equal. A badly edited Duplicate leaves the two tables with different Ids and the game cannot resolve the mesh. Fix by picking ONE id and writing it in all four places.
3. Regions invariant (typical cause of "cannot combine" and "body pokes through"): in the mesh row, `DrawingRegions`, `CoveringRegions` and `BodyRegions` cannot contain stray `"None"` entries or be left empty without purpose. Observed symptom: `DrawingRegions: [None, None, None]`. Fix: copy the vanilla base values and only then tune to the real geometry (if your mesh covers more, add regions one at a time). The mesh must have UV2 (the mask channel) with shells in the correct regions; without UV2 the masking does not work even if the fields are right.
4. `modkit_get_row_batch` (inzoi-modkit) — compare your row against vanilla in one call (queries with table/id pairs). Also check the fields the wiki does NOT document that exist live (2026-10-09): in the item row `Comment`, `IsLockedItem`, `PartsId`, `Tags`, `BlockGloveMask`; in the mesh row `Comment`, `IsLockedItem`, `HairCutHeight`, `bDeformingGloves`. Watch the exact names: the live schema uses `PartsId` and `AITextureChannels` (not `PartId` or `AllTextureChannels`); copy the literals from a get_row, never from memory.
5. Valid enums (verified live): `BodyAgeType` is `Invalid/Default/Adult/Youth/Baby` (`Child` does NOT exist); `EB1OutfitCategory` allows `Everyday, Formal, School, Sleep, Party, Sports, Swimwear, Summer, Winter`. If your row carries an out-of-enum value, the game ignores it or treats it oddly.
6. Material: in CAZ `OverrideMaterial` is left EMPTY on purpose — the game uses the mesh's own slots and the field is re-emptied on every mesh change (official workspace doc, verified). You do not fill it to assign the material. Correct assignment: `modkit_list_meshes` to see the `Mesh` component's slots and `modkit_assign_material` to the slot. The mesh must live inside the plugin's content: a mesh pointing at shipped game content is refused.
7. Companion writes: `Thumbnail`, `GenderType` and `BodyAgeType` exist in BOTH tables and must carry the same value in both. Changing one table without the other leaves the item inconsistent. To touch several things at once use `modkit_set_data_batch` (e.g. mesh + `Variants` + re-emptying `OverrideMaterial` in one call).
8. `modkit_validate_workspace` (inzoi-modkit) — formal validation; NOTE: it does NOT detect regions in None or unassigned materials. If it passes and the garment is still broken, it is a fine-data issue: back to step 1 and diff field by field against vanilla.
9. `modkit_save` (inzoi-modkit) — save after each fix. Test in game: equip the garment and combine it with several pieces (trousers, skirts, jackets) in CAS.

**Invariant checklist (quick review):**
- Ids: item.Id = item.Variants[0] = mesh.Id = mesh.GroupId (all four equal).
- Regions: no "None" in DrawingRegions / CoveringRegions / BodyRegions; values from the EB1GarmentCoveringRegion / EB1BodyRegion enums.
- LayerPriority equal to the vanilla of its type (top 80, bottom 50) unless consciously deciding to stack differently.
- UV2 of the mesh with shells in the correct regions (mask channel, see the official masking system guide).
- OverrideMaterial empty in CAZ; material assigned per slot on the mesh.
- Thumbnail / GenderType / BodyAgeType identical in both tables.
- Field names literal from the live schema (PartsId, AITextureChannels), not abbreviated.
- Enums: BodyAgeType without "Child"; OutfitCategoryTags within the 9 valid values.

**Warnings:**
- Read flow except the corrective writes cited (set_data / assign_material), always with get_row before and after.
- The cited values hold for build W.MODKIT_EGS 20260914.15275 read on 2026-10-09; after a patch, re-verify against fresh vanilla rows before writing.
- If the MCP assistant cannot see your patched row with get_row, the plugin is not open via MCP: the patch layer is only merged with the active plugin.
