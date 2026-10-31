---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: proyecto
tools: [modkit_refresh_workspace]
wiki_refs: []
---

## modkit_refresh_workspace

**Servidor:** inzoi-modkit | **Dominio:** proyecto

**Qué hace:** Refresca la UI del workspace (panel de detalles y vista previa 3D). Llamar una sola vez al final tras varios cambios.

**Descripción actual del MCP:** Refresh the workspace details panel and 3D preview. set_data auto-refreshes; call once after other edits.

**Cuándo usarla:** Cuando el panel del editor no refleja los ultimos cambios aplicados.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Workspace item ID

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un proyecto y sus workspaces

**Herramientas relacionadas:** ninguna mencionada en el volcado
