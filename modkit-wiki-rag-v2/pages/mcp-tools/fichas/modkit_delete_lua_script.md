---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-lua
tools: [modkit_delete_lua_script]
wiki_refs: []
---

## modkit_delete_lua_script

**Servidor:** inzoi-modkit | **Dominio:** authoring-lua

**Qué hace:** Borra un archivo del workspace de Lua. NO elimina el binding correspondiente de lua_manifest.json: quitarlo aparte con modkit_remove_lua_binding si hace falta.

**Descripción actual del MCP:** Delete one file from the Lua workspace. Does NOT remove its manifest binding; call `modkit_remove_lua_binding` too.

**Cuándo usarla:** Para limpiar scripts obsoletos.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `path` (string, obligatorio) — Path relative to workspace/lua/, e.g. B2/Zoi/Greeter.lua

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** El volcado advierte que el manifest queda desincronizado si no se quita el binding.

**Forma parte de:** WF: crear un mod de Lua en el editor del ModKit

**Herramientas relacionadas:** `modkit_remove_lua_binding`
