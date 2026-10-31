---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: assets
tools: [modkit_list_meshes]
wiki_refs: []
---

## modkit_list_meshes

**Servidor:** inzoi-modkit | **Dominio:** assets

**Qué hace:** Devuelve los slots de mesh a los que se pueden asignar materiales y el nombre que modkit_assign_material espera como component (en BUILD, componentes mesh del blueprint; en CAZ, campos de mesh del workspace).

**Descripción actual del MCP:** List mesh slots that accept materials: the `component_name` modkit_assign_material expects, plus each slot's index, name and current material. BUILD: blueprint mesh components. CAZ: workspace mesh fields (Mesh, DeformedMesh, BodyMesh, FootTypeMesh[Flat], ...). VEHICLE returns []; use modkit_list_vehicle_components.

**Cuándo usarla:** Antes de asignar materiales o cambiar meshes, para conocer los slots disponibles.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Workspace item ID

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: construir un objeto BUILD (mesh, componentes, transformadas)

**Herramientas relacionadas:** `modkit_assign_material`, `modkit_list_vehicle_components`
