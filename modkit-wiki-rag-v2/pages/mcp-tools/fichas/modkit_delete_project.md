---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: proyecto
tools: [modkit_delete_project]
wiki_refs: []
---

## modkit_delete_project

**Servidor:** inzoi-modkit | **Dominio:** proyecto

**Qué hace:** Borra un proyecto de mod y todos sus workspaces de forma inmediata, sin dialogo de confirmacion. Irreversible.

**Descripción actual del MCP:** Delete a mod project and all its workspaces immediately. ⚠️ Irreversible: only after the user confirms. Sample_Build / Sample_CAZ are protected (server rejects); when deleting everything, skip them and say so. One delete per message; wait for its response before the next. modkit_list_projects may lag after deletes: trust the success response and check the list once at the end.

**Cuándo usarla:** Solo cuando el usuario confirma explicitamente el borrado.

**Requisitos:** Confirmacion explicita del usuario.

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name

**Devuelve:** Observado en vivo 2026-10-09 (pages/local/verificaciones-2026-10-09.md, V15): responde el literal 'Success' pero la carpeta del proyecto queda en disco con ~7 MB de residuos (patches autosave en Content/JsonPatch, POs de Intermediate/Localization, .uplugin y Meta/); hay que borrarla manualmente.

**Errores típicos:** Sample_Build y Sample_CAZ son muestras integradas del ModKit protegidas: el servidor rechaza su borrado.

**Forma parte de:** WF: crear un proyecto y sus workspaces

**Herramientas relacionadas:** `modkit_list_projects`
