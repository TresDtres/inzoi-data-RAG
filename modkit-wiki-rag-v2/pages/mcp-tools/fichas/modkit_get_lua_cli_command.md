---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-lua
tools: [modkit_get_lua_cli_command]
wiki_refs: []
---

## modkit_get_lua_cli_command

**Servidor:** inzoi-modkit | **Dominio:** authoring-lua

**Qué hace:** Devuelve la informacion detallada de un comando CLI concreto utilizable con inzoi.cli.execute() en scripts Lua: {id, description, scope, flags, params, returns?, return_schema_comment?}.

**Descripción actual del MCP:** Get one CLI command's params and return schema. Call before writing or changing any `inzoi.cli.execute` call; never invent ids (search with `modkit_list_lua_api_catalog(category='cli')`). Lua form: `local ok, msg, data = inzoi.cli.execute('id key=value ...')`; one command-line string in, `data` is a JSON string or nil, not a table.

**Cuándo usarla:** Antes de escribir inzoi.cli.execute() con un comando concreto.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `command` (string, obligatorio) — CLI command id, e.g. 'emotion.set', 'weather.list'

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de Lua en el editor del ModKit

**Herramientas relacionadas:** `modkit_list_lua_api_catalog`
