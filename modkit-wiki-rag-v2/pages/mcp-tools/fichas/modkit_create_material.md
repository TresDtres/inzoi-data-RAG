---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: materiales
tools: [modkit_create_material]
wiki_refs: [pages/modkit/project/vehicle/03-appearance.chunks/part-002.md]
---

## modkit_create_material

**Servidor:** inzoi-modkit | **Dominio:** materiales

**Qué hace:** Crea una nueva MaterialInstanceConstant a partir de un material maestro; el prefijo MI_ se anade automaticamente.

**Descripción actual del MCP:** Create a material instance (MaterialInstanceConstant) from a master material. Returns its asset path.

**Cuándo usarla:** Cuando un item necesita un material propio.

**Requisitos:** Leer antes el recurso modkit://workspace-docs/material_rules (rutas de materiales maestros, nombres de parametros MI, sufijos de textura) segun el volcado.

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Workspace item ID
- `type` (string, obligatorio) — Type from modkit_list_material_types, chosen by the user
- `name` (string, obligatorio) — Name from the user (MI_ prefix added automatically)

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear y asignar materiales

**Herramientas relacionadas:** ninguna mencionada en el volcado
