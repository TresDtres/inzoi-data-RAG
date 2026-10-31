---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: materiales
tools: [modkit_set_material_texture]
wiki_refs: [pages/modkit/project/vehicle/03-appearance.chunks/part-002.md]
---

## modkit_set_material_texture

**Servidor:** inzoi-modkit | **Dominio:** materiales

**Qué hace:** Cambia un parametro de textura de una instancia de material.

**Descripción actual del MCP:** Set a texture parameter on a material instance. Get both names from modkit_list_materials.

**Cuándo usarla:** Para aplicar una textura importada a un material existente.

**Requisitos:** Comprobar los nombres de parametro antes con modkit_list_materials (regla del volcado).

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Workspace item ID
- `material` (string, obligatorio) — material asset path
- `param` (string, obligatorio) — texture parameter name
- `texture` (string, obligatorio) — texture asset path

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear y asignar materiales

**Herramientas relacionadas:** `modkit_list_materials`
