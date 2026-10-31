---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: assets
tools: [modkit_set_vehicle_mesh]
wiki_refs: [pages/modkit/project/vehicle/03-appearance.chunks/part-002.md]
---

## modkit_set_vehicle_mesh

**Servidor:** inzoi-modkit | **Dominio:** assets

**Qué hace:** Reemplaza el mesh de un slot de mesh del vehiculo, aplicandose en runtime sobre los datos del ObjectBP sin tocar el Blueprint del vehiculo.

**Descripción actual del MCP:** Replace a mesh slot's mesh on a VEHICLE workspace (ObjectBP override; the Blueprint is untouched). The distant/traffic body `Vehicle.StaticMeshAsset` is separate: set it with modkit_set_data(data="Vehicle", field="StaticMeshAsset") for a consistent look.

**Cuándo usarla:** Para cambiar la carroceria o una pieza del vehiculo.

**Requisitos:** mesh como ruta de asset (/Game/...); importar antes un FBX con modkit_import_mesh (sin item/component) para obtener la ruta; dejar mesh vacio vacia el slot (documentado en el volcado).

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Vehicle workspace Id
- `component` (string, obligatorio) — component_name from 'slots'
- `mesh` (string, opcional) — Asset path, e.g. the imported_path returned by modkit_import_mesh (call it without item/component). Empty writes None: the part disappear...

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: editar un vehículo en el ModKit

**Herramientas relacionadas:** `look`, `modkit_set_data`
