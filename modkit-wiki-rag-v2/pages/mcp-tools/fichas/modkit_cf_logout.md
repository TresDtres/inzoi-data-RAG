---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: empaquetado
tools: [modkit_cf_logout]
wiki_refs: []
---

## modkit_cf_logout

**Servidor:** inzoi-modkit | **Dominio:** empaquetado

**Qué hace:** Elimina el token de autenticacion almacenado de CurseForge.

**Descripción actual del MCP:** Remove the stored CurseForge auth token. Safe when already logged out (status 'already_logged_out').

**Cuándo usarla:** Cuando el usuario pide cerrar sesion o desvincular la cuenta.

**Requisitos:** no documentado en el volcado

**Parámetros clave:** Sin parámetros documentados en el volcado.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** Ninguno relevante: seguro llamarlo sin sesion iniciada (devuelve 'already_logged_out', no es un error).

**Forma parte de:** WF: validar, empaquetar y publicar en CurseForge

**Herramientas relacionadas:** ninguna mencionada en el volcado
