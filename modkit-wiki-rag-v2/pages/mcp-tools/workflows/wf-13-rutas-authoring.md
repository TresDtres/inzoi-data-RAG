---
source: mcp-tools
categoria: workflow
nivel: principiante
tools: [uimod_scaffold, uimod_write_file, uimod_read_file, uimod_remount, modkit_create_uimod_app, modkit_rename_uimod_app, modkit_delete_uimod_app, modkit_list_uimod_files, modkit_read_uimod_file, modkit_write_uimod_file, modkit_write_uimod_manifest, modkit_read_uimod_manifest, modkit_refresh_uimod_workspace, modkit_validate_uimod, modkit_start_uimod_preview, modkit_end_uimod_preview, modkit_list_uimod_cli_categories, modkit_list_uimod_cli_commands, modkit_get_uimod_cli_command, modkit_create_lua_script, modkit_write_lua_script, modkit_read_lua_script, modkit_rename_lua_script, modkit_list_lua_scripts, modkit_list_lua_bindings, modkit_add_lua_binding, modkit_remove_lua_binding, modkit_list_lua_binding_types, modkit_list_lua_binding_keys, modkit_read_lua_manifest, modkit_write_lua_manifest, modkit_validate_lua_script, modkit_list_lua_recipes, modkit_list_lua_api_catalog, modkit_search_lua_api, modkit_lookup_lua_api, modkit_search_lua_api_docs, modkit_get_lua_api_doc, modkit_get_lua_cli_command, modkit_get_lua_enum, modkit_start_lua_preview, modkit_end_lua_preview, modkit_reload_lua_preview, modkit_save]
wiki_refs: [pages/modkit/project/uimod/01-overview.md, pages/modkit/project/uimod/03-workspace.chunks/part-002.md, pages/wiki/cli/luamod.md, pages/wiki/cli/uimod.md]
dump_version: inzoi-game 2024-11-05 (412) | inzoi-modkit 2025-03-26 (129 tools, captured 2026-10-31)
generado: 2026-10-31
---

# WF-13: Rutas de authoring: en vivo vs editor del ModKit

**Objetivo:** elegir la ruta correcta para crear mods de UI o Lua y conocer los pasos de cada una.
**EN:** choose the right authoring route for UI and Lua mods and know the steps of each.
**Nivel:** principiante
**Ruta:** mixta (comparativa)

**Ruta EN VIVO (servidor inzoi-game)**

- Donde vive: Documents/inZOI/Mods/InGame/{mod_id}/ (creado por el scaffold).
- UI: `uimod_scaffold` (crea mod o app) - `uimod_write_file` / `uimod_read_file` (editar) - `uimod_remount` (hot-reload en el juego). Sin validacion estatica; la verificacion es visual en partida.
- Lua: `luamod_scaffold` (crea mod o subarbol lua/ con manifest y bindings) - `lua_api_lookup` (API real ANTES de escribir) - `luamod_write_file` / `luamod_read_file` - `luamod_reload` (hot-reload).
- Cuando usarla: iteracion rapida de prueba sobre el juego en marcha, prototipos, o anadir lua/ a un mod UI existente.

**Ruta EDITOR DEL MODKIT (servidor inzoi-modkit)**

- Donde vive: proyecto/workspace del editor ({Plugin}/ui/ o workspace/lua/).
- UI: `modkit_create_uimod_app` (scaffold con 4 archivos y template) - `modkit_list_uimod_files` / `modkit_read_uimod_file` / `modkit_write_uimod_file` (2 MiB por llamada; defer_refresh para lotes) - `modkit_read_uimod_manifest` / `modkit_write_uimod_manifest` (con validacion de esquema) - `modkit_refresh_uimod_workspace` - `modkit_validate_uimod` (validacion estatica: enabled:false, carpetas huerfanas, manifest invalido) - `modkit_start_uimod_preview` / `modkit_end_uimod_preview` (publicacion en el juego en marcha, REGLA: confirmar antes, nunca auto-preview) - `modkit_save`.
- Regla del volcado para ambas herramientas CLI de apps: antes de escribir inzoi.cli.execute(...) en app.js, confirmar id/params/resultado con `modkit_list_uimod_cli_categories` - `modkit_list_uimod_cli_commands` - `modkit_get_uimod_cli_command` (usage_js canonico). Nunca inventar ids: lo que no este en cli_catalog.json falla en runtime.
- Lua: `modkit_list_lua_scripts` - `modkit_create_lua_script` (scaffold con lifecycle callbacks segun binding) - `modkit_read_lua_script` / `modkit_write_lua_script` - bindings: `modkit_list_lua_binding_types` / `modkit_list_lua_binding_keys` / `modkit_add_lua_binding` / `modkit_remove_lua_binding` / `modkit_list_lua_bindings` / `modkit_read_lua_manifest` / `modkit_write_lua_manifest` - callbacks, `inzoi.*`, CLI y enums: `modkit_list_lua_api_catalog`, `modkit_get_lua_cli_command`, `modkit_get_lua_enum`.
- Descubrimiento C++ expuesto a Lua: primero `modkit_search_lua_api`, despues `modkit_lookup_lua_api` con el tipo canonico. Para entender comportamiento, buscar con `modkit_search_lua_api_docs` y leer el `document_id` con `modkit_get_lua_api_doc` (admite filtrar una seccion). La documentacion de comportamiento no demuestra que un miembro C++ sea invocable desde Lua; eso se confirma con los metadatos de exportacion actuales.
- Ejemplos: `modkit_list_lua_recipes` - validacion: `modkit_validate_lua_script` (BlueLuaKit) - preview en vivo: `modkit_start_lua_preview` / `modkit_reload_lua_preview` / `modkit_end_lua_preview` - `modkit_save`.
- Cuando usarla: mods que se van a publicar (el flujo termina en `modkit_package` y CurseForge, WF-03), necesidad de validacion estatica (BlueLuaKit, schemas de manifest), o edicion multi-archivo con refresco controlado.

**Comparacion rapida**

| | En vivo (inzoi-game) | ModKit (inzoi-modkit) |
|---|---|---|
| Ciclo | scaffold - escribir - remount/reload | scaffold - escribir - validar - preview - save - package |
| Validacion | no documentada | modkit_validate_uimod / modkit_validate_lua_script |
| Consulta de API | lua_api_lookup | modkit_list_lua_api_catalog / modkit_search_lua_api / modkit_lookup_lua_api / modkit_search_lua_api_docs / modkit_get_lua_api_doc / modkit_get_lua_enum / modkit_get_lua_cli_command |
| Publicacion | fuera de alcance (en vivo) | modkit_package - modkit_cf_publish (WF-03) |
| Riesgo tipico | romper el juego en marcha | workspace desincronizado (delete sin quitar binding) |

**Pasos "a verificar en vivo":** la migracion de un mod creado en vivo hacia un proyecto del ModKit (y viceversa) no esta documentada en volcado ni wiki.

**Advertencias:**
- Gestion de apps y scripts en el kit: `modkit_rename_uimod_app` (carpeta + entrada atomicas), `modkit_delete_uimod_app` (borra carpeta y entrada; promueve otra app a default si hace falta), `modkit_rename_lua_script` (no actualiza el manifest) y `modkit_delete_lua_script` (quitar el binding aparte).
- En la ruta del kit, `modkit_delete_uimod_file`/`modkit_delete_lua_script` no sincronizan manifiestos (quitar aparte el binding/entrada); `modkit_start_uimod_preview` exige confirmacion explicita del usuario.
- `uimod_scaffold`/`luamod_scaffold` exigen preguntar antes si el destino es mod nuevo o mod existente (regla del volcado).

**Herramientas:** en vivo (inzoi-game): uimod_scaffold, uimod_write_file, uimod_read_file, uimod_remount, luamod_scaffold, lua_api_lookup, luamod_write_file, luamod_read_file, luamod_reload; kit (inzoi-modkit): modkit_create_uimod_app, modkit_rename_uimod_app, modkit_delete_uimod_app, modkit_list_uimod_files, modkit_read_uimod_file, modkit_write_uimod_file, modkit_read_uimod_manifest, modkit_write_uimod_manifest, modkit_refresh_uimod_workspace, modkit_validate_uimod, modkit_start_uimod_preview, modkit_end_uimod_preview, modkit_list_uimod_cli_categories, modkit_list_uimod_cli_commands, modkit_get_uimod_cli_command, modkit_create_lua_script, modkit_list_lua_scripts, modkit_read_lua_script, modkit_write_lua_script, modkit_list_lua_bindings, modkit_add_lua_binding, modkit_remove_lua_binding, modkit_list_lua_binding_types, modkit_list_lua_binding_keys, modkit_read_lua_manifest, modkit_write_lua_manifest, modkit_validate_lua_script, modkit_list_lua_recipes, modkit_list_lua_api_catalog, modkit_search_lua_api, modkit_lookup_lua_api, modkit_search_lua_api_docs, modkit_get_lua_api_doc, modkit_get_lua_cli_command, modkit_get_lua_enum, modkit_start_lua_preview, modkit_end_lua_preview, modkit_reload_lua_preview, modkit_save

**Categorias CLI tocadas:** mods-de-ui, mods-de-lua

**Wiki:** pages/modkit/project/uimod/01-overview.md, pages/modkit/project/uimod/03-workspace.chunks/part-002.md, pages/wiki/cli/luamod.md, pages/wiki/cli/uimod.md
## English version (EN)

**Goal:** choose the right route for creating UI or Lua mods and know each one's steps.

**Level:** beginner. **Route:** mixed (comparison).

**LIVE ROUTE (inzoi-game server)**

- Where it lives: Documents/inZOI/Mods/InGame/{mod_id}/ (created by the scaffold).
- UI: `uimod_scaffold` (creates mod or app) - `uimod_write_file` / `uimod_read_file` (edit) - `uimod_remount` (hot-reload in game). No static validation; verification is visual in-session.
- Lua: `luamod_scaffold` (creates mod or lua/ subtree with manifest and bindings) - `lua_api_lookup` (real API BEFORE writing) - `luamod_write_file` / `luamod_read_file` - `luamod_reload` (hot-reload).
- When to use it: fast test iteration on the running game, prototypes, or adding lua/ to an existing UI mod.

**MODKIT EDITOR ROUTE (inzoi-modkit server)**

- Where it lives: the editor's project/workspace ({Plugin}/ui/ or workspace/lua/).
- UI: `modkit_create_uimod_app` (scaffold with 4 files and template) - `modkit_list_uimod_files` / `modkit_read_uimod_file` / `modkit_write_uimod_file` (2 MiB per call; defer_refresh for batches) - `modkit_read_uimod_manifest` / `modkit_write_uimod_manifest` (with schema validation) - `modkit_refresh_uimod_workspace` - `modkit_validate_uimod` (static validation: enabled:false, orphan folders, invalid manifest) - `modkit_start_uimod_preview` / `modkit_end_uimod_preview` (publishing to the running game, RULE: confirm first, never auto-preview) - `modkit_save`.
- Dump rule for both app CLI tools: before writing any inzoi.cli.execute(...) in app.js, confirm id/params/return with `modkit_list_uimod_cli_categories` - `modkit_list_uimod_cli_commands` - `modkit_get_uimod_cli_command` (canonical usage_js). Never invent ids: anything not in cli_catalog.json fails at runtime.
- Lua: `modkit_list_lua_scripts` - `modkit_create_lua_script` (scaffold with lifecycle callbacks per binding) - `modkit_read_lua_script` / `modkit_write_lua_script` - bindings: `modkit_list_lua_binding_types` / `modkit_list_lua_binding_keys` / `modkit_add_lua_binding` / `modkit_remove_lua_binding` / `modkit_list_lua_bindings` / `modkit_read_lua_manifest` / `modkit_write_lua_manifest` - callbacks, `inzoi.*`, CLI and enums: `modkit_list_lua_api_catalog`, `modkit_get_lua_cli_command`, `modkit_get_lua_enum`.
- Lua-exported C++ discovery: first `modkit_search_lua_api`, then `modkit_lookup_lua_api` with the canonical type. To understand behavior, search with `modkit_search_lua_api_docs` and read the returned `document_id` with `modkit_get_lua_api_doc` (which can return one Markdown section). Behavior documentation does not prove that a C++ member is callable from Lua; confirm that with current export metadata.
- Examples: `modkit_list_lua_recipes` - validation: `modkit_validate_lua_script` (BlueLuaKit) - live preview: `modkit_start_lua_preview` / `modkit_reload_lua_preview` / `modkit_end_lua_preview` - `modkit_save`.
- When to use it: mods meant to be published (the flow ends in `modkit_package` and CurseForge, WF-03), need for static validation (BlueLuaKit, manifest schemas), or multi-file editing with controlled refresh.

**Quick comparison**

| | Live (inzoi-game) | ModKit (inzoi-modkit) |
|---|---|---|
| Cycle | scaffold - write - remount/reload | scaffold - write - validate - preview - save - package |
| Validation | not documented | modkit_validate_uimod / modkit_validate_lua_script |
| API lookup | lua_api_lookup | modkit_list_lua_api_catalog / modkit_get_lua_enum / modkit_get_lua_cli_command |
| Publishing | out of scope (live) | modkit_package - modkit_cf_publish (WF-03) |
| Typical risk | breaking the running game | desynchronized workspace (delete without removing binding) |

**Steps "to be checked live":** migrating a mod created live into a ModKit project (and vice versa) is not documented in dump or wiki.

**Warnings:**
- App and script management in the kit: `modkit_rename_uimod_app` (folder + entry atomic), `modkit_delete_uimod_app` (deletes folder and entry; promotes another app to default if needed), `modkit_rename_lua_script` (does not update the manifest) and `modkit_delete_lua_script` (remove the binding separately).
- On the kit route, `modkit_delete_uimod_file`/`modkit_delete_lua_script` do not sync manifests (remove the binding/entry separately); `modkit_start_uimod_preview` requires the user's explicit confirmation.
- `uimod_scaffold`/`luamod_scaffold` require asking first whether the target is a new mod or an existing one (dump rule).
