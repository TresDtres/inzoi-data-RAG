---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: assets
tools: [modkit_add_component]
wiki_refs: []
---

## modkit_add_component

**Servidor:** inzoi-modkit | **Dominio:** assets

**Qué hace:** Anade un componente nuevo al blueprint.

**Descripción actual del MCP:** Add a component to the blueprint. Finish all add/remove edits, then call modkit_compile_bp.

**Cuándo usarla:** Cuando el objeto necesita un componente adicional (mesh, luz, etc.).

**Requisitos:** Regla de orden del volcado: completar primero todos los add/remove de componentes, luego modkit_compile_bp, luego los cambios de propiedades.

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Workspace item ID
- `name` (string, obligatorio) — component name
- `component_class` (string, obligatorio) — UE component class (e.g. StaticMeshComponent)
- `parent` (string, opcional) — Parent component name (empty = root)

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: construir un objeto BUILD (mesh, componentes, transformadas)

**Herramientas relacionadas:** `modkit_compile_bp`
