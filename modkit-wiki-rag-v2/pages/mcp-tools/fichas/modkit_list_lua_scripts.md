---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-lua
tools: [modkit_list_lua_scripts]
wiki_refs: []
---

## modkit_list_lua_scripts

**Servidor:** inzoi-modkit | **Dominio:** authoring-lua

**Qué hace:** Lista todos los archivos .lua del workspace de Lua ({Plugin}/workspace/lua/): [{path, size, env, module},...] con rutas relativas.

**Descripción actual del MCP:** List .lua files under `workspace/lua/` as `{path, size, env, module}`. No Script workspace yet: empty list plus `note`; add one with `modkit_add_workspace(book_class='Script', book='Script')`.

**Cuándo usarla:** Para explorar los scripts de un mod de Lua.

**Requisitos:** El proyecto debe tener un workspace de Script; si no existe, crearlo antes con modkit_add_workspace (documentado en el volcado).

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `env` (string, opcional) — 'B2' or 'B1'; omit for all

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de Lua en el editor del ModKit

**Herramientas relacionadas:** `modkit_add_workspace`
