---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-ui
tools: [modkit_set_default_uimod_app]
wiki_refs: []
---

## modkit_set_default_uimod_app

**Servidor:** inzoi-modkit | **Dominio:** authoring-ui

**Qué hace:** Marca exactamente una app como default del workspace UIMod (el resto pasa a default:false). Solo edita uimod_apps.json, no toca archivos.

**Descripción actual del MCP:** Make one app the default (others become non-default). Edits only `uimod_apps.json`.

**Cuándo usarla:** Para elegir que app se muestra por defecto.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `app` (string, obligatorio) — App to set as default

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de UI en el editor del ModKit

**Herramientas relacionadas:** `uimod_apps`
