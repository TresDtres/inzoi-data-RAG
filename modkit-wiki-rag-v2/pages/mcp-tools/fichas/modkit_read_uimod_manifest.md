---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-ui
tools: [modkit_read_uimod_manifest]
wiki_refs: []
---

## modkit_read_uimod_manifest

**Servidor:** inzoi-modkit | **Dominio:** authoring-ui

**Qué hace:** Devuelve el uimod_manifest.json de una app ya parseado como objeto ({name, entry, display, triggers}), incluyendo la ruta absoluta.

**Descripción actual del MCP:** Return an app's parsed `uimod_manifest.json` and its path. Read before `modkit_write_uimod_manifest` to change individual fields.

**Cuándo usarla:** Para inspeccionar lo que hay en disco antes de un modkit_write_uimod_manifest.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `app` (string, obligatorio) — App name

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de UI en el editor del ModKit

**Herramientas relacionadas:** `modkit_write_uimod_manifest`
