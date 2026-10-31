---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: assets
tools: [modkit_create_vehicle_template]
wiki_refs: [pages/modkit/project/vehicle/04-animation.chunks/part-003.md, pages/modkit/project/vehicle/07-bounds-and-audio.chunks/part-002.md]
---

## modkit_create_vehicle_template

**Servidor:** inzoi-modkit | **Dominio:** assets

**Qué hace:** Duplica la VehicleTemplate compartida de un workspace VEHICLE a <Id>_NewTemplate, reasigna Vehicle.VehicleTemplateId a la copia y abre el editor de datos.

**Descripción actual del MCP:** Duplicate a VEHICLE workspace's shared `VehicleTemplate` to `<Id>_NewTemplate`, re-point `Vehicle.VehicleTemplateId` and open the data editor. Use only to isolate template values (dimensions, crash mass, part lists) or audio on a reskin; not needed for appearance-only mods.

**Cuándo usarla:** Solo cuando se necesitan valores funcionales aislados (dimensiones, masa de choque, listas de piezas) o audio por vehiculo en un reskin que normalmente comparte plantilla.

**Requisitos:** Workspace VEHICLE existente.

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Vehicle workspace Id

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: editar un vehículo en el ModKit

**Herramientas relacionadas:** ninguna mencionada en el volcado
