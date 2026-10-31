---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: assets
tools: [modkit_set_vehicle_dimensions]
wiki_refs: [pages/modkit/project/vehicle/07-bounds-and-audio.chunks/part-002.md]
---

## modkit_set_vehicle_dimensions

**Servidor:** inzoi-modkit | **Dominio:** assets

**Qué hace:** Fija el tamano total de la caja englobante y el offset del origen de la caja (en cm) del vehiculo. No se recalcula solo al cambiar el mesh: hay que fijarlo manualmente si un reskin cambia el tamano global.

**Descripción actual del MCP:** Set a VEHICLE workspace's bounding box size and origin offset (cm). Not recomputed on mesh swap; set it if a reskin changes overall size. Omitted values become 0.

**Cuándo usarla:** Tras un cambio de mesh que altera las dimensiones.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Vehicle workspace Id
- `x` (number, opcional) — Size X
- `y` (number, opcional) — Size Y
- `z` (number, opcional) — Size Z
- `ox` (number, opcional) — Origin offset X
- `oy` (number, opcional) — Origin offset Y
- `oz` (number, opcional) — Origin offset Z

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: editar un vehículo en el ModKit

**Herramientas relacionadas:** ninguna mencionada en el volcado
