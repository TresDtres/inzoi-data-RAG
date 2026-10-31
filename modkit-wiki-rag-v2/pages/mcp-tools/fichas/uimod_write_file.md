---
source: mcp-tools
server: inzoi-game
dump_version: inzoi-game.json (protocol 2024-11-05, 414 tools, captured 2026-10-21)
generado: 2026-10-31
categoria: ficha
dominio: authoring-ui
tools: [uimod_write_file]
wiki_refs: []
---

## uimod_write_file

**Servidor:** inzoi-game | **Dominio:** authoring-ui

**Qué hace:** Escribe un archivo dentro del directorio de un mod bajo Documents/inZOI/Mods/InGame/ (ruta relativa a la raiz del mod): crear o actualizar HTML, JS, CSS y demas archivos del mod UI.

**Descripción actual del MCP:** Write a file inside a mod directory under the user InGame mods directory. Use this to create or update HTML, JS, CSS files for UI mods. Path is relative to the mod root.

**Cuándo usarla:** Para escribir o modificar el codigo de un mod de UI en vivo.

**Requisitos:** mod_id existente bajo InGame/; path relativo a la raiz del mod.

**Parámetros clave:**
- `mod_id` (string, obligatorio) — Mod identifier
- `path` (string, obligatorio) — Relative path from mod root (e.g. ui/MyApp/app.js)
- `content` (string, obligatorio) — File content to write

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de UI en vivo (juego en marcha)

**Herramientas relacionadas:** ninguna mencionada en el volcado

**Cadena de authoring:** Paso WRITE del pipeline: se usa tras uimod_scaffold (o sobre cualquier mod existente) y se complementa con uimod_read_file para revisar antes de editar.
