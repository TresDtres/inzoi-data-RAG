---
source: mcp-tools
categoria: workflow
nivel: intermedio
tools: [get_addon_status, disable_telemetry, record_trajectory_feedback, search_assets, import_asset, generate_3d, get_scene_info, execute_blender_code, look, modkit_list_projects, modkit_create_project, modkit_list_categories, modkit_list_books, modkit_add_workspace, modkit_import_mesh, modkit_list_components, modkit_add_component, modkit_remove_component, modkit_set_component_prop, modkit_set_object_prop, modkit_list_meshes, modkit_set_mesh, modkit_set_transform, modkit_list_material_types, modkit_create_material, modkit_list_materials, modkit_assign_material, modkit_compile_bp, modkit_inspect_workspace, modkit_validate_workspace, modkit_save, modkit_package]
wiki_refs: [pages/modkit/how-to/build/01overview.md, pages/modkit/how-to/build/02steps.md, pages/modkit/project/build/01-build.md, pages/modkit/how-to/vehicle/01overview.md]
dump_version: volcados ModKit 2026-10-31 | inzoi-game 2024-11-05 (412) | inzoi-modkit 2025-03-26 (129 tools, captured 2026-10-31) | blender 2024-11-05 (9)
generado: 2026-10-31
---

# WF-01: Crear un mueble desde Blender hasta verlo en el juego

**Objetivo:** partir de un modelo 3D (hecho o descargado en Blender) y terminar con un mueble funcional empaquetado como mod de inZOI.
**EN:** turn a Blender 3D model into a working furniture mod for inZOI: export FBX, import to the ModKit, compile, package.
**Nivel:** intermedio
**Ruta:** mixta (blender + modkit-offline)

**Pasos:**

1. `get_addon_status` (blender) — verifica que Blender esta conectado y el addon coincide con el servidor. Resultado esperado: version y estado ok. Si falla: actualizar el addon con 'uvx mcp-for-blender install-addon' segun indica la respuesta y reiniciar Blender.
2. (Opcional) Obtencion del modelo: `search_assets` (blender) para buscar en polyhaven/sketchfab/polypizza y `import_asset` para traerlo a la escena, o `generate_3d` para generarlo por prompt. Advertencia: generate_3d puede costar dinero o una generacion mensual (documentado en el volcado).
3. `get_scene_info` (blender) — comprueba que el modelo esta en escena, su tamano y que el mesh esta sano. Resultado esperado: una linea por objeto. Si el tamano no es realista, corregirlo antes de exportar.
4. (Opcional) `look` (blender) — captura visual del estado de la escena para confirmar con el usuario.
5. `execute_blender_code` (blender) — exporta el modelo a FBX con bpy. El volcado no documenta la ruta de exportacion exacta: VERIFICADO EN VIVO (2026-10-09): `bpy.ops.export_scene.fbx(filepath=<ruta>)` funciona (Blender 5.2, archivo de 20 KB generado). Resultado esperado: archivo .fbx en disco local.
6. `modkit_list_projects` (inzoi-modkit) — confirma que no existe ya un proyecto para este mueble. Resultado esperado: lista de plugin_name.
7. `modkit_create_project` (inzoi-modkit) — crea el proyecto con el nombre que el usuario haya declarado. Regla del volcado: no llamarlo dos veces (crearia duplicados).
8. `modkit_list_categories` y `modkit_list_books` (inzoi-modkit) — elige la categoria BUILD (grupo Furniture) y el libro origen del mueble. Resultado esperado: keys con count mayor que 0.
9. `modkit_add_workspace` (inzoi-modkit) — crea el workspace BUILD y se abre solo. Resultado esperado: { item_id, mode }. Si falla: verificar book/book_class contra los valores exactos de list_books.
10. `modkit_import_mesh` (inzoi-modkit) — importa el FBX a la carpeta Mesh del proyecto. Con item especificado, el workspace BUILD aplica el script de importacion de muebles (colision). Resultado esperado: mesh importado.
11. `modkit_list_meshes` (inzoi-modkit) — lista los slots de mesh del blueprint y el nombre de componente que espera assign_material. Resultado esperado: componentes con mesh.
12. `modkit_set_mesh` (inzoi-modkit) — asigna el mesh al componente correcto. Regla de orden del volcado: cambios de estructura - `modkit_compile_bp` - propiedades. Si hay componentes que anadir/quitar, hacerlo ANTES: `modkit_compile_bp` primero.
13. `modkit_set_transform` (inzoi-modkit) — ajusta posicion/rotacion/escala del componente si el mesh lo necesita.
13b. Estructura y metadatos del blueprint (si hace falta): `modkit_list_components` para inventariar, `modkit_add_component`/`modkit_remove_component` para cambios estructurales (siempre ANTES de `modkit_compile_bp`, regla de orden del volcado), y `modkit_set_component_prop`/`modkit_set_object_prop` para metadatos (set_object_prop es la unica via a los numeros de objetos ensamblados como escaleras y pilares).
14. Materiales: `modkit_list_material_types` - `modkit_create_material` - `modkit_list_materials` - `modkit_assign_material`. Requisito del volcado: leer antes el recurso modkit://workspace-docs/material_rules.
15. `modkit_inspect_workspace` (inzoi-modkit) — valida el estado: campos obligatorios, porcentaje de completitud. Resultado esperado: sin campos required vacios. Si falla: rellenar los campos meta=RequiredField que liste la respuesta.
16. `modkit_validate_workspace` (inzoi-modkit) — validacion formal pre-empaquetado. Resultado esperado: listo para guardar/empaquetar.
17. `modkit_save` (inzoi-modkit) — guarda el proyecto.
18. `modkit_package` (inzoi-modkit) — empaqueta localmente (asincrono). Resultado esperado: 'packaging_started'; la finalizacion se ve en el area de notificaciones del editor.
19. Ver el mueble en el juego: para mods BUILD no existe comando de montaje en vivo documentado (los mounts en vivo documentados son `uimod_mount`/`luamod_mount` para UI y Lua). VERIFICADO EN VIVO (2026-10-09): el catalogo de 405 comandos CLI no contiene ningun comando de montaje para mods BUILD (solo uimod.mount/luamod.mount para UI y Lua); instalar el paquete y reiniciar el juego sigue siendo paso manual no automatizable por CLI.

**Advertencias:**
- Verificado en vivo 2026-10-09: el export FBX (paso 5) funciona con bpy.ops.export_scene.fbx; la carga del mod BUILD (paso 19) no es automatizable (sin comando de montaje).
- Todos los retornos de las herramientas inzoi-modkit son 'unspecified' en el volcado; los resultados esperados citados son los documentados en las descripciones.
- modkit_import_texture/set_material_texture no cubren texturas en este flujo: ver WF-16.
- Privacidad: `disable_telemetry` (blender) apaga la recogida de datos si el usuario lo pide; `record_trajectory_feedback` registra accept/reject/correction del usuario sobre los pasos.

**Herramientas:** get_addon_status, disable_telemetry, record_trajectory_feedback, search_assets, import_asset, generate_3d, get_scene_info, execute_blender_code, look (blender); modkit_list_projects, modkit_create_project, modkit_list_categories, modkit_list_books, modkit_add_workspace, modkit_import_mesh, modkit_list_components, modkit_add_component, modkit_remove_component, modkit_set_component_prop, modkit_set_object_prop, modkit_list_meshes, modkit_set_mesh, modkit_set_transform, modkit_list_material_types, modkit_create_material, modkit_list_materials, modkit_assign_material, modkit_compile_bp, modkit_inspect_workspace, modkit_validate_workspace, modkit_save, modkit_package (inzoi-modkit)

**Categorias CLI tocadas:** ninguna (el acceso al juego de este flujo no esta documentado por CLI)

**Wiki:** pages/modkit/how-to/build/01overview.md, pages/modkit/how-to/build/02steps.md, pages/modkit/project/build/01-build.md, pages/modkit/how-to/vehicle/01overview.md
## English version (EN)

**Goal:** start from a 3D model (made or downloaded in Blender) and end with a working piece of furniture packaged as an inZOI mod.

**Level:** intermediate. **Route:** mixed (blender + modkit-offline).

**Steps:**

1. `get_addon_status` (blender) — confirm Blender is connected and the addon matches the server. Expected: version and status ok. If it fails: update the addon with 'uvx mcp-for-blender install-addon' as the response says and restart Blender.
2. (Optional) Getting the model: `search_assets` (blender) to search polyhaven/sketchfab/polypizza and `import_asset` to bring it into the scene, or `generate_3d` to generate it from a prompt. Warning: generate_3d may cost money or a monthly generation (documented in the dump).
3. `get_scene_info` (blender) — check the model is in the scene, its size, and that the mesh is healthy. Expected: one line per object. If the size is unrealistic, fix it before exporting.
4. (Optional) `look` (blender) — visual capture of the scene to confirm with the user.
5. `execute_blender_code` (blender) — export the model to FBX with bpy. The dump does not document the exact export route: VERIFIED LIVE (2026-10-09): `bpy.ops.export_scene.fbx(filepath=<path>)` works (Blender 5.2, a 20 KB file was generated). Expected: a .fbx file on local disk.
6. `modkit_list_projects` (inzoi-modkit) — confirm there is no existing project for this furniture. Expected: list of plugin_name.
7. `modkit_create_project` (inzoi-modkit) — create the project with the name the user declared. Dump rule: do not call it twice (it would create duplicates).
8. `modkit_list_categories` and `modkit_list_books` (inzoi-modkit) — choose the BUILD category (Furniture group) and the source book of the furniture. Expected: keys with count greater than 0.
9. `modkit_add_workspace` (inzoi-modkit) — create the BUILD workspace; it opens by itself. Expected: { item_id, mode }. If it fails: check book/book_class against the exact values from list_books.
10. `modkit_import_mesh` (inzoi-modkit) — import the FBX into the project's Mesh folder. With item specified, the BUILD workspace applies the furniture import script (collision). Expected: mesh imported.
11. `modkit_list_meshes` (inzoi-modkit) — list the blueprint's mesh slots and the component name that assign_material expects. Expected: components with mesh.
12. `modkit_set_mesh` (inzoi-modkit) — assign the mesh to the right component. Dump order rule: structural changes - `modkit_compile_bp` - properties. If components must be added/removed, do it BEFORE: `modkit_compile_bp` first.
13. `modkit_set_transform` (inzoi-modkit) — adjust the component's position/rotation/scale if the mesh needs it.
13b. Blueprint structure and metadata (if needed): `modkit_list_components` to inventory, `modkit_add_component`/`modkit_remove_component` for structural changes (always BEFORE `modkit_compile_bp`, dump order rule), and `modkit_set_component_prop`/`modkit_set_object_prop` for metadata (set_object_prop is the only route to object numbers of assembled objects such as stairs and pillars).
14. Materials: `modkit_list_material_types` - `modkit_create_material` - `modkit_list_materials` - `modkit_assign_material`. Dump requirement: read the modkit://workspace-docs/material_rules resource first.
15. `modkit_inspect_workspace` (inzoi-modkit) — validate state: required fields, completion percentage. Expected: no empty required fields. If it fails: fill the meta=RequiredField fields listed in the response.
16. `modkit_validate_workspace` (inzoi-modkit) — formal pre-package validation. Expected: ready to save/package.
17. `modkit_save` (inzoi-modkit) — save the project.
18. `modkit_package` (inzoi-modkit) — package locally (async). Expected: 'packaging_started'; completion shows in the editor's notification area.
19. Seeing the furniture in game: for BUILD mods there is no documented live-mount command (the documented live mounts are `uimod_mount`/`luamod_mount` for UI and Lua). VERIFIED LIVE (2026-10-09): the 405-command CLI catalog contains no mount command for BUILD mods (only uimod.mount/luamod.mount for UI and Lua); installing the package and restarting the game remains a manual step that cannot be automated via CLI.

**Warnings:**
- Verified live 2026-10-09: the FBX export (step 5) works with bpy.ops.export_scene.fbx; loading the BUILD mod (step 19) cannot be automated (no mount command).
- All inzoi-modkit tool returns are 'unspecified' in the dump; the expected results cited are those documented in the descriptions.
- modkit_import_texture/set_material_texture do not cover textures in this flow: see WF-16.
- Privacy: `disable_telemetry` (blender) turns off data collection if the user asks; `record_trajectory_feedback` logs the user's accept/reject/correction on the steps.
