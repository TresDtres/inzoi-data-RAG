---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: proyecto
tools: [modkit_list_cultures]
wiki_refs: []
---

## modkit_list_cultures

**Servidor:** inzoi-modkit | **Dominio:** proyecto

**Qué hace:** Devuelve las culturas (idiomas) disponibles para crear un workspace Language: [{name, display_name, native_name},...].

**Descripción actual del MCP:** List cultures for Language workspaces; offer them when asking the user for source_culture / target_culture. Returns [{name, display_name, native_name}]; pass `name` verbatim to add_workspace.

**Cuándo usarla:** Antes de modkit_add_workspace con book_class='Language', para elegir source_culture / target_culture.

**Requisitos:** El codigo (name, p. ej. 'en', 'ko', 'ja') se pasa sin cambios a modkit_add_workspace.

**Parámetros clave:**
- `all` (boolean, opcional) — Return every ICU culture, not only those enabled in game (others may not work in mods)

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un proyecto y sus workspaces

**Herramientas relacionadas:** ninguna mencionada en el volcado
