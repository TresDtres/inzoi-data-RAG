---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-ui
tools: [modkit_list_uimod_files]
wiki_refs: []
---

## modkit_list_uimod_files

**Servidor:** inzoi-modkit | **Dominio:** authoring-ui

**Qué hace:** Lista recursivamente todos los archivos de la carpeta de una app ({Plugin}/ui/{app}/): [{path, size, abs_path},...] con rutas relativas separadas por '/'.

**Descripción actual del MCP:** Recursively list files in `{Plugin}/ui/{app}/`: `[{path, size, abs_path}]`, `path` relative with `/`.

**Cuándo usarla:** Para explorar que archivos componen una app.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `app` (string, obligatorio) — App name

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de UI en el editor del ModKit

**Herramientas relacionadas:** ninguna mencionada en el volcado
