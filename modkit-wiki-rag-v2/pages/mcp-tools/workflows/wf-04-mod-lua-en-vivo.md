---
source: mcp-tools
categoria: workflow
nivel: principiante
tools: [game_get_state, luamod_scaffold, luamod_write_file, luamod_read_file, lua_api_lookup, luamod_mount, luamod_reload, luamod_remount, luamod_unmount, lua_module_list, visual_show_zoi_info]
wiki_refs: [pages/wiki/cli/luamod.md, pages/wiki/cli/lua-module/lua-module-list.md, pages/wiki/cli/lua-module/lua-module-remove.md]
dump_version: volcados 2026-10-09 sin cambios | inzoi-game 2024-11-05 (412)
generado: 2026-10-09
---

# WF-04: Crear un mod de Lua EN VIVO (juego en marcha)

**Objetivo:** crear, editar y probar un mod de Lua sobre el juego en ejecucion, sin pasar por el editor del ModKit.
**EN:** create, edit and test a Lua mod on the running game, without opening the ModKit editor.
**Nivel:** principiante
**Ruta:** juego-en-vivo

**Pasos:**

1. `game_get_state` (inzoi-game) — confirma que el juego esta en partida (phase: in_game). Resultado esperado: phase 'in_game' y next_hint de gameplay. Si el juego esta en el menu: el mount fallara o el mod cargara en el siguiente arranque.
2. Decidir el destino (regla del volcado del scaffold): mod nuevo (pasar mod_name) o anadir lua/ a un mod existente (pasar mod_id existente bajo Documents/inZOI/Mods/InGame/). Preguntar al usuario si hay duda.
3. `luamod_scaffold` (inzoi-game) — crea el mod (o el subarbol lua/) con .uplugin, mod_manifest.json, lua/lua_manifest.json, lua/B2/Main.lua, lua/B2/{script_name}.lua y lua/B1/Main.lua; el script por destino se elige con type/key/env (por defecto Zoi, clave '*', B2) y lua_manifest.json queda con el binding correspondiente. Resultado esperado: archivos en disco con callbacks on_begin/on_end/on_tick y anotaciones LuaLS ---@param.
4. `lua_api_lookup` (inzoi-game) — ANTES de escribir inzoi.* Lua: consulta el tipo exportado real (kind, base, require(), propiedades, funciones, Override_<Func>). Resultado esperado: nombres de API reales. Si el tipo no existe: la respuesta lo dira; no inventar nombres (regla del volcado).
5. `luamod_read_file` (inzoi-game) — revisa el script generado antes de editarlo. Resultado esperado: el contenido UTF-8 del archivo.
6. `luamod_write_file` (inzoi-game) — escribe/actualiza los .lua y lua_manifest.json (prefijo lua/ auto-anadido). Resultado esperado: archivo actualizado.
7. `luamod_mount` (inzoi-game) — monta los scripts lua/ del mod en el juego. Resultado esperado: mod activo en runtime. Si falla: verificar que mod_id existe bajo Mods/ (o Mods/InGame/) y que el juego esta en marcha.
8. `luamod_reload` (inzoi-game) — tras editar scripts con el mod montado, recarga sin reiniciar. Resultado esperado: cambios visibles. Alternativa granular: `luamod_remount` (unmount + mount).
9. Verificacion en juego:
   - `lua_module_list` — lista los modulos Lua dinamicos adjuntos a una entidad; confirma que el modulo esta cargado.
   - `visual_show_zoi_info` — alterna la informacion de depuracion del Zoi en pantalla para observar efectos.
   - `game_get_state` — comprueba que el juego sigue operativo (sin bloqueos).
10. `luamod_unmount` (inzoi-game) — al terminar la prueba, desmonta los scripts del mod.

**Advertencias:**
- El volcado no documenta el retorno de game_get_state como esquema formal (return_type unspecified), aunque su contenido se describe en la instruccion del servidor.
- VERIFICADO EN VIVO (2026-10-09) con un mod de prueba (luamod_scaffold - archivos en disco - luamod_mount - luamod_reload - luamod_unmount, todo OK): los archivos persisten en disco (Documents/inZOI/Mods/InGame/<mod_id>, con sufijo aleatorio en el mod_id). La persistencia tras REINICIAR EL PROCESO del juego no fue verificable en sesion (no existe comando de reinicio). El scaffold crea ademas lua/.luarc.json y lua/AGENTS.md (no documentados en el volcado).
- La ruta equivalente por el editor del ModKit (mas lenta, con validacion BlueLuaKit) esta en WF-13.

**Herramientas:** game_get_state, luamod_scaffold, luamod_write_file, luamod_read_file, lua_api_lookup, luamod_mount, luamod_reload, luamod_remount, luamod_unmount, lua_module_list, visual_show_zoi_info (inzoi-game)

**Categorias CLI tocadas:** mods-de-lua, partida-guardados-y-flujo, diagnostico-y-sistema (visual)

**Wiki:** pages/wiki/cli/luamod.md, pages/wiki/cli/lua-module/lua-module-list.md, pages/wiki/cli/lua-module/lua-module-remove.md
## English version (EN)

**Goal:** create, edit and test a Lua mod on the running game, without going through the ModKit editor.

**Level:** beginner. **Route:** live game.

**Steps:**

1. `game_get_state` (inzoi-game) — confirm the game is in a session (phase: in_game). Expected: phase 'in_game' and a gameplay next_hint. If the game is at the menu: the mount will fail or the mod will load on next launch.
2. Decide the target (scaffold dump rule): a new mod (pass mod_name) or add lua/ to an existing mod (pass an existing mod_id under Documents/inZOI/Mods/InGame/). Ask the user if in doubt.
3. `luamod_scaffold` (inzoi-game) — creates the mod (or the lua/ subtree) with .uplugin, mod_manifest.json, lua/lua_manifest.json, lua/B2/Main.lua, lua/B2/{script_name}.lua and lua/B1/Main.lua; the script per target is chosen with type/key/env (defaults Zoi, key '*', B2) and lua_manifest.json keeps the matching binding. Expected: files on disk with on_begin/on_end/on_tick callbacks and LuaLS ---@param annotations.
4. `lua_api_lookup` (inzoi-game) — BEFORE writing any inzoi.* Lua: look up the real exported type (kind, base, require(), properties, functions, Override_<Func>). Expected: real API names. If the type does not exist: the response will say so; do not invent names (dump rule).
5. `luamod_read_file` (inzoi-game) — review the generated script before editing. Expected: the file's UTF-8 content.
6. `luamod_write_file` (inzoi-game) — write/update the .lua files and lua_manifest.json (lua/ prefix auto-added). Expected: file updated.
7. `luamod_mount` (inzoi-game) — mount the mod's lua/ scripts into the game. Expected: mod active at runtime. If it fails: verify mod_id exists under Mods/ (or Mods/InGame/) and that the game is running.
8. `luamod_reload` (inzoi-game) — after editing scripts with the mod mounted, reload without restarting. Expected: changes visible. Granular alternative: `luamod_remount` (unmount + mount).
9. In-game verification:
   - `lua_module_list` — lists the dynamic Lua modules attached to an entity; confirms the module is loaded.
   - `visual_show_zoi_info` — toggles the Zoi debug info on screen to observe effects.
   - `game_get_state` — check the game is still operative (no blocks).
10. `luamod_unmount` (inzoi-game) — when the test is done, unmount the mod's scripts.

**Warnings:**
- The dump does not document game_get_state's return as a formal schema (return_type unspecified), though its content is described in the server instructions.
- VERIFIED LIVE (2026-10-09) with a test mod (luamod_scaffold - files on disk - luamod_mount - luamod_reload - luamod_unmount, all OK): files persist on disk (Documents/inZOI/Mods/InGame/<mod_id>, with a random suffix in the mod_id). Persistence across a game process RESTART could not be checked in-session (no restart command exists). The scaffold also creates lua/.luarc.json and lua/AGENTS.md (not documented in the dump).
- The equivalent route through the ModKit editor (slower, with BlueLuaKit validation) is in WF-13.
