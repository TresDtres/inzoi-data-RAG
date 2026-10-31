---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-ui
tools: [modkit_list_uimod_cli_categories]
wiki_refs: []
---

## modkit_list_uimod_cli_categories

**Servidor:** inzoi-modkit | **Dominio:** authoring-ui

**Qué hace:** Lista de solo lectura todas las categorias de comandos CLI con su numero de comandos, desde cli_catalog.json.

**Descripción actual del MCP:** List CLI command categories with counts (`categories: [{category, count}]`). Use for exact `category` values in `modkit_list_uimod_cli_commands`.

**Cuándo usarla:** Primero paso para descubrir valores validos de category antes de filtrar con modkit_list_uimod_cli_commands; los nombres de categoria son exactos.

**Requisitos:** no documentado en el volcado

**Parámetros clave:** Sin parámetros documentados en el volcado.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de UI en el editor del ModKit

**Herramientas relacionadas:** `modkit_list_uimod_cli_commands`
