---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: validación
tools: [modkit_validate_uimod]
wiki_refs: []
---

## modkit_validate_uimod

**Servidor:** inzoi-modkit | **Dominio:** validación

**Qué hace:** Valida estaticamente las apps UIMod de un plugin (analogo a modkit_validate_workspace pero para UIMods basados en archivos). Causa tipica de que una app no aparezca en el juego: enabled:false en uimod_apps.json, carpeta huerfana con manifest, o manifest invalido.

**Descripción actual del MCP:** Read-only check for why a UIMod app does not show in game: disabled or unregistered apps, manifest errors (in-game parser rules), `index.html` missing or misordering `cohtml.js`/`inzoi-sdk.js`, and `inzoi.cli.execute` ids absent from `cli_catalog.json`. Check `error_count` and `issues[]` (`severity`, `field_name` = app, `message`, `suggested_action`). `ready_to_package` (only when `app` is omitted) is true when every app passes. A clean result is not a request to preview; follow the preview rule in modkit_start_uimod_preview.

**Cuándo usarla:** Cuando una app UI no aparece en el juego o antes de empaquetar.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `app` (string, opcional) — Validate only this app; omit for all.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: validar y empaquetar el mod

**Herramientas relacionadas:** `modkit_start_uimod_preview`
