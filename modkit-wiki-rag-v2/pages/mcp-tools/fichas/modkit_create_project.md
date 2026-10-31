---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: proyecto
tools: [modkit_create_project]
wiki_refs: []
---

## modkit_create_project

**Servidor:** inzoi-modkit | **Dominio:** proyecto

**Qué hace:** Crea un proyecto de mod nuevo.

**Descripción actual del MCP:** Create a mod project; returns plugin_name for later calls. Never call again after a success (creates duplicates).

**Cuándo usarla:** Unicamente cuando el usuario ha declarado el nombre del proyecto y no se ha creado ya antes.

**Requisitos:** Nombre del proyecto confirmado por el usuario; no llamarlo dos veces (crearia proyectos duplicados).

**Parámetros clave:**
- `name` (string, obligatorio) — Project name; ask the user, never invent one
- `author` (string, opcional) — Author name
- `desc` (string, opcional) — Project description

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un proyecto y sus workspaces

**Herramientas relacionadas:** ninguna mencionada en el volcado
