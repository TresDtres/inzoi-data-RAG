---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-lua
tools: [modkit_list_lua_binding_types]
wiki_refs: []
---

## modkit_list_lua_binding_types

**Servidor:** inzoi-modkit | **Dominio:** authoring-lua

**Qué hace:** Lista los tipos de binding validos por entorno: [{env, type, supports_wildcard, free_form, enum_name?, key_help?},...].

**Descripción actual del MCP:** List valid binding types per env as `{env, type, supports_wildcard, free_form, enum_name?, key_help?}`. Call before creating a bound script or adding a binding; never guess types.

**Cuándo usarla:** Antes de modkit_create_lua_script o modkit_add_lua_binding, para conocer los tipos disponibles.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `env` (string, opcional) — 'B2' or 'B1'; omit for all

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de Lua en el editor del ModKit

**Herramientas relacionadas:** ninguna mencionada en el volcado
