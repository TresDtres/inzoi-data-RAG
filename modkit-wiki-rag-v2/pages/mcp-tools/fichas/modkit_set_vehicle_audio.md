---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: assets
tools: [modkit_set_vehicle_audio]
wiki_refs: [pages/modkit/project/vehicle/07-bounds-and-audio.chunks/part-002.md]
---

## modkit_set_vehicle_audio

**Servidor:** inzoi-modkit | **Dominio:** assets

**Qué hace:** Fija los MetaSounds de motor/principal, spawn y despawn del vehiculo; cada uno es una ruta de asset MetaSoundSource (/Game/...).

**Descripción actual del MCP:** Set engine/spawn/despawn MetaSounds of a VEHICLE workspace. Stored in the `DA_Vehicle` DataAsset keyed by `VehicleTemplateId`, so vehicles sharing a template share audio. New/duplicate vehicles get their own template on the first change; isolate a reskin first with modkit_create_vehicle_template. Omitted or empty fields keep the current value; removing a sound requires editing the DA_Vehicle workspace.

**Cuándo usarla:** Para cambiar el sonido del vehiculo.

**Requisitos:** El audio no es una tabla de datos: vive en el DataAsset DA_Vehicle (parche DA, mod_DA_Vehicle.json) indexado por VehicleTemplateId, por lo que los vehiculos que comparten plantilla comparten audio (documentado en el volcado).

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Vehicle workspace Id
- `main_sound` (string, opcional) — Engine MetaSoundSource path (/Game/...)
- `spawn_sound` (string, opcional) — Spawn MetaSoundSource path
- `despawn_sound` (string, opcional) — Despawn MetaSoundSource path

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: editar un vehículo en el ModKit

**Herramientas relacionadas:** `modkit_create_vehicle_template`
