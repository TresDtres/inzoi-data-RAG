---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: proyecto
tools: [modkit_save]
wiki_refs: []
---

## modkit_save

**Servidor:** inzoi-modkit | **Dominio:** proyecto

**Qué hace:** Guarda el proyecto de mod actual.

**Descripción actual del MCP:** Save the mod project, including unsaved workspace edits (e.g. BUILD/VEHICLE ObjectBP edits). Call when the requested edits are done; never for edits the user wants thrown away (modkit_discard).

**Cuándo usarla:** Al final de cada bloque de edicion, antes de previsualizar o empaquetar.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `overwrite` (boolean, opcional) — Save over data changed outside the workspace since editing started (external_changes). Only after the user agrees.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un proyecto y sus workspaces

**Herramientas relacionadas:** `modkit_discard`
