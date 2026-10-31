---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-ui
tools: [modkit_rename_uimod_app]
wiki_refs: []
---

## modkit_rename_uimod_app

**Servidor:** inzoi-modkit | **Dominio:** authoring-ui

**Qué hace:** Renombra una app UI (carpeta y entrada en uimod_apps.json) de forma atomica; conserva las marcas default/enabled y refresca los paneles del workspace si esta abierto.

**Descripción actual del MCP:** Rename a UI Mod app (folder + `uimod_apps.json` entry); `default`/`enabled` are kept. A case-only rename (Foo → foo) updates the entry but not the folder; avoid it.

**Cuándo usarla:** Para reorganizar el nombre de una app existente.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `old_name` (string, obligatorio) — Current app name
- `new_name` (string, obligatorio) — New app name, [A-Za-z0-9_-]+

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de UI en el editor del ModKit

**Herramientas relacionadas:** `uimod_apps`
