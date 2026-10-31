---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: assets
tools: [modkit_remove_component]
wiki_refs: []
---

## modkit_remove_component

**Servidor:** inzoi-modkit | **Dominio:** assets

**Qué hace:** Elimina un componente del blueprint.

**Descripción actual del MCP:** Remove a blueprint component. Finish all add/remove edits, then call modkit_compile_bp.

**Cuándo usarla:** Cuando un componente sobra.

**Requisitos:** Misma regla de ordenacion: estructura - compile_bp - propiedades.

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Workspace item ID
- `name` (string, obligatorio) — component name

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: construir un objeto BUILD (mesh, componentes, transformadas)

**Herramientas relacionadas:** `modkit_compile_bp`
