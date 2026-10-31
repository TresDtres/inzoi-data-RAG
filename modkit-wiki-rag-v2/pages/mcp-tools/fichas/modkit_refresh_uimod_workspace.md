---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-ui
tools: [modkit_refresh_uimod_workspace]
wiki_refs: []
---

## modkit_refresh_uimod_workspace

**Servidor:** inzoi-modkit | **Dominio:** authoring-ui

**Qué hace:** Recarga los paneles del workspace UIMod una sola vez; es el complemento del flag defer_refresh de las herramientas de escritura: con un refactor de varios archivos, escribe todo con defer_refresh:true y llama esto al final.

**Descripción actual del MCP:** Reload the UIMod workspace panels/preview once. Call after a multi-file batch written with `defer_refresh: true`. No-op (`workspace_panel_refreshed: false`) if the workspace tab is closed.

**Cuándo usarla:** Tras una serie de escrituras con defer_refresh.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `app` (string, opcional) — Also refresh this app's manifest form and preview; omit to only re-sync the app list.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de UI en el editor del ModKit

**Herramientas relacionadas:** ninguna mencionada en el volcado
