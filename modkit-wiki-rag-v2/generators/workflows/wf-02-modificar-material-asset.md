---
source: mcp-tools
categoria: workflow
nivel: principiante
tools: [modkit_list_projects, modkit_list_workspaces, modkit_set_attached_accessory_socket_mesh, modkit_refresh_workspace, modkit_list_meshes, modkit_list_materials, modkit_set_material_texture, modkit_assign_material, modkit_inspect_workspace, modkit_save]
wiki_refs: [pages/modkit/project/vehicle/03-appearance.chunks/part-002.md]
dump_version: volcados ModKit 2026-10-31 | inzoi-modkit 2025-03-26 (129 tools, captured 2026-10-31)
generado: 2026-10-31
---

# WF-02: Modificar el material o la textura de un asset existente

**Objetivo:** cambiar la apariencia (material o textura) de un item que ya esta en un proyecto de mod, sin tocar su mesh.
**EN:** change the material or texture of an item already in a mod project, without touching its mesh.
**Nivel:** principiante
**Ruta:** modkit-offline

**Pasos:**

1. `modkit_list_projects` (inzoi-modkit) — localiza el proyecto del asset. Resultado esperado: el plugin_name en la lista.
2. `modkit_list_workspaces` (inzoi-modkit) — identifica el workspace y su item. Resultado esperado: { plugin, count, workspaces: [...] }. Si el item no aparece: el asset puede no tener workspace todavia (ver WF-08).
3. `modkit_list_meshes` (inzoi-modkit) — lista los slots de mesh y el nombre de componente que espera `modkit_assign_material` en esa familia de workspace. Resultado esperado: slots con nombre exacto.
4. `modkit_list_materials` (inzoi-modkit) — materials registrados en el workspace y sus parametros de textura. Resultado esperado: materiales con nombres de parametro. Si no hay materiales: crear uno primero con `modkit_create_material` (ver WF-16).
5. `modkit_set_material_texture` (inzoi-modkit) — cambia un parametro de textura del material. Regla del volcado: comprobar los nombres de parametro antes con `modkit_list_materials`. Si falla: el nombre del parametro no coincide; releer el listado.
6. `modkit_assign_material` (inzoi-modkit) — aplica el material al slot (en BUILD escribe OverrideMaterials del componente; en CAZ el material referenciado). Si falla: el nombre de component debe venir de `modkit_list_meshes`/`modkit_list_components`.
7. `modkit_refresh_workspace` (inzoi-modkit) — un solo refresco de UI al final de los cambios. Resultado esperado: panel de detalles y preview 3D actualizados.
8. `modkit_inspect_workspace` (inzoi-modkit) — verificacion intermedia: estado de campos y completitud. Si marca campos requeridos vacios: rellenarlos antes de guardar.
9. `modkit_save` (inzoi-modkit) — guarda el proyecto.

**Advertencias:**
- Retornos 'unspecified' en el volcado para todas las herramientas inzoi-modkit de este flujo.
- Para aplicar texturas de usuario nuevas (PNG/JPG) hace falta importarlas primero: `modkit_import_texture` (WF-16), o en vivo con `smartbuild_set_object_texture` (experimental, WF-17).
- Variante CAZ: para el mesh de un socket de accesorio acoplado existe `modkit_set_attached_accessory_socket_mesh` (mesh vacio elimina la entrada).

**Herramientas:** modkit_list_projects, modkit_list_workspaces, modkit_refresh_workspace, modkit_list_meshes, modkit_list_materials, modkit_set_material_texture, modkit_assign_material, modkit_inspect_workspace, modkit_save (inzoi-modkit)

**Categorias CLI tocadas:** ninguna

**Wiki:** pages/modkit/project/vehicle/03-appearance.chunks/part-002.md
## English version (EN)

**Goal:** change the appearance (material or texture) of an item that already lives in a mod project, without touching its mesh.

**Level:** beginner. **Route:** modkit-offline.

**Steps:**

1. `modkit_list_projects` (inzoi-modkit) — find the asset's project. Expected: the plugin_name in the list.
2. `modkit_list_workspaces` (inzoi-modkit) — identify the workspace and its item. Expected: { plugin, count, workspaces: [...] }. If the item is not there: the asset may not have a workspace yet (see WF-08).
3. `modkit_list_meshes` (inzoi-modkit) — list the mesh slots and the component name that `modkit_assign_material` expects in this workspace family. Expected: slots with exact names.
4. `modkit_list_materials` (inzoi-modkit) — materials registered in the workspace and their texture parameters. Expected: materials with parameter names. If there are none: create one first with `modkit_create_material` (see WF-16).
5. `modkit_set_material_texture` (inzoi-modkit) — change a texture parameter of the material. Dump rule: check parameter names first with `modkit_list_materials`. If it fails: the parameter name does not match; re-read the listing.
6. `modkit_assign_material` (inzoi-modkit) — apply the material to the slot (in BUILD it writes the component's OverrideMaterials; in CAZ the referenced material). If it fails: the component name must come from `modkit_list_meshes`/`modkit_list_components`.
7. `modkit_refresh_workspace` (inzoi-modkit) — a single UI refresh at the end of the changes. Expected: detail panel and 3D preview updated.
8. `modkit_inspect_workspace` (inzoi-modkit) — intermediate check: field state and completion. If it flags empty required fields: fill them before saving.
9. `modkit_save` (inzoi-modkit) — save the project.

**Warnings:**
- Returns are 'unspecified' in the dump for every inzoi-modkit tool in this flow.
- To apply new user textures (PNG/JPG) they must be imported first: `modkit_import_texture` (WF-16), or live with `smartbuild_set_object_texture` (experimental, WF-17).
- CAZ variant: for the mesh of an attached accessory socket there is `modkit_set_attached_accessory_socket_mesh` (an empty mesh deletes the entry).
