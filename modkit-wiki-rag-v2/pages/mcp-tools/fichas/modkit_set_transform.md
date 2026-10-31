---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: assets
tools: [modkit_set_transform]
wiki_refs: []
---

## modkit_set_transform

**Servidor:** inzoi-modkit | **Dominio:** assets

**Qué hace:** Fija la transformada de un componente (posicion, rotacion, escala).

**Descripción actual del MCP:** Set a component's position, rotation (degrees) and scale.

**Cuándo usarla:** Para colocar un componente en el objeto.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Workspace item ID
- `name` (string, obligatorio) — component name
- `x` (number, opcional) — X position
- `y` (number, opcional) — Y position
- `z` (number, opcional) — Z position
- `pitch` (number, opcional) — Pitch
- `yaw` (number, opcional) — Yaw
- `roll` (number, opcional) — Roll
- `sx` (number, opcional) — X scale
- `sy` (number, opcional) — Y scale
- `sz` (number, opcional) — Z scale

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: construir un objeto BUILD (mesh, componentes, transformadas)

**Herramientas relacionadas:** ninguna mencionada en el volcado
