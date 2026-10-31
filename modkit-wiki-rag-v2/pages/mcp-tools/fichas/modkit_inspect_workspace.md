---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: validación
tools: [modkit_inspect_workspace]
wiki_refs: []
---

## modkit_inspect_workspace

**Servidor:** inzoi-modkit | **Dominio:** validación

**Qué hace:** Inspecciona el estado actual del workspace: metadatos de campos (nombre/categoria/importancia), valores actuales y por defecto, estado de fijacion, porcentaje de completitud y pasos siguientes recomendados.

**Descripción actual del MCP:** Report a workspace's fields (metadata, current/default values, set state), completion_percent, summary and recommended_next_steps. Use after creation or while editing to find unfilled required fields. Supported only for CAZ Set and AttachedAccessory workspaces; other types return "does not support inspection".

**Cuándo usarla:** Tras crear un workspace para ver los campos obligatorios que faltan, o durante la edicion para ver que queda por rellenar.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Project plugin name
- `item` (string, obligatorio) — Workspace item ID

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: validar y empaquetar el mod

**Herramientas relacionadas:** ninguna mencionada en el volcado
