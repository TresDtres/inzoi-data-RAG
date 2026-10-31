---
source: mcp-tools
categoria: workflow
nivel: principiante
tools: [modkit_list_projects, modkit_list_workspaces, modkit_import_texture, modkit_list_material_types, modkit_create_material, modkit_list_materials, modkit_set_material_texture, modkit_list_meshes, modkit_assign_material, modkit_refresh_workspace, modkit_validate_workspace, modkit_save]
wiki_refs: [pages/modkit/project/vehicle/03-appearance.chunks/part-002.md, pages/modkit/how-to/getting-started/04usingexternalassets.md]
dump_version: volcados ModKit 2026-10-31 | inzoi-modkit 2025-03-26 (129 tools, captured 2026-10-31)
generado: 2026-10-31
---

# WF-16: Importar una textura y crear un material nuevo

**Objetivo:** crear un material propio desde una imagen del usuario (PNG/JPG) y aplicarlo a un item.
**EN:** create a custom material from a user image (PNG/JPG) and apply it to an item; texture rules to read before importing.
**Nivel:** principiante
**Ruta:** modkit-offline

**Pasos:**

1. `modkit_list_projects` / `modkit_list_workspaces` (inzoi-modkit) — proyecto y workspace del item destino.
2. `modkit_import_texture` (inzoi-modkit) — importa la imagen local a Textures/ del plugin aplicando los ajustes del preset de uso (mip gen, texture group, compresion, sRGB, textura virtual, tamano maximo). Requisito del volcado: leer antes el recurso modkit://workspace-docs/texture_rules para elegir el preset. Resultado esperado: textura importada en el plugin.
3. `modkit_list_material_types` (inzoi-modkit) — tipos de material que admite el workspace actual (BUILD: Default, Prop, Glass...; VEHICLE: CarPaint, Prop; CAZ: Standard/Hair/Head/Body).
4. `modkit_create_material` (inzoi-modkit) — crea la MaterialInstanceConstant desde un material maestro; el prefijo MI_ se anade solo. Requisito del volcado: leer antes modkit://workspace-docs/material_rules. Resultado esperado: material registrado.
5. `modkit_list_materials` (inzoi-modkit) — materiales del workspace y sus parametros de textura (verificar nombres exactos antes del paso 6).
6. `modkit_set_material_texture` (inzoi-modkit) — asigna la textura importada al parametro del material.
7. `modkit_list_meshes` (inzoi-modkit) — slots de mesh y el nombre de component que espera assign_material en esa familia.
8. `modkit_assign_material` (inzoi-modkit) — aplica el material al slot (BUILD: OverrideMaterials del componente; CAZ: material referenciado).
9. `modkit_refresh_workspace` (inzoi-modkit) — un refresco de UI al final de la serie de cambios.
10. `modkit_validate_workspace` (inzoi-modkit) — verificacion formal.
11. `modkit_save` (inzoi-modkit).

**Advertencias:**
- VERIFICADO CON SORPRESA EN VIVO (2026-10-09): via resources/list + resources/read el servidor expone 61 recursos — 19 workspace-docs (texture_rules, material_rules, component_rules y uno por tipo de workspace), 29 datatable-docs y 17 data-asset-schemas. texture_rules y material_rules son markdown AUTO-GENERADO desde la doc oficial ("Auto-generated from the official ModKit docs by gen_rules_docs.py") con tablas de materiales maestros, sufijos de textura y compresion.
- Retornos unspecified en el volcado para todas las herramientas del kit de este flujo.

**Herramientas:** modkit_list_projects, modkit_list_workspaces, modkit_import_texture, modkit_list_material_types, modkit_create_material, modkit_list_materials, modkit_set_material_texture, modkit_list_meshes, modkit_assign_material, modkit_refresh_workspace, modkit_validate_workspace, modkit_save (inzoi-modkit)

**Categorias CLI tocadas:** ninguna

**Wiki:** pages/modkit/project/vehicle/03-appearance.chunks/part-002.md, pages/modkit/how-to/getting-started/04usingexternalassets.md
## English version (EN)

**Goal:** create a custom material from a user image (PNG/JPG) and apply it to an item.

**Level:** beginner. **Route:** modkit-offline.

**Steps:**

1. `modkit_list_projects` / `modkit_list_workspaces` (inzoi-modkit) — the target item's project and workspace.
2. `modkit_import_texture` (inzoi-modkit) — imports the local image into the plugin's Textures/ applying the usage preset's settings (mip gen, texture group, compression, sRGB, virtual texture, max size). Dump requirement: read the modkit://workspace-docs/texture_rules resource first to choose the preset. Expected: texture imported into the plugin.
3. `modkit_list_material_types` (inzoi-modkit) — material types the current workspace accepts (BUILD: Default, Prop, Glass...; VEHICLE: CarPaint, Prop; CAZ: Standard/Hair/Head/Body).
4. `modkit_create_material` (inzoi-modkit) — creates the MaterialInstanceConstant from a master material; the MI_ prefix is added automatically. Dump requirement: read modkit://workspace-docs/material_rules first. Expected: material registered.
5. `modkit_list_materials` (inzoi-modkit) — the workspace's materials and their texture parameters (verify exact names before step 6).
6. `modkit_set_material_texture` (inzoi-modkit) — assigns the imported texture to the material's parameter.
7. `modkit_list_meshes` (inzoi-modkit) — mesh slots and the component name assign_material expects in that family.
8. `modkit_assign_material` (inzoi-modkit) — applies the material to the slot (BUILD: the component's OverrideMaterials; CAZ: the referenced material).
9. `modkit_refresh_workspace` (inzoi-modkit) — one UI refresh at the end of the change series.
10. `modkit_validate_workspace` (inzoi-modkit) — formal verification.
11. `modkit_save` (inzoi-modkit).

**Warnings:**
- VERIFIED WITH SURPRISE LIVE (2026-10-09): via resources/list + resources/read the server exposes 61 resources — 19 workspace-docs (texture_rules, material_rules, component_rules and one per workspace type), 29 datatable-docs and 17 data-asset-schemas. texture_rules and material_rules are markdown AUTO-GENERATED from the official docs ("Auto-generated from the official ModKit docs by gen_rules_docs.py") with master-material tables, texture suffixes and compression.
- Unspecified returns in the dump for every kit tool in this flow.
