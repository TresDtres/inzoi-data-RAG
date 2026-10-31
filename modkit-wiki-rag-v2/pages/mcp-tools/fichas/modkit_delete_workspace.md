---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: proyecto
tools: [modkit_delete_workspace]
wiki_refs: []
---

## modkit_delete_workspace

**Servidor:** inzoi-modkit | **Dominio:** proyecto

**Qué hace:** Borra un workspace de forma inmediata, sin confirmacion. Irreversible.

**Descripción actual del MCP:** Delete a workspace immediately. ⚠️ Irreversible: only after the user confirms. One delete per message; wait for its response before the next.

**Cuándo usarla:** Solo cuando el usuario confirma explicitamente el borrado.

**Requisitos:** Confirmacion del usuario; nunca en paralelo: un borrado, esperar respuesta, y el siguiente.

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Workspace item ID

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** El volcado prohibe agrupar varias llamadas de borrado en un mismo mensaje.

**Forma parte de:** WF: crear un proyecto y sus workspaces

**Herramientas relacionadas:** ninguna mencionada en el volcado
