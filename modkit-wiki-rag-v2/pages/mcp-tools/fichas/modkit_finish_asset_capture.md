---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: assets
tools: [modkit_finish_asset_capture]
wiki_refs: []
---

## modkit_finish_asset_capture

**Servidor:** inzoi-modkit | **Dominio:** assets

**Qué hace:** Escanea el estado de assets tras completar el Add to Project y calcula los diffs de assets nuevos.

**Descripción actual del MCP:** After Fab Add to Project completes, scan and diff the new assets.

**Cuándo usarla:** Segundo paso del flujo de captura Fab.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `session_id` (string, obligatorio) — Session ID from begin_asset_capture

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: capturar assets de Fab (Add to Project)

**Herramientas relacionadas:** ninguna mencionada en el volcado
