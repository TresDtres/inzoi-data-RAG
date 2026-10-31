---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-lua
tools: [modkit_list_lua_binding_keys]
wiki_refs: []
---

## modkit_list_lua_binding_keys

**Servidor:** inzoi-modkit | **Dominio:** authoring-lua

**Qué hace:** Lista los valores de clave validos para un par (env, type); para claves enum devuelve los miembros del enum y para las libres el formato esperado; supports_wildcard=true significa que la clave '*' vale para todas las entidades del tipo.

**Descripción actual del MCP:** List valid keys for an (env, type): enum members, or format metadata for free-form keys. ObjectTemplate/Household `keys` include base-game and open-plugin ids (plugin ones also in `plugin_added_keys`). `supports_wildcard=true`: key `*` matches all.

**Cuándo usarla:** Para elegir la clave exacta de un binding.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `env` (string, obligatorio) — 'B2' or 'B1'
- `type` (string, obligatorio) — Binding type, e.g. 'Component'

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de Lua en el editor del ModKit

**Herramientas relacionadas:** ninguna mencionada en el volcado
