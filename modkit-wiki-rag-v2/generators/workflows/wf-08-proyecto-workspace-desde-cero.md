---
source: mcp-tools
categoria: workflow
nivel: principiante
tools: [modkit_status, modkit_list_projects, modkit_create_project, modkit_open_workspace, modkit_delete_workspace, modkit_delete_project, modkit_list_categories, modkit_list_books, modkit_list_cultures, modkit_add_workspace, modkit_list_workspaces, modkit_inspect_workspace, modkit_save]
wiki_refs: [pages/modkit/how-to/build/01overview.md, pages/modkit/how-to/caz/02steps.md, pages/modkit/how-to/vehicle/03workspace.md]
dump_version: volcados ModKit 2026-10-31 | inzoi-modkit 2025-03-26 (129 tools, captured 2026-10-31)
generado: 2026-10-31
---

# WF-08: Crear un proyecto y un workspace de ModKit desde cero

**Objetivo:** dejar un proyecto de mod con su primer workspace listo para editar, respetando las reglas de orden del volcado.
**EN:** start a mod project from scratch and add its first workspace, following the correct order of operations.
**Nivel:** principiante
**Ruta:** modkit-offline

**Pasos:**

1. `modkit_status` (inzoi-modkit) — el puente del editor responde. Si falla: abrir/conectar el editor del ModKit antes de continuar.
2. `modkit_list_projects` (inzoi-modkit) — inventario: evita crear duplicados y muestra que plantillas hay cargadas (Sample_Build y Sample_CAZ son muestras protegidas del kit).
3. Preguntar al usuario el nombre del proyecto (regla del volcado de modkit_create_project: no inventar nombres, no llamar dos veces).
4. `modkit_create_project` (inzoi-modkit) — crea el proyecto. Resultado esperado: proyecto nuevo en `modkit_list_projects`.
5. `modkit_list_categories` (inzoi-modkit) — categorias de libros de mod [{key, group?, count}]. Resultado esperado: keys exactos. Si falla: mostrar las categorias al usuario tal cual (los keys se pasan sin transformar).
6. `modkit_list_books` (inzoi-modkit) — con la categoria elegida: [{id, dlc_code},...]. Regla del volcado: no llamarlo sin categoria (salvo id concreto del usuario). Nota: para animacion, book_class es el valor unico CHARACTER_ANIMATION.
7. (Solo workspace Language) `modkit_list_cultures` (inzoi-modkit) — culturas para source_culture/target_culture; el codigo se pasa sin cambios.
8. `modkit_add_workspace` (inzoi-modkit) — crea y abre el workspace. Resultado esperado: { item_id, mode, ... }. Para book_class='DA' devuelve el bloque data_asset; para 'Language' las culturas.
9. `modkit_list_workspaces` (inzoi-modkit) — verificacion: exactamente un workspace nuevo y sin pares (class, id) duplicados.
10. `modkit_inspect_workspace` (inzoi-modkit) — muestra los campos obligatorios que faltan y los pasos siguientes recomendados; guiar al usuario a rellenarlos.
11. `modkit_save` (inzoi-modkit) — guarda. A partir de aqui: WF-02 (apariencia), WF-09 (datos) o WF-01 (mesh/materiales) segun el tipo.

**Advertencias:**
- BORRADO INCOMPLETO verificado en vivo (2026-10-09, V15, ver pages/local/verificaciones-2026-10-09.md): `modkit_delete_project` responde 'Success' pero deja la carpeta del proyecto en disco (~7 MB: patches autosave, POs, .uplugin, Meta/); hay que borrarla manualmente. `modkit_delete_workspace` no se verifico en vivo.
- Ciclo de vida: para reabrir un workspace cerrado existe `modkit_open_workspace` (no hace falta tras add_workspace, que ya lo abre). `modkit_delete_workspace` y `modkit_delete_project` son irreversibles y solo con confirmacion explicita (regla del volcado); no forman parte de este flujo.
- Retornos unspecified en el volcado para todas las herramientas del kit usadas aqui.

**Herramientas:** modkit_status, modkit_list_projects, modkit_create_project, modkit_list_categories, modkit_list_books, modkit_list_cultures, modkit_add_workspace, modkit_list_workspaces, modkit_inspect_workspace, modkit_save (inzoi-modkit)

**Categorias CLI tocadas:** ninguna

**Wiki:** pages/modkit/how-to/build/01overview.md, pages/modkit/how-to/caz/02steps.md, pages/modkit/how-to/vehicle/03workspace.md
## English version (EN)

**Goal:** end with a mod project holding its first workspace, ready to edit, respecting the dump's order rules.

**Level:** beginner. **Route:** modkit-offline.

**Steps:**

1. `modkit_status` (inzoi-modkit) — the editor bridge answers. If it fails: open/connect the ModKit editor before continuing.
2. `modkit_list_projects` (inzoi-modkit) — inventory: avoids creating duplicates and shows which templates are loaded (Sample_Build and Sample_CAZ are protected kit samples).
3. Ask the user for the project name (modkit_create_project dump rule: do not invent names, do not call twice).
4. `modkit_create_project` (inzoi-modkit) — create the project. Expected: the new project in `modkit_list_projects`.
5. `modkit_list_categories` (inzoi-modkit) — mod book categories [{key, group?, count}]. Expected: exact keys. If it fails: show the categories to the user as-is (keys are passed untransformed).
6. `modkit_list_books` (inzoi-modkit) — with the chosen category: [{id, dlc_code},...]. Dump rule: do not call it without a category (except with a concrete user id). Note: for animation, book_class is the single value CHARACTER_ANIMATION.
7. (Language workspace only) `modkit_list_cultures` (inzoi-modkit) — cultures for source_culture/target_culture; the code is passed unchanged.
8. `modkit_add_workspace` (inzoi-modkit) — creates and opens the workspace. Expected: { item_id, mode, ... }. With book_class='DA' it returns the data_asset block; with 'Language' the cultures.
9. `modkit_list_workspaces` (inzoi-modkit) — verification: exactly one new workspace and no duplicated (class, id) pairs.
10. `modkit_inspect_workspace` (inzoi-modkit) — shows the missing required fields and recommended next steps; guide the user to fill them.
11. `modkit_save` (inzoi-modkit) — save. From here: WF-02 (appearance), WF-09 (data) or WF-01 (mesh/materials) depending on the type.

**Warnings:**
- INCOMPLETE DELETE verified live (2026-10-09, V15, see pages/local/verificaciones-2026-10-09.md): `modkit_delete_project` answers 'Success' but leaves the project folder on disk (~7 MB: autosave patches, POs, .uplugin, Meta/); it must be deleted manually. `modkit_delete_workspace` was not verified live.
- Lifecycle: to reopen a closed workspace there is `modkit_open_workspace` (not needed after add_workspace, which already opens it). `modkit_delete_workspace` and `modkit_delete_project` are irreversible and only with explicit confirmation (dump rule); they are not part of this flow.
- Unspecified returns in the dump for every kit tool used here.
