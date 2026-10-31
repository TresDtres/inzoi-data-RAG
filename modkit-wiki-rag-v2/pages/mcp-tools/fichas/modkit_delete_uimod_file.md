---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-ui
tools: [modkit_delete_uimod_file]
wiki_refs: []
---

## modkit_delete_uimod_file

**Servidor:** inzoi-modkit | **Dominio:** authoring-ui

**Qué hace:** Borra un archivo de la carpeta de la app (no borra directorios; para una app entera usar modkit_delete_uimod_app).

**Descripción actual del MCP:** Delete one file in an app folder (not directories; use `modkit_delete_uimod_app` for a whole app).

**Cuándo usarla:** Para limpiar archivos sobrantes de una app.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `app` (string, obligatorio) — App name
- `path` (string, obligatorio) — Path relative to ui/{app}/
- `defer_refresh` (boolean, opcional) — Skip the preview reload in a multi-file batch; call modkit_refresh_uimod_workspace once after.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de UI en el editor del ModKit

**Herramientas relacionadas:** `modkit_delete_uimod_app`
