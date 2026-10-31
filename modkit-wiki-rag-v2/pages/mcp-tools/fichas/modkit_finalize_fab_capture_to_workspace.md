---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: assets
tools: [modkit_finalize_fab_capture_to_workspace]
wiki_refs: []
---

## modkit_finalize_fab_capture_to_workspace

**Servidor:** inzoi-modkit | **Dominio:** assets

**Qué hace:** Adopta el asset primario seleccionado en el plugin y lo enlaza con el workspace de inmediato.

**Descripción actual del MCP:** Adopt the chosen primary asset into the plugin and bind it to the workspace.

**Cuándo usarla:** Paso final del flujo Fab: el asset importado queda como asset del mod.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `session_id` (string, obligatorio) — Session ID from begin_asset_capture
- `primary_asset` (string, obligatorio) — Primary asset path to adopt
- `binding_type` (string, obligatorio) — One of attached_accessory_socket_mesh, caz_set_mesh, workspace_field
- `target_subpath` (string, opcional) — Subpath for adopted assets
- `include_dependencies` (boolean, opcional) — Include dependencies
- `mode` (string, opcional) — copy or move
- `socket` (string, opcional) — Socket name; required for attached_accessory_socket_mesh
- `field` (string, opcional) — Field name; required for workspace_field

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: capturar assets de Fab (Add to Project)

**Herramientas relacionadas:** ninguna mencionada en el volcado
