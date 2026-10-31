---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-ui
tools: [modkit_read_uimod_file]
wiki_refs: []
---

## modkit_read_uimod_file

**Servidor:** inzoi-modkit | **Dominio:** authoring-ui

**Qué hace:** Lee un archivo de texto de la carpeta de la app como UTF-8 (index.html, app.js, css/main.css...); la ruta es relativa a la carpeta de la app.

**Descripción actual del MCP:** Read one text file in an app folder as UTF-8. Absolute paths and `..` are rejected.

**Cuándo usarla:** Para revisar el codigo antes de editarlo.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `app` (string, obligatorio) — App name
- `path` (string, obligatorio) — Path relative to ui/{app}/

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** Rechaza rutas absolutas y '..' con el error 'Path escapes the app directory' (documentado en el volcado).

**Forma parte de:** WF: crear un mod de UI en el editor del ModKit

**Herramientas relacionadas:** ninguna mencionada en el volcado
