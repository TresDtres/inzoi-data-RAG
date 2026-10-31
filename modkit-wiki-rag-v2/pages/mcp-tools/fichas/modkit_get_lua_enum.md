---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-lua
tools: [modkit_get_lua_enum]
wiki_refs: []
---

## modkit_get_lua_enum

**Servidor:** inzoi-modkit | **Dominio:** authoring-lua

**Qué hace:** Devuelve los miembros y valores enteros de un enum Lua concreto (p. ej. EB2EntityType, EB2ManagerType, EB1CharacterGroupType): {name, count, members:[{name, value}]}; los enums son accesibles bajo el espacio de nombres inzoi.

**Descripción actual del MCP:** Get a Lua enum's members `{name, value}`. In Lua use `inzoi.<Enum>.<Member>`, e.g. `inzoi.EB2EntityType.Character`.

**Cuándo usarla:** Para usar valores enum exactos en un script.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `name` (string, obligatorio) — Case-sensitive enum name, e.g. 'EB2EntityType'; search with modkit_list_lua_api_catalog(category='enum')

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de Lua en el editor del ModKit

**Herramientas relacionadas:** ninguna mencionada en el volcado
