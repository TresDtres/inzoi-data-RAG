---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: materiales
tools: [modkit_list_material_types]
wiki_refs: []
---

## modkit_list_material_types

**Servidor:** inzoi-modkit | **Dominio:** materiales

**Qué hace:** Devuelve los tipos de material que se pueden crear para el tipo de workspace actual.

**Descripción actual del MCP:** List material types creatable in this workspace.

**Cuándo usarla:** Antes de crear un material, para conocer los tipos disponibles.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Workspace item ID

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear y asignar materiales

**Herramientas relacionadas:** ninguna mencionada en el volcado
