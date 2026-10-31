---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: assets
tools: [modkit_set_mesh]
wiki_refs: []
---

## modkit_set_mesh

**Servidor:** inzoi-modkit | **Dominio:** assets

**Qué hace:** Cambia el mesh de un componente de mesh concreto.

**Descripción actual del MCP:** Change the mesh of a mesh component. Compile resets it, so set it after any compile_bp.

**Cuándo usarla:** Tras importar un FBX, para colocar el mesh en el componente correcto.

**Requisitos:** Regla de orden del volcado: cambios de estructura - modkit_compile_bp - esta herramienta.

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Workspace item ID
- `component` (string, obligatorio) — component name
- `mesh` (string, obligatorio) — mesh asset path

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: construir un objeto BUILD (mesh, componentes, transformadas)

**Herramientas relacionadas:** ninguna mencionada en el volcado
