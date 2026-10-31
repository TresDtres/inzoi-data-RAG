---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: materiales
tools: [modkit_assign_material]
wiki_refs: []
---

## modkit_assign_material

**Servidor:** inzoi-modkit | **Dominio:** materiales

**Qué hace:** Aplica un material a un slot de material. Soportado en workspaces BUILD y CAZ: en BUILD escribe el OverrideMaterials del componente del blueprint; en CAZ (prendas, pelo, cara, sets, accesorios) escribe el material referenciado.

**Descripción actual del MCP:** Apply a material to one mesh slot on BUILD (component OverrideMaterials) or CAZ (the mesh asset's slot). Not VEHICLE: use the editor details panel. Call modkit_list_meshes first for valid 'component' and 'slot'. CAZ meshes must be inside the mod's content folder (import/copy shipped meshes first). BUILD: compile resets assignments, so assign after any compile_bp.

**Cuándo usarla:** Cuando el material creado debe aplicarse al mesh.

**Requisitos:** En BUILD, un component de modkit_list_components; comprobar modkit_list_meshes para el nombre que espera cada familia.

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Workspace item ID
- `component` (string, obligatorio) — BUILD: mesh component name. CAZ: workspace mesh field (Mesh, DeformedMesh, ...). CAZ Skin: HeadMaterials or BodyMaterial.
- `material` (string, obligatorio) — material asset path (from modkit_create_material or modkit_list_materials)
- `slot` (integer, opcional) — Slot index from modkit_list_meshes (HeadMaterials: array index)

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear y asignar materiales

**Herramientas relacionadas:** `modkit_list_meshes`
