---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-lua
tools: [modkit_write_lua_script]
wiki_refs: []
---

## modkit_write_lua_script

**Servidor:** inzoi-modkit | **Dominio:** authoring-lua

**Qué hace:** Crea o sobrescribe un archivo de texto en el workspace de Lua, creando directorios intermedios automaticamente.

**Descripción actual del MCP:** Create or overwrite one file in the Lua workspace (directories auto-created). Extensions: .lua, .json, .txt, .md; max 2 MiB. For new scripts prefer `modkit_create_lua_script` (annotated scaffold). Keep real types on callback params (e.g. `---@param owner FB2Character`), never `any`.

**Cuándo usarla:** Para escribir o actualizar scripts .lua y archivos auxiliares.

**Requisitos:** Extensiones permitidas: .lua, .json, .txt, .md; limite de 2 MiB por llamada; UTF-8 sin BOM; para scripts nuevos con scaffold usar modkit_create_lua_script (documentado en el volcado).

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `path` (string, obligatorio) — Path relative to workspace/lua/, e.g. B2/Zoi/Greeter.lua
- `content` (string, obligatorio) — Full file content; empty string creates an empty file.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de Lua en el editor del ModKit

**Herramientas relacionadas:** `modkit_create_lua_script`
