---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: assets
tools: [modkit_list_components]
wiki_refs: []
---

## modkit_list_components

**Servidor:** inzoi-modkit | **Dominio:** assets

**Qué hace:** Devuelve todos los componentes del blueprint: [{component_name, component_class, attach_parent, attach_socket?},...].

**Descripción actual del MCP:** List blueprint components with class and attach parent/socket.

**Cuándo usarla:** Para elegir el componente objetivo de otras herramientas (assign_material, set_transform...).

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Workspace item ID

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: construir un objeto BUILD (mesh, componentes, transformadas)

**Herramientas relacionadas:** ninguna mencionada en el volcado
