---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-lua
tools: [modkit_read_lua_script]
wiki_refs: []
---

## modkit_read_lua_script

**Servidor:** inzoi-modkit | **Dominio:** authoring-lua

**Qué hace:** Lee un script Lua como UTF-8; la ruta es relativa a workspace/lua/ (p. ej. B2/Main.lua, B1/Components/Foo.lua).

**Descripción actual del MCP:** Read one file from the Lua workspace.

**Cuándo usarla:** Para revisar un script antes de editarlo.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `path` (string, obligatorio) — Path relative to workspace/lua/, e.g. B2/Main.lua; no absolute paths or '..'

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** Rechaza rutas absolutas y '..' (documentado en el volcado).

**Forma parte de:** WF: crear un mod de Lua en el editor del ModKit

**Herramientas relacionadas:** ninguna mencionada en el volcado
