---
source: mcp-tools
server: inzoi-game
dump_version: inzoi-game.json (protocol 2024-11-05, 414 tools, captured 2026-10-21)
generado: 2026-10-31
categoria: ficha
dominio: authoring-ui
tools: [uimod_read_file]
wiki_refs: []
---

## uimod_read_file

**Servidor:** inzoi-game | **Dominio:** authoring-ui

**Qué hace:** Lee un archivo del directorio de un mod bajo Documents/inZOI/Mods/InGame/ (ruta relativa a la raiz del mod).

**Descripción actual del MCP:** Read a file from a mod directory under the user InGame mods directory. Use this to review existing code before editing.

**Cuándo usarla:** Para revisar el codigo existente antes de editarlo.

**Requisitos:** mod_id existente; path relativo.

**Parámetros clave:**
- `mod_id` (string, obligatorio) — Mod identifier
- `path` (string, obligatorio) — Relative path from mod root (e.g. ui/MyApp/app.js)

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de UI en vivo (juego en marcha)

**Herramientas relacionadas:** ninguna mencionada en el volcado

**Cadena de authoring:** Paso READ del pipeline: acompana a uimod_write_file dentro del ciclo editar-revisar de un mod creado con uimod_scaffold.
