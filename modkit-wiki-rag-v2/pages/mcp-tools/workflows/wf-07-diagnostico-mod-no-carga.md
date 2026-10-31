---
source: mcp-tools
categoria: workflow
nivel: intermedio
tools: [modkit_status, modkit_list_projects, modkit_list_workspaces, modkit_inspect_workspace, modkit_set_uimod_app_enabled, modkit_set_default_uimod_app, modkit_validate_workspace, modkit_validate_uimod, modkit_validate_lua_script, modkit_list_uimod_apps, modkit_list_lua_scripts, modkit_list_lua_bindings, game_get_state, uimod_list, uimod_list_disabled, luamod_mount]
wiki_refs: [pages/modkit/project/uimod/02-files.chunks/part-002.md, pages/modkit/project/uimod/03-workspace.chunks/part-002.md]
dump_version: volcados ModKit 2026-10-31 | inzoi-game 2024-11-05 (412) | inzoi-modkit 2025-03-26 (129 tools, captured 2026-10-31)
generado: 2026-10-31
---

# WF-07: Diagnostico: "mi mod no carga"

**Objetivo:** localizar por que un mod (UI, Lua o de contenido) no aparece o no funciona y donde ver sus errores (incluido ver los errores de un mod de Lua en disco sin abrir el editor), recorriendo las causas de mas barata a mas cara.
**EN:** my mod (UI, Lua or content) doesn't load or doesn't work — find out why and where to see its errors, including Lua diagnostics on disk without opening the editor.
**Nivel:** intermedio
**Ruta:** mixta

**Pasos:**

1. `modkit_status` (inzoi-modkit) — el puente del editor responde. Si falla: el editor del ModKit no esta conectado; nada de lo demas del kit funcionara.
2. `modkit_list_projects` (inzoi-modkit) — el proyecto existe y esta cargado. Si no aparece: el proyecto no se ha abierto/creado en el editor.
3. `modkit_list_workspaces` (inzoi-modkit) — el workspace del item existe y es de la clase esperada. Si falta: `modkit_add_workspace` (WF-08).
4. `modkit_inspect_workspace` (inzoi-modkit) — campos requeridos vacios y completitud. Resultado esperado: lista de pasos siguientes recomendados; los campos meta=RequiredField vacios son causa tipica de que el juego ignore el item.
5. `modkit_validate_workspace` (inzoi-modkit) — validacion formal. Cubre tambien el caso CAZ de item repartido en dos tablas con valores divergentes.
6. Para mods de UI del kit:
   - `modkit_validate_uimod` (inzoi-modkit) — causa tipica documentada de "la app no sale en el juego": enabled:false en uimod_apps.json, carpeta huerfana con manifest, o manifest invalido.
   - `modkit_list_uimod_apps` (inzoi-modkit) — estado por app, incluyendo orphaned_folders.
   - Correcciones tipicas del kit: `modkit_set_uimod_app_enabled` para reactivar una app con enabled:false y `modkit_set_default_uimod_app` si falta la app por defecto.
7. Para mods de Lua del kit:
   - `modkit_validate_lua_script` (inzoi-modkit) — BlueLuaKit: sintaxis y diagnosticos del script.
   - `modkit_list_lua_scripts` + `modkit_list_lua_bindings` (inzoi-modkit) — el script existe y su binding esta registrado (file_exists=false = referencia rota).
8. Estado del juego:
   - `game_get_state` (inzoi-game) — el juego esta en partida y sin bloqueos.
   - `uimod_list` (inzoi-game) — el mod UI aparece como montado; si no, montarlo (`uimod_mount`).
   - `uimod_list_disabled` (inzoi-game) — aparece en la lista de deshabilitados (bEnable=false): habilitarlo con `uimod_enable`.
   - Para Lua: `luamod_mount` (inzoi-game) si no esta montado.
9. Donde ver los ERRORES de un mod sin abrir el editor — VERIFICADO CON SORPRESA EN VIVO (2026-10-09): el juego Shipping NO escribe log de texto (log_dir vacio), pero mantiene diagnostico de mods en disco: Saved/Diagnostics/UnofficialModEnvironment.json ({HasModsFolder, ModsPakCount, HasDsoundDLL, HasSigLua, ModsFolderNames}) y Saved/BlueLuaKit/<mod>/lua_diagnostics.json + lua_layout.json por mod Lua. Leer esos archivos cuando todo lo anterior esta en verde; las rutas se obtienen con `system_get_paths` (observado en este sistema: C:/Users/<usuario>/AppData/Local/BlueClient/Saved/Diagnostics/UnofficialModEnvironment.json y C:/Users/<usuario>/AppData/Local/BlueClient/Saved/BlueLuaKit/<mod>/lua_diagnostics.json y lua_layout.json, con schemaVersion, luaRoot y diagnosticos por mod). ver pages/local/verificaciones-2026-10-09.md (V8).

**Advertencias:**
- Flujo de solo lectura salvo las acciones correctivas citadas (enable/mount).
- Retornos unspecified en las herramientas del kit; los resultados citados provienen de las descripciones del volcado.

**Herramientas:** modkit_status, modkit_list_projects, modkit_list_workspaces, modkit_inspect_workspace, modkit_validate_workspace, modkit_validate_uimod, modkit_validate_lua_script, modkit_list_uimod_apps, modkit_list_lua_scripts, modkit_list_lua_bindings (inzoi-modkit); game_get_state, uimod_list, uimod_list_disabled, luamod_mount (inzoi-game)

**Categorias CLI tocadas:** mods-de-ui, mods-de-lua, partida-guardados-y-flujo

**Wiki:** pages/modkit/project/uimod/02-files.chunks/part-002.md, pages/modkit/project/uimod/03-workspace.chunks/part-002.md
## English version (EN)

**Goal:** find out why a mod (UI, Lua or content) does not appear or does not work, and where to see its errors (including reading a Lua mod's errors on disk without opening the editor), walking the causes from cheapest to most expensive.

**Level:** intermediate. **Route:** mixed.

**Steps:**

1. `modkit_status` (inzoi-modkit) — the editor bridge answers. If it fails: the ModKit editor is not connected; nothing else in the kit will work.
2. `modkit_list_projects` (inzoi-modkit) — the project exists and is loaded. If missing: the project was not opened/created in the editor.
3. `modkit_list_workspaces` (inzoi-modkit) — the item's workspace exists and is of the expected class. If missing: `modkit_add_workspace` (WF-08).
4. `modkit_inspect_workspace` (inzoi-modkit) — empty required fields and completeness. Expected: a list of recommended next steps; empty meta=RequiredField fields are the typical cause of the game ignoring the item.
5. `modkit_validate_workspace` (inzoi-modkit) — formal validation. Also covers the CAZ case of one item split across two tables with diverging values.
6. For the kit's UI mods:
   - `modkit_validate_uimod` (inzoi-modkit) — documented typical cause of "the app doesn't show in game": enabled:false in uimod_apps.json, an orphan folder with a manifest, or an invalid manifest.
   - `modkit_list_uimod_apps` (inzoi-modkit) — per-app state, including orphaned_folders.
   - Typical kit fixes: `modkit_set_uimod_app_enabled` to re-enable an app with enabled:false and `modkit_set_default_uimod_app` if the default app is missing.
7. For the kit's Lua mods:
   - `modkit_validate_lua_script` (inzoi-modkit) — BlueLuaKit: script syntax and diagnostics.
   - `modkit_list_lua_scripts` + `modkit_list_lua_bindings` (inzoi-modkit) — the script exists and its binding is registered (file_exists=false = broken reference).
8. Game state:
   - `game_get_state` (inzoi-game) — the game is in a session and unblocked.
   - `uimod_list` (inzoi-game) — the UI mod shows as mounted; if not, mount it (`uimod_mount`).
   - `uimod_list_disabled` (inzoi-game) — it appears in the disabled list (bEnable=false): enable it with `uimod_enable`.
   - For Lua: `luamod_mount` (inzoi-game) if not mounted.
9. Where to see a mod's ERRORS without opening the editor — VERIFIED WITH SURPRISE LIVE (2026-10-09): the Shipping game does NOT write a text log (log_dir empty), but keeps mod diagnostics on disk: Saved/Diagnostics/UnofficialModEnvironment.json ({HasModsFolder, ModsPakCount, HasDsoundDLL, HasSigLua, ModsFolderNames}) and Saved/BlueLuaKit/<mod>/lua_diagnostics.json + lua_layout.json per Lua mod. Read those files when everything above is green; the paths come from `system_get_paths` (observed on this system: C:/Users/<user>/AppData/Local/BlueClient/Saved/Diagnostics/UnofficialModEnvironment.json and C:/Users/<user>/AppData/Local/BlueClient/Saved/BlueLuaKit/<mod>/lua_diagnostics.json and lua_layout.json, with schemaVersion, luaRoot and per-mod diagnostics). See pages/local/verificaciones-2026-10-09.md (V8).

**Warnings:**
- Read-only flow except the corrective actions cited (enable/mount).
- Unspecified returns in the kit's tools; the cited results come from the dump's descriptions.
