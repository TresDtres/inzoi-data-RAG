---
source: mcp-tools
server: inzoi-game
dump_version: inzoi-game.json (protocol 2024-11-05, 414 tools, captured 2026-10-21)
generado: 2026-10-31
categoria: ficha
dominio: authoring-lua
tools: [luamod_write_file]
wiki_refs: []
---

## luamod_write_file

**Servidor:** inzoi-game | **Dominio:** authoring-lua

**Qué hace:** Escribe un archivo de script Lua en el directorio lua/ de un mod bajo Documents/inZOI/Mods/InGame/{mod_id}/lua/ (el prefijo lua/ se anade solo si falta): crear o actualizar .lua y lua_manifest.json.

**Descripción actual del MCP:** Write a Lua script file inside a mod's lua/ directory under the user InGame mods directory. Path is relative to the mod root (lua/ prefix is auto-added if missing). Use this to create or update .lua files and lua_manifest.json.

**Cuándo usarla:** Para escribir o modificar los scripts de un mod de Lua en vivo.

**Requisitos:** mod_id existente; path relativo a la raiz del mod.

**Parámetros clave:**
- `mod_id` (string, obligatorio) — Mod identifier
- `path` (string, obligatorio) — Relative path from mod root (e.g. lua/B2/MyScript.lua or B2/MyScript.lua — lua/ prefix auto-added)
- `content` (string, obligatorio) — File content to write

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de Lua en vivo (juego en marcha)

**Herramientas relacionadas:** ninguna mencionada en el volcado

**Cadena de authoring:** Paso WRITE del pipeline Lua: tras luamod_scaffold; se complementa con luamod_read_file y con lua_api_lookup para escribir contra la API real.
