---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: empaquetado
tools: [modkit_package]
wiki_refs: [pages/modkit/project/vehicle/07-bounds-and-audio.chunks/part-002.md]
---

## modkit_package

**Servidor:** inzoi-modkit | **Dominio:** empaquetado

**Qué hace:** Empaqueta el proyecto de mod localmente. Se ejecuta de forma asincrona y devuelve inmediatamente ('packaging_started'); la finalizacion se ve en el area de notificaciones del editor.

**Descripción actual del MCP:** Package a mod project locally. Runs async: returns "packaging_started" at once; completion shows in the editor notifications.

**Cuándo usarla:** Antes de abrir la ventana de subida de CurseForge o de construir un zip manual.

**Requisitos:** Workspace validado (modkit_validate_workspace); esperar la notificacion del editor antes del paso siguiente.

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `output_dir` (string, opcional) — Output path; empty = default

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: validar, empaquetar y publicar en CurseForge

**Herramientas relacionadas:** ninguna mencionada en el volcado
