---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-lua
tools: [modkit_list_lua_bindings]
wiki_refs: []
---

## modkit_list_lua_bindings

**Servidor:** inzoi-modkit | **Dominio:** authoring-lua

**Qué hace:** Lista todos los bindings y chunk scripts de lua_manifest.json: cada binding incluye {env, type, key, script, index, file_exists}; file_exists indica si el .lua referenciado esta en disco.

**Descripción actual del MCP:** List manifest bindings `{env, type, key, script, index, file_exists}` and chunk scripts `{env, module, file_exists}`. `file_exists=false` = broken link (file renamed/deleted).

**Cuándo usarla:** Para ver el estado de los bindings y detectar referencias a archivos inexistentes.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `env` (string, opcional) — 'B2' or 'B1'; omit for all

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de Lua en el editor del ModKit

**Herramientas relacionadas:** ninguna mencionada en el volcado
