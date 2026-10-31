---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: proyecto
tools: [modkit_list_projects]
wiki_refs: []
---

## modkit_list_projects

**Servidor:** inzoi-modkit | **Dominio:** proyecto

**Qué hace:** Devuelve todos los proyectos de mod cargados. Por defecto una lista ligera de nombres de plugin; con verbose=true, objetos con plugin_name, display_name y author.

**Descripción actual del MCP:** List loaded mod projects as plugin_name strings.

**Cuándo usarla:** Al empezar una sesion para ver que proyectos existen, o antes de crear uno nuevo.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `verbose` (boolean, opcional) — Return [{plugin_name, display_name?, author?}] instead

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un proyecto y sus workspaces

**Herramientas relacionadas:** ninguna mencionada en el volcado
