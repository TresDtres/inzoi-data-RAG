---
source: local
title: "Verificación Lua en el juego en ejecución (2026-10-15)"
generado: 2026-10-15
---

# Verificación Lua en el juego en ejecución (2026-10-15)

## Evidencia en vivo

- `game_get_state` devolvió `phase: in_game`, mapa `RedCity_Map`, `is_lobby: false`, `game_started: true` y entidad poseída `23256`.
- `lua_api_lookup` para `FB2Character` tuvo éxito. El catálogo del runtime devolvió el tipo, `require('Objects.B2Character')`, 65 propiedades y 269 funciones.
- `lua_module_list {"entity_id":"23256"}` respondió `[]`: no hay módulos Lua dinámicos listados para la entidad poseída.
- `system_get_paths` identificó un proceso Shipping con Unreal Engine `5.6.1-0+UE5`. `Saved/Logs/BlueClient.log` no existe.
- `Saved/Diagnostics/UnofficialModEnvironment.json` existe y contiene `HasModsFolder:false`, `ModsPakCount:0`, `HasDsoundDLL:false`, `HasSigLua:false` y `ModsFolderNames:[]`.
- `Saved/BlueLuaKit/` contiene `SkillProbe_20261012_4ACA8822`, `SondaLua_7WCSO0` y `Zoi_Heights_85D2F0E3`; las fechas de modificación son anteriores a esta comprobación y no demuestran que estén montados ahora.
- Se creó el mod temporal `LuaRuntimeProbe_4D7VJ3`; `luamod_mount`, `luamod_reload {"Target":"b2"}` y `luamod_unmount` respondieron correctamente. El mod se desmontó y su carpeta se eliminó.
- El primer probe intentó dejar un marcador con `io.open`; no era una prueba válida porque `workspace/lua/AGENTS.md` establece que `io` está bloqueado. Se desmontó y eliminó.
- Prueba concluyente desde el editor Script: proyecto `LuaCallbackProbe_404BB4FA`, workspace `LuaCallbackProbe`, binding `B2/Zoi/CallbackProbe.lua` (`type=Zoi`, `key=ResidenceFamily`). `on_begin` y `on_tick` emitieron mensajes `print`; el usuario confirmó que aparecieron en la pestaña **Output**.
- `modkit_validate_lua_script` devolvió `ok:true`, `errors:0`, `warnings:0`. `modkit_start_lua_preview` devolvió `mounted:true`; al terminar, `modkit_end_lua_preview` devolvió `unmounted:true`.
- Salida adicional del editor: `[11:30:05] [Info] Validation succeeded.`
- Tras la prueba, el juego seguía en `RedCity_Map` con la entidad `23256` poseída. `ui_get_blocking` indicó `modal_ui`, `popup_count:0`, `esc_stack_remains:true`; no se cerró ninguna UI y no se determinó la causa.

## Conclusión

Queda verificada en el build actual la ruta **ModKit Script → binding B2 Zoi → callback Lua → Output** para la clave `ResidenceFamily`. Esto demuestra ejecución real de estos callbacks; no certifica cada binding, entorno B1 ni toda la API Lua.

`lua_api_lookup` también respondió para `FB2Character`. `lua_module_list` devolvió `[]`, que solo informa de módulos dinámicos y no descarta scripts con manifest binding. Aunque `UnofficialModEnvironment` informó `HasSigLua:false`, el callback observado prueba que ese campo no sirve por sí solo para concluir que Lua esté inactivo.

**Estado:** callback de simulación B2 verificado; preview desmontado y guardado de partida sin cambios. El proyecto de prueba queda en el ModKit para inspección.

## Próximo inicio del juego

Reabrir el juego y el workspace `LuaCallbackProbe`, volver a iniciar el preview y confirmar de nuevo en **Output** las señales `on_begin` y `on_tick`. Esto probará la carga del callback en un proceso recién iniciado; no prueba persistencia de un mod empaquetado, ya que el preview es temporal. Desmontar el preview al terminar.

## Antecedente

La verificación del 2026-10-09 montó, recargó y desmontó `MCPVerifyLua_LS9R9Q`, pero no verificó una señal observable de ejecución de callback; no probaba la ejecución de scripts en el build actual.
