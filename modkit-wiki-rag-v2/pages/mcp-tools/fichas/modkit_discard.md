---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: proyecto
tools: [modkit_discard]
wiki_refs: []
---

## modkit_discard

**Servidor:** inzoi-modkit | **Dominio:** proyecto

**Qué hace:** Descarta los cambios sin guardar de un item del workspace y restaura el ultimo estado guardado.

**Descripción actual del MCP:** Discard a workspace's unsaved edits, reverting to the last save. ⚠️ Irreversible: only after the user chooses to discard.

**Cuándo usarla:** Solo despues de que el usuario haya elegido explicitamente descartar los cambios.

**Requisitos:** Identificar el plugin y el item del workspace. La accion es irreversible.

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Workspace item ID

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un proyecto y sus workspaces

**Herramientas relacionadas:** ninguna mencionada en el volcado
