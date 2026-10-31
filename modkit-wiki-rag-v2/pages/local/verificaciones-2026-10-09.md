---
source: local
title: "Verificación en vivo del backlog de pasos 'a verificar en vivo' (2026-10-09)"
generado: 2026-10-09
---

# Verificación en vivo del backlog (2026-10-09)

Ejecución en partida de prueba ("test agenda", Gangnam_Map) y editor del ModKit conectado.
Orden: consultivo -> activo (solo creación) -> delicado. Payload, retorno y errores literales
por paso. Los workflows afectados ya están actualizados con estos resultados.

## Verificados OK

### V1. WF-01 — Export FBX desde Blender (paso 5)
- Payload: `execute_blender_code` (blender) con `bpy.ops.export_scene.fbx(filepath=C:/.../verify_scene.fbx)`.
- Retorno: `FBX: ok`, archivo de 20.684 bytes en disco. Blender 5.2, MCP for Blender 1.30.0, addon 1.8, protocol 13.
- Errores: ninguno. (Un intento previo falló por `\n` literales dentro de r-strings del código enviado: SyntaxError del propio script, no del juego.)

### V2. WF-17 — Export glTF/GLB desde Blender (paso 3)
- Payload: `execute_blender_code` con `bpy.ops.export_scene.gltf(filepath=C:/.../verify_scene.glb, export_format='GLB')`.
- Retorno: `GLB: ok`, 132 bytes; logs de Draco y MeshOptimizer disponibles.
- Errores: ninguno.

### V3. WF-09 — `modkit_set_data` con value mal tipado
- Payload: `{"plugin": "MCPVerifyTest_B157D908", "item": "E01_Bed01", "field": "Price", "value": "abc"}`.
- Retorno (error literal): `Error: Invalid patch for Object[E01_Bed01].Price -- Field 'Price' is numeric (int64) but received non-numeric string 'abc'. Pass a number or numeric string.` + `Hint: Fix the value to match the field type...`
- Control con valor correcto (`"value": 25`): `{"success": true, "dlc": "E01", "dlc_auto_resolved": true}`.
- Control campo inexistente (`"field": "NoExiste"`): error que lista TODOS los campos válidos de `B1ObjectTableRow` (31 campos) y sugiere `modkit_get_row`.
- Conclusión: error tipado, sin efectos secundarios, sin corrupción.

### V4. WF-05 — Catálogo CLI en vivo desde la ruta del juego
- Payload: `cli_list {}` y `cli_help {"command": "camera.set_fov"}` (inzoi-game).
- Retorno: `cli_list` → `405 command(s) found` con nivel de acceso por comando (Public/UserCheat/ScriptCheat). `cli_help` → id, category, display, description, access, scope, `experimental: false`, params con default, aliases, returns.
- Conclusión: la ruta en vivo dispone de catálogo propio; no se necesita cli_catalog.json.

### V5. WF-12 — Transiciones game.* (parte estable)
- `game_goto_lobby {}` → `{"accepted": true, "saving": false}` + "Poll game.get_state until is_lobby == true". Estado verificado: `phase: lobby`, `is_lobby: true`. NO guarda la partida.
- `game_load {"Folder": "20260827-123845", "File": "20260827-123845_AutoSave_3"}` → `{"accepted": true, ...}`; tras polling, `phase: in_game` con el Zoi "test agenda" poseído. Restauración exacta verificada dos veces.
- `game_list_saves {}` → 34 slots paginados con folder/file/slot/save_type/is_autosave/nombres/mapa/saved_time/game_version/is_broken.
- Error literal adicional: `game_goto_lobby` estando ya en lobby → `Already in lobby`.

## Verificados con sorpresa (comportamiento distinto al documentado)

### V6. WF-06 — Getter de necesidades: `stat_get_all` SÍ las devuelve
- Payload: `stat_get_all {}` (inzoi-game).
- Retorno: `{"_type": "FB2StatComponent", "stats": {"Hunger": {...81%}, "Cleanliness", "Sleep", "Toilet", "Fun", "Society", "Admit", "Energy", "Weathering", "Karma", "Homesick"}, "stat_names": {"Hunger": "Hambre", "Cleanliness": "Higiene", ...}}`.
- Sorpresa: el volcado no documenta getter de necesidades; en vivo `stat_get_all` las devuelve con nombres localizados.

### V7. WF-06 — Getter del dinero del hogar: NO existe
- Payload: `data_list_tables {}` → 300+ alias, sin tabla de hogar/dinero (solo HouseholdBiz* de configuración).
- Payload: `data_table_get {"Alias": "Household", "Row": "16972"}` → error literal: `Unknown DataTable alias: 'Household'` (antes: `Missing required parameter 'Alias'. Usage: data.table_get <Alias:string> <Row:string>`).
- `household_list {}` devuelve 9 hogares con member_count y residencia, sin dinero.
- Conclusión: no hay ruta de lectura del dinero del hogar por CLI.

### V8. WF-07 — Diagnóstico sin logs de texto, pero con diagnósticos en disco
- Payload: `system_get_paths {}` → rutas completas del proceso (UE 5.6.1, Shipping), incluido `log_dir`.
- Sorpresa: `log_dir` (Saved/Logs) está VACÍO — el build Shipping no escribe BlueClient.log.
- Hallazgo no documentado: `Saved/Diagnostics/UnofficialModEnvironment.json` → `{"HasModsFolder": false, "ModsPakCount": 0, "HasDsoundDLL": false, "HasSigLua": false, "ModsFolderNames": []}` (diagnóstico de entorno de mods escrito por el propio juego), y `Saved/BlueLuaKit/<mod>/lua_diagnostics.json` + `lua_layout.json` por mod Lua (`{"schemaVersion": "1", "luaRoot": "...", "diagnostics": []}`).

### V9. WF-10 — Los PO se auto-generan al crear el workspace Language
- Payload: `modkit_add_workspace {"plugin": "MCPVerifyTest_B157D908", "name": "VerificaL10n", "book_class": "Language", "source_culture": "ko", "target_culture": "es-ES"}`.
- Retorno: `{"item_id": "es-ES", "source_culture": "ko", "target_culture": "es-ES", "mode": "Language", "reused": false, "target_enabled_in_game": true}` (campo `target_enabled_in_game` no documentado).
- `modkit_list_translation_files {}` → 2 archivos YA generados: `Intermediate/Localization/ko/Blue_UI.master.po` (4.926.076 bytes) e `Intermediate/Localization/es-ES_mod/Blue_UI.working.po` (2.279.718 bytes).
- Sorpresa: la generación inicial de PO es automática (el paso manual no existe).

### V10. WF-16 — Recursos workspace-docs: 61 recursos auto-generados
- Payload: MCP `resources/list` + `resources/read` sobre el servidor inzoi-modkit (puerto 11213).
- Retorno: 61 URIs — 19 `modkit://workspace-docs/*` (incluidos texture_rules y material_rules), 29 `modkit://datatable-docs/*`, 17 `modkit://data-asset-schemas/*`.
- Contenido de `texture_rules` (3.773 chars) y `material_rules` (3.155 chars): markdown con encabezado literal "Auto-generated from the official ModKit docs by `gen_rules_docs.py`. Do not edit by hand." — tablas de materiales maestros (`M_Char_Standard_Master`), parámetros MI, sufijos de textura (`_M`, `_D`, `_ARM`, `_N`), compresión y canales.
- Sorpresa: es una superficie documental completa (61 recursos) no reflejada en las fichas.

### V11. WF-12 — `game_continue` carga el guardado MANUAL más reciente, no el autosave
- Payload: `game_continue {}` desde lobby.
- Retorno: `{"accepted": true, "folder": "20260817-105104", "file": "20260817-105104", "slot": "tresdtres_li"}` — el manual de 01:45, IGNORANDO el autosave de 02:03 (`20260827-123845_AutoSave_3`, "test agenda").
- Efecto verificado: el poseído pasó de "test agenda" a "Yajie Li" (entity 18931 en aquel guardado).
- Contrasta con el volcado: "Loads the most recently saved (by saved_time) non-broken save. AutoSave slots included."
- Recuperación aplicada: `game_load` del slot explícito de "test agenda" (verificado).

### V12. WF-12 — `game_cancel_flow` NO hace rollback
- Payload: `game_new_game {}` → `{"accepted": true, "step": "click_new_game", "map_id": "Gangnam_Map"}`; inmediatamente `game_cancel_flow {}`.
- Retorno: `New game flow cancelled. The game is NOT rolled back - it is left wherever the flow stopped. Use game.goto_lobby to reset, or game.new_game force=true...` con `{"cancelled": true, "step": "cancelled"}`.
- Estado resultante: `phase: character_customize` (quedó a mitad del flujo). Recuperación aplicada con goto_lobby + game_load del slot original.

### V13. WF-17 — Persistencia de SmartBuild: las shapes NO sobreviven sin guardado
- Payload: `smartbuild_shape {"action": "spawn", "Shape": "cube", "X": 183950, "Y": -78080, "Z": 700, "sx": 100, "Label": "MCPVerifyCube"}` → `{"handle": 1, "shape": "Cube", "label": "MCPVerifyCube", ...}`; `action=list` → `1 shape(s) tracked`.
- Tras el ciclo `game_goto_lobby` -> `game_load` (sin guardado intermedio): `action=list` → `0 shape(s) tracked`. El cubo desapareció.
- Sorpresas adicionales: la interfaz real de `smartbuild_shape` es por `action` (list | spawn | spawn_at_screen | set_transform | set_color | destroy) con `Handle`, algo más rica que la glosa; y `smartbuild_import_and_place_mesh` con un .glb de 752 bytes responde `import_started` (asíncrono, sin estado final consultable por CLI).

### V14. WF-04 — Ciclo de mod Lua en vivo (con extras)
- Payload: `luamod_scaffold {"mod_name": "MCPVerifyLua", "script_name": "Verifier", "type": "Zoi", "key": "*", "env": "B2"}`.
- Retorno: mod `MCPVerifyLua_LS9R9Q` creado en `C:/Users/andre/OneDrive/Dokumente/inZOI/Mods/InGame/` (Documents redirigido a OneDrive — sorpresa de entorno). Archivos: B2/Verifier.lua, lua/lua_manifest.json, .uplugin, mod_manifest.json, B1/Main.lua, B2/Main.lua y DOS ARCHIVOS NO DOCUMENTADOS: `lua/.luarc.json` y `lua/AGENTS.md`.
- `luamod_read_file` (manifest) OK; `luamod_mount` → `Mounted Lua mod 'MCPVerifyLua_LS9R9Q' (...)`; `luamod_reload {}` → `Reloading B1 + B2 Lua environments`; `luamod_unmount` OK.
- Observaciones: `lua_module_list {"entity_id": 18931}` → `[]` (los scripts con binding no aparecen como "dynamic modules"); `uimod_list` no lista mods Lua ("0 mod(s) mounted").
- Limpieza: mod desmontado y carpeta de prueba eliminada.

### V15 (bonus) — `modkit_delete_project` deja residuos en disco
- Payload: `modkit_delete_project {"plugin": "MCPVerifyTest_B157D908"}` → `Success`.
- Sorpresa: la carpeta `D:/inZOIModKit/inZOIModKit/Mods/MCPVerifyTest_B157D908` quedó en disco con 7 MB (patches autosave, POs generados, .uplugin, Meta/). Eliminada manualmente.
- Otras literales capturadas en el proyecto de prueba: `modkit_inspect_workspace` sobre BUILD → `Error: This workspace type does not support inspection (no IWorkspaceAutomation).`

### V16. WF-18 — Creacion del negocio por CLI: NO es posible
- Payload: `household_biz_get_info {}` y `household_biz_set_business_template {"template_id": "Cafe_Default"}` (id real de `data_list_rows {"Alias": "HouseholdBizTemplate"}`).
- Retorno (ambos, error literal identico): `Could not resolve household_biz_id (not specified, and possessed character neither manages nor is located at a business)`.
- Plantillas de la tabla HouseholdBizTemplate: Bakery_Default, Cafe_Default, FitnessCenter_Default, PCCafe_Default, Restaurant_Default, PremiumRestaurant_Default, Club_Default, Lounge_Default, FlowerShop_Default, HairSalon_Default, ClothStore_Default, Accommodation_Default.
- Conclusion: los comandos household_biz requieren un negocio existente; la creacion debe hacerse por el flujo normal del juego.
- Literal adicional: `data_list_rows` exige `Alias` (no `table`): `Missing required parameter 'Alias'. Usage: data.list_rows <Alias:string> <Row:string>`.

### V17. V7 revisitado — Getter del dinero CON CHEATS ACTIVADOS: sigue sin existir
- Contexto: misma partida de prueba (Gangnam_Map) con cheats activados (Psycat's Advice -> Enable Cheats).
- Baseline V6 reconfirmado: `stat_get_all {}` -> necesidades con nombres localizados (Hunger 39,76 -> "Hambre"). Sin stat de dinero.
- `data_table_get {"Alias": "Household", "Row": "16972"}` -> error literal identico a V7: `Unknown DataTable alias: 'Household'`. Variante `'household'` en minusculas -> mismo error.
- Oracle del error generoso: NO existe. `data_table_get {"Alias": "ZZZNoExiste"}` -> mismo error corto sin lista de alias validos; con Alias vacio -> `'alias' parameter is required`. El unico oracle es `data_list_tables {}`: 389 DataTables, ninguna de balance; Currency y CurrencyExchange listan los TIPOS de moneda (`Zen`, `CatShopPoint`, `Mew`, `Nyang`, `Ong`, `ResortCoin`); la fila Zen (`data_table_get {"Alias": "Currency", "Row": "Zen"}`) es nameTextId/icon/colores: configuracion de UI, sin importes.
- `household_list {}` -> 10 hogares (miembro de prueba 'agenda', household_id 18929) con member_count y residencia, sin dinero.
- `cli_list {}` -> 405 comandos, identico con cheats ON. Literal nuevo de registro: `No tool named 'stat_get'. The CLI registry is ready (408 commands registered, 405 exposed as MCP tools)...` (3 comandos registrados no expuestos).
- `household_biz_get_info {}`, `household_biz_get_tip_amount {}` y `household_biz_set_business_template {"template_id": "Cafe_Default"}` -> mismo error de V16 con cheats ON: los cheats NO desbloquean la resolucion de negocio.
- `currency_add_money {"Amount": 1}` -> ok, retorno VACIO (sin readback del balance). Restaurado con `{"Amount": -1}` (ok, vacio); control `{"Amount": 0}` ok. Acceso declarado en cli_help: `UserCheat`, scope B2Authority, aliases `AddMoney`, `economy.add_money`. `currency.add_meow_coin` y `currency.add_resort_coin`: mismo acceso UserCheat.
- Observacion de entorno: `game_get_state {}` reportaba `blocked: modal_ui` (`esc_stack_remains: true`) durante toda la sesion; los comandos CLI respondieron con normalidad. No se descarto el modal (fuera de alcance).
- Conclusion: la lectura del dinero del hogar NO existe en ninguna superficie (CLI sin cheats, CLI con cheats activados, DataTables, stats, ni retorno de currency.add_money). Los cheats solo desbloquean la escritura (currency.add_*, UserCheat). Item elevado a 'gap de funcionalidad' en pages/local/informe-devs.md.

### V18. currency.add_money verificado con oraculo HUD — SI suma; existe caida silenciosa
- Oraculo de lectura descubierto: el HUD expone el saldo del hogar como widget de texto numerico legible con `ui_find {"Window": "Hud", "Role": "text"}` (p. ej. "49 673"). Es la primera via de LECTURA del saldo encontrada (el getter CLI sigue sin existir; V7/V17).
- Prueba controlada: saldo 49 673 -> `currency_add_money {"Amount": 50000}` -> 99 673 en menos de 4 s, estable a los 10 s. Segunda aplicacion identica -> 149 673. Retorno vacio en ambos casos (`ok: true`, sin readback).
- Anomalia: una ejecucion identica anterior en la misma sesion (mismo payload, ok, retorno vacio) NO aplico: el saldo seguia en 49 673 minutos despues. Causa no determinada; sospecha: estado del toggle de cheats o de la caja de cheats en ese momento.
- Literal de ventanas: `ui_list_windows {}` -> 5 ventanas; la caja de cheats es `WBP_Cheat_CheatBox_C` (ui_type UserCheat, z_order 450000, fullscreen) y es el "modal_ui" que reporta `game.get_state` desde V17. Nota: `ui.find` con filtro Name/Text no encontro widgets de dinero; el saldo aparece listando los widgets de texto del HUD (rol text) y filtrando el numerico de 4+ digitos.
- Conclusion: `currency.add_money` funciona y el HUD lo refleja en segundos. El retorno vacio NO distingue exito de caida silenciosa: tras aplicaciones criticas, verificar con el oraculo HUD. Los schema MCP usan los nombres exactos (`Amount`, required).

## No verificables (y por qué)

### N1. WF-01 — Ver un mueble (mod BUILD) dentro del juego
- Verificado por catálogo: ninguno de los 405 comandos CLI monta mods de contenido/BUILD (solo `uimod.mount`/`luamod.mount`). El paso completo (empaquetar, instalar en Documents/inZOI/Mods y reiniciar el juego) requiere un reinicio del proceso no automatizable en sesión.

### N2. WF-04 — Persistencia de un mod Lua tras reiniciar EL PROCESO del juego
- El ciclo montaje/recarga/desmontaje está verificado y los archivos persisten en disco, pero verificar la recarga tras reiniciar inZOI requiere matar y relanzar el juego, fuera del alcance de esta sesión (no existe comando de reinicio).

## Artefactos de la sesión
- Mod de prueba Lua: creado, verificado y eliminado (MCPVerifyLua_LS9R9Q).
- Proyecto de prueba ModKit: creado, verificado y eliminado (MCPVerifyTest_B157D908, incluida limpieza manual de 7 MB residuales).
- SmartBuild: cubo de prueba desaparecido con la recarga (sin limpieza necesaria).
- Partida restaurada al estado original: "test agenda" poseído, slot 20260827-123845_AutoSave_3.
- Capturas: ScreenShot00000.png (evidencia visual del import smartbuild, para revisión humana).
- No se modificó ningún dato existente del juego; todo lo creado fue artefacto de prueba y fue limpiado.
