---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: validación
tools: [modkit_validate_workspace]
wiki_refs: []
---

## modkit_validate_workspace

**Servidor:** inzoi-modkit | **Dominio:** validación

**Qué hace:** Valida si un workspace esta listo para guardar/empaquetar: detecta campos obligatorios vacios, problemas de formato y, en workspaces CAZ repartidos en dos tablas, valores divergentes entre ambas.

**Descripción actual del MCP:** Check whether a workspace is ready to save/package: missing required fields, format problems, and for CAZ items stored in two tables (e.g. GarmentFullMesh + GarmentFull) values that drifted apart. Drift is an error (broken item in game) and is invisible in the UI, which shows only the mesh table. Field checks run only for CAZ Set and AttachedAccessory. Other two-table CAZ types (garments, Shoes/Socks/Stockings, Hat, Hair, Face) get the drift check only; any other workspace type returns an error. Run before saving or packaging. If ready_to_package is false, fix `issues` first.

**Cuándo usarla:** Antes de guardar o empaquetar.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Project plugin name
- `item` (string, obligatorio) — Workspace item ID
- `repair` (boolean, opcional) — Before validating, re-sync two-table drift from the mesh table and add a `repaired` count. Never fills missing fields.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: validar y empaquetar el mod

**Herramientas relacionadas:** ninguna mencionada en el volcado
