---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: assets
tools: [modkit_begin_asset_capture]
wiki_refs: []
---

## modkit_begin_asset_capture

**Servidor:** inzoi-modkit | **Dominio:** assets

**Qué hace:** Captura el estado de assets del proyecto antes de un 'Add to Project' de Fab.

**Descripción actual del MCP:** Snapshot project assets before Fab Add to Project.

**Cuándo usarla:** Primer paso del flujo de captura de assets de Fab (Quixel).

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `workspace_id` (string, obligatorio) — target workspace Id
- `workspace_type` (string, obligatorio) — Example: AttachedAccessory, CazSet
- `purpose` (string, opcional) — capture purpose
- `label` (string, opcional) — session label

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: capturar assets de Fab (Add to Project)

**Herramientas relacionadas:** ninguna mencionada en el volcado
