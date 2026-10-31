---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-lua
tools: [modkit_list_lua_recipes]
wiki_refs: []
---

## modkit_list_lua_recipes

**Servidor:** inzoi-modkit | **Dominio:** authoring-lua

**Qué hace:** Lista las recetas de onboarding integradas (scripts de ejemplo listos para usar), cada una con su binding y codigo de ejemplo; con include_body=true devuelve el fuente Lua completo.

**Descripción actual del MCP:** List built-in example scripts with their binding target (env, type, key, module).

**Cuándo usarla:** Como punto de partida para patrones de mod comunes.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `include_body` (boolean, opcional) — Include full Lua source. Default false.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de Lua en el editor del ModKit

**Herramientas relacionadas:** ninguna mencionada en el volcado
