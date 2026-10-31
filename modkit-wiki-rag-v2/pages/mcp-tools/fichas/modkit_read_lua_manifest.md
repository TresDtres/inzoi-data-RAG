---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-lua
tools: [modkit_read_lua_manifest]
wiki_refs: []
---

## modkit_read_lua_manifest

**Servidor:** inzoi-modkit | **Dominio:** authoring-lua

**Qué hace:** Lee el manifest de bindings lua_manifest.json: devuelve el objeto completo mas conteos resumidos por entorno; tiene secciones bindings (arrays por env de {type, key, script}) y chunkScripts.

**Descripción actual del MCP:** Read `lua_manifest.json` plus per-env counts. `bindings`: per-env `{type, key, script}`; `chunkScripts`: per-env module paths auto-loaded by path. Missing file returns an empty manifest with `exists=false`.

**Cuándo usarla:** Para inspeccionar los bindings actuales del mod.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de Lua en el editor del ModKit

**Herramientas relacionadas:** ninguna mencionada en el volcado
