---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: proyecto
tools: [modkit_open_workspace]
wiki_refs: []
---

## modkit_open_workspace

**Servidor:** inzoi-modkit | **Dominio:** proyecto

**Qué hace:** Reabre un workspace cerrado. No hace falta justo tras modkit_add_workspace, que ya lo abre.

**Descripción actual del MCP:** Reopen a closed workspace. Not needed after add_workspace.

**Cuándo usarla:** Cuando un workspace cerrado vuelve a editarse.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `workspace_id` (string, obligatorio) — Workspace ID

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un proyecto y sus workspaces

**Herramientas relacionadas:** ninguna mencionada en el volcado
