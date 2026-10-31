---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-ui
tools: [modkit_delete_uimod_app]
wiki_refs: []
---

## modkit_delete_uimod_app

**Servidor:** inzoi-modkit | **Dominio:** authoring-ui

**Qué hace:** Borra una app UI: elimina la carpeta en disco y su entrada en uimod_apps.json; si era la default, promueve la siguiente app y la devuelve como new_default.

**Descripción actual del MCP:** Delete a UI Mod app folder and its `uimod_apps.json` entry. If it was the default, the next app is promoted and returned as `new_default`.

**Cuándo usarla:** Cuando el usuario confirma el borrado de una app.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `app_name` (string, obligatorio) — App to delete

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de UI en el editor del ModKit

**Herramientas relacionadas:** `uimod_apps`
