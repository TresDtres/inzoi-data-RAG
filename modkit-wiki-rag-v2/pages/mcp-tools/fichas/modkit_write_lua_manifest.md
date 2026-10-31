---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-lua
tools: [modkit_write_lua_manifest]
wiki_refs: []
---

## modkit_write_lua_manifest

**Servidor:** inzoi-modkit | **Dominio:** authoring-lua

**Qué hace:** Sobrescribe por completo lua_manifest.json con el objeto proporcionado; se valida con el parser FLuaManifestModel antes de escribir.

**Descripción actual del MCP:** Replace the whole `lua_manifest.json` (validated first). Prefer `modkit_add_lua_binding` / `modkit_remove_lua_binding` for incremental edits.

**Cuándo usarla:** Para reescribir el manifest completo de una vez.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `manifest` (object, obligatorio) — Full manifest: {bindings:{B2:[{type,key,script}],B1:[...]}, chunkScripts:{B2:[module],B1:[...]}}

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de Lua en el editor del ModKit

**Herramientas relacionadas:** `modkit_add_lua_binding`, `modkit_remove_lua_binding`
