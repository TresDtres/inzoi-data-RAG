---
source: mcp-tools
server: inzoi-game
dump_version: inzoi-game.json (protocol 2024-11-05, 414 tools, captured 2026-10-21)
generado: 2026-10-31
categoria: ficha
dominio: authoring-lua
tools: [luamod_read_file]
wiki_refs: []
---

## luamod_read_file

**Servidor:** inzoi-game | **Dominio:** authoring-lua

**Qué hace:** Lee un archivo de script Lua del directorio lua/ de un mod bajo Documents/inZOI/Mods/InGame/{mod_id}/lua/ (el prefijo lua/ se anade solo si falta).

**Descripción actual del MCP:** Read a Lua script file from a mod's lua/ directory under the user InGame mods directory. Path is relative to the mod root (lua/ prefix is auto-added if missing).

**Cuándo usarla:** Para revisar un script existente antes de editarlo.

**Requisitos:** mod_id existente; path relativo.

**Parámetros clave:**
- `mod_id` (string, obligatorio) — Mod identifier
- `path` (string, obligatorio) — Relative path from mod root (e.g. lua/B2/MyScript.lua or B2/MyScript.lua — lua/ prefix auto-added)

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de Lua en vivo (juego en marcha)

**Herramientas relacionadas:** ninguna mencionada en el volcado

**Cadena de authoring:** Paso READ del pipeline Lua: acompana a luamod_write_file en el ciclo editar-revisar.
