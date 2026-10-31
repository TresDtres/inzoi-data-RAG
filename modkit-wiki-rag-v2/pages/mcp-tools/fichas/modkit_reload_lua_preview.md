---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-lua
tools: [modkit_reload_lua_preview]
wiki_refs: []
---

## modkit_reload_lua_preview

**Servidor:** inzoi-modkit | **Dominio:** authoring-lua

**Qué hace:** Reexporta los scripts del workspace y los remonta en el juego en ejecucion; equivale a end_lua_preview + start_lua_preview en una sola llamada.

**Descripción actual del MCP:** Re-export and re-mount scripts after edits while a preview is active. `remounted=false`: game not running.

**Cuándo usarla:** Tras editar scripts con la preview activa para ver cambios sin reiniciar.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de Lua en el editor del ModKit

**Herramientas relacionadas:** ninguna mencionada en el volcado
