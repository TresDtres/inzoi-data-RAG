---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: assets
tools: [modkit_compile_bp]
wiki_refs: []
---

## modkit_compile_bp

**Servidor:** inzoi-modkit | **Dominio:** assets

**Qué hace:** Compila el blueprint de mod. La compilacion puede resetear valores de propiedades fijados antes.

**Descripción actual del MCP:** Compile the workspace blueprint. Compiling resets properties set earlier: finish all structural edits, compile, then set properties.

**Cuándo usarla:** Tras completar todos los cambios de estructura (anadir/quitar componentes) y antes de aplicar cambios de propiedades.

**Requisitos:** Completar antes los cambios estructurales (regla de ordenacion del volcado: estructura - compile_bp - propiedades).

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Workspace item ID

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: construir un objeto BUILD (mesh, componentes, transformadas)

**Herramientas relacionadas:** ninguna mencionada en el volcado
