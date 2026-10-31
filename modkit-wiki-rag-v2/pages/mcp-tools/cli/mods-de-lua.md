---
source: mcp-tools
server: inzoi-game
dump_version: inzoi-game.json (protocol 2024-11-05, 414 tools; 407 CLI tools; captured 2026-10-15)
generado: 2026-10-15
categoria: cli-intencion
tools: [luamod_remount, luamod_unmount, luamod_mount, luamod_reload, mod_toggle_insight, lua_module_list, lua_module_remove]
wiki_refs: [pages/wiki/cli/lua-module/lua-module-list.md, pages/wiki/cli/lua-module/lua-module-remove.md, pages/wiki/cli/luamod/luamod-reload.md, pages/wiki/cli/mod/mod-toggle-insight.md]
---

## Mods de Lua en vivo

7 comandos CLI del servidor inzoi-game para esta intencion. Los nombres y parametros son exactos; la forma de retorno solo se cita cuando la wiki la declara.

**EN:** live Lua mods: scaffold, write, mount, hot-reload (luamod.reload), Lua API lookup (lua_api_lookup), diagnostics on disk.

| Comando | Sintaxis | Que hace | Descripcion MCP actual | Que devuelve | Tipo |
|---|---|---|---|---|---|
| luamod_remount | `luamod.remount(mod_id)` | Desmonta y vuelve a montar los scripts lua/ de un mod Lua por mod_id. | [CLI: luamod.remount] Unmount then re-mount a Lua mod's lua/ scripts by mod_id. Use after editing scripts to apply changes. | sin documentación oficial — el volcado es única fuente; requiere verificación en vivo | activo |
| luamod_unmount | `luamod.unmount(mod_id)` | Desmonta los scripts lua/ de un mod Lua por mod_id. | [CLI: luamod.unmount] Unmount a Lua mod's lua/ scripts by mod_id. Removes them from B1 immediately and B2 via packet. | sin documentación oficial — el volcado es única fuente; requiere verificación en vivo | activo |
| luamod_mount | `luamod.mount(mod_id)` | Monta los scripts lua/ de un mod Lua por mod_id (Documents/inZOI/Mods/[InGame/]). | [CLI: luamod.mount] Mount a Lua mod's lua/ scripts by mod_id ({UserModDir}/[InGame/]{mod_id}/lua). Loads into B1 immediately and B2 via packet. Use for Lua-only mods that uimod.mount cannot mount. | sin documentación oficial — el volcado es única fuente; requiere verificación en vivo | activo |
| luamod_reload | `luamod.reload(Target)` | Hot-reload de los entornos Lua: recarga todos los mods Lua montados. | [CLI: luamod.reload] Hot-reload Lua script environments. Reloads all mounted Lua mods without restarting. Default reloads both B1+B2. | no publicitado — completar tras prueba en vivo | activo |
| mod_toggle_insight | `mod.toggle_insight()` | Abre o cierra la superposicion del Mod Insight. | [CLI: mod.toggle_insight] Opens or closes the Mod Insight overlay widget. | no publicitado — completar tras prueba en vivo | activo |
| lua_module_list | `lua_module.list(entity_id)` | Lista todos los modulos Lua dinamicos adjuntos a una entidad. | [CLI: lua_module.list] List all dynamic Lua modules attached to an entity | wiki: Returns a JSON array; each element is an object with the following fields: | consultivo |
| lua_module_remove | `lua_module.remove(entity_id, Name)` | Quita un modulo Lua dinamico de una entidad. | [CLI: lua_module.remove] Remove a dynamic Lua module from an entity | no publicitado — completar tras prueba en vivo | activo |

### Enlaces a la wiki oficial

- [pages/wiki/cli/lua-module/lua-module-list.md](pages/wiki/cli/lua-module/lua-module-list.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/lua-module/lua-module-list
- [pages/wiki/cli/lua-module/lua-module-remove.md](pages/wiki/cli/lua-module/lua-module-remove.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/lua-module/lua-module-remove
- [pages/wiki/cli/luamod/luamod-reload.md](pages/wiki/cli/luamod/luamod-reload.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/luamod/luamod-reload
- [pages/wiki/cli/mod/mod-toggle-insight.md](pages/wiki/cli/mod/mod-toggle-insight.md) — https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/mod/mod-toggle-insight
