---
source: mcp-tools
server: blender
dump_version: blender.json (protocol 2024-11-05, 9 tools)
generado: 2026-10-31
categoria: ficha
dominio: blender-export
tools: [get_addon_status]
wiki_refs: []
---

## get_addon_status

**Servidor:** blender | **Dominio:** blender-export

**Qué hace:** Comprueba el Blender conectado: su version, si el addon coincide con este servidor y que librerias de assets y generadores 3D estan activados. Indica como actualizar el addon con 'uvx mcp-for-blender install-addon' si esta desactualizado.

**Descripción actual del MCP:** Check the connected Blender: its version, whether the addon matches this server, and which asset libraries and 3D generators are switched on. Call it once at the start. `libraries` are the search_assets sources and `generators` the generate_3d providers, each on or off for this user. "(Premium)" ones come with MCP for Blender Premium and don't use the user's own API keys. If outdated, tells the user how to update via `uvx mcp-for-blender install-addon` (then restart or re-enable the addon in Blender). `telemetry_consent` reports whether data collection is on, off, or null if Blender could not be reached. Use it to answer telemetry status questions.

**Cuándo usarla:** Llamarla una vez al inicio de cualquier sesion con Blender.

**Requisitos:** Blender abierto con el addon MCP activado (segun la descripcion del volcado).

**Parámetros clave:**
- `user_prompt` (string, opcional)

**Devuelve:** Valor de tipo `object` según el volcado; esquema con propiedades: result

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: preparar assets en Blender (escena, generación, búsqueda e importación)

**Herramientas relacionadas:** `generate_3d`, `search_assets`
