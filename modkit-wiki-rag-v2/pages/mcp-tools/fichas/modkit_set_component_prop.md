---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: assets
tools: [modkit_set_component_prop]
wiki_refs: []
---

## modkit_set_component_prop

**Servidor:** inzoi-modkit | **Dominio:** assets

**Qué hace:** Fija un par clave/valor de PropertyMetaData en un componente.

**Descripción actual del MCP:** Sets a PropertyMetaData key/value on a component.

**Cuándo usarla:** Para ajustar metadatos de un componente concreto.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Workspace item ID
- `name` (string, obligatorio) — component name
- `key` (string, obligatorio) — property key
- `value` (string, obligatorio) — property value

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: construir un objeto BUILD (mesh, componentes, transformadas)

**Herramientas relacionadas:** ninguna mencionada en el volcado
