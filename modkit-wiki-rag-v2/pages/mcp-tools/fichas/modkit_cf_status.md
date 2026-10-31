---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: empaquetado
tools: [modkit_cf_status]
wiki_refs: []
---

## modkit_cf_status

**Servidor:** inzoi-modkit | **Dominio:** empaquetado

**Qué hace:** Comprueba el estado del SDK de subida a CurseForge (cfcore); si hay sesion iniciada, devuelve tambien la informacion del usuario (email/username/display_name).

**Descripción actual del MCP:** Check CurseForge SDK (cfcore) init and auth state; includes user info when authenticated. Call before CF work and after modkit_cf_verify_code. - initialized=false: cfcore not ready (editor just started or cfeditor disabled); retry shortly. - authenticated=false: sign in via modkit_cf_send_code → modkit_cf_verify_code.

**Cuándo usarla:** Antes de empezar cualquier trabajo de subida a CurseForge, para verificar el estado de autenticacion.

**Requisitos:** no documentado en el volcado

**Parámetros clave:** Sin parámetros documentados en el volcado.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: validar, empaquetar y publicar en CurseForge

**Herramientas relacionadas:** `modkit_cf_send_code`, `modkit_cf_verify_code`
