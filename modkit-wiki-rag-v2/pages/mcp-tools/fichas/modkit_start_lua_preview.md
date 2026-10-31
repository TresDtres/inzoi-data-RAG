---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-lua
tools: [modkit_start_lua_preview]
wiki_refs: []
---

## modkit_start_lua_preview

**Servidor:** inzoi-modkit | **Dominio:** authoring-lua

**Qué hace:** Inicia una preview en vivo de los scripts Lua en el juego enZOI en ejecucion: exporta workspace/lua/ a un directorio de staging y envia un comando de montaje al proceso del juego. Si el juego no esta corriendo, la exportacion funciona igualmente y el mod cargara en el siguiente arranque.

**Descripción actual del MCP:** Export `workspace/lua/` and mount it in the running game. Call only if the request asked for a preview or the user confirmed; never auto-start (authoring ends at `modkit_save`). `mounted=false`: game not running, loads on next launch. After edits use `modkit_reload_lua_preview`; stop with `modkit_end_lua_preview`.

**Cuándo usarla:** Para probar los scripts en el juego.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de Lua en el editor del ModKit

**Herramientas relacionadas:** `modkit_end_lua_preview`, `modkit_reload_lua_preview`, `modkit_save`
