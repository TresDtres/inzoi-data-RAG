---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-ui
tools: [modkit_list_uimod_apps]
wiki_refs: []
---

## modkit_list_uimod_apps

**Servidor:** inzoi-modkit | **Dominio:** authoring-ui

**Qué hace:** Lista todas las apps UI Mod de un workspace UIMod, conciliando uimod_apps.json con las carpetas reales bajo {Plugin}/ui/; las carpetas huerfanas con manifest se reportan como orphaned_folders.

**Descripción actual del MCP:** List UI Mod apps in a plugin's UIMod workspace: `[{name, default, enabled, has_manifest}]`. Unregistered folders with a manifest appear in `orphaned_folders`; call `modkit_set_uimod_app_enabled` on each to register them. Requires a UIMod workspace (`modkit_add_workspace(book_class='UIMod', book='UIMod')`).

**Cuándo usarla:** Al abrir el trabajo sobre un mod UI, o para detectar apps huerfanas.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de UI en el editor del ModKit

**Herramientas relacionadas:** `modkit_add_workspace`, `modkit_set_uimod_app_enabled`
