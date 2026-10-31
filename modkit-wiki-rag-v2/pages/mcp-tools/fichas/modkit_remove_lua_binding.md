---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-lua
tools: [modkit_remove_lua_binding]
wiki_refs: []
---

## modkit_remove_lua_binding

**Servidor:** inzoi-modkit | **Dominio:** authoring-lua

**Qué hace:** Elimina una entrada de binding del lua_manifest.json, identificandola por index (de modkit_list_lua_bindings) o por los campos (type, key, script); el archivo .lua queda en disco.

**Descripción actual del MCP:** Remove one binding from lua_manifest.json by `index`, or by matching type/key/script (needs type or script; first match wins). The script file stays on disk.

**Cuándo usarla:** Para desenlazar un script.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `env` (string, obligatorio) — 'B2' or 'B1'
- `index` (integer, opcional) — Index from modkit_list_lua_bindings (preferred)
- `type` (string, opcional) — Type to match
- `key` (string, opcional) — Key to match
- `script` (string, opcional) — Module path to match

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** Buscando por campos gana la primera coincidencia (documentado en el volcado).

**Forma parte de:** WF: crear un mod de Lua en el editor del ModKit

**Herramientas relacionadas:** ninguna mencionada en el volcado
