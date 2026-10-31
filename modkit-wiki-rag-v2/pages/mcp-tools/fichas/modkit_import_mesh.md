---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: importación
tools: [modkit_import_mesh]
wiki_refs: [pages/modkit/project/vehicle/03-appearance.chunks/part-002.md]
---

## modkit_import_mesh

**Servidor:** inzoi-modkit | **Dominio:** importación

**Qué hace:** Importa un archivo FBX local a la carpeta Mesh del proyecto; segun el tipo de workspace aplica el script de importacion adecuado (BUILD: colision del mueble; CAZ prenda: binding al SK_Base, LOD...).

**Descripción actual del MCP:** Import a local FBX into the mod's Mesh folder (any workspace type). Do not call again for the same file, even after a timeout. BUILD: run after structural edits and compile_bp. Check result.success, mesh_applied and field_applied.

**Cuándo usarla:** Para meter un mesh propio en el mod.

**Requisitos:** Archivo FBX local; si se pasa item, el tipo de workspace selecciona el script de importacion automaticamente.

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `file` (string, obligatorio) — Absolute local FBX path. Ask the user; never guess.
- `mesh_type` (string, opcional) — Static or Skeletal
- `item` (string, opcional) — Workspace item ID; picks the import script for its type
- `component` (string, opcional) — BUILD only. Component name to apply the mesh to.
- `field` (string, opcional) — CAZ Set/AttachedAccessory only: workspace field to assign the mesh to (e.g. Mesh). CAZ garment/hair: set the Mesh field to the returned i...

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: importar un FBX o textura al proyecto

**Herramientas relacionadas:** ninguna mencionada en el volcado
