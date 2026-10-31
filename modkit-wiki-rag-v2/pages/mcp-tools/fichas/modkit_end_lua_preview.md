---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-lua
tools: [modkit_end_lua_preview]
wiki_refs: []
---

## modkit_end_lua_preview

**Servidor:** inzoi-modkit | **Dominio:** authoring-lua

**Qué hace:** Detiene la preview en vivo de los scripts Lua enviando un comando de unmount al juego; si el juego no esta corriendo, tiene exito silenciosamente.

**Descripción actual del MCP:** Unmount the Lua preview from the running game. Succeeds with `unmounted=false` if the game is not running.

**Cuándo usarla:** Al terminar la prueba.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de Lua en el editor del ModKit

**Herramientas relacionadas:** ninguna mencionada en el volcado
