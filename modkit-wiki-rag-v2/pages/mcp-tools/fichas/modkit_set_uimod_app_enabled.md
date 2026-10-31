---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-ui
tools: [modkit_set_uimod_app_enabled]
wiki_refs: []
---

## modkit_set_uimod_app_enabled

**Servidor:** inzoi-modkit | **Dominio:** authoring-ui

**Qué hace:** Activa o desactiva el flag enabled de una app en uimod_apps.json; las apps desactivadas quedan en disco pero el juego las ignora al cargar el mod.

**Descripción actual del MCP:** Set an app's `enabled` flag in `uimod_apps.json`. Disabled apps stay on disk but the game skips them. Also registers `orphaned_folders` reported by `modkit_list_uimod_apps`.

**Cuándo usarla:** Para desactivar temporalmente una app o registrar apps detectadas en disco (orphaned_folders).

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `app` (string, obligatorio) — App name
- `enabled` (boolean, opcional) — Target enabled state

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de UI en el editor del ModKit

**Herramientas relacionadas:** `modkit_list_uimod_apps`, `uimod_apps`
