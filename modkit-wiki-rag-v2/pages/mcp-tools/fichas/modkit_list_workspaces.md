---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: proyecto
tools: [modkit_list_workspaces]
wiki_refs: []
---

## modkit_list_workspaces

**Servidor:** inzoi-modkit | **Dominio:** proyecto

**Qué hace:** Devuelve los workspaces que pertenecen a un plugin, con id, clase (BUILD/CAZ/Language/...), display_name y datos de libro o tabla.

**Descripción actual del MCP:** List a plugin's workspaces. Use after add_workspace to check exactly one was added. Returns { plugin, count, workspaces: [{id, class, display_name?, book_id?, table_name?, dlc_code?}] }. id is the workspace item id (Language: the target_culture).

**Cuándo usarla:** Tras modkit_add_workspace para verificar que se anadio exactamente uno, o para inspeccionar que tipos de workspace tiene un proyecto.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un proyecto y sus workspaces

**Herramientas relacionadas:** ninguna mencionada en el volcado
