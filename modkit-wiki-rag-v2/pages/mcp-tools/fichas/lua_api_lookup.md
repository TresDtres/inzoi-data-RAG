---
source: mcp-tools
server: inzoi-game
dump_version: inzoi-game.json (protocol 2024-11-05, 414 tools, captured 2026-10-21)
generado: 2026-10-31
categoria: ficha
dominio: authoring-lua
tools: [lua_api_lookup]
wiki_refs: []
---

## lua_api_lookup

**Servidor:** inzoi-game | **Dominio:** authoring-lua

**Qué hace:** Busca un tipo exportado a Lua por inZOI en los metadatos de bindings del juego: devuelve su clase (kind), tipo base, ruta del chunk require(), propiedades, funciones directamente invocables y puntos de override (Override_<Func>). Es el mismo del que se generan las definiciones LuaLS enviadas (Content/Data/Lua/luals-defs).

**Descripción actual del MCP:** Look up an inZOI Lua-exported type from the game's binding metadata. Returns the type's kind, base type, require() chunk path, properties, directly-callable functions, and Lua override points (Override_<Func>). Use this BEFORE writing inzoi.* Lua so you call real API names instead of guessing. Backed by the same metadata that the shipped LuaLS definitions (Content/Data/Lua/luals-defs) are generated from. Examples: type="FB2Character", type="B2Script_Emotion", type="FB2Action_Eat".

**Cuándo usarla:** ANTES de escribir cualquier inzoi.* Lua, para llamar nombres de API reales en lugar de inventarlos (regla del volcado). Ejemplos: type="FB2Character", type="B2Script_Emotion", type="FB2Action_Eat".

**Requisitos:** type obligatorio; member opcional para acotar a un miembro.

**Parámetros clave:**
- `type` (string, obligatorio) — Exact exported type name to look up (e.g. FB2Character, B2Script_Emotion, FB2Action_Eat).
- `member` (string, opcional) — Optional case-insensitive substring filter on function/property/override names.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de Lua en vivo (juego en marcha)

**Herramientas relacionadas:** ninguna mencionada en el volcado

**Cadena de authoring:** Paso LOOKUP del pipeline Lua: complementa a luamod_scaffold y luamod_write_file verificando la API antes de escribir codigo.

**Uso como retrieval:** Un agente puede usarla como retrieval en vivo de la API Lua: cuando la wiki no documenta un tipo o funcion (o la documentacion esta incompleta), una llamada con type=<NombreTipo> devuelve la superficie real exportada (funciones, propiedades, overrides), permitiendo escribir y verificar codigo contra el juego en marcha en lugar de contra la wiki. Se encadena con luamod_write_file (escribir) y con el MCP del juego para la prueba en runtime.
