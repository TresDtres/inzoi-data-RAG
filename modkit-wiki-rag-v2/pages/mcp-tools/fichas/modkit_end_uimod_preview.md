---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-ui
tools: [modkit_end_uimod_preview]
wiki_refs: []
---

## modkit_end_uimod_preview

**Servidor:** inzoi-modkit | **Dominio:** authoring-ui

**Qué hace:** Desmonta una preview iniciada por modkit_start_uimod_preview: pide al juego el unmount via JSON-RPC uimod.unmount y borra la carpeta ModKitPreview y el snapshot de staging.

**Descripción actual del MCP:** End a preview from `modkit_start_uimod_preview`: unmounts it in game and deletes `ModKitPreview/{plugin}/`. Call only when the user asks to stop/remove the preview; closing the workspace also cleans up. Safe when no preview exists or the game is offline (`unmount_accepted: false`).

**Cuándo usarla:** Al terminar de probar la app.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de UI en el editor del ModKit

**Herramientas relacionadas:** `modkit_start_uimod_preview`
