---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: assets
tools: [modkit_set_vehicle_movement]
wiki_refs: []
---

## modkit_set_vehicle_movement

**Servidor:** inzoi-modkit | **Dominio:** assets

**Qué hace:** Fija los parametros de conduccion (velocidad maxima, aceleracion, frenado, direccion) del vehiculo.

**Descripción actual del MCP:** Set driving parameters (movement component `MovementSetting`) of a VEHICLE workspace; use this, not modkit_set_data. Any invalid field rejects the whole call without writing; the error lists the valid fields. All types: `MaxForwardVelocity`, `MaxReverseVelocity`, `Acceleration`, `ReverseAcceleration`, `BrakeDeceleration`, `NaturalDeceleration`, `SlideDecelertaion` (sic), `MaxWheelAngle`, `MaxWheelRotateTime`, `MaxWheelReturnRotateTime`, `SteeringSensitivity`. Motorcycle/bicycle add `ReverseSteeringScale`, `MaxLeanAngle`, `LeanSpeed`; ship adds `MaxBankingAngle`, `MaxPitchingAngle`, `BankingSpeed`. Units: cm/s (1500 ~ 54 km/h), degrees, seconds. Values vary widely per vehicle: read current ones with modkit_get_row(table="ObjectBP", id=<BP id>) and adjust from those. Cars/motorcycles ignore them in Advanced Driving Mode; simulation traffic is never affected.

**Cuándo usarla:** Para cambiar el comportamiento de conduccion.

**Requisitos:** No estan en las tablas Vehicle ni VehicleTemplate: viven en el componente de movimiento como struct MovementSetting capturado en la fila ObjectBP; fields como entrada estructurada (documentado en el volcado).

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Vehicle workspace Id
- `fields` (object, obligatorio) — Field/number pairs, e.g. {"MaxForwardVelocity": 1800}

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: editar un vehículo en el ModKit

**Herramientas relacionadas:** `modkit_get_row`, `modkit_set_data`
